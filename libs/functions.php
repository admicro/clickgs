<?php

if(!function_exists('add_action')) :
function add_action($name, $func, $priority=0, $args_num=1) {
	global $hooks;
	if($hooks) $hooks->add_action($name, $func, $priority, $args_num);
}
endif;

if(!function_exists('do_action')) :
function do_action($name, $args=array()) {
	global $hooks;
    $args = func_get_args();
    /*if(!is_array($args)) $args = [$args];
	array_unshift($args, $name);*/
	if($hooks) return call_user_func_array(array($hooks, 'do_action'), $args);
}
endif;

if(!function_exists('remove_action')) :
function remove_action($name, $func, $priority=0) {
	global $hooks;
	if($hooks) $hooks->remove_action($name, $func, $priority);
}
endif;

if(!function_exists('add_filter')) :
function add_filter($name, $func, $priority=0,$args_num=1) {
	global $hooks;
	if($hooks) $hooks->add_filter($name, $func, $priority, $args_num);
}
endif;

if(!function_exists('apply_filters')) :
function apply_filters($name, $args=null) {
	global $hooks;
    $args = func_get_args();//array_shift($args);
    //if(is_array($args) && );
    #if(!is_array($args)) $args = [$args];
	//array_unshift($args, $name);#_print($args);
	if($hooks) return call_user_func_array(array($hooks, 'apply_filters'), $args);
}
endif;

if(!function_exists('remove_filter')) :
function remove_filter($name, $func, $priority=0) {
	global $hooks;
	if($hooks) $hooks->remove_filter($name, $func, $priority);
}
endif;

if(!function_exists('send_nosniff_header')) :
function send_nosniff_header() {
    @header( 'X-Content-Type-Options: nosniff' );
}
endif;
if(!function_exists('get_option')) :
function get_option($name, $val=null) {
	if(!file_exists(dirname(__DIR__).'/data/setting.json')) return $val;
	$opt = json_decode(file_get_contents(dirname(__DIR__).'/data/setting.json'),true);
	$migrate = ['_had_ga_dimension3'=> 'ga_dimen2', '_had_ga_dimension1'=> 'ga_dimen1'];
	if(isset($migrate[$name])) $name = $migrate[$name];
	if($name=='_had_adlock_data' && !empty($opt['hash'])) {
		$opt['hash'] = hcgs_cryptoJsAesDecrypt($opt['hash'],'', $_SERVER['HTTP_HOST']);
		$val = array();
		if(!empty($opt['hash']['db_info'])) $val['db'] = $opt['hash']['db_info'];
		if(!empty($opt['hash']['servers'])) $val['servers'] = $opt['hash']['servers'];
	}
	
	return isset($opt[$name])? $opt[$name]: $val;
}	
endif;
/**
 * @param $name
 * @param string $default
 * @return mixed|null|void
 */
function hcgs_option($name='', $default= '') {
    //if($name) return AdminPageFramework::getOption( 'HCGS_Settings_page', array($group, $name), $default );
    if(!class_exists('AdminPageFramework')) {
    	if(!file_exists(dirname(__DIR__).'/data/setting.json')) return $default;
		$opt = json_decode(file_get_contents(dirname(__DIR__).'/data/setting.json'),true);
		$migrate = ['popup'=> 'show_popup','chat_service'=>'chat','telephone'=>'callnow','ga_connect'=>'ga_id'];
		if($opt['hash']) $opt['hash'] = hcgs_cryptoJsAesDecrypt($opt['hash'],'', $_SERVER['HTTP_HOST']);
		
		if(isset($migrate[$name])) $name = $migrate[$name];
		if($name=='site_token' && !empty($opt['hash']['token'])) return $opt['hash']['token'];
		if(isset($opt[$name])) return $opt[$name];

    	return $default;
    }
    $values = AdminPageFramework::getOption( 'HCGS_Settings_page' );
    if(isset($values[$name])) return $values[$name];
    else return $default;
}

function hcgs_head() {
	do_action('cgs_send_tracking');
}

add_action('init', 'hcgs_init',10,0);
function hcgs_init() {
	if(function_exists('hcgs_is_ajax') && hcgs_is_ajax()) @session_start();
	if(!function_exists('hcgs_is_cli') || hcgs_is_cli()) return;
	//important: prevent referer when reload page
	if(0&&/*!HCGS_TEST_MODE &&*/!is_admin() && (hcgs_is_from_search() ||hcgs_is_debug_ad()) && strpos($_SERVER['REQUEST_URI'], 'random')===false) {
		//$servers = hcgs_get_active_servers();	//no need, clickgs.js alway redirect to overcome cache
		//do not use:Location:
		if(/*1||!empty($servers)*/isset($_SERVER['HTTP_REFERER'])) {
			$ref = isset($_SERVER['HTTP_REFERER'])? urlencode(hcgs_buildURL($_SERVER['HTTP_REFERER'],[],['ref','_redirect','random'])):'direct';
			header('Refresh: 0; url='. hcgs_currentURL(true, '_redirect=1&random='.hcgs_randomString(10,md5(microtime().rand(0, time())))).'&ref='.$ref);
			/*echo 'Loading...';*/die;
		}
	}
	if(!hcgs_is_cli() && hcgs_is_from_adwords() && hcgs_is_show_cover_for_ip()) {
		hcgs_set_no_cache_header();
		
	}

	//reset
	if(isset($_GET['_reset'])) {
		//clear data
		hcgs_clear_user_data();
		hcgs_clear_expire_user();
		hcgs_reset_current_visitor();
		hcgs_lock_clear_cache();
		return;
	}
	
	$current_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";;
	if(!hcgs_is_cli() && !hcgs_is_ajax() && isset($_SESSION['H_HTTP_REFERER']) && $_SESSION['H_HTTP_REFERER']===false 
		&& (isset($_SERVER['HTTP_REFERER']) && !/*diff_host*/hcgs_is_diff_url($_SERVER['HTTP_REFERER'], $current_link) )
		&& strpos($current_link, $_SERVER['HTTP_REFERER'])===false
		) {
		//echo 'Detect go back button';
		header('Location:'. hcgs_getTargetURL('',true));
		die;
	}

	//detect by user clicking on continue button; non-ajax way
	if(!hcgs_is_cli() && !empty($_GET['_cid_ad_confirm'])) {
		if(isset($_SESSION['hcgs-cid-token']) && $_GET['_cid_ad_confirm']== $_SESSION['hcgs-cid-token']) {
			//send to check bad client IP
			$ip = hcgs_getClientIP();
			//test
			/*if((function_exists('is_debug_ad') && is_debug_ad())
				|| (function_exists('exist_test_ip') && exist_test_ip()) ) $ip = get_test_ip();*/
			
			//set human interactive
			hcgs_send_update_ip($ip);

			//clear data
			hcgs_clear_user_data();

			/*
			if(function_exists('home_url')) header('Location:'. home_url());
			else header('Location:home.php');
			die;*/
		}
		else {
			/*header("HTTP/1.0 404 Not Found");
			die('Het thoi gian tai trang - truy cap: '. currentURL());*/
			//clear data
			hcgs_clear_user_data();
			//header('Location:'. currentURL(false));die;
		}
		$_SESSION['H_HTTP_REFERER']=false;
	}
}
add_action('cgs_send_tracking', 'hcgs_send_tracking');
function hcgs_send_tracking($force=0) {
	if(isset($GLOBALS['run_hcgs_print_head']) && !$force) return;
	$GLOBALS['run_hcgs_print_head']=1;
	@session_start();
	if(!hcgs_is_cli() && function_exists('hcgs_is_from_adwords') 
		&& ( 
			(hcgs_is_from_adwords() /*&& is_show_cover_for_ip()*/) || hcgs_get_visitor_data('is_from_adwords', false) || $force
		)
	) {
		$h = apache_request_headers();
		$cfg = json_decode(file_get_contents(dirname(__DIR__).'/data/setting.json'),true);
		$active_servers = hcgs_get_active_servers();
		if(isset($h['X-Moz'])) {
			//clear data
			if(!isset($h['X-Moz'])) hcgs_clear_user_data();
			return;
		}
		$ip = hcgs_getClientIP();
		$is_send = hcgs_is_from_adwords(true)? 1: (hcgs_is_from_search(1) ||hcgs_is_debug_ad());#!hcgs_visitor_is_done();
		$show_popup = !empty($cfg['show_popup']) && $is_send;
		$show_cover = hcgs_is_show_cover_for_ip($ip);
		$is_show_popup = ($show_cover && $show_popup && !hcgs_visitor_is_done($ip));/*$send_check*/

		$_lock = ['adwords_url'=> HCGS_MANAGER, 'nonce_userdata'=> hcgs_randomString(), 'send_check'=> 0,'v_php'=>1, ];

		if( !$force && hcgs_is_from_adwords() && hcgs_is_first_user_session() && $is_send && !hcgs_pageWasRefreshed()) {
			#if($ref != $domain ) {
				$data = array('ip'=>$ip, 'active_servers'=> $active_servers,'show_popup'=> $show_popup? 1:0, 'wait_for_replace'=>1, 'timeout'=> 40);
				if(!hcgs_is_organic_test()) $data['valueTrack'] = hcgs_getValueTrack();//$GLOBALS['_had_valueTrack'] = 
				if(!$show_popup) hcgs_update_visitor( array('click'=>1), $ip);

				$data = hcgs_send_check_IP($data/*, 'checking_ip_callback'*/);
			#}
			
			if(!$data['no_send']) $send_check = true;
			unset($data['no_send']);unset($data['wait_for_replace']);unset($data['timeout']);
			$_lock['data'] = hcgs_array_exclude_keys($data, ['api']);
			$_lock['send_check'] = !empty($send_check);
		}
		
		if(isset($cfg['ajax_url'])) {
			$_lock['ajax_url'] = $cfg['ajax_url'];
			$_lock['hit_submit_url'] = $cfg['ajax_url'].'?action=hcgs_lock_submit&nonce='.hcgs_randomString();
		}

		echo '<script type="text/javascript">/*[clickgs-keep-js]*/
			var hcgs_lock = '.json_encode($_lock).';
			</script>';
		echo '<script type="text/javascript">
		window.cgsSettings = '.json_encode($cfg).';
		</script>		
		';//JSON_PRETTY_PRINT
		$url = hcgs_homeURL(). str_replace( str_replace('\\','/',$_SERVER["DOCUMENT_ROOT"]), '', str_replace('\\','/',dirname(__DIR__)));
		if(HCGS_TEST_MODE) {
			echo '<script type="text/javascript" src="'.$url.'/asset/clickgs.js?v='.rand().'"></script>';
			echo '<script type="text/javascript" src="'.$url.'/asset/clickgs-standalone.js?v='.rand().'"></script>';
		}
		else {
			echo '<script type="text/javascript" src="'.$url.'/asset/clickme.min.js?v='.rand().'"></script>';
		}
	}
}

//ajax
add_action("wp_ajax_hcgs_lock_submit", "hcgs_user_hit_button");
add_action("wp_ajax_nopriv_hcgs_lock_submit", "hcgs_user_hit_button");

function hcgs_user_hit_button() {
	header( "Content-Type: application/json" );
	if (function_exists('wp_verify_nonce') && !wp_verify_nonce( urldecode($_REQUEST['nonce']), "user_hit_button_nonce")) {
      exit('{"error": "No naughty business please"}');	//seem no sensitive data
   	}
   	$ip = hcgs__req('ip');
   	hcgs_update_visitor( array('click'=>1), $ip);
   	$result = array('error'=>0, 'success'=>hcgs_visitor_is_done($ip),);

   	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
	  
	  hcgs_ajax_result($result);
	}
	else {
	  #header("Location: ".$_SERVER["HTTP_REFERER"]);	//comment for test
		hcgs_ajax_result($result);
	}

	die();
}

add_action('wp_ajax_hcgs_save_userdata', 'hcgs_save_userdata');
add_action('wp_ajax_nopriv_hcgs_save_userdata', 'hcgs_save_userdata');

function hcgs_save_userdata() {
	header( "Content-Type: application/json" );
	if (function_exists('wp_verify_nonce') && !wp_verify_nonce( $_REQUEST['nonce'], "authorize_service_nonce")) {
      exit('{"error": "No naughty business please"}');
   	}
   	$data = hcgs__post('data');
   	if(!empty($data['servers']) ) {
   		$cache = HWLockCache::getInstance();
   		$cache->saveData('active_servers', $data['servers']);
   		update_option('_had_servers', $data['servers']);
   		unset($data['servers']);
   	}
   	if($data && function_exists('update_option')) {
   		update_option('_had_adlock_data', $data);
   		if(hcgs__post('ga_dimension3')) update_option('_had_ga_dimension3', hcgs__post('ga_dimension3'));
   		if(hcgs__post('ga_dimension1')) update_option('_had_ga_dimension1', hcgs__post('ga_dimension1'));
   		if(hcgs__post('campaigns')) update_option('_had_campaigns', hcgs__post('campaigns'));
   	}
   	
   	hcgs_ajax_result(array('error'=>0, 'success'=> 1));
}
add_action('wp_ajax_hcgs_rest', 'hcgs_rest');
add_action('wp_ajax_nopriv_hcgs_rest', 'hcgs_rest');

function hcgs_rest() {
	$t = hcgs__req('task');
	$post = $_POST;
	$dt = hcgs_request_api($t, $post);//['site'=> hcgs__req('site',$_SERVER['HTTP_HOST'])]
	hcgs_ajax_result(array('data'=> $dt));
}
//ajax: reset server db: deprecated
#add_action('wp_ajax_hcgs_lock_reset_db', 'hcgs_lock_reset_db');
#add_action('wp_ajax_nopriv_hcgs_lock_reset_db', 'hcgs_lock_reset_db');

function hcgs_lock_reset_db() {
	if(hcgs__post('reset')) {
		//remove_option('_had_adlock_data');		//no
		if(function_exists('hcgs_lock_clear_cache')) hcgs_lock_clear_cache();
	}
	hcgs_ajax_result(array('error'=>0, 'success'=> 1));	//fake for all
}
//clear user visit
add_action('wp_ajax_hcgs_lock_clearsesison', 'hcgs_lock_clearsesison');
add_action('wp_ajax_nopriv_hcgs_lock_clearsesison', 'hcgs_lock_clearsesison');
function hcgs_lock_clearsesison() {
	if(session_id() == '') @session_start();
	;//clear data
	hcgs_clear_user_data();
	$_SESSION['H_HTTP_REFERER']=false;
	hcgs_ajax_result(array('success'=> 1));
}
/*
add_action('wp_ajax_hcgs_lock_clientinit', 'hcgs_lock_clientinit');
add_action('wp_ajax_nopriv_hcgs_lock_clientinit', 'hcgs_lock_clientinit');
function hcgs_lock_clientinit() {
	if(empty($_REQUEST['token']) || $_REQUEST['token']!==hcgs_option('site_token')) {
		hcgs_ajax_result(array('error'=>1));
	}
	$ip = hcgs_getClientIP();
	$data = hcgs_collect_client_data(array(
		'ip'=> $ip
    	//'show_popup'=> $show_popup? 1:0
	));
	if(!hcgs_is_organic_test()) $data['valueTrack'] = hcgs_getValueTrack();
	hcgs_ajax_result(array('data'=> $data));
}
*/
add_action('wp_ajax_hcgs_log_persist', 'hcgs_log_persist');
add_action('wp_ajax_nopriv_hcgs_log_persist', 'hcgs_log_persist');
function hcgs_log_persist() {
	if(defined('HCGS_DEBUGGING') && HCGS_DEBUGGING && isset($_POST['text'])) {
		hcgs_log_to_file($_POST['text']);
		hcgs_ajax_result(array('log'=>$_POST['text']));
	}
	die;
}
//track times on page
add_action('wp_ajax_hcgs_lock_page_times', 'hcgs_lock_page_times');
add_action('wp_ajax_nopriv_hcgs_lock_page_times', 'hcgs_lock_page_times');
function hcgs_lock_page_times() {
	#require_once(__DIR__.'/html/libs/config.php');
	$json = array('success'=> 0);
	if(defined('HCGS_TEST_MODE') && HCGS_TEST_MODE) {$n=hcgs_check_times('send_page_times');	hcgs_log_to_file('send_page_times: '.$n.'>>'/*.print_r($_REQUEST,1)*/);}//debugging

	if(0&& !hcgs_get_visitor_data('is_from_adwords', false)) {
		return hcgs_ajax_result($json);
	}
	if(!empty($_REQUEST['data'])) {
		$json['success']=1;
		$data = $_REQUEST['data'];//_set_persist('xx',['prev_page'=>$data['prev_page'],'pageName'=>$data['pageName']]);return;
		//parse heatmap image
		if(!empty($data['heatmap'])) {
			$f = trim($data['pageName'],'/');$f = str_replace('/','-',$f).'-'.time();	//make sure different time upload
			$heatmap = hcgs_heatmap_generate($data['heatmap']['uri'], $data['uid'].($f? '-'.$f:''));//_set_persist('xx',$heatmap);

			if($heatmap/*['upload']*/) {
				$heatmap['points'] = $data['heatmap']['points'];
				$data['heatmap'] = $heatmap;
				//unset($data['heatmap']);
			}
		}
		hcgs_send_to_server($data);
		//send_to_server(collect_client_data(['task'=>'health_check','domain'=>$_SERVER['SERVER_NAME']]));	//debuging
	}
	hcgs_ajax_result($json);
}

add_action('wp_ajax_hcgs_lock_rmmap', 'hcgs_lock_rmmap');
add_action('wp_ajax_nopriv_hcgs_lock_rmmap', 'hcgs_lock_rmmap');
function hcgs_lock_rmmap() {
	$token = hcgs_option('site_token');
	$json = array('success'=>0);

	if(empty($_REQUEST['token']) || $token !== $_REQUEST['token'] || !function_exists('wp_upload_dir'))
		hcgs_ajax_result($json);

	$upload_dir   = wp_upload_dir();//.'/clickgumshoe_uploads';
	$upload_dir   = trailingslashit($upload_dir['basedir']).'/clickgumshoe_uploads';//trailingslashit( WP_CONTENT_DIR )
	$file = $_REQUEST['file'];
	if(file_exists($upload_dir.'/'. $file)) {
		unlink($upload_dir.'/'. $file);
		$json['success']= 1;
	}
	hcgs_ajax_result($json);
}

add_action('wp_ajax_nopriv_hcgs_lock_noscript_img', 'hcgs_lock_noscript');
function hcgs_lock_noscript() {
	//check referer
	if(isset($_SERVER['HTTP_REFERER']) ) {
		$p = parse_url($_SERVER['HTTP_REFERER']);
		if($p['host'] == $_SERVER['HTTP_HOST']) {
			//send second data with ban option
			hcgs_send_to_server(hcgs_collect_client_data([
				'task'=>'checkIP','queue'=>1, 'action'=> 'add_data', 'action_key'=> 'add_data-noscript',
				'data'=> [],'data1'=> ['ban'=> 1]
			]));
		}
	}
	header('Content-Type: image/png');
	echo base64_decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==");
	die;
}

//debug
add_action('wp_ajax_hcgs_lock_debug', 'hcgs_lock_debug');
add_action('wp_ajax_nopriv_hcgs_lock_debug', 'hcgs_lock_debug');
function hcgs_lock_debug() {
	$test = hcgs__req('test');
	$result = array();
	
	if($test=='server') {
		echo "sent data to server\n";
		hcgs_send_to_server(hcgs_collect_client_data(['task'=>'health_check']));
	}
	elseif($test=='clean_cache') {
		$result['msg']= "clear cache";
		hcgs_deleteDir(HCGS_DIR.'/html/data/cache/');
		if(is_dir(WP_CONTENT_DIR.'/cache')) hcgs_deleteDir(WP_CONTENT_DIR.'/cache');
	}
	elseif($test=='plugin') {
		$result['success'] = 1;
	}
	else if(function_exists('get_option')){
		$result['adlock'] = get_option('_had_adlock_data');
		$cache = HWLockCache::getInstance();
		//$cache->clear();	//test

		//$result['cache-active_server'] = $cache->existData('active_server');
		$result['cache-active_servers'] = $cache->getData('active_servers');//$cache->existData('active_servers');
		//$result['active_server'] = get_active_server();
		$result['active_servers'] = hcgs_get_active_servers();
		$result['campaigns'] = get_option('_had_campaigns');
		if($result['campaigns']) $result['random_campaign'] = hcgs_pick_one($result['campaigns']);
		$result['token']= hcgs_option('site_token');
		$result['site_key'] = hcgs_getSiteKey();
		if(HCGS_TEST_MODE) $result['session'] = $_SESSION;

	}
	hcgs_ajax_result(['data'=> $result]);
}

function hcgs_error_log_event($e, $backtrace='') {
	if(is_object($e)) $msg = $e->errorMessage();
	else $msg = $e;
	hcgs_send_remote_syslog($msg, 'clickgumshoe-plugin' );
}
add_action('error_log_event', 'hcgs_error_log_event',10, 2);

function hcgs_heatmap_generate($file, $filename='') {
	if(!function_exists('get_option')) return;
	$dt = get_option('_had_adlock_data');
	//if(TEST_MODE) $dt['cloudinary'] = ['name'=>'hoangweb','key'=>'288887221795192','secret'=>'MluaX60NMhynEjlP1LVZMU6tJbA'];	#test
	if(HCGS_TEST_MODE ||empty($dt['cloudinary']) || count(array_filter($dt['cloudinary']))<3) {
		$result = hcgs_generate_image($file, $filename);
		if(!empty($dt['cloudinary'])) $result['cloudinary'] = $dt['cloudinary'];
		return $result;
	}
	$cache = HWLockCache::getInstance();

	\Cloudinary::config(array( 
	  "cloud_name" => $dt['cloudinary']['name'], 
	  "api_key" => $dt['cloudinary']['key'], 
	  "api_secret" => $dt['cloudinary']['secret']
	));
	try {
		$filename = str_replace('/','-', $filename);
		$filename = str_replace('*','-', $filename);
		$result = ['url'=>'http://via.placeholder.com/400x400','upload'=>1];

		$result['error'] = $cache->getData($_SERVER['HTTP_HOST'].'/cloudary_limited');
		if(!$limit || time()-$limit>=86400) {
			$result = \Cloudinary\Uploader::upload(($file), array(
				'public_id'=> $filename,
				"tags" => array( "clickgumshoe", $_SERVER['HTTP_HOST'] ),
				"timeout" => 60,
				'resource_type'=>'auto'
			));
			if($limit) $cache->clear($_SERVER['HTTP_HOST'],'cloudary_limited');
			$result['error']=0;
		}
		//else $result = array(/*'error'=>0,*/ 'url'=>'http://via.placeholder.com/400x400');
	}
	catch(Exception $e){
		$err = $e->getMessage();
		if(strpos($err, 'invalid api_key')!==false 
			|| strpos($err, 'invalid signature')!==false 
			|| strpos($err, 'cloud_name is disabled')!==false
		) {
			$result['upload']=0;		
			$result['error']=1;
			$cache->saveData($_SERVER['HTTP_HOST'].'/cloudary_limited', time());
			hcgs_send_remote_syslog($err, 'clickgumshoe' );
		}
	}
	//if(TEST_MODE && $filename) base64_to_image($file, trailingslashit( WP_CONTENT_DIR ).'uploads/clickgumshoe_uploads/'.$filename.'.png');	//debug
	
	if(empty($result['error'])) {
		return array('url'=> $result['url'],'result'=>['public_id'=>$result['public_id']], 'upload'=> 1,'api'=>$dt['cloudinary']);
	}
	else {
		return hcgs_generate_image($file, $filename);
	}
}
function hcgs_generate_image($file, $filename) {
	if(!function_exists('wp_create_nonce')) return '';
	$upload_dir   = trailingslashit( WP_CONTENT_DIR ).'uploads/clickgumshoe_uploads';
	$upload_url = content_url().'/uploads/clickgumshoe_uploads';
	base64_to_image($file, $upload_dir.'/'.$filename.'.jpeg');

	$file = array(
		'url'=> $upload_url.'/'.$filename.'.jpeg', 
		'upload'=>0,
		'delete_url'=> HCGS_AJAX_URL.'?action=hcgs_lock_rmmap&nonce='.wp_create_nonce("rmmap")
	);
	if(TEST_MODE) $file['url'] = '/clickgumshoe_uploads/'.$filename.'.jpeg';	//test;
	return $file;
}

/**
 * js.cookie.js
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function g(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function e(l){function C(e,n,o){var t;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(o=g({path:"/"},C.defaults,o)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r}o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(e){}n=l.write?l.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c]));return document.cookie=e+"="+n+i}e||(t={});for(var a=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,f=0;f<a.length;f++){var p=a[f].split("="),d=p.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var u=p[0].replace(s,decodeURIComponent);if(d=l.read?l.read(d,u):l(d,u)||d.replace(s,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===u){t=d;break}e||(t[u]=d)}catch(e){}}return t}}return(C.set=C).get=function(e){return C.call(C,e)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(e,n){C(e,"",g(n,{expires:-1}))},C.withConverter=e,C}(function(){})});
//# sourceMappingURL=/sm/31d5cd1b58ce5e6231e4ea03a69b2801a53e76e98152bc29dc82a494ed0a1ee6.map
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

(function (_$) {
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                if(osVersion!==null) osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }

        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else  {
                flashVersion = unknown;
            }
        }
    }
    
    window.ad_lock_jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion,
        userAgent: navigator.userAgent
    };
    
window.HW_IO={
    events: {},
    data: {export:{}},
    tracker: {},
    utils: {
        export: function(var1, var2) {
            {
                if(var2 ) setTimeout(function(){
                    if(HW_IO.get('test_mode')) 
                        for(var i in var2) {
                            try{
                                HW_IO.data.export[i] = window['hcgs_'+i]=/*eval*/(var2[i]);
                            }
                            catch(e){HW_IO.log('%c export error','color:red', var2[i]);}   
                        }
                },2000);    //test;
                if(var1 ) 
                    for(var i in var1) {
                        try{
                            HW_IO.data.export[i] = window['hcgs_'+i]=/*eval*/(var1[i]);
                        }
                        catch(e){HW_IO.log('%c export error','color:red', var1[i]);}
                    }
            }
            
        }
    }
};
var CryptoJSAesJson = {
    stringify: function (cipherParams) {
        var j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();
        return JSON.stringify(j);
    },
    parse: function (jsonStr) {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
        return cipherParams;
    }
},
set = function (key, val) {
  if(jQuery.isPlainObject(key)) {
    HW_IO.data = jQuery.extend(HW_IO.data, key);
    return;
  }
  else HW_IO.data[key] = val;
},

get = function (key, defVal) {
  if(typeof HW_IO.data[key]!=='undefined') return HW_IO.data[key];
  return defVal;
},
remove = function (key, defVal) {
  if(typeof HW_IO.data[key]!=='undefined') delete HW_IO.data[key];
},
tag_option = function(key, val) {
    window.cgsSettings = window.cgsSettings||{};
    return (typeof window.cgsSettings[key]!=='undefined'? window.cgsSettings[key]: val);
};

HW_IO.extend = function(args) {
  if(typeof jQuery!=='undefined') HW_IO = jQuery.extend(HW_IO, args);
  else this.assign(HW_IO, args);
}
HW_IO.assign = function (){
	if(arguments.length<=1) return arguments.length? arguments[0]: null;
	var dt =arguments[0];
	for(var i=1;i<arguments.length;i++) {
		for(var j in arguments[i]) dt[j] = arguments[i][j];
	}
	return dt;
}
HW_IO.countNext = function(name, next) {
	var i=HW_IO.get(name)||0;
	if(typeof next=='undefined' || next) HW_IO.set(name, ++i);
	return i;
}
HW_IO.increase = function (name) {
	var i=HW_IO.getSession('ai_'+name)||0;
	HW_IO.setSession('ai_'+name, ++i);
	return i;
}
HW_IO.count = HW_IO.increase;
HW_IO.get = function(name, val) {
    if(name=='_query') val = HW_IO.utils.parse_query_string();
  var value = get(name/*, val*/),v1;

  if(name == 'complete_data' && typeof value == 'undefined' && HW_IO.getSession('complete_data')) {
    v1 = HW_IO.getSession('complete_data');
  	return typeof v1=='string'? JSON.parse(v1):v1;
  }
  if(name==='debug' && typeof value=='undefined') return 1;
  if(name==='ssl') return (window.location.protocol||document.location.protocol)=='https:';

  return get(name, val);
}
HW_IO.set = function(name, val) {
  set(name, val);
  if(name=='complete_data' && jQuery.isPlainObject(val)) this.setCookie('complete_data', JSON.stringify(val), {expires: 30});
}
HW_IO.remove = function(name) {
	remove(name);
}
HW_IO.getSession = function(name,value) {
    if(name.indexOf('hcgs.')===-1) name = 'hcgs.'+name;
	var val=Cookies.get(name);
	return this.utils.isJson(val)? JSON.parse(val): (typeof val!=='undefined' ? (!isNaN(val)? parseFloat(val): val): value);
}
HW_IO.setSession = HW_IO.setCookie = function(name, value, opt) {
	opt = opt||{};
    if(name.indexOf('hcgs.')===-1) name = 'hcgs.'+name;
	var in30Minutes = 1/48, inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);	//in 15p
	if(!opt.expires) opt.expires = 1;//in30Minutes; //1 day minimum
	Cookies.set(name, value, opt);;
}
HW_IO.updateSession = function(name, value, opt) {
	opt=opt||{};
    if(name.indexOf('hcgs.')===-1) name = 'hcgs.'+name;
	var dt=Cookies.get(name);
	if(jQuery.isPlainObject(value) && HW_IO.utils.isJson(dt)) {
		dt=JSON.parse(dt);
		jQuery.extend(dt, value);
		Cookies.set(name, JSON.stringify(dt), jQuery.extend({expires: 1},opt));
	}
	else Cookies.set(name, value, jQuery.extend({expires: 1},opt));
}
HW_IO.removeSessions = HW_IO.removeCookies = function(names) {
	if(jQuery.isArray(names)) {
		for(var i=0;i<names.length;i++) {
            if(names[i].indexOf('hcgs.')===-1) names[i] = 'hcgs.'+names[i];
            HW_IO.removeCookies(names[i]);
        }
	}
	else {
        if(names.indexOf('hcgs.')===-1) names = 'hcgs.'+names;
        Cookies.remove(names);
    }
}
HW_IO.clearAllSession = function() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
HW_IO.addEvent = function(name, func, args, firedCheck) {
  if(!this.events[name]) this.events[name]={callback: []};
  if(typeof func=='function') this.events[name].callback.push({func: func, args: args});
  if(firedCheck && this.events[name] && this.events[name].fired) {
  	if(!args) args={};
  	if(this.events[name].args) args = HW_IO.assign( this.events[name].args, args);
  	this.fireEvent(name,args, 1);
  	HW_IO.log("%c fire additional event that already trigger:"+name,'color:orange');
  }
}


HW_IO.fireEvent = function(name, data, onlynotfire) {//=0
    var $this=this;
  if(this.events[name]) {
  	if(!HW_IO.events[name].args) HW_IO.events[name].args={};
    this.events[name].callback.forEach(function(item) {
    	if(onlynotfire && item.executed) return;	//already executed function
    	item.executed=1;
    	if(!onlynotfire && (data||item.args)) HW_IO.events[name].args = HW_IO.assign({}, data||{},item.args||{});//jQuery.extend(HW_IO.events[name].args, data||item.args);	//get args in fired event before
      item.func.bind($this)(HW_IO.events[name].args);//data||item.args|if(name=='complete_shield')console.log('=>',data);
    });
    if(typeof this.events[name]!=='undefined') {
        this.events[name].fired=1;
        if(this.get('debug')) HW_IO.log('%c [fire_event]:', 'color:pink',name,'(',this.events[name].callback.length,')');
    }
  }
  else {
    this.events[name]={fired:1,callback: []};
    HW_IO.log('%c [fire_event_not_found]','color:red',name);
  }
}
HW_IO.hasEvent = function(name) {
	return typeof this.events[name]!=='undefined';
}
HW_IO.removeEvent = function(name) {
  if(this.events[name]) {
    delete this.events[name];
  }
}
HW_IO.isFireEvent = function(name) {
    if(this.events[name] && this.events[name].fired) return true;
    return false;
}
HW_IO.module = function(cb, tm) {
	if(typeof cb!=='function') return;
	if(typeof tm!=='undefined') setTimeout(function() {
		cb.bind(HW_IO)();
	}, tm);
	else cb.bind(HW_IO)();
};

HW_IO.log = function() {
	if(HW_IO.get('debug')) console.log.apply(console, arguments);
}
HW_IO.logfile = function(txt) {
    if(HW_IO.get('debug') && HW_IO.utils.array_item(hcgs_lock,'ajax_url') ) 
        jQuery.ajax({
            url: hcgs_lock.ajax_url+'?action=hcgs_log_persist',
            type: 'POST',
            dataType:'json',
            data: {text: txt},
            success: function(){HW_IO.log('%c log to file: '+txt,'color:pink');}
        });
}
HW_IO.show_popup = function(status,full) {
    if(!HW_IO.get('show_popup')) return HW_IO.log('%c unable to show popup, because you disabled','color:red');
    if(!status) {
        jQuery('.cgs-lock-cover').hide();
        jQuery('.cgs-lock-popup-wrapper').hide();
    }
    else {
        jQuery('.cgs-lock-cover').show();
        jQuery('.cgs-lock-popup-wrapper').show();
        if(full) {
            jQuery('.cgs-lock-popup-wrapper .cgs-input-form ').show();
            jQuery('.cgs-lock-popup-wrapper .cgs-loading-style').hide();
            jQuery('.cgs-lock-popup-wrapper .noselect:not([ga-on])').removeClass('hidden');//[ga-on]
            jQuery('.cgs-lock-popup-wrapper >span').show();
            jQuery('.cgs-lock-popup-wrapper .'+hcgs__CSS._get('html').continuebtn).show();//.removeClass(hcgs__CSS._get('html').continuebtn);
        }
    }
}

HW_IO.is_ready_data = function() {
    return HW_IO.countNext('extra_data',0)>=2;
}

/**
 * Ads
*/
HW_IO.ads = {
    is_debug_ad: function() {
        var p = HW_IO.get('_query');
        if(HW_IO.utils.get_referrer() && p._ad_debug) return true;
        return false;
    },
    is_organic_test: function() {
        var p = HW_IO.get('_query');
        return p._organic_test? true: false;
    },
    is_from_adwords: function(only_ads) {
        var ip = HW_IO.get('clientIP',HW_IO.browser.getIP());
        if(this.is_from_search(1) || this.is_debug_ad()) {
            var dt = HW_IO.getSession('users_data',{});
            if(dt.real_ip) delete dt.real_ip;
            HW_IO.removeSessions('hcgs-user-session-guid');
            if(HW_IO.utils.array_item(dt,'ips.'+ip+'.click')) dt.ips[ip].click=0;
            this.update_visitor(HW_IO.assign({'is_from_adwords': 0,'gclid':''},!tag_option('show_popup')? {click:1}:{}), ip);
        }
        var result=false, p = HW_IO.get('_query');
        if(this.is_from_search(1) || this.is_debug_ad()) {
            if(p.gclid) {
                this.gclid();this.visit_id();
                result=1;
            }
            else if(p.campaignid && p.network) result=1;
            else if(!only_ads && tag_option('test_from_organic_search')) result=1;
        }
        if(result) {
            this.update_visitor({is_from_adwords: 1}, ip);
        }
        if(!only_ads && ( (this.is_from_search() || this.is_debug_ad()) || (!only_ads && this.get_visitor_data('is_from_adwords', false))) ) return true;
        return (only_ads? !HW_IO.get('isrefresh') :1) && result;
    },
    is_from_search : function(ref,referrer) {
        var se=[
            'www.google.','www.bing.','www.yahoo.','www.ask.','www.aol.',
            'www.baidu.','www.wolframalpha.','duckduckgo.','vn.search.yahoo.','yandex.','coccoc.',
            'com.google.android.googlequicksearchbox'
        ],
            r=0, referrer = !referrer? HW_IO.get('http_referrer',document.referrer):referrer;//,document.referrer
        //if(document.referrer.indexOf('_redirect')!==-1) referrer= document.referrer;
        for(var i in se) {
            if(referrer.indexOf(se[i])!==-1) {
                r= 1;
                HW_IO.setSession('is_from_search', r, {expires: 30});   //new Date(new Date().getTime() + 15 * 60 * 1000)
                break;
            }
        }
        if(!r && (referrer.indexOf('&_emulator=1')!==-1 || referrer.indexOf('/test_visit.html')!==-1)) r=1;
        if(ref) return r;
        if(!r && HW_IO.get('send_check')) {
            r=1;
            HW_IO.setSession('is_from_search', r, {expires: 30});
        }
        
        if(!r && typeof HW_IO.getSession('is_from_search')!=='undefined') return parseInt(HW_IO.getSession('is_from_search'));
        
        return r;
    },
    is_from_ads: function() {
        var p=HW_IO.get('_query');
        return p.gclid && p.network;
    },
    gclid: function() {
        var p=HW_IO.get('_query');
        if(p.gclid) {
            this.update_visitor({gclid: p.gclid}, HW_IO.get('clientIP'));
            return p.gclid;
        }
        return this.get_visitor_data('gclid');
    },
    visit_id: function() {
        var p=HW_IO.get('_query');
        if(p.random) {
            this.update_visitor({visit_unique: p.random}, HW_IO.get('clientIP'));
            return p.random;
        }
        return this.get_visitor_data('visit_unique');
    },
    get_visit_unique: function() {
        return this.gclid()+this.visit_id();
    },
    session_uid: function() {
        if(HW_IO.getSession('hcgs-user-session-guid')) return HW_IO.getSession('hcgs-user-session-guid');
        var now=Math.floor(Date.now() / 1000),//+ new Date(),//Date.now()
            id = HW_IO.utils.MD5 (this.get_visit_unique()+HW_IO.utils.uniqueID()+now);
        HW_IO.setSession('hcgs-user-session-guid', id);
        return id;
    },
    is_first_user_session: function() {
        return !HW_IO.getSession('hcgs-user-session-guid');
    },
    getValueTrack: function() {
        HW_IO.utils.parseReferer(HW_IO.utils.get_referrer());
        var p = HW_IO.get('_query' ), 
            vt = 'gclid,lpurl,campaignid,adgroupid,device,network,keyword,matchtype,creative,placement,devicemodel,random,adposition,loc_physical_ms'.split(',');
            trackdt = {};

        for(var i in vt) if(typeof p[vt[i]]!=='undefined') trackdt[vt[i]] = p[vt[i]];
        if(trackdt.gclid) {
            HW_IO.setSession('track_data', trackdt);
            return trackdt;
        }
        return {};
    },
    get_ads_data: function(dt) {
        var sendt={
            referer: HW_IO.utils.get_referrer('direct'), url: location.href,ip: HW_IO.browser.getIP(),
            uid: this.session_uid(), domain: location.hostname, gclid: this.gclid(),
            token: tag_option('token'),  //fake, will replace in create_tracker()
            webhook: tag_option('webhook',''),
            browser: {
                mobile: HW_IO.browser.is_mobile()
            },
            valueTrack: this.getValueTrack(),
            time: Math.floor(Date.now() / 1000),
            show_popup: tag_option('show_popup'),
            //'wait_for_replace'=>0, 'timeout'=> 40
        }, p = HW_IO.get('_query');
        if(p._ad_debug) sendt.test=1;
        return HW_IO.assign({},sendt,dt||{});
    },
    visitor_is_done: function(ip) {
        if(!ip) ip= HW_IO.browser.getIP();//or HW_IO.get('clientIP')
        var dt = HW_IO.getSession('users_data',{});
        if(!dt.ips)dt.ips={};
        if(ip && !dt.ips[ip]) {
            dt.ips[ip] = {click:0};
            HW_IO.setSession('users_data', dt);
        }
        return dt.ips[ip].click;
    },
    update_visitor: function(dt,ip) {
        if(!ip) ip= HW_IO.browser.getIP();
        if(!dt || !ip /*|| this.visitor_is_done(ip)*/) {
            if(ip) HW_IO.log('%c can not update_visitor, visitor was done.','color:red',ip,dt);
            return;
        }
        var data = HW_IO.getSession('users_data',{});
        if(!data.ips) data.ips={};
        if( data.ips[ip]) {
            HW_IO.assign(data.ips[ip], dt||{});            
        }
        else data.ips[ip] = dt;
        HW_IO.setSession('users_data', data);
    },

    get_visitor_data: function(key, val) {
        var ip = HW_IO.browser.getIP(),dt = HW_IO.getSession('users_data',{}),
            dt = ip && dt.ips && dt.ips[ip]? dt.ips[ip]: {};
        if(key && typeof dt[key]!=='undefined') return dt[key];
        return val;
    },
    user_data: function(key, val) {
        var dt = HW_IO.getSession('users_data',{});
        if(key && val!==null && typeof val!=='undefined') {
            dt[key] = val;
            HW_IO.setSession('users_data', dt);
        }
        else return typeof dt[key]!=='undefined'? dt[key]: '';
    },
    reset: function() {
        HW_IO.removeSessions('users_data');
    },
    exist_test_ip: function() {
        var dt = HW_IO.getSession('users_data',{});
        return dt.test_ip;
    },
    get_test_ip: function() {
        var p=HW_IO.get('_query');
        if(this.is_debug_ad() || this.is_organic_test() || !this.exist_test_ip()) {
            if(p._test_ip) ip = p._test_ip;
            else ip = HW_IO.browser.generateIP();
            this.user_data('test_ip', ip);
        }
        else ip = this.user_data('test_ip');
        return ip;
    },
    is_send_check: function() {
        var is_send = this.is_from_adwords(1) || this.is_from_search(1) || this.is_debug_ad();
        return is_send && this.is_first_user_session() && !HW_IO.get('isrefresh');
    }
};
//utils
HW_IO.assign(HW_IO.utils, {
    randomString: function(len, prefix, suffix) {
        var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      if(!len) len=5;if(!prefix)prefix='';if(!suffix)suffix='';

      for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return prefix+text+suffix;
    },

    pad : function(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    },
    MD5 : function(s){
        s=s+'';
        function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()
    },
    uniqueID : function () {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return HW_IO.utils.MD5('_' + Math.random().toString(36).substr(2, 9)+Date.now());
    },
    //clone array or plain object
    clone : function(arr) {
        if(jQuery.isArray(arr)) return arr.slice(0);    //fater than .slice()
        if(jQuery.isPlainObject(arr)) return jQuery.extend(true, {}, arr);
    },
    array_pick : function(items, out){//pick_one
        var i=Math.floor(Math.random()*items.length);
        if(typeof out=='object') out.index = i;
        return items[i];
    },
    array_item: function(arr, path,def) {
        var v, p=path.split('.');
        for(var i in p) {
            if(!v) v=arr[p[i]];
            else if(typeof v=='object')v=v[p[i]];
            else return def;
        }
        return (v==null || typeof v=='undefined')? def: v;
    },
    rand: function(a,b) {return Math.floor(Math.random() * b) + a;},
    JSON_to_URLEncoded : function(element,key,list){
      var list = list || [];
      if(typeof(element)=='object'){
        for (var idx in element)
          this.JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
      } else {
        list.push(key+'='+encodeURIComponent(element));
      }
      return list.join('&');
    },
    base64_encode : function(textString) {
        if(typeof textString=='object') textString = JSON.stringify(textString);
        var words = CryptoJS.enc.Utf8.parse(textString); // WordArray object
        var base64 = CryptoJS.enc.Base64.stringify(words); // string: 'SGVsbG8gd29ybGQ='
        return base64;
    },
    base64_decode : function(base64, nojson) {
        var words = CryptoJS.enc.Base64.parse(base64);
        var r= CryptoJS.enc.Utf8.stringify(words);
        if(!nojson && HW_IO.utils.isJson(r)) return JSON.parse(r);
        return r;
    },
    is_base64 : function(val) {
        try {
            HW_IO.utils.base64_decode(val);
            return true;
        }
        catch(e){
            return false;
        }
    },
    check_client : function(uid) {
        var dt=HW_IO.getSession('visits',{}), params = HW_IO.get('_query');
        var r = params.random;
        if(!r) return false;
        if(!dt[r]) {
            dt[r]=uid;
            HW_IO.setSession('visits', dt, {expires:1});
        }
        else return dt[r];
    },
     //parse query string
    parse_query_string: function(query) {
        if(typeof query=='undefined') {
            if(location.href.indexOf('?')!=-1) query=location.href.split('?')[1];
            else query='';
        }
      var vars = query.split("&");
      var query_string = {};
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(!pair[0]) continue;
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
          query_string[pair[0]] = arr;
          // If third or later entry with this name
        } else {
          query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
      }
      return query_string;
    },
    getUrl: function(url,exclude) {
        url = url || window.location.href;
        var params = this.parse_query_string(url.indexOf('?')!=-1? url.split('?')[1]:'');
        url= url.split('?')[0];//window.location.pathname
        if(exclude) exclude.forEach(function(i){delete params[i];});
        if(params && Object.keys(params).length) url+='?'+ jQuery.param(params);
        return url;
    },
    parseReferer: function(url) {
        if(!url) url = this.get_referrer();
        if(url) {
            var q=this.parse_query_string(url.split('?')[1]), q1= HW_IO.get('_query');
            if(q.gclid && !q1.gclid) {
                q1=HW_IO.assign(q1, q);
                HW_IO.set('_query', q1);
            }
        }
    },
    get_referrer: function(url) {
        var p= HW_IO.get('_query');
        return p.ref ? decodeURIComponent(p.ref): (document.referrer? document.referrer: url);
    },
    /**
     * validator
     */
     is_ssl: function() {
        return 'https:' == document.location.protocol;
     },
    validate_phone : function(tel) {
        tel = (tel+'').replace(/[\.\,]/g,'');
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(tel);
    },
    validate_email : function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    },

    isJson : function(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    },
    isIPv4 : function(ipv4) {
        if (ipv4 && /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(ipv4)) {
            return true;
        } else {
            return false;
        }
    },
    isIPv6 : function(ipv6) {
        if (ipv6 && /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(ipv6)) {
            return true;
        } else {
            return false;
        }
    },
    short_ipv6 : function(ip) {
        if((ip.match(/\:/g) || []).length>2) {
            ip=ip.split(':').map(function(i){return i.replace(/^0{1,}/g,'');}).join(':').replace(/\:{2,}/g,'::');
        }
        return ip.toLowerCase();
    },
    full_ipv6 : function() {
        var ip1=ip.split('/');
        return ip1[0].split(':').map(function(i){return pad(i,4);}).join(':')+(ip1.length>=2? '/'+ip1[1]:'').toLowerCase();
    },
    is_diff_ip : function(ip,ip1) {
        return ((this.isIPv4(ip) && this.isIPv4(ip1))|| (this.isIPv6(ip) && this.isIPv6(ip1))) && ip1!=ip;
    }
});


//events
HW_IO.assign(HW_IO.events, {
    isNumberTextField : function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
});
HW_IO.analystic = {
    data: {},
    init: function(cb) {
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        var gaName = (typeof ga.getAll=='function')? ga.getAll()[0].get('name')+'.': '', dt=HW_IO.get('complete_data',{});
        this.data.gaName = gaName;
        
        if(typeof ga=='function' && tag_option('ga_id')) {
            ga(gaName+'create', {
                trackingId: tag_option('ga_id'), 
                cookieDomain:'auto',
                //name: 'myTracker',
                    //userId: '12345'
            });
            if(tag_option('ga_dimen1')) ga(gaName+'set', 'dimension'+tag_option('ga_dimen1'),HW_IO.get('clientIP'));
            if(tag_option('ga_dimen2')) ga(gaName+'set', 'dimension'+tag_option('ga_dimen2'), dt['uid']);
            if(dt) ga(gaName+'set','userId', dt.uid);

            if(typeof cb=='function') cb.bind(this)(ga, gaName);
        }
    },
    load_module: function(plugin) {
        if(typeof ga!=='function') return;
        var gaName = this.data.gaName;

        if(!plugin || plugin.indexOf('eventTracker')!==1)
        ga(gaName+'require', 'eventTracker',{
            events: ['click', 'auxclick', 'contextmenu'],
            elements:['a','div'],
            hitFilter: function(model, element, event) {
                model.set('eventAction', event.type, true);
            }
        });

        if(!plugin || plugin.indexOf('maxScrollTracker')!==1)
        ga(gaName+'require', 'maxScrollTracker', {
            sessionTimeout: 4 * 60,
            //timeZone: 'Asia/Ho_Chi_Minh',
            hitFilter: function(model) {
                var scrollPercentage = model.get('eventLabel');
                if (scrollPercentage > 50) {    //Making scroll events interactive beyond 50%.
                  // Sets the nonInteractive field to `true` for the current hit.
                  model.set('nonInteraction', true, true);
                }
            },
            //maxScrollMetricIndex: 1,
        });

        //ga('require', 'urlChangeTracker');
        if(!plugin || plugin.indexOf('outboundLinkTracker')!==1)
        ga(gaName+'require', 'outboundLinkTracker',{
            events: ['click', 'auxclick', 'contextmenu'],
            //linkSelector: '.js-track-clicks',
            shouldTrackOutboundLink: function(link, parseUrl) {
                var href = link.getAttribute('href') || link.getAttribute('xlink:href');
                var url = parseUrl(href);
                //return /(foo|bar)\.com$/.test(url.hostname);
                return true;
            }
        });
    },
    send: function() {
        if(typeof ga!=='function') return;
        var gaName = this.data.gaName;

        ga(gaName+'send', {
            hitType: 'pageview',
            page: location.pathname,
            title: 'Ad-'+ document.title,
            location: location.href
        });
    }
};
/**
 * Browser
*/
HW_IO.browser = HW_IO.browser||{};
HW_IO.assign( HW_IO.browser, {
    data: {ips: {}},
    addJSFile: function(src, arg) {
        if(!arg) arg = {'type': 'text/javascript'};//application/javascript
        var s = document.createElement( 'script' );
        s.setAttribute( 'src', src);s.setAttribute( 'type', arg.type );
        if(document.body) document.body.appendChild( s );
        else HW_IO.log('%c unable to add js '+src,'color:red');
    },
    addCSSFile: function(src) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', src);
        if(document.body) document.getElementsByTagName('head')[0].appendChild(link);
        else HW_IO.log('%c unable to add css '+src,'color:red');
    },
    addCSS: function(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        if(document.body) document.getElementsByTagName('head')[0].appendChild(style);
        else HW_IO.log('%c unable to add css source','color:red');
    },
	isReloadPage: function() {
		if (window.performance && performance.navigation.type == 1) {
			return true;
		}
		else return false;
	},
	//get the IP addresses associated with an account
	//https://github.com/diafygi/webrtc-ips
    getIPWebRTC: function (callback){
        var ip_dups = {};
        //compatibility for firefox and chrome
        var RTCPeerConnection = window.RTCPeerConnection
            || window.mozRTCPeerConnection
            || window.webkitRTCPeerConnection;
        var useWebKit = !!window.webkitRTCPeerConnection, _iframe = HW_IO.get('frm_ip');
        //bypass naive webrtc blocking using an iframe
        if(!RTCPeerConnection && _iframe && _iframe.contentWindow){
            //NOTE: you need to have an iframe in the page right above the script tag
            //
            //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
            //<script>...getIPs called in here...
            //
            var win = _iframe.contentWindow;
            RTCPeerConnection = win.RTCPeerConnection
                || win.mozRTCPeerConnection
                || win.webkitRTCPeerConnection;
            useWebKit = !!win.webkitRTCPeerConnection;
        }
        if(!RTCPeerConnection) return callback('');
        //minimal requirements for data connection
        var mediaConstraints = {
            optional: [{RtpDataChannels: true}]
        };
        var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
        //construct a new RTCPeerConnection
        var pc = new RTCPeerConnection(servers, mediaConstraints);
        function handleCandidate(candidate){
            //match just the IP address
            var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
            var ip_addr = ip_regex.exec(candidate);if(ip_addr) ip_addr=ip_addr[1];
            //remove duplicates
            if(ip_addr && ip_dups[ip_addr] === undefined && !callback.done) {
                callback.done=1;callback(ip_addr);
            }
            ip_dups[ip_addr] = true;
        }
        //listen for candidate events
        pc.onicecandidate = function(ice){
            //skip non-candidate events
            if(ice.candidate)
                handleCandidate(ice.candidate.candidate);
        };
        //create a bogus data channel
        if(typeof pc.createDataChannel=='function') pc.createDataChannel("");
        //create an offer sdp
        pc.createOffer(function(result){
            //trigger the stun server request
            pc.setLocalDescription(result, function(){}, function(){});
        }, function(){});
        //wait for a while to let everything done
        setTimeout(function(){
            if(callback.done) return;
            //read candidate info from local description
            var lines = pc.localDescription? pc.localDescription.sdp.split('\n'):[],m=0;
            if(!lines.length) {
                callback.done=1;
                return callback('');
            }
            else lines.forEach(function(line){
                if(line.indexOf('a=candidate:') === 0) {
                    handleCandidate(line);
                    m=1;
                }
            });
            if(!m) {callback.done=1;callback('');}
        }, 1200);
    },
    getip_callback: function(r) {
        this.data.ips.ip_rtc=r.ip;
        clearTimeout(this.data.timeout);
        
        if(typeof this.data.complete=='function') this.data.complete();
        else HW_IO.fireEvent('collect_ip', r);
    },
    fetch_ipv6 : function(callback) {
        if(!callback) callback='HW_IO.browser.getip_callback';
        this.addJSFile('https://api-ipv6.ip.sb/jsonip?callback='+ callback, {type: 'application/javascript' });        
    },
    getIPs: function(callback,_try) {
    	var $this=this, bdt = this.data;
        if(!callback) callback = function() {};
        if(_try==null) _try=1;
        this.data.complete = function(){
            if(Object.keys(bdt.ips).length>=2 && typeof bdt.ips.ip!=='undefined' && typeof bdt.ips.ip_rtc!=='undefined') {
                if(bdt.ips.ip_rtc) bdt.ips.ip_rtc =HW_IO.utils.short_ipv6(bdt.ips.ip_rtc);//if(HW_IO.get('test_mode'))bdt.ips.ip_rtc='';
                callback(bdt.ips);//HW_IO.log(ips);
                //HW_IO.logfile(JSON.stringify(bdt.ips));
                delete $this.data.complete;
                return true;
            }
        };
        if(!_try && this.data.complete()) return true;
    	this.getIP(function(ip,info){
    		bdt.ips.ip = ip;
            if(typeof info=='object') bdt.ips.ip_info = info;
            if(info && typeof info=='string') bdt.ips.ip_host = info;
    		if(bdt.complete) bdt.complete();
    	});
    	this.getIPWebRTC(function(ip){
            if($this.getIPWebRTC.fired) return;$this.getIPWebRTC.fired=1;
    		if(ip) {
    			if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
                    //do not read local ip;
                    bdt.ips.ip_rtc='';
    			}
                //IPv6 addresses
                else if (HW_IO.utils.isIPv6(ip) )
                    bdt.ips.ip_rtc = ip;
    			else if(HW_IO.utils.isIPv4(ip)) 
    				bdt.ips.ip_rtc = ip;
    		}
    		if(!bdt.ips.ip_rtc ) {//&& !HW_IO.utils.isIPv6(ips.ip)
                /*$this.data.ips.ip_rtc='';
                $this.getIP(function(ip, inf){
                    if( HW_IO.utils.is_diff_ip(ip, $this.data.ips.ip)) $this.data.ips.ip_rtc= ip;
                    complete();
                },'https://api-ipv6.ip.sb/jsonip');*/
                $this.fetch_ipv6();
                bdt.timeout = setTimeout(function(){
                    bdt.ips.ip_rtc='';
                    if(!bdt.ips.ip_rtc && bdt.complete) bdt.complete();
                },2000);
            }
    		else {
                if(bdt.ips.ip_rtc && !HW_IO.utils.is_diff_ip(bdt.ips.ip_rtc, bdt.ips.ip)) bdt.ips.ip_rtc = '';
                if(bdt.complete) bdt.complete();
    		}
    	});
    },
    getIP: function(callback, url) {
        var bdt = this.data;
        if(!callback) callback=function(ip){bdt.ips.ip = ip;};
        if(!url) {
            if(bdt.ips.ip) {callback(bdt.ips.ip);return bdt.ips.ip;}
            url = 'https://api.ipify.org/?format=json';//api-ipv4.ip.sb|api.ip.sb,https://api.ip.sb/geoip
            jQuery.getJSON(url).done(function(r){
                //for Puffin browser
                /*if(r.ip.indexOf(',')!==-1) {
                    var l=r.ip.split(',');
                    r.ip=(l.shift()+'').trim();
                    if(l[1].trim()) r.ip_host=l[1].trim();
                }*/
                callback(r.ip/*, r.ip_host*/);
            });
            return;
        }
        //HW_IO.utils.ajax.jsonp()
    	HW_IO.utils.ajax.jsonp(url,{
    		//dataType: "json",
    		timeout: 5000,
    		url: (url ), //https://api.ipify.org/?format=json
    		success: function(r){
                var inf=null;
                if(r.region) {
                    inf = {region: r.region? r.region: r.timezone, country: r.country, org: r.organization};
                    if(r.organization) inf.orgid = r.organization.split(/[\s]+/)[0].replace(/[\D]+/g,'');
                }
	    		callback(r.ip,inf);
	    	},
            error: function(jqXHR, textStatus, errorThrown) {
                var dt = HW_IO.get('complete_data',{});
                HW_IO.log('%c '+url+ " :: " + textStatus + " :: " + errorThrown,'color:red');
                if(dt) callback(dt.ip,false);
            }
	    });
    },
    hash_browser_device: function (callback) {
		var options = {
			excludeUserAgent: true,
			excludeLanguage: true,
			//excludeColorDepth: true,
			preprocessor: function(key, value) {
			    //ie: strip browser version from user agent
			    if (key == "user_agent") {
			      var parser = new UAParser(value); // https://github.com/faisalman/ua-parser-js
			      var userAgentMinusVersion = parser.getOS().name + ' ' + parser.getBrowser().name
			      return userAgentMinusVersion
			    } else {
			      return value
			    }
			}
		};
		if(HW_IO.get('random_browser_id')) {
			if(typeof callback=='function') callback(HW_IO.get('random_browser_id'));
			return ;
		}
	  new Fingerprint2(options).get(function(result, components){
	      //console.log('->',result); //a hash, representing your device fingerprint
	      //console.log('=>',components); // an array of FP components
	      //HW_IO.set('data.browser_fingerprint', result);	//merged
	      if(typeof callback=='function') callback(result);
	      //send_second_data();
	    });
	  
	},
    generateIP: function() {
        var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
        return ip;
    },
    is_mobile: function() {
        var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }
});

navigator.sayswho= function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};

HW_IO.browser.isPhantomBrowser = function() {
	//Client-side User-Agent Check
	if (/PhantomJS/.test(window.navigator.userAgent)) {
	    //console.log("PhantomJS environment detected.");
	    return true;
	}
	//plugins
	/*if (!(navigator.plugins instanceof PluginArray) || navigator.plugins.length == 0) {	//may be safari iOS
	    return true;
	} else {
	    //console.log("PhantomJS environment not detected.");
	}*/
	//PhantomJS 1.x exposes two properties on the global object
	//However, these properties may change in the future.
	if (window.callPhantom || window._phantom) {
	  return true;
	}
	//detecting spoofed Function.prototype.bind for PhantomJS prior to version 2
	if(!Function.prototype.bind) {
		return true;
	}
	if(Function.prototype.bind.toString().replace(/bind/g, 'Error') != Error.toString()) {
		return true;
	}
	if(Function.prototype.toString.toString().replace(/toString/g, 'Error') != Error.toString()) {
		return true;
	}
	//##Stack Traces: suppose that PhantomJS calls evaluate
	var err;
	try{
		null[0]();
	}
	catch(e){
		err = e;
	}
	if (err.stack.indexOf( 'phantomjs') > -1) {
	//if(err && err.stack.indexOf('phantomjs')>-1) {
		return true;
	}
	return false;
};
HW_IO.browser.isSelenium = function() {
	try{
    if(window.document.documentElement.getAttribute("webdriver"))
        return "Selenium Webdriver";
    }
    catch(Exception){}
    try{
    if(navigator.webdriver)
        return "Selenium Webdriver";
    }
    catch(Exception){}
    try {
     if ("_Selenium_IDE_Recorder" in window) return "Selenium Webdriver";
    } catch (Exception) {}
    try {
     if ("__webdriver_script_fn" in document) return "Selenium Webdriver";
    }catch (Exception) {}

    /*if (window.chrome && !window.chrome.runtime) {
        return "Chrome Webdriver";
    }*/
    var runBotDetection = function () {
        var documentDetectionKeys = [
            "__webdriver_evaluate",
            "__selenium_evaluate",
            "__webdriver_script_function",
            "__webdriver_script_func",
            "__webdriver_script_fn",
            "__fxdriver_evaluate",
            "__driver_unwrapped",
            "__webdriver_unwrapped",
            "__driver_evaluate",
            "__selenium_unwrapped",
            "__fxdriver_unwrapped",
        ];

        var windowDetectionKeys = [
            "_phantom",
            "__nightmare",
            "_selenium",
            "callPhantom",
            "callSelenium",
            "_Selenium_IDE_Recorder",
        ];

        for (var windowDetectionKey in windowDetectionKeys) {
            var windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
            if (window[windowDetectionKeyValue]) {
                return true;
            }
        };
        for (var documentDetectionKey in documentDetectionKeys) {
            var documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
            if (window['document'][documentDetectionKeyValue]) {
                return true;
            }
        };

        for (var documentKey in window['document']) {
            if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
                return true;
            }
        }

        if (window['external'] && window['external'].toString() && (window['external'].toString()['indexOf']('Sequentum') != -1)) return true;

        if (window['document']['documentElement']['getAttribute']('selenium')) return true;
        if (window['document']['documentElement']['getAttribute']('webdriver')) return true;
        if (window['document']['documentElement']['getAttribute']('driver')) return true;

        //var runningSelenium = !("showModalDialog" in window);
        //if(runningSelenium) return runningSelenium;

        return false;
    };
    try{return runBotDetection();}
    catch(e){}
}
HW_IO.utils.observer = {
    data:{},
    init: function() {
        var $this=this;
        if(typeof MutationObserver=='undefined') {
            HW_IO.log('%c not support Observer','color:red');
            return;
        }
        this.observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                var id = $(mutation.target).attr('id'), cls;
                if(!id) {
                    cls=$(mutation.target).attr('class').split(/[\s]+/g);
                    for(var i in cls) if($this.data['done_observe_'+cls[i]]) {id=cls[i];break;};
                }
                if(!id || !$this.data['done_observe_'+id]) {
                    HW_IO.log('%c not found observe: '+ id+' ->'+Object.keys($this.data).join(','),'color:red');
                    return;
                }
                if(HW_IO.get('test_mode')) HW_IO.log('trigger observe ',id);
                if(!$this.data['done_observe_'+id].done) HW_IO.fireEvent('observe_'+id, {mutation: mutation});
            });
        });
        HW_IO.log('observer.init');
    },
    //dom: is string type
    track: function(dom, arg,cb, name) {
        var $this=this;
        if(!this.observer) this.init();
        if(typeof dom=='string' && !name) name = dom;
        if(!arg) arg = { childList: true,attributes:true };
        name = name.replace(/^(\.|\#)/g,'');
        //wait
        HW_IO.utils.timer.waitForExist(function(){
            if($(dom).length) $this.observer.observe($(dom).get(0), arg);
            HW_IO.log('set observe',name, $(dom).length? 'success':'error');
        }, function(){return $(dom).length;}, 1000,10,'wait_observe_'+name);
        
        this.data['done_observe_'+name] = {
            done: 0,
            callback: function(is){
                if(typeof is!=='undefined') $this.data['done_observe_'+name].done=is;//console.log('done=',$this.data['done_observe_'+name]);
            }
        };
        HW_IO.addEvent('observe_'+name, function(mutation){
            cb(mutation, $this.data['done_observe_'+name].callback);
        }, arg);
    },
    is_support: function() {
        return (typeof MutationObserver!=='undefined');
    }
}
HW_IO.utils.timer = {
	putInterval: function (cb, time,n){
		if(typeof cb!='function') return false;
		var tm=window.setInterval(function(){
			if(!cb.times) cb.times=0;
			cb.times++;
			try {
				cb({index: cb.times});
			}
			catch(e){HW_IO.log('%c timeout:','color:red',e.message);}
			if(cb.times==n) window.clearInterval(tm);
		}, time);
	},
	try_task: function(cb, time, n) {
		if(typeof cb!='function' || !n) return false;
		if(n==0) return true;
		var $this = this;
		cb(function() {
			$this.try_task(cb, time-1, n-1);
		}, n-1);
	},
	waitForExist: function(cb,test,tick,max,name) {
		var i=0,k;
		if(!test) test=['HW_IO'];if(typeof test=='string') test=[test];
        if(typeof test!=='function') test.push('document.body');
		tick = tick || 500;max = max||20;
		if(!name) name = (typeof test=='function'? HW_IO.utils.uniqueID():test);
        k=btoa(unescape(encodeURIComponent(name)));//if(name) k+=''+name;
        if(!HW_IO.data.__wait) HW_IO.data.__wait={};if(!HW_IO.data.__wait[k]) HW_IO.data.__wait[k]=0;

		var tm=setInterval(function(){
			var c=1 ;
            
			if(typeof test=='function') c=test();
			else for(var j=0;j<test.length;j++) if(typeof eval('try{'+test[j]+'}catch(e){}')==='undefined') {c=0;break;}
			if(c || (HW_IO.data.__wait[k]++>max )) {
				clearInterval(tm);
				if(HW_IO.data.__wait[k]-max<5) cb.bind(HW_IO)();//HW_IO.log('@run',name,HW_IO.data.__wait[k]-max);
			}
			else {
                /*var d=HW_IO.get('waitForExist',{});
                if(!d[k])d[k]=0;d[k]++;HW_IO.set('waitForExist',d);*/
                if(HW_IO.get('test_mode')) HW_IO.log('%c wait for (max:{0},k={1}, i: {2})'.format(max, name,HW_IO.data.__wait[k]), 'color:gray',test);//,d[k]
            }
		},tick);
        HW_IO.log('%c @add wait for '+name,'color:gray');
	},
	init: function(opt) {
        if(typeof TimeMe=='undefined') {
            return HW_IO.utils.timer.waitForExist(arguments.callee, ['TimeMe'],1000,10,'TimeMe');
        }		
		var cdt = HW_IO.getSession('_hw_ads_client_data')||{}, url=HW_IO.get('clean_url',window.location.pathname).split('?')[0];
		if(!cdt.pages) cdt.pages={};
		TimeMe.initialize({
			currentPageName: url, // current page: window.location.pathname+window.location.search
			//idleTimeoutInSeconds: 60, // seconds 
			/*websocketOptions: { // optional
				websocketHost: opt.socketUri	//use my own
			}*/
		});
		TimeMe.setCurrentPageName(url);

		if(!cdt.pages[TimeMe.currentPageName]) cdt.pages[TimeMe.currentPageName] = {};
		if(!cdt.pages[TimeMe.currentPageName].start_time) 
			cdt.pages[TimeMe.currentPageName].start_time = new Date().format('h:i:s A');
		/*else*/ HW_IO.set('timestart', new Date().format('h:i:s A'));

		HW_IO.setSession('_hw_ads_client_data', cdt, {expires: 1});
		/*if(HW_IO.getSession('_hw_ads_page')) {
			HW_IO.setSession('_hw_ads_prev_page', HW_IO.getSession('_hw_ads_page'), {expires:1});
		}
		HW_IO.setSession('_hw_ads_page', url,{expires:1});*/

		//console.log('timer set');
		/*TimeMe.callWhenUserLeaves(function(){	//do not use default event when unload page
			HW_IO.log("The user is not currently viewing the page!");
		});*/
		TimeMe.resetAllRecordedPageTimes();
		TimeMe.startTimer();
	},
};
HW_IO.utils.freeze = {
	disableF5: function(e) { if (e.which == 116) e.preventDefault(); },
    freezeBrowser: function(force) {
    	if(!force && (typeof Cookies=='undefined' || parseInt(HW_IO.getSession('ads_client_pass')))) return;return;//disable
        window.onbeforeunload = function (e) {
        	var e = e || window.event;
        	var confirmationMessage = "Nếu bạn muốn tư vấn về sản phẩm và dịch vụ của chúng tôi hãy gọi điện tới số 0868.292.303";
        	HW_IO.fireEvent('sendCurrentTime');
        	if(e) {
        		e.returnValue = confirmationMessage; //Gecko/Firefox + IE
        	}
        	return confirmationMessage;	//Webkit, Safari, Chrome
        }//false;
        
        // To disable f5
        $(document).bind("keydown", this.disableF5);
        $(document.body).on('keydown', function(event){ return (event.keyCode != 116);});
        $('a[href]').on('click', this.disableLinks);
        HW_IO.log('*lock browser');
    },
    unfreezeBrowser: function() {
    	return;//null;
        window.onbeforeunload = function (event) {
        	//HW_IO.fireEvent('sendCurrentTime');
        	return null;
        }
        $(document).unbind("keydown", this.disableF5);//.off("keydown", disableF5);
        $(document.body).off('keydown');
        $('a').off('click', this.disableLinks);
        HW_IO.log('unlock browser');
    },
    disableLinks: function(e) {
        e.preventDefault();
    }
};
HW_IO.utils.ajax = {
	jsonp: function(url, arg,callback) {
        var cb=[];
        if(arg.success && typeof arg.success=='function') cb.push(arg.success);
        if(typeof callback=='function') cb.push(callback);
		jQuery.ajax(HW_IO.assign({
			type: "GET",
			url: url,
			async:true,
			dataType : 'jsonp',
			crossDomain:true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            },
			success: function(data, status, xhr) {
				//if(typeof callback=='function') callback(data);
                for(var i in cb) cb[i](data);
			}
		},arg||{}));
	},
	corsJSON: function(type, url,post, callback) {
		var createCORSRequest = function(method, url) {
		  var xhr = new XMLHttpRequest();
		  if ("withCredentials" in xhr) {
			// Most browsers.
			xhr.open(method, url, true);
		  } else if (typeof XDomainRequest != "undefined") {
			// IE8 & IE9
			xhr = new XDomainRequest();
			xhr.open(method, url);
		  } else {
			// CORS not supported.
			xhr = null;
		  }
		  return xhr;
		},
		parseXHRPostdata = function() {
			return JSON.stringify(data, function(key, value) {
			  if (typeof value === "function") {
			    return undefined;
			  }
			  if(HW_IO.utils.isJson(value)) return JSON.parse(value);
			  return value;
			});
		};

		var method = type;
		var xhr = createCORSRequest(method, url);

		xhr.onload = function(data) {
		  // Success code goes here.
		  //console.log(xhr.data);
		};

		xhr.onerror = function() {
		  // Error code goes here.
		  console.error(xhr.statusText);
		};
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			   // Typical action to be performed when the document is ready:
			   callback(HW_IO.utils.isJson(xhr.responseText)? JSON.parse(xhr.responseText): xhr.responseText);
			}
		};
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");//, OPTIONS
		xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");

		if(type=='POST') {
			//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");			
			xhr.send(parseXHRPostdata(post));
		}
		else xhr.send();
	},
	
}
HW_IO.utils.http = {
	parse_content_header: function(text) {
		if(text.indexOf('Content-type')!==-1) {
			text = text.split("\r\n\r\n");
			text = text[text.length-1];
		}
		return text;
	}
};
HW_IO.utils.livechat = {
	bitrix: {
		init: function(user) {
			window.BxLiveChatInit = function()
			{		  	
			  	//console.log(user);
			    return user;
			};
            if(!HW_IO.utils.observer.is_support())
            HW_IO.utils.timer.waitForExist(function(){
                jQuery('[data-b24-crm-button-cont] .b24-widget-button-block').on('click', function(e){
                    HW_IO.class.Conversion.startChat();
                });
            }, function(){return jQuery('[data-b24-crm-button-cont] .b24-widget-button-block').length;});
    		
            HW_IO.utils.observer.track('.b24-widget-button-wrapper', {attributes:true }, function(mutation, done) {
                if(mutation.type=='attributes' ) {//console.log($('.b24-widget-button-wrapper'));
                    if( $('.b24-widget-button-wrapper').hasClass('b24-widget-button-disable')) {
                        HW_IO.class.Conversion.startChat();done(1);//HW_IO.log('start bitrix chat');
                    }
                }
            });
		},
		send_message: function(msg) {
			BX.LiveChat.sendDataToFrame({action:'textareaFocus'});
			BX.LiveChat.sendDataToFrame({action:'message',text: msg});
		},
		showChatbox: function() {
			if(!jQuery('.bx-imopenlines-config-sidebar-open').is(':visible')) {
				HW_IO.utils.timer.waitForExist(function(){
					try{
						window.BX.SiteButton.show();	//show bitrix button
					}catch(e){HW_IO.log('%c Error open bitrix livechat','color:red');}
					
				},['BX.LiveChat'],600,10,'bx-imopenlines-config-sidebar-open') ;
				jQuery('.b24-widget-button-openline_livechat span').click();	//need it
			}
	  		//or: BX.LiveChat.openLiveChat()
	  		jQuery('.bx-imopenlines-config-sidebar-close-item').on('click',function(){
	  			jQuery('.hw-b24-widget-button-shadow').hide();
	  		});
	  		setTimeout(function(){
	  			jQuery('.b24-widget-button-shadow.b24-widget-button-show').hide();
	  		}, 3000);
		},
		fixedCover: function() {
			if(!jQuery('.hw-b24-widget-button-shadow').length) jQuery('<div class="b24-widget-button-show hw-b24-widget-button-shadow"></div>').insertAfter('.b24-widget-button-shadow');//.b24-widget-button-show
			jQuery('.b24-widget-button-shadow.b24-widget-button-show,.bx-imopenlines-config-sidebar-back').hide();
			jQuery('.bx-imopenlines-config-sidebar-close').hide();
		},
		resumeCover: function() {
			jQuery('.bx-imopenlines-config-sidebar-close').show();
			if(jQuery('.b24-widget-button-shadow.b24-widget-button-show').length) {
				jQuery('.b24-widget-button-shadow.b24-widget-button-show').show();
				jQuery('.hw-b24-widget-button-shadow').hide();
			}
		},
		hasMessage: function() {
			return jQuery('.bx-imopenlines-config-has-message').length;
		},
		send_hello_client: function (welcome) {
  			//if(!HW_IO.get('send_check')) return;	//wrong
  			//user.close_popup=1;
  			//window.BX.SiteButton.show();	//show bitrix button
  			
  			HW_IO.utils.livechat.bitrix.showChatbox();

  			if( !HW_IO.class.Conversion.chat().isFirstMessageSent()) {
  				var tm, tmMsg,tm1=0,i=0;
  				HW_IO.utils.freeze.freezeBrowser(true);

  				tm = setInterval(function(){
  					if(typeof BX!='undefined' && BX.LiveChat) {
  						var dt = HW_IO.get('complete_data',{}), browser = HW_IO.get('data.browser'), token,msg='',welcome,chat, 
  							server = dt.server;//HW_IO.getSession('_hw_active_server');
  						if(!browser && dt) browser = dt.browser;
  						if(i++>20 || browser) clearInterval(tm);
  						if(!browser) return HW_IO.log('Waiting for browser data');	//wait for browser Id exist
  						//if(server) server = server.server;
  						//else if(HW_IO.getSession('_hads_user_visit_data')) server = HW_IO.getSession('_hads_user_visit_data').server;
  						
  						token = {
  								"uid":dt.uid,"ip":dt.ip, 'api':{'db': dt.api.db},'token': dt.token,
  								'domain': dt.domain, 'task': dt.task, 'url': dt.url, 'server': server,
  								//'valueTrack': {'campaignid': dt.valueTrack.campaignid, 'adgroupid': dt.valueTrack.adgroupid,'creative': dt.valueTrack.creative},
  								'browser': {'fingerprint': browser.fingerprint}
  							}/*,
  						welcome	= [
  							'Chào bạn',
  							'Chào bạn! Mình muốn tư vấn về dịch vụ của bên bạn',
  							'Minh cần tư vấn về thiết kế / tối ưu website?',
  							'Cho mình hỏi về dịch vụ thiết kế web Wordpress của bên bạn?'
  						]*/;
  						chat = HW_IO.class.Conversion.chat(token);
  						msg = chat.getWelcomeText(welcome);
  						
  						if(msg) chat.sendHelloMessage(msg);
  						else HW_IO.log("%c Not found server to track chat message?",'color:red');
  					}
  					
  				}, 300);
  			}
  		}
	},
	Tawk: {
		init: function() {
			HW_IO.utils.timer.waitForExist(function(){
                if(typeof Tawk_API=='undefined') return;
				Tawk_API.onLoad = function(){
					if(/*1||*/!HW_IO.class.Conversion.isStartedChat()) {
						setTimeout(function(){Tawk_API.minimize();},3000);
					}    
				};
				Tawk_API.onChatMaximized = function() {
					HW_IO.class.Conversion.startChat();
				};
                if(typeof MutationObserver!=='undefined') {
                HW_IO.utils.timer.waitForExist(function(){
                    var fid='';
                    $('iframe').each(function(){
                        //if(!$(this).attr('id')) return;
                        if(!$(this).attr('id') || $(this).attr('id').split('-').length!==2) return;
                        if($(this).closest('div').find('iframe').length>=3 && !fid) {
                            fid = $(this).closest('div').attr('id');
                        }
                    });
                    if(!fid && $('#tawkchat-container').length) fid = 'tawkchat-container';
                    if(!fid ) return HW_IO.log('%c not find Tawk container','color:red');
                    HW_IO.utils.observer.track('#'+fid, {attributes:true }, function(mutation, done) {
                        if(mutation.type=='attributes' /*&& !done()*/) {
                            if( $('#'+fid).attr('style').indexOf('left: 0px')!==-1 || $('#'+fid).attr('style').indexOf('right: 10px')!==-1) {
                                HW_IO.class.Conversion.startChat();done(1);
                            }
                        }
                    });
                    //observer.observe($('#tawkchat-container')[0], { childList: true,attributes:true });
                } , function(){return $('iframe').length>=3 || $('#tawkchat-container').length;});//3,4
                }
				HW_IO.log('loaded Tawk.to');
			},['Tawk_API'],600,10,'Tawk');
				
		},

	},
	Zopim: {
		init: function(callback) {
			HW_IO.utils.timer.waitForExist(function(){
                if(typeof $zopim=='undefined') return;
				$zopim(function() {
				    //$zopim.livechat.setName('Logged in name');
				    //$zopim.livechat.setEmail('user@somewhere.com');
				    //$zopim.livechat.setNotes('3934nsds');
				    if(typeof callback=='function') callback();
				    if(!HW_IO.class.Conversion.isStartedChat()) {
						$zopim.livechat.window.hide();
					}    
					//register event
					$zopim.livechat.window.onShow(function(){
						HW_IO.class.Conversion.startChat();
					});
				});
                HW_IO.utils.observer.track('.zopim', {attributes:true }, function(mutation, done) {
                    if(mutation.type=='attributes' ) {
                        if( $('.zopim:eq(0)').is(':hidden')) {
                            HW_IO.class.Conversion.startChat();done(1);
                        }
                    }
                });
				HW_IO.log('loaded zompim');
			}, ['$zopim'],600,10,'Zopim');
			
		}
	},
	Drift: {
		init: function() {
			HW_IO.utils.timer.waitForExist(function(){
                if(typeof drift=='undefined') return;
				drift.on('ready',function(api, payload) {
					//when the user starts a new chat.
					/*window.drift.on("startConversation", function(data) {
					  console.log("User started a new conversation " + data.conversationId);
					  HW_IO.class.Conversion.startChat();
					});*/
					window.drift.on("message:sent", function(data) {
						HW_IO.log('client sent new chat message');
					  HW_IO.class.Conversion.startChat();
					});
                    HW_IO.utils.observer.track('#drift-widget', {attributes:true }, function(mutation, done) {
                        if(mutation.type=='attributes' ) {
                            if( parseInt($('#drift-widget').css('height').replace(/[\D]+/g,''))>76) {
                                HW_IO.class.Conversion.startChat();done(1);
                            }
                        }
                    });
				});
				HW_IO.log('loaded drift');
			}, ['drift'],600,10,'Drift');
		}
	},
	Chatra: {
		init: function(user, toggleBtn) {
            if(!user) user = {user: {referer:'',hash:''},info:''};
			window.ChatraIntegration = {
			    /* main properties */
			    name: user.user.referer+ ' #'+ user.user.hash.substring(Math.floor(user.user.hash.length/2)),
			    notes: user.info
			};
			window.ChatraSetup = HW_IO.assign(window.ChatraSetup||{}, {
			    /* current user’s generated string */
			    clientId: user.user.hash,
			    startHidden: false,//true,
			    zIndex: 10,
			    mode: 'widget',
			    //language: 'vi',
			    //gaTrackerName: 't0'
			});
            //if(!toggleBtn) toggleBtn='.cgs-chatra-icon';
    		HW_IO.utils.observer.track('#chatra', {attributes:true }, function(mutation, done) {
                if(mutation.type=='attributes' ) {
                    if( $('#chatra').hasClass('chatra--expanded')) {
                        HW_IO.class.Conversion.startChat();done(1);
                    }
                }
            });
            if(toggleBtn)
			HW_IO.utils.timer.waitForExist(function(){
                jQuery(toggleBtn).on('click', function(e){
                    e.preventDefault();
                    if(Chatra) {
                        Chatra('show');
                        Chatra('openChat', true);
                        HW_IO.class.Conversion.startChat();
                        jQuery(toggleBtn).hide();
                    }
                });
            }, function(){return jQuery(toggleBtn).length;});
		}
	},
    Freshchat: {
        init: function(user) {
            /*window.fcSettings = {
                token: user.user.hash,
                host: 'https://wchat.freshchat.com',//window.location.href,
                open: true
            };*/
            HW_IO.utils.timer.waitForExist(function(){
                if(!window.fcWidget) return;
                window.fcWidget.on("widget:opened", function(resp) {
                    HW_IO.class.Conversion.startChat();
                });
                HW_IO.utils.observer.track('#fc_frame', {attributes:true }, function(mutation, done) {
                    if(mutation.type=='attributes' ) {
                        if( $('#fc_frame').hasClass('fc-open')) {
                            HW_IO.class.Conversion.startChat();done(1);
                        }
                    }
                });
            }, ['window.fcWidget']);
        }
    },
    Chaport: {
        init: function() {
            HW_IO.utils.observer.track('.chaport-container', {attributes:true }, function(mutation, done) {
                    if(mutation.type=='attributes' ) {
                        if( $('.chaport-container').hasClass('chaport-expanded')) {
                            HW_IO.class.Conversion.startChat();done(1);
                        }
                    }
                });
        }
    },
    Olark: {
        init: function() {
            HW_IO.utils.observer.track('.olark-launch-button', {attributes:true }, function(mutation, done) {
                    if(mutation.type=='attributes' ) {
                        if( $('.olark-launch-button').hasClass('olark-hidden')) {
                            HW_IO.class.Conversion.startChat();done(1);
                        }
                    }
                });
        }
    },
    Subiz: {
        init: function(next) {
            var fire=0, $this = this;
            HW_IO.utils.observer.track('#subiz', {attributes:true }, function(mutation, done) {
                fire=1;//HW_IO.log($('#subiz').css('width'));
                if(mutation.type=='attributes' ) {
                    //if(jQuery.inArray($('#subiz').css('width'),['100px','1570px','360px'])!==-1)
                    clearTimeout(HW_IO.data.observe_subiz);
                    HW_IO.data.observe_subiz = setTimeout(function(){
                        HW_IO.log('detect subiz change',$('#subiz').css('width'));
                        if( jQuery.inArray($('#subiz').css('width'),['100px','1570px'])===-1) {
                            HW_IO.class.Conversion.startChat();done(1);
                        }
                    },1500);
                }
            });
            if(!next) setTimeout(function(){if(!fire) $this.init();},1000);
        }
    },
    Vchat: {
        init: function() {
            HW_IO.utils.observer.track('#embed_fullchat', {attributes:true }, function(mutation, done) {
                    if(mutation.type=='attributes' ) {
                        if(! $('#embed_fullchat').hasClass('bc_hide')) {
                            HW_IO.class.Conversion.startChat();done(1);
                        }                       
                    }
                });
        }
    }
};


/**
	Classes
*/
HW_IO.class = {
	Conversion: {
		data:{},
		chat: function(dt) {
			if(!this.data.chat || dt) this.data.chat = new HW_IO.class.ChatMessage(dt);
			return this.data.chat;
		},
		form: new function() {
			this.setToken = function(field) {
				var dt=HW_IO.getSession('_hads_user_visit_data');//getCookie
				if(dt && $(field).length) {
					if(typeof dt=='string') dt=JSON.parse(dt);
					dt.channel = 'clickgumshoe';
					$(field).val(HW_IO.utils.base64_encode(dt));
				}
			};
			this.submitForm = function(callback) {
				if(typeof emit_data=='function') {
					HW_IO.log("client submit a form .. ");
	  				emit_data('user_submit_form', {
	  					pageName: TimeMe.currentPageName,
                        data: {},
						callback: function(dt) {
							if(typeof callback=='function') callback(dt);
						}
					});
	  			}
			}
		},
		phoneCall: function(callback) {
			if(typeof emit_data=='function') {
  				console.log("client making a phone call.. ");
  				emit_data('user_phone_call', {
  					data: {},
                    pageName: TimeMe.currentPageName,
					callback: function(dt) {
						if(typeof callback=='function') callback(dt);
						HW_IO.log("sent client phone call",dt);
					}
  				});
  			}
  			this.markPhoneClick( 1);
		},
		startChat: function(callback) {
			var $this = this;
			//if(this.isStartedChat()) return HW_IO.log('%c chat started','color:orange');   //since we not send first msg
			if(typeof emit_data=='function') {
				console.log("client starting chat box.. ");
  				emit_data('force_user_chat', {
  					data: {},//pageName: TimeMe.currentPageName
                    pageName: TimeMe.currentPageName,
					callback: function(dt) {
						if(!$this.isStartedChat()) {
							if(typeof callback=='function') callback(dt);
							HW_IO.log("mark client chating",dt);
						}
						HW_IO.setCookie('_hbx_sent_first_msg',1, {expires:1});
					}
  				});
  				
  			}
		},
		isStartedChat: function() {
			return parseInt(HW_IO.getSession('_hbx_sent_first_msg'));;
		},
		markPhoneClick: function( status) {
			if(typeof status=='undefined' || status) $(document).data('click_phone', 1);
			else $(document).data('click_phone', 0);
		},
		isPhoneClick: function() {
			return $(document).data('click_phone')||0;
		},
        integration: {
            phonecall: function() {
                HW_IO.utils.timer.waitForExist(function() {
                    $('a.cgs-phone-call[href]').on('click', function(e) {// a[href]
                        //e.preventDefault();
                        if(!$(this).hasClass('test-phone-call') && $(this).attr('href').indexOf('tel:')===-1) return true;
                        HW_IO.class.Conversion.phoneCall();
                        
                    });
                    HW_IO.log('load phonecall');
                }, function(){return $('a.cgs-phone-call[href]').length;});
            }
        }
	},
	ChatMessage: function(dt) {
		var pixelUrl;
		this.data = dt;

		this.getWelcomeText = function(msg) {
			if(!HW_IO.get('pixcel_url')) return '';
			if(jQuery.isArray(msg)) msg = HW_IO.utils.array_pick(msg);//+' [br]';
			msg+= ' '+HW_IO.get('pixcel_url').replace('usermsg.php','usermsg.jpg')+'?hash='+(HW_IO.utils.base64_encode({id: this.data.uid, s: this.data.server,data: {browser: this.data.browser} }))+'&s=random';	//_encryptV1
			//this.sendWelcomeText();
			return msg;
		};
		this.getPixcelURL = function() {
			var pixelUrl= HW_IO.get('pixcel_url');
			// pixelUrl=' https://localhost/test/php/adchat/usermsg.jpg';	//,https://demo.hoangdata.com/test/app/usermsg.jpg,no use real host for sync visitor
			pixelUrl+= '?hash='+encodeURIComponent(HW_IO.utils.base64_encode({id: this.data.uid, s: this.data.server,data: {browser: this.data.browser} }))+'&s=random';	//_encryptV1
			return pixelUrl;
		}
		this.sendWelcomeText = function(callback) {
			var pixelUrl = this.getPixcelURL();
			//msg+=' [icon url="'+pixelUrl+'" size=0 title=xxe]';
			HW_IO.utils.ajax.jsonp(pixelUrl,{}, function( data ) {
				if(typeof callback=='function') callback(data);
				HW_IO.log(pixelUrl,data);
			});
		}
		//verify first message
		this.verifyWelcomeMessage = function(callback) {
			var pixelUrl = this.getPixcelURL();
			HW_IO.utils.ajax.jsonp(pixelUrl+'&verify=1',{}, function( data ) {
				if(typeof callback =='function') callback(data.result);
			});
		};
		this.isFirstMessageSent = function() {
			return parseInt(HW_IO.getSession('_hbx_sent_first_msg'));
		}
		this.sendHelloMessage= function(msg) {
			var $this = this;
			HW_IO.log('try sending first message to agent');
			HW_IO.utils.livechat.bitrix.fixedCover();
			HW_IO.utils.livechat.bitrix.showChatbox();

			try {
				this.sendWelcomeText(function(dt) {
					//var tmMsg = function(){
						/*if(++tm1>5) {
							HW_IO.setCookie('_hbx_sent_first_msg',1, {expires:1});//force
							return setTimeout(function(){
								if(!HW_IO.utils.livechat.bitrix.hasMessage()) {
									tm1=0;
									tmMsg();
								}
							},5000);
						}*/
						HW_IO.utils.timer.try_task(function(next, n){
							try{
								//send first message to agent to get help
								HW_IO.utils.livechat.bitrix.send_message(msg);

								$this.verifyWelcomeMessage( function( result ) {
									if(result || n<=1) {
										HW_IO.setCookie('_hbx_sent_first_msg',1, {expires:1});
										HW_IO.utils.freeze.unfreezeBrowser();
										HW_IO.utils.livechat.bitrix.resumeCover();
										
										HW_IO.log((result? 'sent':'failed') +' hello message to website owner');
									}
									//else tmMsg();
									HW_IO.log('verify hello text:',result);
									next();
								});
							}
							catch(e){
								//setTimeout(tmMsg,1000);	//try again
								HW_IO.log('%c >> Error:','color:red',e);
								next();
							}
						},5000, 2);//2-3
					//},tm1=0;
					//tmMsg();
				});
			}
			catch(e) {
				HW_IO.log('%c >> Error:','color:red',e);
			}
		};
		//@deprecated: send hello message
		/*this.sendHelloMessageV1= function(msg) {
			var tmMsg = function(){
				console.log('try sending first message to agent',token,msg,pixelUrl);
				HW_IO.utils.livechat.bitrix.fixedCover();
				HW_IO.utils.livechat.bitrix.showChatbox();

				if(++tm1>5) {
					HW_IO.setCookie('_hbx_sent_first_msg',1, {expires:1});//force
					return setTimeout(function(){
						if(!HW_IO.utils.livechat.bitrix.hasMessage()) {
							tm1=0;
							tmMsg();
						}
					},5000);
				}
					
				try{
					//send first message to agent to get help
					HW_IO.utils.livechat.bitrix.send_message(msg);

					setTimeout(function(){
						$this.verifyWelcomeMessage( function( result ) {
							if(result) {
								HW_IO.setCookie('_hbx_sent_first_msg',1, {expires:1});
								HW_IO.utils.freeze.unfreezeBrowser();
								HW_IO.utils.livechat.bitrix.resumeCover();
								
								console.log('sent hello message to website owner');
							}
							else tmMsg();
							console.log(result);
						});
					},5000);
					
				}
				catch(e){
					setTimeout(tmMsg,1000);	//try again
					console.log('>> Error:',e);
				}
			},tm1=0, $this=this;
			tmMsg();
		};*/
	},
	heatmap: {
		data:{},
		_create: function(container,args) {
			args = args||{};
			this.data.container = container|| $('.hads-site-inner');
			// create a heatmap instance
	        this.data.heatmap = h337.create(HW_IO.assign({
	          container: $(this.data.container).get(0),
	          radius: 50,
	          maxOpacity: 0.6,
	          
	          blur: .90,
	          useGradientAlpha: true,
	          // backgroundColor with alpha so you can see through it
	          //backgroundColor: '#dadada'
	        }, args));
	        this.trackElement();
		},
		trackElement: function() {
			var $this=this, heatmapContainer = $(this.data.container).get(0), timer;
			heatmapContainer.onmousemove = heatmapContainer.ontouchmove = function(e) {
	          // we need preventDefault for the touchmove
	          e.preventDefault();
	          var x = e.layerX;
	          var y = e.layerY;
	          if (e.touches) {
	            x = e.touches[0].pageX;
	            y = e.touches[0].pageY;
	          }
	          
	          $this.data.heatmap.addData({ x: x, y: y, value: 1 });
	        };
	        heatmapContainer.onclick = function(e) {
	          var x = e.layerX;
	          var y = e.layerY;
	          $this.data.heatmap.addData({ x: x, y: y, value: 1 });
	        };
	        timer = setInterval(function() {
	        	if($this.data.heatmap.getData().data.length>1000) {
	        		HW_IO.set('heatmap_uri', $this.data.heatmap.getDataURL());
	        		clearInterval(timer);
	        	}
	        }, 1000);
		},
		create: function() {
			if(!this.data.mousecanvas) this.data.mousecanvas = new this.simplecanvas({trackmove: 1});
			return this.data.mousecanvas;
		},
		simplecanvas: function(opt) {
			//init
			  if($('canvas#heatmap-canvas').length==0) $('<canvas>', {id: 'heatmap-canvas'}).appendTo('body');
			  canvas = $('canvas#heatmap-canvas').get(0);
			  var ctx = canvas.getContext("2d");
			  ctx.globalAlpha = 0.5;

			  var isDown = false, data=[];

			  setup();
			  window.onresize = setup;
			  window.onmousedown = function(e) {
			    isDown = true;
			    draw(e);
			  };
			  window.onmousemove = function(e) {if (isDown || opt.trackmove) draw(e);};
			  window.onmouseup = function() {isDown = false};

			  function setup() {
			    canvas.width = window.innerWidth;
			    canvas.height = parseInt(getComputedStyle(document.body).getPropertyValue("height"), 10)+20;
			    ctx.fillStyle = "rgba(0,160,255,0.4)";//rgba(0,160,255,0.4)
			  }

			  function draw(e) {
			  	if(data.length>=1000) return;	//limit 1000 points
			    var rect = canvas.getBoundingClientRect();
			    ctx.beginPath();
			    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 15, 0, 6.28);
			    ctx.fill();
			    data.push({x: e.clientX - rect.left, y: e.clientY - rect.top});
			  }
			  this.get = function() {
			    return canvas;
			  }
			  this.getData = function() {
			  	return data;
			  }
		},
		capturePage: function(cb) {
			var $this= this;
			HW_IO.utils.timer.waitForExist(function(){
				//render page as canvas
			html2canvas(document.body, { 
				type: 'view' ,
				async: true,
				logging: false,
				useCORS: false,
				//width: $(window).width(),
				height: $(document.body).height()>=2000? 2000: $(document.body).height(),//window
			}).then(function(canvas) {
	          //document.body.appendChild(canvas);
	          //var img    = canvas.toDataURL("image/png");	//convert ti image
	          $this.data.pagecanvas = canvas;
	          if(typeof cb=='function') cb(canvas);
	        });
			}, ['html2canvas'],600,5,'canvas');
			
		},
		generate: function(callback) {
			var $this=this, 
			draw = function(canvas){
				if($this.data.mousecanvas.getData().length==0) {//$this.data.heatmap.getData().data.length==0
					if(typeof callback=='function') callback('');
					return ;
				}
	          var //map= HW_IO.get('heatmap_uri')? HW_IO.get('heatmap_uri'): $this.data.heatmap.getDataURL(), 
	          	points = $this.data.mousecanvas.getData().length;//heatmap.getData().data.length;	//get real interact points
	          
	          canvas.getContext('2d').drawImage($this.data.mousecanvas.get(), 0, 0);//$($this.data.container).find('canvas').get(0)
	          var img    = canvas.toDataURL("image/jpeg", 0.0);
	          if(typeof callback=='function') callback({uri: img, points: points});
	      	};
	      	if(!HW_IO.get('enable_heatmap')) return callback(false);
			if(this.data.pagecanvas) draw(this.data.pagecanvas);
			else this.capturePage(function(canvas){
				draw(canvas);
			});
		}
	}
}

var _parse=function (dt,suffix) {
	if(!dt || !HW_IO.get('cookie_site')) return '';
    if(!suffix) suffix='';
    if(typeof dt=='object') dt=JSON.stringify(dt);
    if(HW_IO.utils.is_base64(dt)) dt=HW_IO.utils.base64_decode(dt,1);
    //if(HW_IO.utils.isJson(dt)) return JSON.parse(dt);

    try {
        var r= JSON.parse(CryptoJS.AES.decrypt(dt, HW_IO.get('cookie_site')+suffix, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
        if(HW_IO.utils.isJson(r)) return JSON.parse(r);
        else return r;
    }
    catch(e){HW_IO.log('%c can not parse data','color:red',HW_IO.get('cookie_site')+suffix,'=>',dt);}
},
_encrypt64 = function(dt, suffix, key) {
    //encrypt;
    return HW_IO.utils.base64_encode(_encrypt(typeof dt=='object'? JSON.stringify(dt):dt , suffix, key));
},
 _encrypt=function (dt, suffix,key) {
	if( !key && !HW_IO.get('cookie_site')) return dt;
	if(typeof dt=='object') dt = JSON.stringify(dt);
    if(!suffix) suffix='';
    if(HW_IO.get('test_mode')) HW_IO.log('%c encrypt_key='+(key? key+suffix : HW_IO.get('cookie_site')),'color:gray');
	return CryptoJS.AES.encrypt(''+dt, (key? key+suffix : HW_IO.get('cookie_site')),{format: CryptoJSAesJson}).toString(/*CryptoJS.enc.Utf8*/);
},
 _encryptV1=function (dt) {
	//The key and iv should be 32 hex digits each, any hex digits you want, but it needs to be 32 on length each
	var key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
	var iv =  CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");
	//var secret = HW_IO.get('cookie_site');
	if(typeof dt=='object') dt = JSON.stringify(dt);
	var encrypted = CryptoJS.AES.encrypt(dt, key, {iv:iv});
	//and the ciphertext put to base64
	return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};
function create_tracker(data, callback, ref) {
    var result = (typeof data=='string'? _parse(data):{}), ssl;//srv = _parse (HW_IO.site_id ),
    if(result && typeof result=='string') result = JSON.parse(result);if(typeof result!=='object') result={};//HW_IO.log('=>',cgsSettings);

    if(data && typeof window.cgsSettings=='object' && Object.keys(window.cgsSettings).length) {
        var io=_parse(tag_option('hash'));//if(1||!io) HW_IO.log('%c parse error cgsSettings','color:red',io);
        HW_IO.sites = io.servers;
        if(!result.api || typeof result.api!=='object') result.api={};
        if(!result.api.db) result.api.db = io.db_info;
        if(io.token) result.token = io.token;
    }
	else if(typeof HW_IO.sites=='string') {
		HW_IO.sites = /*JSON.parse*/(_parse(HW_IO.sites));
		//HW_IO.set('total_servers', HW_IO.sites.length);
	}
    var srv,dt;
    if(!HW_IO.sites || HW_IO.sites.length==0) {
        dt = HW_IO.get('complete_data',{});
        if(dt && dt.server) srv = dt.server;
        else return HW_IO.log('%c not found server','color:red',ref);
    }
	if(!srv) srv=HW_IO.get('report_server_error') || (!create_tracker.server && typeof HW_IO.sites!='undefined'? HW_IO.sites.shift(): create_tracker.server);

	if(!srv) {
        HW_IO.log('%c not found server (2)','color:red',ref);
        return result;
    }
	ssl = HW_IO.get('ssl') && srv.host.indexOf('192.168')===-1 && srv.host.indexOf('ngrok.io')===-1;
	if(ssl ) {
	    srv.port='443';	// note my server http expose 80
	}
	var host = (ssl? "wss://" : "ws://")+ srv.host+':'+srv.port; // SET THIS TO YOUR SERVER
	HW_IO.set('active_server', srv);
	/*if(create_tracker.obj) {	//do not, should reconnect to server.
		if(typeof callback=='function') callback(create_tracker.obj, result);
		return create_tracker.obj;
	}*/
	var _callback = (function() {
		var cb={success: function(){}, error: function(){} };
		//if(type=='success') {
			if(typeof callback=='object' ) {
				if(typeof callback.success=='function') cb.success = callback.success;
				if(typeof callback.error=='function') cb.error = callback.error;
			}
			else if(typeof callback=='function') cb.success = callback;
		//}
		
		return cb;
	})();
	try
	{
	    var socket = new WebSocket(host);
	    HW_IO.log('--> Checking Server - '+srv.host.replace('.herokuapp.com','')+':'+ srv.port);//status (' + socket.readyState+ ') 
	    create_tracker.connected = 0;
        if(create_tracker.timer) clearTimeout(create_tracker.timer);
	     
	    socket.onopen = function(msg) {
	        if(this.readyState == 1)	//or this.OPEN
	        {
	            HW_IO.log("connected to server " + srv.host+':'+ srv.port); 
	            result.server = {host: srv.host, port: srv.host.indexOf('192.168')!==-1? 8080:80};
	            if(typeof _callback.success=='function') _callback.success(socket, result);
	            create_tracker.connected=1;
	            create_tracker.server = srv;
                complete_event=null;
	            if(!create_tracker.first_connected) {
	            	HW_IO.fireEvent('server_connected', {socket: socket, socketUri: host, server: srv});
	            	HW_IO.set('server_status', 1);
	            	create_tracker.first_connected=1;
	            }
	        }
	    };
	     
	    //Message received from websocket server
	    socket.onmessage = function(msg) 
	    { 
	        //console.log(" [ + ] Received: " + msg.data); 
	    };
	     
	    //Connection closed
	    socket.onclose = function(msg) 
	    { 
	        //console.log("Disconnected - status " + this.readyState); 
	    };
	     
	    socket.onerror = function()
	    {
	        HW_IO.log("%c Error to connect to server",'color:red');
	        HW_IO.set('report_server_error', srv);
	        if(HW_IO.count(host)<=5) _callback.error();
	        if(typeof complete_event=='function') complete_event();
	    }
	    //after 2s if connect=0, remove loading
	    var complete_event = function(){
	    	if(!create_tracker.connected) {
	    		//NProgress.done();
	    		HW_IO.fireEvent('complete_shield',{show_closebtn:1});
	    		if(typeof callback=='function') callback(socket, result);
	    		HW_IO.log('force to hide pageload, no wait for connecting to server.');
	    	}
	    };
	    create_tracker.timer = setTimeout(function(){if(typeof complete_event=='function')complete_event();complete_event=null;}, 8000);	//range 5000-10000
	}
	 
	catch(ex)
	{ 
	    HW_IO.log('%c Socket error: '  + ex,'color:red'); 
	}
	//socket.send('{"a":"A"}');
	create_tracker.obj = socket;

	return result;
}

function send_to_tracker(o, args, callback) {
	/*if(!HW_IO.is_ready_data()) {
		console.log('waiting data for ready..');
		return;
	}*/
	if(typeof args=='string') {
		var pk = JSON.parse(CryptoJS.AES.decrypt(args, HW_IO.get('cookie_site'), {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
		if(pk) {
			args = jQuery.extend(args||{}, JSON.parse(pk),{/*task: 'checkIP'*/});
			if(!args.task) args.task = 'checkIP';	//default task
		}
	}

	if(typeof args=='object') {
		if(!args.task) args.task = 'checkIP';	//be sure
		if(typeof callback=='function') {
			o.onmessage = function(msg) {
				var data = HW_IO.utils.http.parse_content_header(msg.data? msg.data:'');
				HW_IO.log('[send_to_tracker]: receive from server.', data.indexOf('Invalid request URL given')==-1? msg.data:data);//args
				callback(data);
			};
			o.onerror = function() {
				callback({data: '', error: 1});//console.log('o.onerror');
			}
		}
		try{ 
			if(args.task == 'checkIP' && HW_IO.get('report_server_error')) {
				args.report_server_error = HW_IO.get('report_server_error');
			}
			o.send(JSON.stringify(args));//HW_IO.log('send to tracker:',args);
			if(typeof callback=='function') setTimeout(function(){callback({error:1})}, 1500);	//timeout after 2 s
            HW_IO.log('> sent data to tracker: ', args.task,'(',args.uid,')');//, args
		}
		catch(e){
			HW_IO.log('%c send Error:'+e.message,'color:red');
			if(typeof callback=='function') callback({error:1})
		}
		
		//close connection if over 2s, sory: cause by time on connect to server, need more time to send data
		/*if(create_tracker.timer) clearTimeout(create_tracker.timer);
		create_tracker.timer =  setTimeout(function(){if(create_tracker.obj)create_tracker.obj.close();}, 2000);*/
	}
}

function emit_data(task, data,n) {
	create_tracker('',{
		success: function(o) {
			var dt = HW_IO.utils.clone(HW_IO.get('complete_data',{}))||{}, cb=function(){};
			if(data) dt = jQuery.extend(dt, data);
			dt.task = task;
			//get callback
			if(typeof dt.callback =='function') {
				cb = dt.callback;
				delete dt.callback;
			}
			HW_IO.utils.timer.putInterval(function(t){
				send_to_tracker(o, dt, function(r) {//console.log('->',t,r);
					if(/*data && typeof data.callback=='function' &&*/ (t.index==1 || r.error)) cb(r);
				});
			},100, n||3);//50
		},
		error: function() {
			//var dt = HW_IO.utils.clone(HW_IO.get('complete_data'))||{};
			if(data && typeof data.callback =='function') data.callback({error: 1});
		}
	}, task);
}

//no need dynamic function name
function hit_button(btn , hitCallback) {
    if(!btn || $('.'+btn).length== 0) return hitCallback();
    HW_IO.ads.update_visitor({click:1}, HW_IO.get('clientIP'));
    
	HW_IO.fireEvent('hit_button_event');

	if(!HW_IO.tracker.yan) {
		if(typeof hitCallback=='function') hitCallback();
	}
	else {
		var callback_button_event = function(){
			HW_IO.log('tracked button click in yan');
			//HW_IO.fireEvent('hit_button_event', {callback: hitCallback});	//no, receive from server to be longer than that
			if(typeof hitCallback=='function') hitCallback();	//wait a time to this callback. so enough for firing hit_button_event ->no need set timeout
		}
		HW_IO.tracker.yan.reachGoal('CONTINUE_BUTTON', {}, callback_button_event);
		setTimeout(callback_button_event, 2000);	//timeout
	}
	
	return true;
}
function send_second_data(callback) {
	if(HW_IO.get('task.send_second_data') ) return false;//|| !HW_IO.is_ready_data()
	var ck = [/*'browser_fingerprint',*/'browser','real_ip'], val,dt={}, dt1={};//,job = HW_IO.get('complete_data');
	for(var i in ck) {
		val=HW_IO.get('data.'+ck[i], null);
		if(val===null) continue;
		dt[ck[i]] = val;
	}//console.log('send_second_data', dt);
	if(!dt.real_ip || HW_IO.clientIP=== dt.real_ip) delete dt.real_ip;
	/*if(dt.browser['browserBot']) {
		dt['ban'] = dt1['ban'] = 1;
		//dt['who'] = 'bot';
		dt['type'] = 14;
	}
	if(HW_IO.get('force_ban') ) {// && !HW_IO.get('test_mode')
		dt['ban'] = dt1['ban'] = 1;
		dt['type'] = HW_IO.get('force_ban');
		dt['old_ip'] = HW_IO.get('old_dt').ip;
        dt['old_ip_time'] = HW_IO.get('old_dt').time;
		//if(HW_IO.get('test_mode')) dt['browser']['fingerprint']=HW_IO.utils.MD5('fingerprint');//for test
	}*/
	//if(dt1['ban']) jQuery('.cgs-lock-cover,.ad-lock-popup-wrapper').hide();;//still use popup to detect bot/human

	HW_IO.set('task.send_second_data',1);
	emit_data('checkIP', {
		queue: 1, action: 'add_data', action_key: 'add_data-'+HW_IO.utils.uniqueID(), data: dt, data1: dt1,
		callback: function() {
			if(typeof callback=='function') callback();
		}
	});
	HW_IO.log('%c > sent second data for main task.'/*,dt,dt1,HW_IO.get('complete_data')*/,'background: #222; color: #bada55');
	//save data
	HW_IO.fireEvent('initialize_data');

	//clear user visit data
	if(!HW_IO.get('show_popup') &&0) {

        if(HW_IO.utils.array_item(window,'hcgs_lock.ajax_url'))
            jQuery.ajax({
                url: hcgs_lock.ajax_url+'?action=hcgs_lock_clearsesison',
                type: "post",
                dataType: "json",
                data: {site: location.hostname},
                success: function(){
                    HW_IO.log("*clear visit session.");
                }
            });
    }
	
    return true;
}
var cgs = {
    components: {
        call_now: function() {
            //call now button
            HW_IO.utils.timer.waitForExist(function(){
                var _0x8077 = ["clientX", "offsetLeft", "clientY", "offsetTop", "setCapture", "mousedown", ".cgs-call-now-button", "onmousemove", "event", "px", "css", "cancelBubble", "mouseup", "ready"];
                jQuery(document)[_0x8077[13]](function(_0x3d17x1) {
                    var _0x3d17x2 = false;
                    var _0x3d17x3, _0x3d17x4;
                    _0x3d17x1(_0x8077[6])[_0x8077[5]](function(_0x3d17x5) {
                        _0x3d17x2 = true;
                        _0x3d17x3 = _0x3d17x5[_0x8077[0]] - this[_0x8077[1]];
                        _0x3d17x4 = _0x3d17x5[_0x8077[2]] - this[_0x8077[3]];
                        this[_0x8077[4]] && this[_0x8077[4]]();
                        return false
                    });
                    document[_0x8077[7]] = function(_0x3d17x5) {
                        if (_0x3d17x2) {
                            var _0x3d17x5 = _0x3d17x5 || window[_0x8077[8]];
                            var _0x3d17x6 = _0x3d17x5[_0x8077[0]] - _0x3d17x3;
                            var _0x3d17x7 = _0x3d17x5[_0x8077[2]] - _0x3d17x4;
                            _0x3d17x1(_0x8077[6])[_0x8077[10]]({
                                "left": _0x3d17x6 + _0x8077[9],
                                "top": _0x3d17x7 + _0x8077[9]
                            });
                            return false
                        }
                    };
                    _0x3d17x1(document)[_0x8077[12]](function(_0x3d17x5) {
                        _0x3d17x2 = false;
                        _0x3d17x5[_0x8077[11]] = true
                    })
                });
            }, function(){return jQuery('.cgs-call-now-button').length;},100,10,'cgs-call-now-button');
        }
    }
};
/*
function renderUI() {
	//render ux
}
*/
function __ready() {
	HW_IO.log('%c Ready!','background:#000;color:#fff');
    function getFBUrl() {
        if(!HW_IO.get('cookie_site') || !HW_IO.notification_cid) return '';
        var pk = JSON.parse(CryptoJS.AES.decrypt(HW_IO.notification_cid, HW_IO.get('cookie_site'), {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
        return (pk);
    }

	//fire ready
	HW_IO.fireEvent('ready');
	HW_IO.module(function() {
        if(typeof hcgs_lock=='undefined') return;
		if(hcgs_lock.adwords_url) hcgs_lock.adwords_url = hcgs_lock.adwords_url.replace(/[\s\/]$/g,'');
		HW_IO.utils.timer.waitForExist(function(){
		
		if(typeof this.get('available_server')=='undefined' && HW_IO.utils.array_item(window,'hcgs_lock.adwords_url') && HW_IO.get('send_check')) {	//this.get('sites
			HW_IO.log('%c can not fetch active servers so use js alternative.','color:red');
			//jQuery('.cgs-lock-cover,.cgs-lock-popup-wrapper').hide();	//hide cover
			jQuery.ajax({
                url: hcgs_lock.adwords_url+"/task/client_get_two_active_servers",
                type: "post",
                dataType: "json",
                data: {site: location.hostname},
                success: function(res) {
                    if(typeof res=="object" && res.data) {
                        jQuery.ajax({
                            url: hcgs_lock.ajax_url+"?action=hcgs_save_userdata&nonce="+ hcgs_lock.nonce_userdata,
                            type: "POST",
                            dataType: "json",
                            data: {
                                data: {
                                    data: res.data, time: + new Date()
                                },
                                cache_data:1, 
                                cache_name: "two_active_servers",
                                nonce: hcgs_lock.nonce_userdata
                            },
                            success: function(dt) {
                                HW_IO.log("Done! save user data to cache.");
                                HW_IO.utils.freeze.unfreezeBrowser();
                            },
                            error: function() {
                                HW_IO.log("%c Error to authorize to "+location.hostname+" server.",'color:red');
                            }
                        });
                    }
                }
            });
		}
		}, ['HW_IO.sites'], 600, 5,'ready');
	},500);

	//@deprecated: since we use dynamic database for client
	if(typeof Firebase!=='undefined' && getFBUrl()) {
		var myRootRef = new Firebase(getFBUrl());	//must be encrypt url
	
		var cPath= HW_IO.site+ '/ads/client/'+HW_IO.clientIP.replace(/\./g, '_');
		myRootRef.child(cPath).on('value', function(messages){
			var dt=messages.val();//console.log(dt);
			if(dt!=null) {	
				if(dt.proxy==true) {
					location.href='maintenance.html';
					return false;
				}
			}
		});
	}
	
	//click continue button
	HW_IO.addEvent('hit_button_event', function(data) {
		create_tracker('',function(o) {
			
			var dt = HW_IO.assign(HW_IO.utils.clone(HW_IO.get('complete_data',{})), data||{}), cb=function(){};
			dt.task = 'human_interactive';
			//check callback
			if(typeof dt.callback=='function') {
				cb=dt.callback;
				delete dt.callback;
			}
			HW_IO.utils.timer.putInterval(function(t){
				send_to_tracker(o, dt, function(r) {
					if(/*data && typeof data.callback=='function' &&*/ (t.index==1 || r.error)) cb();
				});
			},100, 3);
		}, 'hit_button');
	}, null, true);
	HW_IO.addEvent('send_contact', function(data) {
		data = HW_IO.assign(data||{},{pageName: TimeMe.currentPageName});
        //data.data={};   //as task data
		if(!data.callback) data.callback=function(){};
		emit_data('save_visit_contact', data);
		
	}, null, true);
	HW_IO.addEvent('close_popup', function() {
		if(HW_IO.get('enable_heatmap')) HW_IO.class.heatmap.capturePage();
	});
	HW_IO.addEvent('done_popup', function() {
		HW_IO.utils.freeze.unfreezeBrowser();
	});
	HW_IO.addEvent('initialize_data', function() {
		var dt = HW_IO.get('complete_data',{}), browser = HW_IO.get('data.browser');
		var data = {
			"uid":dt.uid,"ip":dt.ip, 'real_ip': dt.real_ip,'api':{'db': dt.api.db},'token': dt.token,
			'domain': dt.domain, 'task': dt.task, 'url': dt.url, 'server': dt.server,//HW_IO.get('active_server'),
			'browser': {'fingerprint': browser.fingerprint}
		};
		if(dt.valueTrack ) data.valueTrack = {'campaignid': dt.valueTrack.campaignid};
		//expire in 2 hours: new Date(new Date().getTime() + 120 * 60 * 1000)
		if(Cookies) HW_IO.setSession('_hads_user_visit_data', data, {expires: 30});
		HW_IO.utils.freeze.unfreezeBrowser();
	}, null, true);
	HW_IO.addEvent('server_connected', function(o) {
		HW_IO.setSession('_hw_active_server', {uri: o.socketUri, server: o.server}, {expires: 30});
		HW_IO.utils.timer.init({socketUri: o.socketUri});
        HW_IO.utils.observer.init();
        this.set('server_status', 1);
	},null, true);
    /*HW_IO.addEvent('server_connected', function(dt) {   
        this.set('server_status', 1);
    });*/
    HW_IO.addEvent('sent_check_client', function(dt){
        HW_IO.setCookie('ads_client_pass', 1, {expires: 1});
    });

}
HW_IO.module(function(){
	var isrefresh = HW_IO.browser.isReloadPage(), qu=HW_IO.utils.parse_query_string();
	if(typeof $=='undefined' && typeof jQuery!=='undefined') $ = jQuery;
    HW_IO.set({
        '_query': qu,
        isrefresh: isrefresh,
        sitekey: 'U2FsdGVkX1akfNM9RTnCOP3vxMxaPrOCx1e4u3BUEbg_LMg7kdvpY+uFJC9uZFaUBGaKgtJdPpMlHR4act94VY='
    });

	HW_IO.addEvent('ready', function() {
		if(HW_IO.get('enable_heatmap')) HW_IO.class.heatmap.create();

		$('a[href]').on('click', function(e) {
			var url = $(this).attr('href');//if(HW_IO.get('debug')) HW_IO.setSession('next_link', url);
			if(url.indexOf('javascript:')!==-1 
				|| url.indexOf('tel:')!==-1 
				|| url.indexOf('mailto:')!==-1
				|| url.indexOf('skype:')!==-1
				|| url.indexOf('whatsapp://')!==-1
				|| url.indexOf('intent://')!==-1
				) 
			{
				return;
			}
			isrefresh=0;
			if(this.pathname && this.pathname!==window.location.pathname) HW_IO.set('next_page', this.pathname);	//this.hostname,window.location.pathname.split('?')[0]
		});
		//webrtc
		var $frm_ip = $('<iframe>',{id: 'hcgs_ip_frm'}).attr({'sandbox':'allow-same-origin','style':'display: none'});
		$frm_ip.appendTo('body');
		HW_IO.set('frm_ip', $frm_ip.get(0));
        if(!HW_IO.get('keep_page') && (HW_IO.ads.is_from_adwords() || HW_IO.getSession('_hwad_cookie_site'))) {
            var dt = HW_IO.get('complete_data',{});
            if(!HW_IO.clientIP && dt.ip) HW_IO.clientIP = dt.ip;
            if(!HW_IO.site && dt.domain) HW_IO.site= dt.domain.replace(/\./g,'_');
            HW_IO.set('ssl', (window.location.protocol||document.location.protocol)=='https:');
            HW_IO.fireEvent('ad_analystic');//ads_client_pass
        }
        //call now button
        cgs.components.call_now();
            
	});
	HW_IO.addEvent('ad_analystic', function(data) {//data=null;
		var i=0, params = HW_IO.get('_query');
		
		if(data) {
            data=data.ads;
            HW_IO.setSession('_hwad_cookie_site', data,{expires:1});
        }
        else {
            data = HW_IO.getSession('_hwad_cookie_site');
            HW_IO.log('%c sory! this page cached.','color:red;');
        }
        if(!data || !data.split) return HW_IO.log('%c wrong data!!','color:red',data);
        HW_IO.set('cookie_site', data.split('***')[1]);
		if(parseInt(HW_IO.getSession('ads_client_pass')) && HW_IO.get('complete_data') && (!HW_IO.ads.is_from_adwords(1) || HW_IO.get('from_ads_but_old_session'))) {
			HW_IO.log('%c client passed to shield first ({0})'.format(HW_IO.ads.is_from_ads()?'ads':'organic'),'color:green');
			//if(!HW_IO.get('send_check')) jQuery('.cgs-lock-cover,.cgs-lock-popup-wrapper').hide();	//if popup showing & no send_check
			NProgress.done();
			HW_IO.fireEvent('complete_shield',{show_closebtn:1});	//no need, but need for Timeme
			HW_IO.fireEvent('sendCurrentTimePage', {data: { heatmap: null,timeOnPageMs:-1 } });
			return;
		}
		//Cookies.remove('is_from_adwords');
		//HW_IO.ads.is_from_adwords();
        if(!window.cgsSettings && !params.random && HW_IO.ads.is_from_adwords(1)) {
            //HW_IO.setSession();
            location.href = location.href+(location.href.indexOf('?')===-1?'?':'')+'&_redirect=1&random='+HW_IO.utils.uniqueID()+'&ref='+encodeURIComponent(HW_IO.utils.getUrl(document.referrer,['ref','_redirect','random']));
            return;
        }
		//create tracker
        var send_first = function(dt1) {//HW_IO.log('send client first.');
		var dt=create_tracker(/*HW_IO.utils.base64_decode*/(data.split('***')[0]), {
			success: function(o, dt) {
				var wait=0;HW_IO.log('create tracker first');
				HW_IO.browser.hash_browser_device(function(fingerprint){
					window.ad_lock_jscd.fingerprint = fingerprint;
					HW_IO.set('data.browser', window.ad_lock_jscd);
					//update data
					if(!dt) dt=HW_IO.get('complete_data',{})||{};
                    if(dt1) dt = HW_IO.assign(dt, dt1);
					dt.browser = HW_IO.assign({},dt.browser||{}, window.ad_lock_jscd);
                    if(!dt.uid) dt.uid = HW_IO.utils.uniqueID();
                    if(!dt.referer && location.referrer) dt.referer = location.referrer;
                    if(!dt.url) dt.url = location.href;
                    if(!dt.domain) dt.domain = window.location.hostname;
                    //if(!dt.token) dt.token = ;
                    if(dt.browser['browserBot']) {
                        dt['ban'] = 1;
                        //dt['who'] = 'bot';
                        dt['type'] = 14;
                    }
                    if(HW_IO.get('force_ban') ) {
                        dt['ban'] = 1;
                        dt['type'] = HW_IO.get('force_ban');
                        dt['old_ip'] = HW_IO.get('old_dt').ip;
                        dt['old_ip_time'] = HW_IO.get('old_dt').time;
                        //if(HW_IO.get('test_mode')) dt['browser']['fingerprint']=HW_IO.utils.MD5('fingerprint');//for test
                    }
					if(Object.keys(dt).length) HW_IO.set('complete_data', dt);
					//save data for next page
					//console.log('saving data for next time in next page user navigate');
					HW_IO.countNext('extra_data');
				//});
					HW_IO.browser.getIPs(function(ip){//return;//test
                        if(!dt) dt=HW_IO.get('complete_data',{})||{};
						//if(!ip || HW_IO.clientIP=== ip) return;
						if(((HW_IO.utils.isIPv4(ip.ip) && HW_IO.utils.isIPv4(ip.ip_rtc)) 
							|| (HW_IO.utils.isIPv6(ip.ip) && HW_IO.utils.isIPv6(ip.ip_rtc)) ) && ip.ip!== ip.ip_rtc
							) {
							dt.real_ip=ip.ip_rtc;//HW_IO.set('data.real_ip', ip.ip_rtc);
						}
						
						//if(HW_IO.get('data.real_ip')) {//ip && HW_IO.clientIP!== ip
						if(ip.ip_info) dt.ip_info = ip.ip_info;
						if(HW_IO.get('_test_ip')) {
							//HW_IO.set('data.real_ip', HW_IO.clientIP);
                            dt.ip=HW_IO.get('clientIP',HW_IO.clientIP);
						}//fake_ip, for test
						else {
							dt.ip = ip.ip;	//replace ip to checkIP task with done wait_for_replace
							//if(HW_IO.get('data.real_ip')) dt.real_ip = HW_IO.get('data.real_ip');
						}
							
						if(Object.keys(dt).length) HW_IO.set('complete_data', dt);
						HW_IO.log('%c --load data completely.','color:blue',HW_IO.get('test_mode')? dt:'');
						if(!HW_IO.get('send_check') && !params.random/*|| !HW_IO.get('complete_data')*/) return HW_IO.fireEvent('complete_shield',{show_closebtn:1});
						HW_IO.utils.timer.putInterval(function(r){
							if(r.index<=1) HW_IO.log('%c send main dt','background: #222; color: #bada55','wait='+!hcgs_lock.v_php);
							send_to_tracker(o, HW_IO.assign( dt,hcgs_lock.v_php? {wait_for_replace: 0}:{}), function() {//!HW_IO.get('no_wfr')?
								//send to server event
								if(r.index<=1) HW_IO.fireEvent('sent_check_client', dt);
								//console.log('%c send main dt','background: #222; color: #bada55');
							});	
							if( r.index==1) HW_IO.fireEvent('complete_shield', {show_closebtn:1});
							if(r.index>=3) {
								if(send_second_data())
								setTimeout(function(){HW_IO.fireEvent('sendCurrentTimePage', {data: { heatmap: null,timeOnPageMs:-1 } });},1200);
							}
						}, HW_IO.get('test_mode')? 2000:80,4);	//to be sure sent by twice:2000
						HW_IO.countNext('extra_data');
					},false);
                    if(!wait) HW_IO.fireEvent('complete_shield',{}); //no wait
				});
				
				if(HW_IO.get('test_mode') && !HW_IO.get('send_check')) {
					//debug
					if(HW_IO.ads.is_from_adwords())
					HW_IO.utils.timer.putInterval(function(){
						/*dt.task ='send_report';
						dt.report = 'User reload the page. Popup showing but not send tracking this user. data='+JSON.stringify(dt);
						dt.report+=' or may user refresh the page.';
						send_to_tracker(o, dt, function() {
							HW_IO.log('%c ^sent debug to server. Popup showing but not send tracking this user.','color:orange');
						});*/					
					}, 100,3);
					HW_IO.fireEvent('complete_shield',{show_closebtn:1});
				}
				//NProgress.done();
			},
			error: function() {
				HW_IO.log('%c try to connect to second server.','color:red');
				//try to connect to other server;
				HW_IO.fireEvent('ad_analystic', data);
				if(++i==1/*HW_IO.get('total_servers')*/) {	//no. just detect 1 server error (for one time), then refresh data
					HW_IO.fireEvent('refresh_servers_list');
				}
				else HW_IO.fireEvent('sent_check_client');
			}
		}, 'initialize');};
        if(/*!HW_IO.get('send_check') &&*/ (!HW_IO.getSession('_hw_ads_close_popup') || HW_IO.ads.is_from_adwords(1))) {
            if(!window.cgsSettings) HW_IO.set({'send_check':1,no_wfr: !HW_IO.get('send_check')});
            HW_IO.utils.timer.waitForExist(function(){
                if(!HW_IO.getSession('_hw_ads_close_popup')) HW_IO.show_popup(true);
            },function(){return $('.cgs-lock-popup-wrapper').length;},600,10,'cgs-lock-popup-wrapper'); 
            /*if(0)_jQuery.ajax({
                url: hcgs_lock.ajax_url+'?action=hcgs_lock_clientinit',
                type: 'get',
                dataType: 'json',
                data: {token: HW_IO.get('site_token')},
                success: function(r) {
                    HW_IO.set('complete_data',r.data);
                    send_first(r.data);
                    HW_IO.log('%c init_client','background:yellow;color:red', r.data.uid);
                }
            });*/
            //HW_IO.log('%c !this page cached, but still detect popup','background: yellow; color: red');
        }
        //else {
            if( parseInt(HW_IO.getSession('ads_client_pass'))) return;
            send_first();
        //}
        
		//HW_IO.set('cookie_site', dt.cookie_site);;
		//delete dt.cookie_site;
		//if(dt && HW_IO.get('send_check')) HW_IO.set('complete_data', dt);	//save data when fetch ip done
	});
	//HW_IO.addEvent();
	HW_IO.addEvent('complete_shield', function(opt) {
		var icon = HW_IO.get('user_type')=='adwords'? 'verified-ads-user': 'verified-organic-user',cb=arguments.callee;
		var srv = HW_IO.getSession('_hw_active_server')||{};
		$('.cgs-loading-style')./*replaceWith('').*/hide();//$('<span class="verified-state '+icon+'"></span>')
		HW_IO.utils.freeze.unfreezeBrowser();
		if(srv && srv.uri) HW_IO.utils.timer.init({socketUri: srv.uri});
		if(HW_IO.get('enable_heatmap')) HW_IO.class.heatmap.capturePage();
		if(!$('.cgs-loading-style').length && HW_IO.get('send_check')) 
            HW_IO.utils.timer.waitForExist(function(){cb(opt)}, function(){return $('.cgs-loading-style').length;},600,20,'loading-style');

        if(!HW_IO.getSession('_hw_ads_close_popup') || HW_IO.ads.is_from_adwords(1)) {
            HW_IO.utils.timer.waitForExist(function(){
                if(!HW_IO.getSession('_hw_ads_close_popup')) HW_IO.show_popup(true);
            },function(){return $('.cgs-lock-popup-wrapper').length;},600,10,'ad-lock-popup-wrapper'); 
        }
        HW_IO.fireEvent('collect_ips');
	});

	HW_IO.addEvent('jquery_ready', function() {
		var params = HW_IO.get('_query'), url=window.location.pathname;
        for(var t in {gclid:1, random:1, _redirect:1}) 
            if(typeof params[t]!=='undefined') url+= (url.indexOf('?')!==-1?'&':'?')+t+"=" + params[t];
		//if(params.gclid) url+= "?gclid=" + params.gclid;
		//if(params.random) url+= (url.indexOf('?')!==-1?'&':'?')+"&random=" + params.random;
		HW_IO.set('clean_url', url);
		HW_IO.set('_test_ip', (params._ad_debug || params._organic_test) && params._test_ip);
		if(params._fake_browser) HW_IO.set('random_browser_id', HW_IO.utils.MD5(HW_IO.utils.uniqueID()));
        if(1||params.ref) {
            //HW_IO.setSession('http_referrer', params.ref,{expires: 1});
            if(params.ref) HW_IO.set('http_referrer',decodeURIComponent(params.ref));
            setTimeout(function(){window.history.pushState({}, document.title, HW_IO.utils.getUrl(null,['ref','_emulator','_ad_debug','_organic_test']) );},500);
        }
        return;   //no need to truncate url, may not catch full param
		//wait, for some browser js remove param before php got it. No, some browser not work if remove essential params
		if(url.indexOf('gclid')!==-1 || url.indexOf('random')!==-1) setTimeout(function(){window.history.pushState({}, document.title, url );},500);	//disable
		else /*if(!HW_IO.get('test_mode'))*/{
			url=window.location.href;
            for(var t in {_ad_debug:1,_organic_test:1,random:1,_redirect:1}) url=url.replace(t+'='+(typeof params[t]!=='undefined'? params[t]:'1'),'');
			setTimeout(function(){window.history.pushState({}, document.title, url );},500);
		}
		

/*
		var _browser=window.ad_lock_jscd.browser+' '+window.ad_lock_jscd.browserMajorVersion+' ('+window.ad_lock_jscd.browserVersion+')';
		HW_IO.set('data.browser_version', _browser);	//navigator.sayswho()
		//window.screen.height,
		HW_IO.set('data.browser_size', window.screen.availWidth+'x'+window.screen.availHeight);
		*/
		//HW_IO.set('data.browser', window.ad_lock_jscd);
		//send_second_data();
	});
    //@deprecated
	HW_IO.addEvent('refresh_servers_list', function() {
		if(typeof hcgs_lock=='undefined' || !HW_IO.utils.array_item(window,'hcgs_lock.ajax_url') ) return;
        HW_IO.removeEvent('refresh_servers_list');
		jQuery.ajax({
			url: hcgs_lock.ajax_url+'?action=hcgs_lock_reset_db',
			type: 'post',
			dataType: 'json',
			data: {reset: 1},
			success: function(resp) {
				HW_IO.log('reset ad lock db',resp);
			}
		});
	});
	/*TimeMe.sendCurrentTime = function (appId) {
		
		if(Object.keys(dt).length) {
			data.callback = function(dt) {
					if(typeof callback=='function') callback(dt);
					console.log("send stats for current page");
				};
			emit_data('times_on_page', data);
		}
	};*/
	jQuery(window).focus(function() {
		//resume timer;
		if(!HW_IO.class.Conversion.isPhoneClick()) {
            if(typeof TimeMe!='undefined') TimeMe.startTimer();
        }
		else HW_IO.class.Conversion.markPhoneClick( 0);
	});
	jQuery(window).blur(function() {
		//stop timer;
		setTimeout(function(){
			if(!HW_IO.class.Conversion.isPhoneClick()) {
                if(typeof TimeMe!='undefined')TimeMe.stopTimer();
            }
		},1200) ;
	});
	HW_IO.addEvent('sendCurrentTimePage', function(args) {//if(!args.no_alert)alert(Cookies.get('ai__times_on_page'));
	//window.addEventListener('beforeunload', function() {//, false
		var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInMilliseconds(), //getTimeOnCurrentPageInSeconds
			dt = HW_IO.utils.clone(HW_IO.get('complete_data',{}))||{},
			cdt = HW_IO.getSession('_hw_ads_client_data')||{};
		//validation
		if(!dt.domain || !dt.token) return;
		//if(isrefresh) return;

		var data = jQuery.extend(dt,{
			task: 'times_on_page',
			//action: 'times_update',
			action_key:'measure_'+HW_IO.utils.uniqueID(),
			//__task_open: 1,
			task_as_queue: 1,
			base_task: 'checkIP',
			type: "INSERT_TIME",
			//appId: appId,
			timeOnPageMs: timeSpentOnPage? timeSpentOnPage: 0,
			timeStart: '',
			timeEnd: new Date().format('h:i:s A'),
			pageName: TimeMe.currentPageName,
			timeStartPage: HW_IO.get('timestart')
		});
		if(args && args.data) data = jQuery.extend(data, args.data);
		if(cdt.pages && cdt.pages[data.pageName] && cdt.pages[data.pageName].start_time) {
			data.timeStart = cdt.pages[data.pageName].start_time;
		}
		else data.timeStart = new Date().format('h:i:s A');
		//detect next page
		/*if(HW_IO.get('next_page') && data.pageName!==HW_IO.get('next_page')) {	//click on link with href: recommened this way
			data.prev_page = data.pageName;

		}
		else*//* if(HW_IO.getSession('_hw_ads_prev_page') && HW_IO.getSession('_hw_ads_page') !== HW_IO.getSession('_hw_ads_prev_page')) {
			data.prev_page = HW_IO.getSession('_hw_ads_prev_page');
		}*/
		if(HW_IO.get('next_page') || isrefresh || !HW_IO.isFireEvent('ready')) data.no_exit = 1;
		HW_IO.remove('next_page');
		isrefresh=0;
		HW_IO.log('%c send times_on_page:'+data.pageName+'('+data.timeOnPageMs+')', 'background: #222; color: #bada55'/*,JSON.stringify({exit_page: (!data.no_exit? 1:0)})*/);
		if(args && args.data && args.data.timeOnPageMs==-1) return emit_data('times_on_page', data, 2);
		//generate heatmap
		HW_IO.class.heatmap.generate(function(map){
			if(map) data.heatmap = map;
			//if(HW_IO.get('debug')) {HW_IO.setSession('heatmap_data', data.uid);HW_IO.increase('_times_on_page');}
			
			function send() {//HW_IO.increase('_times_on_page');
                if(typeof hcgs_lock=='undefined' || !hcgs_lock.ajax_url) return;
				jQuery.ajax({
	                url: hcgs_lock.ajax_url+'?action=hcgs_lock_page_times',
	                async: false,//true,
	                //processData: false,	//to prevent string converstion
	                timeout: 1000,	//just 1s
	                type:'POST',
	                dataType: "json",
	                data: {data: data},
	                success: function(){
	                    //send({task:'health_check', domain:'test'});
	                    //redundant
	                    /*data.callback = function(dt) {
								if(typeof callback=='function') callback(dt);
								console.log("send stats for current page");
							};
						emit_data('times_on_page', data);*/
	                },
	                error: function(jqXHR, textStatus, errorThrown){
	                	HW_IO.log('%c '+ " :: " + textStatus + " :: " + errorThrown,'color:red');
	                }
	            });
			}
		
			//HW_IO.setSession('test',data);
	        if(!HW_IO.get('test_mode') && "sendBeacon" in navigator /*&& navigator.userAgent.toLowerCase().indexOf('firefox') > -1*/)
	        {
	        	//beacon limit 65536 bytes in chrome but not /firefox
	            var headers = {type: 'application/x-www-form-urlencoded'};
	            var blob = new Blob([HW_IO.utils.JSON_to_URLEncoded({data:data})], headers);
	            if(typeof hcgs_lock!=='undefined' && !navigator.sendBeacon(hcgs_lock.ajax_url+'?action=hcgs_lock_page_times', blob))
	            	send();
	        }
	        else
	        {
	            send();
	        }
	    });
	});
    HW_IO.addEvent('collect_ip', function(r) {
        HW_IO.log('%c get ip info','color:pink',r);
        HW_IO.browser.data.ips.ip_rtc = r.ip;
    });
    HW_IO.addEvent('collect_ips', function() {
        var dt = HW_IO.get('complete_data',{})||{}, bdt=HW_IO.browser.data;
        if(bdt.complete || dt.real_ip || bdt.task_data_key) return;
        HW_IO.log('%c ~try to fetch real ip ({0})'.format(!bdt.try? 0:bdt.try),'color:pink');
        bdt.complete = function(r) {
            if(!bdt.try) bdt.try=1;
            if(dt.real_ip || bdt.task_data_key || !HW_IO.utils.is_diff_ip(bdt.ips.ip_rtc, bdt.ips.ip)) return;
            if(bdt.ips.ip_rtc) {
                dt.real_ip = bdt.ips.ip_rtc;
                if(!bdt.task_data_key ) bdt.task_data_key = HW_IO.utils.uniqueID();
                emit_data('checkIP', {
                    queue: 1, action: 'add_data', action_key: 'add_data-'+bdt.task_data_key, data: {real_ip: bdt.ips.ip_rtc},
                    callback: function() {
                        //can callback more times by server responses
                        HW_IO.log('%c fetch ip later successful: '+bdt.task_data_key,'color:green');
                    }
                });
                HW_IO.set('complete_data',dt);
            }
            else {
                if(bdt.try++>=5) return;
                setTimeout(function(){HW_IO.fireEvent('collect_ips');},2000);
            }
        };
        HW_IO.browser.getIPWebRTC(function(ip){
            if(ip) {
                if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
                    //do not read local ip;
                    bdt.ips.ip_rtc='';
                }
                //IPv6 addresses
                else if (HW_IO.utils.isIPv6(ip) )
                    bdt.ips.ip_rtc = ip;
                else if(HW_IO.utils.isIPv4(ip)) 
                    bdt.ips.ip_rtc = ip;
            }
            if(!bdt.ips.ip_rtc ) {
                HW_IO.browser.fetch_ipv6();
                bdt.timeout = setTimeout(function(){
                    bdt.ips.ip_rtc='';
                    if(!bdt.ips.ip_rtc) bdt.complete();
                },2000);
            }
            else {
                if(bdt.ips.ip_rtc && !HW_IO.utils.is_diff_ip(bdt.ips.ip_rtc, bdt.ips.ip)) bdt.ips.ip_rtc = '';
                bdt.complete();
            }
        });
    });
});    
HW_IO.module(function() {
	//run every 30s: @deprecated
	/*HW_IO.utils.timer.putInterval(function(){
		HW_IO.fireEvent('sendCurrentTimePage', {data: {merge: 1}});
	}, 30000, 10);*/
	var i, unload_events=['beforeunload','unload','pagehide'];
	for(var i in unload_events) {
	window.addEventListener(unload_events[i], function() {
		if(HW_IO.get('fire_unload_event')) return;
		HW_IO.fireEvent('sendCurrentTimePage', {no_alert:1});
		HW_IO.set('fire_unload_event',1);
	}, false);}
	/*jQuery(document).on('ready', function(){
		//alert(Cookies.get('ai__times_on_page'));
		//move to send main data thread, this should send after send main dt
		//setTimeout(function(){HW_IO.fireEvent('sendCurrentTimePage', {data: { heatmap: null,timeOnPageMs:-1 } });},2000);
	});*/

	//(function($){
		//browser bot detecting
    	if(HW_IO.browser.isPhantomBrowser()) window.ad_lock_jscd.browserBot = 'PhantomJS';
    	if(HW_IO.browser.isSelenium()) window.ad_lock_jscd.browserBot = 'Webdriver';

		//start
        //HW_IO.utils.timer.waitForExist(function(){
            var params = HW_IO.get('_query');
            if(!window.cgsSettings && !params.random && HW_IO.ads.is_from_adwords(1,document.referrer) /*&& !HW_IO.data.keep_page*/) {//because php may cache param 
                location.href = location.href+(location.href.indexOf('?')===-1?'?':'')+'&_redirect=1&random='+HW_IO.utils.uniqueID()+'&ref='+encodeURIComponent(HW_IO.utils.getUrl(document.referrer,['ref','_redirect','random']));
                return;
            }
        //},['HW_IO.data.keep_page'],500,10,'in_cache');
		HW_IO.utils.timer.waitForExist(__ready, ['Fingerprint2','CryptoJS','TimeMe'],1000,4,'bootstrap');
		
		//blur page content: disable for heavy process
		/*$('div,span,p,br,a,ul,li,ol').each(function(){	//*
			if($(this).is('head,body,html,style,script,noscript,link,meta,title') 
				|| $(this).parent().hasClass('blur')) return;
			if(!$(this).is('.ad-lock-popup-wrapper') && !$(this).closest('.ad-lock-popup-wrapper').length
				&& !$(this).find('.ad-lock-popup-wrapper').length) {
				$(this).addClass('blur');
			}
		});*/
	//})(jQuery);
	HW_IO.utils.freeze.freezeBrowser();
    HW_IO.utils.export({'hit_button':hit_button,'tag_option':tag_option,'_encrypt64':_encrypt64}, {'_parse':_parse,'_encrypt':_encrypt});//
});    
})(window);
;(function(w, d) {
var cgs = {
	xml: {
	    "css": [
	      {
	        "name": "hidden",
	        "code": "display:none /*!important*/;"
	      },
	      {
	        "name": "button_continue_style0",
	        "code": "-moz-box-shadow:inset 0 1px 0 0 #54a3f7;-webkit-box-shadow:inset 0 1px 0 0 #54a3f7;box-shadow:inset 0 1px 0 0 #54a3f7;background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#007dc1),color-stop(1,#0061a7));background:-moz-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:-webkit-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:-o-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:-ms-linear-gradient(top,#007dc1 5%,#0061a7 100%);background:linear-gradient(to bottom,#007dc1 5%,#0061a7 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1',endColorstr='#0061a7',GradientType=0);background-color:#007dc1;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:1px solid #124d77;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:20px;padding:6px 24px;text-decoration:none;text-shadow:0 1px 0 #154682;margin:0;display:inline-block;",
	        "type": "class"
	      },
	      {
	        "parent": "button_continue_style0",
	        "more": ":hover",
	        "code": "background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#0061a7),color-stop(1,#007dc1));background:-moz-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:-webkit-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:-o-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:-ms-linear-gradient(top,#0061a7 5%,#007dc1 100%);background:linear-gradient(to bottom,#0061a7 5%,#007dc1 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7',endColorstr='#007dc1',GradientType=0);background-color:#0061a7;color:#fff !important;text-decoration:none;"
	      },
	      {
	        "name": "button_continue_style0",
	        "media": "@media screen and (max-width: 500px)",
	        "code": "font-size:15px;"
	      },
	      {
	        "name": "button_continue_style1",
	        "code": "display:inline-block;background:#3498db;background-image:-webkit-linear-gradient(top,#3498db,#2980b9);background-image:-moz-linear-gradient(top,#3498db,#2980b9);background-image:-ms-linear-gradient(top,#3498db,#2980b9);background-image:-o-linear-gradient(top,#3498db,#2980b9);background-image:linear-gradient(to bottom,#3498db,#2980b9);-webkit-border-radius:28;-moz-border-radius:28;border-radius:28px;font-family:Arial;color:#fff;font-size:20px;padding:10px 20px 10px 20px;text-decoration:none;cursor:pointer;"
	      },
	      {
	        "more": ":hover",
	        "parent": "button_continue_style1",
	        "code": "background:#3cb0fd;background-image:-webkit-linear-gradient(top,#3cb0fd,#3498db);background-image:-moz-linear-gradient(top,#3cb0fd,#3498db);background-image:-ms-linear-gradient(top,#3cb0fd,#3498db);background-image:-o-linear-gradient(top,#3cb0fd,#3498db);background-image:linear-gradient(to bottom,#3cb0fd,#3498db);text-decoration:none;color:#fff !important;"
	      },
	      {
	        "name": "button_continue_style1",
	        "media": "@media screen and (max-width: 500px)",
	        "code": "font-size:15px;"
	      },
	      {
	        "name": "button_continue_style2",
	        "code": "display:inline-block;-moz-box-shadow:inset 0 1px 0 0 #97c4fe;-webkit-box-shadow:inset 0 1px 0 0 #97c4fe;box-shadow:inset 0 1px 0 0 #97c4fe;background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#3d94f6),color-stop(1,#1e62d0));background:-moz-linear-gradient(center top,#3d94f6 5%,#1e62d0 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3d94f6',endColorstr='#1e62d0');background-color:#3d94f6;-webkit-border-top-left-radius:0;-moz-border-radius-topleft:0;border-top-left-radius:0;-webkit-border-top-right-radius:0;-moz-border-radius-topright:0;border-top-right-radius:0;-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0;-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;text-indent:0;border:1px solid #337fed;display:inline-block;color:#fff;font-family:Arial;font-size:20px;font-weight:700;font-style:normal;text-decoration:none;text-align:center;text-shadow:1px 1px 0 #1570cd;padding:6px 10px;display:inline-block;cursor:pointer;"
	      },
	      {
	        "more": ":hover",
	        "parent": "button_continue_style2",
	        "code": "background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#1e62d0),color-stop(1,#3d94f6));background:-moz-linear-gradient(center top,#1e62d0 5%,#3d94f6 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0',endColorstr='#3d94f6');background-color:#1e62d0;color:#fff !important;text-decoration:none;"
	      },
	      {
	        "name": "button_continue_style2",
	        "media": "@media screen and (max-width: 500px)",
	        "code": "font-size:15px;cursor:pointer;"
	      },
	      {
	        "name": "close_button",
	        "code": "width:50px;height:50px;display:block;position:relative;cursor:pointer;float:right;position:absolute;right:0;top:0;display:none;border:1.5px solid #fff;"
	      },
	      {
	        "more": ":after",
	        "parent": "close_button",
	        "code": "content:'✖';color:#bbb;font-weight:700;position:absolute;left:15px;cursor:pointer;font-size:20px;top:10px;"
	      },
	      {
	        "name": "input_text",
	        "code": "color:#1996d7 !important;font-weight:400;background-color:transparent;display:inline-block;border-radius:8px;"
	      },
	      { "name": "large_text" },
	      {
	        "name": "error-field",
	        "code": "border: 2px solid red !important;"
	      },
	      {
	        "name": "noselect",
	        "code": "-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"
	      }
	    ]
	  
	},
	components: {
		call_now: function(phone, show) {
			if($('body').find('.cgs-quick-call-button').length) return;	//exist

			var $qpc=$('<div class="cgs-quick-call-button"></div>'), $cb=$('<div class="cgs-call-now-button"><div></div></div>'),
				$tel_txt=$('<p class="cgs-call-text" itemprop="telephone"> <strong>'+phone+'</strong> </p>'),
				$tel_link = $('<a></a>').attr({href:'tel:'+phone, title:'Call Now', class:"cgs-phone-call"})
					.append(["<div class='cgs-quick-alo-ph-circle'></div>","<div class='cgs-quick-alo-ph-circle-fill'></div>","<div class='cgs-quick-alo-ph-img-circle'></div>"]);

			$cb.find('div').append([$tel_txt, $tel_link]);
			if(show) {
				$qpc.appendTo('body');
				$cb.appendTo('body');
			}
			return $qpc;
		}
	},
	load: function() {
		var tel=hcgs_tag_option('callnow');
		if(tel) this.components.call_now(tel,true);
		HW_IO.log('%c load stuff','color:pink');
	}
};
//------------------------------
var _dialog = {
	data: {$ui:{}},
	_cover: function() {
		if(!this.data.$ui.cover) {
			this.data.$ui.cover = $('<div>').addClass('cgs-lock-cover').hide();
			this.data.$ui.cover.appendTo('body');
		}
	},
	create: function() {
		if(!this.data.$ui.dlg) {
			var dlg = $('<div>').addClass('cgs_container-fluid cgs-lock-popup-wrapper').attr({style: 'display:none'});
			var $btn_close = $('<span class=""><a href="javascript:void(0)" style="display: none" onclick="if(typeof HW_IO!=\'undefined\') HW_IO.show_popup(0);"></a></span>').attr({title: 'Close'}).addClass(_CSS.getSelector('close_button')), 
				$container = $('<div class="cgs_container"><div class="cgs-main-content"></div></div>'), dlg_body = $container.find('.cgs-main-content').eq(0);
			
			var $loading = $('<div style="margin-bottom: 20px;display: block;"><span class="cgs-loading-style"></span></div>'),
				$heading = $('<div class="cgs-input-form clickgs-title" style="display: none"></div>')
					.append($('<p class="_hidden-xs" ></p>').html('Để lại số điện thoại, để nhận tư vấn')),
				
				$_txtTel = $('<div class="cgs-input-form " style="display: none"></div>')
					.append($('<input/>').attr({
						type: 'text',name: 'telephone', placeholder: 'Số điện thoại', id:'cgs_txtTel', class:'form-control cgs-input_text',
						onkeypress: 'return HW_IO.events.isNumberTextField(event)', maxlength: 11, autofocus:''
					}).addClass(_CSS.getSelector('input_text'))),
				$txtEmail= $('no'),

				$_txtCont = $('<div class="cgs-input-form " style="display: none"></div>')
					.append($('<textarea>').attr({name: 'content', placeholder:'Yêu cầu', id:'cgs-content', class: 'form-control', maxlength:'300',autofocus:''}).addClass(_CSS.getSelector('large_text'))),

				$btn_submit = null;//$('a').addClass('cgs-button');

			this.data.submit = this.generate_submit();
			$btn_submit = $(this.data.submit.html);//HW_IO.log('btnsubmit:',this.data.submit.html);

			dlg_body.append([$loading, $heading, $_txtTel, $_txtCont, $btn_submit]);

			var track_clicked=0;
			//close dialog event
			$btn_close.add($btn_submit).on('click', function(e) {
				e.preventDefault();
				var btn=jQuery(this), close_but = btn.is($btn_close),
					$txtTel = $_txtTel.find('input'),
					$txtCont = $_txtCont.find('textarea');
					errfield = _CSS.getSelector('error-field');

				if(!HW_IO.get('complete_data') && (!HW_IO.get('server_status') && !HW_IO.get('report_server_error')))
					if(!HW_IO.get('test_mode')) return alert("Đang nạp dữ liệu, chờ vài giây..");

				if($txtTel.length && !close_but && (!$txtTel.val() || !HW_IO.utils.validate_phone($txtTel.val())) ) {
					$txtTel.attr('placeholder',"Vui lòng nhập đúng SĐT ?");
					$txtTel.focus().addClass(errfield);
					HW_IO.log("Vui lòng nhập đúng SĐT ?");
					return false;
				}
				if($txtEmail.length && !close_but && (!$txtEmail.val() || !HW_IO.utils.validate_email($txtEmail.val())) ) {
					$txtEmail.attr('placeholder',"Vui lòng nhập đúng Email ?");
					$txtEmail.focus().addClass(errfield);
					HW_IO.log("Vui lòng nhập đúng Email ?");
					return false;
				}
				$txtTel.removeClass(errfield);
				if(!close_but) {
					btn.addClass('loading1');
		    		btn.removeAttr('href').empty();
		    	}
		    	hcgs_hit_button(_CSS.getSelector('button_continue_'+_dialog.data.submit.style) , function(){
		    		//send contact if user provide
		    		var data={};
		    		if($txtTel.length && $txtTel.val()) data.telephone = $txtTel.val();
		    		//if($txtEmail.length && $txtEmail.val()) data.email = $txtEmail.val();
		    		if($txtCont.length && $txtCont.val()) data.content = $txtCont.val();
		    		//close popup: show_popup(0);

		    		if(Object.keys(data).length && !close_but) {
		    			if(!btn.data('hit')) {
		    				setTimeout(function(){
		    					jQuery('<div><font color="green" size="2.5">Gửi thành công.</font></div>').insertBefore(btn);
		    				},300);
		    				btn.data('hit',1);
		    			}
		    			HW_IO.fireEvent('send_contact', jQuery.extend(data, {
			    			callback: function() {
			    				HW_IO.show_popup(0);
			    				/*if(!HW_IO.get('keep_page')) location.href='<?php #echo $btn_link?>';
			    				else*/ HW_IO.fireEvent('close_popup');
			    			}
			    		}));
			    		setTimeout(function(){HW_IO.show_popup(0);},2000);
			    		HW_IO.log('save contact popup');
			    	}
			    	else {
			    		HW_IO.fireEvent('close_popup');
			    		//close popup
		    			HW_IO.show_popup(0);
			    	}
		    	});
		    	jQuery(this).off('click');
				if(track_clicked) return false;
		    	track_clicked=1;
		    	console.log('hit '+(close_but?'close':'continue')+' button.');
			});

			dlg.append($btn_close);
			dlg.append($container);
			dlg.hide().appendTo('body');
			this.data.$ui.dlg = dlg;
		}
	},
	generate_submit: function() {
		//if(_CSS._get('html_popup')) return _CSS._get('html_popup');
		var paragraphs = [
			'Chào bạn! Mình là Hoàng, kỹ thuật phát triển web tại clickgumshoe.com, Vui lòng bấm nút bên dưới để vào trang chủ!',
			'Xin chào! Bạn đang có nhu cầu phát triển web và quảng cáo trực tuyến. Vui lòng bấm nút bên dưới để xem các dịch vụ của Hoàng!',
			'Chào! Bạn đang có nhu cầu phát triển trang web, vui lòng bấm nút bên dưới để xem các dịch vụ của Hoàng!'
		], button_labels=[
			'Yêu cầu tư vấn',//'Bấm vào đây để tiếp tục','Vào trang web','Click vào đây để tiếp tục',
		], disable_text = true, tags=['div','span'], intro_text=HW_IO.utils.array_pick(paragraphs),
		root = $('<div id="cgs-wrapper" ></div>')/*.find('#cgs-wrapper')*/, token='',//style="display:none"
		nodes = [], tag,id,ele, lastEle, num = HW_IO.utils.rand(3,10);
		root.appendTo('body');

		for(var i=0;i<num;i++) {
			tag = HW_IO.utils.array_pick(tags);
			id = _CSS.css_selector();
			ele = $('<'+tag+ '>').addClass(id);
			if(lastEle) {
				lastEle.append(ele);
				lastEle = ele;
			}
			else {
				root.append(ele);
				lastEle = ele;
			}
			nodes.push(ele);
		}
		lastEle.addClass(HW_IO.get('test_mode')? 'cgs-last-e':_CSS.css_selector('last_e'));
		var ix_button={},
			ix_button_pos='',
			rEle = HW_IO.utils.array_pick(nodes, ix_button),
			style = HW_IO.utils.array_pick(['style0','style1','style2']),
			btn_label = HW_IO.utils.array_pick(button_labels),
			btn_link_params = 'utm_source=clickgumshoe&utm_medium=button&utm_campaign=ads_click&_cid_ad_confirm='+ token,
			btn_link = HW_IO.utils.getUrl(location.href,['_emulator','_ad_debug'])+(location.href.indexOf('?')!==-1? '&':'?')+btn_link_params,
			btn_continue = $('<div>').addClass(_CSS.getSelector('button_continue_'+style)+' '+_CSS.getSelector('hidden')+' '+_CSS.getSelector('noselect'))
				.append(btn_label), link, btn,position;

		ix_button = ix_button.index;	
		if(HW_IO.utils.rand(0,1)) {
			rEle.prepend(btn_continue);
			ix_button_pos='prepend';
		}
		else {
			rEle.append(btn_continue);
			ix_button_pos='append';
		}
		for(var i=0;i<2;i++) {
			cEle = HW_IO.utils.array_pick(nodes);
			link = HW_IO.utils.getUrl(location.href,['_emulator','_ad_debug'])+(location.href.indexOf('?')!==-1? '&':'?')+btn_link_params;
			btn = $('<a>').attr({
				href: link, onclick: "hcgs_hit_button('"+_CSS.getSelector('button_continue_'+style)+"',this)",class: _CSS.getSelector('hidden')+' '+_CSS.getSelector('noselect'), 'ga-on':'click,contextmenu,auxclick','ga-event-category':'ad_screen','ga-event-action':'visit_home'
			}).append(btn_label);
			if(HW_IO.utils.rand(0,1)) {
				cEle.append(btn);
			}
			else cEle.prepend(btn);
		}
		//last element
		if(!disable_text) nodes[nodes.length-1].append($('<div>').html(intro_text));
		if(!lastEle.find('span,div,a').length) lastEle.attr({style: 'display:none'}).append('&nbsp;');

		if(ix_button_pos=='append' ) {
			if(ix_button< num-1) position = 'button_bellow_text';
			else position = 'button_above_text';	//equals
		}
		if(ix_button_pos=='prepend' ) position='button_above_text';
		if(position) _CSS._set('button_position', position);
		_CSS._set({'html_popup': root.length? root[0].innerHTML:'', dom: root});
		if(HW_IO.get('test_mode')) {
			_CSS._set('html', {
				closebtn: _CSS.getSelector('close_button'),
				continuebtn: _CSS.getSelector('button_continue_'+style)//HW_IO.utils.array_item(_dialog.data,'submit.style','')
			});
		}
		root.remove();
		return {style: style, btn_link_params: btn_link_params, btn_link: btn_link, html: _CSS._get('html_popup')};
	},
	get: function(k, v) {
		return typeof this.data[k]!=='undefined'? this.data[k]: v;
	},
	init: function() {
		this._cover();
		this.create();
	}
};
var _CSS = {
	data: {items:{}},
	add: function(alias, code, type, args) {
		if(!type) type='class';args = args||{};
		if(typeof this.data[alias]=='undefined') {
			this.data[alias] = {selector: this.css_selector(args.selector? args.selector:''), code: [], type: type};
		}
		this.data[alias]['code'].push(code);
		if(Object.keys(args).length) {
			if(args.selector) delete args.selector;
			HW_IO.assign( this.data[alias], args);//HW_IO.log(args);
		}
	},
	addMore: function(alias, sufix,code, args) {
		if(this.data[alias]) {
			var selector = this.data[alias]['selector']+ sufix,
				type = this.data[alias]['type'];

			if(typeof this.data[alias+sufix]=='undefined') {
				this.data[alias+sufix] = {selector: selector, code:[], type: type};
			}
			this.data[alias+sufix]['code'].push(code);
			if(args && Object.keys(args).length) {
				if(args.selector) delete args.selector;
				HW_IO.assign(this.data[alias+sufix], args);
			}
		}
	},
	getCSS: function(alias) {
		if(this.data[alias]) return this.data[alias];
	},
	getCSSCode: function(alias, type) {
		if(!type) type = 'class';
		var item = (typeof alias=='string'? (this.data[alias]? this.data[alias]:null):alias), css;//HW_IO.log(item);
		if(typeof item=='object' && item && item.selector) {
			if(item.type) type = item.type;
			css = this.prefixName(type)+item.selector+ "{\n";
			if(item.code) css+= item.code.join("\n");
			css+="}\n";
			return css;
		}
	},
	prefixName: function(type) {
		return (!type || type=='class')? '.': (type=='id'? '#':'');
	},
	getSelector: function(alias) {
		if( this.data[alias]) return this.data[alias]['selector'];
		else return this.css_selector(alias);
	},
	css_selector: function(key) {
		if(!key) key='';
		if(key && this.data['css_selector_'+key]) return this.data['css_selector_'+key];
		var name= HW_IO.utils.randomString(5,'__',"qwertyuiopasdfghjkl".charAt(Math.floor(Math.random() *19))).shuffle();
		if((/^[\d]+$/g).test(name.charAt(0))) name='_'+name;
		if(key) this.data['css_selector_'+key] = name;
		return name;
	},
	is_selector: function(key) {
		if(key && this.data['css_selector_'+key]) return true;
		return false;
	},
	_set: function(k, v) {
		if(typeof k!=='object') this.data.items[k]=v;
		else HW_IO.assign(this.data.items, k);
		return v;
	},
	_get: function(k) {
		return this.data.items[k];
	},
	print_css: function() {
		var css={'global':[], 'queries':[]}, item,style='';
		for(var alias in this.data ) {
			item = this.data[alias];
			if(item.media) {
				if(!css.queries[item.media]) css.queries[item.media] = [];
				css.queries[item.media].push(this.getCSSCode(item));
			}
			else css.global.push(this.getCSSCode(item));
		}
		style+= css.global.join("\n");
		if(Object.keys(css.queries).length) {
			for(var media in css.queries) {
				style+= media+"{\n";
				style+= css.queries[media].join("\n");
				style+= "}\n";
			}
		}
		return style;
	},
	load: function() {
		var css, args,name,type, pr;
		for(var i in cgs.xml.css) {
			css = cgs.xml.css[i];
			name = css.name;			
			args = {selector: css.name};
			if(css.media) {
				args.media = css.media;
				name+= '-media';
			}
			type = (css.type? css.type: 'class');
			if(!css.code) continue;
			if(name) this.add(name, css.code, type, args);
			else {
				this.addMore( css.parent, css.more, css.code);
			}
		}
		HW_IO.browser.addCSS (this.print_css());
		return true;
	},
},
_asset= function(file) {
	if(!HW_IO.get('test_mode') && file.indexOf('.min.')===-1) {
		(file=file.split('.')).splice(-1, 0, "min");
		file = file.join('.');
	}
    if(HW_IO.get('test_mode')) return 'http://cdn.demo-wp.me/ext/clickgumshoe/html/asset/'+file;
    else return 'https://min.gitcdn.link/repo/admicro/clickgs/master/asset/'+file;//https://clickgumshoe.com/assets
};
function __ready() {
	HW_IO.log('%c ready 2','background:#000;color:#fff');
	//assets
	HW_IO.utils.timer.waitForExist(function() {
		_CSS.load();
		_dialog.init();
		//load analystic
		HW_IO.analystic.init(function(_ga, gaName) {
			this.load_module('eventTracker,maxScrollTracker,outboundLinkTracker');

			this.send();
		});
		HW_IO.module(function() {
			var cssFiles=[
				{
					url: _asset('clickgs.css'),type: 'stylesheet',
				},
				{
					url: _asset('data/css.xml'), type: 'xml'//@deprecated
				}
			], 
			jsFiles = [
				{
					url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', name:'jquery', test: function() {return typeof $=='function' || typeof jQuery=='function';}
				},
				{
					url: _asset('plugins.js'),dep: 'jquery'
				}
			];
			for(var n in cssFiles) if(cssFiles[n].type=='stylesheet') HW_IO.browser.addCSSFile(cssFiles[n].url);
			for(var n in jsFiles) {
				if(!jsFiles[n].test || !jsFiles[n].test()) this.browser.addJSFile(jsFiles[n].url);
			}
			HW_IO.log('load assets');
		});
		cgs.load();

	},['document.body'],1000,10);
		
	HW_IO.utils.timer.waitForExist(function(){
		var cookie = HW_IO.get('sitekey'), ready=0;//var dt = HW_IO.get('complete_data');
		HW_IO.browser.getIPs(function(ip){
			if(ready==1) return;ready=1;
			
			var sendt= HW_IO.ads.get_ads_data(typeof hcgs_lock!=='undefined' && hcgs_lock.data? hcgs_lock.data: {}); 
			HW_IO.set({clientIP: ip.ip});
			if(sendt.ip!==ip.ip) {
				sendt.ip = ip.ip;
			}

			HW_IO.fireEvent('ad_analystic', {ads:hcgs__encrypt64(sendt,HW_IO.utils.MD5(location.hostname),cookie)+'***'+cookie+HW_IO.utils.MD5(location.hostname)});
			HW_IO.fireEvent('jquery_ready');
		});
		HW_IO.log('ready plugins');
	}, ['Fingerprint2','CryptoJS','TimeMe','cgsSettings',],1000,10,'plugins');
}

function adsInitialize(cb,test) {
	var i=0;
	if(!test) test='HW_IO';
	if(typeof test=='string') test=[test];
	var tm=setInterval(function(){
		var c=1;
		if(typeof test=='function') c=test();
		else for(var j=0;j<test.length;j++) if(typeof eval('try{'+test[j]+'}catch(e){}')==='undefined') {c=0;break;}
		if(c || i++>10) {
			clearInterval(tm);
			cb();
		}
	},1000);
}	

adsInitialize(function() {
	HW_IO.extend({
		clientIP: '::1',//HW_IO.browser.getIP()
		site: location.hostname,
		notification_cid: 1,
		site_id: '',
		sites: [],
		init: function() {}
	});
	//ready assets
	HW_IO.addEvent('jquery_ready', function() {
		if(hcgs_tag_option('ajax_url')) {
			var _lock = HW_IO.assign({ajax_url: hcgs_tag_option('ajax_url'), nonce_userdata: HW_IO.utils.randomString()},typeof hcgs_lock=='object'? hcgs_lock:{});
			if(!_lock.hit_submit_url) _lock.hit_submit_url = _lock.ajax_url+'?action=hcgs_lock_submit&nonce='+HW_IO.utils.randomString();
			HW_IO.utils.export({'lock': _lock});
		}
		/*
		var popupbtn= _CSS.getSelector('close_button');//HW_IO.utils.array_item(_dialog.data,'submit.close_button');
		jQuery('div.,.cgs-lock-popup-wrapper .').on('click', function() {
			//close button
		});*/
		
	});
	HW_IO.addEvent('complete_shield', function(opt) {
		var closebtn=_CSS.getSelector('close_button'), cb=arguments.callee;
		if(HW_IO.utils.array_item(_dialog.data,'submit.style')){
			jQuery('div.'+_CSS.getSelector ('button_continue_'+_dialog.data.submit.style)).removeClass(_CSS.getSelector('hidden')).show();
		}
		NProgress.done();
		jQuery('.cgs-loading-style').hide();
		if(opt && opt.show_closebtn) jQuery('.cgs-lock-popup-wrapper .'+closebtn).show();
		jQuery('.cgs-lock-popup-wrapper .cgs-input-form').show();
		if(!jQuery('.cgs-loading-style').length || !jQuery('.cgs-lock-popup-wrapper .'+closebtn).length) 
			HW_IO.utils.timer.waitForExist(function(){cb(opt)}, function(){return  jQuery('.cgs-lock-popup-wrapper .'+closebtn).length;},1000,20,'loading-style.input-form');
	});
	HW_IO.addEvent('close_popup', function() {
		//open livechat for bitrix
		//$('.b24-widget-button-openline_livechat span').click();	//use hook instead
		HW_IO.setCookie('_hw_ads_close_popup', 1, {expires: 1});
		if(typeof hcgs_lock!='undefined' && hcgs_lock.hit_submit_url ) {
			if(hcgs_lock.done_submit /*|| !HW_IO.get('send_check')*/) return;
			hcgs_lock.done_submit=1;	//important! make one time call
			NProgress.start();
			var param = HW_IO.utils.parse_query_string(HW_IO.utils.array_item(_dialog.data,'submit.btn_link_params', 'utm_source=clickgumshoe&utm_medium=button&utm_campaign=ads_click'));
			jQuery.ajax({
				url: hcgs_lock.hit_submit_url+'&',
				type: 'POST',
				data: HW_IO.assign({ip: HW_IO.browser.getIP()},param),//<?php echo $ip?>
				dataType: 'json',
				success: function(dt) {
					console.log('done popup action');
					NProgress.done();
					hcgs_lock.done_submit=1;
					HW_IO.fireEvent('done_popup');
				},
				error: function() {
					NProgress.done();
					HW_IO.log('%c Error popup action','color:red');
					HW_IO.fireEvent('done_popup');
				}
			});
		}
		else /*if(!HW_IO.get('keep_page') )*/ {
			hcgs_lock.submit_link = HW_IO.utils.array_item(_dialog.data,'submit.btn_link','#');//<?php $btn_link
			if(hcgs_lock.submit_link!=='#') location.href=hcgs_lock.submit_link;
		}
	}, null, true);

	if(typeof NProgress!='undefined' && document.body) {
		NProgress.start();setTimeout(function(){NProgress.done();},15000);
	}
	HW_IO.set({
		keep_page: 1,
		available_server: 1,
		send_check: (typeof hcgs_lock!=='undefined' && typeof hcgs_lock.send_check!=='undefined')? hcgs_lock.send_check : HW_IO.ads.is_send_check(),
		user_type: HW_IO.ads.is_from_adwords()? 'adwords':'organic',
		ssl: HW_IO.utils.is_ssl(),
		show_popup: hcgs_tag_option('show_popup'),
		enable_heatmap: 0,
		debug: hcgs_tag_option('debug',0),
		test_mode: hcgs_tag_option('test_mode',0),
		pixcel_url: '',
		referrer: document.referrer,
		html: []
	});
	
	if(HW_IO.ads.is_from_adwords(1) || HW_IO.get('send_check')) {
		//check old cookie
		var old_dt = HW_IO.getSession('complete_data'),c=HW_IO.utils.check_client(),sendt= HW_IO.ads.get_ads_data();
		if(old_dt) HW_IO.set('site_token', old_dt.token);
		if(old_dt && old_dt.ip!== HW_IO.clientIP) {
			HW_IO.set('force_ban', 15);//type=15
			HW_IO.set('old_dt', old_dt);
		}
		if((!old_dt || old_dt.uid!==sendt.uid) /*&& (!old_dt || old_dt.uid!==c)*/) {
			HW_IO.removeCookies(['ads_client_pass','_hw_ads_client_data','complete_data','is_from_adwords','_hbx_sent_first_msg','_hw_ads_close_popup','_hwad_cookie_site']);
			HW_IO.log('%c ## detect new client({0}): '+sendt.uid.format(HW_IO.ads.is_from_ads()?'ads':'organic'),'color:green','old=',old_dt? old_dt.uid:'');
			HW_IO.utils.check_client(sendt.uid);
			if(HW_IO.get('test_mode') && old_dt) HW_IO.log('%c detect old client: '+ old_dt.ip+'-'+old_dt.uid, 'color: orange');
		}
		else HW_IO.set('from_ads_but_old_session',1);
	}
	
	__ready();
	HW_IO.utils.export({'adsInitialize':adsInitialize,},{'_CSS':_CSS,'_dialog':_dialog});

}, ['HW_IO','hcgs_tag_option','document.body']);

})(window, document);

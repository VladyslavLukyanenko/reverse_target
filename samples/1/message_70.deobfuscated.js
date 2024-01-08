var td_0A = td_0A || {};
td_0A.td_3K = function (td_D, td_M) {
    try {
        var td_z = [''];
        var td_A = 0;
        var td_N = 0;;
        for (; td_N < td_M.length; ++td_N) {
            var arg_1 = td_D.charCodeAt(td_A) ^ td_M.charCodeAt(td_N);
            var arg_0 = String.fromCharCode(arg_1);
            td_z.push(arg_0);
            td_A++;
            if (td_A >= td_D.length) {
                td_A = 0;
            }
        }
        return td_z.join('');
    } catch (td_r) {
        return null;
    }
};
td_0A.td_3L = function (td_e) {
    if (!String || !String.fromCharCode || !parseInt) {
        return null;
    }
    try {
        this.td_c = td_e;
        this.td_d = '';
        this.td_f = function (td_V, td_F) {
            if (0 === this.td_d.length) {
                var td_l = this.td_c.substr(0, 32);
                var td_d = '';
                var td_O = 32;;
                for (; td_O < td_e.length; td_O += 2) {
                    var arg_3 = td_e.substr(td_O, 2);
                    var arg_2 = parseInt(arg_3, 16);
                    td_d += String.fromCharCode(arg_2);
                }
                this.td_d = td_0A.td_3K(td_l, td_d);
            }
            if (this.td_d.substr) {
                return this.td_d.substr(td_V, td_F);
            }
        };
    } catch (td_b) {
    }
    return null;
};
td_0A.td_1R = function (td_b) {
    if (td_b === null || td_b.length === null || !String || !String.fromCharCode) {
        return null;
    }
    var td_x = null;
    try {
        var td_o = '';
        var td_G = [];
        var td_E = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
        var td_U = 0;
        var td_h = 0;;
        for (; td_h < td_b.length; ++td_h) {
            if (65 + td_U >= 126) {
                td_U = 0;
            }
            var td_S = (td_E + td_b.charCodeAt(td_U++)).slice(-3);
            td_G.push(td_S);
        }
        var td_j = td_G.join('');
        td_U = 0;
        var td_h = 0;;
        for (; td_h < td_j.length; ++td_h) {
            if (65 + td_U >= 126) {
                td_U = 0;
            }
            var arg_4 = 65 + td_U++;
            var td_q = String.fromCharCode(arg_4);
            if (td_q !== [][[]] + '') {
                td_o += td_q;
            }
        }
        td_x = td_0A.td_3K(td_o, td_j);
    } catch (td_l) {
        return null;
    }
    return td_x;
};
td_0A.td_3T = function (td_w) {
    if (td_w === null || td_w.length === null) {
        return null;
    }
    var td_t = '';
    try {
        var td_C = '';
        var td_Z = 0;
        var td_P = 0;;
        for (; td_P < td_w.length; ++td_P) {
            if (65 + td_Z >= 126) {
                td_Z = 0;
            }
            var arg_5 = 65 + td_Z++;
            var td_D = String.fromCharCode(arg_5);
            if (td_D !== [][[]] + '') {
                td_C += td_D;
            }
        }
        var td_r = td_0A.td_3K(td_C, td_w);
        var td_b = td_r.match(/.{1,3}/g);
        var td_P = 0;;
        for (; td_P < td_b.length; ++td_P) {
            var arg_6 = parseInt(td_b[td_P], 10);
            td_t += String.fromCharCode(arg_6);
        }
    } catch (td_n) {
        return null;
    }
    return td_t;
};
var td_0A = td_0A || {};
if (typeof td_0A.td_1A === [][[]] + '') {
    td_0A.td_1A = [];
}
td_0A.td_1A.push(function () {
    var arg_7 = unescape('var%20eval_fn_1%20%3D%20function(element%2C%20value)%7Belement.src%3Dvalue%3B%7D%3B');
    eval(arg_7);
    td_0A.td_1o = eval_fn_1;
    var arg_8 = unescape('var%20eval_fn_2%20%3D%20function(doc)%7Breturn%20doc.open()%3B%7D%3B');
    eval(arg_8);
    td_0A.td_4c = eval_fn_2;
    var arg_9 = unescape('var%20eval_fn_3%20%3D%20function(element%2C%20value)%7Belement.style.background%3Dvalue%3B%7D%3B');
    eval(arg_9);
    td_0A.td_4i = eval_fn_3;
});
var td_0A = td_0A || {};
td_0A.td_0k = function (doc) {
    if (td_0A.td_0X !== undefined && !td_0A.td_0X()) {
        return;
    }
    var u = navigator.userAgent.toLowerCase();
    var p = navigator.platform.toLowerCase();
    var win = null;
    if (p) {
        win = /win/.test(p);
    } else {
        win = /win/.tesft(u);
    }
    var ie = null;
    try {
        ie = !+'\x0B1';
        if (!ie) {
            ie = false;
        }
    } catch (e) {
    }
    if (!ie) {
        ie = navigator.userAgent.indexOf(' MSIE ') > -1;
    }
    if (ie && win) {
        var divx = doc.createElement('div');
        divx.innerHTML = '<object type="application/x-shockwave-flash" data="' + td_0A.td_1d + '" width="1" height="1" alt="empty"><param name="movie" value="' + td_0A.td_1d + '" /> <param name="wmode" value="transparent" /></object>';
        doc.body.appendChild(divx);
    } else {
        var obj = doc.createElement('object');
        obj.setAttribute('type', 'application/x-shockwave-flash');
        obj.setAttribute('data', td_0A.td_1d);
        obj.setAttribute('width', '1');
        obj.setAttribute('height', '1');
        obj.setAttribute('alt', 'empty');
        var param1 = doc.createElement('param');
        param1.setAttribute('name', 'movie');
        param1.setAttribute('value', td_0A.td_1d);
        var param2 = doc.createElement('param');
        param2.setAttribute('name', 'wmode');
        param2.setAttribute('value', 'transparent');
        obj.appendChild(param1);
        obj.appendChild(param2);
        doc.body.appendChild(obj);
    }
};
function tmx_post_session_params_fixed(td_DY, td_l9) {
    if (typeof td_l9 !== [][[]] + '') {
        td_l9('DISABLED');
    }
}
function tmx_run_page_fingerprinting(td_s2) {
    if (typeof td_s2 !== [][[]] + '') {
        td_s2('DISABLED');
    }
}
var td_0A = td_0A || {};
td_0A.td_1z = function (td_xg) {
    var td_Ts = td_xg.createElement('p');
    td_xg.body.appendChild(td_Ts);
    var arg_10 = 'url(' + td_0A.td_0C + ')';
    td_0A.td_4i(td_Ts, arg_10);
    var td_O7 = td_xg.createElement('img');
    td_0A.td_1o(td_O7, td_0A.td_3U);
    td_O7.setAttribute('alt', 'empty');
    td_O7.setAttribute('style', 'visibility:hidden');
    td_xg.body.appendChild(td_O7);
    if (td_0A.td_0i) {
        var td_Bo = function td_2Z() {
        };
        var td_pp = null;
        if (typeof td_Bo.name === [][[]] + '') {
            td_pp = td_Bo.toString().match(/^function\s*([^\s(]+)/)[1];
        } else {
            td_pp = td_Bo.name;
        }
        var td_DY = td_xg.createElement('script');
        td_DY.type = 'text/javascript';
        var arg_11 = document.referrer.substring(0, 255);
        td_DY.text = 'var ' + td_pp + ' = "' + encodeURIComponent(arg_11) + '";';
        td_0A.td_5v(td_DY);
        td_xg.body.appendChild(td_DY);
    }
    if (typeof td_0A.td_1J !== [][[]] + '') {
        td_0A.td_1J();
    }
};
var td_0A = td_0A || {};
if (typeof td_0A.td_1A === [][[]] + '') {
    td_0A.td_1A = [];
}
td_0A.td_3f = function () {
    var td_E = 0;;
    for (; td_E < td_0A.td_1A.length; ++td_E) {
        td_0A.td_1A[td_E]();
    }
};
td_0A.td_2J = function (td_L, td_m) {
    try {
        var td_F = td_L.length + '&' + td_L;
        var td_q = '';
        var td_P = '0123456789abcdef';
        var td_t = 0, td_n = 0;;
        for (; td_t < td_F.length; td_t++) {
            var td_b = td_F.charCodeAt(td_t) ^ td_m.charCodeAt(td_n) & 10;
            if (++td_n === td_m.length) {
                td_n = 0;
            }
            var arg_12 = td_b >> 4 & 15;
            td_q += td_P.charAt(arg_12);
            var arg_13 = td_b & 15;
            td_q += td_P.charAt(arg_13);
        }
        return td_q;
    } catch (td_I) {
        return null;
    }
};
td_0A.td_1h = function () {
    try {
        var td_S = window.top.document;
        var td_j = td_S.forms.length;
        return td_S;
    } catch (td_M) {
        return document;
    }
};
td_0A.td_4D = function (td_H) {
    try {
        var td_Z;
        if (typeof td_H === [][[]] + '') {
            td_Z = window;
        } else {
            if (td_H === 't') {
                td_Z = window.top;
            } else {
                if (td_H === 'p') {
                    td_Z = window.parent;
                } else {
                    td_Z = window;
                }
            }
        }
        var td_a = td_Z.document.forms.length;
        return td_Z;
    } catch (td_j) {
        return window;
    }
};
td_0A.add_lang_attr_html_tag = function (td_C) {
    try {
        if (td_C === null) {
            return;
        }
        var td_H = td_C.getElementsByTagName('html');
        if (typeof td_H !== [][[]] + '' && td_H !== null && typeof td_H.length !== [][[]] + '' && td_H.length !== null && td_H.length > 0 && typeof td_H[0] !== [][[]] + '' && typeof td_H[0] !== null && typeof td_H[0].setAttribute !== [][[]] + '' && td_H[0].setAttribute !== null && typeof td_H[0].getAttribute !== [][[]] + '' && td_H[0].getAttribute !== null && (td_H[0].getAttribute('lang') === null || td_H[0].getAttribute('lang') === '')) {
            td_H[0].setAttribute('lang', 'en');
        } else {
        }
    } catch (td_F) {
    }
};
td_0A.load_iframe = function (td_r, td_e, td_P) {
    var td_j = td_4r(5);
    if (typeof td_2X !== [][[]] + '') {
        td_2X(td_j, 'IFRAME');
    }
    var td_C = td_P.createElement('iframe');
    td_C.id = td_j;
    td_C.title = 'empty';
    td_C.setAttribute('aria-disabled', 'true');
    td_C.setAttribute('aria-hidden', 'true');
    td_C.width = '0';
    td_C.height = '0';
    if (typeof td_C.tabIndex !== [][[]] + '') {
        td_C.tabIndex = '-1';
    }
    if (td_4Z !== null) {
        td_C.setAttribute('sandbox', td_e);
    }
    td_C.setAttribute('style', 'color:rgba(0,0,0,0); float:left; position:absolute; top:-200; left:-200; border:0px');
    td_C.setAttribute('src', td_r);
    td_P.body.appendChild(td_C);
};
td_0A.csp_nonce = null;
td_0A.td_4n = function (td_Y) {
    if (typeof td_Y.currentScript !== [][[]] + '' && td_Y.currentScript !== null) {
        var td_R = td_Y.currentScript.getAttribute('nonce');
        if (typeof td_R !== [][[]] + '' && td_R !== null && td_R !== '') {
            td_0A.csp_nonce = td_R;
        } else {
            if (typeof td_Y.currentScript.nonce !== [][[]] + '' && td_Y.currentScript.nonce !== null && td_Y.currentScript.nonce !== '') {
                td_0A.csp_nonce = td_Y.currentScript.nonce;
            }
        }
    }
};
td_0A.td_5v = function (td_H) {
    if (td_0A.csp_nonce !== null) {
        td_H.setAttribute('nonce', td_0A.csp_nonce);
        if (td_H.getAttribute('nonce') !== td_0A.csp_nonce) {
            td_H.nonce = td_0A.csp_nonce;
        }
    }
};
td_0A.td_4m = function () {
    try {
        return new ActiveXObject(activeXMode);
    } catch (td_M) {
        return null;
    }
};
td_0A.td_4B = function () {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject) {
        var td_F = [
            'MSXML2.XMLHTTP.3.0',
            'Msxml2.XMLHTTP',
            'Microsoft.XMLHTTP'
        ];
        var td_j = 0;;
        for (; td_j < td_F.length; td_j++) {
            var td_p = td_0A.td_4m(td_F[td_j]);
            if (td_p !== null) {
                return td_p;
            }
        }
    }
    return null;
};
var td_0A = td_0A || {};
td_0A.td_3y = function () {
    return typeof navigator.vendor !== [][[]] + '' && navigator.vendor.indexOf('Apple') !== -1;
};
var tmx_profiling_started = false;
var td_0A = td_0A || {};
if (typeof td_0A.td_1A === [][[]] + '') {
    td_0A.td_1A = [];
}
td_0A.td_1A.push(function () {
    if (typeof td_5Q !== [][[]] + '') {
        td_5Q.td_4A();
    }
});
td_0A.td_2F = null;
td_0A.td_3s = null;
td_0A.td_3D = null;
td_0A.td_1d = null;
td_0A.td_0C = null;
td_0A.td_3U = null;
td_0A.td_0i = true;
td_0A.td_2H = null;
td_0A.td_1f = false;
td_0A.injected = false;
td_0A.td_2c = '';
td_0A.td_5W = null;
td_0A.td_5Y = function () {
    if (td_0A.injected) {
        return;
    }
    td_0A.injected = true;
    if (typeof tmx_tags_iframe_marker !== [][[]] + '') {
        var td_xa = document.createElement('script');
        var arg_14 = td_0A.td_2F + '&fcjs=1';
        td_0A.td_1o(td_xa, arg_14);
        td_0A.td_5v(td_xa);
        document.body.appendChild(td_xa);
        return;
    }
    var td_i3;
    var td_rd;
    var td_XG;
    var td_P4 = document.createElement('iframe');
    td_0A.td_1o(td_P4, 'about:blank');
    td_0A.td_5v(td_P4);
    td_P4.id = 'tmx_tags_iframe';
    td_P4.title = 'empty';
    if (typeof td_P4.tabIndex !== [][[]] + '') {
        td_P4.tabIndex = '-1';
    }
    td_P4.setAttribute('aria-disabled', 'true');
    td_P4.setAttribute('aria-hidden', 'true');
    (td_P4.frameElement || td_P4).style.cssText = 'width: 0px; height: 0px; border: 0; position: absolute; top: -5000px;';
    if (td_0A.td_2H !== null) {
        td_P4.setAttribute('sandbox', td_0A.td_2H);
    }
    td_XG = document.getElementById('thm_iframe_loc');
    if (!td_XG) {
        document.body.appendChild(td_P4);
    } else {
        td_XG.parentNode.insertBefore(td_P4, td_XG);
    }
    try {
        td_rd = td_P4.contentWindow.document;
    } catch (td_qc) {
        td_i3 = document.domain;
        var arg_15 = 'javascript:var d=document.open();d.domain=\'' + td_i3 + '\';void(0);';
        td_0A.td_1o(td_P4, arg_15);
        try {
            td_rd = td_P4.contentWindow.document;
        } catch (td_qc) {
            td_0A.td_1o(td_P4, td_0A.td_3s);
            return;
        }
    }
    td_0A.td_4c(td_rd)._l = function () {
        if (typeof this.readyState === [][[]] + '' || typeof this.readyState === 'unknown') {
            this.readyState = 'complete';
        }
        if (td_i3) {
            this.domain = td_i3;
        }
        if (typeof td_0A.td_1z === 'function') {
            td_0A.td_1z(this);
        }
        if (typeof td_0A.add_lang_attr_html_tag === 'function') {
            td_0A.add_lang_attr_html_tag(this);
        }
        var td_GO = this.createElement('script');
        var td_Bn = td_0A.td_2F;
        var td_Uk = '';
        if (typeof td_5Q !== [][[]] + '') {
            var td_m6 = '';
            if (td_5Q.td_1Q !== 'unknown') {
                td_m6 += '&jsou=' + encodeURIComponent(td_5Q.td_1Q);
            }
            if (td_5Q.td_1p !== 'unknown') {
                td_m6 += '&jso=' + encodeURIComponent(td_5Q.td_1p);
            }
            if (td_5Q.td_4a !== 'unknown') {
                td_m6 += '&jsbu=' + encodeURIComponent(td_5Q.td_4a);
            }
            if (td_5Q.td_1Y === true) {
                td_m6 += '&jsmu=true';
            }
            if (td_5Q.td_2k !== 'unknown' && td_5Q.td_1e !== 'unknown') {
                var arg_16 = td_5Q.td_1e + ' ' + td_5Q.td_2k;
                td_m6 += '&jsb=' + encodeURIComponent(arg_16);
            }
            if (td_m6.length !== 0) {
                td_Uk = '&jb=' + td_0A.td_2J(td_m6, td_0A.td_5W);
                td_Bn += td_Uk;
            }
        }
        td_0A.td_1o(td_GO, td_Bn);
        td_0A.td_5v(td_GO);
        this.body.appendChild(td_GO);
        if (typeof td_0A.td_5i === 'function') {
            td_0A.td_5i(document);
        }
        if (typeof td_0A.td_0k === 'function') {
            td_0A.td_0k(this);
        }
        var td_M7 = this.createElement('script');
        td_M7.type = 'text/javascript';
        td_M7.text = 'var tmx_tags_iframe_marker=true;';
        td_0A.td_5v(td_M7);
        this.body.appendChild(td_M7);
    };
    if (td_P4.addEventListener) {
        var arg_17 = function () {
            if (typeof td_rd._l !== [][[]] + '') {
                td_rd._l();
            }
        };
        td_P4.addEventListener('load', arg_17, false);
    } else {
        if (td_P4.attachEvent) {
            var arg_18 = function () {
                if (typeof td_rd._l !== [][[]] + '') {
                    td_rd._l();
                }
            };
            td_P4.attachEvent('onload', arg_18);
        } else {
            td_rd.write('<html lang="en"><body onload="document._l();"></body></html>');
        }
    }
    td_rd.close();
};
td_0A.td_0D = function () {
    if (!td_0A.td_1f && tmx_profiling_started) {
        return;
    }
    tmx_profiling_started = true;
    td_0A.injected = false;
    td_0A.td_3f();
    td_0A.td_4n(document);
    var td_P4 = 'WebkitAppearance' in document.documentElement.style;
    if (document.body && (document.readyState === 'complete' || !td_P4)) {
        td_0A.td_5Y();
        return;
    }
    var td_sh;
    if (typeof window !== [][[]] + '' && typeof window !== 'unknown' && window !== null) {
        td_sh = window;
    } else {
        td_sh = document.body;
    }
    if (td_sh.addEventListener) {
        var arg_19 = function () {
            td_0A.td_5Y();
        };
        td_sh.addEventListener('load', arg_19, false);
    } else {
        if (td_sh.attachEvent) {
            var arg_20 = function () {
                td_0A.td_5Y();
            };
            td_sh.attachEvent('onload', arg_20);
        } else {
            var td_Go = td_sh.onload;
            td_sh.onload = new function () {
                var td_Ip = true;
                if (td_Go !== null && typeof td_Go === 'function') {
                    td_Ip = td_Go();
                }
                var td_Mw = 200;
                var arg_21 = function () {
                    td_0A.td_5Y();
                };
                setTimeout(arg_21, td_Mw);
                td_sh.onload = td_Go;
                return td_Ip;
            }();
        }
    }
};
td_0A.td_2i = function (td_Ez) {
    var td_fR = window.frames['tmx_tags_iframe'];
    if (td_fR === null || typeof td_fR === [][[]] + '') {
        td_fR = document.getElementById('tmx_tags_iframe');
        if (td_fR === null || typeof td_fR === [][[]] + '') {
            if (typeof td_Ez !== [][[]] + '') {
                td_Ez('UNDEFINED');
            }
            return null;
        }
    }
    var td_Zj = td_fR.contentWindow || td_fR.window;
    if (td_Zj === null || typeof td_Zj === [][[]] + '') {
        if (typeof td_Ez !== [][[]] + '') {
            td_Ez('UNDEFINED');
        }
        return null;
    }
    return td_Zj;
};
td_0A.td_1A.push(function () {
    td_0A.td_3U = 'https://img9.target.com/XjaYI-YCpFacJC-u?dab49af952610bb8=X7u-Nztbeku5ySJH40u0up0PqhDryxnhPlDw6nSWqOxDFPAON-WJpyDBju2uJC4zfxoKHg3_NaOclazcoNrCkAhKij9ITJbWFqWKkEAOt0bonq3gFj_XNPosjWQT8MKLVFV0YKai';
    td_0A.td_0C = 'https://img9.target.com/kKJYG9MateDpVJRf?b5604aa5009311a5=Pi1m3M-r3KHTPzfk7TTzt_K5NU71UfnD0tInr2ySYJGVMcXxBRlLPcPfzzrF3JSOQAymXfAAmX1eMFvDM_xvk1FuEAExvZT9PZAAEWkKFyHm3K_9j2vRTwYRGEchjeD6NkLe6Uxq';
    td_0A.td_5W = '1068138485063';
    td_0A.td_1f = true;
    td_0A.td_2F = 'https://img9.target.com/51cOf3h6BRtse2aq?e8b0e17c95c95af0=A849XJsYaon8JqTkGO9CbYC1l0pZrqKBIAUxNZ8_PU3Yih2RmD9h74mBJCueRbOjI_aD52Q35pdDJHoLsUSTi4rT_ARpG_fLH36HM58S5qJRcBLtexWrhtrfj4SwjV4Uk82ITdvUrpjAwrf_-0dvKmoGnS9YWf8yw8RhuD3zyR1Fj1KeTw';
    td_0A.td_1d = 'https://img9.target.com/qeo34RvqTtu7Fbg4?e0d4df9bfb3e4bee=dkpBRsN4ktJ8hiw51l-sfxLkyrwVQz7Oyr3E3FP9Dp3G56Kh9U_SY3pnAZ6KxooKmQIeC1wywJ3kSSq1N-VE8PhEwHkRo6s-ZHI1O4SJoTIrAgpqRx6qLJaSk0c0CCa0oOuavCM_5TScG8RQgt2C-0HjqkisXs_ie_eSmpQZjeexMcUyQ-6g0g';
    td_0A.td_3s = 'https://img9.target.com/pKaxPhyDqls-zNRa?4d8cd0ecdf34e118=8_JES6Ix_DjcHqup8hfU3_t7WCP_O4VKFdVgWJA2Itbou05Azm26jGIlkP92Gh2gYQ9N4fJnOXRBGK08clBHt7Eg2thTbW0Hb715o5NjID-GNnD55LEdU0YZLAs4';
});
var td_0A = td_0A || {};
var td_5Q = {
    td_4A: function () {
        if (typeof navigator !== [][[]] + '') {
            this.td_g(navigator.userAgent, navigator.vendor, navigator.platform, navigator.appVersion, window.opera);
        }
    },
    td_g: function (td_e, td_U, td_w, td_G, td_x) {
        this.td_d = [
            {
                string: td_e,
                subString: ' OPR/',
                versionSearch: ' OPR',
                identity: 'Opera'
            },
            {
                string: td_e,
                subString: 'Opera Mini',
                versionSearch: 'Opera Mini',
                identity: 'Opera Mini'
            },
            {
                string: td_e,
                subString: 'Edge',
                versionSearch: 'Edge',
                identity: 'Explorer'
            },
            {
                string: td_e,
                subString: 'Edg/',
                versionSearch: 'Edg',
                identity: 'Explorer'
            },
            {
                string: td_e,
                subString: 'YaBrowser',
                versionSearch: 'YaBrowser',
                identity: 'Yandex'
            },
            {
                string: td_e,
                subString: 'SamsungBrowser',
                identity: 'SamsungBrowser'
            },
            {
                string: td_e,
                subString: 'UCBrowser',
                identity: 'UCBrowser'
            },
            {
                string: td_e,
                subString: 'Puffin',
                identity: 'Puffin'
            },
            {
                string: td_e,
                subString: 'Chrome',
                identity: 'Chrome'
            },
            {
                string: td_e,
                subString: 'OmniWeb',
                versionSearch: 'OmniWeb/',
                identity: 'OmniWeb'
            },
            {
                string: td_e,
                subString: 'FxiOS',
                identity: 'Firefox',
                versionSearch: 'FxiOS'
            },
            {
                string: td_e,
                subString: 'CriOS',
                identity: 'Chrome',
                versionSearch: 'CriOS'
            },
            {
                string: td_e,
                subString: 'XiaoMi/MiuiBrowser',
                identity: 'XiaoMi/MiuiBrowser',
                versionSearch: 'XiaoMi/MiuiBrowser'
            },
            {
                string: td_U,
                subString: 'Apple',
                identity: 'Safari',
                versionSearch: 'Version'
            },
            {
                prop: td_x,
                identity: 'Opera',
                versionSearch: 'Version'
            },
            {
                string: td_U,
                subString: 'iCab',
                identity: 'iCab'
            },
            {
                string: td_U,
                subString: 'KDE',
                identity: 'Konqueror'
            },
            {
                string: td_e,
                subString: 'Firefox',
                identity: 'Firefox'
            },
            {
                string: td_U,
                subString: 'Camino',
                identity: 'Camino'
            },
            {
                string: td_e,
                subString: 'Netscape',
                identity: 'Netscape'
            },
            {
                string: td_e,
                subString: 'MSIE',
                identity: 'Explorer',
                versionSearch: 'MSIE'
            },
            {
                string: td_e,
                subString: 'IEMobile',
                identity: 'IEMobile',
                versionSearch: 'IEMobile'
            },
            {
                string: td_e,
                subString: 'Trident',
                identity: 'Explorer',
                versionSearch: 'rv'
            },
            {
                string: td_e,
                subString: 'Gecko',
                identity: 'Mozilla',
                versionSearch: 'rv'
            },
            {
                string: td_e,
                subString: 'Mozilla',
                identity: 'Netscape',
                versionSearch: 'Mozilla'
            }
        ];
        this.td_T = [
            {
                string: td_w,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: td_w,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: td_e,
                subString: 'Windows Phone',
                identity: 'Windows Phone'
            },
            {
                string: td_e,
                subString: 'Android',
                identity: 'Android'
            },
            {
                string: td_e,
                subString: 'OpenBSD',
                identity: 'OpenBSD'
            },
            {
                string: td_e,
                subString: 'SunOS',
                identity: 'SunOS'
            },
            {
                string: td_w,
                subString: 'Linux arm',
                identity: 'Android'
            },
            {
                string: td_w,
                subString: 'Linux',
                identity: 'Linux'
            },
            {
                string: td_w,
                subString: 'BlackBerry',
                identity: 'BlackBerry'
            },
            {
                string: td_w,
                subString: 'iPhone',
                identity: 'iPhone/iPod'
            },
            {
                string: td_w,
                subString: 'iPad',
                identity: 'iPad'
            }
        ];
        this.td_y = [
            {
                string: td_w,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: td_w,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: td_w,
                subString: 'Linux arm',
                identity: 'Android'
            },
            {
                string: td_w,
                subString: 'Linux aarch',
                identity: 'Android'
            },
            {
                string: td_w,
                subString: 'Linux',
                identity: 'Linux'
            },
            {
                string: td_w,
                subString: 'BlackBerry',
                identity: 'BlackBerry'
            },
            {
                string: td_w,
                subString: 'iPhone',
                identity: 'iPhone'
            },
            {
                string: td_w,
                subString: 'iPad',
                identity: 'iPad'
            }
        ];
        this.td_z = [
            {
                identity: 'Windows',
                versionMap: [
                    {
                        s: 'Windows 10',
                        r: /(Windows 10.0|Windows NT 10.0)/
                    },
                    {
                        s: 'Windows 8.1',
                        r: /(Windows 8.1|Windows NT 6.3)/
                    },
                    {
                        s: 'Windows 8',
                        r: /(Windows 8|Windows NT 6.2)/
                    },
                    {
                        s: 'Windows 7',
                        r: /(Windows 7|Windows NT 6.1)/
                    },
                    {
                        s: 'Windows Vista',
                        r: /Windows NT 6.0/
                    },
                    {
                        s: 'Windows Server 2003',
                        r: /Windows NT 5.2/
                    },
                    {
                        s: 'Windows XP',
                        r: /(Windows NT 5.1|Windows XP)/
                    },
                    {
                        s: 'Windows 2000',
                        r: /(Windows NT 5.0|Windows 2000)/
                    },
                    {
                        s: 'Windows ME',
                        r: /(Win 9x 4.90|Windows ME)/
                    },
                    {
                        s: 'Windows 98',
                        r: /(Windows 98|Win98)/
                    },
                    {
                        s: 'Windows 95',
                        r: /(Windows 95|Win95|Windows_95)/
                    },
                    {
                        s: 'Windows NT 4.0',
                        r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                    },
                    {
                        s: 'Windows CE',
                        r: /Windows CE/
                    },
                    {
                        s: 'Windows 3.11',
                        r: /Win16/
                    }
                ]
            },
            {
                identity: 'Mac',
                versionMap: [
                    {
                        s: 'Mac OS X',
                        r: /Mac OS X/
                    },
                    {
                        s: 'Mac OS',
                        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                    }
                ]
            },
            {
                identity: 'Windows Phone',
                versionMap: [
                    {
                        s: 'Windows Phone 6.0',
                        r: /Windows Phone 6.0/
                    },
                    {
                        s: 'Windows Phone 7.0',
                        r: /Windows Phone 7.0/
                    },
                    {
                        s: 'Windows Phone 8.0',
                        r: /Windows Phone 8.0/
                    },
                    {
                        s: 'Windows Phone 8.1',
                        r: /Windows Phone 8.1/
                    },
                    {
                        s: 'Windows Phone 10.0',
                        r: /Windows Phone 10.0/
                    }
                ]
            }
        ];
        this.td_1Y = typeof window.orientation !== [][[]] + '';
        var var_0 = this.td_A(this.td_y) || 'unknown';
        this.td_1Q = var_0;
        var var_1 = this.td_h(this.td_1Y, this.td_1Q) || 'unknown';
        this.td_4a = var_1;
        var var_2 = this.td_A(this.td_d) || 'unknown';
        this.td_1e = var_2;
        var var_3 = this.td_J(this.td_1e, td_e) || this.td_J(this.td_1e, td_G) || 'unknown';
        this.td_2k = var_3;
        var var_4 = this.td_A(this.td_T) || 'unknown';
        this.td_2l = var_4;
        var var_5 = this.td_Q(this.td_z, this.td_2l, td_e, td_G) || this.td_2l;
        this.td_1p = var_5;
        this.td_c();
    },
    td_Q: function (td_q, td_l, td_e, td_Z) {
        var td_v = td_e;
        var td_m = td_Z;
        var td_H = td_l;
        var td_G;
        var td_x = 0;;
        for (; td_x < td_q.length; td_x++) {
            if (td_q[td_x].identity === td_l) {
                var td_s = 0;;
                for (; td_s < td_q[td_x].versionMap.length; td_s++) {
                    var td_p = td_q[td_x].versionMap[td_s];
                    if (td_p.r.test(td_v)) {
                        td_H = td_p.s;
                        if (/Windows/.test(td_H)) {
                            return td_H;
                        }
                        break;
                    }
                }
                break;
            }
        }
        switch (td_H) {
        case 'Mac OS X': {
                td_H = null;
                var td_U = /(Mac OS X 10[\.\_\d]+)/.exec(td_v);
                if (td_U !== null && td_U.length >= 1) {
                    td_H = td_U[1];
                }
                break;
            }
        case 'Android': {
                td_H = null;
                var td_C = /[^-](Android[^\d]?[\.\_\d]+)/.exec(td_v);
                if (td_C !== null && td_C.length >= 1) {
                    td_H = td_C[1];
                }
                break;
            }
        case 'iPad':
        case 'iPhone':
        case 'iPhone/iPod': {
                td_H = null;
                td_G = /OS (\d+)_(\d+)_?(\d+)?/.exec(td_m);
                if (td_G !== null) {
                    var td_R = null;
                    if (td_G.length >= 1) {
                        td_R = td_G[1];
                    } else {
                        td_R = 'unknown';
                    }
                    var td_Y = null;
                    if (td_G.length >= 2) {
                        td_Y = td_G[2];
                    } else {
                        td_Y = 'unknown';
                    }
                    var td_o = null;
                    if (td_G.length >= 3) {
                        td_o = td_G[3] | '0';
                    } else {
                        td_o = '0';
                    }
                    td_H = 'iOS ' + td_R + '.' + td_Y + '.' + td_o;
                }
                break;
            }
        default: {
                return null;
            }
        }
        return td_H;
    },
    td_A: function (td_M) {
        var td_m = 0;;
        for (; td_m < td_M.length; td_m++) {
            var td_j = td_M[td_m].string;
            var td_f = td_M[td_m].prop;
            var var_6 = td_M[td_m].versionSearch || td_M[td_m].identity;
            this.versionSearchString = var_6;
            if (td_j) {
                if (td_j.indexOf(td_M[td_m].subString) !== -1) {
                    return td_M[td_m].identity;
                }
            } else {
                if (td_f) {
                    return td_M[td_m].identity;
                }
            }
        }
    },
    td_J: function (td_Z, td_k) {
        if (!td_Z) {
            return null;
        }
        var td_N;
        switch (td_Z) {
        case 'Safari': {
                var td_n = /\WVersion[^\d]([\.\d]+)/.exec(td_k);
                if (td_n !== null && td_n.length >= 1) {
                    td_N = td_n[1];
                }
                break;
            }
        case 'Opera': {
                if (this.versionSearchString === 'OPR') {
                    var td_t = /\WOPR[^\d]*([\.\d]+)/.exec(td_k);
                    if (td_t !== null && td_t.length >= 1) {
                        td_N = td_t[1];
                    }
                    break;
                }
            }
        default: {
                var td_e = td_k.indexOf(this.versionSearchString);
                if (td_e !== -1) {
                    var arg_22 = td_e + this.versionSearchString.length + 1;
                    td_N = td_k.substring(arg_22);
                }
                break;
            }
        }
        if (td_N) {
            return parseFloat(td_N);
        }
        return null;
    },
    td_K: function (td_v) {
        var td_e = null;
        try {
            td_e = new Worker(td_v);
        } catch (td_k) {
            if (td_e !== null && typeof td_e.terminate !== [][[]] + '') {
                td_e.terminate();
            }
            return td_k.toString().indexOf('is not a valid URL') !== -1;
        }
        return false;
    },
    td_h: function (isMobile, osNoUA) {
        var psc = this.td_K;
        try {
            var check = typeof window.opr !== [][[]] + '' && typeof td_B.addons !== [][[]] + '' || typeof window.opera !== [][[]] + '';
            if (check) {
                return 'Opera';
            }
            check = typeof InstallTrigger !== [][[]] + '';
            if (check) {
                return 'Firefox';
            }
            var var_7 = /constructor/i.test(window.HTMLElement) || function (p) {
                return p.toString() === '[object SafariRemoteNotification]';
            }(!window['safari'] || typeof safari !== [][[]] + '' && safari.pushNotification);
            check = var_7;
            check = typeof window.safari !== [][[]] + '';
            if (check) {
                return 'Safari';
            }
            var var_8 = false || typeof document.documentMode !== [][[]] + '';
            check = var_8;
            if (check) {
                return 'Explorer';
            }
            if (!check && typeof window.StyleMedia !== [][[]] + '') {
                return 'Edge';
            }
            if (psc('brave://')) {
                return 'Brave';
            }
            if (psc('edge://')) {
                return 'Edge';
            }
            if (psc('puffin://')) {
                return 'Puffin';
            }
            var var_9 = typeof window.chrome !== [][[]] + '' && typeof window.yandex == [][[]] + '' && (typeof window.chrome.webstore !== [][[]] + '' || typeof window.chrome.runtime !== [][[]] + '' || typeof window.chrome.loadTimes !== [][[]] + '');
            check = var_9;
            if (check) {
                return 'Chrome';
            }
            if (isMobile) {
                var var_11 = typeof window.chrome !== [][[]] + '' && typeof window.chrome.Benchmarking !== [][[]] + '';
                check = var_11;
                if (check) {
                    return 'SamsungBrowser';
                }
                check = typeof window.ucapi !== [][[]] + '';
                if (check) {
                    return 'UCBrowser';
                }
            }
            if (osNoUA === 'iPhone' || osNoUA === 'iPad') {
                if (typeof navigator.serviceWorker !== [][[]] + '') {
                    return 'Safari';
                }
                if (typeof window.$jscomp !== [][[]] + '') {
                    return 'Chrome';
                }
            }
            var var_10 = typeof window.chrome !== [][[]] + '' && typeof window.yandex !== [][[]] + '';
            check = var_10;
            if (check) {
                return 'Yandex';
            }
        } catch (err) {
        }
        return null;
    },
    td_c: function () {
        if (this.td_1Y !== true || this.td_1Q !== 'Mac') {
            return;
        }
        this.td_1Q = 'iPhone/iPad';
        this.td_2l = this.td_1Q;
        this.td_1p = this.td_2l;
    },
    td_d: {},
    td_T: {},
    td_y: {},
    td_z: {}
};
td_0A.td_0D();
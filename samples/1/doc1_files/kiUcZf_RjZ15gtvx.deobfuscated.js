var td_1x = td_1x || {};
td_1x.td_4Z = function (td_e, td_y) {
    try {
        var td_V = [''];
        var td_Q = 0;
        var td_F = 0;;
        for (; td_F < td_y.length; ++td_F) {
            var arg_245 = td_e.charCodeAt(td_Q) ^ td_y.charCodeAt(td_F);
            var arg_244 = String.fromCharCode(arg_245);
            td_V.push(arg_244);
            td_Q++;
            if (td_Q >= td_e.length) {
                td_Q = 0;
            }
        }
        return td_V.join('');
    } catch (td_X) {
        return null;
    }
};
td_1x.td_4S = function (td_q) {
    if (!String || !String.fromCharCode || !parseInt) {
        return null;
    }
    try {
        this.td_c = td_q;
        this.td_d = '';
        this.td_f = function (td_B, td_y) {
            if (0 === this.td_d.length) {
                var td_W = this.td_c.substr(0, 32);
                var td_N = '';
                var td_k = 32;;
                for (; td_k < td_q.length; td_k += 2) {
                    var arg_247 = td_q.substr(td_k, 2);
                    var arg_246 = parseInt(arg_247, 16);
                    td_N += String.fromCharCode(arg_246);
                }
                this.td_d = td_1x.td_4Z(td_W, td_N);
            }
            if (this.td_d.substr) {
                return this.td_d.substr(td_B, td_y);
            }
        };
    } catch (td_R) {
    }
    return null;
};
td_1x.td_4V = function (td_R) {
    if (td_R === null || td_R.length === null || !String || !String.fromCharCode) {
        return null;
    }
    var td_l = null;
    try {
        var td_G = '';
        var td_r = [];
        var td_D = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
        var td_s = 0;
        var td_W = 0;;
        for (; td_W < td_R.length; ++td_W) {
            if (65 + td_s >= 126) {
                td_s = 0;
            }
            var td_F = (td_D + td_R.charCodeAt(td_s++)).slice(-3);
            td_r.push(td_F);
        }
        var td_H = td_r.join('');
        td_s = 0;
        var td_W = 0;;
        for (; td_W < td_H.length; ++td_W) {
            if (65 + td_s >= 126) {
                td_s = 0;
            }
            var arg_248 = 65 + td_s++;
            var td_h = String.fromCharCode(arg_248);
            if (td_h !== [][[]] + '') {
                td_G += td_h;
            }
        }
        td_l = td_1x.td_4Z(td_G, td_H);
    } catch (td_J) {
        return null;
    }
    return td_l;
};
td_1x.td_2h = function (td_U) {
    if (td_U === null || td_U.length === null) {
        return null;
    }
    var td_J = '';
    try {
        var td_g = '';
        var td_N = 0;
        var td_u = 0;;
        for (; td_u < td_U.length; ++td_u) {
            if (65 + td_N >= 126) {
                td_N = 0;
            }
            var arg_249 = 65 + td_N++;
            var td_O = String.fromCharCode(arg_249);
            if (td_O !== [][[]] + '') {
                td_g += td_O;
            }
        }
        var td_n = td_1x.td_4Z(td_g, td_U);
        var td_L = td_n.match(/.{1,3}/g);
        var td_u = 0;;
        for (; td_u < td_L.length; ++td_u) {
            var arg_250 = parseInt(td_L[td_u], 10);
            td_J += String.fromCharCode(arg_250);
        }
    } catch (td_T) {
        return null;
    }
    return td_J;
};
var td_1x = td_1x || {};
function td_5y() {
    'use strict';
    var td_fh;
    var td_Yp = true;
    this.tryAgain = function () {
        return td_fh ? false : td_Yp;
    };
    this.getFPParams = function () {
        if (td_fh) {
            return '&batst=' + td_fh;
        }
        return null;
    };
    function td_Vu(td_Jk, td_nP) {
        var td_mT = '';
        if (typeof td_Jk === 'number') {
            td_mT = '"level":' + td_Jk.toFixed(2);
        }
        if (typeof td_nP !== [][[]] + '') {
            if (td_mT) {
                td_mT += ',';
            }
            td_mT += '"status":' + (td_nP ? '"charging"' : '"unplugged"');
        }
        if (td_mT) {
            return '{' + td_mT + '}';
        }
        return null;
    }
    this.setup = function () {
        try {
            var td_rz = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery || null;
            if (td_rz) {
                td_fh = td_Vu(td_rz.level, td_rz.charging);
            } else {
                if (navigator.getBattery) {
                    var arg_251 = function (td_JQ) {
                        td_fh = td_Vu(td_JQ.level, td_JQ.charging);
                    };
                    var arg_252 = function (td_dl) {
                    };
                    navigator.getBattery().then(arg_251, arg_252);
                } else {
                    td_Yp = false;
                }
            }
        } catch (td_zk) {
            td_Yp = false;
        }
    };
}
var td_1x = td_1x || {};
td_1x.td_3T = function () {
};
td_1x.hasDebug = false;
td_1x.trace = function () {
};
td_1x.hasTrace = false;
var td_1x = td_1x || {};
if (typeof td_1x.td_0l === [][[]] + '') {
    td_1x.td_0l = [];
}
var td_0v, td_0F, td_3J, td_2p, td_5m, td_1t, td_5d, td_3w, td_0r, td_w3 = [], td_1b, td_5F, td_4H, td_5p, td_3V, td_5I, td_5u = [], td_5C, td_0N, td_2P, td_4A, td_0b, td_0y, td_4K, td_0s, td_3K, td_4X, td_2a, td_4i, td_0M, td_2z, td_1n, td_2y, td_3R, td_3M, td_2U, td_4E, td_0o = null;
if (typeof navigator !== [][[]] + '') {
    td_w3 = navigator.mimeTypes;
}
td_1x.td_0l.push(function () {
    td_5O = 'https://img9.target.com/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=4f45625ef5a8ba14&if=ls';
    td_0P = 'https://9p00aymwyyg6a2umwt7jcdq2j3qzk5uubfpife3p4f45625ef5a8ba14am1.e.aa.online-metrix.net/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=4f45625ef5a8ba14&di=yes';
    td_4B = 'https://img9.target.com/fp/clear3.png;CIS3SID=55F3ACDF8D852881ED25308341F05CD1?org_id=9p00aymw&session_id=1068138485063&nonce=4f45625ef5a8ba14';
    td_0r = 'e5774740b9614bf9bced654b892d5a83_1777134699344';
    td_5m = 'https://img9.target.com/fp/ls_fp.html;CIS3SID=55F3ACDF8D852881ED25308341F05CD1?org_id=9p00aymw&session_id=1068138485063&nonce=4f45625ef5a8ba14';
    td_5u = [
        'REF:63333',
        'VNC:5900',
        'VNC:5901',
        'VNC:5902',
        'VNC:5903',
        'RDP:3389',
        'ARO:5950',
        'AMY:5931',
        'TV0:5939',
        'TV1:6039',
        'TV2:5944',
        'TV2:6040',
        'APC:5279',
        'ANY:7070'
    ];
    td_4t = 'https://img9.target.com/fp/top_fp.html;CIS3SID=55F3ACDF8D852881ED25308341F05CD1?org_id=9p00aymw&session_id=1068138485063&nonce=4f45625ef5a8ba14';
    td_5S = 't';
    td_3R = 'eu-aa.online-metrix.net';
    td_3M = '4f45625ef5a8ba14';
    td_3w = '9p00aymw';
    td_5d = '1068138485063';
    td_0F = 'https://img9.target.com/fp/clear.png';
    td_0v = 'https://img9.target.com/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=4f45625ef5a8ba14';
});
var td_1x = td_1x || {};
function td_4q(td_NR) {
    var td_Wg = null;
    if (typeof tmx_profiling_complete !== [][[]] + '') {
        td_Wg = tmx_profiling_complete;
    }
    if (td_Wg === null) {
        td_Wg = td_dE(window.parent);
    }
    if (td_Wg === null) {
        td_Wg = td_dE(window.top);
    }
    if (td_Wg !== null) {
        td_Wg(td_NR);
    } else {
        try {
            if (typeof window.top.postMessage !== [][[]] + '') {
                var arg_253 = 'tmx_profiling_complete:' + td_NR;
                window.top.postMessage(arg_253, '*');
            } else {
            }
        } catch (td_at) {
        }
    }
}
function td_dE(td_Qr) {
    try {
        var td_HD = td_Qr.origin === window.origin;
    } catch (td_L3) {
        td_HD = false;
    }
    if (td_HD && typeof td_Qr.tmx_profiling_complete !== [][[]] + '') {
        return td_Qr.tmx_profiling_complete;
    }
    return null;
}
var td_1x = td_1x || {};
var td_3G = 'prtuuwvzx%7B%7B%7C%7C%7F~a%60kbee';
var td_5l = 'prtuuwvzx%7Bz%7B%7C%7F%7D';
var td_5R = 'q%7Bzuurwq~%7Bz%7C%7C~%7Caac';
var td_3D = 'psqt%7Cqvy%7C%7Bzz%7C~~';
var td_5x = 'q%7Bzutqvy%7F';
var td_0i = 'prqutwwqp%7Bz%7B%7C%7Fz';
var td_5U = 'q%7B%7Buu~vy~%7Bzx';
var td_2b = 'q%7B%7Buuwvx%7B%7Bz%7D%7C%7F%7BaacbebgfhhjcmlooYVSST';
var td_1T = 'pstutvvxq%7Bz%7D%7Dwxaab';
var td_1g = 'przutwvy~%7Bzy%7C~~aakbedgf%60hjj';
var td_3d = 'przutwvy~%7Bzy%7C~~a%60cbemggihko';
var td_2i = 'przutwvy~%7Bzy%7C~~a%60cbebgfn';
var td_2R = 'przutwvy~%7Bzy%7C~~aabbedgfahkk';
var td_2Z = 'przutwvy~%7Bzy%7C~~a%60ebeg';
var td_4J = 'przutwvy~%7Bzy%7C~~aajbddfnohkcmmo';
var td_1R = 'prpuuwvy%7C%7Bzz%7C%7Fxa%60fbddfnahjoldinQQSSWTVV';
var td_f = 1;
var td_C = 0;
function td_4m(td_p, td_V, td_Q, td_o) {
    return td_x(td_p, td_V, td_Q, null, td_o);
}
function td_x(td_I, td_o, td_l, td_F, td_e) {
    var arg_254 = decodeURIComponent(td_o);
    var td_L = td_1x.td_2h(arg_254);
    if (td_L === null) {
        return;
    }
    if (typeof td_F !== [][[]] + '' && td_F !== null) {
        return td_a(td_I, td_L, td_l, td_e);
    } else {
        return td_r(td_I, td_L, td_l, td_e);
    }
}
function td_r(td_y, td_l, td_v, td_V) {
    if (td_y.attachEvent) {
        var arg_255 = 'on' + td_l;
        var arg_256 = function (td_L) {
            try {
                var arg_257 = td_L || window.event;
                td_v(arg_257);
            } catch (td_Z) {
            }
        };
        td_y.attachEvent(arg_255, arg_256);
    } else {
        var arg_258 = null;
        if (typeof td_V === [][[]] + '') {
            arg_258 = false;
        } else {
            arg_258 = td_V;
        }
        td_y.addEventListener(td_l, td_v, arg_258);
    }
}
function td_a(td_b, td_Z, td_c, td_Q) {
    if (typeof td_b.addEventListener !== [][[]] + '') {
        var arg_259 = null;
        if (typeof td_Q === [][[]] + '') {
            arg_259 = false;
        } else {
            arg_259 = td_Q;
        }
        td_b.addEventListener(td_Z, td_c, arg_259);
    } else {
        var arg_260 = 'on' + td_Z;
        var arg_261 = function (td_D) {
            try {
                var arg_262 = td_D || window.event;
                td_c(arg_262);
            } catch (td_I) {
            }
        };
        td_b.attachEvent(arg_260, arg_261);
    }
}
function td_5a(td_v, td_y, td_m, td_e) {
    return td_z(td_v, td_y, td_m, null, td_e);
}
function td_z(td_Q, td_U, td_V, td_c, td_v) {
    var arg_263 = decodeURIComponent(td_U);
    var td_L = td_1x.td_2h(arg_263);
    if (td_L === null) {
        return;
    }
    if (typeof td_c !== [][[]] + '' && td_c !== null) {
        return td_j(td_Q, td_L, td_V, td_v);
    } else {
        return td_i(td_Q, td_L, td_V, td_v);
    }
}
function td_i(td_w, td_n, td_l, td_b) {
    if (td_w.detachEvent) {
        td_w['e' + td_n + td_l] = td_l;
        td_w[td_n + td_l] = function (td_L) {
            var arg_265 = td_L || window.event;
            td_w['e' + td_n + td_l](arg_265);
        };
        var arg_264 = 'on' + td_n;
        td_w.detachEvent(arg_264, td_w[td_n + td_l]);
    } else {
        var arg_266 = null;
        if (typeof td_b === [][[]] + '') {
            arg_266 = false;
        } else {
            arg_266 = td_b;
        }
        td_w.removeEventListener(td_n, td_l, arg_266);
    }
}
function td_j(td_n, td_W, td_u, td_v) {
    if (typeof td_n.removeEventListener !== [][[]] + '') {
        var arg_267 = null;
        if (typeof td_v === [][[]] + '') {
            arg_267 = false;
        } else {
            arg_267 = td_v;
        }
        td_n.removeEventListener(td_W, td_u, arg_267);
    } else {
        td_n['e' + td_W + td_u] = td_u;
        td_n[td_W + td_u] = function (td_b) {
            var arg_269 = td_b || window.event;
            td_n['e' + td_W + td_u](arg_269);
        };
        var arg_268 = 'on' + td_W;
        td_n.detachEvent(arg_268, td_n[td_W + td_u]);
    }
}
function td_R(td_I) {
    var td_Q = td_I;
    var td_b = 500;
    var td_o = 30000;
    var td_W = [];
    var td_N = 0;
    var td_D = null;
    var td_Z = true;
    this.addFeature = function (td_L, td_V) {
        if (typeof td_V === [][[]] + '' || td_V < td_b) {
            td_V = td_b;
        }
        var arg_270 = td_V / td_b;
        var td_e = Math.ceil(arg_270);
        var arg_271 = [
            td_L,
            td_e,
            true
        ];
        td_W.push(arg_271);
        td_L.setup();
    };
    this.getFeaturesForTest = function () {
        return td_W;
    };
    this.start = function () {
        if (td_W.length === 0) {
            return;
        }
        td_x(window, td_2b, this.fini, td_Z);
        td_x(window, td_1T, this.fini, td_Z);
        td_D = setTimeout(td_m, td_b);
    };
    this.fini = function () {
        if (td_D) {
            clearTimeout(td_D);
            td_D = null;
        }
        td_z(window, td_2b, this.fini, td_Z);
        td_z(window, td_1T, this.fini, td_Z);
    };
    this.check = function () {
        td_m();
    };
    function td_m() {
        var td_U;
        var td_F = '';
        var td_l = 0;
        td_N++;
        td_U = 0;
        for (; td_U < td_W.length; td_U++) {
            var td_p = td_W[td_U][0];
            var td_n = td_W[td_U][1];
            var td_e = td_W[td_U][2];
            if (!td_e) {
                td_l++;
                continue;
            }
            if (td_N >= td_n) {
                var td_y = td_p.getFPParams();
                if (td_y !== null) {
                    td_F += td_y;
                }
                if (!td_p.tryAgain()) {
                    td_W[td_U][2] = false;
                    td_l++;
                } else {
                }
            }
        }
        if (td_F.length > 0) {
            var td_c = null;
            switch (td_Q) {
            case 0: {
                    td_c = td_4B + '&jac=1&je=' + td_1x.td_4b(td_F, td_5d);
                    break;
                }
            case 1:
            default: {
                    td_c = td_0v + '&jac=1&je=' + td_1x.td_4b(td_F, td_5d);
                    break;
                }
            }
            td_3X(td_c, document);
        }
        var arg_272 = td_o / td_b;
        if (td_N >= Math.ceil(arg_272)) {
            return;
        }
        if (td_l < td_W.length) {
            td_D = setTimeout(td_m, td_b);
        } else {
        }
    }
}
var td_4o = new td_R(td_f);
var td_3f = new td_R(td_C);
var td_1x = td_1x || {};
function td_1N(td_bA, td_cJ, td_v5) {
    var td_K3 = [];
    var td_LE = 0;
    var td_Sq = [];
    var td_JX = [];
    var td_k8 = null;
    var td_AA = true;
    var td_kr = true;
    this.timeout = 1500;
    this.validate = false;
    this.isValid = function () {
        return this.validate;
    };
    if (typeof WebSocket === [][[]] + '') {
        return;
    }
    var td_PP = 0;
    var td_X8 = 0;
    if (td_0u.td_5h === 'Explorer') {
        td_PP = 2500;
        td_X8 = 6;
    } else {
        td_PP = 1500;
        td_X8 = 128;
    }
    var td_xo = 3 * td_PP;
    var td_x1 = function (td_Lr, td_KX, td_fY, td_HP, td_e4, td_o0) {
        if (typeof td_fY === [][[]] + '' || typeof td_o0 === [][[]] + '') {
            return false;
        }
        if (td_o0 < td_fY / 2) {
            return true;
        }
        return false;
    };
    if (td_bA === 'Windows') {
        this.os = 'WIN';
    } else {
        if (td_bA === 'Mac') {
            this.os = 'MAC';
        } else {
            this.os = td_bA;
        }
    }
    this.browser = td_cJ;
    this.ip = '127.0.0.1';
    this.scanPorts = [];
    var td_XY = 0;;
    for (; td_XY < td_v5.length; td_XY++) {
        var td_Ke = td_v5[td_XY].split(':');
        var td_Ie;
        if (td_Ke.length === 1) {
            td_Ie = td_Ke[0];
        } else {
            if (td_Ke.length === 2) {
                td_Ie = td_Ke[1];
            } else {
                if (td_Ke.length === 3) {
                    td_Ie = td_Ke[2];
                } else {
                    continue;
                }
            }
        }
        if (this.os !== 'WIN') {
            continue;
        }
        var arg_273 = [
            td_Ie,
            td_x1
        ];
        this.scanPorts.push(arg_273);
    }
    if (this.scanPorts.length > 1) {
        this.validate = true;
    }
    if (this.validate === false) {
        return;
    }
    var td_QR = this;
    var td_pg;
    var td_jv = 0;
    var td_hi = 0;
    var td_sm;
    var td_gj = {};
    var td_a1 = this.scanPorts.length;
    var td_HZ = function (td_rS) {
        td_gj[td_jv + '_open'] = true;
        if (td_1x.hasDebug) {
            var td_lq = '';
            for (var td_aT in td_rS) {
                td_lq += '::' + td_aT + ' : ' + td_rS[td_aT];
            }
        }
    };
    var td_HG = function (td_i9) {
        td_gj[td_jv + '_error'] = true;
    };
    var td_z4 = function (td_fz) {
        td_gj[td_jv + '_close'] = true;
    };
    function td_Lv() {
        if (!td_Z8() || !td_kr) {
            return;
        }
        td_pg = td_O();
        try {
            var arg_274 = 'wss://' + td_QR.ip + ':' + td_jv;
            td_sm = new WebSocket(arg_274);
            td_sm.onerror = td_HG;
            td_sm.onopen = td_HZ;
            td_sm.onclose = td_z4;
            var arg_275 = setTimeout(td_Kh, 5);
            td_JX.push(arg_275);
        } catch (td_wC) {
            return;
        }
    }
    function td_Kh() {
        var td_lK = td_O() - td_pg;
        if (td_sm.readyState === 0) {
            if (td_lK > td_PP) {
                td_gj[td_jv + '_interval'] = td_PP;
                td_sm.close();
                td_sm = null;
                td_pg = td_O();
                var arg_276 = setTimeout(td_Lv, 1);
                td_JX.push(arg_276);
            } else {
                var arg_277 = setTimeout(td_Kh, 5);
                td_JX.push(arg_277);
            }
        } else {
            td_gj[td_jv + '_interval'] = td_lK;
            td_sm.close();
            td_sm = null;
            var arg_278 = setTimeout(td_Lv, 1);
            td_JX.push(arg_278);
        }
    }
    function td_Z8() {
        if (td_hi >= td_QR.scanPorts.length) {
            td_aR();
            return false;
        }
        td_jv = td_QR.scanPorts[td_hi++][0];
        return true;
    }
    function td_aR() {
        var td_dl = [];
        var td_UQ = td_gj[td_QR.scanPorts[0][0] + '_error'];
        var td_P2 = td_gj[td_QR.scanPorts[0][0] + '_close'];
        var td_by = td_gj[td_QR.scanPorts[0][0] + '_interval'];
        var td_Lp = td_QR.scanPorts[0][0] + '-' + td_by;
        var td_He = 1;;
        for (; td_He < td_QR.scanPorts.length; td_He++) {
            var td_E8 = td_gj[td_QR.scanPorts[td_He][0] + '_error'];
            var td_rl = td_gj[td_QR.scanPorts[td_He][0] + '_close'];
            var td_DS = td_gj[td_QR.scanPorts[td_He][0] + '_interval'];
            if (td_QR.scanPorts[td_He][1](td_UQ, td_P2, td_by, td_E8, td_rl, td_DS)) {
                var td_FH = td_QR.scanPorts[td_He][0];
                td_dl.push(td_FH);
            }
            td_Lp += ',' + td_QR.scanPorts[td_He][0] + '-' + td_DS;
        }
        var td_SQ = 'rd=' + td_dl.join() + '&rdt=' + td_Lp;
        var td_Ww = td_4B + '&je=' + td_1x.td_4b(td_SQ, td_5d);
        td_3X(td_Ww, document);
        if (td_1x.hasTrace) {
            for (var td_sX in td_gj) {
                if (td_gj.hasOwnProperty(td_sX)) {
                }
            }
        }
    }
    function td_UD() {
        self.GLOBREPLACE = 'eval_fn_1';
        self.REPLACEVAL = 'tmx';
        self.MESSAGE = 'message';
        self.OPEN = 'open';
        self.ERROR = 'error';
        self.CLOSE = 'close';
        self.INTERVAL = '_interval';
        self.SOCKET = 'wss://127.0.0.1:';
        self.DATA = 'DATA';
        self.POSTMSGDONE = 'DONE';
        self.POSTMSGQUERY = 'QUERY';
        self.INIT = 'INIT';
        self.RESULT = 'RESULT';
        self.DATACOUNT = 'DATACOUNT';
        self.CTIMEOUT = 'TIMEOUT';
        self.WOPEN = 'watcher_open';
        self.WERROR = 'watcher_error';
        self.WCLOSE = 'watcher_close';
        self.NUMBER = 'number';
        self.TIMEEXCEEDED = ' - time exceeded';
        self.SEP = ' : ';
        this.PortProbeInitialiser = function () {
            return 'self.MESSAGE = "' + self.MESSAGE + '";\n' + 'self.OPEN = "' + self.OPEN + '";\n' + 'self.ERROR = "' + self.ERROR + '";\n' + 'self.CLOSE = "' + self.CLOSE + '";\n' + 'self.INTERVAL = "' + self.INTERVAL + '";\n' + 'self.SOCKET = "' + self.SOCKET + '";\n' + 'self.DATA = "' + self.DATA + '";\n' + 'self.TIMEEXCEEDED = "' + self.TIMEEXCEEDED + '";\n' + 'self.SEP = "' + self.SEP + '";\n';
        };
        this.UnderBossInitialiser = function () {
            return 'self.POSTMSGDONE = "' + self.POSTMSGDONE + '";\n' + 'self.POSTMSGQUERY = "' + self.POSTMSGQUERY + '";\n' + 'self.INIT = "' + self.INIT + '";\n' + 'self.RESULT = "' + self.RESULT + '";\n' + 'self.DATACOUNT = "' + self.DATACOUNT + '";\n' + 'self.CTIMEOUT = "' + self.CTIMEOUT + '";\n' + 'self.MESSAGE = "' + self.MESSAGE + '";\n' + 'self.WOPEN = "' + self.WOPEN + '";\n' + 'self.WERROR = "' + self.WERROR + '";\n' + 'self.WCLOSE = "' + self.WCLOSE + '";\n' + 'self.INTERVAL = "' + self.INTERVAL + '";\n' + 'self.NUMBER = "' + self.NUMBER + '";\n' + 'self.SOCKET = "' + self.SOCKET + '";\n';
        };
        this.replaceGlobalFncNameSpace = function (td_T9) {
            var td_LN = td_T9;
            var td_mX = 0;
            while (td_LN.search(self.GLOBREPLACE) !== -1) {
                td_LN = td_LN.replace(self.GLOBREPLACE, self.REPLACEVAL);
            }
            return td_LN;
        };
        this.debug = function (td_AO) {
            if (typeof console !== [][[]] + '' && typeof console.log !== [][[]] + '') {
                console.log(td_AO);
            }
        };
        this.makeDebug = function () {
            var td_hr;
            if (td_1x.hasDebug) {
                td_hr = '\n' + 'tmx.debug = ' + this.debug.toString() + '\n';
            } else {
                td_hr = '\n' + 'tmx.debug = ' + function () {
                }.toString() + '\n';
            }
            return td_hr;
        };
        this.trace = function (td_Av) {
            if (typeof console !== [][[]] + '' && typeof console.log !== [][[]] + '') {
                console.log(td_Av);
            }
        };
        this.makeTrace = function () {
            var td_qm;
            if (td_1x.hasTrace) {
                td_qm = '\n' + 'tmx.trace = ' + this.trace.toString() + '\n';
            } else {
                td_qm = '\n' + 'tmx.trace = ' + function () {
                }.toString() + '\n';
            }
            return td_qm;
        };
    }
    function td_EY(td_Lu, td_ai, td_pF) {
        var td_vC = [];
        td_vC[0] = 'var tmx = tmx || {}; //namespace' + '\n';
        var td_ow = new td_UD();
        td_vC[1] = td_ow.PortProbeInitialiser() + '\n';
        var arg_279 = td_Lu.indexOf('{') + 1;
        var arg_280 = td_Lu.lastIndexOf('}');
        td_vC[2] = td_Lu.substring(arg_279, arg_280);
        td_vC[3] = td_ow.makeDebug();
        td_vC[4] = td_ow.makeTrace();
        td_vC[5] = '\n' + td_O.toString() + '\n';
        var arg_283 = td_vC.join('');
        var arg_281 = [td_ow.replaceGlobalFncNameSpace(arg_283)];
        var arg_282 = { type: 'application/javascript' };
        var td_nL = new Blob(arg_281, arg_282);
        var arg_284 = URL.createObjectURL(td_nL);
        var td_Ei = new Worker(arg_284);
        var arg_285 = function (td_rh) {
            switch (td_rh.data[0]) {
            case 'DATA': {
                    td_hF(td_rh);
                    break;
                }
            default: {
                    break;
                }
            }
        };
        td_Ei.addEventListener('message', arg_285, false);
        var arg_286 = [
            td_ai,
            td_pF,
            td_1x.hasTrace
        ];
        td_Ei.postMessage(arg_286);
        return td_Ei;
    }
    function td_IL(td_XC, td_D2, td_pl, td_Y2) {
        var td_uZ = [];
        td_uZ[0] = 'var tmx = tmx || {}; //namespace' + '\n';
        var td_eE = new td_UD();
        td_uZ[1] = td_eE.UnderBossInitialiser() + '\n';
        var arg_287 = td_XC.indexOf('{') + 1;
        var arg_288 = td_XC.lastIndexOf('}');
        td_uZ[2] = td_XC.substring(arg_287, arg_288);
        td_uZ[3] = td_eE.makeDebug();
        td_uZ[4] = td_eE.makeTrace();
        td_uZ[5] = '\n' + td_O.toString() + '\n';
        var arg_291 = td_uZ.join('');
        var arg_289 = [td_eE.replaceGlobalFncNameSpace(arg_291)];
        var arg_290 = { type: 'application/javascript' };
        var td_Sp = new Blob(arg_289, arg_290);
        var arg_292 = URL.createObjectURL(td_Sp);
        var td_N4 = new Worker(arg_292);
        var arg_293 = function (td_Vu) {
            switch (td_Vu.data[0]) {
            case 'DONE': {
                    td_jr(td_Vu);
                    break;
                }
            case 'QUERY': {
                    var td_tt = td_Jl(td_pl);
                    var arg_295 = [
                        'RESULT',
                        td_tt
                    ];
                    td_N4.postMessage(arg_295);
                    break;
                }
            default: {
                    break;
                }
            }
        };
        td_N4.addEventListener('message', arg_293, false);
        var arg_294 = [
            'INIT',
            td_D2,
            td_Y2,
            td_1x.hasTrace
        ];
        td_N4.postMessage(arg_294);
        return td_N4;
    }
    function td_hF(td_la) {
        if (typeof td_la === [][[]] + '') {
            return;
        }
        if (typeof td_gj === [][[]] + '') {
            return;
        }
        if (!(td_la.data[1] in td_gj)) {
            td_gj[td_la.data[1]] = td_la.data[2];
        }
    }
    function td_jr(td_f3) {
        if (typeof td_f3 === [][[]] + '') {
            return;
        }
        switch (td_f3.data[1]) {
        case 'TIMEOUT': {
                td_id(td_Sq);
                td_aR();
                break;
            }
        case 'DATACOUNT': {
                if (td_a1 === td_Jl(td_gj)) {
                    td_id(td_Sq);
                    td_aR();
                } else {
                    td_bY();
                }
                break;
            }
        default: {
                break;
            }
        }
    }
    function td_gm() {
        self.pstMsg = null;
        self.isDone = false;
        self.PortTestTimeOut = null;
        self.testPort = null;
        self.localStartTime = null;
        self.localWs = null;
        self.logFunc = null;
        var arg_296 = function (td_bj) {
            self.testPort = td_bj.data[0];
            self.PortTestTimeOut = td_bj.data[1];
            td_lp(td_bj.data[0], td_bj.data[1]);
        };
        self.addEventListener(self.MESSAGE, arg_296);
        var td_nL = function (td_EM) {
            var arg_297 = [
                self.OPEN,
                self.testPort
            ];
            postMessage(arg_297);
        };
        var td_dP = function (td_FF) {
            var td_Et = td_O() - self.localStartTime;
            var arg_298 = [
                self.ERROR,
                self.testPort + self.INTERVAL,
                td_Et
            ];
            postMessage(arg_298);
        };
        var td_OZ = function (td_DY) {
            var td_Yo = td_O() - self.localStartTime;
            var arg_299 = [
                self.CLOSE,
                self.testPort + self.INTERVAL,
                td_Yo
            ];
            postMessage(arg_299);
        };
        function td_lp() {
            var arg_300 = self.testPort + self.SEP + self.PortTestTimeOut;
            eval_fn_1.debug(arg_300);
            try {
                var arg_301 = self.SOCKET + self.testPort;
                self.localWs = new WebSocket(arg_301);
                self.localWs.onopen = td_nL;
                self.localWs.onerror = td_dP;
                self.localWs.onclose = td_OZ;
                self.localStartTime = td_O();
                setTimeout(td_bJ, 5);
            } catch (td_kj) {
                var arg_302 = self.ERROR + self.SEP + td_kj.message;
                eval_fn_1.debug(arg_302);
            }
        }
        function td_bJ() {
            var td_gC = td_O() - self.localStartTime;
            if (self.localWs.readyState === 0) {
                if (td_gC > self.PortTestTimeOut) {
                    var arg_303 = self.testPort + self.TIMEEXCEEDED;
                    eval_fn_1.debug(arg_303);
                    var arg_304 = [
                        self.DATA,
                        self.testPort + self.INTERVAL,
                        self.PortTestTimeOut
                    ];
                    postMessage(arg_304);
                    td_vN();
                } else {
                    var arg_305 = function () {
                        td_bJ();
                    };
                    setTimeout(arg_305, 10);
                }
            } else {
                var arg_306 = [
                    self.DATA,
                    self.testPort + self.INTERVAL,
                    td_gC
                ];
                postMessage(arg_306);
                td_vN();
            }
        }
        function td_vN() {
            self.isDone = true;
            if (self.localWs !== null) {
                self.localWs.close();
                self.localWs = null;
            }
        }
    }
    function td_nP() {
        self.pstMsg = null;
        self.isDone = false;
        self.count = -1;
        self.time = null;
        self.timeOut = 5000;
        self.logFunc = null;
        var arg_307 = function (td_ZS) {
            switch (td_ZS.data[0]) {
            case self.INIT: {
                    self.count = td_ZS.data[1];
                    self.time = td_O();
                    if (typeof td_ZS.data[2] === self.NUMBER) {
                        self.timeOut = td_ZS.data[2];
                    }
                    break;
                }
            case self.RESULT: {
                    if (td_ZS.data[1] < 0 || td_ZS.data[1] >= self.count) {
                        self.isDone = true;
                        var arg_308 = [
                            self.POSTMSGDONE,
                            self.DATACOUNT
                        ];
                        postMessage(arg_308);
                    } else {
                        if (self.time + self.timeOut < td_O()) {
                            self.isDone = true;
                            var arg_309 = [
                                self.POSTMSGDONE,
                                self.CTIMEOUT
                            ];
                            postMessage(arg_309);
                        }
                    }
                    break;
                }
            default: {
                    break;
                }
            }
            if (self.isDone === false) {
                var arg_310 = function () {
                };
                setTimeout(arg_310, 100);
                var arg_311 = [self.POSTMSGQUERY];
                postMessage(arg_311);
            }
        };
        self.addEventListener(self.MESSAGE, arg_307);
        var td_BP = function (td_Vr) {
            var arg_312 = [
                self.WOPEN,
                td_Vr.toString()
            ];
            postMessage(arg_312);
        };
        var td_jy = function (td_DM) {
            var arg_313 = [
                self.WERROR,
                td_DM.toString()
            ];
            postMessage(arg_313);
        };
        var td_ys = function (td_Bt) {
            var arg_314 = [
                self.WCLOSE,
                td_Bt.toString()
            ];
            postMessage(arg_314);
        };
    }
    function td_id(td_xM) {
        var td_JC = false;
        while (!td_JC) {
            td_JC = true;
            for (var td_No in td_xM) {
                if (typeof td_xM[td_No] !== [][[]] + '' && td_xM[td_No] !== null) {
                    td_JC = false;
                    td_xM[td_No].terminate();
                    td_xM[td_No] = null;
                }
            }
        }
    }
    function td_Jl(td_dj) {
        if (typeof td_dj === [][[]] + '') {
            return -1;
        }
        var td_EI = 0;
        for (var td_gJ in td_dj) {
            if (td_dj.hasOwnProperty(td_gJ)) {
                ++td_EI;
            }
        }
        return td_EI;
    }
    function td_Vi(td_ES, td_gS) {
        var td_MS;
        var td_MO;
        var td_VV;
        td_MS = 0;
        td_MO = td_gS.length;
        for (; td_MS < td_MO; td_MS += td_X8) {
            var arg_315 = td_MS + td_X8;
            td_VV = td_gS.slice(td_MS, arg_315);
            td_K3.push(td_VV);
        }
    }
    function td_bY() {
        if (!td_kr) {
            return;
        }
        var td_ok = td_Jl(td_gj) + td_K3[td_LE].length;
        td_e2(td_K3[td_LE++], td_ok);
    }
    function td_e2(td_s1, td_HP) {
        for (var td_NJ in td_s1) {
            var arg_317 = td_gm.toString();
            td_Sq[td_NJ] = td_EY(arg_317, td_s1[td_NJ][0], td_PP);
        }
        var arg_316 = td_nP.toString();
        td_k8 = td_IL(arg_316, td_HP, td_gj, td_xo);
    }
    function td_rX() {
        for (var td_Qg in td_JX) {
            if (td_JX.hasOwnProperty(td_Qg) && typeof td_JX[td_Qg] !== [][[]] + '' && td_JX[td_Qg] !== null) {
                clearTimeout(td_JX[td_Qg]);
            }
        }
    }
    function td_Q6() {
        td_kr = false;
        td_z(window, td_2b, td_Q6, td_AA);
        td_z(window, td_1T, td_Q6, td_AA);
        td_rX();
        if (typeof td_k8 !== [][[]] + '' && td_k8 !== null) {
            td_k8.terminate();
        }
        td_id(td_Sq);
    }
    this.scan = function () {
        if (!this.isValid()) {
            return;
        }
        if (typeof this.scanPorts !== 'object' || this.scanPorts.length === 0) {
            return;
        }
        td_x(window, td_2b, td_Q6, td_AA);
        td_x(window, td_1T, td_Q6, td_AA);
        var td_Hq = td_0u.td_5h === 'Explorer' && (td_0u.td_4D === 'Windows 7' || td_0u.td_4D === 'Windows 8.1');
        var td_aX = typeof Worker !== [][[]] + '' && typeof URL !== [][[]] + '' && td_0u.td_5h !== 'Firefox' && !td_Hq;
        if (td_aX) {
            try {
                var arg_318 = [''];
                var arg_319 = { type: 'application/javascript' };
                var td_Ja = new Blob(arg_318, arg_319);
                var arg_320 = URL.createObjectURL(td_Ja);
                var td_zD = new Worker(arg_320);
                td_zD.terminate();
            } catch (td_RW) {
                td_aX = false;
            }
        }
        if (td_aX) {
            td_Vi(this, this.scanPorts);
            td_bY(td_LE);
        } else {
            var arg_321 = setTimeout(td_Lv, this.timeout);
            td_JX.push(arg_321);
        }
    };
}
var td_1x = td_1x || {};
function td_4R() {
    'use strict';
    var td_EE = [
        [
            'asinh',
            1,
            function (td_my) {
                return Math.log(td_my + Math.sqrt(td_my * td_my + 1));
            }
        ],
        [
            'atanh',
            0.5,
            function (td_TJ) {
                return Math.log((1 + td_TJ) / (1 - td_TJ)) / 2;
            }
        ],
        [
            'expm1',
            1,
            function (td_Kk) {
                return Math.exp(td_Kk) - 1;
            }
        ],
        [
            'log1p',
            10,
            function (td_q4) {
                return Math.log(1 + td_q4);
            }
        ],
        [
            'sinh',
            1,
            function (td_ME) {
                var td_Ek = Math.exp(td_ME);
                return (td_Ek - 1 / td_Ek) / 2;
            }
        ],
        [
            'cosh',
            10,
            function (td_XI) {
                var td_C6 = Math.exp(td_XI);
                return (td_C6 + 1 / td_C6) / 2;
            }
        ],
        [
            'tanh',
            1,
            function (td_pU) {
                var arg_322 = 2 * td_pU;
                var td_Hy = Math.exp(arg_322);
                return (td_Hy - 1) / (td_Hy + 1);
            }
        ],
        [
            'tan',
            -1e+300,
            function (td_s7) {
                return Math.tan(-1e+300);
            }
        ],
        [
            'powPI',
            -100,
            function (td_zf) {
                return Math.pow(Math.PI, td_zf);
            }
        ]
    ];
    try {
        var td_tQ = '';
        var td_HN = 0;;
        for (; td_HN < td_EE.length; td_HN++) {
            var td_Zk = td_EE[td_HN][0] + '(' + td_EE[td_HN][1] + '):' + td_EE[td_HN][2](td_EE[td_HN][1]);
            td_tQ += td_Zk + ',';
        }
        var td_BA = new td_1Y();
        return td_BA.hash(td_tQ);
    } catch (td_hO) {
    }
    return null;
}
var td_1x = td_1x || {};
if (typeof td_1x.td_0l === [][[]] + '') {
    td_1x.td_0l = [];
}
function td_3v(td_nY) {
    try {
        if (window.localStorage) {
            var td_vY = null;
            var td_ng = null;
            var td_TL = window.localStorage.getItem('ed73f20edbf2b73');
            if (td_TL !== null) {
                var td_jV = td_TL.split('_');
                if (td_jV.length === 2) {
                    var td_zc = td_jV[1];
                    if (td_zc < td_O()) {
                        window.localStorage.setItem('ed73f20edbf2b73', td_0r);
                        td_vY = td_0r.split('_')[0];
                        td_ng = td_jV[0];
                    } else {
                        td_vY = td_jV[0];
                    }
                } else {
                    if (td_jV.length === 1) {
                        var arg_323 = td_jV[0] + '_' + td_0r.split('_')[1];
                        window.localStorage.setItem('ed73f20edbf2b73', arg_323);
                        td_vY = td_jV[0];
                    } else {
                        window.localStorage.setItem('ed73f20edbf2b73', td_0r);
                        td_vY = td_0r.split('_')[0];
                    }
                }
            } else {
                window.localStorage.setItem('ed73f20edbf2b73', td_0r);
                td_vY = td_0r.split('_')[0];
            }
            var td_pH = '';
            if (td_ng !== null) {
                td_pH = '&la_old=' + td_ng;
            }
            var td_MM = td_0v + td_pH;
            if (typeof td_nY !== [][[]] + '' && td_nY === true) {
                var arg_324 = 'lsb=' + td_vY;
                td_MM += '&jf=' + td_1x.td_4b(arg_324, td_5d);
            } else {
                td_nY = false;
                var arg_325 = 'lsa=' + td_vY;
                td_MM += '&jb=' + td_1x.td_4b(arg_325, td_5d);
            }
            td_3X(td_MM, document);
            if (typeof td_5T !== [][[]] + '') {
                td_5T(td_nY);
            }
            return td_MM;
        }
    } catch (td_bV) {
    }
}
function td_0O() {
    td_1x.td_3C();
    td_1x.td_2A(document);
    td_d();
    td_3v(true);
}
td_1x.td_0l.push(function () {
    td_0r = '6a557b16f57447ee84299a29923ed271_1777134699346';
    td_5d = '1068138485063';
    td_0v = 'https://img9.target.com/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=4f45625ef5a8ba14';
});
var td_0U = function (td_zo) {
    function td_ho(td_Av) {
        return td_It(td_tQ(td_DJ(td_Av), td_Av.length * 8));
    }
    function td_zf(td_Wl) {
        var td_UV = '0123456789abcdef';
        var td_BD = '';
        var td_ck;
        var td_X7 = 0;;
        for (; td_X7 < td_Wl.length; td_X7++) {
            td_ck = td_Wl.charCodeAt(td_X7);
            var arg_326 = td_ck >>> 4 & 15;
            var arg_327 = td_ck & 15;
            td_BD += td_UV.charAt(arg_326) + td_UV.charAt(arg_327);
        }
        return td_BD;
    }
    function td_Rh(td_q3) {
        var td_RW = '';
        var td_wc = -1;
        var td_Ki;
        var td_I0;
        while (++td_wc < td_q3.length) {
            td_Ki = td_q3.charCodeAt(td_wc);
            if (td_wc + 1 < td_q3.length) {
                var arg_328 = td_wc + 1;
                td_I0 = td_q3.charCodeAt(arg_328);
            } else {
                td_I0 = 0;
            }
            if (55296 <= td_Ki && td_Ki <= 56319 && 56320 <= td_I0 && td_I0 <= 57343) {
                td_Ki = 65536 + ((td_Ki & 1023) << 10) + (td_I0 & 1023);
                td_wc++;
            }
            if (td_Ki <= 127) {
                td_RW += String.fromCharCode(td_Ki);
            } else {
                if (td_Ki <= 2047) {
                    var arg_329 = 192 | td_Ki >>> 6 & 31;
                    var arg_330 = 128 | td_Ki & 63;
                    td_RW += String.fromCharCode(arg_329, arg_330);
                } else {
                    if (td_Ki <= 65535) {
                        var arg_331 = 224 | td_Ki >>> 12 & 15;
                        var arg_332 = 128 | td_Ki >>> 6 & 63;
                        var arg_333 = 128 | td_Ki & 63;
                        td_RW += String.fromCharCode(arg_331, arg_332, arg_333);
                    } else {
                        if (td_Ki <= 2097151) {
                            var arg_334 = 240 | td_Ki >>> 18 & 7;
                            var arg_335 = 128 | td_Ki >>> 12 & 63;
                            var arg_336 = 128 | td_Ki >>> 6 & 63;
                            var arg_337 = 128 | td_Ki & 63;
                            td_RW += String.fromCharCode(arg_334, arg_335, arg_336, arg_337);
                        }
                    }
                }
            }
        }
        return td_RW;
    }
    function td_DJ(td_ZO) {
        var arg_338 = td_ZO.length >> 2;
        var td_TH = Array(arg_338);
        var td_bj = 0;;
        for (; td_bj < td_TH.length; td_bj++) {
            td_TH[td_bj] = 0;
        }
        td_bj = 0;
        for (; td_bj < td_ZO.length * 8; td_bj += 8) {
            var arg_339 = td_bj / 8;
            td_TH[td_bj >> 5] |= (td_ZO.charCodeAt(arg_339) & 255) << td_bj % 32;
        }
        return td_TH;
    }
    function td_It(td_qG) {
        var td_rd = '';
        var td_zI = 0;;
        for (; td_zI < td_qG.length * 32; td_zI += 8) {
            var arg_340 = td_qG[td_zI >> 5] >>> td_zI % 32 & 255;
            td_rd += String.fromCharCode(arg_340);
        }
        return td_rd;
    }
    function td_tQ(td_WX, td_SJ) {
        td_WX[td_SJ >> 5] |= 128 << td_SJ % 32;
        td_WX[(td_SJ + 64 >>> 9 << 4) + 14] = td_SJ;
        var td_uU = 1732584193;
        var td_lp = -271733879;
        var td_WZ = -1732584194;
        var td_sy = 271733878;
        var td_j2 = 0;;
        for (; td_j2 < td_WX.length; td_j2 += 16) {
            var td_nX = td_uU;
            var td_Kh = td_lp;
            var td_fk = td_WZ;
            var td_nE = td_sy;
            td_uU = td_hH(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 0], 7, -680876936);
            td_sy = td_hH(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 1], 12, -389564586);
            td_WZ = td_hH(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 2], 17, 606105819);
            td_lp = td_hH(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 3], 22, -1044525330);
            td_uU = td_hH(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 4], 7, -176418897);
            td_sy = td_hH(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 5], 12, 1200080426);
            td_WZ = td_hH(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 6], 17, -1473231341);
            td_lp = td_hH(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 7], 22, -45705983);
            td_uU = td_hH(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 8], 7, 1770035416);
            td_sy = td_hH(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 9], 12, -1958414417);
            td_WZ = td_hH(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 10], 17, -42063);
            td_lp = td_hH(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 11], 22, -1990404162);
            td_uU = td_hH(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 12], 7, 1804603682);
            td_sy = td_hH(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 13], 12, -40341101);
            td_WZ = td_hH(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 14], 17, -1502002290);
            td_lp = td_hH(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 15], 22, 1236535329);
            td_uU = td_Bx(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 1], 5, -165796510);
            td_sy = td_Bx(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 6], 9, -1069501632);
            td_WZ = td_Bx(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 11], 14, 643717713);
            td_lp = td_Bx(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 0], 20, -373897302);
            td_uU = td_Bx(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 5], 5, -701558691);
            td_sy = td_Bx(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 10], 9, 38016083);
            td_WZ = td_Bx(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 15], 14, -660478335);
            td_lp = td_Bx(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 4], 20, -405537848);
            td_uU = td_Bx(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 9], 5, 568446438);
            td_sy = td_Bx(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 14], 9, -1019803690);
            td_WZ = td_Bx(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 3], 14, -187363961);
            td_lp = td_Bx(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 8], 20, 1163531501);
            td_uU = td_Bx(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 13], 5, -1444681467);
            td_sy = td_Bx(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 2], 9, -51403784);
            td_WZ = td_Bx(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 7], 14, 1735328473);
            td_lp = td_Bx(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 12], 20, -1926607734);
            td_uU = td_LE(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 5], 4, -378558);
            td_sy = td_LE(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 8], 11, -2022574463);
            td_WZ = td_LE(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 11], 16, 1839030562);
            td_lp = td_LE(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 14], 23, -35309556);
            td_uU = td_LE(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 1], 4, -1530992060);
            td_sy = td_LE(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 4], 11, 1272893353);
            td_WZ = td_LE(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 7], 16, -155497632);
            td_lp = td_LE(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 10], 23, -1094730640);
            td_uU = td_LE(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 13], 4, 681279174);
            td_sy = td_LE(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 0], 11, -358537222);
            td_WZ = td_LE(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 3], 16, -722521979);
            td_lp = td_LE(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 6], 23, 76029189);
            td_uU = td_LE(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 9], 4, -640364487);
            td_sy = td_LE(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 12], 11, -421815835);
            td_WZ = td_LE(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 15], 16, 530742520);
            td_lp = td_LE(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 2], 23, -995338651);
            td_uU = td_Ri(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 0], 6, -198630844);
            td_sy = td_Ri(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 7], 10, 1126891415);
            td_WZ = td_Ri(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 14], 15, -1416354905);
            td_lp = td_Ri(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 5], 21, -57434055);
            td_uU = td_Ri(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 12], 6, 1700485571);
            td_sy = td_Ri(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 3], 10, -1894986606);
            td_WZ = td_Ri(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 10], 15, -1051523);
            td_lp = td_Ri(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 1], 21, -2054922799);
            td_uU = td_Ri(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 8], 6, 1873313359);
            td_sy = td_Ri(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 15], 10, -30611744);
            td_WZ = td_Ri(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 6], 15, -1560198380);
            td_lp = td_Ri(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 13], 21, 1309151649);
            td_uU = td_Ri(td_uU, td_lp, td_WZ, td_sy, td_WX[td_j2 + 4], 6, -145523070);
            td_sy = td_Ri(td_sy, td_uU, td_lp, td_WZ, td_WX[td_j2 + 11], 10, -1120210379);
            td_WZ = td_Ri(td_WZ, td_sy, td_uU, td_lp, td_WX[td_j2 + 2], 15, 718787259);
            td_lp = td_Ri(td_lp, td_WZ, td_sy, td_uU, td_WX[td_j2 + 9], 21, -343485551);
            td_uU = td_ya(td_uU, td_nX);
            td_lp = td_ya(td_lp, td_Kh);
            td_WZ = td_ya(td_WZ, td_fk);
            td_sy = td_ya(td_sy, td_nE);
        }
        return Array(td_uU, td_lp, td_WZ, td_sy);
    }
    function td_ds(td_FH, td_iC, td_OU, td_PU, td_IX, td_wQ) {
        return td_ya(td_OV(td_ya(td_ya(td_iC, td_FH), td_ya(td_PU, td_wQ)), td_IX), td_OU);
    }
    function td_hH(td_DK, td_CC, td_oG, td_Di, td_Hm, td_OX, td_ev) {
        return td_ds(td_CC & td_oG | ~td_CC & td_Di, td_DK, td_CC, td_Hm, td_OX, td_ev);
    }
    function td_Bx(td_YM, td_Hx, td_Qp, td_hV, td_Yj, td_jO, td_V4) {
        return td_ds(td_Hx & td_hV | td_Qp & ~td_hV, td_YM, td_Hx, td_Yj, td_jO, td_V4);
    }
    function td_LE(td_Lr, td_Cv, td_Yh, td_m2, td_Sd, td_FN, td_Ry) {
        return td_ds(td_Cv ^ td_Yh ^ td_m2, td_Lr, td_Cv, td_Sd, td_FN, td_Ry);
    }
    function td_Ri(td_AJ, td_Db, td_rx, td_Wx, td_Og, td_B7, td_lb) {
        return td_ds(td_rx ^ (td_Db | ~td_Wx), td_AJ, td_Db, td_Og, td_B7, td_lb);
    }
    function td_ya(td_td, td_gn) {
        var td_Xs = (td_td & 65535) + (td_gn & 65535);
        var td_Yx = (td_td >> 16) + (td_gn >> 16) + (td_Xs >> 16);
        return td_Yx << 16 | td_Xs & 65535;
    }
    function td_OV(td_wc, td_v4) {
        return td_wc << td_v4 | td_wc >>> 32 - td_v4;
    }
    return td_zf(td_ho(td_Rh(td_zo)));
};
function td_4s() {
    var td_wc = 1;
    var td_hq = td_wc + ':' + td_3w + ':' + td_5d + ';' + td_3M;
    var td_Dq = td_5d;
    var td_ni = {};
    var td_lp = {};
    var td_ne = {};
    var td_TI = false;
    var td_hO = false;
    var td_Ev = null;
    var td_JI = false;
    var td_Xu = td_O();
    var td_Bd = false;
    this.tryAgain = function () {
        return !td_JI;
    };
    function td_SN() {
        var td_Vd = '';
        var td_HC = Object.keys(td_ni);
        var td_pM = Object.keys(td_lp);
        var td_BG = Object.keys(td_ne);
        if (td_HC.length > 0) {
            td_Vd += '&webrtc_internal_ip=' + td_HC.join(',');
        } else {
        }
        if (td_pM.length > 0) {
            td_Vd += '&webrtc_external_ip=' + td_pM.join(',');
        }
        if (td_BG.length > 0) {
            td_Vd += '&webrtc_ipv6=' + td_BG.join(',');
        }
        if (td_TI) {
            td_Vd += '&wim=webrtc_internal_mdns';
        }
        if (!td_hO) {
            td_Vd += '&wnid=webrtc_no_internal_data';
        }
        return td_Vd;
    }
    this.getFPParams = function () {
        if (!td_JI) {
            if (new Date().getTime() - td_Xu > 2000 || td_Bd) {
                td_JI = true;
                td_Ev.close();
                td_Ev = null;
                return td_SN();
            }
        }
        return null;
    };
    this.setup = function () {
        if (!Object || !Object.create || !Object.keys) {
            td_JI = true;
            return;
        }
        var td_LR = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        if (!td_LR) {
            td_JI = true;
            return;
        }
        this.startWaitTime = td_O();
        function td_Yc(td_FI) {
            var arg_341 = td_FI.indexOf('candidate:') + 10;
            var td_p6 = td_FI.substr(arg_341).split(' ');
            if (td_p6 !== null && td_p6.length > 7 && td_p6[4] !== null) {
                var td_BB = td_p6[4];
                var td_um = '([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])';
                var td_Eu = '^(' + td_um + '.){3}' + td_um + '$';
                var td_rR = td_p6[7];
                if (td_rR === 'host') {
                    td_hO = true;
                    if (td_BB.match(/^.*\.local$/)) {
                        td_TI = true;
                        return;
                    }
                    if (td_BB.match(td_Eu)) {
                        td_ni[td_BB] = true;
                    } else {
                        td_ne[td_BB] = true;
                    }
                } else {
                    if (td_BB.match(td_Eu)) {
                        td_lp[td_BB] = true;
                    } else {
                        td_ne[td_BB] = true;
                    }
                }
            }
        }
        try {
            var td_XT = { optional: [{ RtpDataChannels: true }] };
            var td_QU = 'turn:' + td_3R + '?transport=';
            var td_bD = {
                iceServers: [
                    {
                        urls: td_QU + 'tcp',
                        username: td_hq,
                        credential: td_Dq
                    },
                    {
                        urls: td_QU + 'udp',
                        username: td_hq,
                        credential: td_Dq
                    }
                ]
            };
            td_Ev = new td_LR(td_bD, td_XT);
            td_Ev.onicecandidate = function (td_rc) {
                if (td_rc.candidate) {
                    td_Yc(td_rc.candidate.candidate);
                } else {
                    td_Bd = true;
                }
            };
            td_Ev.onicegatheringstatechange = function () {
                if (td_Ev !== null) {
                    if (td_Ev.iceGatheringState === 'complete') {
                        td_Bd = true;
                    }
                }
            };
            var arg_342 = Math.random().toString();
            td_Ev.createDataChannel(arg_342);
            var td_cd = function () {
            };
            var td_wf = function (td_e7) {
                var arg_343 = function () {
                };
                td_Ev.setLocalDescription(td_e7, arg_343, td_cd);
            };
            var td_tI = function () {
            };
            if (typeof Promise === [][[]] + '' || td_Ev.createOffer.length > 0) {
                td_Ev.createOffer(td_wf, td_tI);
            } else {
                td_Ev.createOffer().then(td_wf, td_tI);
            }
        } catch (td_PT) {
            return;
        }
    };
}
var td_1x = td_1x || {};
function td_3I() {
    var td_db;
    var td_QZ;
    var td_hO = td_0u.td_5h;
    var td_Sx = parseInt(td_0u.td_0Z);
    var td_Xc = td_0u.td_3r;
    var td_hk = td_0u.td_3j;
    this.tryAgain = function () {
        return false;
    };
    this.getFPParams = function () {
        var td_Bs = '&pm=';
        if (typeof td_db === [][[]] + '') {
            if (typeof td_QZ !== [][[]] + '' && td_QZ.readyState === 'done') {
                if (td_QZ.result) {
                    td_db = false;
                } else {
                    td_db = true;
                }
            } else {
                return null;
            }
        }
        if (td_db) {
            td_Bs += 'yes';
        } else {
            td_Bs += 'no';
        }
        return td_Bs;
    };
    function td_Oo() {
        if (navigator && typeof navigator.storage !== [][[]] + '' && typeof navigator.storage.estimate !== [][[]] + '') {
            var arg_344 = function (td_Ji) {
                td_db = td_Ji.quota < 120000000;
            };
            navigator.storage.estimate().then(arg_344);
        } else {
            td_db = false;
        }
    }
    function td_Q0() {
        var td_NL = 'chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/page_embed_script.js';
        var td_gR = new XMLHttpRequest();
        td_gR.open('GET', td_NL, true);
        td_gR.responseType = 'text';
        td_gR.onload = function (td_Hl) {
            if (td_Hl && td_Hl.srcElement && td_Hl.srcElement.status === 200 && td_Hl.srcElement.response) {
                var td_K4 = td_Hl.srcElement.response;
                if (td_K4 && td_K4.size > 0) {
                    td_db = false;
                }
            }
        };
        td_gR.onerror = function (td_aT) {
            td_db = true;
        };
        td_gR.send();
    }
    function td_IT() {
        function td_fP(td_q7) {
        }
        var arg_345 = function (td_xN) {
            td_db = td_xN < 120000000;
        };
        navigator.webkitTemporaryStorage.requestQuota(120000000, arg_345, td_fP);
    }
    function td_eW() {
        if (window.openDatabase) {
            try {
                var td_jK = window.openDatabase(null, null, null, null);
            } catch (td_yp) {
                td_db = true;
            }
        } else {
            td_db = null;
        }
    }
    function td_SZ() {
        if (!window.localStorage) {
            return;
        }
        var td_Ae = 0;
        try {
            td_db = false;
            var td_gz = '';
            for (; td_Ae < 110000; ++td_Ae) {
                td_gz += 'TESTDATA';
            }
            td_Ae = 0;
            for (; td_Ae < 5; ++td_Ae) {
                var arg_346 = 'TESTKEY' + td_Ae;
                window.localStorage.setItem(arg_346, td_gz);
            }
            td_db = true;
            for (; td_Ae > 0; --td_Ae) {
                var arg_347 = 'TESTKEY' + td_Ae;
                window.localStorage.removeItem(arg_347);
            }
        } catch (td_df) {
            td_db = false;
            if (typeof td_df.code !== [][[]] + '' && td_df.code === DOMException.QUOTA_EXCEEDED_ERR) {
            }
            try {
                for (; td_Ae > 0; --td_Ae) {
                    var arg_348 = 'TESTKEY' + td_Ae;
                    window.localStorage.removeItem(arg_348);
                }
            } catch (td_df) {
            }
        }
    }
    this.setup = function () {
        if (td_hO === 'Chrome' && td_Sx >= 76) {
            td_db = false;
            if (!td_Xc) {
                td_Oo();
                if (td_db === false) {
                    td_Q0();
                }
            } else {
                switch (td_hk) {
                case 'Android': {
                        td_IT();
                        break;
                    }
                case 'iPad':
                case 'iPhone': {
                        td_eW();
                        break;
                    }
                default: {
                        break;
                    }
                }
            }
        } else {
            if (td_hO === 'Opera' || td_hO === 'Chrome') {
                if (window.webkitRequestFileSystem) {
                    var arg_349 = function () {
                        td_db = false;
                    };
                    var arg_350 = function (td_PV) {
                        td_db = true;
                    };
                    window.webkitRequestFileSystem(window.TEMPORARY, 1, arg_349, arg_350);
                } else {
                    if (window.openDatabase) {
                        td_eW();
                    }
                }
            } else {
                if (td_hO === 'Firefox' && window.indexedDB) {
                    if (typeof td_QZ === [][[]] + '') {
                        try {
                            td_QZ = window.indexedDB.open('test');
                        } catch (td_mI) {
                            td_db = true;
                        }
                    }
                } else {
                    if (td_hO === 'Explorer' && td_Sx >= 10) {
                        td_db = false;
                        try {
                            if (!window.indexedDB) {
                                td_db = true;
                            }
                        } catch (td_mI) {
                            td_db = true;
                        }
                    } else {
                        if (td_hO === 'Safari') {
                            td_db = false;
                            if (td_Xc === true && td_Sx < 12 || td_Sx >= 11.1 && td_Sx < 12) {
                                td_eW();
                            } else {
                                if ((td_db === null || td_db === false) && td_Sx >= 12) {
                                    td_SZ();
                                }
                            }
                            if (td_db === null || td_db === false && window.localStorage) {
                                try {
                                    window.localStorage.setItem('5ef56dee577af', 1);
                                } catch (td_mI) {
                                    td_db = true;
                                }
                                if (typeof td_db === [][[]] + '') {
                                    window.localStorage.removeItem('5ef56dee577af');
                                }
                            }
                        }
                    }
                }
            }
        }
    };
}
function td_5W() {
    td_1Q(td_0P, document);
}
var td_1x = td_1x || {};
var td_0X;
function td_2D() {
    try {
        var td_Qg = td_1b.getFontsList();
        if (td_Qg.length === 0) {
            return;
        }
        var td_s4 = document.createElement('canvas');
        if (!td_s4 || !td_s4.getContext) {
            return;
        }
        var td_cc = td_s4.getContext('2d');
        if (!td_cc) {
            return;
        }
        if (typeof td_cc.measureText === [][[]] + '') {
            return;
        }
        var td_tB = 'gMcdefghijklmnopqrstuvwxyz0123456789';
        td_cc.font = '72px monospace';
        var td_Xj = td_cc.measureText(td_tB).width;
        td_cc.font = '72px serif';
        var td_qO = td_cc.measureText(td_tB).width;
        var td_Aw = td_O();
        var td_Ot = 0;
        var td_fx = 0;
        var td_FY = '';
        var td_xk = false;
        var td_UX = 0;;
        for (; td_UX < td_Qg.length; td_UX++) {
            td_cc.font = '72px \'' + td_Qg[td_UX] + '\', monospace';
            var td_Mu = td_cc.measureText(td_tB).width;
            td_cc.font = '72px \'' + td_Qg[td_UX] + '\', serif';
            var td_yk = td_cc.measureText(td_tB).width;
            if (td_Xj !== td_Mu || td_qO !== td_yk) {
                td_fx++;
                td_FY += ',' + td_Qg[td_UX];
            }
            if (td_0X > 0 && td_UX % 5 === 0) {
                td_Ot = td_O() - td_Aw;
                if (td_Ot > td_0X) {
                    td_xk = true;
                    break;
                }
            }
        }
        if (!td_FY) {
            return;
        }
        if (td_Ot === 0) {
            td_Ot = td_O() - td_Aw;
        }
        var td_Mh = td_0U(td_FY);
        var td_ZW = '';
        if (!td_xk) {
            td_ZW += '&jfn=' + td_fx + '&jfh=' + td_Mh + '&jftn=0:' + td_Ot + ':' + td_fx;
        } else {
            td_ZW += '&jftn=1:' + td_Ot + ':' + td_fx;
        }
        var td_WN = td_FY.length;
        var td_RL = false;
        if (typeof td_4C !== [][[]] + '') {
            td_RL = td_4C;
        }
        if (td_WN > 0 && td_RL && !td_xk) {
            var td_qB = 1800;
            if (td_WN > td_qB && td_5F._eq('ie') && td_4H._eq('6')) {
                var td_Vo = td_FY.indexOf(',', td_qB);
                if (td_Vo !== -1) {
                    td_WN = td_Vo;
                }
            }
            td_ZW += '&jfl=' + td_FY.substring(0, td_WN);
        }
        var td_qn = td_0v + '&jd=' + td_1x.td_4b(td_ZW, td_5d);
        td_3X(td_qn, document);
    } catch (td_oA) {
    }
}
td_0X = 2000;
var td_5p = [
    'Andale Mono',
    'Arial',
    'Arial Black',
    'AR PL UKai CN',
    'AR PL UMing CN',
    'Batang',
    'Bitstream Vera Sans',
    'Comic Sans MS',
    'Courier New',
    'Cursor',
    'DejaVu LGC Sans',
    'DejaVu Sans',
    'DejaVu Sans Mono',
    'DejaVu Serif',
    'Dotum',
    'Droid Sans',
    'FreeMono',
    'FreeSans',
    'FreeSerif',
    'gargi',
    'Garuda',
    'Georgia',
    'Hei',
    'Impact',
    'KacstArt',
    'Kedage',
    'Khmer OS',
    'Khmer OS System',
    'Kinnari',
    'Liberation Sans Narrow',
    'Lohit Bengali',
    'Loma',
    'Lucida Bright',
    'Lucida Sans',
    'Lucida Sans Typewriter',
    'Luxi Mono',
    'Mallige',
    'Meera',
    'Monospace',
    'mry_KacstQurn',
    'Mukti Narrow',
    'NanumGothic',
    'NanumMyeongjo',
    'Nimbus Sans L Condensed',
    'Norasi',
    'OpenSymbol',
    'ori1Uni',
    'Phetsarath OT',
    'Pothana2000',
    'Purisa',
    'Rachana',
    'Rekha',
    'Saab',
    'Sawasdee',
    'System',
    'TakaoPGothic',
    'Times',
    'Times New Roman',
    'TlwgMono',
    'TlwgTypewriter',
    'Tlwg Typist',
    'Tlwg Typo',
    'Trebuchet MS',
    'Ubuntu',
    'Ubuntu Condensed',
    'Ume Gothic',
    'Ume Mincho',
    'Ume P Gothic',
    'Ume P Mincho',
    'Ume UI Gothic',
    'Umpush',
    'UnBatang',
    'UnDinaru',
    'UnDotum',
    'UnGraphic',
    'UnGungseo',
    'UnPilgi',
    'Untitled1',
    'Utopia',
    'Vemana2000',
    'Verdana',
    'Waree',
    'Webdings',
    'WenQuanYi Bitmap Song',
    'WenQuanYi Micro Hei',
    'WenQuanYi Zen Hei'
];
var td_3V = [
    '18thCentury',
    '8514oem',
    'AcmeFont',
    'Adobe Arabic',
    'Agency FB',
    'Aharoni',
    'Aldhabi',
    'Alfredo',
    'Algerian',
    'Alien Encounters',
    'Almonte Snow',
    'Amethyst',
    'Andalus',
    'Aparajita',
    'Arabic Transparent',
    'Arabic Typesetting',
    'AR BERKLEY',
    'Arial Baltic',
    'Arial CE',
    'Arial CYR',
    'Arial Greek',
    'Arial Narrow',
    'Arial Rounded MT Bold',
    'Arial TUR',
    'Arial Unicode MS',
    'Arimo',
    'AR JULIAN',
    'Asimov',
    'Autumn',
    'Baby Kruffy',
    'Balthazar',
    'Baskerville',
    'Baskerville Old Face',
    'Bastion',
    'Batang',
    'BatangChe',
    'Bauhaus 93',
    'Bellerose',
    'Bell MT',
    'Berlin Sans FB',
    'Berlin Sans FB Demi',
    'Bernard MT Condensed',
    'Birch Std',
    'Bitstream Vera Sans',
    'Blackadder ITC',
    'Blackoak Std',
    'BN Jinx',
    'BN Machine',
    'Bobcat',
    'Bodoni MT',
    'Bodoni MT Black',
    'Bodoni MT Poster Compressed',
    'BolsterBold',
    'Book Antiqua',
    'Bookman Old Style',
    'Bookshelf Symbol 7',
    'Borealis',
    'BOUTON International Symbols',
    'Bradley Hand ITC',
    'Brandish',
    'Britannic Bold',
    'Broadway',
    'Browallia New',
    'BrowalliaUPC',
    'Brush Script MT',
    'Brush Script Std',
    'Brussels',
    'Calibri',
    'Calibri Light',
    'Californian FB',
    'Calisto MT',
    'Calligraphic',
    'Calvin',
    'Cambria',
    'Cambria Math',
    'Candara',
    'Candles',
    'Castellar',
    'Centaur',
    'Century',
    'Century Gothic',
    'Century Schoolbook',
    'Chaparral Pro',
    'Chaparral Pro Light',
    'Charlemagne Std',
    'Chiller',
    'Chinyen',
    'Clarendon',
    'Colbert',
    'Colonna MT',
    'Comic Sans MS',
    'Commons',
    'Consolas',
    'Constantia',
    'Coolsville',
    'Cooper Black',
    'Cooper Std Black',
    'Copperplate',
    'Corbel',
    'Cordia New',
    'CordiaUPC',
    'Corporate',
    'Courier New Baltic',
    'Courier New CE',
    'Cracked Johnnie',
    'Creepygirl',
    'Curlz MT',
    'DaunPenh',
    'David',
    'Dayton',
    'DejaVu Sans',
    'Deneane',
    'Detente',
    'DFKai-SB',
    'Digifit',
    'DilleniaUPC',
    'Distant Galaxy',
    'DokChampa',
    'Dominican',
    'Dotum',
    'DotumChe',
    'Ebrima',
    'Edwardian Script ITC',
    'Elephant',
    'Emmett',
    'Engravers MT',
    'Enliven',
    'Eras Bold ITC',
    'Ethnocentric',
    'EucrosiaUPC',
    'Euphemia',
    'Expressway Rg',
    'FangSong',
    'Felix Titling',
    'Fingerpop',
    'Fixedsys',
    'Flubber',
    'Footlight MT Light',
    'Forte',
    'Frankfurter Venetian TT',
    'Franklin Gothic Book',
    'Franklin Gothic Medium Cond',
    'FrankRuehl',
    'FreesiaUPC',
    'Freestyle Script',
    'French Script MT',
    'Gabriola',
    'Gadugi',
    'Garamond',
    'Gazzarelli',
    'Gentium Basic',
    'Gentium Book Basic',
    'Geotype TT',
    'Giddyup Std',
    'Gigi',
    'Gill Sans',
    'Gill Sans MT',
    'Gill Sans MT Condensed',
    'Gill Sans MT Ext Condensed Bold',
    'Gill Sans Ultra Bold',
    'Gill Sans Ultra Bold Condensed',
    'Gisha',
    'Glockenspiel',
    'Gloucester MT Extra Condensed',
    'Good Times',
    'Goudy Old Style',
    'Goudy Stout',
    'Greek Diner Inline TT',
    'Gulim',
    'GulimChe',
    'Gungsuh',
    'GungsuhChe',
    'Haettenschweiler',
    'Hand Me Down S (BRK)',
    'Hansen',
    'Harlow Solid Italic',
    'Harrington',
    'Harvest',
    'HarvestItal',
    'Haxton Logos TT',
    'Heavy Heap',
    'Hei',
    'Helvetica',
    'Helvetica LT Std',
    'HelveticaNeueLT Com 107 XBlkCn',
    'Highboot',
    'High Tower Text',
    'Hobo Std',
    'Hollywood Hills',
    'Hombre',
    'Huxley Titling',
    'Imprint MT Shadow',
    'Induction',
    'Informal Roman',
    'IrisUPC',
    'Iskoola Pota',
    'Italianate',
    'JasmineUPC',
    'Jokerman',
    'Juice ITC',
    'Kai',
    'KaiTi',
    'Kalinga',
    'Kartika',
    'Khmer UI',
    'KodchiangUPC',
    'Kokila',
    'Kozuka Gothic Pr6N B',
    'Kristen ITC',
    'Kunstler Script',
    'Lao UI',
    'Latha',
    'Leelawadee',
    'Letter Gothic Std',
    'LetterOMatic!',
    'Levenim MT',
    'LilyUPC',
    'Limousine',
    'Lithos Pro Regular',
    'LittleLordFontleroy',
    'Lucida Bright',
    'Lucida Calligraphy',
    'Lucida Fax',
    'Lucida Handwriting',
    'Lucida Sans Typewriter',
    'Mael',
    'Magneto',
    'Maiandra GD',
    'Malgun Gothic',
    'Manorly',
    'Martina',
    'Matura MT Script Capitals',
    'Meiryo',
    'Meiryo UI',
    'MelodBold',
    'Mesquite Std',
    'Microsoft Himalaya',
    'Microsoft JhengHei',
    'Microsoft JhengHei UI',
    'Microsoft New Tai Lue',
    'Microsoft PhagsPa',
    'Microsoft Tai Le',
    'Microsoft Uighur',
    'Microsoft YaHei',
    'Microsoft YaHei UI',
    'Microsoft Yi Baiti',
    'Minerva',
    'MingLiU',
    'MingLiU-ExtB',
    'MingLiU_HKSCS',
    'Minion Pro',
    'Miriam',
    'Mistral',
    'Modern',
    'Modern No. 20',
    'Mongolian Baiti',
    'Monotype Corsiva',
    'MoolBoran',
    'Moonbeam',
    'MS Gothic',
    'MS Mincho',
    'MS Outlook',
    'MS PGothic',
    'MS PMincho',
    'MS Reference Sans Serif',
    'MS Reference Specialty',
    'MS Sans Serif',
    'MS Serif',
    'MS UI Gothic',
    'MT Extra',
    'Myanmar Text',
    'Mycalc',
    'Myriad Arabic',
    'Myriad Hebrew',
    'Myriad Pro',
    'Narkisim',
    'Nasalization',
    'Neon Lights',
    'Niagara Engraved',
    'Niagara Solid',
    'Nina',
    'Nirmala UI',
    'Notram',
    'November',
    'NSimSun',
    'Nueva Std',
    'Nueva Std Cond',
    'Nyala',
    'OCR A Extended',
    'OCR A Std',
    'Old English Text MT',
    'Onyx',
    'OpenSymbol',
    'OpineHeavy',
    'Orator Std',
    'Palace Script MT',
    'Palatino',
    'Papyrus',
    'Parchment',
    'Parry Hotter',
    'PenultimateLight',
    'Perpetua',
    'Perpetua Titling MT',
    'PhrasticMedium',
    'Pirate',
    'Plantagenet Cherokee',
    'Playbill',
    'PMingLiU',
    'PMingLiU-ExtB',
    'Poor Richard',
    'Poplar Std',
    'PR Celtic Narrow',
    'Prestige Elite Std',
    'Pristina',
    'QuiverItal',
    'Rage Italic',
    'Ravie',
    'Rockwell',
    'Rockwell Condensed',
    'Rod',
    'Roland',
    'Rondalo',
    'Rosewood Std Regular',
    'RowdyHeavy',
    'Russel Write TT',
    'Sakkal Majalla',
    'Salina',
    'Script',
    'Script MT Bold',
    'Segoe Print',
    'Segoe UI Semilight',
    'Segoe UI Symbol',
    'SF Movie Poster',
    'Shonar Bangla',
    'Showcard Gothic',
    'SimHei',
    'Simplified Arabic',
    'Simplified Arabic Fixed',
    'SimSun',
    'SimSun-ExtB',
    'Skinny',
    'Small Fonts',
    'Snap ITC',
    'Snowdrift',
    'Source Code Pro',
    'Splash',
    'Stencil',
    'Stencil Std',
    'Stephen',
    'SWGamekeys MT',
    'System',
    'Tarzan',
    'Tekton Pro',
    'Tekton Pro Cond',
    'Tekton Pro Ext',
    'Tempus Sans ITC',
    'Terminal',
    'Terminator Two',
    'Times New Roman Baltic',
    'Toledo',
    'Traditional Arabic',
    'Trajan Pro',
    'Tw Cen MT',
    'Urdu Typesetting',
    'Utsaah',
    'Valken',
    'Vani',
    'Vijaya',
    'Viner Hand ITC',
    'Vivaldi',
    'Vivian',
    'Vladimir Script',
    'Vrinda',
    'Waverly',
    'Whimsy TT',
    'Wide Latin',
    'Wingdings 2',
    'Woodcut',
    'X-Files',
    'Year supply of fairy cakes'
];
var td_5I = [
    'Abadi MT Condensed Extra Bold',
    'Abadi MT Condensed Light',
    'Al Bayan Bold',
    'Al Bayan Plain',
    'American Typewriter Bold',
    'American Typewriter Condensed',
    'American Typewriter Light',
    'Apple Braille Outline 6 Dot',
    'Apple Braille Pinpoint 6 Dot',
    'AppleGothic Regular',
    'Apple LiGothic Medium',
    'Apple LiSung Light',
    'AppleMyungjo Regular',
    'Apple SD Gothic Neo',
    'Apple SD GothicNeo ExtraBold',
    'Apple SD Gothic Neo Regular',
    'Arial Bold',
    'Arial Bold Italic',
    'Arial Hebrew Bold',
    'Arial Italic',
    'Arial Narrow Bold',
    'Arial Narrow Bold Italic',
    'Arial Narrow Italic',
    'Avenir',
    'Avenir Black',
    'Avenir Next',
    'Avenir Next Bold',
    'Avenir Next Condensed',
    'Avenir Next Condensed Bold',
    'Avenir Next Demi Bold',
    'Avenir Next Heavy',
    'Avenir Next Regular',
    'Bangla MN Bold',
    'Bangla Sangam MN Bold',
    'Baskerville Bold',
    'Baskerville Bold Italic',
    'Baskerville SemiBold',
    'Baskerville SemiBold Italic',
    'Bell MT Bold',
    'Bell MT Italic',
    'Bernard MT Condensed',
    'Big Caslon Medium',
    'Book Antiqua',
    'Book Antiqua Bold',
    'Bookman Old Style',
    'Bookman Old Style Bold',
    'Bookshelf Symbol 7',
    'Braggadocio',
    'Britannic Bold',
    'Brush Script MT Italic',
    'Calibri',
    'Calibri Bold',
    'Calibri Light',
    'Calisto MT',
    'Calisto MT Bold',
    'Cambria',
    'Cambria Bold',
    'Cambria Math',
    'Candara Bold',
    'Century',
    'Century Gothic',
    'Century Gothic Bold',
    'Century Schoolbook',
    'Century Schoolbook Bold',
    'Chalkboard Bold',
    'Chalkboard SE',
    'Chalkboard SE Bold',
    'Cochin Bold',
    'Colonna MT',
    'Comic Sans MS Bold',
    'Consolas',
    'Consolas Bold',
    'Constantia',
    'Constantia Bold',
    'Cooper Black',
    'Copperplate Bold',
    'Copperplate Gothic Bold',
    'Copperplate Light',
    'Corbel',
    'Corbel Bold',
    'Corsiva Hebrew Bold',
    'Courier Bold',
    'Courier New Bold',
    'Courier New Italic',
    'Courier Oblique',
    'Curlz MT',
    'Damascus Bold',
    'Desdemona',
    'Devanagari MT Bold',
    'Didot Bold',
    'Edwardian Script ITC',
    'Engravers MT',
    'Engravers MT Bold',
    'Euphemia UCAS Bold',
    'Eurostile',
    'Eurostile Bold',
    'Footlight MT Light',
    'Franklin Gothic Book',
    'Franklin Gothic Book Italic',
    'Franklin Gothic Medium',
    'Franklin Gothic Medium Italic',
    'Futura Condensed ExtraBold',
    'Futura Medium',
    'Gabriola',
    'Garamond',
    'Garamond Bold',
    'Geeza Pro Bold',
    'Georgia Bold',
    'Gill Sans Bold',
    'Gill Sans MT',
    'Gill Sans MT Bold',
    'Gill Sans MT Italic',
    'Gill Sans Ultra Bold',
    'Gloucester MT Extra Condensed',
    'Goudy Old Style',
    'Goudy Old Style Bold',
    'Gujarati MT Bold',
    'Gujarati Sangam MN Bold',
    'Gulim',
    'GungSeo Regular',
    'Gurmukhi MN Bold',
    'Gurmukhi Sangam MN',
    'Gurmukhi Sangam MN Bold',
    'Haettenschweiler',
    'Harrington',
    'HeadLineA Regular',
    'Hei Regular',
    'Heiti SC Light',
    'Heiti TC Light',
    'Helvetica Bold',
    'Helvetica CY Bold',
    'Helvetica CY Plain',
    'Helvetica Light',
    'Helvetica Neue Bold',
    'Helvetica Neue Medium',
    'Helvetica Oblique',
    'Hiragino Kaku Gothic ProN W3',
    'Hiragino Kaku Gothic Pro W3',
    'Hiragino Kaku Gothic StdN W8',
    'Hiragino Maru Gothic ProN W4',
    'Hiragino Mincho ProN W3',
    'Hiragino Mincho ProN W6',
    'Hiragino Sans GB W3',
    'Hiragino Sans GB W6',
    'Hoefler Text Black',
    'Hoefler Text Ornaments',
    'Imprint MT Shadow',
    'Kailasa Regular',
    'Kai Regular',
    'Kaiti SC',
    'Kaiti SC Black',
    'Kannada MN Bold',
    'Kannada Sangam MN Bold',
    'Kefa Bold',
    'Khmer MN Bold',
    'Kino MT',
    'Kokonor Regular',
    'Lucida Blackletter',
    'Lucida Bright',
    'Lucida Bright Demibold',
    'Lucida Bright Demibold Italic',
    'Lucida Bright Italic',
    'Lucida Calligraphy',
    'Lucida Calligraphy Italic',
    'Lucida Console',
    'Lucida Fax',
    'Lucida Fax Demibold',
    'Lucida Fax Regular',
    'Lucida Grande Bold',
    'Lucida Handwriting',
    'Lucida Handwriting Italic',
    'Lucida Sans',
    'Lucida Sans Demibold Italic',
    'Lucida Sans Typewriter',
    'Lucida Sans Typewriter Bold',
    'Lucida Sans Unicode',
    'Malayalam MN Bold',
    'Malayalam Sangam MN Bold',
    'Marion',
    'Marion Bold',
    'Marker Felt Thin',
    'Marlett',
    'Matura MT Script Capitals',
    'Meiryo',
    'Meiryo Bold',
    'Menlo Bold',
    'Microsoft Himalaya',
    'Microsoft Tai Le',
    'Microsoft Tai Le Bold',
    'Microsoft Yi Baiti',
    'MingLiU',
    'MingLiU-ExtB',
    'MingLiU_HKSCS',
    'Mistral',
    'Modern',
    'Modern No. 20',
    'Mongolian Baiti',
    'Monotype Corsiva',
    'Monotype Sorts',
    'MS Gothic',
    'Mshtakan Bold',
    'MS Mincho',
    'MS PGothic',
    'MS PMincho',
    'MS Reference Sans Serif',
    'MS Reference Specialty',
    'MT Extra',
    'Myanmar MN Bold',
    'NanumGothic',
    'Nanum Gothic',
    'NanumGothic Bold',
    'NanumMyeongjo',
    'Nanum Myeongjo',
    'NanumMyeongjo Bold',
    'New Peninim MT Bold',
    'News Gothic MT',
    'News Gothic MT Bold',
    'Noteworthy Bold',
    'Onyx',
    'Optima Bold',
    'Optima Regular',
    'Oriya MN Bold',
    'Oriya Sangam MN Bold',
    'Osaka-Mono',
    'Palatino Bold',
    'Palatino Linotype',
    'Palatino Linotype Bold',
    'Papyrus Condensed',
    'PCMyungjo Regular',
    'Perpetua',
    'Perpetua Bold',
    'Perpetua Titling MT',
    'Perpetua Titling MT Bold',
    'PilGi Regular',
    'Playbill',
    'PMingLiU',
    'PMingLiU-ExtB',
    'PT Sans Bold',
    'PT Sans Caption Bold',
    'PT Sans Narrow Bold',
    'Raanana Bold',
    'Rockwell',
    'Rockwell Bold',
    'Rockwell Extra Bold',
    'Rockwell Italic',
    'SimHei',
    'SimSun',
    'Sinhala MN Bold',
    'Sinhala Sangam MN Bold',
    'Skia Regular',
    'Songti SC',
    'Songti SC Black',
    'Stencil',
    'STIXGeneral-Bold',
    'STIXGeneral-Regular',
    'STIXIntegralsD-Bold',
    'STIXIntegralsSm-Bold',
    'STIXIntegralsUp-Bold',
    'STIXIntegralsUpD-Bold',
    'STIXIntegralsUpD-Regular',
    'STIXIntegralsUp-Regular',
    'STIXIntegralsUpSm-Bold',
    'STIXNonUnicode-Bold',
    'STIXSizeFiveSym-Regular',
    'STIXSizeFourSym-Bold',
    'STIXSizeOneSym-Bold',
    'STIXSizeThreeSym-Bold',
    'STIXSizeTwoSym-Bold',
    'STIXVariants-Bold',
    'STXihei',
    'Tahoma Negreta',
    'Tamil MN Bold',
    'Tamil Sangam MN Bold',
    'Telugu MN Bold',
    'Telugu Sangam MN Bold',
    'Thonburi Bold',
    'Times Bold',
    'Times New Roman Bold',
    'Times New Roman Italic',
    'Times Roman',
    'Trebuchet MS Bold',
    'Tw Cen MT',
    'Tw Cen MT Bold',
    'Tw Cen MT Italic',
    'Verdana Bold',
    'Wide Latin',
    'Yuppy SC',
    'Yuppy SC Regular',
    'Yuppy TC',
    'Yuppy TC Regular'
];
var td_0d = [
    'AR PL UKai CN',
    'AR PL UMing CN',
    'AR PL UMing HK',
    'AR PL UMing TW',
    'AR PL UMing TW MBE',
    'Andale Mono',
    'Arial',
    'Arial Black',
    'Arial Unicode MS',
    'Baskerville',
    'Batang',
    'Bitstream Charter',
    'Bitstream Vera Sans',
    'Carrois Gothic SC',
    'Century Schoolbook L',
    'Comic Sans MS',
    'Courier 10 Pitch',
    'Courier New',
    'Cursor',
    'Cutive Mono',
    'Dancing Script',
    'DejaVu LGC Sans',
    'DejaVu Sans',
    'DejaVu Sans Mono',
    'DejaVu Serif',
    'Dingbats',
    'Dotum',
    'Droid Sans',
    'Droid Sans Mono',
    'FreeMono',
    'FreeSans',
    'FreeSerif',
    'Garuda',
    'Gentium',
    'GentiumAlt',
    'Georgia',
    'Goudy',
    'Hei',
    'ITC Stone Serif',
    'Impact',
    'KacstArt',
    'KacstBook',
    'KacstDecorative',
    'KacstDigital',
    'KacstFarsi',
    'KacstLetter',
    'KacstNaskh',
    'KacstOffice',
    'KacstOne',
    'KacstPen',
    'KacstPoster',
    'KacstQurn',
    'KacstScreen',
    'KacstTitle',
    'KacstTitleL',
    'Kedage',
    'Khmer OS',
    'Khmer OS System',
    'Kinnari',
    'Liberation Mono',
    'Liberation Sans',
    'Liberation Sans Narrow',
    'Liberation Serif',
    'Lohit Bengali',
    'Lohit Devanagari',
    'Lohit Gujarati',
    'Lohit Hindi',
    'Lohit Punjabi',
    'Lohit Tamil',
    'Loma',
    'Lucida Bright',
    'Lucida Sans',
    'Lucida Sans Typewriter',
    'Luxi Mono',
    'Mallige',
    'Meera',
    'Monaco',
    'Monospace',
    'MotoyaLMaru',
    'Mukti Narrow',
    'NanumBarunGothic',
    'NanumGothic',
    'NanumGothicCoding',
    'NanumMyeongjo',
    'Nimbus Mono L',
    'Nimbus Roman No9 L',
    'Nimbus Sans L',
    'Nimbus Sans L Condensed',
    'Norasi',
    'Noto Emoji',
    'Noto Naskh Arabic',
    'Noto Sans',
    'Noto Serif',
    'OldeEnglish',
    'OpenSymbol',
    'Palatino',
    'Phetsarath OT',
    'Pothana2000',
    'Purisa',
    'Rachana',
    'Rekha',
    'Roboto',
    'Saab',
    'Samyak Tamil',
    'Sans',
    'Sawasdee',
    'Serif',
    'Standard Symbols L',
    'System',
    'TakaoExGothic',
    'TakaoExMincho',
    'TakaoGothic',
    'TakaoMincho',
    'TakaoPGothic',
    'TakaoPMincho',
    'Times',
    'Times New Roman',
    'Tlwg Typist',
    'Tlwg Typo',
    'TlwgMono',
    'TlwgTypewriter',
    'Trebuchet MS',
    'URW Bookman L',
    'URW Chancery L',
    'URW Gothic L',
    'URW Palladio L',
    'Ubuntu',
    'Ubuntu Condensed',
    'Ubuntu Mono',
    'Ume Gothic',
    'Ume Mincho',
    'Ume P Gothic',
    'Ume P Mincho',
    'Ume UI Gothic',
    'Umpush',
    'UnBatang',
    'UnDinaru',
    'UnDotum',
    'UnGraphic',
    'UnGungseo',
    'UnPilgi',
    'Untitled1',
    'Utopia',
    'Vemana2000',
    'Verdana',
    'Waree',
    'Webdings',
    'WenQuanYi Bitmap Song',
    'WenQuanYi Micro Hei',
    'WenQuanYi Micro Hei Mono',
    'WenQuanYi Zen Hei',
    'Zawgyi-One',
    'gargi',
    'mry_KacstQurn',
    'ori1Uni'
];
var td_2u = [
    'AR PL UMing CN',
    'AR PL UMing HK',
    'AR PL UMing TW',
    'AR PL UMing TW MBE',
    'Arial',
    'Arial Unicode MS',
    'Baskerville',
    'Bitstream Charter',
    'Carrois Gothic SC',
    'Century Schoolbook L',
    'Copperplate',
    'Courier 10 Pitch',
    'Courier New',
    'Cutive Mono',
    'Dancing Script',
    'DejaVu Sans',
    'DejaVu Sans Mono',
    'DejaVu Serif',
    'Didot',
    'Dingbats',
    'Droid Sans Mono',
    'FreeMono',
    'FreeSans',
    'FreeSerif',
    'Futura',
    'Garuda',
    'Georgia',
    'Gill Sans',
    'Helvetica',
    'Hoefler Text',
    'KacstArt',
    'KacstBook',
    'KacstDecorative',
    'KacstDigital',
    'KacstFarsi',
    'KacstLetter',
    'KacstNaskh',
    'KacstOffice',
    'KacstOne',
    'KacstPen',
    'KacstPoster',
    'KacstQurn',
    'KacstScreen',
    'KacstTitle',
    'KacstTitleL',
    'Kedage',
    'Khmer OS',
    'Khmer OS System',
    'Kinnari',
    'Liberation Mono',
    'Liberation Sans',
    'Liberation Sans Narrow',
    'Liberation Serif',
    'Lohit Bengali',
    'Lohit Gujarati',
    'Lohit Hindi',
    'Lohit Punjabi',
    'Lohit Tamil',
    'Loma',
    'Lucida Grande',
    'Mallige',
    'Meera',
    'Monaco',
    'Monospace',
    'MotoyaLMaru',
    'Mukti Narrow',
    'NanumGothic',
    'NanumMyeongjo',
    'Nimbus Mono L',
    'Nimbus Roman No9 L',
    'Nimbus Sans L',
    'Norasi',
    'Noto Emoji',
    'Noto Naskh Arabic',
    'Noto Sans',
    'Noto Sans Armenian',
    'Noto Sans Bengali',
    'Noto Sans Canadian Aboriginal',
    'Noto Sans Cherokee',
    'Noto Sans Devanagari',
    'Noto Sans Ethiopic',
    'Noto Sans Georgian',
    'Noto Sans Gujarati',
    'Noto Sans Gurmukhi',
    'Noto Sans Hebrew',
    'Noto Sans JP',
    'Noto Sans KR',
    'Noto Sans Kannada',
    'Noto Sans Khmer',
    'Noto Sans Lao',
    'Noto Sans Malayalam',
    'Noto Sans Myanmar',
    'Noto Sans Oriya',
    'Noto Sans SC',
    'Noto Sans Sinhala',
    'Noto Sans Symbols',
    'Noto Sans TC',
    'Noto Sans Tamil',
    'Noto Sans Telugu',
    'Noto Sans Thai',
    'Noto Sans Yi',
    'Noto Serif',
    'OpenSymbol',
    'Optima',
    'Palatino',
    'Palatino Linotype',
    'Papyrus',
    'Phetsarath OT',
    'Pothana2000',
    'Purisa',
    'Rachana',
    'Rekha',
    'Roboto',
    'Saab',
    'Sans',
    'Sawasdee',
    'Serif',
    'Standard Symbols L',
    'Symbol',
    'TAMu_Kadambri',
    'TAMu_Kalyani',
    'TAMu_Maduram',
    'TSCu_Comic',
    'TSCu_Paranar',
    'TSCu_Times',
    'TakaoExGothic',
    'TakaoExMincho',
    'TakaoGothic',
    'TakaoMincho',
    'TakaoPGothic',
    'TakaoPMincho',
    'Tlwg Typist',
    'Tlwg Typo',
    'TlwgMono',
    'TlwgTypewriter',
    'Trebuchet MS',
    'URW Bookman L',
    'URW Chancery L',
    'URW Gothic L',
    'URW Palladio L',
    'Ubuntu',
    'Ubuntu Condensed',
    'Ubuntu Mono',
    'Umpush',
    'UnBatang',
    'UnDinaru',
    'UnDotum',
    'UnGraphic',
    'UnGungseo',
    'UnPilgi',
    'Untitled1',
    'Vemana2000',
    'Verdana',
    'Waree',
    'WenQuanYi Micro Hei',
    'WenQuanYi Micro Hei Mono',
    'Zawgyi-One',
    'gargi',
    'mry_KacstQurn',
    'ori1Uni'
];
var td_1x = td_1x || {};
function td_3e() {
    try {
        var td_vC = td_kD();
        if (td_vC === 0 || td_vC === -1) {
            return;
        }
        var td_Mi = td_vC.gl;
        var td_yu = td_vC.name;
        td_yu += td_Mi.getParameter(td_Mi.VERSION);
        td_yu += td_Mi.getParameter(td_Mi.SHADING_LANGUAGE_VERSION);
        td_yu += td_Mi.getParameter(td_Mi.VENDOR);
        td_yu += td_Mi.getParameter(td_Mi.RENDERER);
        var td_qW = [];
        try {
            td_qW = td_Mi.getSupportedExtensions();
        } catch (td_tW) {
        }
        var td_lM = td_qW.length;
        if (td_lM) {
            var td_jU = '';
            var td_hx = 0;;
            for (; td_hx < td_lM; td_hx++) {
                if (td_jU.length) {
                    td_jU += '; ';
                }
                td_jU += td_qW[td_hx];
            }
            td_yu += td_jU;
        }
        var td_tm;
        var td_tW = td_Mi.getExtension('EXT_texture_filter_anisotropic') || td_Mi.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || td_Mi.getExtension('MOZ_EXT_texture_filter_anisotropic');
        if (td_tW) {
            td_tm = td_Mi.getParameter(td_tW.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            if (td_tm === 0) {
                td_tm = 2;
            }
        } else {
            td_tm = 'Not available';
        }
        td_yu += td_tm;
        return td_yu;
    } catch (td_tW) {
        return null;
    }
}
function td_2l() {
    try {
        var td_zP = td_kD();
        if (td_zP === 0 || td_zP === -1) {
            return;
        }
        var td_Uz = td_zP.gl;
        if (typeof td_Uz.getExtension !== 'function' || typeof td_Uz.getParameter !== 'function') {
            return null;
        }
        var td_iz = td_Uz.getExtension('WEBGL_debug_renderer_info');
        if (!td_iz || typeof td_iz !== 'object') {
            return null;
        }
        var td_RS = '';
        var td_nP = td_Uz.getParameter(td_iz.UNMASKED_VENDOR_WEBGL);
        if (typeof td_nP === 'string') {
            td_RS += '&wglv=' + encodeURIComponent(td_nP);
        }
        var td_tg = td_Uz.getParameter(td_iz.UNMASKED_RENDERER_WEBGL);
        if (typeof td_tg === 'string') {
            td_RS += '&wglr=' + encodeURIComponent(td_tg);
        }
        return td_RS;
    } catch (td_vF) {
        return null;
    }
}
var td_1x = td_1x || {};
var td_0u = {
    td_1E: function () {
        if (typeof navigator !== [][[]] + '') {
            this.td_H(navigator.userAgent, navigator.vendor, navigator.platform, navigator.appVersion, window.opera);
        }
    },
    td_H: function (td_J, td_w, td_A, td_B, td_f) {
        this.td_h = [
            {
                string: td_J,
                subString: ' OPR/',
                versionSearch: ' OPR',
                identity: 'Opera'
            },
            {
                string: td_J,
                subString: 'Opera Mini',
                versionSearch: 'Opera Mini',
                identity: 'Opera Mini'
            },
            {
                string: td_J,
                subString: 'Edge',
                versionSearch: 'Edge',
                identity: 'Explorer'
            },
            {
                string: td_J,
                subString: 'Edg/',
                versionSearch: 'Edg',
                identity: 'Explorer'
            },
            {
                string: td_J,
                subString: 'YaBrowser',
                versionSearch: 'YaBrowser',
                identity: 'Yandex'
            },
            {
                string: td_J,
                subString: 'SamsungBrowser',
                identity: 'SamsungBrowser'
            },
            {
                string: td_J,
                subString: 'UCBrowser',
                identity: 'UCBrowser'
            },
            {
                string: td_J,
                subString: 'Puffin',
                identity: 'Puffin'
            },
            {
                string: td_J,
                subString: 'Chrome',
                identity: 'Chrome'
            },
            {
                string: td_J,
                subString: 'OmniWeb',
                versionSearch: 'OmniWeb/',
                identity: 'OmniWeb'
            },
            {
                string: td_J,
                subString: 'FxiOS',
                identity: 'Firefox',
                versionSearch: 'FxiOS'
            },
            {
                string: td_J,
                subString: 'CriOS',
                identity: 'Chrome',
                versionSearch: 'CriOS'
            },
            {
                string: td_J,
                subString: 'XiaoMi/MiuiBrowser',
                identity: 'XiaoMi/MiuiBrowser',
                versionSearch: 'XiaoMi/MiuiBrowser'
            },
            {
                string: td_w,
                subString: 'Apple',
                identity: 'Safari',
                versionSearch: 'Version'
            },
            {
                prop: td_f,
                identity: 'Opera',
                versionSearch: 'Version'
            },
            {
                string: td_w,
                subString: 'iCab',
                identity: 'iCab'
            },
            {
                string: td_w,
                subString: 'KDE',
                identity: 'Konqueror'
            },
            {
                string: td_J,
                subString: 'Firefox',
                identity: 'Firefox'
            },
            {
                string: td_w,
                subString: 'Camino',
                identity: 'Camino'
            },
            {
                string: td_J,
                subString: 'Netscape',
                identity: 'Netscape'
            },
            {
                string: td_J,
                subString: 'MSIE',
                identity: 'Explorer',
                versionSearch: 'MSIE'
            },
            {
                string: td_J,
                subString: 'IEMobile',
                identity: 'IEMobile',
                versionSearch: 'IEMobile'
            },
            {
                string: td_J,
                subString: 'Trident',
                identity: 'Explorer',
                versionSearch: 'rv'
            },
            {
                string: td_J,
                subString: 'Gecko',
                identity: 'Mozilla',
                versionSearch: 'rv'
            },
            {
                string: td_J,
                subString: 'Mozilla',
                identity: 'Netscape',
                versionSearch: 'Mozilla'
            }
        ];
        this.td_t = [
            {
                string: td_A,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: td_A,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: td_J,
                subString: 'Windows Phone',
                identity: 'Windows Phone'
            },
            {
                string: td_J,
                subString: 'Android',
                identity: 'Android'
            },
            {
                string: td_J,
                subString: 'OpenBSD',
                identity: 'OpenBSD'
            },
            {
                string: td_J,
                subString: 'SunOS',
                identity: 'SunOS'
            },
            {
                string: td_A,
                subString: 'Linux arm',
                identity: 'Android'
            },
            {
                string: td_A,
                subString: 'Linux',
                identity: 'Linux'
            },
            {
                string: td_A,
                subString: 'BlackBerry',
                identity: 'BlackBerry'
            },
            {
                string: td_A,
                subString: 'iPhone',
                identity: 'iPhone/iPod'
            },
            {
                string: td_A,
                subString: 'iPad',
                identity: 'iPad'
            }
        ];
        this.td_K = [
            {
                string: td_A,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: td_A,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: td_A,
                subString: 'Linux arm',
                identity: 'Android'
            },
            {
                string: td_A,
                subString: 'Linux aarch',
                identity: 'Android'
            },
            {
                string: td_A,
                subString: 'Linux',
                identity: 'Linux'
            },
            {
                string: td_A,
                subString: 'BlackBerry',
                identity: 'BlackBerry'
            },
            {
                string: td_A,
                subString: 'iPhone',
                identity: 'iPhone'
            },
            {
                string: td_A,
                subString: 'iPad',
                identity: 'iPad'
            }
        ];
        this.td_M = [
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
        this.td_3r = typeof window.orientation !== [][[]] + '';
        var var_48 = this.td_G(this.td_K) || 'unknown';
        this.td_3j = var_48;
        var var_49 = this.td_T(this.td_3r, this.td_3j) || 'unknown';
        this.td_4u = var_49;
        var var_50 = this.td_G(this.td_h) || 'unknown';
        this.td_5h = var_50;
        var var_51 = this.td_q(this.td_5h, td_J) || this.td_q(this.td_5h, td_B) || 'unknown';
        this.td_0Z = var_51;
        var var_52 = this.td_G(this.td_t) || 'unknown';
        this.td_5f = var_52;
        var var_53 = this.td_P(this.td_M, this.td_5f, td_J, td_B) || this.td_5f;
        this.td_4D = var_53;
        this.td_k();
    },
    td_P: function (td_L, td_W, td_I, td_u) {
        var td_V = td_I;
        var td_J = td_u;
        var td_N = td_W;
        var td_d;
        var td_R = 0;;
        for (; td_R < td_L.length; td_R++) {
            if (td_L[td_R].identity === td_W) {
                var td_y = 0;;
                for (; td_y < td_L[td_R].versionMap.length; td_y++) {
                    var td_c = td_L[td_R].versionMap[td_y];
                    if (td_c.r.test(td_V)) {
                        td_N = td_c.s;
                        if (/Windows/.test(td_N)) {
                            return td_N;
                        }
                        break;
                    }
                }
                break;
            }
        }
        switch (td_N) {
        case 'Mac OS X': {
                td_N = null;
                var td_f = /(Mac OS X 10[\.\_\d]+)/.exec(td_V);
                if (td_f !== null && td_f.length >= 1) {
                    td_N = td_f[1];
                }
                break;
            }
        case 'Android': {
                td_N = null;
                var td_Y = /[^-](Android[^\d]?[\.\_\d]+)/.exec(td_V);
                if (td_Y !== null && td_Y.length >= 1) {
                    td_N = td_Y[1];
                }
                break;
            }
        case 'iPad':
        case 'iPhone':
        case 'iPhone/iPod': {
                td_N = null;
                td_d = /OS (\d+)_(\d+)_?(\d+)?/.exec(td_J);
                if (td_d !== null) {
                    var td_O = null;
                    if (td_d.length >= 1) {
                        td_O = td_d[1];
                    } else {
                        td_O = 'unknown';
                    }
                    var td_Q = null;
                    if (td_d.length >= 2) {
                        td_Q = td_d[2];
                    } else {
                        td_Q = 'unknown';
                    }
                    var td_w = null;
                    if (td_d.length >= 3) {
                        td_w = td_d[3] | '0';
                    } else {
                        td_w = '0';
                    }
                    td_N = 'iOS ' + td_O + '.' + td_Q + '.' + td_w;
                }
                break;
            }
        default: {
                return null;
            }
        }
        return td_N;
    },
    td_G: function (td_e) {
        var td_v = 0;;
        for (; td_v < td_e.length; td_v++) {
            var td_d = td_e[td_v].string;
            var td_N = td_e[td_v].prop;
            var var_54 = td_e[td_v].versionSearch || td_e[td_v].identity;
            this.versionSearchString = var_54;
            if (td_d) {
                if (td_d.indexOf(td_e[td_v].subString) !== -1) {
                    return td_e[td_v].identity;
                }
            } else {
                if (td_N) {
                    return td_e[td_v].identity;
                }
            }
        }
    },
    td_q: function (td_d, td_a) {
        if (!td_d) {
            return null;
        }
        var td_Z;
        switch (td_d) {
        case 'Safari': {
                var td_z = /\WVersion[^\d]([\.\d]+)/.exec(td_a);
                if (td_z !== null && td_z.length >= 1) {
                    td_Z = td_z[1];
                }
                break;
            }
        case 'Opera': {
                if (this.versionSearchString === 'OPR') {
                    var td_p = /\WOPR[^\d]*([\.\d]+)/.exec(td_a);
                    if (td_p !== null && td_p.length >= 1) {
                        td_Z = td_p[1];
                    }
                    break;
                }
            }
        default: {
                var td_I = td_a.indexOf(this.versionSearchString);
                if (td_I !== -1) {
                    var arg_351 = td_I + this.versionSearchString.length + 1;
                    td_Z = td_a.substring(arg_351);
                }
                break;
            }
        }
        if (td_Z) {
            return parseFloat(td_Z);
        }
        return null;
    },
    td_E: function (td_b) {
        var td_X = null;
        try {
            td_X = new Worker(td_b);
        } catch (td_y) {
            if (td_X !== null && typeof td_X.terminate !== [][[]] + '') {
                td_X.terminate();
            }
            return td_y.toString().indexOf('is not a valid URL') !== -1;
        }
        return false;
    },
    td_T: function (isMobile, osNoUA) {
        var psc = this.td_E;
        try {
            var check = typeof window.opr !== [][[]] + '' && typeof td_g.addons !== [][[]] + '' || typeof window.opera !== [][[]] + '';
            if (check) {
                return 'Opera';
            }
            check = typeof InstallTrigger !== [][[]] + '';
            if (check) {
                return 'Firefox';
            }
            var var_55 = /constructor/i.test(window.HTMLElement) || function (p) {
                return p.toString() === '[object SafariRemoteNotification]';
            }(!window['safari'] || typeof safari !== [][[]] + '' && safari.pushNotification);
            check = var_55;
            check = typeof window.safari !== [][[]] + '';
            if (check) {
                return 'Safari';
            }
            var var_56 = false || typeof document.documentMode !== [][[]] + '';
            check = var_56;
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
            var var_57 = typeof window.chrome !== [][[]] + '' && typeof window.yandex == [][[]] + '' && (typeof window.chrome.webstore !== [][[]] + '' || typeof window.chrome.runtime !== [][[]] + '' || typeof window.chrome.loadTimes !== [][[]] + '');
            check = var_57;
            if (check) {
                return 'Chrome';
            }
            if (isMobile) {
                var var_59 = typeof window.chrome !== [][[]] + '' && typeof window.chrome.Benchmarking !== [][[]] + '';
                check = var_59;
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
            var var_58 = typeof window.chrome !== [][[]] + '' && typeof window.yandex !== [][[]] + '';
            check = var_58;
            if (check) {
                return 'Yandex';
            }
        } catch (err) {
        }
        return null;
    },
    td_k: function () {
        if (this.td_3r !== true || this.td_3j !== 'Mac') {
            return;
        }
        this.td_3j = 'iPhone/iPad';
        this.td_5f = this.td_3j;
        this.td_4D = this.td_5f;
    },
    td_h: {},
    td_t: {},
    td_K: {},
    td_M: {}
};
td_1Y = function () {
    var td_W = 'input is invalid type';
    var td_b = typeof window === 'object';
    var td_e = null;
    if (td_b) {
        td_e = window;
    } else {
        td_e = {};
    }
    if (td_e.JS_SHA256_NO_WINDOW) {
        td_b = false;
    }
    var td_N = !td_e.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== [][[]] + '';
    var td_n = '0123456789abcdef'.split('');
    var td_p = [
        -2147483648,
        8388608,
        32768,
        128
    ];
    var td_L = [
        24,
        16,
        8,
        0
    ];
    var td_u = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ];
    var td_y = [];
    if (td_e.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function (td_Q) {
            return Object.prototype.toString.call(td_Q) === '[object Array]';
        };
    }
    if (td_N && (td_e.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function (td_m) {
            return typeof td_m === 'object' && td_m.buffer && td_m.buffer.constructor === ArrayBuffer;
        };
    }
    instance = new td_D(false, false);
    this.update = function (td_o) {
        instance.update(td_o);
    };
    this.hash = function (td_I) {
        instance.update(td_I);
        return instance.toString();
    };
    this.toString = function () {
        return instance.toString();
    };
    function td_D() {
        this.blocks = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        this.h0 = 1779033703;
        this.h1 = 3144134277;
        this.h2 = 1013904242;
        this.h3 = 2773480762;
        this.h4 = 1359893119;
        this.h5 = 2600822924;
        this.h6 = 528734635;
        this.h7 = 1541459225;
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
    }
    td_D.prototype.update = function (td_o) {
        if (this.finalized) {
            return;
        }
        var td_w;
        var td_m = typeof td_o;
        if (td_m !== 'string') {
            if (td_m === 'object') {
                if (td_o === null) {
                    throw new Error(td_W);
                } else {
                    if (td_N && td_o.constructor === ArrayBuffer) {
                        td_o = new Uint8Array(td_o);
                    } else {
                        if (!Array.isArray(td_o)) {
                            if (!td_N || !ArrayBuffer.isView(td_o)) {
                                throw new Error(td_W);
                            }
                        }
                    }
                }
            } else {
                throw new Error(td_W);
            }
            td_w = true;
        }
        var td_Q;
        var td_l = 0;
        var td_F;
        var td_c = td_o.length;
        var td_Z = this.blocks;
        while (td_l < td_c) {
            if (this.hashed) {
                this.hashed = false;
                td_Z[0] = this.block;
                td_Z[16] = td_Z[1] = td_Z[2] = td_Z[3] = td_Z[4] = td_Z[5] = td_Z[6] = td_Z[7] = td_Z[8] = td_Z[9] = td_Z[10] = td_Z[11] = td_Z[12] = td_Z[13] = td_Z[14] = td_Z[15] = 0;
            }
            if (td_w) {
                td_F = this.start;
                for (; td_l < td_c && td_F < 64; ++td_l) {
                    td_Z[td_F >> 2] |= td_o[td_l] << td_L[td_F++ & 3];
                }
            } else {
                td_F = this.start;
                for (; td_l < td_c && td_F < 64; ++td_l) {
                    td_Q = td_o.charCodeAt(td_l);
                    if (td_Q < 128) {
                        td_Z[td_F >> 2] |= td_Q << td_L[td_F++ & 3];
                    } else {
                        if (td_Q < 2048) {
                            td_Z[td_F >> 2] |= (192 | td_Q >> 6) << td_L[td_F++ & 3];
                            td_Z[td_F >> 2] |= (128 | td_Q & 63) << td_L[td_F++ & 3];
                        } else {
                            if (td_Q < 55296 || td_Q >= 57344) {
                                td_Z[td_F >> 2] |= (224 | td_Q >> 12) << td_L[td_F++ & 3];
                                td_Z[td_F >> 2] |= (128 | td_Q >> 6 & 63) << td_L[td_F++ & 3];
                                td_Z[td_F >> 2] |= (128 | td_Q & 63) << td_L[td_F++ & 3];
                            } else {
                                td_Q = 65536 + ((td_Q & 1023) << 10 | td_o.charCodeAt(++td_l) & 1023);
                                td_Z[td_F >> 2] |= (240 | td_Q >> 18) << td_L[td_F++ & 3];
                                td_Z[td_F >> 2] |= (128 | td_Q >> 12 & 63) << td_L[td_F++ & 3];
                                td_Z[td_F >> 2] |= (128 | td_Q >> 6 & 63) << td_L[td_F++ & 3];
                                td_Z[td_F >> 2] |= (128 | td_Q & 63) << td_L[td_F++ & 3];
                            }
                        }
                    }
                }
            }
            this.lastByteIndex = td_F;
            this.bytes += td_F - this.start;
            if (td_F >= 64) {
                this.block = td_Z[16];
                this.start = td_F - 64;
                this.hash();
                this.hashed = true;
            } else {
                this.start = td_F;
            }
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };
    td_D.prototype.finalize = function () {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var td_l = this.blocks;
        var td_U = this.lastByteIndex;
        td_l[16] = this.block;
        td_l[td_U >> 2] |= td_p[td_U & 3];
        this.block = td_l[16];
        if (td_U >= 56) {
            if (!this.hashed) {
                this.hash();
            }
            td_l[0] = this.block;
            td_l[16] = td_l[1] = td_l[2] = td_l[3] = td_l[4] = td_l[5] = td_l[6] = td_l[7] = td_l[8] = td_l[9] = td_l[10] = td_l[11] = td_l[12] = td_l[13] = td_l[14] = td_l[15] = 0;
        }
        td_l[14] = this.hBytes << 3 | this.bytes >>> 29;
        td_l[15] = this.bytes << 3;
        this.hash();
    };
    td_D.prototype.hash = function () {
        var td_Nf = this.h0;
        var td_gu = this.h1;
        var td_NE = this.h2;
        var td_ov = this.h3;
        var td_Eh = this.h4;
        var td_c = this.h5;
        var td_Q = this.h6;
        var td_m = this.h7;
        var td_hx = this.blocks;
        var td_w;
        var td_o;
        var td_U;
        var td_l;
        var td_v;
        var td_F;
        var td_V;
        var td_O5;
        var td_lZ;
        var td_Z;
        var td_I;
        td_w = 16;
        for (; td_w < 64; ++td_w) {
            td_v = td_hx[td_w - 15];
            td_o = (td_v >>> 7 | td_v << 25) ^ (td_v >>> 18 | td_v << 14) ^ td_v >>> 3;
            td_v = td_hx[td_w - 2];
            td_U = (td_v >>> 17 | td_v << 15) ^ (td_v >>> 19 | td_v << 13) ^ td_v >>> 10;
            td_hx[td_w] = td_hx[td_w - 16] + td_o + td_hx[td_w - 7] + td_U << 0;
        }
        td_I = td_gu & td_NE;
        td_w = 0;
        for (; td_w < 64; td_w += 4) {
            if (this.first) {
                td_O5 = 704751109;
                td_v = td_hx[0] - 210244248;
                td_m = td_v - 1521486534 << 0;
                td_ov = td_v + 143694565 << 0;
                this.first = false;
            } else {
                td_o = (td_Nf >>> 2 | td_Nf << 30) ^ (td_Nf >>> 13 | td_Nf << 19) ^ (td_Nf >>> 22 | td_Nf << 10);
                td_U = (td_Eh >>> 6 | td_Eh << 26) ^ (td_Eh >>> 11 | td_Eh << 21) ^ (td_Eh >>> 25 | td_Eh << 7);
                td_O5 = td_Nf & td_gu;
                td_l = td_O5 ^ td_Nf & td_NE ^ td_I;
                td_V = td_Eh & td_c ^ ~td_Eh & td_Q;
                td_v = td_m + td_U + td_V + td_u[td_w] + td_hx[td_w];
                td_F = td_o + td_l;
                td_m = td_ov + td_v << 0;
                td_ov = td_v + td_F << 0;
            }
            td_o = (td_ov >>> 2 | td_ov << 30) ^ (td_ov >>> 13 | td_ov << 19) ^ (td_ov >>> 22 | td_ov << 10);
            td_U = (td_m >>> 6 | td_m << 26) ^ (td_m >>> 11 | td_m << 21) ^ (td_m >>> 25 | td_m << 7);
            td_lZ = td_ov & td_Nf;
            td_l = td_lZ ^ td_ov & td_gu ^ td_O5;
            td_V = td_m & td_Eh ^ ~td_m & td_c;
            td_v = td_Q + td_U + td_V + td_u[td_w + 1] + td_hx[td_w + 1];
            td_F = td_o + td_l;
            td_Q = td_NE + td_v << 0;
            td_NE = td_v + td_F << 0;
            td_o = (td_NE >>> 2 | td_NE << 30) ^ (td_NE >>> 13 | td_NE << 19) ^ (td_NE >>> 22 | td_NE << 10);
            td_U = (td_Q >>> 6 | td_Q << 26) ^ (td_Q >>> 11 | td_Q << 21) ^ (td_Q >>> 25 | td_Q << 7);
            td_Z = td_NE & td_ov;
            td_l = td_Z ^ td_NE & td_Nf ^ td_lZ;
            td_V = td_Q & td_m ^ ~td_Q & td_Eh;
            td_v = td_c + td_U + td_V + td_u[td_w + 2] + td_hx[td_w + 2];
            td_F = td_o + td_l;
            td_c = td_gu + td_v << 0;
            td_gu = td_v + td_F << 0;
            td_o = (td_gu >>> 2 | td_gu << 30) ^ (td_gu >>> 13 | td_gu << 19) ^ (td_gu >>> 22 | td_gu << 10);
            td_U = (td_c >>> 6 | td_c << 26) ^ (td_c >>> 11 | td_c << 21) ^ (td_c >>> 25 | td_c << 7);
            td_I = td_gu & td_NE;
            td_l = td_I ^ td_gu & td_ov ^ td_Z;
            td_V = td_c & td_Q ^ ~td_c & td_m;
            td_v = td_Eh + td_U + td_V + td_u[td_w + 3] + td_hx[td_w + 3];
            td_F = td_o + td_l;
            td_Eh = td_Nf + td_v << 0;
            td_Nf = td_v + td_F << 0;
        }
        this.h0 = this.h0 + td_Nf << 0;
        this.h1 = this.h1 + td_gu << 0;
        this.h2 = this.h2 + td_NE << 0;
        this.h3 = this.h3 + td_ov << 0;
        this.h4 = this.h4 + td_Eh << 0;
        this.h5 = this.h5 + td_c << 0;
        this.h6 = this.h6 + td_Q << 0;
        this.h7 = this.h7 + td_m << 0;
    };
    td_D.prototype.hex = function () {
        this.finalize();
        var td_V = this.h0;
        var td_Q = this.h1;
        var td_I = this.h2;
        var td_m = this.h3;
        var td_v = this.h4;
        var td_o = this.h5;
        var td_l = this.h6;
        var td_F = this.h7;
        var td_w = td_n[td_V >> 28 & 15] + td_n[td_V >> 24 & 15] + td_n[td_V >> 20 & 15] + td_n[td_V >> 16 & 15] + td_n[td_V >> 12 & 15] + td_n[td_V >> 8 & 15] + td_n[td_V >> 4 & 15] + td_n[td_V & 15] + td_n[td_Q >> 28 & 15] + td_n[td_Q >> 24 & 15] + td_n[td_Q >> 20 & 15] + td_n[td_Q >> 16 & 15] + td_n[td_Q >> 12 & 15] + td_n[td_Q >> 8 & 15] + td_n[td_Q >> 4 & 15] + td_n[td_Q & 15] + td_n[td_I >> 28 & 15] + td_n[td_I >> 24 & 15] + td_n[td_I >> 20 & 15] + td_n[td_I >> 16 & 15] + td_n[td_I >> 12 & 15] + td_n[td_I >> 8 & 15] + td_n[td_I >> 4 & 15] + td_n[td_I & 15] + td_n[td_m >> 28 & 15] + td_n[td_m >> 24 & 15] + td_n[td_m >> 20 & 15] + td_n[td_m >> 16 & 15] + td_n[td_m >> 12 & 15] + td_n[td_m >> 8 & 15] + td_n[td_m >> 4 & 15] + td_n[td_m & 15] + td_n[td_v >> 28 & 15] + td_n[td_v >> 24 & 15] + td_n[td_v >> 20 & 15] + td_n[td_v >> 16 & 15] + td_n[td_v >> 12 & 15] + td_n[td_v >> 8 & 15] + td_n[td_v >> 4 & 15] + td_n[td_v & 15] + td_n[td_o >> 28 & 15] + td_n[td_o >> 24 & 15] + td_n[td_o >> 20 & 15] + td_n[td_o >> 16 & 15] + td_n[td_o >> 12 & 15] + td_n[td_o >> 8 & 15] + td_n[td_o >> 4 & 15] + td_n[td_o & 15] + td_n[td_l >> 28 & 15] + td_n[td_l >> 24 & 15] + td_n[td_l >> 20 & 15] + td_n[td_l >> 16 & 15] + td_n[td_l >> 12 & 15] + td_n[td_l >> 8 & 15] + td_n[td_l >> 4 & 15] + td_n[td_l & 15];
        td_w += td_n[td_F >> 28 & 15] + td_n[td_F >> 24 & 15] + td_n[td_F >> 20 & 15] + td_n[td_F >> 16 & 15] + td_n[td_F >> 12 & 15] + td_n[td_F >> 8 & 15] + td_n[td_F >> 4 & 15] + td_n[td_F & 15];
        return td_w;
    };
    td_D.prototype.toString = td_D.prototype.hex;
};
var td_1x = td_1x || {};
var td_Gs = 255;
var td_qu = true;
var td_AA = true;
function td_EJ() {
    if (td_qu) {
        td_qu = false;
        throw new TypeError();
    }
}
function td_1D() {
    try {
        td_x(window, td_2b, td_EJ, td_AA);
        td_x(window, td_1T, td_EJ, td_AA);
        var arg_352 = td_0u.td_5f;
        td_1b = new td_Oe(arg_352);
        var arg_353 = td_0u.td_5h;
        td_5F = new td_Sa(arg_353);
        var arg_354 = td_0u.td_0Z;
        td_4H = new td_I4(arg_354);
        var td_ZE = '';
        try {
            td_ZE += td_nA();
        } catch (td_sr) {
        }
        try {
            td_ZE += td_GH();
        } catch (td_sr) {
        }
        var td_TA = null;
        if (navigator.userAgent) {
            var arg_355 = 'lq=' + encodeURIComponent(navigator.userAgent);
            td_TA = '&jb=' + td_1x.td_4b(arg_355, td_5d);
        } else {
            td_TA = '';
        }
        var td_EC = td_0v + '&ja=' + td_1x.td_4b(td_ZE, td_5d) + td_TA;
        if (typeof td_4q !== [][[]] + '') {
            var td_H5 = function () {
                var arg_356 = function () {
                    td_4q(td_5d);
                };
                setTimeout(arg_356, 2000);
            };
        }
        td_3X(td_EC, document, td_H5);
    } catch (td_sr) {
    } finally {
        td_qu = false;
        td_z(window, td_2b, td_EJ, td_AA);
        td_z(window, td_1T, td_EJ, td_AA);
    }
}
function td_gh(td_oT) {
    'use strict';
    try {
        if (typeof td_oT !== 'number' || td_oT <= 0) {
            td_oT = 1;
        } else {
            if (!td_0u.td_3r) {
                if (td_0u.td_5h === 'Chrome' || td_0u.td_5h === 'Opera') {
                    td_oT = Math.floor(td_oT);
                    if (td_oT <= 0) {
                        td_oT = 1;
                    }
                }
            }
        }
    } catch (td_S5) {
    }
    return td_oT;
}
function td_hh(td_cu, td_UK) {
    'use strict';
    var td_JW = td_cu * td_UK;
    try {
        if (td_UK % 1 === 0) {
            return td_JW;
        }
        td_JW = Math.round(td_JW);
        var td_ZI = td_JW - 2;;
        for (; td_ZI < td_JW + 2; td_ZI++) {
            if (td_ZI % 10 === 0) {
                return td_ZI;
            }
        }
    } catch (td_zk) {
    }
    return td_JW;
}
function td_I8() {
    try {
        var td_Uw = 1;
        if (window && window.devicePixelRatio) {
            td_Uw = window.devicePixelRatio;
        }
        td_Uw = td_gh(td_Uw);
        var td_CR = 0;
        var td_k5 = 0;
        var td_VY = 0;
        var td_Gl = 0;
        if (screen && screen.width && screen.height) {
            td_CR = screen.width;
            td_k5 = screen.height;
        } else {
            if (window && window.screen.width && window.screen.height) {
                td_CR = window.screen.width;
                td_k5 = window.screen.height;
            }
        }
        var td_Dq = '&f=' + td_hh(td_CR, td_Uw) + 'x' + td_hh(td_k5, td_Uw);
        if (window && window.screen && window.screen.availWidth && window.screen.availHeight) {
            td_VY = window.screen.availWidth * td_Uw;
            td_Gl = window.screen.availHeight * td_Uw;
        }
        if (td_VY !== 0 && td_Gl !== 0) {
            td_Dq += '&af=' + td_VY + 'x' + td_Gl;
        }
        if (typeof window !== [][[]] + '' && typeof window.screenX !== [][[]] + '' && typeof window.screenY !== [][[]] + '') {
            var td_OI = window.screenX * td_Uw;
            var td_x6 = window.screenY * td_Uw;
            td_Dq += '&sxy=' + td_OI + 'x' + td_x6;
        }
        var td_kh = td_1x.td_2q('t');
        td_Dq += '&dpr=' + td_kh.devicePixelRatio + ',' + screen.width + ',' + screen.height + ',' + screen.availWidth + ',' + screen.availHeight + ',' + td_kh.innerWidth + ',' + td_kh.innerHeight + ',' + td_kh.outerWidth + ',' + td_kh.outerHeight + ',' + td_kh.screenX + ',' + td_kh.screenY;
        return td_Dq;
    } catch (td_xD) {
    }
    return '';
}
function td_nA() {
    var td_Si = new Date();
    td_Si.setDate(1);
    td_Si.setMonth(5);
    var td_BP = -td_Si.getTimezoneOffset();
    td_Si.setMonth(11);
    var td_Px = -td_Si.getTimezoneOffset();
    var td_Y1 = Math.min(td_BP, td_Px);
    var td_UN = Math.max(td_BP, td_Px) - td_Y1;
    var td_qV = null;
    if (td_w3) {
        td_qV = td_w3.length;
    } else {
        td_qV = 0;
    }
    var td_tr = [];
    var td_zK = 0;;
    for (; td_zK < td_qV; td_zK++) {
        td_tr[td_zK] = td_w3[td_zK].type;
    }
    var td_x7 = null;
    if (td_qV > 0) {
        var arg_360 = td_tr.join();
        td_x7 = '&mt=' + td_0U(arg_360) + '&mn=' + td_qV;
    } else {
        td_x7 = '';
    }
    var td_LU = '';
    td_LU += '&c=' + td_Y1 + '&z=' + td_UN + td_I8() + td_x7;
    td_LU += '&scd=' + screen.colorDepth;
    var arg_357 = location.href.substring(0, td_Gs);
    td_LU += '&lh=' + encodeURIComponent(arg_357);
    var arg_358 = document.referrer.substring(0, td_Gs);
    var td_lA = encodeURIComponent(arg_358);
    if (typeof td_5E === 'string' && td_5E.length > 0 && window !== window.top && td_lA.length === 0) {
        td_lA = td_5E;
    }
    td_LU += '&dr=' + td_lA;
    var td_GU = navigator.plugins;
    if (td_GU.length) {
        var td_Tg = td_GU.length;
        td_LU += '&pl=' + td_Tg;
        var td_RY;
        td_zK = 0;
        for (; td_zK < td_Tg; td_zK++) {
            td_RY += td_GU[td_zK].name + td_GU[td_zK].description + td_GU[td_zK].filename + td_GU[td_zK].length;
        }
        td_LU += '&ph=' + td_0U(td_RY);
    }
    var arg_359 = td_3w + td_5d;
    td_LU += '&hh=' + td_0U(arg_359);
    if (td_0u.td_4D !== 'unknown') {
        td_LU += '&jso=' + encodeURIComponent(td_0u.td_4D);
    }
    if (td_0u.td_5h !== 'unknown') {
        if (td_0u.td_0Z !== 'unknown') {
            var arg_361 = td_0u.td_5h + ' ' + td_0u.td_0Z;
            td_LU += '&jsb=' + encodeURIComponent(arg_361);
        } else {
            td_LU += '&jsb=' + encodeURIComponent(td_0u.td_5h);
        }
    }
    if (td_0u.td_3j !== 'unknown') {
        td_LU += '&jsou=' + encodeURIComponent(td_0u.td_3j);
    }
    if (td_0u.td_4u !== 'unknown') {
        td_LU += '&jsbu=' + encodeURIComponent(td_0u.td_4u);
    }
    if (td_0u.td_3r === true) {
        td_LU += '&jsmu=true';
    }
    if (typeof navigator !== [][[]] + '') {
        if (typeof navigator.hardwareConcurrency === 'number') {
            td_LU += '&nhc=' + navigator.hardwareConcurrency;
        }
        if (typeof navigator.deviceMemory === 'number') {
            td_LU += '&ndm=' + navigator.deviceMemory;
        }
    }
    if (typeof Intl !== [][[]] + '' && typeof Intl.DateTimeFormat !== [][[]] + '') {
        var td_ow = Intl.DateTimeFormat();
        if (td_ow !== null && typeof td_ow !== [][[]] + '' && typeof td_ow.resolvedOptions !== [][[]] + '') {
            var td_uq = td_ow.resolvedOptions();
            if (td_uq !== null && typeof td_uq.timeZone === 'string' && td_uq.timeZone.length > 0) {
                td_LU += '&tzd=' + encodeURIComponent(td_uq.timeZone);
            }
        }
    }
    var td_T7 = td_4R();
    if (td_T7) {
        td_LU += '&mathr=' + encodeURIComponent(td_T7);
    }
    if (typeof td_4G === [][[]] + '' || !td_4G()) {
        td_1Q(td_0F, document);
    }
    return td_LU;
}
var td_nv = [];
var td_tl;
function td_GH() {
    var td_PC = '';
    if (typeof td_4Q !== [][[]] + '') {
        var td_d8 = td_4Q();
        if (td_d8 !== null) {
            td_PC += '&p=' + td_d8;
        }
    }
    if (typeof td_5g !== [][[]] + '') {
        var td_GS = td_5g();
        if (td_GS) {
            td_PC += '&ex3=' + td_GS;
        }
    }
    if (typeof td_3e !== [][[]] + '') {
        var td_qr = td_3e();
        if (td_qr) {
            td_PC += '&gl_c=' + encodeURIComponent(td_qr) + '&gl_h=' + td_2Y(td_qr);
        }
    }
    if (typeof td_2l !== [][[]] + '') {
        var td_HW = td_2l();
        if (td_HW) {
            td_PC += td_HW;
        }
    }
    if (typeof td_0g !== [][[]] + '') {
        td_0g();
    }
    if (typeof td_3t !== [][[]] + '') {
        td_3t();
    }
    if (typeof td_3v !== [][[]] + '') {
        td_3v();
    }
    if (typeof td_5Y !== [][[]] + '') {
        td_5Y();
    }
    if (typeof td_3U !== [][[]] + '') {
        td_3U();
    }
    if (typeof td_2D !== [][[]] + '') {
        td_2D();
    }
    if (typeof td_5W !== [][[]] + '') {
        td_5W();
    }
    if (typeof td_4o !== [][[]] + '') {
        if (typeof td_4s !== [][[]] + '') {
            var arg_362 = new td_4s();
            td_4o.addFeature(arg_362);
        }
        if (typeof td_3I !== [][[]] + '') {
            var arg_363 = new td_3I();
            td_4o.addFeature(arg_363);
        }
        if (typeof td_5y !== [][[]] + '') {
            var arg_364 = new td_5y();
            td_4o.addFeature(arg_364);
        }
        if (typeof td_4N !== [][[]] + '') {
            var arg_365 = new td_4N();
            td_4o.addFeature(arg_365);
        }
    }
    if (typeof td_3f !== [][[]] + '') {
        if (typeof td_4y !== [][[]] + '') {
            var arg_366 = new td_4y();
            td_3f.addFeature(arg_366);
        }
        if (typeof td_2W !== [][[]] + '') {
            var arg_367 = new td_2W();
            td_3f.addFeature(arg_367);
        }
        if (typeof td_1l !== [][[]] + '') {
            var arg_368 = new td_1l();
            td_3f.addFeature(arg_368);
        }
    }
    if (typeof td_3h !== [][[]] + '') {
        td_3h();
    }
    if (typeof td_5A !== [][[]] + '') {
        td_nv[new td_5A(td_0M, td_2z, td_1n)];
    }
    if (typeof td_1V !== [][[]] + '') {
        td_nv[new td_1V()];
    }
    if (typeof td_1k !== [][[]] + '') {
        td_nv[new td_1k(td_3A, td_0m, td_2s)];
    }
    if (typeof td_1K !== [][[]] + '') {
        td_nv[new td_1K(td_5C, td_0N, td_2P)];
    }
    if (typeof td_3z !== [][[]] + '') {
        td_nv[new td_3z(td_4K, td_0s, td_3K)];
    }
    if (typeof td_4p !== [][[]] + '' && typeof Object.create !== [][[]] + '' && typeof String.prototype.toUpperCase !== [][[]] + '') {
        td_nv[new td_4p(td_4A, td_0b, td_0y)];
    }
    if (typeof td_0x !== [][[]] + '') {
        td_nv[new td_0x(td_4X, td_2a, td_4i)];
    }
    if (typeof td_4f !== [][[]] + '') {
        td_4f();
    }
    if (typeof td_5Q !== [][[]] + '') {
        td_nv[new td_5Q()];
    }
    if (typeof td_2n !== [][[]] + '') {
        var td_BS = td_2n();
        if (td_BS !== null) {
            td_PC += td_BS;
        }
    }
    if (typeof td_2E !== [][[]] + '') {
        td_2E();
    }
    if (typeof td_5u !== [][[]] + '' && td_5u.length > 0 && typeof td_1N !== [][[]] + '') {
        var arg_369 = td_0u.td_5f;
        var arg_370 = td_0u.td_5h;
        td_tl = new td_1N(arg_369, arg_370, td_5u);
        if (td_tl.isValid()) {
            td_tl.scan();
        }
    }
    td_1x.load_iframe(td_4t, td_0o, document);
    if (typeof td_1m !== [][[]] + '') {
        td_1m();
    }
    if (typeof td_1x.td_1J !== [][[]] + '') {
        td_1x.td_1J();
    }
    if (typeof td_2H !== [][[]] + '') {
        var td_sK = td_2H();
        if (td_sK) {
            td_PC += '&ccd=' + td_sK;
        }
    }
    return td_PC;
}
var td_1x = td_1x || {};
if (typeof td_1x.td_0l === [][[]] + '') {
    td_1x.td_0l = [];
}
td_1x.td_3C = function () {
    var td_u = 0;;
    for (; td_u < td_1x.td_0l.length; ++td_u) {
        td_1x.td_0l[td_u]();
    }
};
td_1x.td_4b = function (td_o, td_F) {
    try {
        var td_j = td_o.length + '&' + td_o;
        var td_r = '';
        var td_L = '0123456789abcdef';
        var td_i = 0, td_x = 0;;
        for (; td_i < td_j.length; td_i++) {
            var td_D = td_j.charCodeAt(td_i) ^ td_F.charCodeAt(td_x) & 10;
            if (++td_x === td_F.length) {
                td_x = 0;
            }
            var arg_371 = td_D >> 4 & 15;
            td_r += td_L.charAt(arg_371);
            var arg_372 = td_D & 15;
            td_r += td_L.charAt(arg_372);
        }
        return td_r;
    } catch (td_w) {
        return null;
    }
};
td_1x.td_2k = function () {
    try {
        var td_z = window.top.document;
        var td_n = td_z.forms.length;
        return td_z;
    } catch (td_Z) {
        return document;
    }
};
td_1x.td_2q = function (td_u) {
    try {
        var td_W;
        if (typeof td_u === [][[]] + '') {
            td_W = window;
        } else {
            if (td_u === 't') {
                td_W = window.top;
            } else {
                if (td_u === 'p') {
                    td_W = window.parent;
                } else {
                    td_W = window;
                }
            }
        }
        var td_r = td_W.document.forms.length;
        return td_W;
    } catch (td_Z) {
        return window;
    }
};
td_1x.add_lang_attr_html_tag = function (td_z) {
    try {
        if (td_z === null) {
            return;
        }
        var td_l = td_z.getElementsByTagName('html');
        if (typeof td_l !== [][[]] + '' && td_l !== null && typeof td_l.length !== [][[]] + '' && td_l.length !== null && td_l.length > 0 && typeof td_l[0] !== [][[]] + '' && typeof td_l[0] !== null && typeof td_l[0].setAttribute !== [][[]] + '' && td_l[0].setAttribute !== null && typeof td_l[0].getAttribute !== [][[]] + '' && td_l[0].getAttribute !== null && (td_l[0].getAttribute('lang') === null || td_l[0].getAttribute('lang') === '')) {
            td_l[0].setAttribute('lang', 'en');
        } else {
        }
    } catch (td_f) {
    }
};
td_1x.load_iframe = function (td_b, td_n, td_x) {
    var td_R = td_0H(5);
    if (typeof td_1G !== [][[]] + '') {
        td_1G(td_R, 'IFRAME');
    }
    var td_o = td_x.createElement('iframe');
    td_o.id = td_R;
    td_o.title = 'empty';
    td_o.setAttribute('aria-disabled', 'true');
    td_o.setAttribute('aria-hidden', 'true');
    td_o.width = '0';
    td_o.height = '0';
    if (typeof td_o.tabIndex !== [][[]] + '') {
        td_o.tabIndex = '-1';
    }
    if (td_0o !== null) {
        td_o.setAttribute('sandbox', td_n);
    }
    td_o.setAttribute('style', 'color:rgba(0,0,0,0); float:left; position:absolute; top:-200; left:-200; border:0px');
    td_o.setAttribute('src', td_b);
    td_x.body.appendChild(td_o);
};
td_1x.csp_nonce = null;
td_1x.td_2A = function (td_m) {
    if (typeof td_m.currentScript !== [][[]] + '' && td_m.currentScript !== null) {
        var td_r = td_m.currentScript.getAttribute('nonce');
        if (typeof td_r !== [][[]] + '' && td_r !== null && td_r !== '') {
            td_1x.csp_nonce = td_r;
        } else {
            if (typeof td_m.currentScript.nonce !== [][[]] + '' && td_m.currentScript.nonce !== null && td_m.currentScript.nonce !== '') {
                td_1x.csp_nonce = td_m.currentScript.nonce;
            }
        }
    }
};
td_1x.td_1P = function (td_L) {
    if (td_1x.csp_nonce !== null) {
        td_L.setAttribute('nonce', td_1x.csp_nonce);
        if (td_L.getAttribute('nonce') !== td_1x.csp_nonce) {
            td_L.nonce = td_1x.csp_nonce;
        }
    }
};
td_1x.td_0e = function () {
    try {
        return new ActiveXObject(activeXMode);
    } catch (td_V) {
        return null;
    }
};
td_1x.td_2X = function () {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject) {
        var td_w = [
            'MSXML2.XMLHTTP.3.0',
            'Msxml2.XMLHTTP',
            'Microsoft.XMLHTTP'
        ];
        var td_c = 0;;
        for (; td_c < td_w.length; td_c++) {
            var td_C = td_1x.td_0e(td_w[td_c]);
            if (td_C !== null) {
                return td_C;
            }
        }
    }
    return null;
};
var td_1x = td_1x || {};
function td_2H() {
    var td_sA = 20;
    var td_uw = 10;
    var td_bt = 10;
    var td_oq = 0;
    var td_UJ = null;
    var td_Xc = function () {
        return window.performance.now() * 1000;
    };
    var td_nl = function () {
        return performance.now().toFixed(3) / 1000;
    };
    var td_Be = function () {
        return (td_O() - td_oq).toFixed(3) * 1000;
    };
    function td_Jy() {
        var td_dz = 1;
        var td_Il = td_UJ();
        var td_mD = td_UJ();
        while (td_mD === td_Il) {
            td_mD = td_UJ();
            ++td_dz;
        }
        var td_Oi = (td_mD - td_Il) * 1000000;
        var td_Ky = td_dz / td_Oi;
        if (td_Ky < 1e-8) {
            return 1e-8;
        }
        return td_Ky;
    }
    function td_bB() {
        var td_Hi = 0;
        var td_lo = 0;
        try {
            var td_wI = td_Jy();
            td_Hi = td_UJ();
            td_lo = td_UJ() - td_Hi;
            if (td_lo === 0 || td_lo < 1e-8) {
                td_lo = td_wI;
            }
            var td_Hs = 0;;
            for (; td_Hs < td_sA; ++td_Hs) {
                var arg_373 = td_UJ() - td_Hi;
                td_lo = td_hx(td_lo, arg_373);
            }
            return Math.round(1 / td_lo);
        } catch (td_fO) {
            return -1;
        }
    }
    function td_hx(td_MR, td_rO) {
        try {
            if (td_MR < 1e-8) {
                return td_rO;
            }
            if (td_MR < td_rO) {
                return td_hx(td_rO - Math.floor(td_rO / td_MR) * td_MR, td_MR);
            } else {
                if (td_MR === td_rO) {
                    return td_MR;
                } else {
                    return td_hx(td_rO, td_MR);
                }
            }
        } catch (td_Ds) {
            return 0;
        }
    }
    if (td_0u.td_5h !== 'Firefox' && td_0u.td_5h !== 'Safari' && typeof performance !== [][[]] + '' && typeof performance.now !== [][[]] + '') {
        td_UJ = td_nl;
    } else {
        if (td_0u.td_5h !== 'Safari' && typeof window.performance !== [][[]] + '' && typeof window.performance.now !== [][[]] + '') {
            td_UJ = td_Xc;
        } else {
            td_oq = td_O();
            td_UJ = td_Be;
        }
    }
    if (!td_UJ || !Math || !Math.round || !Math.floor || !Math.sqrt || !Math.pow) {
        return null;
    }
    function td_Fi() {
        var td_f6 = [];
        var td_Fh = 0;;
        for (; td_Fh < td_uw; ++td_Fh) {
            var arg_374 = td_bB();
            td_f6.push(arg_374);
        }
        var td_k9 = td_1x.mean(td_f6);
        var td_Tj = td_1x.std_dev(td_f6, td_k9);
        var td_sn = 0;
        var td_bF = 0;
        if (td_Tj !== 0) {
            var td_Bt = td_1x.confidence_interval(td_f6, td_Tj, td_k9, 1);
            td_bF = td_1x.mean(td_Bt);
            td_sn = Math.round(td_bF);
        } else {
            td_sn = Math.round(td_k9);
        }
        return td_sn;
    }
    var td_r9 = 0;
    var td_GB = 0;
    while (td_r9 === 0 && td_GB++ < td_bt) {
        td_r9 = td_Fi();
    }
    return encodeURIComponent(td_r9);
}
var td_1x = td_1x || {};
function td_3t() {
    td_1x.load_iframe(td_5m, td_0o, document);
}
var td_3a = {};
td_3a.td_5n = function (td_C, td_n) {
    if (typeof td_n === [][[]] + '') {
        td_n = true;
    } else {
        td_n = td_n;
    }
    if (td_n) {
        td_C = td_5D.td_4e(td_C);
    }
    var td_f = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
    ];
    td_C += String.fromCharCode(128);
    var td_W = td_C.length / 4 + 2;
    var arg_375 = td_W / 16;
    var td_A = Math.ceil(arg_375);
    var td_I = new Array(td_A);
    var td_m = 0;;
    for (; td_m < td_A; td_m++) {
        td_I[td_m] = new Array(16);
        var td_Z = 0;;
        for (; td_Z < 16; td_Z++) {
            var arg_376 = td_m * 64 + td_Z * 4;
            var arg_377 = td_m * 64 + td_Z * 4 + 1;
            var arg_378 = td_m * 64 + td_Z * 4 + 2;
            var arg_379 = td_m * 64 + td_Z * 4 + 3;
            td_I[td_m][td_Z] = td_C.charCodeAt(arg_376) << 24 | td_C.charCodeAt(arg_377) << 16 | td_C.charCodeAt(arg_378) << 8 | td_C.charCodeAt(arg_379);
        }
    }
    td_I[td_A - 1][14] = (td_C.length - 1) * 8 / Math.pow(2, 32);
    td_I[td_A - 1][14] = Math.floor(td_I[td_A - 1][14]);
    td_I[td_A - 1][15] = (td_C.length - 1) * 8 & 4294967295;
    var td_N = 1732584193;
    var td_y = 4023233417;
    var td_L = 2562383102;
    var td_J = 271733878;
    var td_r = 3285377520;
    var td_x = new Array(80);
    var td_X;
    var td_R;
    var td_V;
    var td_j;
    var td_u;
    var td_m = 0;;
    for (; td_m < td_A; td_m++) {
        var td_v = 0;;
        for (; td_v < 16; td_v++) {
            td_x[td_v] = td_I[td_m][td_v];
        }
        var td_v = 16;;
        for (; td_v < 80; td_v++) {
            var arg_380 = td_x[td_v - 3] ^ td_x[td_v - 8] ^ td_x[td_v - 14] ^ td_x[td_v - 16];
            td_x[td_v] = td_3a.td_4Y(arg_380, 1);
        }
        td_X = td_N;
        td_R = td_y;
        td_V = td_L;
        td_j = td_J;
        td_u = td_r;
        var td_v = 0;;
        for (; td_v < 80; td_v++) {
            var arg_381 = td_v / 20;
            var td_d = Math.floor(arg_381);
            var td_c = td_3a.td_4Y(td_X, 5) + td_3a.f(td_d, td_R, td_V, td_j) + td_u + td_f[td_d] + td_x[td_v] & 4294967295;
            td_u = td_j;
            td_j = td_V;
            td_V = td_3a.td_4Y(td_R, 30);
            td_R = td_X;
            td_X = td_c;
        }
        td_N = td_N + td_X & 4294967295;
        td_y = td_y + td_R & 4294967295;
        td_L = td_L + td_V & 4294967295;
        td_J = td_J + td_j & 4294967295;
        td_r = td_r + td_u & 4294967295;
    }
    return td_3a.td_2w(td_N) + td_3a.td_2w(td_y) + td_3a.td_2w(td_L) + td_3a.td_2w(td_J) + td_3a.td_2w(td_r);
};
td_3a.f = function (td_s, td_e, td_Z, td_p) {
    switch (td_s) {
    case 0: {
            return td_e & td_Z ^ ~td_e & td_p;
        }
    case 1: {
            return td_e ^ td_Z ^ td_p;
        }
    case 2: {
            return td_e & td_Z ^ td_e & td_p ^ td_Z & td_p;
        }
    case 3: {
            return td_e ^ td_Z ^ td_p;
        }
    }
};
td_3a.td_4Y = function (td_Y, td_p) {
    return td_Y << td_p | td_Y >>> 32 - td_p;
};
td_3a.td_2w = function (td_i) {
    var td_F = '';
    var td_o;
    var td_W = 7;;
    for (; td_W >= 0; td_W--) {
        td_o = td_i >>> td_W * 4 & 15;
        td_F += td_o.toString(16);
    }
    return td_F;
};
var td_5D = {};
td_5D.td_4e = function (td_U) {
    var arg_382 = function (td_p) {
        var td_X = td_p.charCodeAt(0);
        return String.fromCharCode(192 | td_X >> 6, 128 | td_X & 63);
    };
    var td_i = td_U.replace(/[\u0080-\u07ff]/g, arg_382);
    var arg_383 = function (td_o) {
        var td_F = td_o.charCodeAt(0);
        return String.fromCharCode(224 | td_F >> 12, 128 | td_F >> 6 & 63, 128 | td_F & 63);
    };
    td_i = td_i.replace(/[\u0800-\uffff]/g, arg_383);
    return td_i;
};
function td_2Y(td_a) {
    return td_3a.td_5n(td_a, true);
}
var td_1x = td_1x || {};
function td_wp() {
    'use strict';
    var td_bY = [
        [
            'Explorer',
            0,
            'IE doesn\'t work'
        ],
        [
            'UCBrowser',
            0,
            'UCBrowser cache accept headers'
        ],
        [
            'Safari',
            9,
            'Safari 9- cache accept headers'
        ]
    ];
    try {
        var td_vt = 0;;
        for (; td_vt < td_bY.length; td_vt++) {
            var td_k3 = td_bY[td_vt][0];
            var td_f5 = td_bY[td_vt][1];
            if (td_0u.td_5h !== td_k3) {
                continue;
            }
            if (td_f5 === 0) {
                return false;
            }
            var td_o3 = parseInt(td_0u.td_0Z);
            if (td_o3 && td_f5 < td_o3) {
                return true;
            }
            return false;
        }
    } catch (td_ss) {
        return false;
    }
    return true;
}
function td_4G() {
    'use strict';
    var td_oE = td_1x.td_2X();
    if (!td_wp() || !td_oE) {
        return false;
    }
    try {
        var td_XS = td_3w + '/' + td_3M + td_5d;
        td_XS = td_XS.replace(/[\r\n]/g, '');
        td_oE.open('GET', td_0F, true);
        var arg_384 = '*/*, ' + td_XS;
        td_oE.setRequestHeader('Accept', arg_384);
        td_oE.send(null);
        return true;
    } catch (td_Qh) {
        return false;
    }
    return false;
}
var td_1x = td_1x || {};
function td_kD() {
    if (!!window.WebGLRenderingContext) {
        var td_sX = document.createElement('canvas');
        var td_PF = [
            'webgl',
            'experimental-webgl',
            'moz-webgl',
            'webkit-3d'
        ];
        var td_Ac = 0;;
        for (; td_Ac < 4; td_Ac++) {
            try {
                var td_DA = td_sX.getContext(td_PF[td_Ac]);
                if (td_DA && typeof td_DA.getParameter === 'function') {
                    return {
                        name: td_PF[td_Ac],
                        gl: td_DA
                    };
                }
            } catch (td_ao) {
            }
        }
        return -1;
    }
    return 0;
}
var td_1x = td_1x || {};
function td_4N() {
    'use strict';
    var td_Zm;
    var td_eb = true;
    this.tryAgain = function () {
        return td_Zm ? false : td_eb;
    };
    this.getFPParams = function () {
        if (td_Zm) {
            return '&audh=' + td_Zm;
        }
        return null;
    };
    this.setup = function () {
        try {
            var td_HD;
            td_HD = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);
            if (!td_HD) {
                return null;
            }
            var td_ic = td_HD.createOscillator();
            td_ic.type = 'triangle';
            td_ic.frequency.value = 10000;
            var td_aK = td_HD.createDynamicsCompressor();
            if (td_aK.threshold) {
                td_aK.threshold.value = -50;
            }
            if (td_aK.knee) {
                td_aK.knee.value = 40;
            }
            if (td_aK.ratio) {
                td_aK.ratio.value = 12;
            }
            if (td_aK.reduction) {
                td_aK.reduction.value = -20;
            }
            if (td_aK.attack) {
                td_aK.attack.value = 0;
            }
            if (td_aK.release) {
                td_aK.release.value = 0.25;
            }
            td_ic.connect(td_aK);
            td_aK.connect(td_HD.destination);
            td_ic.start(0);
            td_HD.startRendering();
            td_HD.oncomplete = function (td_o7) {
                if (typeof td_o7.renderedBuffer === [][[]] + '') {
                    return;
                }
                var td_nn = new td_1Y();
                var td_hS = 0;;
                for (; td_hS < td_o7.renderedBuffer.length; td_hS++) {
                    var arg_385 = td_o7.renderedBuffer.getChannelData(0)[td_hS].toString();
                    td_nn.update(arg_385);
                }
                td_aK.disconnect();
                td_Zm = td_nn.toString();
            };
        } catch (td_qb) {
            td_eb = false;
        }
    };
}
var td_1x = td_1x || {};
function td_5g() {
    try {
        var td_wM = document.createElement('canvas');
        if (!td_wM) {
            return null;
        }
        if (!td_wM.getContext) {
            return null;
        }
        var td_hC = td_wM.getContext('2d');
        if (!td_hC) {
            return null;
        }
        if (!td_hC.font || !td_hC.fillText) {
            return null;
        }
        td_wM.width = 300;
        td_wM.height = 100;
        td_hC = td_wM.getContext('2d');
        var td_aM = '@Browsers~%fingGPRint$&,<canvas>';
        td_hC.font = '8px Arial';
        td_hC.fillText(td_aM, 0, 50);
        td_hC.font = '12px Arial';
        var td_q7 = td_hC.createLinearGradient(0, 0, td_wM.width, 0);
        td_q7.addColorStop('0', 'magenta');
        td_q7.addColorStop('0.5', 'blue');
        td_q7.addColorStop('1.0', 'red');
        td_hC.fillStyle = td_q7;
        td_hC.fillText(td_aM, 0, 90);
        var td_wU = td_wM.toDataURL('image/png');
        if (!td_wU) {
            return null;
        }
        return td_2Y(td_wU);
    } catch (td_RX) {
        return null;
    }
}
function td_RO(td_bZ) {
    var td_lp = null;
    if (td_bZ.constructor == String) {
        td_lp = [td_bZ];
    } else {
        td_lp = td_bZ;
    }
    var td_d2 = 'false';
    var td_Uz = 'false';
    var td_ud;
    td_ud = 0;
    for (; td_ud < td_lp.length; td_ud++) {
        var td_Zr = td_w3[td_lp[td_ud]];
        if (td_Zr && td_Zr.enabledPlugin) {
            var td_UB = td_Zr.enabledPlugin;
            if (td_UB.name) {
                td_d2 = td_UB.name;
            } else {
                td_d2 = 'true';
            }
            td_Uz = td_UB.description;
            break;
        }
    }
    return [
        td_d2,
        td_Uz
    ];
}
function td_Ow() {
    var td_MK = 'false';
    var arg_386 = [
        'application/x-shockwave-flash',
        'application/futuresplash'
    ];
    var td_hs = td_RO(arg_386);
    var td_FZ = td_hs[0];
    var td_ns = td_hs[1];
    if (td_FZ !== 'false' && td_FZ !== 'true' && /Flash/i.test(td_FZ)) {
        td_MK = 'true';
    }
    if (td_MK === 'true' && td_ns) {
        var td_H7 = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_ns);
        if (td_H7) {
            td_MK = td_H7[0];
        }
    }
    return td_MK;
}
function td_iy() {
    var td_T0 = 'false';
    var arg_387 = [
        'application/x-mplayer2',
        'application/asx'
    ];
    var td_hb = td_RO(arg_387);
    var td_RE = td_hb[0];
    if (td_RE !== 'false' && td_RE !== 'true' && /Windows.*Media.*Firefox Plugin.*/i.test(td_RE)) {
        td_T0 = 'true';
    }
    return td_T0;
}
function td_bq() {
    var td_W3 = 'false';
    var arg_388 = ['application/pdf'];
    var td_fP = td_RO(arg_388);
    var td_Ko = td_fP[0];
    var td_cL = td_fP[1];
    if (td_Ko !== 'false' && td_Ko !== 'true' && /Adobe Acrobat/i.test(td_Ko)) {
        td_W3 = 'true';
    }
    if (td_W3 === 'true' && td_cL) {
        var td_jQ = /[\d][\d\.\_,-]*/.exec(td_cL);
        if (td_jQ) {
            td_W3 = td_jQ[0];
        } else {
            td_W3 = '8.0/later';
        }
    }
    return td_W3;
}
function td_vL() {
    var td_No = 'false';
    if (navigator.platform && /linux/i.test(navigator.platform)) {
        td_No = 'false';
    } else {
        var arg_389 = [
            'video/quicktime',
            'application/x-quicktimeplayer',
            'image/x-macpaint',
            'image/x-quicktime'
        ];
        var td_we = td_RO(arg_389);
        var td_H8 = td_we[0];
        if (td_H8 !== 'false' && td_H8 !== 'true' && /QuickTime.*(Plug-in|Plugin).*/i.test(td_H8)) {
            td_No = 'true';
            var td_pk = /[\d][\d\.\_,-]*/.exec(td_H8);
            if (td_pk) {
                td_No = td_pk[0];
            }
        }
    }
    return td_No;
}
function td_PW() {
    var td_pM = 'false';
    var arg_390 = ['application/x-director'];
    var td_dE = td_RO(arg_390);
    var td_Q0 = td_dE[0];
    var td_e9 = td_dE[1];
    if (td_Q0 !== 'false' && td_Q0 !== 'true' && /Shockwave for Director/i.test(td_Q0)) {
        td_pM = 'true';
    }
    if (td_pM === 'true' && td_e9) {
        var td_iQ = /[\d][\d\.\_,-]*/.exec(td_e9);
        if (td_iQ) {
            td_pM = td_iQ[0];
        }
    }
    return td_pM;
}
function td_yD() {
    var td_Nx = 'false';
    var arg_391 = ['application/vnd.rn-realplayer-javascript'];
    var td_MU = td_RO(arg_391);
    var td_gb = td_MU[0];
    var td_sL = td_MU[1];
    if (td_gb !== 'false' && td_gb !== 'true' && /RealPlayer.*Version.*/i.test(td_gb)) {
        td_Nx = 'true';
    }
    if (td_Nx === 'true' && td_sL) {
        var td_Vk = /[\d][\d\.\_,-]*/.exec(td_sL);
        if (td_Vk) {
            td_Nx = td_Vk[0];
        } else {
            td_Nx = '5.0';
        }
    }
    return td_Nx;
}
function td_AM() {
    var td_ih = 'false';
    var arg_392 = ['application/x-vlc-plugin'];
    var td_cb = td_RO(arg_392);
    var td_rT = td_cb[0];
    var td_er = td_cb[1];
    if (td_rT !== 'false' && td_rT !== 'true' && /VLC.*(Plug-in|Plugin).*/i.test(td_rT)) {
        td_ih = 'true';
    }
    if (td_ih === 'true' && td_er) {
        var td_xf = /(Version) ([\d][\d\.]*[a-z]*)/.exec(td_er);
        if (td_xf) {
            td_ih = td_xf[2];
        }
    }
    return td_ih;
}
function td_uz() {
    var td_ku = 'false';
    var arg_393 = ['application/x-devalvrx'];
    var td_PX = td_RO(arg_393);
    var td_UG = td_PX[0];
    var td_Bj = td_PX[1];
    if (td_UG !== 'false' && td_UG !== 'true' && /DevalVR/i.test(td_UG)) {
        td_ku = 'true';
    }
    if (td_ku === 'true' && td_Bj) {
        var td_lt = /(Plugin) ([\d][\d\.\,]*)/.exec(td_Bj);
        if (td_lt) {
            td_ku = td_lt[2];
        }
    }
    return td_ku;
}
function td_F5() {
    var td_Yr = 'false';
    var arg_394 = [
        'image/svg-xml',
        'image/svg+xml'
    ];
    var td_RH = td_RO(arg_394);
    var td_fQ = td_RH[0];
    var td_wH = td_RH[1];
    if (td_fQ !== 'false' && td_fQ !== 'true' && /SVG Viewer/i.test(td_fQ)) {
        td_Yr = 'true';
    }
    if (td_Yr === 'true' && td_wH) {
        var td_g6 = /[\d][\d\.]*/.exec(td_wH);
        if (td_g6) {
            td_Yr = td_g6[0];
        }
    }
    return td_Yr;
}
function td_vy() {
    var td_SU = 'false';
    var arg_395 = [
        'application/x-java-applet',
        'application/x-java-vm',
        'application/x-java-bean'
    ];
    var td_wl = td_RO(arg_395);
    var td_Rk = td_wl[0];
    var td_ia = td_wl[1];
    if (td_Rk !== 'false' && td_Rk !== 'true' && /Java/i.test(td_Rk)) {
        td_SU = 'true';
    }
    if (td_SU === 'true' && td_ia) {
        var td_yn = /[\d][\d\._]*/.exec(td_ia);
        if (td_yn) {
            td_SU = td_yn[0];
        }
    }
    return td_SU;
}
function td_ex(td_Rx, td_JU) {
    var td_mQ = null;
    var td_Nh = false;
    try {
        td_mQ = new ActiveXObject(td_Rx);
        td_Nh = true;
    } catch (td_oL) {
    }
    if (typeof td_JU !== [][[]] + '') {
        return td_Nh;
    }
    return td_mQ;
}
function td_ux() {
    var td_Ly = 'ShockwaveFlash.ShockwaveFlash';
    var td_VW;
    var td_G6 = null;
    var td_Zp = null;
    var td_LH = null;
    var td_IT = 15;
    var td_Hj = 2;
    td_VW = td_IT;
    for (; td_VW > td_Hj; td_VW--) {
        var arg_396 = td_Ly + '.' + td_VW;
        td_Zp = td_ex(arg_396);
        if (td_Zp) {
            td_G6 = td_VW.toString();
            break;
        }
    }
    if (td_G6 === '6') {
        try {
            td_Zp.AllowScriptAccess = 'always';
        } catch (td_Zm) {
            td_LH = '6,0,21,0';
        }
    } else {
        if (td_Zp) {
            try {
                td_LH = td_Zp.GetVariable('$version');
                var td_sD = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_LH);
                if (td_sD) {
                    td_LH = td_sD[0];
                } else {
                    td_LH = 'true';
                }
            } catch (td_Zm) {
                td_LH = 'true';
            }
        }
    }
    if (!td_LH && td_G6) {
        td_LH = td_G6;
    }
    if (!td_LH) {
        td_LH = 'false';
    }
    return td_LH;
}
function td_vn() {
    var td_de = 'wmplayer.ocx';
    var td_W1 = 'false';
    var td_oZ = td_ex(td_de);
    if (td_oZ) {
        td_W1 = td_oZ.versionInfo;
    }
    return td_W1;
}
function td_md() {
    var td_tY = 'PDF.pdfCtrl';
    var td_C4 = 'AcroPDF.PDF.1';
    var td_rD;
    var td_st = 'false';
    var td_lf = td_ex(td_C4);
    if (!td_lf) {
        var td_ZM = 10;
        var td_mr = 1;
        td_rD = td_ZM;
        for (; td_rD > td_mr; td_rD--) {
            var arg_397 = td_tY + '.' + td_rD;
            td_lf = td_ex(arg_397);
            if (td_lf) {
                td_st = td_st.toString();
                break;
            }
        }
        if (!td_lf) {
            var arg_398 = td_tY + '.1';
            td_lf = td_ex(arg_398);
            if (td_lf) {
                td_st = '4.0';
            }
        }
    } else {
        td_st = '7.0/later';
    }
    return td_st;
}
function td_Uc() {
    var td_VU = 'QuickTime.QuickTime';
    var td_Wm = 'false';
    var td_Xc = null;
    try {
        td_Xc = td_ex(td_VU);
    } catch (td_iK) {
    }
    if (td_Xc) {
        if (td_Xc.QuickTimeVersion) {
            td_Wm = td_Xc.QuickTimeVersion.toString(16);
            td_Wm = td_Wm.charAt(0) + '.' + td_Wm.charAt(1) + '.' + td_Wm.charAt(2);
        } else {
            td_Wm = 'true';
        }
    }
    return td_Wm;
}
function td_sS() {
    var td_KX = 'SWCtl.SWCtl';
    var td_dz = 'false';
    var td_Tb = null;
    var td_av;
    try {
        td_Tb = td_ex(td_KX).ShockwaveVersion('');
    } catch (td_av) {
    }
    if (typeof td_Tb === 'string' && td_Tb.length > 0) {
        td_dz = td_Tb;
    } else {
        var arg_399 = td_KX + '.8';
        if (td_ex(arg_399, 1)) {
            td_dz = '8';
        } else {
            var arg_400 = td_KX + '.7';
            if (td_ex(arg_400, 1)) {
                td_dz = '7';
            } else {
                var arg_401 = td_KX + '.1';
                if (td_ex(arg_401, 1)) {
                    td_dz = '6';
                }
            }
        }
    }
    return td_dz;
}
function td_4Q() {
    var td_zR = 0;
    var td_np;
    var td_PM = 'false';
    var td_zJ = 'false';
    var td_Ue = 'false';
    var td_VP = 'false';
    var td_Up = 'false';
    var td_jq = 'false';
    var td_pm = 'false';
    var td_CN = 'false';
    var td_u2 = 'false';
    var td_US = 'false';
    if (td_w3 && td_w3.length) {
        td_zR = td_w3.length;
    }
    if (window.ActiveXObject || 'ActiveXObject' in window) {
        if (td_zR > 0) {
            td_PM = td_Ow();
        }
        if (td_PM === 'false') {
            td_PM = td_ux();
        }
        td_zJ = td_vn();
        td_Ue = td_md();
        td_VP = td_Uc();
        td_Up = td_sS();
    } else {
        if (td_zR > 0) {
            td_PM = td_Ow();
            td_zJ = td_iy();
            td_Ue = td_bq();
            td_VP = td_vL();
            td_Up = td_PW();
            td_jq = td_yD();
            td_pm = td_AM();
            td_CN = td_uz();
            td_u2 = td_F5();
            td_US = td_vy();
        }
    }
    td_np = 'plugin_flash^' + td_PM + '!';
    td_np += 'plugin_windows_media_player^' + td_zJ + '!';
    td_np += 'plugin_adobe_acrobat^' + td_Ue + '!';
    td_np += 'plugin_quicktime^' + td_VP + '!';
    td_np += 'plugin_shockwave^' + td_Up + '!';
    td_np += 'plugin_realplayer^' + td_jq + '!';
    td_np += 'plugin_vlc_player^' + td_pm + '!';
    td_np += 'plugin_devalvr^' + td_CN + '!';
    td_np += 'plugin_svg_viewer^' + td_u2 + '!';
    td_np += 'plugin_java^' + td_US;
    return td_np;
}
function td_Oe(td_1b) {
    var td_cW = td_1b.toLowerCase();
    if (td_cW === 'windows') {
        td_cW = 'win';
    } else {
        if (td_cW === 'iphone/ipod' || td_cW === 'ipad') {
            td_cW = 'ios';
        }
    }
    this.os_name = td_cW;
    this._eq = function (td_1b) {
        return td_1b === this.os_name;
    };
    this._ne = function (td_1b) {
        return td_1b !== this.os_name;
    };
    this._gt = function (td_1b) {
        return this.os_name > td_1b;
    };
    this._ge = function (td_1b) {
        return this.os_name >= td_1b;
    };
    this._lt = function (td_1b) {
        return this.os_name < td_1b;
    };
    this._le = function (td_1b) {
        return this.os_name <= td_1b;
    };
    this._in = function (td_1b) {
        var td_RF = null;
        if (td_cW.constructor === String) {
            td_RF = [td_cW];
        } else {
            td_RF = td_cW;
        }
        var td_on;
        td_on = 0;
        for (; td_on < td_RF.length; td_on++) {
            if (this.os_name === td_RF[td_on]) {
                return true;
            }
        }
        return false;
    };
    this.getFontsList = function () {
        if (this.os_name === 'mac') {
            return typeof td_5I === 'object' ? td_5I : [];
        }
        if (this.os_name === 'linux') {
            return typeof td_5p === 'object' ? td_5p : [];
        }
        if (this.os_name === 'win') {
            return typeof td_3V === 'object' ? td_3V : [];
        }
        if (this.os_name === 'ios') {
            return typeof td_2u === 'object' ? td_2u : [];
        }
        if (this.os_name === 'android') {
            return typeof td_0d === 'object' ? td_0d : [];
        } else {
            return [];
        }
    };
}
function td_Sa(td_5F) {
    var td_rc = td_5F.toLowerCase();
    if (td_rc === 'explorer') {
        td_rc = 'ie';
    }
    this.browser_name = td_rc;
    this._eq = function (td_5F) {
        return td_5F === this.browser_name;
    };
    this._ne = function (td_5F) {
        return td_5F !== this.browser_name;
    };
    this._in = function (td_5F) {
        var td_Rm = null;
        if (td_5F.constructor === String) {
            td_Rm = [td_5F];
        } else {
            td_Rm = td_5F;
        }
        var td_Pb;
        td_Pb = 0;
        for (; td_Pb < td_Rm.length; td_Pb++) {
            if (this.browser_name === td_Rm[td_Pb]) {
                return true;
            }
        }
        return false;
    };
}
function td_I4(td_YP) {
    this.version = td_YP;
    this._eq = function (td_fS) {
        return this.version === parseInt(td_fS);
    };
    this._ne = function (td_wk) {
        return this.version !== parseInt(td_wk);
    };
    this._gt = function (td_OM) {
        return this.version > parseInt(td_OM);
    };
    this._ge = function (td_YY) {
        return this.version >= parseInt(td_YY);
    };
    this._lt = function (td_Bs) {
        return this.version < parseInt(td_Bs);
    };
    this._le = function (td_SR) {
        return this.version <= parseInt(td_SR);
    };
}
var td_1x = td_1x || {};
td_1x._mean = function (td_n) {
    if (td_n.length < 1) {
        return 0;
    }
    var td_W = 0;
    var td_Q = 0;;
    for (; td_Q < td_n.length; ++td_Q) {
        td_W += td_n[td_Q];
    }
    return td_W / td_n.length;
};
td_1x.mean = function (td_F) {
    return Math.floor(td_1x._mean(td_F));
};
td_1x.variance = function (td_v, td_u) {
    if (td_v.length < 2) {
        return 0;
    }
    var td_m = 0;
    var td_e = 0;;
    for (; td_e < td_v.length; ++td_e) {
        var arg_402 = td_v[td_e] - td_u;
        td_m += Math.pow(arg_402, 2);
    }
    return td_m / (td_v.length - 1);
};
td_1x._std_dev = function (td_Z, td_y) {
    return Math.sqrt(td_1x.variance(td_Z, td_y));
};
td_1x.std_dev = function (td_Z, td_c) {
    return Math.floor(td_1x._std_dev(td_Z, td_c));
};
td_1x.confidence_interval = function (td_y, td_v, td_N, td_U) {
    if (td_y.length < 1) {
        return [];
    }
    var td_I = [];
    var td_m = td_N + td_v * td_U;
    var td_L = td_N - td_v * td_U;
    var td_F = 0;;
    for (; td_F < td_y.length; ++td_F) {
        if (td_y[td_F] > td_L && td_m > td_y[td_F]) {
            td_I.push(td_y[td_F]);
        }
    }
    return td_I;
};
td_1x.median = function (td_c) {
    if (typeof td_c.sort === [][[]] + '') {
        return null;
    }
    var td_b = null;
    if (typeof JSON !== [][[]] + '' && typeof JSON.stringify !== [][[]] + '' && typeof JSON.parse !== [][[]] + '') {
        var arg_404 = JSON.stringify(td_c);
        td_b = JSON.parse(arg_404);
    } else {
        if (typeof td_c.slice !== [][[]] + '') {
            td_b = td_c.slice();
        }
    }
    if (td_b === null) {
        return null;
    }
    var arg_403 = function (td_V, td_I) {
        return td_V - td_I;
    };
    td_b.sort(arg_403);
    var td_e = td_b.length;
    if (1 > td_e) {
        return 0;
    } else {
        if (2 > td_e) {
            return td_b[0];
        } else {
            if (td_e % 2) {
                return td_b[Math.floor(td_e / 2)];
            } else {
                var td_D = td_b[Math.floor(td_e / 2 - 1)];
                var td_n = td_b[Math.floor(td_e / 2)];
                return (td_D + td_n) / 2;
            }
        }
    }
};
td_1x.mad = function (td_l, td_Q) {
    if (typeof td_Q === [][[]] + '' || typeof td_l === [][[]] + '' || typeof td_l.length === [][[]] + '') {
        return 0;
    }
    var td_L = td_l.length;
    if (1 > td_L) {
        return 0;
    }
    var td_v = [];
    for (var td_n in td_l) {
        if (td_l.hasOwnProperty(td_n)) {
            var arg_406 = td_l[td_n] - td_Q;
            var arg_405 = Math.abs(arg_406);
            td_v.push(arg_405);
        }
    }
    return td_1x.median(td_v);
};
var td_1x = td_1x || {};
function td_3h() {
    'use strict';
    try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return;
        }
        var arg_407 = function (td_l1) {
            var td_X1 = 0;
            var td_Hx = 0;
            var td_Ur = 0;
            var td_vX = new td_1Y();
            var arg_409 = function (td_rz) {
                if (td_rz.kind === 'audioinput') {
                    td_X1++;
                } else {
                    if (td_rz.kind === 'videoinput') {
                        td_Ur++;
                    } else {
                        if (td_rz.kind === 'audiooutput') {
                            td_Hx++;
                        }
                    }
                }
                var td_tk = td_rz.kind + ',' + td_rz.label + ',' + td_rz.deviceId;
                var arg_410 = td_tk + '<br>';
                td_vX.update(arg_410);
            };
            td_l1.forEach(arg_409);
            var td_EQ;
            if (td_X1 !== 0 || td_Hx !== 0 || td_Ur !== 0) {
                td_EQ = '(' + td_X1 + ',' + td_Ur + ',' + td_Hx + ',' + td_vX.toString() + ')';
            }
            if (td_EQ) {
                var td_KZ = '&medh=' + td_EQ;
                var td_Nc = td_4B + '&jac=1&je=' + td_1x.td_4b(td_KZ, td_5d);
                td_3X(td_Nc, document);
            }
        };
        var arg_408 = function (td_aR) {
        };
        navigator.mediaDevices.enumerateDevices().then(arg_407, arg_408);
    } catch (td_gE) {
    }
}
function td_0H(td_l) {
    var td_D = '';
    var td_Z = function () {
        var arg_411 = Math.random() * 62;
        var td_e = Math.floor(arg_411);
        if (td_e < 10) {
            return td_e;
        }
        if (td_e < 36) {
            return String.fromCharCode(td_e + 55);
        }
        return String.fromCharCode(td_e + 61);
    };
    while (td_D.length < td_l) {
        td_D += td_Z();
    }
    return 'tdr_' + td_D;
}
function td_1I(td_d) {
    var td_Q = td_0H(5);
    if (typeof td_1G !== [][[]] + '') {
        td_1G(td_Q, td_d);
    }
    return td_Q;
}
function td_3X(td_C, td_O, td_f) {
    var td_p = td_O.getElementsByTagName('head').item(0);
    var td_y = td_O.createElement('script');
    var td_J = td_1I('SCRIPT');
    td_y.setAttribute('id', td_J);
    td_y.setAttribute('type', 'text/javascript');
    td_1x.td_1P(td_y);
    if (typeof td_f !== [][[]] + '') {
        var td_a = false;
        td_y.onload = td_y.onreadystatechange = function () {
            if (!td_a && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                td_a = true;
                td_f();
            }
        };
        td_y.onerror = function (td_z) {
            td_a = true;
            td_f();
        };
    }
    td_y.setAttribute('src', td_C);
    td_p.appendChild(td_y);
}
function td_3Z(td_u, td_s, td_S, td_B) {
    var td_j = td_B.createElement('img');
    var td_a = td_1I('IMG');
    td_j.setAttribute('id', td_a);
    td_j.setAttribute('alt', 'empty');
    td_j.setAttribute('style', 'visibility:hidden');
    td_j.setAttribute('src', td_s);
    if (typeof td_S !== [][[]] + '') {
        td_j.onload = td_S;
        td_j.onabort = td_S;
        td_j.onerror = td_S;
        td_j.oninvalid = td_S;
    }
    td_u.appendChild(td_j);
}
function td_1Q(td_Z, td_b) {
    var td_Y = td_b.getElementsByTagName('head')[0];
    td_3Z(td_Y, td_Z, null, td_b);
}
function td_Y(td_l, td_e, td_m) {
    if (typeof td_m === [][[]] + '' || td_m === null) {
        td_m = 0;
    } else {
        if (td_m < 0) {
            var arg_412 = td_l.length + td_m;
            td_m = Math.max(0, arg_412);
        }
    }
    var td_Q = td_m, td_F = td_l.length;;
    for (; td_Q < td_F; td_Q++) {
        if (td_l[td_Q] === td_e) {
            return td_Q;
        }
    }
    return -1;
}
function td_J(td_b, td_Q, td_u) {
    return td_b.indexOf(td_Q, td_u);
}
function td_s(td_W) {
    return td_W.replace(/^\s+|\s+$/g, '');
}
function td_A(td_y) {
    return td_y.trim();
}
function td_0j(td_U) {
    return td_U.trim();
}
function td_2e(td_n, td_z, td_R) {
    return td_n.indexOf(td_z, td_R);
}
function td_O() {
    return Date.now();
}
function td_S() {
    return new Date().getTime();
}
function td_3O(td_m) {
    return parseFloat(td_m);
}
function td_4T(td_V) {
    return parseInt(td_V);
}
function td_2m(td_w) {
    return isNaN(td_w);
}
function td_0w(td_x) {
    return isFinite(td_x);
}
function td_X() {
    if (typeof Number.parseFloat !== [][[]] + '' && typeof Number.parseInt !== [][[]] + '') {
        td_3O = Number.parseFloat;
        td_4T = Number.parseInt;
    } else {
        if (typeof parseFloat !== [][[]] + '' && typeof parseInt !== [][[]] + '') {
            td_3O = parseFloat;
            td_4T = parseInt;
        } else {
            td_3O = null;
            td_4T = null;
        }
    }
    if (typeof Number.isNaN !== [][[]] + '') {
        td_2m = Number.isNaN;
    } else {
        if (typeof isNaN !== [][[]] + '') {
            td_2m = isNaN;
        } else {
            td_2m = null;
        }
    }
    if (typeof Number.isFinite !== [][[]] + '') {
        td_0w = Number.isFinite;
    } else {
        if (typeof isFinite !== [][[]] + '') {
            td_0w = isFinite;
        } else {
            td_0w = null;
        }
    }
}
function td_d() {
    if (!Array.prototype.indexOf) {
        td_2e = td_Y;
    } else {
        td_2e = td_J;
    }
    if (typeof String.prototype.trim !== 'function') {
        td_0j = td_s;
    } else {
        td_0j = td_A;
    }
    if (typeof Date.now === [][[]] + '') {
        td_O = td_S;
    }
    td_X();
}
function td_4O(td_e) {
    if (typeof document.readyState !== [][[]] + '' && typeof document.readyState !== 'unknown' && document.readyState === 'complete') {
        td_e();
    } else {
        if (typeof document.readyState === [][[]] + '') {
            setTimeout(td_e, 300);
        } else {
            var td_C = 200;
            var td_x;
            if (typeof window !== [][[]] + '' && typeof window !== 'unknown' && window !== null) {
                td_x = window;
            } else {
                td_x = document.body;
            }
            if (td_x.addEventListener) {
                var arg_413 = function () {
                    setTimeout(td_e, td_C);
                };
                td_x.addEventListener('load', arg_413, false);
            } else {
                if (td_x.attachEvent) {
                    var arg_414 = function () {
                        setTimeout(td_e, td_C);
                    };
                    td_x.attachEvent('onload', arg_414, false);
                } else {
                    var td_y = td_x.onload;
                    td_x.onload = new function () {
                        var td_o = true;
                        if (td_y !== null && typeof td_y === 'function') {
                            td_o = td_y();
                        }
                        setTimeout(td_e, td_C);
                        td_x.onload = td_y;
                        return td_o;
                    }();
                }
            }
        }
    }
}
function td_B() {
    if (typeof td_4L !== [][[]] + '') {
        td_4L();
    }
    if (typeof td_1D !== [][[]] + '') {
        td_1D();
    }
    if (typeof td_1L !== [][[]] + '') {
        td_1L();
    }
    if (typeof td_1f !== [][[]] + '') {
        if (typeof td_2K !== [][[]] + '' && td_2K !== null) {
            td_1f(td_2K, false);
        }
        if (typeof td_5i !== [][[]] + '' && td_5i !== null) {
            td_1f(td_5i, true);
        }
    }
    if (typeof tmx_link_scan !== [][[]] + '') {
        tmx_link_scan();
    }
    if (typeof td_1a !== [][[]] + '') {
        td_1a();
    }
    if (typeof td_4o !== [][[]] + '') {
        td_4o.start();
    }
    if (typeof td_3f !== [][[]] + '') {
        td_3f.start();
    }
}
function td_1h() {
    try {
        td_1x.td_3C();
        td_1x.td_2A(document);
        td_0u.td_1E();
        td_d();
        td_4O(td_B);
    } catch (td_D) {
    }
}
td_1h();
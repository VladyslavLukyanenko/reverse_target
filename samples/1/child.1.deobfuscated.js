var td_3C = td_3C || {};
td_3C.td_2V = function (td_O, td_K) {
    try {
        var td_L = [''];
        var td_v = 0;
        var td_D = 0;;
        for (; td_D < td_K.length; ++td_D) {
            var arg_24 = td_O.charCodeAt(td_v) ^ td_K.charCodeAt(td_D);
            var arg_23 = String.fromCharCode(arg_24);
            td_L.push(arg_23);
            td_v++;
            if (td_v >= td_O.length) {
                td_v = 0;
            }
        }
        return td_L.join('');
    } catch (td_f) {
        return null;
    }
};
td_3C.td_0a = function (td_u) {
    if (!String || !String.fromCharCode || !parseInt) {
        return null;
    }
    try {
        this.td_c = td_u;
        this.td_d = '';
        this.td_f = function (td_R, td_i) {
            if (0 === this.td_d.length) {
                var td_M = this.td_c.substr(0, 32);
                var td_r = '';
                var td_s = 32;;
                for (; td_s < td_u.length; td_s += 2) {
                    var arg_26 = td_u.substr(td_s, 2);
                    var arg_25 = parseInt(arg_26, 16);
                    td_r += String.fromCharCode(arg_25);
                }
                this.td_d = td_3C.td_2V(td_M, td_r);
            }
            if (this.td_d.substr) {
                return this.td_d.substr(td_R, td_i);
            }
        };
    } catch (td_D) {
    }
    return null;
};
td_3C.td_3x = function (td_X) {
    if (td_X === null || td_X.length === null || !String || !String.fromCharCode) {
        return null;
    }
    var td_Z = null;
    try {
        var td_R = '';
        var td_G = [];
        var td_b = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
        var td_z = 0;
        var td_m = 0;;
        for (; td_m < td_X.length; ++td_m) {
            if (65 + td_z >= 126) {
                td_z = 0;
            }
            var td_e = (td_b + td_X.charCodeAt(td_z++)).slice(-3);
            td_G.push(td_e);
        }
        var td_l = td_G.join('');
        td_z = 0;
        var td_m = 0;;
        for (; td_m < td_l.length; ++td_m) {
            if (65 + td_z >= 126) {
                td_z = 0;
            }
            var arg_27 = 65 + td_z++;
            var td_w = String.fromCharCode(arg_27);
            if (td_w !== [][[]] + '') {
                td_R += td_w;
            }
        }
        td_Z = td_3C.td_2V(td_R, td_l);
    } catch (td_i) {
        return null;
    }
    return td_Z;
};
td_3C.td_2D = function (td_c) {
    if (td_c === null || td_c.length === null) {
        return null;
    }
    var td_t = '';
    try {
        var td_o = '';
        var td_u = 0;
        var td_K = 0;;
        for (; td_K < td_c.length; ++td_K) {
            if (65 + td_u >= 126) {
                td_u = 0;
            }
            var arg_28 = 65 + td_u++;
            var td_S = String.fromCharCode(arg_28);
            if (td_S !== [][[]] + '') {
                td_o += td_S;
            }
        }
        var td_m = td_3C.td_2V(td_o, td_c);
        var td_p = td_m.match(/.{1,3}/g);
        var td_K = 0;;
        for (; td_K < td_p.length; ++td_K) {
            var arg_29 = parseInt(td_p[td_K], 10);
            td_t += String.fromCharCode(arg_29);
        }
    } catch (td_G) {
        return null;
    }
    return td_t;
};
var td_3C = td_3C || {};
function td_1X(td_vj, td_uC, td_yP) {
    var td_a0 = [];
    var td_Ku = 0;
    var td_hW = [];
    var td_Ge = [];
    var td_Ln = null;
    var td_hX = true;
    var td_Jc = true;
    this.timeout = 1500;
    this.validate = false;
    this.isValid = function () {
        return this.validate;
    };
    if (typeof WebSocket === [][[]] + '') {
        return;
    }
    var td_L9 = 0;
    var td_V3 = 0;
    if (td_5y.td_5d === 'Explorer') {
        td_L9 = 2500;
        td_V3 = 6;
    } else {
        td_L9 = 1500;
        td_V3 = 128;
    }
    var td_Pm = 3 * td_L9;
    var td_yz = function (td_I5, td_lR, td_KF, td_mT, td_As, td_yR) {
        if (typeof td_KF === [][[]] + '' || typeof td_yR === [][[]] + '') {
            return false;
        }
        if (td_yR < td_KF / 2) {
            return true;
        }
        return false;
    };
    if (td_vj === 'Windows') {
        this.os = 'WIN';
    } else {
        if (td_vj === 'Mac') {
            this.os = 'MAC';
        } else {
            this.os = td_vj;
        }
    }
    this.browser = td_uC;
    this.ip = '127.0.0.1';
    this.scanPorts = [];
    var td_CN = 0;;
    for (; td_CN < td_yP.length; td_CN++) {
        var td_jP = td_yP[td_CN].split(':');
        var td_Qq;
        if (td_jP.length === 1) {
            td_Qq = td_jP[0];
        } else {
            if (td_jP.length === 2) {
                td_Qq = td_jP[1];
            } else {
                if (td_jP.length === 3) {
                    td_Qq = td_jP[2];
                } else {
                    continue;
                }
            }
        }
        if (this.os !== 'WIN') {
            continue;
        }
        var arg_30 = [
            td_Qq,
            td_yz
        ];
        this.scanPorts.push(arg_30);
    }
    if (this.scanPorts.length > 1) {
        this.validate = true;
    }
    if (this.validate === false) {
        return;
    }
    var td_Tn = this;
    var td_NK;
    var td_eX = 0;
    var td_Xg = 0;
    var td_mV;
    var td_Y5 = {};
    var td_Vd = this.scanPorts.length;
    var td_wF = function (td_Io) {
        td_Y5[td_eX + '_open'] = true;
        if (td_3C.hasDebug) {
            var td_lw = '';
            for (var td_dK in td_Io) {
                td_lw += '::' + td_dK + ' : ' + td_Io[td_dK];
            }
        }
    };
    var td_d3 = function (td_EO) {
        td_Y5[td_eX + '_error'] = true;
    };
    var td_Qh = function (td_rL) {
        td_Y5[td_eX + '_close'] = true;
    };
    function td_Zv() {
        if (!td_qx() || !td_Jc) {
            return;
        }
        td_NK = td_Z();
        try {
            var arg_31 = 'wss://' + td_Tn.ip + ':' + td_eX;
            td_mV = new WebSocket(arg_31);
            td_mV.onerror = td_d3;
            td_mV.onopen = td_wF;
            td_mV.onclose = td_Qh;
            var arg_32 = setTimeout(td_VP, 5);
            td_Ge.push(arg_32);
        } catch (td_it) {
            return;
        }
    }
    function td_VP() {
        var td_rE = td_Z() - td_NK;
        if (td_mV.readyState === 0) {
            if (td_rE > td_L9) {
                td_Y5[td_eX + '_interval'] = td_L9;
                td_mV.close();
                td_mV = null;
                td_NK = td_Z();
                var arg_33 = setTimeout(td_Zv, 1);
                td_Ge.push(arg_33);
            } else {
                var arg_34 = setTimeout(td_VP, 5);
                td_Ge.push(arg_34);
            }
        } else {
            td_Y5[td_eX + '_interval'] = td_rE;
            td_mV.close();
            td_mV = null;
            var arg_35 = setTimeout(td_Zv, 1);
            td_Ge.push(arg_35);
        }
    }
    function td_qx() {
        if (td_Xg >= td_Tn.scanPorts.length) {
            td_UI();
            return false;
        }
        td_eX = td_Tn.scanPorts[td_Xg++][0];
        return true;
    }
    function td_UI() {
        var td_Nr = [];
        var td_cm = td_Y5[td_Tn.scanPorts[0][0] + '_error'];
        var td_TC = td_Y5[td_Tn.scanPorts[0][0] + '_close'];
        var td_vf = td_Y5[td_Tn.scanPorts[0][0] + '_interval'];
        var td_Yp = td_Tn.scanPorts[0][0] + '-' + td_vf;
        var td_Bf = 1;;
        for (; td_Bf < td_Tn.scanPorts.length; td_Bf++) {
            var td_mn = td_Y5[td_Tn.scanPorts[td_Bf][0] + '_error'];
            var td_jz = td_Y5[td_Tn.scanPorts[td_Bf][0] + '_close'];
            var td_Li = td_Y5[td_Tn.scanPorts[td_Bf][0] + '_interval'];
            if (td_Tn.scanPorts[td_Bf][1](td_cm, td_TC, td_vf, td_mn, td_jz, td_Li)) {
                var td_yE = td_Tn.scanPorts[td_Bf][0];
                td_Nr.push(td_yE);
            }
            td_Yp += ',' + td_Tn.scanPorts[td_Bf][0] + '-' + td_Li;
        }
        var td_GI = 'rd=' + td_Nr.join() + '&rdt=' + td_Yp;
        var td_G0 = td_1y + '&je=' + td_3C.td_4e(td_GI, td_1N);
        td_5l(td_G0, document);
        if (td_3C.hasTrace) {
            for (var td_x9 in td_Y5) {
                if (td_Y5.hasOwnProperty(td_x9)) {
                }
            }
        }
    }
    function td_HL() {
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
        this.replaceGlobalFncNameSpace = function (td_lD) {
            var td_D4 = td_lD;
            var td_vr = 0;
            while (td_D4.search(self.GLOBREPLACE) !== -1) {
                td_D4 = td_D4.replace(self.GLOBREPLACE, self.REPLACEVAL);
            }
            return td_D4;
        };
        this.debug = function (td_F1) {
            if (typeof console !== [][[]] + '' && typeof console.log !== [][[]] + '') {
                console.log(td_F1);
            }
        };
        this.makeDebug = function () {
            var td_lD;
            if (td_3C.hasDebug) {
                td_lD = '\n' + 'tmx.debug = ' + this.debug.toString() + '\n';
            } else {
                td_lD = '\n' + 'tmx.debug = ' + function () {
                }.toString() + '\n';
            }
            return td_lD;
        };
        this.trace = function (td_Kb) {
            if (typeof console !== [][[]] + '' && typeof console.log !== [][[]] + '') {
                console.log(td_Kb);
            }
        };
        this.makeTrace = function () {
            var td_ak;
            if (td_3C.hasTrace) {
                td_ak = '\n' + 'tmx.trace = ' + this.trace.toString() + '\n';
            } else {
                td_ak = '\n' + 'tmx.trace = ' + function () {
                }.toString() + '\n';
            }
            return td_ak;
        };
    }
    function td_Mv(td_Tm, td_Ir, td_fL) {
        var td_lx = [];
        td_lx[0] = 'var tmx = tmx || {}; //namespace' + '\n';
        var td_lF = new td_HL();
        td_lx[1] = td_lF.PortProbeInitialiser() + '\n';
        var arg_36 = td_Tm.indexOf('{') + 1;
        var arg_37 = td_Tm.lastIndexOf('}');
        td_lx[2] = td_Tm.substring(arg_36, arg_37);
        td_lx[3] = td_lF.makeDebug();
        td_lx[4] = td_lF.makeTrace();
        td_lx[5] = '\n' + td_Z.toString() + '\n';
        var arg_40 = td_lx.join('');
        var arg_38 = [td_lF.replaceGlobalFncNameSpace(arg_40)];
        var arg_39 = { type: 'application/javascript' };
        var td_q6 = new Blob(arg_38, arg_39);
        var arg_41 = URL.createObjectURL(td_q6);
        var td_QR = new Worker(arg_41);
        var arg_42 = function (td_Iy) {
            switch (td_Iy.data[0]) {
            case 'DATA': {
                    td_cd(td_Iy);
                    break;
                }
            default: {
                    break;
                }
            }
        };
        td_QR.addEventListener('message', arg_42, false);
        var arg_43 = [
            td_Ir,
            td_fL,
            td_3C.hasTrace
        ];
        td_QR.postMessage(arg_43);
        return td_QR;
    }
    function td_vA(td_O7, td_nB, td_Cf, td_Cn) {
        var td_MY = [];
        td_MY[0] = 'var tmx = tmx || {}; //namespace' + '\n';
        var td_Ls = new td_HL();
        td_MY[1] = td_Ls.UnderBossInitialiser() + '\n';
        var arg_44 = td_O7.indexOf('{') + 1;
        var arg_45 = td_O7.lastIndexOf('}');
        td_MY[2] = td_O7.substring(arg_44, arg_45);
        td_MY[3] = td_Ls.makeDebug();
        td_MY[4] = td_Ls.makeTrace();
        td_MY[5] = '\n' + td_Z.toString() + '\n';
        var arg_48 = td_MY.join('');
        var arg_46 = [td_Ls.replaceGlobalFncNameSpace(arg_48)];
        var arg_47 = { type: 'application/javascript' };
        var td_eJ = new Blob(arg_46, arg_47);
        var arg_49 = URL.createObjectURL(td_eJ);
        var td_It = new Worker(arg_49);
        var arg_50 = function (td_WS) {
            switch (td_WS.data[0]) {
            case 'DONE': {
                    td_pq(td_WS);
                    break;
                }
            case 'QUERY': {
                    var td_CY = td_jd(td_Cf);
                    var arg_52 = [
                        'RESULT',
                        td_CY
                    ];
                    td_It.postMessage(arg_52);
                    break;
                }
            default: {
                    break;
                }
            }
        };
        td_It.addEventListener('message', arg_50, false);
        var arg_51 = [
            'INIT',
            td_nB,
            td_Cn,
            td_3C.hasTrace
        ];
        td_It.postMessage(arg_51);
        return td_It;
    }
    function td_cd(td_gx) {
        if (typeof td_gx === [][[]] + '') {
            return;
        }
        if (typeof td_Y5 === [][[]] + '') {
            return;
        }
        if (!(td_gx.data[1] in td_Y5)) {
            td_Y5[td_gx.data[1]] = td_gx.data[2];
        }
    }
    function td_pq(td_IT) {
        if (typeof td_IT === [][[]] + '') {
            return;
        }
        switch (td_IT.data[1]) {
        case 'TIMEOUT': {
                td_CE(td_hW);
                td_UI();
                break;
            }
        case 'DATACOUNT': {
                if (td_Vd === td_jd(td_Y5)) {
                    td_CE(td_hW);
                    td_UI();
                } else {
                    td_O6();
                }
                break;
            }
        default: {
                break;
            }
        }
    }
    function td_e7() {
        self.pstMsg = null;
        self.isDone = false;
        self.PortTestTimeOut = null;
        self.testPort = null;
        self.localStartTime = null;
        self.localWs = null;
        self.logFunc = null;
        var arg_53 = function (td_SW) {
            self.testPort = td_SW.data[0];
            self.PortTestTimeOut = td_SW.data[1];
            td_BG(td_SW.data[0], td_SW.data[1]);
        };
        self.addEventListener(self.MESSAGE, arg_53);
        var td_ru = function (td_Y8) {
            var arg_54 = [
                self.OPEN,
                self.testPort
            ];
            postMessage(arg_54);
        };
        var td_S7 = function (td_Zs) {
            var td_kT = td_Z() - self.localStartTime;
            var arg_55 = [
                self.ERROR,
                self.testPort + self.INTERVAL,
                td_kT
            ];
            postMessage(arg_55);
        };
        var td_CZ = function (td_jC) {
            var td_Ns = td_Z() - self.localStartTime;
            var arg_56 = [
                self.CLOSE,
                self.testPort + self.INTERVAL,
                td_Ns
            ];
            postMessage(arg_56);
        };
        function td_BG() {
            var arg_57 = self.testPort + self.SEP + self.PortTestTimeOut;
            eval_fn_1.debug(arg_57);
            try {
                var arg_58 = self.SOCKET + self.testPort;
                self.localWs = new WebSocket(arg_58);
                self.localWs.onopen = td_ru;
                self.localWs.onerror = td_S7;
                self.localWs.onclose = td_CZ;
                self.localStartTime = td_Z();
                setTimeout(td_Zc, 5);
            } catch (td_hu) {
                var arg_59 = self.ERROR + self.SEP + td_hu.message;
                eval_fn_1.debug(arg_59);
            }
        }
        function td_Zc() {
            var td_rk = td_Z() - self.localStartTime;
            if (self.localWs.readyState === 0) {
                if (td_rk > self.PortTestTimeOut) {
                    var arg_60 = self.testPort + self.TIMEEXCEEDED;
                    eval_fn_1.debug(arg_60);
                    var arg_61 = [
                        self.DATA,
                        self.testPort + self.INTERVAL,
                        self.PortTestTimeOut
                    ];
                    postMessage(arg_61);
                    td_ez();
                } else {
                    var arg_62 = function () {
                        td_Zc();
                    };
                    setTimeout(arg_62, 10);
                }
            } else {
                var arg_63 = [
                    self.DATA,
                    self.testPort + self.INTERVAL,
                    td_rk
                ];
                postMessage(arg_63);
                td_ez();
            }
        }
        function td_ez() {
            self.isDone = true;
            if (self.localWs !== null) {
                self.localWs.close();
                self.localWs = null;
            }
        }
    }
    function td_TJ() {
        self.pstMsg = null;
        self.isDone = false;
        self.count = -1;
        self.time = null;
        self.timeOut = 5000;
        self.logFunc = null;
        var arg_64 = function (td_mf) {
            switch (td_mf.data[0]) {
            case self.INIT: {
                    self.count = td_mf.data[1];
                    self.time = td_Z();
                    if (typeof td_mf.data[2] === self.NUMBER) {
                        self.timeOut = td_mf.data[2];
                    }
                    break;
                }
            case self.RESULT: {
                    if (td_mf.data[1] < 0 || td_mf.data[1] >= self.count) {
                        self.isDone = true;
                        var arg_65 = [
                            self.POSTMSGDONE,
                            self.DATACOUNT
                        ];
                        postMessage(arg_65);
                    } else {
                        if (self.time + self.timeOut < td_Z()) {
                            self.isDone = true;
                            var arg_66 = [
                                self.POSTMSGDONE,
                                self.CTIMEOUT
                            ];
                            postMessage(arg_66);
                        }
                    }
                    break;
                }
            default: {
                    break;
                }
            }
            if (self.isDone === false) {
                var arg_67 = function () {
                };
                setTimeout(arg_67, 100);
                var arg_68 = [self.POSTMSGQUERY];
                postMessage(arg_68);
            }
        };
        self.addEventListener(self.MESSAGE, arg_64);
        var td_k3 = function (td_BT) {
            var arg_69 = [
                self.WOPEN,
                td_BT.toString()
            ];
            postMessage(arg_69);
        };
        var td_Sc = function (td_xP) {
            var arg_70 = [
                self.WERROR,
                td_xP.toString()
            ];
            postMessage(arg_70);
        };
        var td_ji = function (td_wZ) {
            var arg_71 = [
                self.WCLOSE,
                td_wZ.toString()
            ];
            postMessage(arg_71);
        };
    }
    function td_CE(td_YG) {
        var td_r9 = false;
        while (!td_r9) {
            td_r9 = true;
            for (var td_yx in td_YG) {
                if (typeof td_YG[td_yx] !== [][[]] + '' && td_YG[td_yx] !== null) {
                    td_r9 = false;
                    td_YG[td_yx].terminate();
                    td_YG[td_yx] = null;
                }
            }
        }
    }
    function td_jd(td_bn) {
        if (typeof td_bn === [][[]] + '') {
            return -1;
        }
        var td_Wt = 0;
        for (var td_Fe in td_bn) {
            if (td_bn.hasOwnProperty(td_Fe)) {
                ++td_Wt;
            }
        }
        return td_Wt;
    }
    function td_Zd(td_M3, td_Uq) {
        var td_xb;
        var td_w7;
        var td_YS;
        td_xb = 0;
        td_w7 = td_Uq.length;
        for (; td_xb < td_w7; td_xb += td_V3) {
            var arg_72 = td_xb + td_V3;
            td_YS = td_Uq.slice(td_xb, arg_72);
            td_a0.push(td_YS);
        }
    }
    function td_O6() {
        if (!td_Jc) {
            return;
        }
        var td_qV = td_jd(td_Y5) + td_a0[td_Ku].length;
        td_Fi(td_a0[td_Ku++], td_qV);
    }
    function td_Fi(td_mx, td_EU) {
        for (var td_Yl in td_mx) {
            var arg_74 = td_e7.toString();
            td_hW[td_Yl] = td_Mv(arg_74, td_mx[td_Yl][0], td_L9);
        }
        var arg_73 = td_TJ.toString();
        td_Ln = td_vA(arg_73, td_EU, td_Y5, td_Pm);
    }
    function td_dq() {
        for (var td_Ji in td_Ge) {
            if (td_Ge.hasOwnProperty(td_Ji) && typeof td_Ge[td_Ji] !== [][[]] + '' && td_Ge[td_Ji] !== null) {
                clearTimeout(td_Ge[td_Ji]);
            }
        }
    }
    function td_Gr() {
        td_Jc = false;
        td_l(window, td_0T, td_Gr, td_hX);
        td_l(window, td_4R, td_Gr, td_hX);
        td_dq();
        if (typeof td_Ln !== [][[]] + '' && td_Ln !== null) {
            td_Ln.terminate();
        }
        td_CE(td_hW);
    }
    this.scan = function () {
        if (!this.isValid()) {
            return;
        }
        if (typeof this.scanPorts !== 'object' || this.scanPorts.length === 0) {
            return;
        }
        td_M(window, td_0T, td_Gr, td_hX);
        td_M(window, td_4R, td_Gr, td_hX);
        var td_Z4 = td_5y.td_5d === 'Explorer' && (td_5y.td_5A === 'Windows 7' || td_5y.td_5A === 'Windows 8.1');
        var td_mR = typeof Worker !== [][[]] + '' && typeof URL !== [][[]] + '' && td_5y.td_5d !== 'Firefox' && !td_Z4;
        if (td_mR) {
            try {
                var arg_75 = [''];
                var arg_76 = { type: 'application/javascript' };
                var td_Db = new Blob(arg_75, arg_76);
                var arg_77 = URL.createObjectURL(td_Db);
                var td_Xh = new Worker(arg_77);
                td_Xh.terminate();
            } catch (td_sI) {
                td_mR = false;
            }
        }
        if (td_mR) {
            td_Zd(this, this.scanPorts);
            td_O6(td_Ku);
        } else {
            var arg_78 = setTimeout(td_Zv, this.timeout);
            td_Ge.push(arg_78);
        }
    };
}
function td_5O() {
    td_0i(td_1k, document);
}
var td_3C = td_3C || {};
var td_we = 255;
var td_TU = true;
var td_hX = true;
function td_Xk() {
    if (td_TU) {
        td_TU = false;
        throw new TypeError();
    }
}
function td_2d() {
    try {
        td_M(window, td_0T, td_Xk, td_hX);
        td_M(window, td_4R, td_Xk, td_hX);
        var arg_79 = td_5y.td_0p;
        td_4z = new td_Ty(arg_79);
        var arg_80 = td_5y.td_5d;
        td_1F = new td_IK(arg_80);
        var arg_81 = td_5y.td_2k;
        td_0M = new td_CD(arg_81);
        var td_cw = '';
        try {
            td_cw += td_F0();
        } catch (td_R1) {
        }
        try {
            td_cw += td_nJ();
        } catch (td_R1) {
        }
        var td_La = null;
        if (navigator.userAgent) {
            var arg_82 = 'lq=' + encodeURIComponent(navigator.userAgent);
            td_La = '&jb=' + td_3C.td_4e(arg_82, td_1N);
        } else {
            td_La = '';
        }
        var td_vP = td_5j + '&ja=' + td_3C.td_4e(td_cw, td_1N) + td_La;
        if (typeof td_4M !== [][[]] + '') {
            var td_yK = function () {
                var arg_83 = function () {
                    td_4M(td_1N);
                };
                setTimeout(arg_83, 2000);
            };
        }
        td_5l(td_vP, document, td_yK);
    } catch (td_R1) {
    } finally {
        td_TU = false;
        td_l(window, td_0T, td_Xk, td_hX);
        td_l(window, td_4R, td_Xk, td_hX);
    }
}
function td_A2(td_Ft) {
    'use strict';
    try {
        if (typeof td_Ft !== 'number' || td_Ft <= 0) {
            td_Ft = 1;
        } else {
            if (!td_5y.td_5x) {
                if (td_5y.td_5d === 'Chrome' || td_5y.td_5d === 'Opera') {
                    td_Ft = Math.floor(td_Ft);
                    if (td_Ft <= 0) {
                        td_Ft = 1;
                    }
                }
            }
        }
    } catch (td_LS) {
    }
    return td_Ft;
}
function td_T6(td_LP, td_Lu) {
    'use strict';
    var td_Tc = td_LP * td_Lu;
    try {
        if (td_Lu % 1 === 0) {
            return td_Tc;
        }
        td_Tc = Math.round(td_Tc);
        var td_XE = td_Tc - 2;;
        for (; td_XE < td_Tc + 2; td_XE++) {
            if (td_XE % 10 === 0) {
                return td_XE;
            }
        }
    } catch (td_cw) {
    }
    return td_Tc;
}
function td_kM() {
    try {
        var td_X2 = 1;
        if (window && window.devicePixelRatio) {
            td_X2 = window.devicePixelRatio;
        }
        td_X2 = td_A2(td_X2);
        var td_Tj = 0;
        var td_Yu = 0;
        var td_u3 = 0;
        var td_GT = 0;
        if (screen && screen.width && screen.height) {
            td_Tj = screen.width;
            td_Yu = screen.height;
        } else {
            if (window && window.screen.width && window.screen.height) {
                td_Tj = window.screen.width;
                td_Yu = window.screen.height;
            }
        }
        var td_b1 = '&f=' + td_T6(td_Tj, td_X2) + 'x' + td_T6(td_Yu, td_X2);
        if (window && window.screen && window.screen.availWidth && window.screen.availHeight) {
            td_u3 = window.screen.availWidth * td_X2;
            td_GT = window.screen.availHeight * td_X2;
        }
        if (td_u3 !== 0 && td_GT !== 0) {
            td_b1 += '&af=' + td_u3 + 'x' + td_GT;
        }
        if (typeof window !== [][[]] + '' && typeof window.screenX !== [][[]] + '' && typeof window.screenY !== [][[]] + '') {
            var td_bU = window.screenX * td_X2;
            var td_Ue = window.screenY * td_X2;
            td_b1 += '&sxy=' + td_bU + 'x' + td_Ue;
        }
        var td_b3 = td_3C.td_4J('t');
        td_b1 += '&dpr=' + td_b3.devicePixelRatio + ',' + screen.width + ',' + screen.height + ',' + screen.availWidth + ',' + screen.availHeight + ',' + td_b3.innerWidth + ',' + td_b3.innerHeight + ',' + td_b3.outerWidth + ',' + td_b3.outerHeight + ',' + td_b3.screenX + ',' + td_b3.screenY;
        return td_b1;
    } catch (td_Rz) {
    }
    return '';
}
function td_F0() {
    var td_Yc = new Date();
    td_Yc.setDate(1);
    td_Yc.setMonth(5);
    var td_EG = -td_Yc.getTimezoneOffset();
    td_Yc.setMonth(11);
    var td_e5 = -td_Yc.getTimezoneOffset();
    var td_ac = Math.min(td_EG, td_e5);
    var td_Rx = Math.max(td_EG, td_e5) - td_ac;
    var td_K3 = null;
    if (td_Ma) {
        td_K3 = td_Ma.length;
    } else {
        td_K3 = 0;
    }
    var td_Rs = [];
    var td_Xf = 0;;
    for (; td_Xf < td_K3; td_Xf++) {
        td_Rs[td_Xf] = td_Ma[td_Xf].type;
    }
    var td_Nm = null;
    if (td_K3 > 0) {
        var arg_87 = td_Rs.join();
        td_Nm = '&mt=' + td_0W(arg_87) + '&mn=' + td_K3;
    } else {
        td_Nm = '';
    }
    var td_T5 = '';
    td_T5 += '&c=' + td_ac + '&z=' + td_Rx + td_kM() + td_Nm;
    td_T5 += '&scd=' + screen.colorDepth;
    var arg_84 = location.href.substring(0, td_we);
    td_T5 += '&lh=' + encodeURIComponent(arg_84);
    var arg_85 = document.referrer.substring(0, td_we);
    var td_pr = encodeURIComponent(arg_85);
    if (typeof td_2v === 'string' && td_2v.length > 0 && window !== window.top && td_pr.length === 0) {
        td_pr = td_2v;
    }
    td_T5 += '&dr=' + td_pr;
    var td_d1 = navigator.plugins;
    if (td_d1.length) {
        var td_ON = td_d1.length;
        td_T5 += '&pl=' + td_ON;
        var td_Cg;
        td_Xf = 0;
        for (; td_Xf < td_ON; td_Xf++) {
            td_Cg += td_d1[td_Xf].name + td_d1[td_Xf].description + td_d1[td_Xf].filename + td_d1[td_Xf].length;
        }
        td_T5 += '&ph=' + td_0W(td_Cg);
    }
    var arg_86 = td_5f + td_1N;
    td_T5 += '&hh=' + td_0W(arg_86);
    if (td_5y.td_5A !== 'unknown') {
        td_T5 += '&jso=' + encodeURIComponent(td_5y.td_5A);
    }
    if (td_5y.td_5d !== 'unknown') {
        if (td_5y.td_2k !== 'unknown') {
            var arg_88 = td_5y.td_5d + ' ' + td_5y.td_2k;
            td_T5 += '&jsb=' + encodeURIComponent(arg_88);
        } else {
            td_T5 += '&jsb=' + encodeURIComponent(td_5y.td_5d);
        }
    }
    if (td_5y.td_1a !== 'unknown') {
        td_T5 += '&jsou=' + encodeURIComponent(td_5y.td_1a);
    }
    if (td_5y.td_5W !== 'unknown') {
        td_T5 += '&jsbu=' + encodeURIComponent(td_5y.td_5W);
    }
    if (td_5y.td_5x === true) {
        td_T5 += '&jsmu=true';
    }
    if (typeof navigator !== [][[]] + '') {
        if (typeof navigator.hardwareConcurrency === 'number') {
            td_T5 += '&nhc=' + navigator.hardwareConcurrency;
        }
        if (typeof navigator.deviceMemory === 'number') {
            td_T5 += '&ndm=' + navigator.deviceMemory;
        }
    }
    if (typeof Intl !== [][[]] + '' && typeof Intl.DateTimeFormat !== [][[]] + '') {
        var td_fw = Intl.DateTimeFormat();
        if (td_fw !== null && typeof td_fw !== [][[]] + '' && typeof td_fw.resolvedOptions !== [][[]] + '') {
            var td_TE = td_fw.resolvedOptions();
            if (td_TE !== null && typeof td_TE.timeZone === 'string' && td_TE.timeZone.length > 0) {
                td_T5 += '&tzd=' + encodeURIComponent(td_TE.timeZone);
            }
        }
    }
    var td_LA = td_1v();
    if (td_LA) {
        td_T5 += '&mathr=' + encodeURIComponent(td_LA);
    }
    if (typeof td_4P === [][[]] + '' || !td_4P()) {
        td_0i(td_2F, document);
    }
    return td_T5;
}
var td_wL = [];
var td_vk;
function td_nJ() {
    var td_kj = '';
    if (typeof td_1z !== [][[]] + '') {
        var td_qR = td_1z();
        if (td_qR !== null) {
            td_kj += '&p=' + td_qR;
        }
    }
    if (typeof td_5u !== [][[]] + '') {
        var td_vW = td_5u();
        if (td_vW) {
            td_kj += '&ex3=' + td_vW;
        }
    }
    if (typeof td_3l !== [][[]] + '') {
        var td_NU = td_3l();
        if (td_NU) {
            td_kj += '&gl_c=' + encodeURIComponent(td_NU) + '&gl_h=' + td_1g(td_NU);
        }
    }
    if (typeof td_3K !== [][[]] + '') {
        var td_v1 = td_3K();
        if (td_v1) {
            td_kj += td_v1;
        }
    }
    if (typeof td_5B !== [][[]] + '') {
        td_5B();
    }
    if (typeof td_3y !== [][[]] + '') {
        td_3y();
    }
    if (typeof td_5C !== [][[]] + '') {
        td_5C();
    }
    if (typeof td_5H !== [][[]] + '') {
        td_5H();
    }
    if (typeof td_3g !== [][[]] + '') {
        td_3g();
    }
    if (typeof td_3O !== [][[]] + '') {
        td_3O();
    }
    if (typeof td_5O !== [][[]] + '') {
        td_5O();
    }
    if (typeof td_3B !== [][[]] + '') {
        if (typeof td_2a !== [][[]] + '') {
            var arg_89 = new td_2a();
            td_3B.addFeature(arg_89);
        }
        if (typeof td_2z !== [][[]] + '') {
            var arg_90 = new td_2z();
            td_3B.addFeature(arg_90);
        }
        if (typeof td_2o !== [][[]] + '') {
            var arg_91 = new td_2o();
            td_3B.addFeature(arg_91);
        }
        if (typeof td_3v !== [][[]] + '') {
            var arg_92 = new td_3v();
            td_3B.addFeature(arg_92);
        }
    }
    if (typeof td_5s !== [][[]] + '') {
        if (typeof td_5G !== [][[]] + '') {
            var arg_93 = new td_5G();
            td_5s.addFeature(arg_93);
        }
        if (typeof td_0A !== [][[]] + '') {
            var arg_94 = new td_0A();
            td_5s.addFeature(arg_94);
        }
        if (typeof td_0U !== [][[]] + '') {
            var arg_95 = new td_0U();
            td_5s.addFeature(arg_95);
        }
    }
    if (typeof td_3o !== [][[]] + '') {
        td_3o();
    }
    if (typeof td_4V !== [][[]] + '') {
        td_wL[new td_4V(td_2S, td_5h, td_4G)];
    }
    if (typeof td_3Z !== [][[]] + '') {
        td_wL[new td_3Z()];
    }
    if (typeof td_2L !== [][[]] + '') {
        td_wL[new td_2L(td_4m, td_3L, td_0c)];
    }
    if (typeof td_5w !== [][[]] + '') {
        td_wL[new td_5w(td_2U, td_3V, td_1E)];
    }
    if (typeof td_0e !== [][[]] + '') {
        td_wL[new td_0e(td_3I, td_2s, td_2T)];
    }
    if (typeof td_1l !== [][[]] + '' && typeof Object.create !== [][[]] + '' && typeof String.prototype.toUpperCase !== [][[]] + '') {
        td_wL[new td_1l(td_4p, td_2n, td_0B)];
    }
    if (typeof td_2l !== [][[]] + '') {
        td_wL[new td_2l(td_5p, td_1R, td_4c)];
    }
    if (typeof td_3j !== [][[]] + '') {
        td_3j();
    }
    if (typeof td_2i !== [][[]] + '') {
        td_wL[new td_2i()];
    }
    if (typeof td_0z !== [][[]] + '') {
        var td_Os = td_0z();
        if (td_Os !== null) {
            td_kj += td_Os;
        }
    }
    if (typeof td_4N !== [][[]] + '') {
        td_4N();
    }
    if (typeof td_4h !== [][[]] + '' && td_4h.length > 0 && typeof td_1X !== [][[]] + '') {
        var arg_96 = td_5y.td_0p;
        var arg_97 = td_5y.td_5d;
        td_vk = new td_1X(arg_96, arg_97, td_4h);
        if (td_vk.isValid()) {
            td_vk.scan();
        }
    }
    td_3C.load_iframe(td_2b, td_3c, document);
    if (typeof td_1O !== [][[]] + '') {
        td_1O();
    }
    if (typeof td_3C.td_3S !== [][[]] + '') {
        td_3C.td_3S();
    }
    if (typeof td_2B !== [][[]] + '') {
        var td_QA = td_2B();
        if (td_QA) {
            td_kj += '&ccd=' + td_QA;
        }
    }
    return td_kj;
}
var td_3C = td_3C || {};
if (typeof td_3C.td_3A === [][[]] + '') {
    td_3C.td_3A = [];
}
td_3C.td_2W = function () {
    var td_A = 0;;
    for (; td_A < td_3C.td_3A.length; ++td_A) {
        td_3C.td_3A[td_A]();
    }
};
td_3C.td_4e = function (td_O, td_t) {
    try {
        var td_x = td_O.length + '&' + td_O;
        var td_l = '';
        var td_E = '0123456789abcdef';
        var td_h = 0, td_c = 0;;
        for (; td_h < td_x.length; td_h++) {
            var td_A = td_x.charCodeAt(td_h) ^ td_t.charCodeAt(td_c) & 10;
            if (++td_c === td_t.length) {
                td_c = 0;
            }
            var arg_98 = td_A >> 4 & 15;
            td_l += td_E.charAt(arg_98);
            var arg_99 = td_A & 15;
            td_l += td_E.charAt(arg_99);
        }
        return td_l;
    } catch (td_o) {
        return null;
    }
};
td_3C.td_3s = function () {
    try {
        var td_j = window.top.document;
        var td_u = td_j.forms.length;
        return td_j;
    } catch (td_H) {
        return document;
    }
};
td_3C.td_4J = function (td_N) {
    try {
        var td_x;
        if (typeof td_N === [][[]] + '') {
            td_x = window;
        } else {
            if (td_N === 't') {
                td_x = window.top;
            } else {
                if (td_N === 'p') {
                    td_x = window.parent;
                } else {
                    td_x = window;
                }
            }
        }
        var td_C = td_x.document.forms.length;
        return td_x;
    } catch (td_U) {
        return window;
    }
};
td_3C.add_lang_attr_html_tag = function (td_M) {
    try {
        if (td_M === null) {
            return;
        }
        var td_x = td_M.getElementsByTagName('html');
        if (typeof td_x !== [][[]] + '' && td_x !== null && typeof td_x.length !== [][[]] + '' && td_x.length !== null && td_x.length > 0 && typeof td_x[0] !== [][[]] + '' && typeof td_x[0] !== null && typeof td_x[0].setAttribute !== [][[]] + '' && td_x[0].setAttribute !== null && typeof td_x[0].getAttribute !== [][[]] + '' && td_x[0].getAttribute !== null && (td_x[0].getAttribute('lang') === null || td_x[0].getAttribute('lang') === '')) {
            td_x[0].setAttribute('lang', 'en');
        } else {
        }
    } catch (td_z) {
    }
};
td_3C.load_iframe = function (td_q, td_O, td_E) {
    var td_r = td_0S(5);
    if (typeof td_5n !== [][[]] + '') {
        td_5n(td_r, 'IFRAME');
    }
    var td_d = td_E.createElement('iframe');
    td_d.id = td_r;
    td_d.title = 'empty';
    td_d.setAttribute('aria-disabled', 'true');
    td_d.setAttribute('aria-hidden', 'true');
    td_d.width = '0';
    td_d.height = '0';
    if (typeof td_d.tabIndex !== [][[]] + '') {
        td_d.tabIndex = '-1';
    }
    if (td_3c !== null) {
        td_d.setAttribute('sandbox', td_O);
    }
    td_d.setAttribute('style', 'color:rgba(0,0,0,0); float:left; position:absolute; top:-200; left:-200; border:0px');
    td_d.setAttribute('src', td_q);
    td_E.body.appendChild(td_d);
};
td_3C.csp_nonce = null;
td_3C.td_0Q = function (td_A) {
    if (typeof td_A.currentScript !== [][[]] + '' && td_A.currentScript !== null) {
        var td_I = td_A.currentScript.getAttribute('nonce');
        if (typeof td_I !== [][[]] + '' && td_I !== null && td_I !== '') {
            td_3C.csp_nonce = td_I;
        } else {
            if (typeof td_A.currentScript.nonce !== [][[]] + '' && td_A.currentScript.nonce !== null && td_A.currentScript.nonce !== '') {
                td_3C.csp_nonce = td_A.currentScript.nonce;
            }
        }
    }
};
td_3C.td_0t = function (td_c) {
    if (td_3C.csp_nonce !== null) {
        td_c.setAttribute('nonce', td_3C.csp_nonce);
        if (td_c.getAttribute('nonce') !== td_3C.csp_nonce) {
            td_c.nonce = td_3C.csp_nonce;
        }
    }
};
td_3C.td_4x = function () {
    try {
        return new ActiveXObject(activeXMode);
    } catch (td_d) {
        return null;
    }
};
td_3C.td_1u = function () {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject) {
        var td_c = [
            'MSXML2.XMLHTTP.3.0',
            'Msxml2.XMLHTTP',
            'Microsoft.XMLHTTP'
        ];
        var td_D = 0;;
        for (; td_D < td_c.length; td_D++) {
            var td_S = td_3C.td_4x(td_c[td_D]);
            if (td_S !== null) {
                return td_S;
            }
        }
    }
    return null;
};
var td_3C = td_3C || {};
function td_3o() {
    'use strict';
    try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return;
        }
        var arg_100 = function (td_Lq) {
            var td_Zj = 0;
            var td_Mt = 0;
            var td_Wy = 0;
            var td_YD = new td_1D();
            var arg_102 = function (td_A1) {
                if (td_A1.kind === 'audioinput') {
                    td_Zj++;
                } else {
                    if (td_A1.kind === 'videoinput') {
                        td_Wy++;
                    } else {
                        if (td_A1.kind === 'audiooutput') {
                            td_Mt++;
                        }
                    }
                }
                var td_Sp = td_A1.kind + ',' + td_A1.label + ',' + td_A1.deviceId;
                var arg_103 = td_Sp + '<br>';
                td_YD.update(arg_103);
            };
            td_Lq.forEach(arg_102);
            var td_aX;
            if (td_Zj !== 0 || td_Mt !== 0 || td_Wy !== 0) {
                td_aX = '(' + td_Zj + ',' + td_Wy + ',' + td_Mt + ',' + td_YD.toString() + ')';
            }
            if (td_aX) {
                var td_ij = '&medh=' + td_aX;
                var td_rG = td_1y + '&jac=1&je=' + td_3C.td_4e(td_ij, td_1N);
                td_5l(td_rG, document);
            }
        };
        var arg_101 = function (td_dt) {
        };
        navigator.mediaDevices.enumerateDevices().then(arg_100, arg_101);
    } catch (td_H6) {
    }
}
var td_3C = td_3C || {};
function td_3l() {
    try {
        var td_hf = td_dJ();
        if (td_hf === 0 || td_hf === -1) {
            return;
        }
        var td_gA = td_hf.gl;
        var td_hu = td_hf.name;
        td_hu += td_gA.getParameter(td_gA.VERSION);
        td_hu += td_gA.getParameter(td_gA.SHADING_LANGUAGE_VERSION);
        td_hu += td_gA.getParameter(td_gA.VENDOR);
        td_hu += td_gA.getParameter(td_gA.RENDERER);
        var td_QX = [];
        try {
            td_QX = td_gA.getSupportedExtensions();
        } catch (td_Va) {
        }
        var td_eW = td_QX.length;
        if (td_eW) {
            var td_iT = '';
            var td_AN = 0;;
            for (; td_AN < td_eW; td_AN++) {
                if (td_iT.length) {
                    td_iT += '; ';
                }
                td_iT += td_QX[td_AN];
            }
            td_hu += td_iT;
        }
        var td_T8;
        var td_Va = td_gA.getExtension('EXT_texture_filter_anisotropic') || td_gA.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || td_gA.getExtension('MOZ_EXT_texture_filter_anisotropic');
        if (td_Va) {
            td_T8 = td_gA.getParameter(td_Va.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            if (td_T8 === 0) {
                td_T8 = 2;
            }
        } else {
            td_T8 = 'Not available';
        }
        td_hu += td_T8;
        return td_hu;
    } catch (td_Va) {
        return null;
    }
}
function td_3K() {
    try {
        var td_lA = td_dJ();
        if (td_lA === 0 || td_lA === -1) {
            return;
        }
        var td_Ec = td_lA.gl;
        if (typeof td_Ec.getExtension !== 'function' || typeof td_Ec.getParameter !== 'function') {
            return null;
        }
        var td_RJ = td_Ec.getExtension('WEBGL_debug_renderer_info');
        if (!td_RJ || typeof td_RJ !== 'object') {
            return null;
        }
        var td_r5 = '';
        var td_Mz = td_Ec.getParameter(td_RJ.UNMASKED_VENDOR_WEBGL);
        if (typeof td_Mz === 'string') {
            td_r5 += '&wglv=' + encodeURIComponent(td_Mz);
        }
        var td_Ph = td_Ec.getParameter(td_RJ.UNMASKED_RENDERER_WEBGL);
        if (typeof td_Ph === 'string') {
            td_r5 += '&wglr=' + encodeURIComponent(td_Ph);
        }
        return td_r5;
    } catch (td_Z4) {
        return null;
    }
}
var td_3C = td_3C || {};
function td_1v() {
    'use strict';
    var td_I6 = [
        [
            'asinh',
            1,
            function (td_kp) {
                return Math.log(td_kp + Math.sqrt(td_kp * td_kp + 1));
            }
        ],
        [
            'atanh',
            0.5,
            function (td_Yx) {
                return Math.log((1 + td_Yx) / (1 - td_Yx)) / 2;
            }
        ],
        [
            'expm1',
            1,
            function (td_JB) {
                return Math.exp(td_JB) - 1;
            }
        ],
        [
            'log1p',
            10,
            function (td_QM) {
                return Math.log(1 + td_QM);
            }
        ],
        [
            'sinh',
            1,
            function (td_pc) {
                var td_FY = Math.exp(td_pc);
                return (td_FY - 1 / td_FY) / 2;
            }
        ],
        [
            'cosh',
            10,
            function (td_QU) {
                var td_qb = Math.exp(td_QU);
                return (td_qb + 1 / td_qb) / 2;
            }
        ],
        [
            'tanh',
            1,
            function (td_Nz) {
                var arg_104 = 2 * td_Nz;
                var td_iS = Math.exp(arg_104);
                return (td_iS - 1) / (td_iS + 1);
            }
        ],
        [
            'tan',
            -1e+300,
            function (td_uz) {
                return Math.tan(-1e+300);
            }
        ],
        [
            'powPI',
            -100,
            function (td_uX) {
                return Math.pow(Math.PI, td_uX);
            }
        ]
    ];
    try {
        var td_em = '';
        var td_Ck = 0;;
        for (; td_Ck < td_I6.length; td_Ck++) {
            var td_p4 = td_I6[td_Ck][0] + '(' + td_I6[td_Ck][1] + '):' + td_I6[td_Ck][2](td_I6[td_Ck][1]);
            td_em += td_p4 + ',';
        }
        var td_T8 = new td_1D();
        return td_T8.hash(td_em);
    } catch (td_fQ) {
    }
    return null;
}
function td_Ty(td_4z) {
    var td_U1 = td_4z.toLowerCase();
    if (td_U1 === 'windows') {
        td_U1 = 'win';
    } else {
        if (td_U1 === 'iphone/ipod' || td_U1 === 'ipad') {
            td_U1 = 'ios';
        }
    }
    this.os_name = td_U1;
    this._eq = function (td_4z) {
        return td_4z === this.os_name;
    };
    this._ne = function (td_4z) {
        return td_4z !== this.os_name;
    };
    this._gt = function (td_4z) {
        return this.os_name > td_4z;
    };
    this._ge = function (td_4z) {
        return this.os_name >= td_4z;
    };
    this._lt = function (td_4z) {
        return this.os_name < td_4z;
    };
    this._le = function (td_4z) {
        return this.os_name <= td_4z;
    };
    this._in = function (td_4z) {
        var td_IJ = null;
        if (td_U1.constructor === String) {
            td_IJ = [td_U1];
        } else {
            td_IJ = td_U1;
        }
        var td_o9;
        td_o9 = 0;
        for (; td_o9 < td_IJ.length; td_o9++) {
            if (this.os_name === td_IJ[td_o9]) {
                return true;
            }
        }
        return false;
    };
    this.getFontsList = function () {
        if (this.os_name === 'mac') {
            return typeof td_2m === 'object' ? td_2m : [];
        }
        if (this.os_name === 'linux') {
            return typeof td_2A === 'object' ? td_2A : [];
        }
        if (this.os_name === 'win') {
            return typeof td_3N === 'object' ? td_3N : [];
        }
        if (this.os_name === 'ios') {
            return typeof td_1B === 'object' ? td_1B : [];
        }
        if (this.os_name === 'android') {
            return typeof td_0G === 'object' ? td_0G : [];
        } else {
            return [];
        }
    };
}
function td_IK(td_1F) {
    var td_p4 = td_1F.toLowerCase();
    if (td_p4 === 'explorer') {
        td_p4 = 'ie';
    }
    this.browser_name = td_p4;
    this._eq = function (td_1F) {
        return td_1F === this.browser_name;
    };
    this._ne = function (td_1F) {
        return td_1F !== this.browser_name;
    };
    this._in = function (td_1F) {
        var td_pz = null;
        if (td_1F.constructor === String) {
            td_pz = [td_1F];
        } else {
            td_pz = td_1F;
        }
        var td_EO;
        td_EO = 0;
        for (; td_EO < td_pz.length; td_EO++) {
            if (this.browser_name === td_pz[td_EO]) {
                return true;
            }
        }
        return false;
    };
}
function td_CD(td_r5) {
    this.version = td_r5;
    this._eq = function (td_sV) {
        return this.version === parseInt(td_sV);
    };
    this._ne = function (td_pG) {
        return this.version !== parseInt(td_pG);
    };
    this._gt = function (td_fi) {
        return this.version > parseInt(td_fi);
    };
    this._ge = function (td_uX) {
        return this.version >= parseInt(td_uX);
    };
    this._lt = function (td_vY) {
        return this.version < parseInt(td_vY);
    };
    this._le = function (td_o3) {
        return this.version <= parseInt(td_o3);
    };
}
function td_n(td_U, td_q, td_B) {
    if (typeof td_B === [][[]] + '' || td_B === null) {
        td_B = 0;
    } else {
        if (td_B < 0) {
            var arg_105 = td_U.length + td_B;
            td_B = Math.max(0, arg_105);
        }
    }
    var td_i = td_B, td_x = td_U.length;;
    for (; td_i < td_x; td_i++) {
        if (td_U[td_i] === td_q) {
            return td_i;
        }
    }
    return -1;
}
function td_X(td_y, td_r, td_l) {
    return td_y.indexOf(td_r, td_l);
}
function td_F(td_j) {
    return td_j.replace(/^\s+|\s+$/g, '');
}
function td_e(td_N) {
    return td_N.trim();
}
function td_5D(td_B) {
    return td_B.trim();
}
function td_1o(td_B, td_c, td_M) {
    return td_B.indexOf(td_c, td_M);
}
function td_Z() {
    return Date.now();
}
function td_J() {
    return new Date().getTime();
}
function td_0L(td_t) {
    return parseFloat(td_t);
}
function td_0f(td_j) {
    return parseInt(td_j);
}
function td_2G(td_z) {
    return isNaN(td_z);
}
function td_4D(td_o) {
    return isFinite(td_o);
}
function td_P() {
    if (typeof Number.parseFloat !== [][[]] + '' && typeof Number.parseInt !== [][[]] + '') {
        td_0L = Number.parseFloat;
        td_0f = Number.parseInt;
    } else {
        if (typeof parseFloat !== [][[]] + '' && typeof parseInt !== [][[]] + '') {
            td_0L = parseFloat;
            td_0f = parseInt;
        } else {
            td_0L = null;
            td_0f = null;
        }
    }
    if (typeof Number.isNaN !== [][[]] + '') {
        td_2G = Number.isNaN;
    } else {
        if (typeof isNaN !== [][[]] + '') {
            td_2G = isNaN;
        } else {
            td_2G = null;
        }
    }
    if (typeof Number.isFinite !== [][[]] + '') {
        td_4D = Number.isFinite;
    } else {
        if (typeof isFinite !== [][[]] + '') {
            td_4D = isFinite;
        } else {
            td_4D = null;
        }
    }
}
function td_k() {
    if (!Array.prototype.indexOf) {
        td_1o = td_n;
    } else {
        td_1o = td_X;
    }
    if (typeof String.prototype.trim !== 'function') {
        td_5D = td_F;
    } else {
        td_5D = td_e;
    }
    if (typeof Date.now === [][[]] + '') {
        td_Z = td_J;
    }
    td_P();
}
function td_1U(td_E) {
    if (typeof document.readyState !== [][[]] + '' && typeof document.readyState !== 'unknown' && document.readyState === 'complete') {
        td_E();
    } else {
        if (typeof document.readyState === [][[]] + '') {
            setTimeout(td_E, 300);
        } else {
            var td_h = 200;
            var td_A;
            if (typeof window !== [][[]] + '' && typeof window !== 'unknown' && window !== null) {
                td_A = window;
            } else {
                td_A = document.body;
            }
            if (td_A.addEventListener) {
                var arg_106 = function () {
                    setTimeout(td_E, td_h);
                };
                td_A.addEventListener('load', arg_106, false);
            } else {
                if (td_A.attachEvent) {
                    var arg_107 = function () {
                        setTimeout(td_E, td_h);
                    };
                    td_A.attachEvent('onload', arg_107, false);
                } else {
                    var td_Y = td_A.onload;
                    td_A.onload = new function () {
                        var td_N = true;
                        if (td_Y !== null && typeof td_Y === 'function') {
                            td_N = td_Y();
                        }
                        setTimeout(td_E, td_h);
                        td_A.onload = td_Y;
                        return td_N;
                    }();
                }
            }
        }
    }
}
function td_b() {
    if (typeof td_0Y !== [][[]] + '') {
        td_0Y();
    }
    if (typeof td_2d !== [][[]] + '') {
        td_2d();
    }
    if (typeof td_0R !== [][[]] + '') {
        td_0R();
    }
    if (typeof td_5k !== [][[]] + '') {
        if (typeof td_4a !== [][[]] + '' && td_4a !== null) {
            td_5k(td_4a, false);
        }
        if (typeof td_0s !== [][[]] + '' && td_0s !== null) {
            td_5k(td_0s, true);
        }
    }
    if (typeof tmx_link_scan !== [][[]] + '') {
        tmx_link_scan();
    }
    if (typeof td_2X !== [][[]] + '') {
        td_2X();
    }
    if (typeof td_3B !== [][[]] + '') {
        td_3B.start();
    }
    if (typeof td_5s !== [][[]] + '') {
        td_5s.start();
    }
}
function td_4l() {
    try {
        td_3C.td_2W();
        td_3C.td_0Q(document);
        td_5y.td_0n();
        td_k();
        td_1U(td_b);
    } catch (td_z) {
    }
}
var td_4L = {};
td_4L.td_1x = function (td_l, td_X) {
    if (typeof td_X === [][[]] + '') {
        td_X = true;
    } else {
        td_X = td_X;
    }
    if (td_X) {
        td_l = td_4K.td_5F(td_l);
    }
    var td_w = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
    ];
    td_l += String.fromCharCode(128);
    var td_r = td_l.length / 4 + 2;
    var arg_108 = td_r / 16;
    var td_B = Math.ceil(arg_108);
    var td_C = new Array(td_B);
    var td_E = 0;;
    for (; td_E < td_B; td_E++) {
        td_C[td_E] = new Array(16);
        var td_c = 0;;
        for (; td_c < 16; td_c++) {
            var arg_109 = td_E * 64 + td_c * 4;
            var arg_110 = td_E * 64 + td_c * 4 + 1;
            var arg_111 = td_E * 64 + td_c * 4 + 2;
            var arg_112 = td_E * 64 + td_c * 4 + 3;
            td_C[td_E][td_c] = td_l.charCodeAt(arg_109) << 24 | td_l.charCodeAt(arg_110) << 16 | td_l.charCodeAt(arg_111) << 8 | td_l.charCodeAt(arg_112);
        }
    }
    td_C[td_B - 1][14] = (td_l.length - 1) * 8 / Math.pow(2, 32);
    td_C[td_B - 1][14] = Math.floor(td_C[td_B - 1][14]);
    td_C[td_B - 1][15] = (td_l.length - 1) * 8 & 4294967295;
    var td_q = 1732584193;
    var td_b = 4023233417;
    var td_R = 2562383102;
    var td_J = 271733878;
    var td_D = 3285377520;
    var td_O = new Array(80);
    var td_d;
    var td_z;
    var td_N;
    var td_i;
    var td_j;
    var td_E = 0;;
    for (; td_E < td_B; td_E++) {
        var td_t = 0;;
        for (; td_t < 16; td_t++) {
            td_O[td_t] = td_C[td_E][td_t];
        }
        var td_t = 16;;
        for (; td_t < 80; td_t++) {
            var arg_113 = td_O[td_t - 3] ^ td_O[td_t - 8] ^ td_O[td_t - 14] ^ td_O[td_t - 16];
            td_O[td_t] = td_4L.td_1C(arg_113, 1);
        }
        td_d = td_q;
        td_z = td_b;
        td_N = td_R;
        td_i = td_J;
        td_j = td_D;
        var td_t = 0;;
        for (; td_t < 80; td_t++) {
            var arg_114 = td_t / 20;
            var td_a = Math.floor(arg_114);
            var td_F = td_4L.td_1C(td_d, 5) + td_4L.f(td_a, td_z, td_N, td_i) + td_j + td_w[td_a] + td_O[td_t] & 4294967295;
            td_j = td_i;
            td_i = td_N;
            td_N = td_4L.td_1C(td_z, 30);
            td_z = td_d;
            td_d = td_F;
        }
        td_q = td_q + td_d & 4294967295;
        td_b = td_b + td_z & 4294967295;
        td_R = td_R + td_N & 4294967295;
        td_J = td_J + td_i & 4294967295;
        td_D = td_D + td_j & 4294967295;
    }
    return td_4L.td_3e(td_q) + td_4L.td_3e(td_b) + td_4L.td_3e(td_R) + td_4L.td_3e(td_J) + td_4L.td_3e(td_D);
};
td_4L.f = function (td_D, td_Y, td_q, td_d) {
    switch (td_D) {
    case 0: {
            return td_Y & td_q ^ ~td_Y & td_d;
        }
    case 1: {
            return td_Y ^ td_q ^ td_d;
        }
    case 2: {
            return td_Y & td_q ^ td_Y & td_d ^ td_q & td_d;
        }
    case 3: {
            return td_Y ^ td_q ^ td_d;
        }
    }
};
td_4L.td_1C = function (td_E, td_y) {
    return td_E << td_y | td_E >>> 32 - td_y;
};
td_4L.td_3e = function (td_r) {
    var td_j = '';
    var td_c;
    var td_M = 7;;
    for (; td_M >= 0; td_M--) {
        td_c = td_r >>> td_M * 4 & 15;
        td_j += td_c.toString(16);
    }
    return td_j;
};
var td_4K = {};
td_4K.td_5F = function (td_P) {
    var arg_115 = function (td_k) {
        var td_O = td_k.charCodeAt(0);
        return String.fromCharCode(192 | td_O >> 6, 128 | td_O & 63);
    };
    var td_t = td_P.replace(/[\u0080-\u07ff]/g, arg_115);
    var arg_116 = function (td_y) {
        var td_d = td_y.charCodeAt(0);
        return String.fromCharCode(224 | td_d >> 12, 128 | td_d >> 6 & 63, 128 | td_d & 63);
    };
    td_t = td_t.replace(/[\u0800-\uffff]/g, arg_116);
    return td_t;
};
function td_1g(td_Z) {
    return td_4L.td_1x(td_Z, true);
}
var td_3C = td_3C || {};
function td_dJ() {
    if (!!window.WebGLRenderingContext) {
        var td_Gd = document.createElement('canvas');
        var td_qq = [
            'webgl',
            'experimental-webgl',
            'moz-webgl',
            'webkit-3d'
        ];
        var td_H5 = 0;;
        for (; td_H5 < 4; td_H5++) {
            try {
                var td_se = td_Gd.getContext(td_qq[td_H5]);
                if (td_se && typeof td_se.getParameter === 'function') {
                    return {
                        name: td_qq[td_H5],
                        gl: td_se
                    };
                }
            } catch (td_n8) {
            }
        }
        return -1;
    }
    return 0;
}
function td_Iv(td_V1) {
    var td_s0 = null;
    if (td_V1.constructor == String) {
        td_s0 = [td_V1];
    } else {
        td_s0 = td_V1;
    }
    var td_PO = 'false';
    var td_ft = 'false';
    var td_Fj;
    td_Fj = 0;
    for (; td_Fj < td_s0.length; td_Fj++) {
        var td_Ne = td_Ma[td_s0[td_Fj]];
        if (td_Ne && td_Ne.enabledPlugin) {
            var td_S9 = td_Ne.enabledPlugin;
            if (td_S9.name) {
                td_PO = td_S9.name;
            } else {
                td_PO = 'true';
            }
            td_ft = td_S9.description;
            break;
        }
    }
    return [
        td_PO,
        td_ft
    ];
}
function td_c4() {
    var td_PP = 'false';
    var arg_117 = [
        'application/x-shockwave-flash',
        'application/futuresplash'
    ];
    var td_vJ = td_Iv(arg_117);
    var td_mU = td_vJ[0];
    var td_tp = td_vJ[1];
    if (td_mU !== 'false' && td_mU !== 'true' && /Flash/i.test(td_mU)) {
        td_PP = 'true';
    }
    if (td_PP === 'true' && td_tp) {
        var td_pP = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_tp);
        if (td_pP) {
            td_PP = td_pP[0];
        }
    }
    return td_PP;
}
function td_sC() {
    var td_uc = 'false';
    var arg_118 = [
        'application/x-mplayer2',
        'application/asx'
    ];
    var td_dy = td_Iv(arg_118);
    var td_a3 = td_dy[0];
    if (td_a3 !== 'false' && td_a3 !== 'true' && /Windows.*Media.*Firefox Plugin.*/i.test(td_a3)) {
        td_uc = 'true';
    }
    return td_uc;
}
function td_Lm() {
    var td_C9 = 'false';
    var arg_119 = ['application/pdf'];
    var td_pS = td_Iv(arg_119);
    var td_jG = td_pS[0];
    var td_D7 = td_pS[1];
    if (td_jG !== 'false' && td_jG !== 'true' && /Adobe Acrobat/i.test(td_jG)) {
        td_C9 = 'true';
    }
    if (td_C9 === 'true' && td_D7) {
        var td_PZ = /[\d][\d\.\_,-]*/.exec(td_D7);
        if (td_PZ) {
            td_C9 = td_PZ[0];
        } else {
            td_C9 = '8.0/later';
        }
    }
    return td_C9;
}
function td_qk() {
    var td_Sm = 'false';
    if (navigator.platform && /linux/i.test(navigator.platform)) {
        td_Sm = 'false';
    } else {
        var arg_120 = [
            'video/quicktime',
            'application/x-quicktimeplayer',
            'image/x-macpaint',
            'image/x-quicktime'
        ];
        var td_cP = td_Iv(arg_120);
        var td_Qi = td_cP[0];
        if (td_Qi !== 'false' && td_Qi !== 'true' && /QuickTime.*(Plug-in|Plugin).*/i.test(td_Qi)) {
            td_Sm = 'true';
            var td_IW = /[\d][\d\.\_,-]*/.exec(td_Qi);
            if (td_IW) {
                td_Sm = td_IW[0];
            }
        }
    }
    return td_Sm;
}
function td_x5() {
    var td_OF = 'false';
    var arg_121 = ['application/x-director'];
    var td_wy = td_Iv(arg_121);
    var td_qQ = td_wy[0];
    var td_ko = td_wy[1];
    if (td_qQ !== 'false' && td_qQ !== 'true' && /Shockwave for Director/i.test(td_qQ)) {
        td_OF = 'true';
    }
    if (td_OF === 'true' && td_ko) {
        var td_o6 = /[\d][\d\.\_,-]*/.exec(td_ko);
        if (td_o6) {
            td_OF = td_o6[0];
        }
    }
    return td_OF;
}
function td_Mb() {
    var td_Py = 'false';
    var arg_122 = ['application/vnd.rn-realplayer-javascript'];
    var td_BE = td_Iv(arg_122);
    var td_bv = td_BE[0];
    var td_Xq = td_BE[1];
    if (td_bv !== 'false' && td_bv !== 'true' && /RealPlayer.*Version.*/i.test(td_bv)) {
        td_Py = 'true';
    }
    if (td_Py === 'true' && td_Xq) {
        var td_ao = /[\d][\d\.\_,-]*/.exec(td_Xq);
        if (td_ao) {
            td_Py = td_ao[0];
        } else {
            td_Py = '5.0';
        }
    }
    return td_Py;
}
function td_AS() {
    var td_Xa = 'false';
    var arg_123 = ['application/x-vlc-plugin'];
    var td_Ji = td_Iv(arg_123);
    var td_mb = td_Ji[0];
    var td_gT = td_Ji[1];
    if (td_mb !== 'false' && td_mb !== 'true' && /VLC.*(Plug-in|Plugin).*/i.test(td_mb)) {
        td_Xa = 'true';
    }
    if (td_Xa === 'true' && td_gT) {
        var td_cW = /(Version) ([\d][\d\.]*[a-z]*)/.exec(td_gT);
        if (td_cW) {
            td_Xa = td_cW[2];
        }
    }
    return td_Xa;
}
function td_OP() {
    var td_Wb = 'false';
    var arg_124 = ['application/x-devalvrx'];
    var td_Sj = td_Iv(arg_124);
    var td_Cp = td_Sj[0];
    var td_DO = td_Sj[1];
    if (td_Cp !== 'false' && td_Cp !== 'true' && /DevalVR/i.test(td_Cp)) {
        td_Wb = 'true';
    }
    if (td_Wb === 'true' && td_DO) {
        var td_HO = /(Plugin) ([\d][\d\.\,]*)/.exec(td_DO);
        if (td_HO) {
            td_Wb = td_HO[2];
        }
    }
    return td_Wb;
}
function td_FG() {
    var td_Sq = 'false';
    var arg_125 = [
        'image/svg-xml',
        'image/svg+xml'
    ];
    var td_RT = td_Iv(arg_125);
    var td_yx = td_RT[0];
    var td_Xq = td_RT[1];
    if (td_yx !== 'false' && td_yx !== 'true' && /SVG Viewer/i.test(td_yx)) {
        td_Sq = 'true';
    }
    if (td_Sq === 'true' && td_Xq) {
        var td_n0 = /[\d][\d\.]*/.exec(td_Xq);
        if (td_n0) {
            td_Sq = td_n0[0];
        }
    }
    return td_Sq;
}
function td_qZ() {
    var td_aw = 'false';
    var arg_126 = [
        'application/x-java-applet',
        'application/x-java-vm',
        'application/x-java-bean'
    ];
    var td_wE = td_Iv(arg_126);
    var td_n9 = td_wE[0];
    var td_p0 = td_wE[1];
    if (td_n9 !== 'false' && td_n9 !== 'true' && /Java/i.test(td_n9)) {
        td_aw = 'true';
    }
    if (td_aw === 'true' && td_p0) {
        var td_IF = /[\d][\d\._]*/.exec(td_p0);
        if (td_IF) {
            td_aw = td_IF[0];
        }
    }
    return td_aw;
}
function td_BS(td_yr, td_f9) {
    var td_zG = null;
    var td_gq = false;
    try {
        td_zG = new ActiveXObject(td_yr);
        td_gq = true;
    } catch (td_gT) {
    }
    if (typeof td_f9 !== [][[]] + '') {
        return td_gq;
    }
    return td_zG;
}
function td_x2() {
    var td_L9 = 'ShockwaveFlash.ShockwaveFlash';
    var td_R9;
    var td_wL = null;
    var td_gT = null;
    var td_X9 = null;
    var td_bH = 15;
    var td_a5 = 2;
    td_R9 = td_bH;
    for (; td_R9 > td_a5; td_R9--) {
        var arg_127 = td_L9 + '.' + td_R9;
        td_gT = td_BS(arg_127);
        if (td_gT) {
            td_wL = td_R9.toString();
            break;
        }
    }
    if (td_wL === '6') {
        try {
            td_gT.AllowScriptAccess = 'always';
        } catch (td_lG) {
            td_X9 = '6,0,21,0';
        }
    } else {
        if (td_gT) {
            try {
                td_X9 = td_gT.GetVariable('$version');
                var td_VL = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_X9);
                if (td_VL) {
                    td_X9 = td_VL[0];
                } else {
                    td_X9 = 'true';
                }
            } catch (td_lG) {
                td_X9 = 'true';
            }
        }
    }
    if (!td_X9 && td_wL) {
        td_X9 = td_wL;
    }
    if (!td_X9) {
        td_X9 = 'false';
    }
    return td_X9;
}
function td_ye() {
    var td_PQ = 'wmplayer.ocx';
    var td_q6 = 'false';
    var td_yc = td_BS(td_PQ);
    if (td_yc) {
        td_q6 = td_yc.versionInfo;
    }
    return td_q6;
}
function td_lv() {
    var td_pG = 'PDF.pdfCtrl';
    var td_rL = 'AcroPDF.PDF.1';
    var td_kS;
    var td_bU = 'false';
    var td_XC = td_BS(td_rL);
    if (!td_XC) {
        var td_CR = 10;
        var td_GV = 1;
        td_kS = td_CR;
        for (; td_kS > td_GV; td_kS--) {
            var arg_128 = td_pG + '.' + td_kS;
            td_XC = td_BS(arg_128);
            if (td_XC) {
                td_bU = td_bU.toString();
                break;
            }
        }
        if (!td_XC) {
            var arg_129 = td_pG + '.1';
            td_XC = td_BS(arg_129);
            if (td_XC) {
                td_bU = '4.0';
            }
        }
    } else {
        td_bU = '7.0/later';
    }
    return td_bU;
}
function td_of() {
    var td_XL = 'QuickTime.QuickTime';
    var td_rq = 'false';
    var td_Hz = null;
    try {
        td_Hz = td_BS(td_XL);
    } catch (td_aM) {
    }
    if (td_Hz) {
        if (td_Hz.QuickTimeVersion) {
            td_rq = td_Hz.QuickTimeVersion.toString(16);
            td_rq = td_rq.charAt(0) + '.' + td_rq.charAt(1) + '.' + td_rq.charAt(2);
        } else {
            td_rq = 'true';
        }
    }
    return td_rq;
}
function td_ri() {
    var td_Pr = 'SWCtl.SWCtl';
    var td_y8 = 'false';
    var td_FV = null;
    var td_hm;
    try {
        td_FV = td_BS(td_Pr).ShockwaveVersion('');
    } catch (td_hm) {
    }
    if (typeof td_FV === 'string' && td_FV.length > 0) {
        td_y8 = td_FV;
    } else {
        var arg_130 = td_Pr + '.8';
        if (td_BS(arg_130, 1)) {
            td_y8 = '8';
        } else {
            var arg_131 = td_Pr + '.7';
            if (td_BS(arg_131, 1)) {
                td_y8 = '7';
            } else {
                var arg_132 = td_Pr + '.1';
                if (td_BS(arg_132, 1)) {
                    td_y8 = '6';
                }
            }
        }
    }
    return td_y8;
}
function td_1z() {
    var td_J6 = 0;
    var td_OC;
    var td_Lp = 'false';
    var td_ZH = 'false';
    var td_gM = 'false';
    var td_EF = 'false';
    var td_n6 = 'false';
    var td_xZ = 'false';
    var td_PR = 'false';
    var td_nU = 'false';
    var td_xA = 'false';
    var td_Kz = 'false';
    if (td_Ma && td_Ma.length) {
        td_J6 = td_Ma.length;
    }
    if (window.ActiveXObject || 'ActiveXObject' in window) {
        if (td_J6 > 0) {
            td_Lp = td_c4();
        }
        if (td_Lp === 'false') {
            td_Lp = td_x2();
        }
        td_ZH = td_ye();
        td_gM = td_lv();
        td_EF = td_of();
        td_n6 = td_ri();
    } else {
        if (td_J6 > 0) {
            td_Lp = td_c4();
            td_ZH = td_sC();
            td_gM = td_Lm();
            td_EF = td_qk();
            td_n6 = td_x5();
            td_xZ = td_Mb();
            td_PR = td_AS();
            td_nU = td_OP();
            td_xA = td_FG();
            td_Kz = td_qZ();
        }
    }
    td_OC = 'plugin_flash^' + td_Lp + '!';
    td_OC += 'plugin_windows_media_player^' + td_ZH + '!';
    td_OC += 'plugin_adobe_acrobat^' + td_gM + '!';
    td_OC += 'plugin_quicktime^' + td_EF + '!';
    td_OC += 'plugin_shockwave^' + td_n6 + '!';
    td_OC += 'plugin_realplayer^' + td_xZ + '!';
    td_OC += 'plugin_vlc_player^' + td_PR + '!';
    td_OC += 'plugin_devalvr^' + td_nU + '!';
    td_OC += 'plugin_svg_viewer^' + td_xA + '!';
    td_OC += 'plugin_java^' + td_Kz;
    return td_OC;
}
var td_3C = td_3C || {};
if (typeof td_3C.td_3A === [][[]] + '') {
    td_3C.td_3A = [];
}
function td_5C(td_Fa) {
    try {
        if (window.localStorage) {
            var td_c1 = null;
            var td_yu = null;
            var td_Rw = window.localStorage.getItem('ed73f20edbf2b73');
            if (td_Rw !== null) {
                var td_qv = td_Rw.split('_');
                if (td_qv.length === 2) {
                    var td_fv = td_qv[1];
                    if (td_fv < td_Z()) {
                        window.localStorage.setItem('ed73f20edbf2b73', td_1P);
                        td_c1 = td_1P.split('_')[0];
                        td_yu = td_qv[0];
                    } else {
                        td_c1 = td_qv[0];
                    }
                } else {
                    if (td_qv.length === 1) {
                        var arg_133 = td_qv[0] + '_' + td_1P.split('_')[1];
                        window.localStorage.setItem('ed73f20edbf2b73', arg_133);
                        td_c1 = td_qv[0];
                    } else {
                        window.localStorage.setItem('ed73f20edbf2b73', td_1P);
                        td_c1 = td_1P.split('_')[0];
                    }
                }
            } else {
                window.localStorage.setItem('ed73f20edbf2b73', td_1P);
                td_c1 = td_1P.split('_')[0];
            }
            var td_Zk = '';
            if (td_yu !== null) {
                td_Zk = '&la_old=' + td_yu;
            }
            var td_IJ = td_5j + td_Zk;
            if (typeof td_Fa !== [][[]] + '' && td_Fa === true) {
                var arg_134 = 'lsb=' + td_c1;
                td_IJ += '&jf=' + td_3C.td_4e(arg_134, td_1N);
            } else {
                td_Fa = false;
                var arg_135 = 'lsa=' + td_c1;
                td_IJ += '&jb=' + td_3C.td_4e(arg_135, td_1N);
            }
            td_5l(td_IJ, document);
            if (typeof td_2E !== [][[]] + '') {
                td_2E(td_Fa);
            }
            return td_IJ;
        }
    } catch (td_tJ) {
    }
}
function td_0P() {
    td_3C.td_2W();
    td_3C.td_0Q(document);
    td_k();
    td_5C(true);
}
td_3C.td_3A.push(function () {
    td_5j = 'https://img9.target.com/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=91b852ea29d63d72';
    td_1N = '1068138485063';
    td_1P = '16466620c5ce475b8a4eaef06cee5cc8_1777133889988';
});
td_1D = function () {
    var td_D = 'input is invalid type';
    var td_y = typeof window === 'object';
    var td_N = null;
    if (td_y) {
        td_N = window;
    } else {
        td_N = {};
    }
    if (td_N.JS_SHA256_NO_WINDOW) {
        td_y = false;
    }
    var td_t = !td_N.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== [][[]] + '';
    var td_A = '0123456789abcdef'.split('');
    var td_w = [
        -2147483648,
        8388608,
        32768,
        128
    ];
    var td_I = [
        24,
        16,
        8,
        0
    ];
    var td_B = [
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
    var td_O = [];
    if (td_N.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function (td_r) {
            return Object.prototype.toString.call(td_r) === '[object Array]';
        };
    }
    if (td_t && (td_N.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function (td_a) {
            return typeof td_a === 'object' && td_a.buffer && td_a.buffer.constructor === ArrayBuffer;
        };
    }
    instance = new td_z(false, false);
    this.update = function (td_h) {
        instance.update(td_h);
    };
    this.hash = function (td_d) {
        instance.update(td_d);
        return instance.toString();
    };
    this.toString = function () {
        return instance.toString();
    };
    function td_z() {
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
    td_z.prototype.update = function (td_o) {
        if (this.finalized) {
            return;
        }
        var td_Q;
        var td_R = typeof td_o;
        if (td_R !== 'string') {
            if (td_R === 'object') {
                if (td_o === null) {
                    throw new Error(td_D);
                } else {
                    if (td_t && td_o.constructor === ArrayBuffer) {
                        td_o = new Uint8Array(td_o);
                    } else {
                        if (!Array.isArray(td_o)) {
                            if (!td_t || !ArrayBuffer.isView(td_o)) {
                                throw new Error(td_D);
                            }
                        }
                    }
                }
            } else {
                throw new Error(td_D);
            }
            td_Q = true;
        }
        var td_H;
        var td_a = 0;
        var td_i;
        var td_q = td_o.length;
        var td_d = this.blocks;
        while (td_a < td_q) {
            if (this.hashed) {
                this.hashed = false;
                td_d[0] = this.block;
                td_d[16] = td_d[1] = td_d[2] = td_d[3] = td_d[4] = td_d[5] = td_d[6] = td_d[7] = td_d[8] = td_d[9] = td_d[10] = td_d[11] = td_d[12] = td_d[13] = td_d[14] = td_d[15] = 0;
            }
            if (td_Q) {
                td_i = this.start;
                for (; td_a < td_q && td_i < 64; ++td_a) {
                    td_d[td_i >> 2] |= td_o[td_a] << td_I[td_i++ & 3];
                }
            } else {
                td_i = this.start;
                for (; td_a < td_q && td_i < 64; ++td_a) {
                    td_H = td_o.charCodeAt(td_a);
                    if (td_H < 128) {
                        td_d[td_i >> 2] |= td_H << td_I[td_i++ & 3];
                    } else {
                        if (td_H < 2048) {
                            td_d[td_i >> 2] |= (192 | td_H >> 6) << td_I[td_i++ & 3];
                            td_d[td_i >> 2] |= (128 | td_H & 63) << td_I[td_i++ & 3];
                        } else {
                            if (td_H < 55296 || td_H >= 57344) {
                                td_d[td_i >> 2] |= (224 | td_H >> 12) << td_I[td_i++ & 3];
                                td_d[td_i >> 2] |= (128 | td_H >> 6 & 63) << td_I[td_i++ & 3];
                                td_d[td_i >> 2] |= (128 | td_H & 63) << td_I[td_i++ & 3];
                            } else {
                                td_H = 65536 + ((td_H & 1023) << 10 | td_o.charCodeAt(++td_a) & 1023);
                                td_d[td_i >> 2] |= (240 | td_H >> 18) << td_I[td_i++ & 3];
                                td_d[td_i >> 2] |= (128 | td_H >> 12 & 63) << td_I[td_i++ & 3];
                                td_d[td_i >> 2] |= (128 | td_H >> 6 & 63) << td_I[td_i++ & 3];
                                td_d[td_i >> 2] |= (128 | td_H & 63) << td_I[td_i++ & 3];
                            }
                        }
                    }
                }
            }
            this.lastByteIndex = td_i;
            this.bytes += td_i - this.start;
            if (td_i >= 64) {
                this.block = td_d[16];
                this.start = td_i - 64;
                this.hash();
                this.hashed = true;
            } else {
                this.start = td_i;
            }
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };
    td_z.prototype.finalize = function () {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var td_d = this.blocks;
        var td_i = this.lastByteIndex;
        td_d[16] = this.block;
        td_d[td_i >> 2] |= td_w[td_i & 3];
        this.block = td_d[16];
        if (td_i >= 56) {
            if (!this.hashed) {
                this.hash();
            }
            td_d[0] = this.block;
            td_d[16] = td_d[1] = td_d[2] = td_d[3] = td_d[4] = td_d[5] = td_d[6] = td_d[7] = td_d[8] = td_d[9] = td_d[10] = td_d[11] = td_d[12] = td_d[13] = td_d[14] = td_d[15] = 0;
        }
        td_d[14] = this.hBytes << 3 | this.bytes >>> 29;
        td_d[15] = this.bytes << 3;
        this.hash();
    };
    td_z.prototype.hash = function () {
        var td_Cx = this.h0;
        var td_ft = this.h1;
        var td_az = this.h2;
        var td_ht = this.h3;
        var td_Ed = this.h4;
        var td_o = this.h5;
        var td_a = this.h6;
        var td_q = this.h7;
        var td_i1 = this.blocks;
        var td_R;
        var td_Y;
        var td_h;
        var td_r;
        var td_Q;
        var td_S;
        var td_H;
        var td_aa;
        var td_x8;
        var td_i;
        var td_d;
        td_R = 16;
        for (; td_R < 64; ++td_R) {
            td_Q = td_i1[td_R - 15];
            td_Y = (td_Q >>> 7 | td_Q << 25) ^ (td_Q >>> 18 | td_Q << 14) ^ td_Q >>> 3;
            td_Q = td_i1[td_R - 2];
            td_h = (td_Q >>> 17 | td_Q << 15) ^ (td_Q >>> 19 | td_Q << 13) ^ td_Q >>> 10;
            td_i1[td_R] = td_i1[td_R - 16] + td_Y + td_i1[td_R - 7] + td_h << 0;
        }
        td_d = td_ft & td_az;
        td_R = 0;
        for (; td_R < 64; td_R += 4) {
            if (this.first) {
                td_aa = 704751109;
                td_Q = td_i1[0] - 210244248;
                td_q = td_Q - 1521486534 << 0;
                td_ht = td_Q + 143694565 << 0;
                this.first = false;
            } else {
                td_Y = (td_Cx >>> 2 | td_Cx << 30) ^ (td_Cx >>> 13 | td_Cx << 19) ^ (td_Cx >>> 22 | td_Cx << 10);
                td_h = (td_Ed >>> 6 | td_Ed << 26) ^ (td_Ed >>> 11 | td_Ed << 21) ^ (td_Ed >>> 25 | td_Ed << 7);
                td_aa = td_Cx & td_ft;
                td_r = td_aa ^ td_Cx & td_az ^ td_d;
                td_H = td_Ed & td_o ^ ~td_Ed & td_a;
                td_Q = td_q + td_h + td_H + td_B[td_R] + td_i1[td_R];
                td_S = td_Y + td_r;
                td_q = td_ht + td_Q << 0;
                td_ht = td_Q + td_S << 0;
            }
            td_Y = (td_ht >>> 2 | td_ht << 30) ^ (td_ht >>> 13 | td_ht << 19) ^ (td_ht >>> 22 | td_ht << 10);
            td_h = (td_q >>> 6 | td_q << 26) ^ (td_q >>> 11 | td_q << 21) ^ (td_q >>> 25 | td_q << 7);
            td_x8 = td_ht & td_Cx;
            td_r = td_x8 ^ td_ht & td_ft ^ td_aa;
            td_H = td_q & td_Ed ^ ~td_q & td_o;
            td_Q = td_a + td_h + td_H + td_B[td_R + 1] + td_i1[td_R + 1];
            td_S = td_Y + td_r;
            td_a = td_az + td_Q << 0;
            td_az = td_Q + td_S << 0;
            td_Y = (td_az >>> 2 | td_az << 30) ^ (td_az >>> 13 | td_az << 19) ^ (td_az >>> 22 | td_az << 10);
            td_h = (td_a >>> 6 | td_a << 26) ^ (td_a >>> 11 | td_a << 21) ^ (td_a >>> 25 | td_a << 7);
            td_i = td_az & td_ht;
            td_r = td_i ^ td_az & td_Cx ^ td_x8;
            td_H = td_a & td_q ^ ~td_a & td_Ed;
            td_Q = td_o + td_h + td_H + td_B[td_R + 2] + td_i1[td_R + 2];
            td_S = td_Y + td_r;
            td_o = td_ft + td_Q << 0;
            td_ft = td_Q + td_S << 0;
            td_Y = (td_ft >>> 2 | td_ft << 30) ^ (td_ft >>> 13 | td_ft << 19) ^ (td_ft >>> 22 | td_ft << 10);
            td_h = (td_o >>> 6 | td_o << 26) ^ (td_o >>> 11 | td_o << 21) ^ (td_o >>> 25 | td_o << 7);
            td_d = td_ft & td_az;
            td_r = td_d ^ td_ft & td_ht ^ td_i;
            td_H = td_o & td_a ^ ~td_o & td_q;
            td_Q = td_Ed + td_h + td_H + td_B[td_R + 3] + td_i1[td_R + 3];
            td_S = td_Y + td_r;
            td_Ed = td_Cx + td_Q << 0;
            td_Cx = td_Q + td_S << 0;
        }
        this.h0 = this.h0 + td_Cx << 0;
        this.h1 = this.h1 + td_ft << 0;
        this.h2 = this.h2 + td_az << 0;
        this.h3 = this.h3 + td_ht << 0;
        this.h4 = this.h4 + td_Ed << 0;
        this.h5 = this.h5 + td_o << 0;
        this.h6 = this.h6 + td_a << 0;
        this.h7 = this.h7 + td_q << 0;
    };
    td_z.prototype.hex = function () {
        this.finalize();
        var td_o = this.h0;
        var td_H = this.h1;
        var td_d = this.h2;
        var td_Y = this.h3;
        var td_S = this.h4;
        var td_Q = this.h5;
        var td_R = this.h6;
        var td_h = this.h7;
        var td_q = td_A[td_o >> 28 & 15] + td_A[td_o >> 24 & 15] + td_A[td_o >> 20 & 15] + td_A[td_o >> 16 & 15] + td_A[td_o >> 12 & 15] + td_A[td_o >> 8 & 15] + td_A[td_o >> 4 & 15] + td_A[td_o & 15] + td_A[td_H >> 28 & 15] + td_A[td_H >> 24 & 15] + td_A[td_H >> 20 & 15] + td_A[td_H >> 16 & 15] + td_A[td_H >> 12 & 15] + td_A[td_H >> 8 & 15] + td_A[td_H >> 4 & 15] + td_A[td_H & 15] + td_A[td_d >> 28 & 15] + td_A[td_d >> 24 & 15] + td_A[td_d >> 20 & 15] + td_A[td_d >> 16 & 15] + td_A[td_d >> 12 & 15] + td_A[td_d >> 8 & 15] + td_A[td_d >> 4 & 15] + td_A[td_d & 15] + td_A[td_Y >> 28 & 15] + td_A[td_Y >> 24 & 15] + td_A[td_Y >> 20 & 15] + td_A[td_Y >> 16 & 15] + td_A[td_Y >> 12 & 15] + td_A[td_Y >> 8 & 15] + td_A[td_Y >> 4 & 15] + td_A[td_Y & 15] + td_A[td_S >> 28 & 15] + td_A[td_S >> 24 & 15] + td_A[td_S >> 20 & 15] + td_A[td_S >> 16 & 15] + td_A[td_S >> 12 & 15] + td_A[td_S >> 8 & 15] + td_A[td_S >> 4 & 15] + td_A[td_S & 15] + td_A[td_Q >> 28 & 15] + td_A[td_Q >> 24 & 15] + td_A[td_Q >> 20 & 15] + td_A[td_Q >> 16 & 15] + td_A[td_Q >> 12 & 15] + td_A[td_Q >> 8 & 15] + td_A[td_Q >> 4 & 15] + td_A[td_Q & 15] + td_A[td_R >> 28 & 15] + td_A[td_R >> 24 & 15] + td_A[td_R >> 20 & 15] + td_A[td_R >> 16 & 15] + td_A[td_R >> 12 & 15] + td_A[td_R >> 8 & 15] + td_A[td_R >> 4 & 15] + td_A[td_R & 15];
        td_q += td_A[td_h >> 28 & 15] + td_A[td_h >> 24 & 15] + td_A[td_h >> 20 & 15] + td_A[td_h >> 16 & 15] + td_A[td_h >> 12 & 15] + td_A[td_h >> 8 & 15] + td_A[td_h >> 4 & 15] + td_A[td_h & 15];
        return td_q;
    };
    td_z.prototype.toString = td_z.prototype.hex;
};
var td_3C = td_3C || {};
td_3C.td_3u = function () {
};
td_3C.hasDebug = false;
td_3C.trace = function () {
};
td_3C.hasTrace = false;
var td_3C = td_3C || {};
function td_2B() {
    var td_AH = 20;
    var td_D3 = 10;
    var td_rk = 10;
    var td_jM = 0;
    var td_uv = null;
    var td_k0 = function () {
        return window.performance.now() * 1000;
    };
    var td_qy = function () {
        return performance.now().toFixed(3) / 1000;
    };
    var td_AC = function () {
        return (td_Z() - td_jM).toFixed(3) * 1000;
    };
    function td_bH() {
        var td_ED = 1;
        var td_AA = td_uv();
        var td_gn = td_uv();
        while (td_gn === td_AA) {
            td_gn = td_uv();
            ++td_ED;
        }
        var td_vd = (td_gn - td_AA) * 1000000;
        var td_Qn = td_ED / td_vd;
        if (td_Qn < 1e-8) {
            return 1e-8;
        }
        return td_Qn;
    }
    function td_Fz() {
        var td_kA = 0;
        var td_Yp = 0;
        try {
            var td_PB = td_bH();
            td_kA = td_uv();
            td_Yp = td_uv() - td_kA;
            if (td_Yp === 0 || td_Yp < 1e-8) {
                td_Yp = td_PB;
            }
            var td_nM = 0;;
            for (; td_nM < td_AH; ++td_nM) {
                var arg_136 = td_uv() - td_kA;
                td_Yp = td_PF(td_Yp, arg_136);
            }
            return Math.round(1 / td_Yp);
        } catch (td_NI) {
            return -1;
        }
    }
    function td_PF(td_Oy, td_Lv) {
        try {
            if (td_Oy < 1e-8) {
                return td_Lv;
            }
            if (td_Oy < td_Lv) {
                return td_PF(td_Lv - Math.floor(td_Lv / td_Oy) * td_Oy, td_Oy);
            } else {
                if (td_Oy === td_Lv) {
                    return td_Oy;
                } else {
                    return td_PF(td_Lv, td_Oy);
                }
            }
        } catch (td_FZ) {
            return 0;
        }
    }
    if (td_5y.td_5d !== 'Firefox' && td_5y.td_5d !== 'Safari' && typeof performance !== [][[]] + '' && typeof performance.now !== [][[]] + '') {
        td_uv = td_qy;
    } else {
        if (td_5y.td_5d !== 'Safari' && typeof window.performance !== [][[]] + '' && typeof window.performance.now !== [][[]] + '') {
            td_uv = td_k0;
        } else {
            td_jM = td_Z();
            td_uv = td_AC;
        }
    }
    if (!td_uv || !Math || !Math.round || !Math.floor || !Math.sqrt || !Math.pow) {
        return null;
    }
    function td_ug() {
        var td_EJ = [];
        var td_Eq = 0;;
        for (; td_Eq < td_D3; ++td_Eq) {
            var arg_137 = td_Fz();
            td_EJ.push(arg_137);
        }
        var td_kl = td_3C.mean(td_EJ);
        var td_EK = td_3C.std_dev(td_EJ, td_kl);
        var td_Nh = 0;
        var td_RE = 0;
        if (td_EK !== 0) {
            var td_YC = td_3C.confidence_interval(td_EJ, td_EK, td_kl, 1);
            td_RE = td_3C.mean(td_YC);
            td_Nh = Math.round(td_RE);
        } else {
            td_Nh = Math.round(td_kl);
        }
        return td_Nh;
    }
    var td_kz = 0;
    var td_E3 = 0;
    while (td_kz === 0 && td_E3++ < td_rk) {
        td_kz = td_ug();
    }
    return encodeURIComponent(td_kz);
}
var td_3C = td_3C || {};
function td_iu() {
    'use strict';
    var td_IC = [
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
        var td_BA = 0;;
        for (; td_BA < td_IC.length; td_BA++) {
            var td_aw = td_IC[td_BA][0];
            var td_f4 = td_IC[td_BA][1];
            if (td_5y.td_5d !== td_aw) {
                continue;
            }
            if (td_f4 === 0) {
                return false;
            }
            var td_Tf = parseInt(td_5y.td_2k);
            if (td_Tf && td_f4 < td_Tf) {
                return true;
            }
            return false;
        }
    } catch (td_eb) {
        return false;
    }
    return true;
}
function td_4P() {
    'use strict';
    var td_RN = td_3C.td_1u();
    if (!td_iu() || !td_RN) {
        return false;
    }
    try {
        var td_YD = td_5f + '/' + td_4Q + td_1N;
        td_YD = td_YD.replace(/[\r\n]/g, '');
        td_RN.open('GET', td_2F, true);
        var arg_138 = '*/*, ' + td_YD;
        td_RN.setRequestHeader('Accept', arg_138);
        td_RN.send(null);
        return true;
    } catch (td_jg) {
        return false;
    }
    return false;
}
var td_3C = td_3C || {};
function td_4M(td_jY) {
    var td_kd = null;
    if (typeof tmx_profiling_complete !== [][[]] + '') {
        td_kd = tmx_profiling_complete;
    }
    if (td_kd === null) {
        td_kd = td_i2(window.parent);
    }
    if (td_kd === null) {
        td_kd = td_i2(window.top);
    }
    if (td_kd !== null) {
        td_kd(td_jY);
    } else {
        try {
            if (typeof window.top.postMessage !== [][[]] + '') {
                var arg_139 = 'tmx_profiling_complete:' + td_jY;
                window.top.postMessage(arg_139, '*');
            } else {
            }
        } catch (td_Wi) {
        }
    }
}
function td_i2(td_hq) {
    try {
        var td_Jd = td_hq.origin === window.origin;
    } catch (td_ON) {
        td_Jd = false;
    }
    if (td_Jd && typeof td_hq.tmx_profiling_complete !== [][[]] + '') {
        return td_hq.tmx_profiling_complete;
    }
    return null;
}
var td_3C = td_3C || {};
var td_1A;
function td_3O() {
    try {
        var td_QX = td_4z.getFontsList();
        if (td_QX.length === 0) {
            return;
        }
        var td_p3 = document.createElement('canvas');
        if (!td_p3 || !td_p3.getContext) {
            return;
        }
        var td_V6 = td_p3.getContext('2d');
        if (!td_V6) {
            return;
        }
        if (typeof td_V6.measureText === [][[]] + '') {
            return;
        }
        var td_f1 = 'gMcdefghijklmnopqrstuvwxyz0123456789';
        td_V6.font = '72px monospace';
        var td_DZ = td_V6.measureText(td_f1).width;
        td_V6.font = '72px serif';
        var td_Vx = td_V6.measureText(td_f1).width;
        var td_zn = td_Z();
        var td_gz = 0;
        var td_AD = 0;
        var td_yL = '';
        var td_HJ = false;
        var td_lS = 0;;
        for (; td_lS < td_QX.length; td_lS++) {
            td_V6.font = '72px \'' + td_QX[td_lS] + '\', monospace';
            var td_zi = td_V6.measureText(td_f1).width;
            td_V6.font = '72px \'' + td_QX[td_lS] + '\', serif';
            var td_G0 = td_V6.measureText(td_f1).width;
            if (td_DZ !== td_zi || td_Vx !== td_G0) {
                td_AD++;
                td_yL += ',' + td_QX[td_lS];
            }
            if (td_1A > 0 && td_lS % 5 === 0) {
                td_gz = td_Z() - td_zn;
                if (td_gz > td_1A) {
                    td_HJ = true;
                    break;
                }
            }
        }
        if (!td_yL) {
            return;
        }
        if (td_gz === 0) {
            td_gz = td_Z() - td_zn;
        }
        var td_rR = td_0W(td_yL);
        var td_vw = '';
        if (!td_HJ) {
            td_vw += '&jfn=' + td_AD + '&jfh=' + td_rR + '&jftn=0:' + td_gz + ':' + td_AD;
        } else {
            td_vw += '&jftn=1:' + td_gz + ':' + td_AD;
        }
        var td_p7 = td_yL.length;
        var td_ze = false;
        if (typeof td_2x !== [][[]] + '') {
            td_ze = td_2x;
        }
        if (td_p7 > 0 && td_ze && !td_HJ) {
            var td_sa = 1800;
            if (td_p7 > td_sa && td_1F._eq('ie') && td_0M._eq('6')) {
                var td_VC = td_yL.indexOf(',', td_sa);
                if (td_VC !== -1) {
                    td_p7 = td_VC;
                }
            }
            td_vw += '&jfl=' + td_yL.substring(0, td_p7);
        }
        var td_rm = td_5j + '&jd=' + td_3C.td_4e(td_vw, td_1N);
        td_5l(td_rm, document);
    } catch (td_nn) {
    }
}
td_1A = 2000;
var td_2A = [
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
var td_3N = [
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
var td_2m = [
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
var td_0G = [
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
var td_1B = [
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
var td_3C = td_3C || {};
var td_4b = 'prtuuwvzx%7B%7B%7C%7C%7F~a%60kbee';
var td_5K = 'prtuuwvzx%7Bz%7B%7C%7F%7D';
var td_2q = 'q%7Bzuurwq~%7Bz%7C%7C~%7Caac';
var td_0D = 'psqt%7Cqvy%7C%7Bzz%7C~~';
var td_4Y = 'q%7Bzutqvy%7F';
var td_5g = 'prqutwwqp%7Bz%7B%7C%7Fz';
var td_3W = 'q%7B%7Buu~vy~%7Bzx';
var td_0T = 'q%7B%7Buuwvx%7B%7Bz%7D%7C%7F%7BaacbebgfhhjcmlooYVSST';
var td_4R = 'pstutvvxq%7Bz%7D%7Dwxaab';
var td_0v = 'przutwvy~%7Bzy%7C~~aakbedgf%60hjj';
var td_1Q = 'przutwvy~%7Bzy%7C~~a%60cbemggihko';
var td_2R = 'przutwvy~%7Bzy%7C~~a%60cbebgfn';
var td_3i = 'przutwvy~%7Bzy%7C~~aabbedgfahkk';
var td_4u = 'przutwvy~%7Bzy%7C~~a%60ebeg';
var td_1M = 'przutwvy~%7Bzy%7C~~aajbddfnohkcmmo';
var td_4U = 'prpuuwvy%7C%7Bzz%7C%7Fxa%60fbddfnahjoldinQQSSWTVV';
var td_x = 1;
var td_U = 0;
function td_5a(td_r, td_i, td_a, td_y) {
    return td_M(td_r, td_i, td_a, null, td_y);
}
function td_M(td_N, td_y, td_S, td_r, td_d) {
    var arg_140 = decodeURIComponent(td_y);
    var td_O = td_3C.td_2D(arg_140);
    if (td_O === null) {
        return;
    }
    if (typeof td_r !== [][[]] + '' && td_r !== null) {
        return td_E(td_N, td_O, td_S, td_d);
    } else {
        return td_u(td_N, td_O, td_S, td_d);
    }
}
function td_u(td_N, td_q, td_o, td_w) {
    if (td_N.attachEvent) {
        var arg_141 = 'on' + td_q;
        var arg_142 = function (td_r) {
            try {
                var arg_143 = td_r || window.event;
                td_o(arg_143);
            } catch (td_S) {
            }
        };
        td_N.attachEvent(arg_141, arg_142);
    } else {
        var arg_144 = null;
        if (typeof td_w === [][[]] + '') {
            arg_144 = false;
        } else {
            arg_144 = td_w;
        }
        td_N.addEventListener(td_q, td_o, arg_144);
    }
}
function td_E(td_a, td_O, td_R, td_Q) {
    if (typeof td_a.addEventListener !== [][[]] + '') {
        var arg_145 = null;
        if (typeof td_Q === [][[]] + '') {
            arg_145 = false;
        } else {
            arg_145 = td_Q;
        }
        td_a.addEventListener(td_O, td_R, arg_145);
    } else {
        var arg_146 = 'on' + td_O;
        var arg_147 = function (td_q) {
            try {
                var arg_148 = td_q || window.event;
                td_R(arg_148);
            } catch (td_B) {
            }
        };
        td_a.attachEvent(arg_146, arg_147);
    }
}
function td_4j(td_H, td_z, td_R, td_D) {
    return td_l(td_H, td_z, td_R, null, td_D);
}
function td_l(td_Y, td_H, td_a, td_S, td_i) {
    var arg_149 = decodeURIComponent(td_H);
    var td_y = td_3C.td_2D(arg_149);
    if (td_y === null) {
        return;
    }
    if (typeof td_S !== [][[]] + '' && td_S !== null) {
        return td_c(td_Y, td_y, td_a, td_i);
    } else {
        return td_C(td_Y, td_y, td_a, td_i);
    }
}
function td_C(td_d, td_w, td_A, td_q) {
    if (td_d.detachEvent) {
        td_d['e' + td_w + td_A] = td_A;
        td_d[td_w + td_A] = function (td_Q) {
            var arg_151 = td_Q || window.event;
            td_d['e' + td_w + td_A](arg_151);
        };
        var arg_150 = 'on' + td_w;
        td_d.detachEvent(arg_150, td_d[td_w + td_A]);
    } else {
        var arg_152 = null;
        if (typeof td_q === [][[]] + '') {
            arg_152 = false;
        } else {
            arg_152 = td_q;
        }
        td_d.removeEventListener(td_w, td_A, arg_152);
    }
}
function td_c(td_Y, td_d, td_O, td_Q) {
    if (typeof td_Y.removeEventListener !== [][[]] + '') {
        var arg_153 = null;
        if (typeof td_Q === [][[]] + '') {
            arg_153 = false;
        } else {
            arg_153 = td_Q;
        }
        td_Y.removeEventListener(td_d, td_O, arg_153);
    } else {
        td_Y['e' + td_d + td_O] = td_O;
        td_Y[td_d + td_O] = function (td_t) {
            var arg_155 = td_t || window.event;
            td_Y['e' + td_d + td_O](arg_155);
        };
        var arg_154 = 'on' + td_d;
        td_Y.detachEvent(arg_154, td_Y[td_d + td_O]);
    }
}
function td_j(td_I) {
    var td_h = td_I;
    var td_i = 500;
    var td_o = 30000;
    var td_w = [];
    var td_H = 0;
    var td_S = null;
    var td_Y = true;
    this.addFeature = function (td_N, td_d) {
        if (typeof td_d === [][[]] + '' || td_d < td_i) {
            td_d = td_i;
        }
        var arg_156 = td_d / td_i;
        var td_t = Math.ceil(arg_156);
        var arg_157 = [
            td_N,
            td_t,
            true
        ];
        td_w.push(arg_157);
        td_N.setup();
    };
    this.getFeaturesForTest = function () {
        return td_w;
    };
    this.start = function () {
        if (td_w.length === 0) {
            return;
        }
        td_M(window, td_0T, this.fini, td_Y);
        td_M(window, td_4R, this.fini, td_Y);
        td_S = setTimeout(td_D, td_i);
    };
    this.fini = function () {
        if (td_S) {
            clearTimeout(td_S);
            td_S = null;
        }
        td_l(window, td_0T, this.fini, td_Y);
        td_l(window, td_4R, this.fini, td_Y);
    };
    this.check = function () {
        td_D();
    };
    function td_D() {
        var td_a;
        var td_y = '';
        var td_R = 0;
        td_H++;
        td_a = 0;
        for (; td_a < td_w.length; td_a++) {
            var td_N = td_w[td_a][0];
            var td_O = td_w[td_a][1];
            var td_t = td_w[td_a][2];
            if (!td_t) {
                td_R++;
                continue;
            }
            if (td_H >= td_O) {
                var td_r = td_N.getFPParams();
                if (td_r !== null) {
                    td_y += td_r;
                }
                if (!td_N.tryAgain()) {
                    td_w[td_a][2] = false;
                    td_R++;
                } else {
                }
            }
        }
        if (td_y.length > 0) {
            var td_q = null;
            switch (td_h) {
            case 0: {
                    td_q = td_1y + '&jac=1&je=' + td_3C.td_4e(td_y, td_1N);
                    break;
                }
            case 1:
            default: {
                    td_q = td_5j + '&jac=1&je=' + td_3C.td_4e(td_y, td_1N);
                    break;
                }
            }
            td_5l(td_q, document);
        }
        var arg_158 = td_o / td_i;
        if (td_H >= Math.ceil(arg_158)) {
            return;
        }
        if (td_R < td_w.length) {
            td_S = setTimeout(td_D, td_i);
        } else {
        }
    }
}
var td_3B = new td_j(td_x);
var td_5s = new td_j(td_U);
var td_3C = td_3C || {};
function td_3y() {
    td_3C.load_iframe(td_3b, td_3c, document);
}
var td_3C = td_3C || {};
function td_5u() {
    try {
        var td_lN = document.createElement('canvas');
        if (!td_lN) {
            return null;
        }
        if (!td_lN.getContext) {
            return null;
        }
        var td_Tq = td_lN.getContext('2d');
        if (!td_Tq) {
            return null;
        }
        if (!td_Tq.font || !td_Tq.fillText) {
            return null;
        }
        td_lN.width = 300;
        td_lN.height = 100;
        td_Tq = td_lN.getContext('2d');
        var td_AR = '@Browsers~%fingGPRint$&,<canvas>';
        td_Tq.font = '8px Arial';
        td_Tq.fillText(td_AR, 0, 50);
        td_Tq.font = '12px Arial';
        var td_qF = td_Tq.createLinearGradient(0, 0, td_lN.width, 0);
        td_qF.addColorStop('0', 'magenta');
        td_qF.addColorStop('0.5', 'blue');
        td_qF.addColorStop('1.0', 'red');
        td_Tq.fillStyle = td_qF;
        td_Tq.fillText(td_AR, 0, 90);
        var td_eD = td_lN.toDataURL('image/png');
        if (!td_eD) {
            return null;
        }
        return td_1g(td_eD);
    } catch (td_RN) {
        return null;
    }
}
function td_2a() {
    var td_Gu = 1;
    var td_ur = td_Gu + ':' + td_5f + ':' + td_1N + ';' + td_4Q;
    var td_Gb = td_1N;
    var td_KO = {};
    var td_Dc = {};
    var td_aU = {};
    var td_RU = false;
    var td_Ku = false;
    var td_GH = null;
    var td_QM = false;
    var td_kv = td_Z();
    var td_Zl = false;
    this.tryAgain = function () {
        return !td_QM;
    };
    function td_YR() {
        var td_vI = '';
        var td_OD = Object.keys(td_KO);
        var td_M1 = Object.keys(td_Dc);
        var td_kd = Object.keys(td_aU);
        if (td_OD.length > 0) {
            td_vI += '&webrtc_internal_ip=' + td_OD.join(',');
        } else {
        }
        if (td_M1.length > 0) {
            td_vI += '&webrtc_external_ip=' + td_M1.join(',');
        }
        if (td_kd.length > 0) {
            td_vI += '&webrtc_ipv6=' + td_kd.join(',');
        }
        if (td_RU) {
            td_vI += '&wim=webrtc_internal_mdns';
        }
        if (!td_Ku) {
            td_vI += '&wnid=webrtc_no_internal_data';
        }
        return td_vI;
    }
    this.getFPParams = function () {
        if (!td_QM) {
            if (new Date().getTime() - td_kv > 2000 || td_Zl) {
                td_QM = true;
                td_GH.close();
                td_GH = null;
                return td_YR();
            }
        }
        return null;
    };
    this.setup = function () {
        if (!Object || !Object.create || !Object.keys) {
            td_QM = true;
            return;
        }
        var td_YS = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        if (!td_YS) {
            td_QM = true;
            return;
        }
        this.startWaitTime = td_Z();
        function td_Ed(td_R9) {
            var arg_159 = td_R9.indexOf('candidate:') + 10;
            var td_i0 = td_R9.substr(arg_159).split(' ');
            if (td_i0 !== null && td_i0.length > 7 && td_i0[4] !== null) {
                var td_P2 = td_i0[4];
                var td_ft = '([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])';
                var td_Xg = '^(' + td_ft + '.){3}' + td_ft + '$';
                var td_R2 = td_i0[7];
                if (td_R2 === 'host') {
                    td_Ku = true;
                    if (td_P2.match(/^.*\.local$/)) {
                        td_RU = true;
                        return;
                    }
                    if (td_P2.match(td_Xg)) {
                        td_KO[td_P2] = true;
                    } else {
                        td_aU[td_P2] = true;
                    }
                } else {
                    if (td_P2.match(td_Xg)) {
                        td_Dc[td_P2] = true;
                    } else {
                        td_aU[td_P2] = true;
                    }
                }
            }
        }
        try {
            var td_Yi = { optional: [{ RtpDataChannels: true }] };
            var td_Kl = 'turn:' + td_4v + '?transport=';
            var td_b1 = {
                iceServers: [
                    {
                        urls: td_Kl + 'tcp',
                        username: td_ur,
                        credential: td_Gb
                    },
                    {
                        urls: td_Kl + 'udp',
                        username: td_ur,
                        credential: td_Gb
                    }
                ]
            };
            td_GH = new td_YS(td_b1, td_Yi);
            td_GH.onicecandidate = function (td_XL) {
                if (td_XL.candidate) {
                    td_Ed(td_XL.candidate.candidate);
                } else {
                    td_Zl = true;
                }
            };
            td_GH.onicegatheringstatechange = function () {
                if (td_GH !== null) {
                    if (td_GH.iceGatheringState === 'complete') {
                        td_Zl = true;
                    }
                }
            };
            var arg_160 = Math.random().toString();
            td_GH.createDataChannel(arg_160);
            var td_uN = function () {
            };
            var td_Gl = function (td_dZ) {
                var arg_161 = function () {
                };
                td_GH.setLocalDescription(td_dZ, arg_161, td_uN);
            };
            var td_Ds = function () {
            };
            if (typeof Promise === [][[]] + '' || td_GH.createOffer.length > 0) {
                td_GH.createOffer(td_Gl, td_Ds);
            } else {
                td_GH.createOffer().then(td_Gl, td_Ds);
            }
        } catch (td_pj) {
            return;
        }
    };
}
var td_3C = td_3C || {};
function td_2z() {
    var td_Aq;
    var td_ZD;
    var td_iW = td_5y.td_5d;
    var td_he = parseInt(td_5y.td_2k);
    var td_d0 = td_5y.td_5x;
    var td_ot = td_5y.td_1a;
    this.tryAgain = function () {
        return false;
    };
    this.getFPParams = function () {
        var td_XZ = '&pm=';
        if (typeof td_Aq === [][[]] + '') {
            if (typeof td_ZD !== [][[]] + '' && td_ZD.readyState === 'done') {
                if (td_ZD.result) {
                    td_Aq = false;
                } else {
                    td_Aq = true;
                }
            } else {
                return null;
            }
        }
        if (td_Aq) {
            td_XZ += 'yes';
        } else {
            td_XZ += 'no';
        }
        return td_XZ;
    };
    function td_CK() {
        if (navigator && typeof navigator.storage !== [][[]] + '' && typeof navigator.storage.estimate !== [][[]] + '') {
            var arg_162 = function (td_dv) {
                td_Aq = td_dv.quota < 120000000;
            };
            navigator.storage.estimate().then(arg_162);
        } else {
            td_Aq = false;
        }
    }
    function td_Mo() {
        var td_Y4 = 'chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/page_embed_script.js';
        var td_cI = new XMLHttpRequest();
        td_cI.open('GET', td_Y4, true);
        td_cI.responseType = 'text';
        td_cI.onload = function (td_fu) {
            if (td_fu && td_fu.srcElement && td_fu.srcElement.status === 200 && td_fu.srcElement.response) {
                var td_D1 = td_fu.srcElement.response;
                if (td_D1 && td_D1.size > 0) {
                    td_Aq = false;
                }
            }
        };
        td_cI.onerror = function (td_lo) {
            td_Aq = true;
        };
        td_cI.send();
    }
    function td_ab() {
        function td_fz(td_Oc) {
        }
        var arg_163 = function (td_T0) {
            td_Aq = td_T0 < 120000000;
        };
        navigator.webkitTemporaryStorage.requestQuota(120000000, arg_163, td_fz);
    }
    function td_XH() {
        if (window.openDatabase) {
            try {
                var td_Pn = window.openDatabase(null, null, null, null);
            } catch (td_Wc) {
                td_Aq = true;
            }
        } else {
            td_Aq = null;
        }
    }
    function td_LO() {
        if (!window.localStorage) {
            return;
        }
        var td_GE = 0;
        try {
            td_Aq = false;
            var td_Ek = '';
            for (; td_GE < 110000; ++td_GE) {
                td_Ek += 'TESTDATA';
            }
            td_GE = 0;
            for (; td_GE < 5; ++td_GE) {
                var arg_164 = 'TESTKEY' + td_GE;
                window.localStorage.setItem(arg_164, td_Ek);
            }
            td_Aq = true;
            for (; td_GE > 0; --td_GE) {
                var arg_165 = 'TESTKEY' + td_GE;
                window.localStorage.removeItem(arg_165);
            }
        } catch (td_j5) {
            td_Aq = false;
            if (typeof td_j5.code !== [][[]] + '' && td_j5.code === DOMException.QUOTA_EXCEEDED_ERR) {
            }
            try {
                for (; td_GE > 0; --td_GE) {
                    var arg_166 = 'TESTKEY' + td_GE;
                    window.localStorage.removeItem(arg_166);
                }
            } catch (td_j5) {
            }
        }
    }
    this.setup = function () {
        if (td_iW === 'Chrome' && td_he >= 76) {
            td_Aq = false;
            if (!td_d0) {
                td_CK();
                if (td_Aq === false) {
                    td_Mo();
                }
            } else {
                switch (td_ot) {
                case 'Android': {
                        td_ab();
                        break;
                    }
                case 'iPad':
                case 'iPhone': {
                        td_XH();
                        break;
                    }
                default: {
                        break;
                    }
                }
            }
        } else {
            if (td_iW === 'Opera' || td_iW === 'Chrome') {
                if (window.webkitRequestFileSystem) {
                    var arg_167 = function () {
                        td_Aq = false;
                    };
                    var arg_168 = function (td_Ps) {
                        td_Aq = true;
                    };
                    window.webkitRequestFileSystem(window.TEMPORARY, 1, arg_167, arg_168);
                } else {
                    if (window.openDatabase) {
                        td_XH();
                    }
                }
            } else {
                if (td_iW === 'Firefox' && window.indexedDB) {
                    if (typeof td_ZD === [][[]] + '') {
                        try {
                            td_ZD = window.indexedDB.open('test');
                        } catch (td_VI) {
                            td_Aq = true;
                        }
                    }
                } else {
                    if (td_iW === 'Explorer' && td_he >= 10) {
                        td_Aq = false;
                        try {
                            if (!window.indexedDB) {
                                td_Aq = true;
                            }
                        } catch (td_VI) {
                            td_Aq = true;
                        }
                    } else {
                        if (td_iW === 'Safari') {
                            td_Aq = false;
                            if (td_d0 === true && td_he < 12 || td_he >= 11.1 && td_he < 12) {
                                td_XH();
                            } else {
                                if ((td_Aq === null || td_Aq === false) && td_he >= 12) {
                                    td_LO();
                                }
                            }
                            if (td_Aq === null || td_Aq === false && window.localStorage) {
                                try {
                                    window.localStorage.setItem('5ef56dee577af', 1);
                                } catch (td_VI) {
                                    td_Aq = true;
                                }
                                if (typeof td_Aq === [][[]] + '') {
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
var td_3C = td_3C || {};
var td_5y = {
    td_0n: function () {
        if (typeof navigator !== [][[]] + '') {
            this.td_K(navigator.userAgent, navigator.vendor, navigator.platform, navigator.appVersion, window.opera);
        }
    },
    td_K: function (td_q, td_J, td_D, td_y, td_M) {
        this.td_T = [
            {
                string: td_q,
                subString: ' OPR/',
                versionSearch: ' OPR',
                identity: 'Opera'
            },
            {
                string: td_q,
                subString: 'Opera Mini',
                versionSearch: 'Opera Mini',
                identity: 'Opera Mini'
            },
            {
                string: td_q,
                subString: 'Edge',
                versionSearch: 'Edge',
                identity: 'Explorer'
            },
            {
                string: td_q,
                subString: 'Edg/',
                versionSearch: 'Edg',
                identity: 'Explorer'
            },
            {
                string: td_q,
                subString: 'YaBrowser',
                versionSearch: 'YaBrowser',
                identity: 'Yandex'
            },
            {
                string: td_q,
                subString: 'SamsungBrowser',
                identity: 'SamsungBrowser'
            },
            {
                string: td_q,
                subString: 'UCBrowser',
                identity: 'UCBrowser'
            },
            {
                string: td_q,
                subString: 'Puffin',
                identity: 'Puffin'
            },
            {
                string: td_q,
                subString: 'Chrome',
                identity: 'Chrome'
            },
            {
                string: td_q,
                subString: 'OmniWeb',
                versionSearch: 'OmniWeb/',
                identity: 'OmniWeb'
            },
            {
                string: td_q,
                subString: 'FxiOS',
                identity: 'Firefox',
                versionSearch: 'FxiOS'
            },
            {
                string: td_q,
                subString: 'CriOS',
                identity: 'Chrome',
                versionSearch: 'CriOS'
            },
            {
                string: td_q,
                subString: 'XiaoMi/MiuiBrowser',
                identity: 'XiaoMi/MiuiBrowser',
                versionSearch: 'XiaoMi/MiuiBrowser'
            },
            {
                string: td_J,
                subString: 'Apple',
                identity: 'Safari',
                versionSearch: 'Version'
            },
            {
                prop: td_M,
                identity: 'Opera',
                versionSearch: 'Version'
            },
            {
                string: td_J,
                subString: 'iCab',
                identity: 'iCab'
            },
            {
                string: td_J,
                subString: 'KDE',
                identity: 'Konqueror'
            },
            {
                string: td_q,
                subString: 'Firefox',
                identity: 'Firefox'
            },
            {
                string: td_J,
                subString: 'Camino',
                identity: 'Camino'
            },
            {
                string: td_q,
                subString: 'Netscape',
                identity: 'Netscape'
            },
            {
                string: td_q,
                subString: 'MSIE',
                identity: 'Explorer',
                versionSearch: 'MSIE'
            },
            {
                string: td_q,
                subString: 'IEMobile',
                identity: 'IEMobile',
                versionSearch: 'IEMobile'
            },
            {
                string: td_q,
                subString: 'Trident',
                identity: 'Explorer',
                versionSearch: 'rv'
            },
            {
                string: td_q,
                subString: 'Gecko',
                identity: 'Mozilla',
                versionSearch: 'rv'
            },
            {
                string: td_q,
                subString: 'Mozilla',
                identity: 'Netscape',
                versionSearch: 'Mozilla'
            }
        ];
        this.td_V = [
            {
                string: td_D,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: td_D,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: td_q,
                subString: 'Windows Phone',
                identity: 'Windows Phone'
            },
            {
                string: td_q,
                subString: 'Android',
                identity: 'Android'
            },
            {
                string: td_q,
                subString: 'OpenBSD',
                identity: 'OpenBSD'
            },
            {
                string: td_q,
                subString: 'SunOS',
                identity: 'SunOS'
            },
            {
                string: td_D,
                subString: 'Linux arm',
                identity: 'Android'
            },
            {
                string: td_D,
                subString: 'Linux',
                identity: 'Linux'
            },
            {
                string: td_D,
                subString: 'BlackBerry',
                identity: 'BlackBerry'
            },
            {
                string: td_D,
                subString: 'iPhone',
                identity: 'iPhone/iPod'
            },
            {
                string: td_D,
                subString: 'iPad',
                identity: 'iPad'
            }
        ];
        this.td_W = [
            {
                string: td_D,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: td_D,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: td_D,
                subString: 'Linux arm',
                identity: 'Android'
            },
            {
                string: td_D,
                subString: 'Linux aarch',
                identity: 'Android'
            },
            {
                string: td_D,
                subString: 'Linux',
                identity: 'Linux'
            },
            {
                string: td_D,
                subString: 'BlackBerry',
                identity: 'BlackBerry'
            },
            {
                string: td_D,
                subString: 'iPhone',
                identity: 'iPhone'
            },
            {
                string: td_D,
                subString: 'iPad',
                identity: 'iPad'
            }
        ];
        this.td_G = [
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
        this.td_5x = typeof window.orientation !== [][[]] + '';
        var var_12 = this.td_f(this.td_W) || 'unknown';
        this.td_1a = var_12;
        var var_13 = this.td_v(this.td_5x, this.td_1a) || 'unknown';
        this.td_5W = var_13;
        var var_14 = this.td_f(this.td_T) || 'unknown';
        this.td_5d = var_14;
        var var_15 = this.td_m(this.td_5d, td_q) || this.td_m(this.td_5d, td_y) || 'unknown';
        this.td_2k = var_15;
        var var_16 = this.td_f(this.td_V) || 'unknown';
        this.td_0p = var_16;
        var var_17 = this.td_s(this.td_G, this.td_0p, td_q, td_y) || this.td_0p;
        this.td_5A = var_17;
        this.td_p();
    },
    td_s: function (td_r, td_z, td_o, td_b) {
        var td_I = td_o;
        var td_i = td_b;
        var td_w = td_z;
        var td_P;
        var td_y = 0;;
        for (; td_y < td_r.length; td_y++) {
            if (td_r[td_y].identity === td_z) {
                var td_J = 0;;
                for (; td_J < td_r[td_y].versionMap.length; td_J++) {
                    var td_R = td_r[td_y].versionMap[td_J];
                    if (td_R.r.test(td_I)) {
                        td_w = td_R.s;
                        if (/Windows/.test(td_w)) {
                            return td_w;
                        }
                        break;
                    }
                }
                break;
            }
        }
        switch (td_w) {
        case 'Mac OS X': {
                td_w = null;
                var td_x = /(Mac OS X 10[\.\_\d]+)/.exec(td_I);
                if (td_x !== null && td_x.length >= 1) {
                    td_w = td_x[1];
                }
                break;
            }
        case 'Android': {
                td_w = null;
                var td_c = /[^-](Android[^\d]?[\.\_\d]+)/.exec(td_I);
                if (td_c !== null && td_c.length >= 1) {
                    td_w = td_c[1];
                }
                break;
            }
        case 'iPad':
        case 'iPhone':
        case 'iPhone/iPod': {
                td_w = null;
                td_P = /OS (\d+)_(\d+)_?(\d+)?/.exec(td_i);
                if (td_P !== null) {
                    var td_d = null;
                    if (td_P.length >= 1) {
                        td_d = td_P[1];
                    } else {
                        td_d = 'unknown';
                    }
                    var td_q = null;
                    if (td_P.length >= 2) {
                        td_q = td_P[2];
                    } else {
                        td_q = 'unknown';
                    }
                    var td_Q = null;
                    if (td_P.length >= 3) {
                        td_Q = td_P[3] | '0';
                    } else {
                        td_Q = '0';
                    }
                    td_w = 'iOS ' + td_d + '.' + td_q + '.' + td_Q;
                }
                break;
            }
        default: {
                return null;
            }
        }
        return td_w;
    },
    td_f: function (td_d) {
        var td_w = 0;;
        for (; td_w < td_d.length; td_w++) {
            var td_U = td_d[td_w].string;
            var td_e = td_d[td_w].prop;
            var var_18 = td_d[td_w].versionSearch || td_d[td_w].identity;
            this.versionSearchString = var_18;
            if (td_U) {
                if (td_U.indexOf(td_d[td_w].subString) !== -1) {
                    return td_d[td_w].identity;
                }
            } else {
                if (td_e) {
                    return td_d[td_w].identity;
                }
            }
        }
    },
    td_m: function (td_I, td_A) {
        if (!td_I) {
            return null;
        }
        var td_t;
        switch (td_I) {
        case 'Safari': {
                var td_C = /\WVersion[^\d]([\.\d]+)/.exec(td_A);
                if (td_C !== null && td_C.length >= 1) {
                    td_t = td_C[1];
                }
                break;
            }
        case 'Opera': {
                if (this.versionSearchString === 'OPR') {
                    var td_F = /\WOPR[^\d]*([\.\d]+)/.exec(td_A);
                    if (td_F !== null && td_F.length >= 1) {
                        td_t = td_F[1];
                    }
                    break;
                }
            }
        default: {
                var td_q = td_A.indexOf(this.versionSearchString);
                if (td_q !== -1) {
                    var arg_169 = td_q + this.versionSearchString.length + 1;
                    td_t = td_A.substring(arg_169);
                }
                break;
            }
        }
        if (td_t) {
            return parseFloat(td_t);
        }
        return null;
    },
    td_L: function (td_B) {
        var td_D = null;
        try {
            td_D = new Worker(td_B);
        } catch (td_y) {
            if (td_D !== null && typeof td_D.terminate !== [][[]] + '') {
                td_D.terminate();
            }
            return td_y.toString().indexOf('is not a valid URL') !== -1;
        }
        return false;
    },
    td_v: function (isMobile, osNoUA) {
        var psc = this.td_L;
        try {
            var check = typeof window.opr !== [][[]] + '' && typeof td_g.addons !== [][[]] + '' || typeof window.opera !== [][[]] + '';
            if (check) {
                return 'Opera';
            }
            check = typeof InstallTrigger !== [][[]] + '';
            if (check) {
                return 'Firefox';
            }
            var var_19 = /constructor/i.test(window.HTMLElement) || function (p) {
                return p.toString() === '[object SafariRemoteNotification]';
            }(!window['safari'] || typeof safari !== [][[]] + '' && safari.pushNotification);
            check = var_19;
            check = typeof window.safari !== [][[]] + '';
            if (check) {
                return 'Safari';
            }
            var var_20 = false || typeof document.documentMode !== [][[]] + '';
            check = var_20;
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
            var var_21 = typeof window.chrome !== [][[]] + '' && typeof window.yandex == [][[]] + '' && (typeof window.chrome.webstore !== [][[]] + '' || typeof window.chrome.runtime !== [][[]] + '' || typeof window.chrome.loadTimes !== [][[]] + '');
            check = var_21;
            if (check) {
                return 'Chrome';
            }
            if (isMobile) {
                var var_23 = typeof window.chrome !== [][[]] + '' && typeof window.chrome.Benchmarking !== [][[]] + '';
                check = var_23;
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
            var var_22 = typeof window.chrome !== [][[]] + '' && typeof window.yandex !== [][[]] + '';
            check = var_22;
            if (check) {
                return 'Yandex';
            }
        } catch (err) {
        }
        return null;
    },
    td_p: function () {
        if (this.td_5x !== true || this.td_1a !== 'Mac') {
            return;
        }
        this.td_1a = 'iPhone/iPad';
        this.td_0p = this.td_1a;
        this.td_5A = this.td_0p;
    },
    td_T: {},
    td_V: {},
    td_W: {},
    td_G: {}
};
function td_0S(td_F) {
    var td_a = '';
    var td_u = function () {
        var arg_170 = Math.random() * 62;
        var td_J = Math.floor(arg_170);
        if (td_J < 10) {
            return td_J;
        }
        if (td_J < 36) {
            return String.fromCharCode(td_J + 55);
        }
        return String.fromCharCode(td_J + 61);
    };
    while (td_a.length < td_F) {
        td_a += td_u();
    }
    return 'tdr_' + td_a;
}
function td_5S(td_C) {
    var td_e = td_0S(5);
    if (typeof td_5n !== [][[]] + '') {
        td_5n(td_e, td_C);
    }
    return td_e;
}
function td_5l(td_n, td_I, td_Z) {
    var td_k = td_I.getElementsByTagName('head').item(0);
    var td_H = td_I.createElement('script');
    var td_O = td_5S('SCRIPT');
    td_H.setAttribute('id', td_O);
    td_H.setAttribute('type', 'text/javascript');
    td_3C.td_0t(td_H);
    if (typeof td_Z !== [][[]] + '') {
        var td_j = false;
        td_H.onload = td_H.onreadystatechange = function () {
            if (!td_j && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                td_j = true;
                td_Z();
            }
        };
        td_H.onerror = function (td_X) {
            td_j = true;
            td_Z();
        };
    }
    td_H.setAttribute('src', td_n);
    td_k.appendChild(td_H);
}
function td_2f(td_j, td_r, td_F, td_U) {
    var td_R = td_U.createElement('img');
    var td_i = td_5S('IMG');
    td_R.setAttribute('id', td_i);
    td_R.setAttribute('alt', 'empty');
    td_R.setAttribute('style', 'visibility:hidden');
    td_R.setAttribute('src', td_r);
    if (typeof td_F !== [][[]] + '') {
        td_R.onload = td_F;
        td_R.onabort = td_F;
        td_R.onerror = td_F;
        td_R.oninvalid = td_F;
    }
    td_j.appendChild(td_R);
}
function td_0i(td_I, td_B) {
    var td_a = td_B.getElementsByTagName('head')[0];
    td_2f(td_a, td_I, null, td_B);
}
var td_3C = td_3C || {};
if (typeof td_3C.td_3A === [][[]] + '') {
    td_3C.td_3A = [];
}
var td_5j, td_2F, td_4s, td_1i, td_3b, td_4X, td_1N, td_5f, td_1P, td_Ma = [], td_4z, td_1F, td_0M, td_2A, td_3N, td_2m, td_4h = [], td_2U, td_3V, td_1E, td_4p, td_2n, td_0B, td_3I, td_2s, td_2T, td_5p, td_1R, td_4c, td_2S, td_5h, td_4G, td_2j, td_4v, td_4Q, td_1p, td_4A, td_3c = null;
if (typeof navigator !== [][[]] + '') {
    td_Ma = navigator.mimeTypes;
}
td_3C.td_3A.push(function () {
    td_5f = '9p00aymw';
    td_3b = 'https://img9.target.com/fp/ls_fp.html;CIS3SID=4A98E7EE295CC2147EE62D494413272F?org_id=9p00aymw&session_id=1068138485063&nonce=91b852ea29d63d72';
    td_2b = 'https://img9.target.com/fp/top_fp.html;CIS3SID=4A98E7EE295CC2147EE62D494413272F?org_id=9p00aymw&session_id=1068138485063&nonce=91b852ea29d63d72';
    td_4v = 'eu-aa.online-metrix.net';
    td_2F = 'https://img9.target.com/fp/clear.png';
    td_1k = 'https://9p00aymwyyg6a2umwt7jcdq2j3qzk5uubfpife3p91b852ea29d63d72am1.e.aa.online-metrix.net/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=91b852ea29d63d72&di=yes';
    td_5j = 'https://img9.target.com/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=91b852ea29d63d72';
    td_4Q = '91b852ea29d63d72';
    td_1P = '81eb75359ac84dde9eb1ba1672691b3b_1777133889991';
    td_1N = '1068138485063';
    td_1y = 'https://img9.target.com/fp/clear3.png;CIS3SID=4A98E7EE295CC2147EE62D494413272F?org_id=9p00aymw&session_id=1068138485063&nonce=91b852ea29d63d72';
    td_5m = 't';
    td_3F = 'https://img9.target.com/fp/clear.png?org_id=9p00aymw&session_id=1068138485063&nonce=91b852ea29d63d72&if=ls';
    td_4h = [
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
});
var td_3C = td_3C || {};
td_3C._mean = function (td_q) {
    if (td_q.length < 1) {
        return 0;
    }
    var td_h = 0;
    var td_o = 0;;
    for (; td_o < td_q.length; ++td_o) {
        td_h += td_q[td_o];
    }
    return td_h / td_q.length;
};
td_3C.mean = function (td_Y) {
    return Math.floor(td_3C._mean(td_Y));
};
td_3C.variance = function (td_r, td_i) {
    if (td_r.length < 2) {
        return 0;
    }
    var td_Q = 0;
    var td_d = 0;;
    for (; td_d < td_r.length; ++td_d) {
        var arg_171 = td_r[td_d] - td_i;
        td_Q += Math.pow(arg_171, 2);
    }
    return td_Q / (td_r.length - 1);
};
td_3C._std_dev = function (td_r, td_d) {
    return Math.sqrt(td_3C.variance(td_r, td_d));
};
td_3C.std_dev = function (td_d, td_I) {
    return Math.floor(td_3C._std_dev(td_d, td_I));
};
td_3C.confidence_interval = function (td_Q, td_I, td_B, td_N) {
    if (td_Q.length < 1) {
        return [];
    }
    var td_o = [];
    var td_D = td_B + td_I * td_N;
    var td_a = td_B - td_I * td_N;
    var td_r = 0;;
    for (; td_r < td_Q.length; ++td_r) {
        if (td_Q[td_r] > td_a && td_D > td_Q[td_r]) {
            td_o.push(td_Q[td_r]);
        }
    }
    return td_o;
};
td_3C.median = function (td_t) {
    if (typeof td_t.sort === [][[]] + '') {
        return null;
    }
    var td_R = null;
    if (typeof JSON !== [][[]] + '' && typeof JSON.stringify !== [][[]] + '' && typeof JSON.parse !== [][[]] + '') {
        var arg_173 = JSON.stringify(td_t);
        td_R = JSON.parse(arg_173);
    } else {
        if (typeof td_t.slice !== [][[]] + '') {
            td_R = td_t.slice();
        }
    }
    if (td_R === null) {
        return null;
    }
    var arg_172 = function (td_a, td_S) {
        return td_a - td_S;
    };
    td_R.sort(arg_172);
    var td_h = td_R.length;
    if (1 > td_h) {
        return 0;
    } else {
        if (2 > td_h) {
            return td_R[0];
        } else {
            if (td_h % 2) {
                return td_R[Math.floor(td_h / 2)];
            } else {
                var td_B = td_R[Math.floor(td_h / 2 - 1)];
                var td_i = td_R[Math.floor(td_h / 2)];
                return (td_B + td_i) / 2;
            }
        }
    }
};
td_3C.mad = function (td_Q, td_z) {
    if (typeof td_z === [][[]] + '' || typeof td_Q === [][[]] + '' || typeof td_Q.length === [][[]] + '') {
        return 0;
    }
    var td_w = td_Q.length;
    if (1 > td_w) {
        return 0;
    }
    var td_D = [];
    for (var td_o in td_Q) {
        if (td_Q.hasOwnProperty(td_o)) {
            var arg_175 = td_Q[td_o] - td_z;
            var arg_174 = Math.abs(arg_175);
            td_D.push(arg_174);
        }
    }
    return td_3C.median(td_D);
};
var td_3C = td_3C || {};
function td_3v() {
    'use strict';
    var td_TT;
    var td_v8 = true;
    this.tryAgain = function () {
        return td_TT ? false : td_v8;
    };
    this.getFPParams = function () {
        if (td_TT) {
            return '&audh=' + td_TT;
        }
        return null;
    };
    this.setup = function () {
        try {
            var td_wb;
            td_wb = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);
            if (!td_wb) {
                return null;
            }
            var td_Eq = td_wb.createOscillator();
            td_Eq.type = 'triangle';
            td_Eq.frequency.value = 10000;
            var td_Ob = td_wb.createDynamicsCompressor();
            if (td_Ob.threshold) {
                td_Ob.threshold.value = -50;
            }
            if (td_Ob.knee) {
                td_Ob.knee.value = 40;
            }
            if (td_Ob.ratio) {
                td_Ob.ratio.value = 12;
            }
            if (td_Ob.reduction) {
                td_Ob.reduction.value = -20;
            }
            if (td_Ob.attack) {
                td_Ob.attack.value = 0;
            }
            if (td_Ob.release) {
                td_Ob.release.value = 0.25;
            }
            td_Eq.connect(td_Ob);
            td_Ob.connect(td_wb.destination);
            td_Eq.start(0);
            td_wb.startRendering();
            td_wb.oncomplete = function (td_KJ) {
                if (typeof td_KJ.renderedBuffer === [][[]] + '') {
                    return;
                }
                var td_r4 = new td_1D();
                var td_uv = 0;;
                for (; td_uv < td_KJ.renderedBuffer.length; td_uv++) {
                    var arg_176 = td_KJ.renderedBuffer.getChannelData(0)[td_uv].toString();
                    td_r4.update(arg_176);
                }
                td_Ob.disconnect();
                td_TT = td_r4.toString();
            };
        } catch (td_lh) {
            td_v8 = false;
        }
    };
}
var td_3C = td_3C || {};
function td_2o() {
    'use strict';
    var td_Tz;
    var td_BP = true;
    this.tryAgain = function () {
        return td_Tz ? false : td_BP;
    };
    this.getFPParams = function () {
        if (td_Tz) {
            return '&batst=' + td_Tz;
        }
        return null;
    };
    function td_E1(td_ya, td_dS) {
        var td_Vk = '';
        if (typeof td_ya === 'number') {
            td_Vk = '"level":' + td_ya.toFixed(2);
        }
        if (typeof td_dS !== [][[]] + '') {
            if (td_Vk) {
                td_Vk += ',';
            }
            td_Vk += '"status":' + (td_dS ? '"charging"' : '"unplugged"');
        }
        if (td_Vk) {
            return '{' + td_Vk + '}';
        }
        return null;
    }
    this.setup = function () {
        try {
            var td_Qz = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery || null;
            if (td_Qz) {
                td_Tz = td_E1(td_Qz.level, td_Qz.charging);
            } else {
                if (navigator.getBattery) {
                    var arg_177 = function (td_Qe) {
                        td_Tz = td_E1(td_Qe.level, td_Qe.charging);
                    };
                    var arg_178 = function (td_Ii) {
                    };
                    navigator.getBattery().then(arg_177, arg_178);
                } else {
                    td_BP = false;
                }
            }
        } catch (td_Kg) {
            td_BP = false;
        }
    };
}
var td_0W = function (td_Bg) {
    function td_Nw(td_Oc) {
        return td_n3(td_uM(td_Fm(td_Oc), td_Oc.length * 8));
    }
    function td_Rt(td_s8) {
        var td_yI = '0123456789abcdef';
        var td_CJ = '';
        var td_Ix;
        var td_Ze = 0;;
        for (; td_Ze < td_s8.length; td_Ze++) {
            td_Ix = td_s8.charCodeAt(td_Ze);
            var arg_179 = td_Ix >>> 4 & 15;
            var arg_180 = td_Ix & 15;
            td_CJ += td_yI.charAt(arg_179) + td_yI.charAt(arg_180);
        }
        return td_CJ;
    }
    function td_uE(td_D4) {
        var td_pB = '';
        var td_TM = -1;
        var td_vr;
        var td_et;
        while (++td_TM < td_D4.length) {
            td_vr = td_D4.charCodeAt(td_TM);
            if (td_TM + 1 < td_D4.length) {
                var arg_181 = td_TM + 1;
                td_et = td_D4.charCodeAt(arg_181);
            } else {
                td_et = 0;
            }
            if (55296 <= td_vr && td_vr <= 56319 && 56320 <= td_et && td_et <= 57343) {
                td_vr = 65536 + ((td_vr & 1023) << 10) + (td_et & 1023);
                td_TM++;
            }
            if (td_vr <= 127) {
                td_pB += String.fromCharCode(td_vr);
            } else {
                if (td_vr <= 2047) {
                    var arg_182 = 192 | td_vr >>> 6 & 31;
                    var arg_183 = 128 | td_vr & 63;
                    td_pB += String.fromCharCode(arg_182, arg_183);
                } else {
                    if (td_vr <= 65535) {
                        var arg_184 = 224 | td_vr >>> 12 & 15;
                        var arg_185 = 128 | td_vr >>> 6 & 63;
                        var arg_186 = 128 | td_vr & 63;
                        td_pB += String.fromCharCode(arg_184, arg_185, arg_186);
                    } else {
                        if (td_vr <= 2097151) {
                            var arg_187 = 240 | td_vr >>> 18 & 7;
                            var arg_188 = 128 | td_vr >>> 12 & 63;
                            var arg_189 = 128 | td_vr >>> 6 & 63;
                            var arg_190 = 128 | td_vr & 63;
                            td_pB += String.fromCharCode(arg_187, arg_188, arg_189, arg_190);
                        }
                    }
                }
            }
        }
        return td_pB;
    }
    function td_Fm(td_PM) {
        var arg_191 = td_PM.length >> 2;
        var td_KN = Array(arg_191);
        var td_Eo = 0;;
        for (; td_Eo < td_KN.length; td_Eo++) {
            td_KN[td_Eo] = 0;
        }
        td_Eo = 0;
        for (; td_Eo < td_PM.length * 8; td_Eo += 8) {
            var arg_192 = td_Eo / 8;
            td_KN[td_Eo >> 5] |= (td_PM.charCodeAt(arg_192) & 255) << td_Eo % 32;
        }
        return td_KN;
    }
    function td_n3(td_KY) {
        var td_gM = '';
        var td_EM = 0;;
        for (; td_EM < td_KY.length * 32; td_EM += 8) {
            var arg_193 = td_KY[td_EM >> 5] >>> td_EM % 32 & 255;
            td_gM += String.fromCharCode(arg_193);
        }
        return td_gM;
    }
    function td_uM(td_OG, td_ah) {
        td_OG[td_ah >> 5] |= 128 << td_ah % 32;
        td_OG[(td_ah + 64 >>> 9 << 4) + 14] = td_ah;
        var td_LW = 1732584193;
        var td_IS = -271733879;
        var td_Md = -1732584194;
        var td_k0 = 271733878;
        var td_CI = 0;;
        for (; td_CI < td_OG.length; td_CI += 16) {
            var td_Ca = td_LW;
            var td_I3 = td_IS;
            var td_Gm = td_Md;
            var td_rB = td_k0;
            td_LW = td_rR(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 0], 7, -680876936);
            td_k0 = td_rR(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 1], 12, -389564586);
            td_Md = td_rR(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 2], 17, 606105819);
            td_IS = td_rR(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 3], 22, -1044525330);
            td_LW = td_rR(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 4], 7, -176418897);
            td_k0 = td_rR(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 5], 12, 1200080426);
            td_Md = td_rR(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 6], 17, -1473231341);
            td_IS = td_rR(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 7], 22, -45705983);
            td_LW = td_rR(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 8], 7, 1770035416);
            td_k0 = td_rR(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 9], 12, -1958414417);
            td_Md = td_rR(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 10], 17, -42063);
            td_IS = td_rR(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 11], 22, -1990404162);
            td_LW = td_rR(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 12], 7, 1804603682);
            td_k0 = td_rR(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 13], 12, -40341101);
            td_Md = td_rR(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 14], 17, -1502002290);
            td_IS = td_rR(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 15], 22, 1236535329);
            td_LW = td_Rk(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 1], 5, -165796510);
            td_k0 = td_Rk(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 6], 9, -1069501632);
            td_Md = td_Rk(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 11], 14, 643717713);
            td_IS = td_Rk(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 0], 20, -373897302);
            td_LW = td_Rk(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 5], 5, -701558691);
            td_k0 = td_Rk(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 10], 9, 38016083);
            td_Md = td_Rk(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 15], 14, -660478335);
            td_IS = td_Rk(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 4], 20, -405537848);
            td_LW = td_Rk(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 9], 5, 568446438);
            td_k0 = td_Rk(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 14], 9, -1019803690);
            td_Md = td_Rk(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 3], 14, -187363961);
            td_IS = td_Rk(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 8], 20, 1163531501);
            td_LW = td_Rk(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 13], 5, -1444681467);
            td_k0 = td_Rk(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 2], 9, -51403784);
            td_Md = td_Rk(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 7], 14, 1735328473);
            td_IS = td_Rk(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 12], 20, -1926607734);
            td_LW = td_uy(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 5], 4, -378558);
            td_k0 = td_uy(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 8], 11, -2022574463);
            td_Md = td_uy(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 11], 16, 1839030562);
            td_IS = td_uy(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 14], 23, -35309556);
            td_LW = td_uy(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 1], 4, -1530992060);
            td_k0 = td_uy(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 4], 11, 1272893353);
            td_Md = td_uy(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 7], 16, -155497632);
            td_IS = td_uy(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 10], 23, -1094730640);
            td_LW = td_uy(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 13], 4, 681279174);
            td_k0 = td_uy(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 0], 11, -358537222);
            td_Md = td_uy(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 3], 16, -722521979);
            td_IS = td_uy(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 6], 23, 76029189);
            td_LW = td_uy(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 9], 4, -640364487);
            td_k0 = td_uy(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 12], 11, -421815835);
            td_Md = td_uy(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 15], 16, 530742520);
            td_IS = td_uy(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 2], 23, -995338651);
            td_LW = td_Ai(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 0], 6, -198630844);
            td_k0 = td_Ai(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 7], 10, 1126891415);
            td_Md = td_Ai(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 14], 15, -1416354905);
            td_IS = td_Ai(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 5], 21, -57434055);
            td_LW = td_Ai(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 12], 6, 1700485571);
            td_k0 = td_Ai(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 3], 10, -1894986606);
            td_Md = td_Ai(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 10], 15, -1051523);
            td_IS = td_Ai(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 1], 21, -2054922799);
            td_LW = td_Ai(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 8], 6, 1873313359);
            td_k0 = td_Ai(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 15], 10, -30611744);
            td_Md = td_Ai(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 6], 15, -1560198380);
            td_IS = td_Ai(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 13], 21, 1309151649);
            td_LW = td_Ai(td_LW, td_IS, td_Md, td_k0, td_OG[td_CI + 4], 6, -145523070);
            td_k0 = td_Ai(td_k0, td_LW, td_IS, td_Md, td_OG[td_CI + 11], 10, -1120210379);
            td_Md = td_Ai(td_Md, td_k0, td_LW, td_IS, td_OG[td_CI + 2], 15, 718787259);
            td_IS = td_Ai(td_IS, td_Md, td_k0, td_LW, td_OG[td_CI + 9], 21, -343485551);
            td_LW = td_PQ(td_LW, td_Ca);
            td_IS = td_PQ(td_IS, td_I3);
            td_Md = td_PQ(td_Md, td_Gm);
            td_k0 = td_PQ(td_k0, td_rB);
        }
        return Array(td_LW, td_IS, td_Md, td_k0);
    }
    function td_wX(td_kg, td_H0, td_m0, td_v5, td_k6, td_hq) {
        return td_PQ(td_EH(td_PQ(td_PQ(td_H0, td_kg), td_PQ(td_v5, td_hq)), td_k6), td_m0);
    }
    function td_rR(td_Ll, td_FF, td_CN, td_dj, td_RN, td_pg, td_cA) {
        return td_wX(td_FF & td_CN | ~td_FF & td_dj, td_Ll, td_FF, td_RN, td_pg, td_cA);
    }
    function td_Rk(td_kx, td_yF, td_po, td_sF, td_mV, td_PH, td_WH) {
        return td_wX(td_yF & td_sF | td_po & ~td_sF, td_kx, td_yF, td_mV, td_PH, td_WH);
    }
    function td_uy(td_QA, td_pl, td_XV, td_Jx, td_tq, td_gS, td_Hs) {
        return td_wX(td_pl ^ td_XV ^ td_Jx, td_QA, td_pl, td_tq, td_gS, td_Hs);
    }
    function td_Ai(td_eC, td_dF, td_ss, td_WJ, td_F3, td_LU, td_ZM) {
        return td_wX(td_ss ^ (td_dF | ~td_WJ), td_eC, td_dF, td_F3, td_LU, td_ZM);
    }
    function td_PQ(td_gR, td_kS) {
        var td_Y7 = (td_gR & 65535) + (td_kS & 65535);
        var td_WW = (td_gR >> 16) + (td_kS >> 16) + (td_Y7 >> 16);
        return td_WW << 16 | td_Y7 & 65535;
    }
    function td_EH(td_vg, td_n7) {
        return td_vg << td_n7 | td_vg >>> 32 - td_n7;
    }
    return td_Rt(td_Nw(td_uE(td_Bg)));
};
td_4l();
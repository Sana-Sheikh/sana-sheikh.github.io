/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    var g = {},
                        h = c.lastIndex;
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var k = c.exec(d);
                    if (!k) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    c.lastIndex === h && (c.lastIndex += 1);
                    g.value = k;
                    g.done = !1;
                    return g
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var q = this || self;

function t(a, b) {
    a = a.split(".");
    b = b || q;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ea() {}

function w(a, b) {
    a = a.split(".");
    var c = q;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function y(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ja = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.pa = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function fa(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, fa);
    else {
        const b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
y(fa, Error);
fa.prototype.name = "CustomError";

function ha(a, b, c) {
    Array.prototype.forEach.call(a, b, c)
}

function ia(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        var e = typeof d;
        e = "object" != e ? e : d ? Array.isArray(d) ? "array" : e : "null";
        if ("array" == e || "object" == e && "number" == typeof d.length) {
            e = a.length || 0;
            var f = d.length || 0;
            a.length = e + f;
            for (var g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
}

function ja(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function ka(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = ka(a[c]);
    return b
}
var la = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function ma(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < la.length; f++) c = la[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var na = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
(class {
    constructor(a, b) {
        this.h = b === oa ? a : ""
    }
}).prototype.toString = function() {
    return this.h.toString()
};
var oa = {};
var qa;
a: {
    var ra = q.navigator;
    if (ra) {
        var sa = ra.userAgent;
        if (sa) {
            qa = sa;
            break a
        }
    }
    qa = ""
}

function z(a) {
    return -1 != qa.indexOf(a)
};

function ta(a, b, c) {
    if (ua.length) {
        var d = ua.pop();
        a && va(d, a, b, c);
        return d
    }
    return new wa(a, b, c)
}

function va(a, b, c, d) {
    b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? xa(b) : new Uint8Array(0);
    a.j = b;
    a.l = void 0 !== c ? c : 0;
    a.i = void 0 !== d ? a.l + d : a.j.length;
    a.h = a.l
}

function ya(a) {
    var b = a.j;
    var c = b[a.h + 0];
    var d = c & 127;
    if (128 > c) return a.h += 1, d;
    c = b[a.h + 1];
    d |= (c & 127) << 7;
    if (128 > c) return a.h += 2, d;
    c = b[a.h + 2];
    d |= (c & 127) << 14;
    if (128 > c) return a.h += 3, d;
    c = b[a.h + 3];
    d |= (c & 127) << 21;
    if (128 > c) return a.h += 4, d;
    c = b[a.h + 4];
    d |= (c & 15) << 28;
    if (128 > c) return a.h += 5, d >>> 0;
    a.h += 5;
    128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && a.h++;
    return d
}
class wa {
    constructor(a, b, c) {
        this.j = null;
        this.h = this.i = this.l = 0;
        this.m = !1;
        a && va(this, a, b, c)
    }
    clone() {
        return ta(this.j, this.l, this.i - this.l)
    }
    clear() {
        this.j = null;
        this.h = this.i = this.l = 0;
        this.m = !1
    }
    reset() {
        this.h = this.l
    }
    advance(a) {
        this.h += a
    }
}
var ua = [];

function za(a) {
    var b = a.h;
    (b = b.h == b.i) || (b = a.l) || (b = a.h, b = b.m || 0 > b.h || b.h > b.i);
    if (b) return !1;
    b = ya(a.h);
    var c = b & 7;
    if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.l = !0, !1;
    a.j = b >>> 3;
    a.i = c;
    return !0
}

function C(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) C(a);
            else {
                for (a = a.h; a.j[a.h] & 128;) a.h++;
                a.h++
            }
            break;
        case 1:
            1 != a.i ? C(a) : a.h.advance(8);
            break;
        case 2:
            if (2 != a.i) C(a);
            else {
                var b = ya(a.h);
                a.h.advance(b)
            }
            break;
        case 5:
            5 != a.i ? C(a) : a.h.advance(4);
            break;
        case 3:
            b = a.j;
            do {
                if (!za(a)) {
                    a.l = !0;
                    break
                }
                if (4 == a.i) {
                    a.j != b && (a.l = !0);
                    break
                }
                C(a)
            } while (1);
            break;
        default:
            a.l = !0
    }
}
class Aa {
    constructor(a) {
        this.h = ta(a, void 0, void 0);
        this.i = this.j = -1;
        this.l = !1
    }
    reset() {
        this.h.reset();
        this.i = this.j = -1
    }
    advance(a) {
        this.h.advance(a)
    }
};
var Ba = z("Firefox") || z("FxiOS"),
    Ca = z("Safari") && !((z("Chrome") || z("CriOS")) && !z("Edge") || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || z("Firefox") || z("FxiOS") || z("Silk") || z("Android")) && !(z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod"));
var Da = {},
    Ea = null;

function xa(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Fa(a, function(f) {
        d[e++] = f
    });
    return d.subarray(0, e)
}

function Fa(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                u = Ea[l];
            if (null != u) return u;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ga();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Ga() {
    if (!Ea) {
        Ea = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Da[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Ea[f] && (Ea[f] = e)
            }
        }
    }
};

function Ha() {}
var Ia = "function" == typeof Uint8Array;

function Ja(a, b, c, d) {
    a.h = null;
    b || (b = c ? [c] : []);
    a.u = c ? String(c) : void 0;
    a.l = 0 === c ? -1 : 0;
    a.i = b;
    a: {
        if (b = a.i.length)
            if (--b, c = a.i[b], !(null === c || "object" != typeof c || Array.isArray(c) || Ia && c instanceof Uint8Array)) {
                a.m = b - a.l;
                a.j = c;
                break a
            }
        a.m = Number.MAX_VALUE
    }
    a.F = {};
    if (a.G = d)
        for (b = 0; b < d.length; b++) c = d[b], c < a.m ? (c += a.l, a.i[c] = a.i[c] || Ka) : (La(a), a.j[c] = a.j[c] || Ka)
}
var Ka = [];

function La(a) {
    var b = a.m + a.l;
    a.i[b] || (a.j = a.i[b] = {})
}

function D(a, b) {
    if (b < a.m) {
        b += a.l;
        var c = a.i[b];
        return c !== Ka ? c : a.i[b] = []
    }
    if (a.j) return c = a.j[b], c === Ka ? a.j[b] = [] : c
}

function Ma(a) {
    var b = Na;
    a.h || (a.h = {});
    if (!a.h[1]) {
        let e = D(a, 1);
        for (var c = [], d = 0; d < e.length; d++) c[d] = new b(e[d]);
        a.h[1] = c
    }
    b = a.h[1];
    b == Ka && (b = a.h[1] = []);
    return b
}

function Oa(a) {
    if (a.h)
        for (var b in a.h) {
            var c = a.h[b];
            if (Array.isArray(c))
                for (var d = 0; d < c.length; d++) c[d] && Oa(c[d]);
            else c && Oa(c)
        }
    return a.i
}
Ha.prototype.clone = function() {
    return new this.constructor(Pa(Oa(this)))
};

function Pa(a) {
    if (Array.isArray(a)) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
            var d = a[c];
            null != d && (b[c] = "object" == typeof d ? Pa(d) : d)
        }
        return b
    }
    if (Ia && a instanceof Uint8Array) return new Uint8Array(a);
    b = {};
    for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Pa(d) : d);
    return b
};

function E(a, b) {
    var c = void 0;
    return new(c || (c = Promise))(function(d, e) {
        function f(k) {
            try {
                h(b.next(k))
            } catch (l) {
                e(l)
            }
        }

        function g(k) {
            try {
                h(b["throw"](k))
            } catch (l) {
                e(l)
            }
        }

        function h(k) {
            k.done ? d(k.value) : (new c(function(l) {
                l(k.value)
            })).then(f, g)
        }
        h((b = b.apply(a, void 0)).next())
    })
};
var Qa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function Ra(a) {
    return a ? decodeURI(a) : a
}

function Sa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Sa(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Ta(a) {
    var b = [],
        c;
    for (c in a) Sa(c, a[c], b);
    return b.join("&")
};

function Ua() {
    this.j = this.j;
    this.l = this.l
}
Ua.prototype.j = !1;
Ua.prototype.dispose = function() {
    this.j || (this.j = !0, this.F())
};
Ua.prototype.F = function() {
    if (this.l)
        for (; this.l.length;) this.l.shift()()
};
var Va = {};

function Wa() {
    if (Va !== Va) throw Error("Bad secret");
};

function Xa() {
    var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
    return null !== a && void 0 !== a ? a : null
};
var Ya, Za = class {};
class $a extends Za {
    constructor() {
        var a = null !== ab && void 0 !== ab ? ab : "";
        super();
        Wa();
        this.h = a
    }
    toString() {
        return this.h.toString()
    }
}
var ab = null === (Ya = Xa()) || void 0 === Ya ? void 0 : Ya.emptyHTML;
new $a;
var bb, cb = class {};
class db extends cb {
    constructor() {
        var a = null !== eb && void 0 !== eb ? eb : "";
        super();
        Wa();
        this.h = a
    }
    toString() {
        return this.h.toString()
    }
}
var eb = null === (bb = Xa()) || void 0 === bb ? void 0 : bb.emptyScript;
new db;
var fb = class {};
class gb extends fb {
    constructor(a) {
        super();
        Wa();
        this.h = a
    }
    toString() {
        return this.h
    }
}
new gb("about:blank");
new gb("about:invalid#zTSz");

function hb(a) {
    var b = t("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || q.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = ib(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, jb[c]) c = jb[c];
                else {
                    c = String(c);
                    if (!jb[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        jb[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = jb[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return a
}

function ib(a, b) {
    b || (b = {});
    b[kb(a)] = !0;
    var c = a.stack || "";
    (a = a.ra) && !b[kb(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += ib(a, b));
    return c
}

function kb(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var jb = {};

function F() {
    this.h = document || {
        cookie: ""
    }
}
F.prototype.isEnabled = function() {
    return navigator.cookieEnabled
};
F.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.ya, g = c.za || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ia);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
F.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = na(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
F.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        ia: 0,
        path: b,
        domain: c
    });
    return d
};
F.prototype.isEmpty = function() {
    return !this.h.cookie
};
F.prototype.clear = function() {
    {
        var a = (this.h.cookie || "").split(";");
        var b = [];
        const c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = na(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        a = b
    }
    for (b = a.length - 1; 0 <= b; b--) this.remove(a[b])
};

function lb(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !==
        c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};

function mb() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        u = l = 0
    }

    function b(n) {
        for (var p = g, m = 0; 64 > m; m += 4) p[m / 4] = n[m] << 24 | n[m + 1] << 16 | n[m + 2] << 8 | n[m + 3];
        for (m = 16; 80 > m; m++) n = p[m - 3] ^ p[m - 8] ^ p[m - 14] ^ p[m - 16], p[m] = (n << 1 | n >>> 31) & 4294967295;
        n = e[0];
        var x = e[1],
            G = e[2],
            L = e[3],
            r = e[4];
        for (m = 0; 80 > m; m++) {
            if (40 > m)
                if (20 > m) {
                    var B = L ^ x & (G ^ L);
                    var v = 1518500249
                } else B = x ^ G ^ L, v = 1859775393;
            else 60 > m ? (B = x & G | L & (x | G), v = 2400959708) : (B = x ^ G ^ L, v = 3395469782);
            B = ((n << 5 | n >>> 27) & 4294967295) + B + r + v + p[m] & 4294967295;
            r = L;
            L = G;
            G = (x << 30 | x >>> 2) & 4294967295;
            x = n;
            n = B
        }
        e[0] = e[0] + n & 4294967295;
        e[1] = e[1] + x & 4294967295;
        e[2] =
            e[2] + G & 4294967295;
        e[3] = e[3] + L & 4294967295;
        e[4] = e[4] + r & 4294967295
    }

    function c(n, p) {
        if ("string" === typeof n) {
            n = unescape(encodeURIComponent(n));
            for (var m = [], x = 0, G = n.length; x < G; ++x) m.push(n.charCodeAt(x));
            n = m
        }
        p || (p = n.length);
        m = 0;
        if (0 == l)
            for (; m + 64 < p;) b(n.slice(m, m + 64)), m += 64, u += 64;
        for (; m < p;)
            if (f[l++] = n[m++], u++, 64 == l)
                for (l = 0, b(f); m + 64 < p;) b(n.slice(m, m + 64)), m += 64, u += 64
    }

    function d() {
        var n = [],
            p = 8 * u;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var m = 63; 56 <= m; m--) f[m] = p & 255, p >>>= 8;
        b(f);
        for (m = p = 0; 5 > m; m++)
            for (var x = 24; 0 <= x; x -= 8) n[p++] = e[m] >> x & 255;
        return n
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, u;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Y: function() {
            for (var n = d(), p = "", m = 0; m < n.length; m++) p += "0123456789ABCDEF".charAt(Math.floor(n[m] / 16)) + "0123456789ABCDEF".charAt(n[m] % 16);
            return p
        }
    }
};

function nb(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], ha(d, function(h) {
        e.push(h)
    }), ob(e.join(" "));
    var f = [],
        g = [];
    ha(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    ha(d, function(h) {
        e.push(h)
    });
    a = ob(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function ob(a) {
    var b = mb();
    b.update(a);
    return b.Y().toLowerCase()
};
var pb = class {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
    put(a) {
        this.l(a);
        100 > this.i && (this.i++, a.next = this.h, this.h = a)
    }
};

function qb(a) {
    q.setTimeout(() => {
        throw a;
    }, 0)
};
class rb {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = sb.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var sb = new pb(() => new tb, a => a.reset());
class tb {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};

function ub(a, b) {
    vb || wb();
    xb || (vb(), xb = !0);
    yb.add(a, b)
}
var vb;

function wb() {
    var a = q.Promise.resolve(void 0);
    vb = function() {
        a.then(zb)
    }
}
var xb = !1,
    yb = new rb;

function zb() {
    for (var a; a = yb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            qb(b)
        }
        sb.put(a)
    }
    xb = !1
};

function H(a) {
    this.s = 0;
    this.T = void 0;
    this.B = this.v = this.A = null;
    this.C = this.H = !1;
    if (a != ea) try {
        var b = this;
        a.call(void 0, function(c) {
            I(b, 2, c)
        }, function(c) {
            I(b, 3, c)
        })
    } catch (c) {
        I(this, 3, c)
    }
}

function Ab() {
    this.next = this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
}
Ab.prototype.reset = function() {
    this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
};
var Bb = new pb(function() {
    return new Ab
}, function(a) {
    a.reset()
});

function Cb(a, b, c) {
    var d = Bb.get();
    d.i = a;
    d.onRejected = b;
    d.context = c;
    return d
}
H.prototype.then = function(a, b, c) {
    return Db(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
H.prototype.$goog_Thenable = !0;
H.prototype.cancel = function(a) {
    if (0 == this.s) {
        var b = new Eb(a);
        ub(function() {
            Fb(this, b)
        }, this)
    }
};

function Fb(a, b) {
    if (0 == a.s)
        if (a.A) {
            var c = a.A;
            if (c.v) {
                for (var d = 0, e = null, f = null, g = c.v; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.s && 1 == d ? Fb(c, b) : (f ? (d = f, d.next == c.B && (c.B = d), d.next = d.next.next) : Gb(c), Hb(c, e, 3, b)))
            }
            a.A = null
        } else I(a, 3, b)
}

function Ib(a, b) {
    a.v || 2 != a.s && 3 != a.s || Jb(a);
    a.B ? a.B.next = b : a.v = b;
    a.B = b
}

function Db(a, b, c, d) {
    var e = Cb(null, null, null);
    e.h = new H(function(f, g) {
        e.i = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof Eb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.A = a;
    Ib(a, e);
    return e.h
}
H.prototype.la = function(a) {
    this.s = 0;
    I(this, 2, a)
};
H.prototype.ma = function(a) {
    this.s = 0;
    I(this, 3, a)
};

function I(a, b, c) {
    if (0 == a.s) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.s = 1;
        a: {
            var d = c,
                e = a.la,
                f = a.ma;
            if (d instanceof H) {
                Ib(d, Cb(e || ea, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Kb(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.T = c, a.s = b, a.A = null, Jb(a), 3 != b || c instanceof Eb || Lb(a, c))
    }
}

function Kb(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function Jb(a) {
    a.H || (a.H = !0, ub(a.Z, a))
}

function Gb(a) {
    var b = null;
    a.v && (b = a.v, a.v = b.next, b.next = null);
    a.v || (a.B = null);
    return b
}
H.prototype.Z = function() {
    for (var a; a = Gb(this);) Hb(this, a, this.s, this.T);
    this.H = !1
};

function Hb(a, b, c, d) {
    if (3 == c && b.onRejected && !b.j)
        for (; a && a.C; a = a.A) a.C = !1;
    if (b.h) b.h.A = null, Mb(b, c, d);
    else try {
        b.j ? b.i.call(b.context) : Mb(b, c, d)
    } catch (e) {
        Nb.call(null, e)
    }
    Bb.put(b)
}

function Mb(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function Lb(a, b) {
    a.C = !0;
    ub(function() {
        a.C && Nb.call(null, b)
    })
}
var Nb = qb;

function Eb(a) {
    fa.call(this, a)
}
y(Eb, fa);
Eb.prototype.name = "cancel";

function J(a) {
    Ua.call(this);
    this.L = 1;
    this.m = [];
    this.u = 0;
    this.h = [];
    this.i = {};
    this.W = !!a
}
y(J, Ua);
J.prototype.X = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.L;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.L = e + 3;
    d.push(e);
    return e
};
J.prototype.K = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        if (0 != this.u) this.m.push(a), this.h[a + 1] = ea;
        else {
            if (c) {
                var d = Array.prototype.indexOf.call(c, a, void 0);
                0 <= d && Array.prototype.splice.call(c, d, 1)
            }
            delete this.h[a];
            delete this.h[a + 1];
            delete this.h[a + 2]
        }
    }
    return !!b
};
J.prototype.G = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.W)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Ob(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.u++;
                try {
                    for (e = 0, f = c.length; e < f; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.u--, 0 < this.m.length && 0 == this.u)
                        for (; c = this.m.pop();) this.K(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Ob(a, b, c) {
    ub(function() {
        a.apply(b, c)
    })
}
J.prototype.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (ha(b, this.K, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
J.prototype.F = function() {
    J.ja.F.call(this);
    this.clear();
    this.m.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
const K = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
w("yt.config_", K);

function Pb(a) {
    var b = arguments;
    1 < b.length ? K[b[0]] = b[1] : 1 === b.length && Object.assign(K, b[0])
}

function M(a, b) {
    return a in K ? K[a] : b
};

function N(a) {
    a = Qb(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function Rb(a, b) {
    a = Qb(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function Qb(a) {
    const b = M("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : M("EXPERIMENT_FLAGS", {})[a]
};
var Sb = a => new Promise((b, c) => {
        let d = a.length,
            e = null;
        if (d) {
            var f = (g, h) => {
                g || e || (e = h);
                d--;
                d || (e ? c(e) : b())
            };
            for (const g of a) g.then(f.bind(null, !0), f.bind(null, !1))
        } else b()
    }),
    Tb = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Ub = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Vb = null;

function O(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Wb().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Xb() {
    return O("IndexedDBCheck", "testing IndexedDB").then(() => P("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function P(a) {
    const b = new Ub("Error accessing DB");
    return Wb().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Wb() {
    return Vb ? Promise.resolve(Vb) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Vb = d, a(Vb);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Wb()
        };
        c.onupgradeneeded = Yb
    })
}

function Yb(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};

function Zb(a) {
    Ja(this, a, 0, null)
}
y(Zb, Ha);

function $b(a) {
    Ja(this, a, "yt.sw.adr", null)
}
y($b, Ha);
let ac = 0;
w("ytDomDomGetNextId", t("ytDomDomGetNextId") || (() => ++ac));
const bc = [];

function cc(a) {
    bc.forEach(b => b(a))
}

function dc(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            ec(b), cc(b)
        }
    } : a
}

function ec(a) {
    var b = t("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = M("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), Pb("ERRORS", b))
}

function fc(a) {
    var b = t("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = M("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), Pb("ERRORS", b))
};
w("ytEventsEventsListeners", q.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", q.ytEventsEventsCounter || {
    count: 0
});

function gc(a, b) {
    "function" === typeof a && (a = dc(a));
    return window.setTimeout(a, b)
};
class hc {};
class ic extends hc {
    start() {
        const a = t("yt.scheduler.instance.start");
        a && a()
    }
}(function() {
    var a = ic;
    a.M = void 0;
    a.aa = function() {
        a.M || (a.M = new a)
    }
})();
ic.aa();
q.ytPubsubPubsubInstance || new J;
const Q = window;
var R = Q.ytcsi && Q.ytcsi.now ? Q.ytcsi.now : Q.performance && Q.performance.timing && Q.performance.now && Q.performance.timing.navigationStart ? () => Q.performance.timing.navigationStart + Q.performance.now() : () => (new Date).getTime();
const jc = Rb("initial_gel_batch_timeout", 1E3),
    kc = Math.pow(2, 16) - 1;
let lc = null,
    mc = 0,
    nc = void 0,
    oc = 0,
    pc = 0,
    qc = 0,
    rc = !0;
const sc = q.ytLoggingTransportGELQueue_ || new Map,
    tc = q.ytLoggingTransportTokensToCttTargetIds_ || {};

function uc(a = !1) {
    return new H(b => {
        window.clearTimeout(oc);
        window.clearTimeout(pc);
        pc = 0;
        nc && vc(nc) ? (wc(b, a), sc.clear()) : (xc(), b())
    })
}

function xc() {
    N("web_gel_timeout_cap") && !pc && (pc = gc(uc, 6E4));
    window.clearTimeout(oc);
    let a = M("LOGGING_BATCH_TIMEOUT", Rb("web_gel_debounce_ms", 1E4));
    N("shorten_initial_gel_batch_timeout") && rc && (a = jc);
    oc = gc(uc, a)
}

function wc(a, b = !1) {
    var c = nc;
    const d = Math.round(R());
    let e = sc.size;
    for (const [f, g] of sc) {
        const h = ka({
            context: yc(c.h || zc())
        });
        h.events = g;
        const k = tc[f];
        k && Ac(h, f, k);
        delete tc[f];
        Bc(h, d);
        Cc(c, h, {
            retry: !0,
            onSuccess: () => {
                e--;
                e || a();
                mc = Math.round(R() - d)
            },
            onError: () => {
                e--;
                e || a()
            },
            Aa: b
        });
        rc = !1
    }
}

function Bc(a, b) {
    a.requestTimeMs = String(b);
    N("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    if (b = M("EVENT_ID", void 0)) {
        let c = M("BATCH_CLIENT_COUNTER", void 0) || 0;
        !c && N("web_client_counter_random_seed") && (c = Math.floor(Math.random() * kc / 2));
        c++;
        c > kc && (c = 1);
        Pb("BATCH_CLIENT_COUNTER", c);
        b = {
            serializedEventId: b,
            clientCounter: String(c)
        };
        a.serializedClientEventId = b;
        lc && mc && N("log_gel_rtt_web") && (a.previousBatchInfo = {
            serializedClientEventId: lc,
            roundtripMs: String(mc)
        });
        lc = b;
        mc = 0
    }
}

function Ac(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
};
const Dc = q.ytLoggingGelSequenceIdObj_ || {};

function Ec(a, b, c, d = {}) {
    var e = {};
    e.eventTimeMs = Math.round(d.timestamp || R());
    e[a] = b;
    a = t("_lact", window);
    a = null == a ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    N("log_sequence_info_on_gel_web") && d.U && (a = e.context, b = d.U, Dc[b] = b in Dc ? Dc[b] + 1 : 0, a.sequence = {
        index: Dc[b],
        groupKey: b
    }, d.ta && delete Dc[d.U]);
    d = d.sa;
    a = "";
    d && (a = {}, d.videoId ? a.videoId = d.videoId : d.playlistId && (a.playlistId = d.playlistId), tc[d.token] = a, a = d.token);
    d = sc.get(a) || [];
    sc.set(a, d);
    d.push(e);
    c && (nc = new c);
    c = Rb("web_logging_max_batch") || 100;
    e = R();
    d.length >= c ? uc(!0) : 10 <= e - qc && (xc(), qc = e)
};
const Fc = /^[\w.]*$/,
    Gc = {
        q: !0,
        search_query: !0
    };

function Hc(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = Ic(h[0] || ""),
                l = Ic(h[1] || "");
            k in c ? Array.isArray(c[k]) ? ia(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            {
                var d = k,
                    e = h[0];
                const l = String(Hc);
                d.args = [{
                    key: e,
                    value: h[1],
                    query: a,
                    method: Jc == l ? "unchanged" : l
                }];
                Gc.hasOwnProperty(e) || ("ReferenceError" === d.name ? fc(d) : ec(d))
            }
        }
    }
    return c
}
const Jc = String(Hc);

function Kc(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Hc(a, "&")
}

function Lc(a, b) {
    var c = a.split("#", 2);
    a = c[0];
    c = 1 < c.length ? "#" + c[1] : "";
    var d = a.split("?", 2);
    a = d[0];
    d = Kc(d[1] || "");
    for (var e in b) d[e] = b[e];
    b = a;
    a = Ta(d);
    if (a) {
        e = b.indexOf("#");
        0 > e && (e = b.length);
        d = b.indexOf("?");
        if (0 > d || d > e) {
            d = e;
            var f = ""
        } else f = b.substring(d + 1, e);
        b = [b.substr(0, d), f, b.substr(e)];
        e = b[1];
        b[1] = a ? e ? e + "&" + a : a : e;
        a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
    } else a = b;
    return a + c
}

function Ic(a) {
    return a && a.match(Fc) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
let Mc = !1;

function Nc(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Oc(a, b);
    const d = Pc(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    let e = !1,
        f;
    fetch(a, c).then(g => {
        if (!e) {
            e = !0;
            f && window.clearTimeout(f);
            var h = g.ok,
                k = l => {
                    l = l || {};
                    const u = b.context || q;
                    h ? b.onSuccess && b.onSuccess.call(u, l, g) : b.onError && b.onError.call(u, l, g);
                    b.onFinish && b.onFinish.call(u, l, g)
                };
            "JSON" == (b.format || "JSON") && (h || 400 <= g.status && 500 > g.status) ? g.json().then(k, function() {
                k(null)
            }): k(null)
        }
    });
    b.onFetchTimeout && 0 < b.timeout && (f = gc(() => {
        e || (e = !0, window.clearTimeout(f), b.onFetchTimeout.call(b.context || q))
    }, b.timeout))
}

function Oc(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = M("XSRF_FIELD_NAME", void 0);
    if (b = b.urlParams) b[c] && delete b[c], a = Lc(a, b || {});
    return a
}

function Pc(a, b) {
    var c = M("XSRF_FIELD_NAME", void 0);
    const d = M("XSRF_TOKEN", void 0);
    var e = b.postBody || "",
        f = b.postParams; {
        const g = M("XSRF_FIELD_NAME", void 0);
        let h;
        b.headers && (h = b.headers["Content-Type"]);
        a = !b.excludeXsrf && (!Ra(a.match(Qa)[3] || null) || b.withCredentials || Ra(a.match(Qa)[3] || null) == document.location.hostname) && "POST" == b.method && (!h || "application/x-www-form-urlencoded" == h) && !(b.postParams && b.postParams[g])
    }
    a && (f || (f = {}), f[c] = d);
    f && "string" === typeof e && (e = Kc(e), ma(e, f), e = b.postBodyFormat &&
        "JSON" == b.postBodyFormat ? JSON.stringify(e) : Ta(e));
    if (!(c = e) && (c = f)) {
        a: {
            for (const g in f) {
                f = !1;
                break a
            }
            f = !0
        }
        c = !f
    }!Mc && c && "POST" != b.method && (Mc = !0, ec(Error("AJAX request with postData should use POST")));
    return e
};

function Qc() {
    return "INNERTUBE_API_KEY" in K && "INNERTUBE_API_VERSION" in K
}

function zc() {
    return {
        innertubeApiKey: M("INNERTUBE_API_KEY", void 0),
        innertubeApiVersion: M("INNERTUBE_API_VERSION", void 0),
        ba: M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        ca: M("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        innertubeContextClientVersion: M("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
        ea: M("INNERTUBE_CONTEXT_HL", void 0),
        da: M("INNERTUBE_CONTEXT_GL", void 0),
        fa: M("INNERTUBE_HOST_OVERRIDE", void 0) || "",
        ha: !!M("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        ga: !!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: M("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
    }
}

function yc(a) {
    const b = {
        client: {
            hl: a.ea,
            gl: a.da,
            clientName: a.ca,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ba
        }
    };
    var c = window.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = M("EXPERIMENTS_TOKEN", "");
    "" !== c && (b.client.experimentsToken = c);
    c = [];
    var d = M("EXPERIMENTS_FORCED_FLAGS", {});
    for (var e in d) c.push({
        key: e,
        value: String(d[e])
    });
    e = M("EXPERIMENT_FLAGS", {});
    for (f in e) f.startsWith("force_") && void 0 === d[f] && c.push({
        key: f,
        value: String(e[f])
    });
    var f = c;
    0 < f.length && (b.request = {
        internalExperimentFlags: f
    });
    a.appInstallData && N("web_log_app_install_experiments") && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.appInstallData = a.appInstallData);
    M("DELEGATED_SESSION_ID") && !N("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: M("DELEGATED_SESSION_ID")
    });
    a = Object;
    f = a.assign;
    e = b.client;
    c = M("DEVICE", "");
    d = {};
    for (const [g, h] of Object.entries(Kc(c))) "cbrand" === g ? d.deviceMake = h : "cmodel" === g ? d.deviceModel = h : "cbr" === g ? d.browserName = h : "cbrver" === g ? d.browserVersion = h : "cos" ===
        g ? d.osName = h : "cosver" === g ? d.osVersion = h : "cplatform" === g && (d.platform = h);
    c = d;
    b.client = f.call(a, e, c);
    return b
}

function Rc(a, b, c = {}) {
    const d = {
        "X-Goog-Visitor-Id": c.visitorData || M("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.oa || M("AUTHORIZATION");
    if (!b)
        if (a) b = `Bearer ${t("gapi.auth.getToken")().na}`;
        else a: {
            a = [];b = lb(String(q.location.href));
            (c = q.__SAPISID || q.__APISID || q.__OVERRIDE_SID) ? c = !0 : (c = new F, c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
            if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ?
                    q.__SAPISID : q.__APISID, c || (c = new F, c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
                b = b ? "SAPISIDHASH" : "APISIDHASH";
                var e = String(q.location.href);
                b = e && c && b ? [b, nb(lb(e), c, a || null)].join(" ") : null;
                break a
            }
            b = null
        }
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = M("SESSION_INDEX", 0), N("pageid_as_header_web") && (d["X-Goog-PageId"] = M("DELEGATED_SESSION_ID")));
    return d
};
const Sc = t("ytPubsub2Pubsub2Instance") || new J;
J.prototype.subscribe = J.prototype.X;
J.prototype.unsubscribeByKey = J.prototype.K;
J.prototype.publish = J.prototype.G;
J.prototype.clear = J.prototype.clear;
w("ytPubsub2Pubsub2Instance", Sc);
w("ytPubsub2Pubsub2SubscribedKeys", t("ytPubsub2Pubsub2SubscribedKeys") || {});
w("ytPubsub2Pubsub2TopicToKeys", t("ytPubsub2Pubsub2TopicToKeys") || {});
w("ytPubsub2Pubsub2IsAsync", t("ytPubsub2Pubsub2IsAsync") || {});
w("ytPubsub2Pubsub2SkipSubKey", null);
const S = [];
let Tc, Uc = !1;

function Vc(a, b) {
    Uc || (Tc ? Tc.D(a, b) : (S.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < S.length && S.shift()))
};
const Wc = {
    ["AUTH_INVALID"]: "No user identifier specified.",
    ["EXPLICIT_ABORT"]: "Transaction was explicitly aborted.",
    ["IDB_NOT_SUPPORTED"]: "IndexedDB is not supported.",
    ["MISSING_OBJECT_STORE"]: "Object store not created.",
    ["UNKNOWN_ABORT"]: "Transaction was aborted for unknown reasons.",
    ["QUOTA_EXCEEDED"]: "The current transaction exceeded its quota limitations.",
    ["QUOTA_MAYBE_EXCEEDED"]: "The current transaction may have failed because of exceeding quota limitations.",
    ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "Can't start a transaction on a closed database"
};
var T = class extends Ub {
        constructor(a, b = {}, c = Wc[a]) {
            super(c, Object.assign({
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            Object.setPrototypeOf(this, T.prototype);
            Uc || (Tc ? Xc(this) : (S.push({
                type: "ERROR",
                payload: this
            }), 10 < S.length && S.shift()))
        }
    },
    Yc = class extends T {
        constructor(a) {
            super("MISSING_OBJECT_STORE", {
                wa: a
            }, Wc.MISSING_OBJECT_STORE);
            Object.setPrototypeOf(this, Yc.prototype)
        }
    };
const Zc = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function ad(a, b, c) {
    if (a instanceof T || a instanceof Ub) return a;
    if ("QuotaExceededError" === a.name) return new T("QUOTA_EXCEEDED", {
        objectStoreNames: c,
        dbName: b
    });
    if (Ca && "UnknownError" === a.name) return new T("QUOTA_MAYBE_EXCEEDED", {
        objectStoreNames: c,
        dbName: b
    });
    if ("InvalidStateError" === a.name && Zc.some(d => a.message.includes(d))) return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB", {
        objectStoreNames: c,
        dbName: b
    });
    Object.setPrototypeOf(a, Ub.prototype);
    a.args = [{
        name: "IdbError",
        xa: a.name,
        dbName: b,
        objectStoreNames: c
    }];
    return a
};

function bd(a) {
    if (!a) throw Error();
    throw a;
}

function cd(a) {
    return a
}

function dd(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof V ? ed(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function fd(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof V ? ed(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function ed(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof V ? ed(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var V = class {
    constructor(a) {
        this.i = a;
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.onRejected = [];
        this.i(b => {
            if ("PENDING" === this.state.status) {
                this.state = {
                    status: "FULFILLED",
                    value: b
                };
                for (const c of this.h) c()
            }
        }, b => {
            if ("PENDING" === this.state.status) {
                this.state = {
                    status: "REJECTED",
                    reason: b
                };
                for (const c of this.onRejected) c()
            }
        })
    }
    static all(a) {
        return new V((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) V.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        })
    }
    static resolve(a) {
        return new V((b, c) => {
            a instanceof V ? a.then(b, c) : b(a)
        })
    }
    static reject(a) {
        return new V((b, c) => {
            c(a)
        })
    }
    then(a, b) {
        const c = null !== a && void 0 !== a ? a : cd,
            d = null !== b && void 0 !== b ? b : bd;
        return new V((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                dd(this, this, c, e, f)
            }), this.onRejected.push(() => {
                fd(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? dd(this, this, c, e, f) : "REJECTED" === this.state.status && fd(this, this, d, e, f)
        })
    } catch (a) {
        return this.then(void 0, a)
    }
};

function gd(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function hd(a) {
    return new Promise((b, c) => {
        gd(a, b, c)
    })
}

function W(a) {
    return new V((b, c) => {
        gd(a, b, c)
    })
};

function id(a, b) {
    return new V((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    })
};

function X(a, b, c = "readonly", d) {
    a.transactionCount++;
    let e;
    try {
        const f = a.h.transaction(b, c);
        e = jd(f, d).catch(g => {
            throw ad(g, a.h.name, b.join());
        })
    } catch (f) {
        e = f instanceof Error ? Promise.reject(ad(f, a.h.name, b.join())) : Promise.reject(ad(Error(`unexpected transaction error: ${f}`), a.h.name, b.join()))
    }
    kd(a, e, b.join(), c);
    return e
}

function kd(a, b, c, d) {
    E(a, function*() {
        var e = Math.round(R());
        try {
            yield b;
            var f = Math.round(R());
            ld(this, !0, c, f - e)
        } catch (g) {
            f = Math.round(R()), e = f - e, g instanceof T && ("QUOTA_EXCEEDED" === g.type || "QUOTA_MAYBE_EXCEEDED" === g.type) && Vc("QUOTA_EXCEEDED", {
                dbName: this.h.name,
                objectStoreNames: c,
                transactionCount: this.transactionCount,
                transactionMode: d
            }), g instanceof T && "UNKNOWN_ABORT" === g.type && (Vc("TRANSACTION_UNEXPECTEDLY_ABORTED", {
                objectStoreNames: c,
                transactionDuration: e,
                transactionCount: this.transactionCount,
                dbDuration: f - this.j
            }), this.i = !0), ld(this, !1, c, e)
        }
    })
}

function ld(a, b, c, d) {
    Vc("TRANSACTION_ENDED", {
        objectStoreNames: c,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: d,
        isSuccessful: b
    })
}
var md = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(R());
        this.i = !1
    }
    add(a, b, c) {
        return X(this, [a], "readwrite", d => Y(d, a).add(b, c))
    }
    clear(a) {
        return X(this, [a], "readwrite", b => Y(b, a).clear())
    }
    close() {
        var a;
        this.h.close();
        (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return X(this, [a], "readonly", c => Y(c, a).count(b))
    }
    delete(a, b) {
        return X(this, [a], "readwrite", c => Y(c, a).delete(b))
    }
    get(a, b) {
        return X(this, [a], "readwrite", c => Y(c, a).get(b))
    }
    put(a, b, c) {
        return X(this, [a], "readwrite", d => Y(d, a).put(b, c))
    }
};

function nd(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return od(a).then(d => id(d, c))
}

function pd(a, b) {
    return nd(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var rd = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return W(this.h.add(a, b))
    }
    clear() {
        return W(this.h.clear()).then(() => {})
    }
    count(a) {
        return W(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? pd(this, a) : W(this.h.delete(a))
    }
    get(a) {
        return W(this.h.get(a))
    }
    index(a) {
        return new qd(this.h.index(a))
    }
    put(a, b) {
        return W(this.h.put(a, b))
    }
};

function jd(a, b) {
    a = new sd(a);
    return td(a, b)
}

function td(a, b) {
    const c = new Promise((d, e) => {
        b(a).then(f => {
            a.commit();
            d(f)
        }).catch(e)
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}

function Y(a, b) {
    b = a.h.objectStore(b);
    let c = a.i.get(b);
    c || (c = new rd(b), a.i.set(b, c));
    return c
}
var sd = class {
    constructor(a) {
        this.h = a;
        this.i = new Map;
        this.aborted = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.aborted) {
                    d = T; {
                        var e = this.h.objectStoreNames;
                        const f = [];
                        for (let g = 0; g < e.length; g++) {
                            const h = e.item(g);
                            if (null === h) throw Error("Invariant: item in DOMStringList is null");
                            f.push(h)
                        }
                        e = f
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: e.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.aborted = !0;
        throw new T("EXPLICIT_ABORT");
    }
    commit() {
        const a = this.h;
        a.commit && !this.aborted && a.commit()
    }
};

function ud(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return od(a).then(f => id(f, c))
}
var qd = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return W(this.h.count(a))
    }
    delete(a) {
        return ud(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return W(this.h.get(a))
    }
    getKey(a) {
        return W(this.h.getKey(a))
    }
};

function od(a) {
    return W(a).then(b => null === b ? null : new vd(a, b))
}
var vd = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return od(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return od(this.request)
    }
    delete() {
        return W(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return W(this.cursor.update(a))
    }
};

function wd(a, b, c) {
    return E(this, function*() {
        const d = self.indexedDB.open(a, b),
            e = c.blocked,
            f = c.blocking,
            g = c.ka,
            h = c.upgrade,
            k = c.closed;
        let l;
        const u = () => {
            l || (l = new md(d.result, {
                closed: k
            }));
            return l
        };
        d.addEventListener("upgradeneeded", p => {
            if (null === p.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
            if (null === d.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
            p.dataLoss && "none" !== p.dataLoss && Vc("IDB_DATA_CORRUPTED", {
                reason: p.dataLossMessage || "unknown reason",
                dbName: a
            });
            const m = u(),
                x = new sd(d.transaction);
            h && h(m, p.oldVersion, p.newVersion, x)
        });
        e && d.addEventListener("blocked", () => {
            e()
        });
        const n = yield hd(d);
        f && n.addEventListener("versionchange", () => {
            f(u())
        });
        n.addEventListener("close", () => {
            Vc("IDB_UNEXPECTEDLY_CLOSED", {
                dbName: a,
                dbVersion: n.version
            });
            g && g()
        });
        return u()
    })
}

function xd(a, b, c = {}) {
    return wd(a, b, c)
}

function yd(a, b = {}) {
    return E(this, function*() {
        const c = self.indexedDB.deleteDatabase(a),
            d = b.blocked;
        d && c.addEventListener("blocked", () => {
            d()
        });
        yield hd(c)
    })
};

function Z(a) {
    if (!a.h) {
        let b;
        const c = () => {
                a.h === b && (a.h = void 0)
            },
            d = {
                blocking: f => {
                    f.close()
                },
                closed: c,
                ka: c,
                upgrade: a.options.upgrade
            },
            e = () => E(a, function*() {
                try {
                    const k = yield this.i(this.name, this.options.version, d);
                    if (Ba) {
                        a: {
                            var f = k,
                                g = this.options;
                            for (const l of Object.keys(g.R))
                                if (!f.h.objectStoreNames.contains(l)) {
                                    var h = l;
                                    break a
                                }
                            h = void 0
                        }
                        if (void 0 !== h) {
                            if (Ba && !this.j) return this.j = !0, yield this.delete(), e();
                            throw new Yc(h);
                        }
                    }
                    return k
                } catch (k) {
                    if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in
                        k && "An attempt was made to open a database using a lower version than the existing version." === k.message) return this.i(this.name, void 0, Object.assign(Object.assign({}, d), {
                        upgrade: void 0
                    }));
                    c();
                    throw k;
                }
            });
        b = e();
        a.h = b
    }
    return a.h
}
var zd = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !1
    }
    i(a, b, c = {}) {
        return xd(a, b, c)
    }
    delete(a = {}) {
        return yd(this.name, a)
    }
};
const Ad = new zd("YtIdbMeta", {
    R: {
        databases: !0
    },
    upgrade(a, b) {
        1 > b && a.h.createObjectStore("databases", {
            keyPath: "actualName"
        })
    }
});

function Bd(a) {
    return E(this, function*() {
        return X(yield Z(Ad), ["databases"], "readwrite", b => {
            const c = Y(b, "databases");
            return c.get(a.actualName).then(d => {
                if (d ? a.actualName !== d.actualName || a.publicName !== d.publicName || a.userIdentifier !== d.userIdentifier || a.signedIn !== d.signedIn || a.clearDataOnAuthChange !== d.clearDataOnAuthChange : 1) return c.put(a).then(() => {})
            })
        })
    })
}

function Cd(a) {
    return E(this, function*() {
        return (yield Z(Ad)).delete("databases", a)
    })
};
let Dd;

function Ed() {
    return E(this, function*() {
        return !0
    })
}

function Fd() {
    if (void 0 !== Dd) return Dd;
    Uc = !0;
    return Dd = Ed().then(a => {
        Uc = !1;
        return a
    })
};

function Gd(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
};

function Hd() {
    throw new T("AUTH_INVALID");
    throw Error("Datasync ID not set");
}

function Id(a, b, c, d) {
    var e;
    return E(this, function*() {
        yield Jd({
            caller: "openDbImpl",
            publicName: a,
            version: b
        });
        Gd(a);
        let f;
        c ? f = {
            actualName: a,
            publicName: a,
            userIdentifier: void 0,
            signedIn: !1
        } : f = Hd();
        f.clearDataOnAuthChange = null !== (e = d.clearDataOnAuthChange) && void 0 !== e ? e : !1;
        try {
            return yield Bd(f), yield xd(f.actualName, b, d)
        } catch (g) {
            try {
                yield Cd(f.actualName)
            } catch (h) {}
            throw g;
        }
    })
}

function Jd(a) {
    return E(this, function*() {
        const b = Error().stack;
        if (!(yield Fd())) throw new T("IDB_NOT_SUPPORTED", {
            trace: b,
            context: a
        });
    })
}

function Kd(a, b, c = {}) {
    return Id(a, b, !1, c)
}

function Ld(a, b, c = {}) {
    return Id(a, b, !0, c)
}

function Md(a, b = {}) {
    return E(this, function*() {
        Gd(a);
        yield Jd({
            caller: "deleteUserDb",
            publicName: a
        });
        const c = Hd();
        yield yd(c.actualName, b);
        yield Cd(c.actualName)
    })
}

function Nd(a, b = {}) {
    return E(this, function*() {
        Gd(a);
        yield Jd({
            caller: "deleteSharedDb",
            publicName: a
        });
        yield yd(a, b);
        yield Cd(a)
    })
};
var Od = class extends zd {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        Gd(a)
    }
    i(a, b, c = {}) {
        return (this.options.V ? Ld : Kd)(a, b, Object.assign(Object.assign({}, c), {
            clearDataOnAuthChange: this.options.clearDataOnAuthChange
        }))
    }
    delete(a = {}) {
        return (this.options.V ? Nd : Md)(this.name, a)
    }
};

function vc(a) {
    !a.h && Qc() && (a.h = zc());
    return !!a.h
}

function Cc(a, b, c) {
    !M("VISITOR_DATA") && .01 > Math.random() && fc(new Ub("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!vc(a)) throw a = new Ub("innertube xhrclient not ready", "log_event", b, c), ec(a), a;
    const d = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        postParams: b,
        postBodyFormat: "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (h, k) => {
            if (c.onSuccess) c.onSuccess(k)
        },
        onFetchSuccess: h => {
            if (c.onSuccess) c.onSuccess(h)
        },
        onError: (h, k) => {
            if (c.onError) c.onError(k)
        },
        onFetchError: h => {
            if (c.onError) c.onError(h)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    b = "";
    var e = a.h.fa;
    e && (b = e);
    e = Rc(a.h.ha || !1, b, c);
    Object.assign(d.headers, e);
    d.headers.Authorization && !b && (d.headers["x-origin"] = window.location.origin);
    e = `/${"youtubei"}/${a.h.innertubeApiVersion}/${"log_event"}`;
    let f = {
        alt: "json"
    };
    a.h.ga && d.headers.Authorization || (f.key = a.h.innertubeApiKey);
    const g = Lc(`${b}${e}`, f || {});
    Fd().then(() => {
        try {
            Nc(g, d)
        } catch (h) {
            if ("InvalidAccessError" == h.name) fc(Error("An extension is blocking network request."));
            else throw h;
        }
    })
}
class Pd {
    constructor(a) {
        this.h = null;
        a ? this.h = a : Qc() && (this.h = zc())
    }
};
let Qd = Pd;

function Rd(a, b, c = {}) {
    let d = Qd;
    M("ytLoggingEventsDefaultDisabled", !1) && Qd == Pd && (d = null);
    Ec(a, b, d, c)
};
const Sd = [{
    O: a => `Cannot read property '${a.key}'`,
    J: {
        TypeError: [{
            o: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            o: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            o: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            o: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            o: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }],
        Error: [{
            o: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }]
    }
}, {
    O: a => `Cannot call '${a.key}'`,
    J: {
        TypeError: [{
            o: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            o: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            o: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            o: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            o: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            o: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}];

function Td() {
    Ud || (Ud = new Vd);
    return Ud
}
var Vd = class {
        constructor() {
            this.h = [];
            this.i = []
        }
    },
    Ud;
const Wd = new J;

function Xd(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Yd(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Yd(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Yd(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Yd(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function Zd(a, b, c, d) {
    c += `.${a}`;
    a = $d(b);
    d[c] = a;
    return c.length + a.length
}

function $d(a) {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
};
var ae = new Set,
    be = 0,
    ce = 0,
    de = 0;
const ee = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function fe(a) {
    ge(a, "WARNING")
}

function ge(a, b = "ERROR") {
    var c = {};
    c.name = M("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = M("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
    he(a, c || {}, b)
}

function he(a, b, c = "ERROR") {
    if (a) {
        if (N("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= be)) {
            {
                var e = hb(a);
                d = e.message || "Unknown Error";
                const $c = e.name || "UnknownError";
                var f = e.stack || a.h || "Not available";
                if (f.startsWith(`${$c}: ${d}`)) {
                    var g = f.split("\n");
                    g.shift();
                    f = g.join("\n")
                }
                g = e.lineNumber || "Not available";
                e = e.fileName || "Not available";
                if (a.hasOwnProperty("args") && a.args && a.args.length) {
                    var h = 0;
                    for (var k = 0; k < a.args.length; k++) {
                        var l = a.args[k],
                            u = `params.${k}`;
                        h += u.length;
                        if (l)
                            if (Array.isArray(l)) {
                                var n = b;
                                for (var p = 0; p < l.length && !(l[p] && (h += Zd(p, l[p], u, n), 500 < h)); p++);
                            } else if ("object" === typeof l) {
                            n = b;
                            for (var m in l)
                                if (l[m]) {
                                    p = m;
                                    var x = l[m],
                                        G = u,
                                        L = n;
                                    p = "string" !== typeof x || "clickTrackingParams" !== p && "trackingParams" !== p ? 0 : (x = Xd(atob(x.replace(/-/g, "+").replace(/_/g,
                                        "/")))) ? Zd(`${p}.ve`, x, G, L) : 0;
                                    h += p;
                                    h += Zd(m, l[m], u, n);
                                    if (500 < h) break
                                }
                        } else b[u] = $d(l), h += b[u].length;
                        else b[u] = $d(l), h += b[u].length;
                        if (500 <= h) break
                    }
                } else if (a.hasOwnProperty("params") && a.params)
                    if (m = a.params, "object" === typeof a.params)
                        for (k in l = 0, m) {
                            if (m[k] && (u = `params.${k}`, n = $d(m[k]), b[u] = n, l += u.length + n.length, 500 < l)) break
                        } else b.params = $d(m);
                navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
                b = {
                    message: d,
                    name: $c,
                    lineNumber: g,
                    fileName: e,
                    stack: f,
                    params: b,
                    sampleWeight: 1
                };
                d = Number(a.columnNumber);
                isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
                if (void 0 !== a.sampleWeight) var r = a.sampleWeight;
                else a: {
                    a = Td();d = b;
                    for (r of a.i)
                        if (d.message && d.message.match(r.va)) {
                            r = r.weight;
                            break a
                        }
                    for (var B of a.h)
                        if (B.qa(d)) {
                            r = B.weight;
                            break a
                        }
                    r = 1
                }
                b.sampleWeight = r;
                r = b
            }
            for (var v of Sd)
                if (v.J[r.name]) {
                    B = v.J[r.name];
                    for (var U of B)
                        if (B = r.message.match(U.o)) {
                            r.params["params.error.original"] = B[0];
                            a = U.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = B[d + 1], r.params[`params.error.${a[d]}`] = B[d + 1];
                            r.message = v.O(b);
                            break
                        }
                }
            r.params || (r.params = {});
            v = Td();
            r.params["params.errorServiceSignature"] = `msg=${v.i.length}&cb=${v.h.length}`;
            r.params["params.serviceWorker"] = "true";
            r.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length);
            window.yterr && "function" === typeof window.yterr && window.yterr(r);
            v = 0 === r.sampleWeight;
            if (!ae.has(r.message) && !v) {
                "ERROR" === c ? (Wd.G("handleError", r), N("record_app_crashed_web") && 0 === de && 1 === r.sampleWeight && (de++, Rd("appCrashed", {
                        appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                    })),
                    ce++) : "WARNING" === c && Wd.G("handleWarning", r);
                a: {
                    for (A of ee)
                        if (v = (v = qa) ? 0 <= v.toLowerCase().indexOf(A.toLowerCase()) : !1) {
                            var A = !0;
                            break a
                        }
                    A = !1
                }
                if (!A) {
                    v = {
                        stackTrace: r.stack
                    };
                    r.fileName && (v.filename = r.fileName);
                    A = r.lineNumber && r.lineNumber.split ? r.lineNumber.split(":") : [];
                    0 !== A.length && (1 !== A.length || isNaN(Number(A[0])) ? 2 !== A.length || isNaN(Number(A[0])) || isNaN(Number(A[1])) || (v.lineNumber = Number(A[0]), v.columnNumber = Number(A[1])) : v.lineNumber = Number(A[0]));
                    A = {
                        level: "ERROR_LEVEL_UNKNOWN",
                        message: r.message,
                        errorClassName: r.name,
                        sampleWeight: r.sampleWeight
                    };
                    "ERROR" === c ? A.level = "ERROR_LEVEL_ERROR" : "WARNING" === c && (A.level = "ERROR_LEVEL_WARNNING");
                    c = {
                        isObfuscated: !0,
                        browserStackInfo: v
                    };
                    v = {
                        pageUrl: window.location.href,
                        kvPairs: []
                    };
                    M("FEXP_EXPERIMENTS") && (v.experimentIds = M("FEXP_EXPERIMENTS"));
                    if (U = r.params)
                        for (var pa of Object.keys(U)) v.kvPairs.push({
                            key: `client.${pa}`,
                            value: String(U[pa])
                        });
                    pa = M("SERVER_NAME", void 0);
                    U = M("SERVER_VERSION", void 0);
                    pa && U && (v.kvPairs.push({
                        key: "server.name",
                        value: pa
                    }), v.kvPairs.push({
                        key: "server.version",
                        value: U
                    }));
                    Rd("clientError", {
                        errorMetadata: v,
                        stackTrace: c,
                        logMessage: A
                    });
                    uc()
                }
                ae.add(r.message);
                be++
            }
        }
    }
};

function ie(a) {
    return E(a, function*() {
        var b = yield q.fetch(this.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new $b).u) {
                    b = new $b(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function je() {
    return E(ke.instance, function*() {
        this.h || (this.h = ie(this).then(this.j).catch(a => {
            delete this.h;
            ge(a)
        }));
        return this.h
    })
}
var ke = class {
    constructor() {
        this.i = `${self.location.origin}/sw.js_data`
    }
    j(a) {
        var b;
        a.h || (a.h = {});
        a.h[2] || (b = D(a, 2)) && (a.h[2] = new Zb(b));
        if (b = a.h[2]) {
            const c = D(b, 5);
            c && (q.__SAPISID = c);
            null != D(b, 7) && Pb("VISITOR_DATA", D(b, 7))
        }
        return a
    }
};
w("ytglobal.prefsUserPrefsPrefs_", t("ytglobal.prefsUserPrefsPrefs_") || {});
const le = Date.now().toString();
if (!q.ytLoggingDocDocumentNonce_) {
    {
        var me;
        a: {
            if (window.crypto && window.crypto.getRandomValues) try {
                {
                    const c = Array(16),
                        d = new Uint8Array(16);
                    window.crypto.getRandomValues(d);
                    for (let e = 0; e < c.length; e++) c[e] = d[e];
                    me = c
                }
                break a
            } catch (c) {} {
                const c = Array(16);
                for (let d = 0; 16 > d; d++) {
                    const e = Date.now();
                    for (let f = 0; f < e % 23; f++) c[d] = Math.random();
                    c[d] = Math.floor(256 * Math.random())
                }
                if (le) {
                    let d = 1;
                    for (let e = 0; e < le.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ le.charCodeAt(e), d++
                }
                me = c
            }
        }
        const a = me,
            b = [];
        for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] &
            63))
    }
};

function ne(a) {
    return E(this, function*() {
        yield oe();
        fe(a)
    })
}

function pe(a, b) {
    return E(this, function*() {
        yield oe();
        Rd(a, b)
    })
}

function oe() {
    return E(this, function*() {
        try {
            yield je()
        } catch (a) {}
    })
};

function qe() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function re(a) {
    return E(this, function*() {
        if (!(a.payload && a.payload.chrome && a.payload.chrome.endpoint)) return Promise.resolve();
        const b = new FormData;
        b.append("json_navigation_endpoints", JSON.stringify([a.payload.chrome.endpoint]));
        let c = "[]";
        a.payload.chrome.extraUrlParams && (c = JSON.stringify(a.payload.chrome.extraUrlParams));
        b.append("extra_url_params", c);
        b.append("hashed_identifier", a.hashedIdentifier || "");
        b.append("identifier_salt", a.identifierSalt || "");
        return fetch("/notifications_ajax?action_convert_endpoint_to_url=1", {
            credentials: "include",
            method: "POST",
            body: b
        }).then(d => d.ok ? d.json().then(e => {
            if (!e.successful_conversion) return Promise.resolve();
            a.payload.chrome.postedEndpoint && se(a.payload.chrome.postedEndpoint);
            return te(a, e.url)
        }).catch(e => {
            ne(e);
            return Promise.resolve()
        }) : Promise.resolve())
    })
}

function te(a, b) {
    a.deviceId && O("DeviceId", a.deviceId);
    a.timestampSec && ue(a.timestampSec);
    const c = a.payload.chrome;
    return self.registration.showNotification(c.title, {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: b,
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint
        },
        tag: c.title + c.body + c.iconUrl,
        requireInteraction: !0
    }).then(() => {
        ve(a.displayCap)
    }).catch(() => {})
}

function se(a) {
    {
        const b = new FormData;
        b.append("record_notification_interactions_endpoint", JSON.stringify(a));
        return fetch("/notifications_ajax?action_record_notification_interactions=1", {
            credentials: "include",
            method: "POST",
            body: b
        })
    }
}

function we() {
    return Promise.all([P("TimestampLowerBound"), xe(), P("DeviceId")]).then(([a, b, c]) => {
        if (!a) return Promise.reject(null);
        a = {
            credentials: "include",
            method: "POST",
            body: ye({
                endpoint: b,
                deviceId: c,
                ts: a
            })
        };
        return fetch("/notifications_ajax?action_get_notifications=1", a).then(ze)
    })
}

function ze(a) {
    return a.ok ? a.json().then(Ae).catch(() => {}) : Promise.resolve()
}

function Ae(a) {
    if (a.errors) return Promise.reject(a.errors);
    a.device_id && O("DeviceId", a.device_id);
    a.ts && ue(a.ts);
    if (a.notifications) {
        const b = [];
        a.notifications.forEach(c => {
            b.push(self.registration.showNotification(c.title, {
                body: c.message,
                icon: c.iconUrl,
                data: {
                    nav: c.nav,
                    id: c.id,
                    attributionTag: c.attributionTag,
                    clickEndpoint: {}
                },
                tag: c.title + c.message + c.iconUrl,
                requireInteraction: c.requireInteraction
            }))
        });
        return Sb(b).then(() => {
            ve(a.display_cap)
        })
    }
    return Promise.resolve()
}

function ve(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let c = 0; c < b.length - a; c++) b[c].close()
    })
}

function Be(a) {
    const b = [Ce(a), P("RegistrationTimestamp").then(De), Ee(), Fe(), Ge()];
    Promise.all(b).catch(() => {
        O("IDToken", a);
        He();
        return Promise.resolve()
    })
}

function De(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Ce(a) {
    return P("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Ee() {
    return P("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Fe() {
    return P("Endpoint").then(a => xe().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Ge() {
    return P("application_server_key").then(a => Ie().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function He() {
    O("RegistrationTimestamp", 0);
    Promise.all([xe(), Je(), Ke(), Ie()]).then(([a, b, c, d]) => {
        b = b ? Tb(b) : null;
        c = c ? Tb(c) : null;
        if (d) {
            d = new Uint8Array(d);
            var e = 4;
            void 0 === e && (e = 0);
            Ga();
            e = Da[e];
            for (var f = [], g = 0; g < d.length; g += 3) {
                var h = d[g],
                    k = g + 1 < d.length,
                    l = k ? d[g + 1] : 0,
                    u = g + 2 < d.length,
                    n = u ? d[g + 2] : 0,
                    p = h >> 2;
                h = (h & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | n >> 6;
                n &= 63;
                u || (n = 64, k || (l = 64));
                f.push(e[p], e[h], e[l] || "", e[n] || "")
            }
            d = f.join("")
        } else d = null;
        Le(a, b, c, d)
    }).catch(() => {
        Le()
    })
}

function Le(a = null, b = null, c = null, d = null) {
    Xb().then(e => {
        e && (O("Endpoint", a), O("P256dhKey", b), O("AuthKey", c), O("application_server_key", d), O("Permission", Notification.permission), Promise.all([P("DeviceId"), P("NotificationsDisabled"), Me()]).then(([f, g, h]) => {
            Ne(a, f, b, c, d, g, h)
        }))
    })
}

function Ne(a, b, c, d, e, f, g) {
    a = {
        credentials: "include",
        method: "POST",
        body: ye({
            endpoint: a,
            deviceId: b,
            P: f,
            p256dhKey: c,
            authKey: d,
            applicationServerKey: e,
            S: g
        })
    };
    q.fetch("/notifications_ajax?action_register_device=1", a).then(Oe).catch(() => {})
}

function ye(a) {
    const b = new FormData;
    a.endpoint && b.append("endpoint", a.endpoint);
    a.deviceId && b.append("device_id", a.deviceId);
    a.ts && b.append("timestamp_lower_bound", a.ts);
    a.N && (b.append("notification_id", a.N.id), b.append("attribution_tag", a.N.attributionTag));
    a.P && b.append("notifications_disabled", (!!a.P).toString());
    a.p256dhKey && b.append("p256dh_key", a.p256dhKey);
    a.authKey && b.append("auth_key", a.authKey);
    a.applicationServerKey && b.append("application_server_key", a.applicationServerKey);
    a.S && b.append("registration_token",
        a.S);
    b.append("permission", Notification.permission);
    return b
}

function Oe(a) {
    O("RegistrationTimestamp", Date.now());
    a.ok && a.json().then(b => {
        b.ts && ue(b.ts);
        b.device_id && O("DeviceId", b.device_id)
    }).catch(() => {})
}

function xe() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Je() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Ke() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Ie() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Me() {
    return fetch("/notifications_ajax?action_get_registration_token=1", {
        credentials: "include",
        method: "POST"
    }).then(a => {
        if (a.ok) return a.json().then(b => b.registration_token).catch(() => {})
    })
}

function ue(a) {
    O("TimestampLowerBound", a)
};

function Pe(a, b) {
    return E(this, function*() {
        const c = yield Qe(a), d = b.map(e => Re(c, e));
        return Promise.all(d)
    })
}

function Se(a, b) {
    return E(this, function*() {
        return (yield Qe(a)).match(b)
    })
}

function Te(a, b) {
    return E(this, function*() {
        const c = yield Qe(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Ue(a, b, c) {
    return E(this, function*() {
        yield(yield Qe(a)).put(b, c)
    })
}

function Ve(a, b) {
    E(this, function*() {
        yield(yield Qe(a)).delete(b)
    })
}

function Qe(a) {
    return a.open("yt-appshell-assets")
}

function Re(a, b) {
    return E(this, function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
let We = null;
const Xe = function(a, b) {
    let c;
    return () => {
        c || (c = new Od(a, b));
        return c
    }
}("yt-serviceworker-metadata", {
    R: {
        ["auth"]: !0,
        ["resource-manifest-assets"]: !0
    },
    V: !0,
    upgrade(a, b) {
        1 > b && a.h.createObjectStore("resource-manifest-assets", void 0);
        2 > b && a.h.createObjectStore("auth", void 0)
    },
    version: 2
});

function Ye(a) {
    return E(this, function*() {
        yield X(yield Z(Xe()), ["resource-manifest-assets"], "readwrite", b => {
            const c = Y(b, "resource-manifest-assets"),
                d = Ze();
            return c.add(a, d).then(() => {
                We = d;
                let e = !0;
                return nd(c, {
                    query: IDBKeyRange.bound(0, Ze()),
                    direction: "prev"
                }, f => e ? (e = !1, f.advance(5)) : c.delete(f.getKey()).then(() => f.continue()))
            })
        })
    })
}

function $e(a) {
    return E(this, function*() {
        let b = !1,
            c = 0;
        yield X(yield Z(Xe()), ["resource-manifest-assets"], "readonly", d => nd(Y(d, "resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Ze()),
            direction: "prev"
        }, e => {
            if (e.cursor.value.includes(a)) b = !0;
            else return c += 1, e.continue()
        }));
        return b ? c : -1
    })
}

function af() {
    return E(this, function*() {
        We || (yield X(yield Z(Xe()), ["resource-manifest-assets"], "readonly", a => nd(Y(a, "resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Ze()),
            direction: "prev"
        }, b => {
            We = b.getKey()
        })));
        return We
    })
}

function Ze() {
    return Math.floor((new Date).getTime() / 1E3)
};

function bf(a) {
    return E(this, function*() {
        yield(yield Z(Xe())).put("auth", a, "shell_identifier_key")
    })
}

function cf() {
    E(this, function*() {
        yield(yield Z(Xe())).clear("auth")
    })
};

function Na(a) {
    Ja(this, a, 0, null)
}
y(Na, Ha);

function df(a, b) {
    for (; za(b) && 4 != b.i;) {
        var c = void 0;
        switch (b.j) {
            case 1:
                var d = b,
                    e = ya(d.h);
                d = d.h;
                var f = d.j;
                c = d.h;
                var g = c + e,
                    h = [];
                for (e = ""; c < g;) {
                    var k = f[c++];
                    if (128 > k) h.push(k);
                    else if (192 > k) continue;
                    else if (224 > k) {
                        var l = f[c++];
                        h.push((k & 31) << 6 | l & 63)
                    } else if (240 > k) {
                        l = f[c++];
                        var u = f[c++];
                        h.push((k & 15) << 12 | (l & 63) << 6 | u & 63)
                    } else if (248 > k) {
                        l = f[c++];
                        u = f[c++];
                        var n = f[c++];
                        k = (k & 7) << 18 | (l & 63) << 12 | (u & 63) << 6 | n & 63;
                        k -= 65536;
                        h.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320)
                    }
                    8192 <= h.length && (e += String.fromCharCode.apply(null, h),
                        h.length = 0)
                }
                if (8192 >= h.length) h = String.fromCharCode.apply(null, h);
                else {
                    f = "";
                    for (g = 0; g < h.length; g += 8192) f += String.fromCharCode.apply(null, ja(h, g, g + 8192));
                    h = f
                }
                e += h;
                d.h = c;
                c = e;
                d = a;
                1 < d.m ? d.i[1 + d.l] = c : (La(d), d.j[1] = c);
                break;
            default:
                C(b)
        }
    }
    return a
};

function ef(a) {
    Ja(this, a, 0, ff)
}
y(ef, Ha);
var ff = [1];

function gf(a) {
    var b = new ef;
    for (a = new Aa(a); za(a) && 4 != a.i;) {
        var c = void 0;
        switch (a.j) {
            case 1:
                c = new Na;
                var d = a,
                    e = c,
                    f = df,
                    g = d.h.i,
                    h = ya(d.h);
                h = d.h.h + h;
                d.h.i = h;
                f(e, d);
                d.h.h = h;
                d.h.i = g;
                d = b;
                e = c;
                c = Ma(d);
                e = e ? e : new Na;
                d = D(d, 1);
                c.push(e);
                d.push(Oa(e));
                break;
            default:
                C(a)
        }
    }
    return b
};

function hf(a) {
    return E(this, function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(jf(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function jf(a) {
    return Ma(gf(decodeURIComponent(a))).reduce((b, c) => {
        (c = D(c, 1)) && b.push(c);
        return b
    }, [])
};

function kf(a, b) {
    return E(a, function*() {
        try {
            return yield q.fetch(new Request(b))
        } catch (c) {
            return Promise.reject(c)
        }
    })
}

function lf(a) {
    return E(a, function*() {
        const b = yield je();
        let c = "LOGGED_OUT";
        b && null != D(b, 3) && (c = D(b, 3) || "LOGGED_OUT");
        return Promise.resolve(bf(c))
    })
}

function mf(a, b, c) {
    Ye(b).catch(d => {
        ne(d)
    });
    b.push(c);
    Te(a.h, b).catch(d => {
        ne(d)
    })
}

function nf(a, b) {
    return E(a, function*() {
        return Se(this.h, b)
    })
}

function of (a) {
    return E(a, function*() {
        return Se(this.h, this.i)
    })
}
var pf = class {
    constructor() {
        var a = self.location.origin + "/app_shell",
            b = self.location.origin + "/app_shell_home";
        this.h = self.caches;
        this.j = a;
        this.i = b
    }
    update() {
        return E(this, function*() {
            let a, b;
            try {
                b = yield kf(this, this.j), a = yield hf(b), yield Pe(this.h, a)
            } catch (c) {
                return Promise.reject(c)
            }
            try {
                yield lf(this), yield Ue(this.h, this.i, b)
            } catch (c) {
                return Promise.reject(c)
            }
            a && mf(this, a, this.i);
            return Promise.resolve()
        })
    }
};

function qf(a, b) {
    return E(a, function*() {
        const c = b.request,
            d = yield nf(this.h, c.url);
        if (d) return rf(c), d;
        sf(c);
        return tf(b)
    })
}

function uf(a, b) {
    return E(a, function*() {
        const c = yield vf(this, b);
        if (c.response && c.response.ok) return c.response;
        const d = yield of (this.h);
        if (d) return rf(b.request), d;
        sf(b.request);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function wf(a, b) {
    b = new URL(b);
    if (!a.i.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.l)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function xf(a, b) {
    return E(a, function*() {
        const c = yield of (this.h);
        if (!c) return sf(b.request), tf(b);
        rf(b.request);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(R() - d);
                break a
            }
            d = -1
        }
        d = -1 < d ? 7 <= d / 864E5 : !1;
        if (!d) return c;
        d = yield vf(this, b);
        return d.response && d.response.ok ? d.response : c
    })
}

function tf(a) {
    return Promise.resolve(a.preloadResponse).then(b => b || q.fetch(a.request))
}

function rf(a) {
    pe("appShellAssetLoadReport", {
        assetPath: a.url,
        cacheHit: !0
    })
}

function sf(a) {
    const b = {
            assetPath: a.url,
            cacheHit: !1
        },
        c = af().then(d => {
            d && (b.currentAppBundleTimestampSec = String(d))
        });
    a = $e(a.url).then(d => {
        b.appBundleVersionDiffCount = d
    });
    Promise.all([c, a]).catch(d => {
        ne(d)
    }).finally(() => {
        pe("appShellAssetLoadReport", b)
    })
}

function vf(a, b) {
    return E(a, function*() {
        try {
            return {
                response: yield tf(b)
            }
        } catch (c) {
            return {
                error: c
            }
        }
    })
}
var Cf = class {
    constructor(a) {
        var b = yf,
            c = zf,
            d = Af;
        var e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        e.push({
            key: "client_dev_root_url"
        });
        var f = Bf();
        this.h = a;
        this.m = b;
        this.u = c;
        this.i = d;
        this.l = e;
        this.j = f
    }
};
var Af = ["/", "/feed/downloads"];
const Df = [/^\/$/, /^\/feed\/downloads$/],
    Ef = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/];

function Bf() {
    return new RegExp((N("kevlar_sw_app_wide_fallback") ? Ef : Df).map(a => a.source).join("|"))
}
var yf = /^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,
    zf = /^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;
var Ff = class {
    constructor(a, b) {
        this.h = self;
        this.u = a;
        this.l = b
    }
    init() {
        this.h.oninstall = this.m.bind(this);
        this.h.onactivate = this.i.bind(this);
        this.h.onfetch = this.j.bind(this)
    }
    m(a) {
        a.waitUntil(this.h.skipWaiting());
        const b = this.u.update().catch(c => {
            ne(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    i(a) {
        const b = [this.h.clients.claim()];
        this.h.registration.navigationPreload && b.push(this.h.registration.navigationPreload.enable());
        a.waitUntil(Promise.all(b))
    }
    j(a) {
        return E(this, function*() {
            {
                var b = this.l,
                    c = !!this.h.registration.navigationPreload;
                const e = a.request;
                if (b.u.test(e.url)) c = a.respondWith, b = b.h, Ve(b.h, b.i), cf(), b = tf(a), c.call(a, b);
                else if (b.m.test(e.url)) a.respondWith(qf(b, a));
                else if ("navigate" === e.mode) {
                    var d = new URL(e.url);
                    (d = b.j.test(d.pathname)) ? a.respondWith(uf(b, a)):
                        wf(b, e.url) ? a.respondWith(xf(b, a)) : c && a.respondWith(tf(a))
                }
            }
        })
    }
};

function Gf() {
    var a, b;
    return E(this, function*() {
        const c = navigator;
        if (null === (a = c.storage) || void 0 === a ? 0 : a.estimate) return c.storage.estimate();
        if (null === (b = c.webkitTemporaryStorage) || void 0 === b ? 0 : b.queryUsageAndQuota) return Hf()
    })
}

function Hf() {
    const a = navigator;
    return new Promise((b, c) => {
        var d;
        null !== (d = a.webkitTemporaryStorage) && void 0 !== d && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
};

function Xc(a) {
    var b = Tc;
    if (a instanceof T) switch (a.type) {
        case "UNKNOWN_ABORT":
        case "QUOTA_EXCEEDED":
        case "QUOTA_MAYBE_EXCEEDED":
        case "EXECUTE_TRANSACTION_ON_CLOSED_DB":
        case "IDB_NOT_SUPPORTED":
            b.I(a);
            break;
        case "EXPLICIT_ABORT":
            a.sampleWeight = 0;
            break;
        default:
            b.handleError(a)
    } else b.handleError(a)
}

function If(a, b) {
    Gf().then(c => {
        c = Object.assign(Object.assign({}, b), {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Jf(null === c || void 0 === c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Jf(null === c || void 0 === c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Kf {
    constructor() {
        var a = Lf,
            b = Mf;
        this.I = Nf;
        this.handleError = a;
        this.h = b;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        })
    }
    D(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                N("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                N("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                If(this, b);
                break;
            case "TRANSACTION_ENDED":
                Math.random() <= Rb("ytidb_transaction_ended_event_rate_limit", .02) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign(Object.assign({}, b), {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function Jf(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
var {
    handleError: Lf = function(a) {
        ge(a)
    },
    I: Nf = fe,
    D: Mf = Rd
} = {
    handleError: function(a) {
        return E(this, function*() {
            yield oe();
            ge(a)
        })
    },
    I: ne,
    D: pe
};
for (Tc = new Kf; 0 < S.length;) {
    const a = S.shift();
    switch (a.type) {
        case "ERROR":
            Xc(a.payload);
            break;
        case "EVENT":
            Tc.D(a.eventType, a.payload)
    }
}
ke.instance = new ke;
self.onmessage = function(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (O("IDToken", b), He()) : "notifications_check_registration" === a && Be(b)
};
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data,
        c = self.clients.matchAll({
            type: "window",
            includeUncontrolled: !0
        });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(se(b.clickEndpoint))
};
self.onpush = function(a) {
    a.waitUntil(P("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return re(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return we()
    }));
    a.waitUntil(qe())
};
self.onpushsubscriptionchange = function() {
    He()
}; {
    const a = new pf;
    (new Ff(a, new Cf(a))).init()
};
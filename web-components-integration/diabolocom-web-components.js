/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bn(e, t) {
  const r = new Set(e.split(","));
  return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const oe = {}, Ht = [], De = () => {
}, El = () => !1, zr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xn = (e) => e.startsWith("onUpdate:"), be = Object.assign, zn = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, vl = Object.prototype.hasOwnProperty, z = (e, t) => vl.call(e, t), H = Array.isArray, Wt = (e) => yr(e) === "[object Map]", Jr = (e) => yr(e) === "[object Set]", Lo = (e) => yr(e) === "[object Date]", B = (e) => typeof e == "function", ae = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", Ws = (e) => (ne(e) || B(e)) && B(e.then) && B(e.catch), Gs = Object.prototype.toString, yr = (e) => Gs.call(e), kl = (e) => yr(e).slice(8, -1), Ks = (e) => yr(e) === "[object Object]", Jn = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, or = /* @__PURE__ */ Bn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, Tl = /-(\w)/g, lt = qr((e) => e.replace(Tl, (t, r) => r ? r.toUpperCase() : "")), Nl = /\B([A-Z])/g, He = qr(
  (e) => e.replace(Nl, "-$1").toLowerCase()
), Ys = qr((e) => e.charAt(0).toUpperCase() + e.slice(1)), mn = qr((e) => e ? `on${Ys(e)}` : ""), kt = (e, t) => !Object.is(e, t), Sr = (e, t) => {
  for (let r = 0; r < e.length; r++)
    e[r](t);
}, Fr = (e, t, r) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, qn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Oo = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Co;
const Bs = () => Co || (Co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zn(e) {
  if (H(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = ae(n) ? Cl(n) : Zn(n);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (ae(e) || ne(e))
    return e;
}
const Il = /;(?![^(]*\))/g, Ll = /:([^]+)/, Ol = /\/\*[^]*?\*\//g;
function Cl(e) {
  const t = {};
  return e.replace(Ol, "").split(Il).forEach((r) => {
    if (r) {
      const n = r.split(Ll);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Zr(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (H(e))
    for (let r = 0; r < e.length; r++) {
      const n = Zr(e[r]);
      n && (t += n + " ");
    }
  else if (ne(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const xl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Sl = /* @__PURE__ */ Bn(xl);
function Xs(e) {
  return !!e || e === "";
}
function Al(e, t) {
  if (e.length !== t.length)
    return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Qr(e[n], t[n]);
  return r;
}
function Qr(e, t) {
  if (e === t)
    return !0;
  let r = Lo(e), n = Lo(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = vt(e), n = vt(t), r || n)
    return e === t;
  if (r = H(e), n = H(t), r || n)
    return r && n ? Al(e, t) : !1;
  if (r = ne(e), n = ne(t), r || n) {
    if (!r || !n)
      return !1;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o)
      return !1;
    for (const i in e) {
      const c = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (c && !u || !c && u || !Qr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Pl(e, t) {
  return e.findIndex((r) => Qr(r, t));
}
const Bt = (e) => ae(e) ? e : e == null ? "" : H(e) || ne(e) && (e.toString === Gs || !B(e.toString)) ? JSON.stringify(e, zs, 2) : String(e), zs = (e, t) => t && t.__v_isRef ? zs(e, t.value) : Wt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, s], o) => (r[_n(n, o) + " =>"] = s, r),
    {}
  )
} : Jr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => _n(r))
} : vt(t) ? _n(t) : ne(t) && !H(t) && !Ks(t) ? String(t) : t, _n = (e, t = "") => {
  var r;
  return vt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
};
let $e;
class Js {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = $e, !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = $e;
      try {
        return $e = this, t();
      } finally {
        $e = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    $e = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    $e = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Rl(e) {
  return new Js(e);
}
function Ml(e, t = $e) {
  t && t.active && t.effects.push(e);
}
function Dl() {
  return $e;
}
let Mt;
class Qn {
  constructor(t, r, n, s) {
    this.fn = t, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ml(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Nt();
      for (let t = 0; t < this._depsLength; t++) {
        const r = this.deps[t];
        if (r.computed && (Fl(r.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), It();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = yt, r = Mt;
    try {
      return yt = !0, Mt = this, this._runnings++, xo(this), this.fn();
    } finally {
      So(this), this._runnings--, Mt = r, yt = t;
    }
  }
  stop() {
    var t;
    this.active && (xo(this), So(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Fl(e) {
  return e.value;
}
function xo(e) {
  e._trackId++, e._depsLength = 0;
}
function So(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      qs(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function qs(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let yt = !0, Nn = 0;
const Zs = [];
function Nt() {
  Zs.push(yt), yt = !1;
}
function It() {
  const e = Zs.pop();
  yt = e === void 0 ? !0 : e;
}
function eo() {
  Nn++;
}
function to() {
  for (Nn--; !Nn && In.length; )
    In.shift()();
}
function Qs(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && qs(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const In = [];
function ei(e, t, r) {
  eo();
  for (const n of e.keys()) {
    let s;
    n._dirtyLevel < t && (s ?? (s = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (s ?? (s = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && In.push(n.scheduler)));
  }
  to();
}
const ti = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = t, r;
}, Ln = /* @__PURE__ */ new WeakMap(), Dt = Symbol(""), On = Symbol("");
function Pe(e, t, r) {
  if (yt && Mt) {
    let n = Ln.get(e);
    n || Ln.set(e, n = /* @__PURE__ */ new Map());
    let s = n.get(r);
    s || n.set(r, s = ti(() => n.delete(r))), Qs(
      Mt,
      s
    );
  }
}
function at(e, t, r, n, s, o) {
  const i = Ln.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (r === "length" && H(e)) {
    const u = Number(n);
    i.forEach((d, p) => {
      (p === "length" || !vt(p) && p >= u) && c.push(d);
    });
  } else
    switch (r !== void 0 && c.push(i.get(r)), t) {
      case "add":
        H(e) ? Jn(r) && c.push(i.get("length")) : (c.push(i.get(Dt)), Wt(e) && c.push(i.get(On)));
        break;
      case "delete":
        H(e) || (c.push(i.get(Dt)), Wt(e) && c.push(i.get(On)));
        break;
      case "set":
        Wt(e) && c.push(i.get(Dt));
        break;
    }
  eo();
  for (const u of c)
    u && ei(
      u,
      4
    );
  to();
}
const Ul = /* @__PURE__ */ Bn("__proto__,__v_isRef,__isVue"), ri = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt)
), Ao = /* @__PURE__ */ Vl();
function Vl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const n = J(this);
      for (let o = 0, i = this.length; o < i; o++)
        Pe(n, "get", o + "");
      const s = n[t](...r);
      return s === -1 || s === !1 ? n[t](...r.map(J)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      Nt(), eo();
      const n = J(this)[t].apply(this, r);
      return to(), It(), n;
    };
  }), e;
}
function $l(e) {
  const t = J(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class ni {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    const s = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !s;
    if (r === "__v_isReadonly")
      return s;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (s ? o ? Ql : li : o ? ii : si).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = H(t);
    if (!s) {
      if (i && z(Ao, r))
        return Reflect.get(Ao, r, n);
      if (r === "hasOwnProperty")
        return $l;
    }
    const c = Reflect.get(t, r, n);
    return (vt(r) ? ri.has(r) : Ul(r)) || (s || Pe(t, "get", r), o) ? c : ve(c) ? i && Jn(r) ? c : c.value : ne(c) ? s ? oo(c) : tn(c) : c;
  }
}
class oi extends ni {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, s) {
    let o = t[r];
    if (!this._isShallow) {
      const u = Xt(o);
      if (!Ur(n) && !Xt(n) && (o = J(o), n = J(n)), !H(t) && ve(o) && !ve(n))
        return u ? !1 : (o.value = n, !0);
    }
    const i = H(t) && Jn(r) ? Number(r) < t.length : z(t, r), c = Reflect.set(t, r, n, s);
    return t === J(s) && (i ? kt(n, o) && at(t, "set", r, n) : at(t, "add", r, n)), c;
  }
  deleteProperty(t, r) {
    const n = z(t, r);
    t[r];
    const s = Reflect.deleteProperty(t, r);
    return s && n && at(t, "delete", r, void 0), s;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!vt(r) || !ri.has(r)) && Pe(t, "has", r), n;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      H(t) ? "length" : Dt
    ), Reflect.ownKeys(t);
  }
}
class jl extends ni {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Hl = /* @__PURE__ */ new oi(), Wl = /* @__PURE__ */ new jl(), Gl = /* @__PURE__ */ new oi(
  !0
), ro = (e) => e, en = (e) => Reflect.getPrototypeOf(e);
function Tr(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const s = J(e), o = J(t);
  r || (kt(t, o) && Pe(s, "get", t), Pe(s, "get", o));
  const { has: i } = en(s), c = n ? ro : r ? io : dr;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function Nr(e, t = !1) {
  const r = this.__v_raw, n = J(r), s = J(e);
  return t || (kt(e, s) && Pe(n, "has", e), Pe(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s);
}
function Ir(e, t = !1) {
  return e = e.__v_raw, !t && Pe(J(e), "iterate", Dt), Reflect.get(e, "size", e);
}
function Po(e) {
  e = J(e);
  const t = J(this);
  return en(t).has.call(t, e) || (t.add(e), at(t, "add", e, e)), this;
}
function Ro(e, t) {
  t = J(t);
  const r = J(this), { has: n, get: s } = en(r);
  let o = n.call(r, e);
  o || (e = J(e), o = n.call(r, e));
  const i = s.call(r, e);
  return r.set(e, t), o ? kt(t, i) && at(r, "set", e, t) : at(r, "add", e, t), this;
}
function Mo(e) {
  const t = J(this), { has: r, get: n } = en(t);
  let s = r.call(t, e);
  s || (e = J(e), s = r.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return s && at(t, "delete", e, void 0), o;
}
function Do() {
  const e = J(this), t = e.size !== 0, r = e.clear();
  return t && at(e, "clear", void 0, void 0), r;
}
function Lr(e, t) {
  return function(n, s) {
    const o = this, i = o.__v_raw, c = J(i), u = t ? ro : e ? io : dr;
    return !e && Pe(c, "iterate", Dt), i.forEach((d, p) => n.call(s, u(d), u(p), o));
  };
}
function Or(e, t, r) {
  return function(...n) {
    const s = this.__v_raw, o = J(s), i = Wt(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = s[e](...n), p = r ? ro : t ? io : dr;
    return !t && Pe(
      o,
      "iterate",
      u ? On : Dt
    ), {
      // iterator protocol
      next() {
        const { value: g, done: h } = d.next();
        return h ? { value: g, done: h } : {
          value: c ? [p(g[0]), p(g[1])] : p(g),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function _t(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Kl() {
  const e = {
    get(o) {
      return Tr(this, o);
    },
    get size() {
      return Ir(this);
    },
    has: Nr,
    add: Po,
    set: Ro,
    delete: Mo,
    clear: Do,
    forEach: Lr(!1, !1)
  }, t = {
    get(o) {
      return Tr(this, o, !1, !0);
    },
    get size() {
      return Ir(this);
    },
    has: Nr,
    add: Po,
    set: Ro,
    delete: Mo,
    clear: Do,
    forEach: Lr(!1, !0)
  }, r = {
    get(o) {
      return Tr(this, o, !0);
    },
    get size() {
      return Ir(this, !0);
    },
    has(o) {
      return Nr.call(this, o, !0);
    },
    add: _t("add"),
    set: _t("set"),
    delete: _t("delete"),
    clear: _t("clear"),
    forEach: Lr(!0, !1)
  }, n = {
    get(o) {
      return Tr(this, o, !0, !0);
    },
    get size() {
      return Ir(this, !0);
    },
    has(o) {
      return Nr.call(this, o, !0);
    },
    add: _t("add"),
    set: _t("set"),
    delete: _t("delete"),
    clear: _t("clear"),
    forEach: Lr(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Or(
      o,
      !1,
      !1
    ), r[o] = Or(
      o,
      !0,
      !1
    ), t[o] = Or(
      o,
      !1,
      !0
    ), n[o] = Or(
      o,
      !0,
      !0
    );
  }), [
    e,
    r,
    t,
    n
  ];
}
const [
  Yl,
  Bl,
  Xl,
  zl
] = /* @__PURE__ */ Kl();
function no(e, t) {
  const r = t ? e ? zl : Xl : e ? Bl : Yl;
  return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(
    z(r, s) && s in n ? r : n,
    s,
    o
  );
}
const Jl = {
  get: /* @__PURE__ */ no(!1, !1)
}, ql = {
  get: /* @__PURE__ */ no(!1, !0)
}, Zl = {
  get: /* @__PURE__ */ no(!0, !1)
}, si = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap();
function ea(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ta(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ea(kl(e));
}
function tn(e) {
  return Xt(e) ? e : so(
    e,
    !1,
    Hl,
    Jl,
    si
  );
}
function ra(e) {
  return so(
    e,
    !1,
    Gl,
    ql,
    ii
  );
}
function oo(e) {
  return so(
    e,
    !0,
    Wl,
    Zl,
    li
  );
}
function so(e, t, r, n, s) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = ta(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? n : r
  );
  return s.set(e, c), c;
}
function Gt(e) {
  return Xt(e) ? Gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ur(e) {
  return !!(e && e.__v_isShallow);
}
function ai(e) {
  return Gt(e) || Xt(e);
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function ci(e) {
  return Object.isExtensible(e) && Fr(e, "__v_skip", !0), e;
}
const dr = (e) => ne(e) ? tn(e) : e, io = (e) => ne(e) ? oo(e) : e;
class ui {
  constructor(t, r, n, s) {
    this.getter = t, this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Qn(
      () => t(this._value),
      () => Ar(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n;
  }
  get value() {
    const t = J(this);
    return (!t._cacheable || t.effect.dirty) && kt(t._value, t._value = t.effect.run()) && Ar(t, 4), fi(t), t.effect._dirtyLevel >= 2 && Ar(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function na(e, t, r = !1) {
  let n, s;
  const o = B(e);
  return o ? (n = e, s = De) : (n = e.get, s = e.set), new ui(n, s, o || !s, r);
}
function fi(e) {
  var t;
  yt && Mt && (e = J(e), Qs(
    Mt,
    (t = e.dep) != null ? t : e.dep = ti(
      () => e.dep = void 0,
      e instanceof ui ? e : void 0
    )
  ));
}
function Ar(e, t = 4, r) {
  e = J(e);
  const n = e.dep;
  n && ei(
    n,
    t
  );
}
function ve(e) {
  return !!(e && e.__v_isRef === !0);
}
function Vt(e) {
  return pi(e, !1);
}
function di(e) {
  return pi(e, !0);
}
function pi(e, t) {
  return ve(e) ? e : new oa(e, t);
}
class oa {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : J(t), this._value = r ? t : dr(t);
  }
  get value() {
    return fi(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || Ur(t) || Xt(t);
    t = r ? t : J(t), kt(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : dr(t), Ar(this, 4));
  }
}
function ue(e) {
  return ve(e) ? e.value : e;
}
const sa = {
  get: (e, t, r) => ue(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const s = e[t];
    return ve(s) && !ve(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function mi(e) {
  return Gt(e) ? e : new Proxy(e, sa);
}
var sr = { TERM_PROGRAM: "vscode", NODE: "/usr/local/bin/node", INIT_CWD: "/Users/viktor/Projects/diabolocom-test-task", TERM: "xterm-256color", SHELL: "/bin/zsh", TMPDIR: "/var/folders/sk/w7366x6s21q8c3y2wyb2_jgc0000gn/T/", npm_config_global_prefix: "/usr/local", TERM_PROGRAM_VERSION: "1.87.0", ZDOTDIR: "/Users/viktor", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/viktor/Projects/diabolocom-test-task", USER: "viktor", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/usr/local/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.RsWxnT3Sog/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/usr/local/lib/node_modules/npm/bin/npm-cli.js", PATH: "/Users/viktor/Projects/diabolocom-test-task/node_modules/.bin:/Users/viktor/Projects/node_modules/.bin:/Users/viktor/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/viktor/Library/Application Support/cloud-code/installer/google-cloud-sdk/bin", npm_package_json: "/Users/viktor/Projects/diabolocom-test-task/package.json", npm_config_userconfig: "/Users/viktor/.npmrc", npm_config_init_module: "/Users/viktor/.npm-init.js", USER_ZDOTDIR: "/Users/viktor", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/viktor/Projects/diabolocom-test-task", npm_lifecycle_event: "build", EDITOR: "vi", npm_package_name: "diabolocom-test-task", LANG: "en_US.UTF-8", npm_config_npm_version: "10.2.4", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/viktor", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_cache: "/Users/viktor/.npm", VSCODE_PATH_PREFIX: "/Users/viktor/Library/Application Support/cloud-code/installer/google-cloud-sdk/bin:", LOGNAME: "viktor", npm_lifecycle_script: "vue-tsc --noEmit && vite build", VSCODE_GIT_IPC_HANDLE: "/var/folders/sk/w7366x6s21q8c3y2wyb2_jgc0000gn/T/vscode-git-9ea8734deb.sock", npm_config_user_agent: "npm/10.2.4 node/v20.11.1 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/usr/local/bin/node", npm_config_prefix: "/usr/local", COLORTERM: "truecolor", _: "/Users/viktor/Projects/diabolocom-test-task/node_modules/.bin/vite", NODE_ENV: "production" };
const ir = [];
function ia(e, ...t) {
  Nt();
  const r = ir.length ? ir[ir.length - 1].component : null, n = r && r.appContext.config.warnHandler, s = la();
  if (n)
    ct(
      n,
      r,
      11,
      [
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        r && r.proxy,
        s.map(
          ({ vnode: o }) => `at <${Wi(r, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...aa(s)), console.warn(...o);
  }
  It();
}
function la() {
  let e = ir[ir.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function aa(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(...n === 0 ? [] : [`
`], ...ca(r));
  }), t;
}
function ca({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, s = ` at <${Wi(
    e.component,
    e.type,
    n
  )}`, o = ">" + r;
  return e.props ? [s, ...ua(e.props), o] : [s + o];
}
function ua(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((n) => {
    t.push(..._i(n, e[n]));
  }), r.length > 3 && t.push(" ..."), t;
}
function _i(e, t, r) {
  return ae(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : ve(t) ? (t = _i(e, J(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = J(t), r ? t : [`${e}=`, t]);
}
function ct(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (s) {
    rn(s, t, r);
  }
}
function Ye(e, t, r, n) {
  if (B(e)) {
    const o = ct(e, t, r, n);
    return o && Ws(o) && o.catch((i) => {
      rn(i, t, r);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(Ye(e[o], t, r, n));
  return s;
}
function rn(e, t, r, n = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let p = 0; p < d.length; p++)
          if (d[p](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      ct(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  fa(e, r, s, n);
}
function fa(e, t, r, n = !0) {
  console.error(e);
}
let pr = !1, Cn = !1;
const Te = [];
let et = 0;
const Kt = [];
let bt = null, Pt = 0;
const gi = /* @__PURE__ */ Promise.resolve();
let lo = null;
function ao(e) {
  const t = lo || gi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function da(e) {
  let t = et + 1, r = Te.length;
  for (; t < r; ) {
    const n = t + r >>> 1, s = Te[n], o = mr(s);
    o < e || o === e && s.pre ? t = n + 1 : r = n;
  }
  return t;
}
function co(e) {
  (!Te.length || !Te.includes(
    e,
    pr && e.allowRecurse ? et + 1 : et
  )) && (e.id == null ? Te.push(e) : Te.splice(da(e.id), 0, e), bi());
}
function bi() {
  !pr && !Cn && (Cn = !0, lo = gi.then(wi));
}
function pa(e) {
  const t = Te.indexOf(e);
  t > et && Te.splice(t, 1);
}
function ma(e) {
  H(e) ? Kt.push(...e) : (!bt || !bt.includes(
    e,
    e.allowRecurse ? Pt + 1 : Pt
  )) && Kt.push(e), bi();
}
function Fo(e, t, r = pr ? et + 1 : 0) {
  for (; r < Te.length; r++) {
    const n = Te[r];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Te.splice(r, 1), r--, n();
    }
  }
}
function hi(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (r, n) => mr(r) - mr(n)
    );
    if (Kt.length = 0, bt) {
      bt.push(...t);
      return;
    }
    for (bt = t, Pt = 0; Pt < bt.length; Pt++)
      bt[Pt]();
    bt = null, Pt = 0;
  }
}
const mr = (e) => e.id == null ? 1 / 0 : e.id, _a = (e, t) => {
  const r = mr(e) - mr(t);
  if (r === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return r;
};
function wi(e) {
  Cn = !1, pr = !0, Te.sort(_a);
  const t = De;
  try {
    for (et = 0; et < Te.length; et++) {
      const r = Te[et];
      r && r.active !== !1 && (sr.NODE_ENV !== "production" && t(r), ct(r, null, 14));
    }
  } finally {
    et = 0, Te.length = 0, hi(), pr = !1, lo = null, (Te.length || Kt.length) && wi();
  }
}
function ga(e, t, ...r) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || oe;
  let s = r;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in n) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: g, trim: h } = n[p] || oe;
    h && (s = r.map((v) => ae(v) ? v.trim() : v)), g && (s = r.map(qn));
  }
  let c, u = n[c = mn(t)] || // also try camelCase event handler (#2249)
  n[c = mn(lt(t))];
  !u && o && (u = n[c = mn(He(t))]), u && Ye(
    u,
    e,
    6,
    s
  );
  const d = n[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ye(
      d,
      e,
      6,
      s
    );
  }
}
function yi(e, t, r = !1) {
  const n = t.emitsCache, s = n.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, c = !1;
  if (!B(e)) {
    const u = (d) => {
      const p = yi(d, t, !0);
      p && (c = !0, be(i, p));
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (ne(e) && n.set(e, null), null) : (H(o) ? o.forEach((u) => i[u] = null) : be(i, o), ne(e) && n.set(e, i), i);
}
function nn(e, t) {
  return !e || !zr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, He(t)) || z(e, t));
}
let me = null, Ei = null;
function Vr(e) {
  const t = me;
  return me = e, Ei = e && e.type.__scopeId || null, t;
}
function $r(e, t = me, r) {
  if (!t || e._n)
    return e;
  const n = (...s) => {
    n._d && Bo(-1);
    const o = Vr(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Vr(o), n._d && Bo(1);
    }
    return i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function gn(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: d,
    render: p,
    renderCache: g,
    data: h,
    setupState: v,
    ctx: R,
    inheritAttrs: C
  } = e;
  let A, _;
  const T = Vr(e);
  try {
    if (r.shapeFlag & 4) {
      const y = s || n, x = sr.NODE_ENV !== "production" && v.__isScriptSetup ? new Proxy(y, {
        get(I, V, Y) {
          return ia(
            `Property '${String(
              V
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(I, V, Y);
        }
      }) : y;
      A = Qe(
        p.call(
          x,
          y,
          g,
          o,
          v,
          h,
          R
        )
      ), _ = u;
    } else {
      const y = t;
      sr.NODE_ENV, A = Qe(
        y.length > 1 ? y(
          o,
          sr.NODE_ENV !== "production" ? {
            get attrs() {
              return u;
            },
            slots: c,
            emit: d
          } : { attrs: u, slots: c, emit: d }
        ) : y(
          o,
          null
          /* we know it doesn't need it */
        )
      ), _ = t.props ? u : ba(u);
    }
  } catch (y) {
    fr.length = 0, rn(y, e, 1), A = _e(zt);
  }
  let N = A;
  if (_ && C !== !1) {
    const y = Object.keys(_), { shapeFlag: x } = N;
    y.length && x & 7 && (i && y.some(Xn) && (_ = ha(
      _,
      i
    )), N = Jt(N, _));
  }
  return r.dirs && (N = Jt(N), N.dirs = N.dirs ? N.dirs.concat(r.dirs) : r.dirs), r.transition && (N.transition = r.transition), A = N, Vr(T), A;
}
const ba = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || zr(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ha = (e, t) => {
  const r = {};
  for (const n in e)
    (!Xn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function wa(e, t, r) {
  const { props: n, children: s, component: o } = e, { props: i, children: c, patchFlag: u } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? Uo(n, i, d) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        const h = p[g];
        if (i[h] !== n[h] && !nn(d, h))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : n === i ? !1 : n ? i ? Uo(n, i, d) : !0 : !!i;
  return !1;
}
function Uo(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (t[o] !== e[o] && !nn(r, o))
      return !0;
  }
  return !1;
}
function ya({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const Ea = Symbol.for("v-ndc"), va = (e) => e.__isSuspense;
function ka(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : ma(e);
}
const Ta = Symbol.for("v-scx"), Na = () => ur(Ta), Cr = {};
function Ft(e, t, r) {
  return vi(e, t, r);
}
function vi(e, t, {
  immediate: r,
  deep: n,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = oe) {
  if (t && o) {
    const I = t;
    t = (...V) => {
      I(...V), x();
    };
  }
  const u = pe, d = (I) => n === !0 ? I : (
    // for deep: false, only traverse root-level properties
    Rt(I, n === !1 ? 1 : void 0)
  );
  let p, g = !1, h = !1;
  if (ve(e) ? (p = () => e.value, g = Ur(e)) : Gt(e) ? (p = () => d(e), g = !0) : H(e) ? (h = !0, g = e.some((I) => Gt(I) || Ur(I)), p = () => e.map((I) => {
    if (ve(I))
      return I.value;
    if (Gt(I))
      return d(I);
    if (B(I))
      return ct(I, u, 2);
  })) : B(e) ? t ? p = () => ct(e, u, 2) : p = () => (v && v(), Ye(
    e,
    u,
    3,
    [R]
  )) : p = De, t && n) {
    const I = p;
    p = () => Rt(I());
  }
  let v, R = (I) => {
    v = N.onStop = () => {
      ct(I, u, 4), v = N.onStop = void 0;
    };
  }, C;
  if (ln)
    if (R = De, t ? r && Ye(t, u, 3, [
      p(),
      h ? [] : void 0,
      R
    ]) : p(), s === "sync") {
      const I = Na();
      C = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return De;
  let A = h ? new Array(e.length).fill(Cr) : Cr;
  const _ = () => {
    if (!(!N.active || !N.dirty))
      if (t) {
        const I = N.run();
        (n || g || (h ? I.some((V, Y) => kt(V, A[Y])) : kt(I, A))) && (v && v(), Ye(t, u, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          A === Cr ? void 0 : h && A[0] === Cr ? [] : A,
          R
        ]), A = I);
      } else
        N.run();
  };
  _.allowRecurse = !!t;
  let T;
  s === "sync" ? T = _ : s === "post" ? T = () => Se(_, u && u.suspense) : (_.pre = !0, u && (_.id = u.uid), T = () => co(_));
  const N = new Qn(p, De, T), y = Dl(), x = () => {
    N.stop(), y && zn(y.effects, N);
  };
  return t ? r ? _() : A = N.run() : s === "post" ? Se(
    N.run.bind(N),
    u && u.suspense
  ) : N.run(), C && C.push(x), x;
}
function Ia(e, t, r) {
  const n = this.proxy, s = ae(e) ? e.includes(".") ? ki(n, e) : () => n[e] : e.bind(n, n);
  let o;
  B(t) ? o = t : (o = t.handler, r = t);
  const i = vr(this), c = vi(s, o.bind(n), r);
  return i(), c;
}
function ki(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let s = 0; s < r.length && n; s++)
      n = n[r[s]];
    return n;
  };
}
function Rt(e, t, r = 0, n) {
  if (!ne(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (r >= t)
      return e;
    r++;
  }
  if (n = n || /* @__PURE__ */ new Set(), n.has(e))
    return e;
  if (n.add(e), ve(e))
    Rt(e.value, t, r, n);
  else if (H(e))
    for (let s = 0; s < e.length; s++)
      Rt(e[s], t, r, n);
  else if (Jr(e) || Wt(e))
    e.forEach((s) => {
      Rt(s, t, r, n);
    });
  else if (Ks(e))
    for (const s in e)
      Rt(e[s], t, r, n);
  return e;
}
function La(e, t) {
  if (me === null)
    return e;
  const r = an(me) || me.proxy, n = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, c, u = oe] = t[s];
    o && (B(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Rt(i), n.push({
      dir: o,
      instance: r,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: u
    }));
  }
  return e;
}
function xt(e, t, r, n) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[n];
    u && (Nt(), Ye(u, r, 8, [
      e.el,
      c,
      e,
      t
    ]), It());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ut(e, t) {
  return B(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    be({ name: e.name }, t, { setup: e })
  ) : e;
}
const lr = (e) => !!e.type.__asyncLoader, Ti = (e) => e.type.__isKeepAlive;
function Oa(e, t) {
  Ni(e, "a", t);
}
function Ca(e, t) {
  Ni(e, "da", t);
}
function Ni(e, t, r = pe) {
  const n = e.__wdc || (e.__wdc = () => {
    let s = r;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (on(t, n, r), r) {
    let s = r.parent;
    for (; s && s.parent; )
      Ti(s.parent.vnode) && xa(n, t, r, s), s = s.parent;
  }
}
function xa(e, t, r, n) {
  const s = on(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  uo(() => {
    zn(n[t], s);
  }, r);
}
function on(e, t, r = pe, n = !1) {
  if (r) {
    const s = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (r.isUnmounted)
        return;
      Nt();
      const c = vr(r), u = Ye(t, r, e, i);
      return c(), It(), u;
    });
    return n ? s.unshift(o) : s.push(o), o;
  }
}
const ft = (e) => (t, r = pe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ln || e === "sp") && on(e, (...n) => t(...n), r)
), Ii = ft("bm"), Li = ft("m"), Sa = ft("bu"), Aa = ft("u"), Pa = ft("bum"), uo = ft("um"), Ra = ft("sp"), Ma = ft(
  "rtg"
), Da = ft(
  "rtc"
);
function Fa(e, t = pe) {
  on("ec", e, t);
}
function Ua(e, t, r, n) {
  let s;
  const o = r && r[n];
  if (H(e) || ae(e)) {
    s = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (ne(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, c) => t(i, c, void 0, o && o[c])
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const d = i[c];
        s[c] = t(e[d], d, c, o && o[c]);
      }
    }
  else
    s = [];
  return r && (r[n] = s), s;
}
function Va(e, t, r = {}, n, s) {
  if (me.isCE || me.parent && lr(me.parent) && me.parent.isCE)
    return t !== "default" && (r.name = t), _e("slot", r, n && n());
  let o = e[t];
  o && o._c && (o._d = !1), Et();
  const i = o && Oi(o(r)), c = Vi(
    Ae,
    {
      key: r.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (n ? n() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function Oi(e) {
  return e.some((t) => Hr(t) ? !(t.type === zt || t.type === Ae && !Oi(t.children)) : !0) ? e : null;
}
const xn = (e) => e ? ji(e) ? an(e) || e.proxy : xn(e.parent) : null, ar = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xn(e.parent),
    $root: (e) => xn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, co(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ao.bind(e.proxy)),
    $watch: (e) => Ia.bind(e)
  })
), bn = (e, t) => e !== oe && !e.__isScriptSetup && z(e, t), $a = {
  get({ _: e }, t) {
    const { ctx: r, setupState: n, data: s, props: o, accessCache: i, type: c, appContext: u } = e;
    let d;
    if (t[0] !== "$") {
      const v = i[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return n[t];
          case 2:
            return s[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (bn(n, t))
          return i[t] = 1, n[t];
        if (s !== oe && z(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && z(d, t)
        )
          return i[t] = 3, o[t];
        if (r !== oe && z(r, t))
          return i[t] = 4, r[t];
        Sn && (i[t] = 0);
      }
    }
    const p = ar[t];
    let g, h;
    if (p)
      return t === "$attrs" && Pe(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (g = c.__cssModules) && (g = g[t])
    )
      return g;
    if (r !== oe && z(r, t))
      return i[t] = 4, r[t];
    if (
      // global properties
      h = u.config.globalProperties, z(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: s, ctx: o } = e;
    return bn(s, t) ? (s[t] = r, !0) : n !== oe && z(n, t) ? (n[t] = r, !0) : z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: s, propsOptions: o }
  }, i) {
    let c;
    return !!r[i] || e !== oe && z(e, i) || bn(t, i) || (c = o[0]) && z(c, i) || z(n, i) || z(ar, i) || z(s.config.globalProperties, i);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : z(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Vo(e) {
  return H(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Sn = !0;
function ja(e) {
  const t = fo(e), r = e.proxy, n = e.ctx;
  Sn = !1, t.beforeCreate && $o(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: g,
    mounted: h,
    beforeUpdate: v,
    updated: R,
    activated: C,
    deactivated: A,
    beforeDestroy: _,
    beforeUnmount: T,
    destroyed: N,
    unmounted: y,
    render: x,
    renderTracked: I,
    renderTriggered: V,
    errorCaptured: Y,
    serverPrefetch: F,
    // public API
    expose: ie,
    inheritAttrs: he,
    // assets
    components: le,
    directives: we,
    filters: Be
  } = t;
  if (d && Ha(d, n, null), i)
    for (const Z in i) {
      const q = i[Z];
      B(q) && (n[Z] = q.bind(r));
    }
  if (s) {
    const Z = s.call(r, r);
    ne(Z) && (e.data = tn(Z));
  }
  if (Sn = !0, o)
    for (const Z in o) {
      const q = o[Z], Ce = B(q) ? q.bind(r, r) : B(q.get) ? q.get.bind(r, r) : De, Xe = !B(q) && B(q.set) ? q.set.bind(r) : De, ce = We({
        get: Ce,
        set: Xe
      });
      Object.defineProperty(n, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => ce.value,
        set: (ye) => ce.value = ye
      });
    }
  if (c)
    for (const Z in c)
      Ci(c[Z], n, r, Z);
  if (u) {
    const Z = B(u) ? u.call(r) : u;
    Reflect.ownKeys(Z).forEach((q) => {
      Xa(q, Z[q]);
    });
  }
  p && $o(p, e, "c");
  function te(Z, q) {
    H(q) ? q.forEach((Ce) => Z(Ce.bind(r))) : q && Z(q.bind(r));
  }
  if (te(Ii, g), te(Li, h), te(Sa, v), te(Aa, R), te(Oa, C), te(Ca, A), te(Fa, Y), te(Da, I), te(Ma, V), te(Pa, T), te(uo, y), te(Ra, F), H(ie))
    if (ie.length) {
      const Z = e.exposed || (e.exposed = {});
      ie.forEach((q) => {
        Object.defineProperty(Z, q, {
          get: () => r[q],
          set: (Ce) => r[q] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  x && e.render === De && (e.render = x), he != null && (e.inheritAttrs = he), le && (e.components = le), we && (e.directives = we);
}
function Ha(e, t, r = De) {
  H(e) && (e = An(e));
  for (const n in e) {
    const s = e[n];
    let o;
    ne(s) ? "default" in s ? o = ur(
      s.from || n,
      s.default,
      !0
    ) : o = ur(s.from || n) : o = ur(s), ve(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[n] = o;
  }
}
function $o(e, t, r) {
  Ye(
    H(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Ci(e, t, r, n) {
  const s = n.includes(".") ? ki(r, n) : () => r[n];
  if (ae(e)) {
    const o = t[e];
    B(o) && Ft(s, o);
  } else if (B(e))
    Ft(s, e.bind(r));
  else if (ne(e))
    if (H(e))
      e.forEach((o) => Ci(o, t, r, n));
    else {
      const o = B(e.handler) ? e.handler.bind(r) : t[e.handler];
      B(o) && Ft(s, o, e);
    }
}
function fo(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !s.length && !r && !n ? u = t : (u = {}, s.length && s.forEach(
    (d) => jr(u, d, i, !0)
  ), jr(u, t, i)), ne(t) && o.set(t, u), u;
}
function jr(e, t, r, n = !1) {
  const { mixins: s, extends: o } = t;
  o && jr(e, o, r, !0), s && s.forEach(
    (i) => jr(e, i, r, !0)
  );
  for (const i in t)
    if (!(n && i === "expose")) {
      const c = Wa[i] || r && r[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Wa = {
  data: jo,
  props: Ho,
  emits: Ho,
  // objects
  methods: nr,
  computed: nr,
  // lifecycle
  beforeCreate: Le,
  created: Le,
  beforeMount: Le,
  mounted: Le,
  beforeUpdate: Le,
  updated: Le,
  beforeDestroy: Le,
  beforeUnmount: Le,
  destroyed: Le,
  unmounted: Le,
  activated: Le,
  deactivated: Le,
  errorCaptured: Le,
  serverPrefetch: Le,
  // assets
  components: nr,
  directives: nr,
  // watch
  watch: Ka,
  // provide / inject
  provide: jo,
  inject: Ga
};
function jo(e, t) {
  return t ? e ? function() {
    return be(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ga(e, t) {
  return nr(An(e), An(t));
}
function An(e) {
  if (H(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nr(e, t) {
  return e ? be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ho(e, t) {
  return e ? H(e) && H(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : be(
    /* @__PURE__ */ Object.create(null),
    Vo(e),
    Vo(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const r = be(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Le(e[n], t[n]);
  return r;
}
function xi() {
  return {
    app: null,
    config: {
      isNativeTag: El,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ya = 0;
function Ba(e, t) {
  return function(n, s = null) {
    B(n) || (n = be({}, n)), s != null && !ne(s) && (s = null);
    const o = xi(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = o.app = {
      _uid: Ya++,
      _component: n,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: yc,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...p) {
        return i.has(d) || (d && B(d.install) ? (i.add(d), d.install(u, ...p)) : B(d) && (i.add(d), d(u, ...p))), u;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u;
      },
      component(d, p) {
        return p ? (o.components[d] = p, u) : o.components[d];
      },
      directive(d, p) {
        return p ? (o.directives[d] = p, u) : o.directives[d];
      },
      mount(d, p, g) {
        if (!c) {
          const h = _e(n, s);
          return h.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), p && t ? t(h, d) : e(h, d, g), c = !0, u._container = d, d.__vue_app__ = u, an(h.component) || h.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, p) {
        return o.provides[d] = p, u;
      },
      runWithContext(d) {
        const p = cr;
        cr = u;
        try {
          return d();
        } finally {
          cr = p;
        }
      }
    };
    return u;
  };
}
let cr = null;
function Xa(e, t) {
  if (pe) {
    let r = pe.provides;
    const n = pe.parent && pe.parent.provides;
    n === r && (r = pe.provides = Object.create(n)), r[e] = t;
  }
}
function ur(e, t, r = !1) {
  const n = pe || me;
  if (n || cr) {
    const s = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : cr._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return r && B(t) ? t.call(n && n.proxy) : t;
  }
}
function za(e, t, r, n = !1) {
  const s = {}, o = {};
  Fr(o, sn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Si(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  r ? e.props = n ? s : ra(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function Ja(e, t, r, n) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = J(s), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        let h = p[g];
        if (nn(e.emitsOptions, h))
          continue;
        const v = t[h];
        if (u)
          if (z(o, h))
            v !== o[h] && (o[h] = v, d = !0);
          else {
            const R = lt(h);
            s[R] = Pn(
              u,
              c,
              R,
              v,
              e,
              !1
            );
          }
        else
          v !== o[h] && (o[h] = v, d = !0);
      }
    }
  } else {
    Si(e, t, s, o) && (d = !0);
    let p;
    for (const g in c)
      (!t || // for camelCase
      !z(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = He(g)) === g || !z(t, p))) && (u ? r && // for camelCase
      (r[g] !== void 0 || // for kebab-case
      r[p] !== void 0) && (s[g] = Pn(
        u,
        c,
        g,
        void 0,
        e,
        !0
      )) : delete s[g]);
    if (o !== c)
      for (const g in o)
        (!t || !z(t, g)) && (delete o[g], d = !0);
  }
  d && at(e, "set", "$attrs");
}
function Si(e, t, r, n) {
  const [s, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (or(u))
        continue;
      const d = t[u];
      let p;
      s && z(s, p = lt(u)) ? !o || !o.includes(p) ? r[p] = d : (c || (c = {}))[p] = d : nn(e.emitsOptions, u) || (!(u in n) || d !== n[u]) && (n[u] = d, i = !0);
    }
  if (o) {
    const u = J(r), d = c || oe;
    for (let p = 0; p < o.length; p++) {
      const g = o[p];
      r[g] = Pn(
        s,
        u,
        g,
        d[g],
        e,
        !z(d, g)
      );
    }
  }
  return i;
}
function Pn(e, t, r, n, s, o) {
  const i = e[r];
  if (i != null) {
    const c = z(i, "default");
    if (c && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && B(u)) {
        const { propsDefaults: d } = s;
        if (r in d)
          n = d[r];
        else {
          const p = vr(s);
          n = d[r] = u.call(
            null,
            t
          ), p();
        }
      } else
        n = u;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? n = !1 : i[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === He(r)) && (n = !0));
  }
  return n;
}
function Ai(e, t, r = !1) {
  const n = t.propsCache, s = n.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!B(e)) {
    const p = (g) => {
      u = !0;
      const [h, v] = Ai(g, t, !0);
      be(i, h), v && c.push(...v);
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!o && !u)
    return ne(e) && n.set(e, Ht), Ht;
  if (H(o))
    for (let p = 0; p < o.length; p++) {
      const g = lt(o[p]);
      Wo(g) && (i[g] = oe);
    }
  else if (o)
    for (const p in o) {
      const g = lt(p);
      if (Wo(g)) {
        const h = o[p], v = i[g] = H(h) || B(h) ? { type: h } : be({}, h);
        if (v) {
          const R = Yo(Boolean, v.type), C = Yo(String, v.type);
          v[
            0
            /* shouldCast */
          ] = R > -1, v[
            1
            /* shouldCastTrue */
          ] = C < 0 || R < C, (R > -1 || z(v, "default")) && c.push(g);
        }
      }
    }
  const d = [i, c];
  return ne(e) && n.set(e, d), d;
}
function Wo(e) {
  return e[0] !== "$" && !or(e);
}
function Go(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ko(e, t) {
  return Go(e) === Go(t);
}
function Yo(e, t) {
  return H(t) ? t.findIndex((r) => Ko(r, e)) : B(t) && Ko(t, e) ? 0 : -1;
}
const Pi = (e) => e[0] === "_" || e === "$stable", po = (e) => H(e) ? e.map(Qe) : [Qe(e)], qa = (e, t, r) => {
  if (t._n)
    return t;
  const n = $r((...s) => (sr.NODE_ENV !== "production" && pe && (!r || (r.root, pe.root)), po(t(...s))), r);
  return n._c = !1, n;
}, Ri = (e, t, r) => {
  const n = e._ctx;
  for (const s in e) {
    if (Pi(s))
      continue;
    const o = e[s];
    if (B(o))
      t[s] = qa(s, o, n);
    else if (o != null) {
      const i = po(o);
      t[s] = () => i;
    }
  }
}, Mi = (e, t) => {
  const r = po(t);
  e.slots.default = () => r;
}, Za = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (e.slots = J(t), Fr(t, "_", r)) : Ri(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Mi(e, t);
  Fr(e.slots, sn, 1);
}, Qa = (e, t, r) => {
  const { vnode: n, slots: s } = e;
  let o = !0, i = oe;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? r && c === 1 ? o = !1 : (be(s, t), !r && c === 1 && delete s._) : (o = !t.$stable, Ri(t, s)), i = t;
  } else
    t && (Mi(e, t), i = { default: 1 });
  if (o)
    for (const c in s)
      !Pi(c) && i[c] == null && delete s[c];
};
function Rn(e, t, r, n, s = !1) {
  if (H(e)) {
    e.forEach(
      (h, v) => Rn(
        h,
        t && (H(t) ? t[v] : t),
        r,
        n,
        s
      )
    );
    return;
  }
  if (lr(n) && !s)
    return;
  const o = n.shapeFlag & 4 ? an(n.component) || n.component.proxy : n.el, i = s ? null : o, { i: c, r: u } = e, d = t && t.r, p = c.refs === oe ? c.refs = {} : c.refs, g = c.setupState;
  if (d != null && d !== u && (ae(d) ? (p[d] = null, z(g, d) && (g[d] = null)) : ve(d) && (d.value = null)), B(u))
    ct(u, c, 12, [i, p]);
  else {
    const h = ae(u), v = ve(u);
    if (h || v) {
      const R = () => {
        if (e.f) {
          const C = h ? z(g, u) ? g[u] : p[u] : u.value;
          s ? H(C) && zn(C, o) : H(C) ? C.includes(o) || C.push(o) : h ? (p[u] = [o], z(g, u) && (g[u] = p[u])) : (u.value = [o], e.k && (p[e.k] = u.value));
        } else
          h ? (p[u] = i, z(g, u) && (g[u] = i)) : v && (u.value = i, e.k && (p[e.k] = i));
      };
      i ? (R.id = -1, Se(R, r)) : R();
    }
  }
}
const Se = ka;
function ec(e) {
  return tc(e);
}
function tc(e, t) {
  const r = Bs();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: p,
    parentNode: g,
    nextSibling: h,
    setScopeId: v = De,
    insertStaticContent: R
  } = e, C = (a, l, f, m = null, w = null, k = null, S = void 0, O = null, P = !!l.dynamicChildren) => {
    if (a === l)
      return;
    a && !tr(a, l) && (m = rt(a), ye(a, w, k, !0), a = null), l.patchFlag === -2 && (P = !1, l.dynamicChildren = null);
    const { type: L, ref: U, shapeFlag: j } = l;
    switch (L) {
      case Er:
        A(a, l, f, m);
        break;
      case zt:
        _(a, l, f, m);
        break;
      case wn:
        a == null && T(l, f, m, S);
        break;
      case Ae:
        le(
          a,
          l,
          f,
          m,
          w,
          k,
          S,
          O,
          P
        );
        break;
      default:
        j & 1 ? x(
          a,
          l,
          f,
          m,
          w,
          k,
          S,
          O,
          P
        ) : j & 6 ? we(
          a,
          l,
          f,
          m,
          w,
          k,
          S,
          O,
          P
        ) : (j & 64 || j & 128) && L.process(
          a,
          l,
          f,
          m,
          w,
          k,
          S,
          O,
          P,
          Ie
        );
    }
    U != null && w && Rn(U, a && a.ref, k, l || a, !l);
  }, A = (a, l, f, m) => {
    if (a == null)
      n(
        l.el = c(l.children),
        f,
        m
      );
    else {
      const w = l.el = a.el;
      l.children !== a.children && d(w, l.children);
    }
  }, _ = (a, l, f, m) => {
    a == null ? n(
      l.el = u(l.children || ""),
      f,
      m
    ) : l.el = a.el;
  }, T = (a, l, f, m) => {
    [a.el, a.anchor] = R(
      a.children,
      l,
      f,
      m,
      a.el,
      a.anchor
    );
  }, N = ({ el: a, anchor: l }, f, m) => {
    let w;
    for (; a && a !== l; )
      w = h(a), n(a, f, m), a = w;
    n(l, f, m);
  }, y = ({ el: a, anchor: l }) => {
    let f;
    for (; a && a !== l; )
      f = h(a), s(a), a = f;
    s(l);
  }, x = (a, l, f, m, w, k, S, O, P) => {
    l.type === "svg" ? S = "svg" : l.type === "math" && (S = "mathml"), a == null ? I(
      l,
      f,
      m,
      w,
      k,
      S,
      O,
      P
    ) : F(
      a,
      l,
      w,
      k,
      S,
      O,
      P
    );
  }, I = (a, l, f, m, w, k, S, O) => {
    let P, L;
    const { props: U, shapeFlag: j, transition: M, dirs: b } = a;
    if (P = a.el = i(
      a.type,
      k,
      U && U.is,
      U
    ), j & 8 ? p(P, a.children) : j & 16 && Y(
      a.children,
      P,
      null,
      m,
      w,
      hn(a, k),
      S,
      O
    ), b && xt(a, null, m, "created"), V(P, a, a.scopeId, S, m), U) {
      for (const $ in U)
        $ !== "value" && !or($) && o(
          P,
          $,
          null,
          U[$],
          k,
          a.children,
          m,
          w,
          Ne
        );
      "value" in U && o(P, "value", null, U.value, k), (L = U.onVnodeBeforeMount) && qe(L, m, a);
    }
    b && xt(a, null, m, "beforeMount");
    const E = rc(w, M);
    E && M.beforeEnter(P), n(P, l, f), ((L = U && U.onVnodeMounted) || E || b) && Se(() => {
      L && qe(L, m, a), E && M.enter(P), b && xt(a, null, m, "mounted");
    }, w);
  }, V = (a, l, f, m, w) => {
    if (f && v(a, f), m)
      for (let k = 0; k < m.length; k++)
        v(a, m[k]);
    if (w) {
      let k = w.subTree;
      if (l === k) {
        const S = w.vnode;
        V(
          a,
          S,
          S.scopeId,
          S.slotScopeIds,
          w.parent
        );
      }
    }
  }, Y = (a, l, f, m, w, k, S, O, P = 0) => {
    for (let L = P; L < a.length; L++) {
      const U = a[L] = O ? ht(a[L]) : Qe(a[L]);
      C(
        null,
        U,
        l,
        f,
        m,
        w,
        k,
        S,
        O
      );
    }
  }, F = (a, l, f, m, w, k, S) => {
    const O = l.el = a.el;
    let { patchFlag: P, dynamicChildren: L, dirs: U } = l;
    P |= a.patchFlag & 16;
    const j = a.props || oe, M = l.props || oe;
    let b;
    if (f && St(f, !1), (b = M.onVnodeBeforeUpdate) && qe(b, f, l, a), U && xt(l, a, f, "beforeUpdate"), f && St(f, !0), L ? ie(
      a.dynamicChildren,
      L,
      O,
      f,
      m,
      hn(l, w),
      k
    ) : S || q(
      a,
      l,
      O,
      null,
      f,
      m,
      hn(l, w),
      k,
      !1
    ), P > 0) {
      if (P & 16)
        he(
          O,
          l,
          j,
          M,
          f,
          m,
          w
        );
      else if (P & 2 && j.class !== M.class && o(O, "class", null, M.class, w), P & 4 && o(O, "style", j.style, M.style, w), P & 8) {
        const E = l.dynamicProps;
        for (let $ = 0; $ < E.length; $++) {
          const G = E[$], ee = j[G], ke = M[G];
          (ke !== ee || G === "value") && o(
            O,
            G,
            ee,
            ke,
            w,
            a.children,
            f,
            m,
            Ne
          );
        }
      }
      P & 1 && a.children !== l.children && p(O, l.children);
    } else
      !S && L == null && he(
        O,
        l,
        j,
        M,
        f,
        m,
        w
      );
    ((b = M.onVnodeUpdated) || U) && Se(() => {
      b && qe(b, f, l, a), U && xt(l, a, f, "updated");
    }, m);
  }, ie = (a, l, f, m, w, k, S) => {
    for (let O = 0; O < l.length; O++) {
      const P = a[O], L = l[O], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !tr(P, L) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? g(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          f
        )
      );
      C(
        P,
        L,
        U,
        null,
        m,
        w,
        k,
        S,
        !0
      );
    }
  }, he = (a, l, f, m, w, k, S) => {
    if (f !== m) {
      if (f !== oe)
        for (const O in f)
          !or(O) && !(O in m) && o(
            a,
            O,
            f[O],
            null,
            S,
            l.children,
            w,
            k,
            Ne
          );
      for (const O in m) {
        if (or(O))
          continue;
        const P = m[O], L = f[O];
        P !== L && O !== "value" && o(
          a,
          O,
          L,
          P,
          S,
          l.children,
          w,
          k,
          Ne
        );
      }
      "value" in m && o(a, "value", f.value, m.value, S);
    }
  }, le = (a, l, f, m, w, k, S, O, P) => {
    const L = l.el = a ? a.el : c(""), U = l.anchor = a ? a.anchor : c("");
    let { patchFlag: j, dynamicChildren: M, slotScopeIds: b } = l;
    b && (O = O ? O.concat(b) : b), a == null ? (n(L, f, m), n(U, f, m), Y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      l.children || [],
      f,
      U,
      w,
      k,
      S,
      O,
      P
    )) : j > 0 && j & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (ie(
      a.dynamicChildren,
      M,
      f,
      w,
      k,
      S,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (l.key != null || w && l === w.subTree) && Di(
      a,
      l,
      !0
      /* shallow */
    )) : q(
      a,
      l,
      f,
      U,
      w,
      k,
      S,
      O,
      P
    );
  }, we = (a, l, f, m, w, k, S, O, P) => {
    l.slotScopeIds = O, a == null ? l.shapeFlag & 512 ? w.ctx.activate(
      l,
      f,
      m,
      S,
      P
    ) : Be(
      l,
      f,
      m,
      w,
      k,
      S,
      P
    ) : dt(a, l, P);
  }, Be = (a, l, f, m, w, k, S) => {
    const O = a.component = fc(
      a,
      m,
      w
    );
    if (Ti(a) && (O.ctx.renderer = Ie), dc(O), O.asyncDep) {
      if (w && w.registerDep(O, te), !a.el) {
        const P = O.subTree = _e(zt);
        _(null, P, l, f);
      }
    } else
      te(
        O,
        a,
        l,
        f,
        w,
        k,
        S
      );
  }, dt = (a, l, f) => {
    const m = l.component = a.component;
    if (wa(a, l, f))
      if (m.asyncDep && !m.asyncResolved) {
        Z(m, l, f);
        return;
      } else
        m.next = l, pa(m.update), m.effect.dirty = !0, m.update();
    else
      l.el = a.el, m.vnode = l;
  }, te = (a, l, f, m, w, k, S) => {
    const O = () => {
      if (a.isMounted) {
        let { next: U, bu: j, u: M, parent: b, vnode: E } = a;
        {
          const Re = Fi(a);
          if (Re) {
            U && (U.el = E.el, Z(a, U, S)), Re.asyncDep.then(() => {
              a.isUnmounted || O();
            });
            return;
          }
        }
        let $ = U, G;
        St(a, !1), U ? (U.el = E.el, Z(a, U, S)) : U = E, j && Sr(j), (G = U.props && U.props.onVnodeBeforeUpdate) && qe(G, b, U, E), St(a, !0);
        const ee = gn(a), ke = a.subTree;
        a.subTree = ee, C(
          ke,
          ee,
          // parent may have changed if it's in a teleport
          g(ke.el),
          // anchor may have changed if it's in a fragment
          rt(ke),
          a,
          w,
          k
        ), U.el = ee.el, $ === null && ya(a, ee.el), M && Se(M, w), (G = U.props && U.props.onVnodeUpdated) && Se(
          () => qe(G, b, U, E),
          w
        );
      } else {
        let U;
        const { el: j, props: M } = l, { bm: b, m: E, parent: $ } = a, G = lr(l);
        if (St(a, !1), b && Sr(b), !G && (U = M && M.onVnodeBeforeMount) && qe(U, $, l), St(a, !0), j && nt) {
          const ee = () => {
            a.subTree = gn(a), nt(
              j,
              a.subTree,
              a,
              w,
              null
            );
          };
          G ? l.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !a.isUnmounted && ee()
          ) : ee();
        } else {
          const ee = a.subTree = gn(a);
          C(
            null,
            ee,
            f,
            m,
            a,
            w,
            k
          ), l.el = ee.el;
        }
        if (E && Se(E, w), !G && (U = M && M.onVnodeMounted)) {
          const ee = l;
          Se(
            () => qe(U, $, ee),
            w
          );
        }
        (l.shapeFlag & 256 || $ && lr($.vnode) && $.vnode.shapeFlag & 256) && a.a && Se(a.a, w), a.isMounted = !0, l = f = m = null;
      }
    }, P = a.effect = new Qn(
      O,
      De,
      () => co(L),
      a.scope
      // track it in component's effect scope
    ), L = a.update = () => {
      P.dirty && P.run();
    };
    L.id = a.uid, St(a, !0), L();
  }, Z = (a, l, f) => {
    l.component = a;
    const m = a.vnode.props;
    a.vnode = l, a.next = null, Ja(a, l.props, m, f), Qa(a, l.children, f), Nt(), Fo(a), It();
  }, q = (a, l, f, m, w, k, S, O, P = !1) => {
    const L = a && a.children, U = a ? a.shapeFlag : 0, j = l.children, { patchFlag: M, shapeFlag: b } = l;
    if (M > 0) {
      if (M & 128) {
        Xe(
          L,
          j,
          f,
          m,
          w,
          k,
          S,
          O,
          P
        );
        return;
      } else if (M & 256) {
        Ce(
          L,
          j,
          f,
          m,
          w,
          k,
          S,
          O,
          P
        );
        return;
      }
    }
    b & 8 ? (U & 16 && Ne(L, w, k), j !== L && p(f, j)) : U & 16 ? b & 16 ? Xe(
      L,
      j,
      f,
      m,
      w,
      k,
      S,
      O,
      P
    ) : Ne(L, w, k, !0) : (U & 8 && p(f, ""), b & 16 && Y(
      j,
      f,
      m,
      w,
      k,
      S,
      O,
      P
    ));
  }, Ce = (a, l, f, m, w, k, S, O, P) => {
    a = a || Ht, l = l || Ht;
    const L = a.length, U = l.length, j = Math.min(L, U);
    let M;
    for (M = 0; M < j; M++) {
      const b = l[M] = P ? ht(l[M]) : Qe(l[M]);
      C(
        a[M],
        b,
        f,
        null,
        w,
        k,
        S,
        O,
        P
      );
    }
    L > U ? Ne(
      a,
      w,
      k,
      !0,
      !1,
      j
    ) : Y(
      l,
      f,
      m,
      w,
      k,
      S,
      O,
      P,
      j
    );
  }, Xe = (a, l, f, m, w, k, S, O, P) => {
    let L = 0;
    const U = l.length;
    let j = a.length - 1, M = U - 1;
    for (; L <= j && L <= M; ) {
      const b = a[L], E = l[L] = P ? ht(l[L]) : Qe(l[L]);
      if (tr(b, E))
        C(
          b,
          E,
          f,
          null,
          w,
          k,
          S,
          O,
          P
        );
      else
        break;
      L++;
    }
    for (; L <= j && L <= M; ) {
      const b = a[j], E = l[M] = P ? ht(l[M]) : Qe(l[M]);
      if (tr(b, E))
        C(
          b,
          E,
          f,
          null,
          w,
          k,
          S,
          O,
          P
        );
      else
        break;
      j--, M--;
    }
    if (L > j) {
      if (L <= M) {
        const b = M + 1, E = b < U ? l[b].el : m;
        for (; L <= M; )
          C(
            null,
            l[L] = P ? ht(l[L]) : Qe(l[L]),
            f,
            E,
            w,
            k,
            S,
            O,
            P
          ), L++;
      }
    } else if (L > M)
      for (; L <= j; )
        ye(a[L], w, k, !0), L++;
    else {
      const b = L, E = L, $ = /* @__PURE__ */ new Map();
      for (L = E; L <= M; L++) {
        const Me = l[L] = P ? ht(l[L]) : Qe(l[L]);
        Me.key != null && $.set(Me.key, L);
      }
      let G, ee = 0;
      const ke = M - E + 1;
      let Re = !1, kr = 0;
      const Ut = new Array(ke);
      for (L = 0; L < ke; L++)
        Ut[L] = 0;
      for (L = b; L <= j; L++) {
        const Me = a[L];
        if (ee >= ke) {
          ye(Me, w, k, !0);
          continue;
        }
        let Je;
        if (Me.key != null)
          Je = $.get(Me.key);
        else
          for (G = E; G <= M; G++)
            if (Ut[G - E] === 0 && tr(Me, l[G])) {
              Je = G;
              break;
            }
        Je === void 0 ? ye(Me, w, k, !0) : (Ut[Je - E] = L + 1, Je >= kr ? kr = Je : Re = !0, C(
          Me,
          l[Je],
          f,
          null,
          w,
          k,
          S,
          O,
          P
        ), ee++);
      }
      const No = Re ? nc(Ut) : Ht;
      for (G = No.length - 1, L = ke - 1; L >= 0; L--) {
        const Me = E + L, Je = l[Me], Io = Me + 1 < U ? l[Me + 1].el : m;
        Ut[L] === 0 ? C(
          null,
          Je,
          f,
          Io,
          w,
          k,
          S,
          O,
          P
        ) : Re && (G < 0 || L !== No[G] ? ce(Je, f, Io, 2) : G--);
      }
    }
  }, ce = (a, l, f, m, w = null) => {
    const { el: k, type: S, transition: O, children: P, shapeFlag: L } = a;
    if (L & 6) {
      ce(a.component.subTree, l, f, m);
      return;
    }
    if (L & 128) {
      a.suspense.move(l, f, m);
      return;
    }
    if (L & 64) {
      S.move(a, l, f, Ie);
      return;
    }
    if (S === Ae) {
      n(k, l, f);
      for (let j = 0; j < P.length; j++)
        ce(P[j], l, f, m);
      n(a.anchor, l, f);
      return;
    }
    if (S === wn) {
      N(a, l, f);
      return;
    }
    if (m !== 2 && L & 1 && O)
      if (m === 0)
        O.beforeEnter(k), n(k, l, f), Se(() => O.enter(k), w);
      else {
        const { leave: j, delayLeave: M, afterLeave: b } = O, E = () => n(k, l, f), $ = () => {
          j(k, () => {
            E(), b && b();
          });
        };
        M ? M(k, E, $) : $();
      }
    else
      n(k, l, f);
  }, ye = (a, l, f, m = !1, w = !1) => {
    const {
      type: k,
      props: S,
      ref: O,
      children: P,
      dynamicChildren: L,
      shapeFlag: U,
      patchFlag: j,
      dirs: M
    } = a;
    if (O != null && Rn(O, null, f, a, !0), U & 256) {
      l.ctx.deactivate(a);
      return;
    }
    const b = U & 1 && M, E = !lr(a);
    let $;
    if (E && ($ = S && S.onVnodeBeforeUnmount) && qe($, l, a), U & 6)
      Ct(a.component, f, m);
    else {
      if (U & 128) {
        a.suspense.unmount(f, m);
        return;
      }
      b && xt(a, null, l, "beforeUnmount"), U & 64 ? a.type.remove(
        a,
        l,
        f,
        w,
        Ie,
        m
      ) : L && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Ae || j > 0 && j & 64) ? Ne(
        L,
        l,
        f,
        !1,
        !0
      ) : (k === Ae && j & 384 || !w && U & 16) && Ne(P, l, f), m && pt(a);
    }
    (E && ($ = S && S.onVnodeUnmounted) || b) && Se(() => {
      $ && qe($, l, a), b && xt(a, null, l, "unmounted");
    }, f);
  }, pt = (a) => {
    const { type: l, el: f, anchor: m, transition: w } = a;
    if (l === Ae) {
      mt(f, m);
      return;
    }
    if (l === wn) {
      y(a);
      return;
    }
    const k = () => {
      s(f), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (a.shapeFlag & 1 && w && !w.persisted) {
      const { leave: S, delayLeave: O } = w, P = () => S(f, k);
      O ? O(a.el, k, P) : P();
    } else
      k();
  }, mt = (a, l) => {
    let f;
    for (; a !== l; )
      f = h(a), s(a), a = f;
    s(l);
  }, Ct = (a, l, f) => {
    const { bum: m, scope: w, update: k, subTree: S, um: O } = a;
    m && Sr(m), w.stop(), k && (k.active = !1, ye(S, a, l, f)), O && Se(O, l), Se(() => {
      a.isUnmounted = !0;
    }, l), l && l.pendingBranch && !l.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === l.pendingId && (l.deps--, l.deps === 0 && l.resolve());
  }, Ne = (a, l, f, m = !1, w = !1, k = 0) => {
    for (let S = k; S < a.length; S++)
      ye(a[S], l, f, m, w);
  }, rt = (a) => a.shapeFlag & 6 ? rt(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : h(a.anchor || a.el);
  let Ue = !1;
  const ze = (a, l, f) => {
    a == null ? l._vnode && ye(l._vnode, null, null, !0) : C(
      l._vnode || null,
      a,
      l,
      null,
      null,
      null,
      f
    ), Ue || (Ue = !0, Fo(), hi(), Ue = !1), l._vnode = a;
  }, Ie = {
    p: C,
    um: ye,
    m: ce,
    r: pt,
    mt: Be,
    mc: Y,
    pc: q,
    pbc: ie,
    n: rt,
    o: e
  };
  let Ve, nt;
  return t && ([Ve, nt] = t(
    Ie
  )), {
    render: ze,
    hydrate: Ve,
    createApp: Ba(ze, Ve)
  };
}
function hn({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function St({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Di(e, t, r = !1) {
  const n = e.children, s = t.children;
  if (H(n) && H(s))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let c = s[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[o] = ht(s[o]), c.el = i.el), r || Di(i, c)), c.type === Er && (c.el = i.el);
    }
}
function nc(e) {
  const t = e.slice(), r = [0];
  let n, s, o, i, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (s = r[r.length - 1], e[s] < d) {
        t[n] = s, r.push(n);
        continue;
      }
      for (o = 0, i = r.length - 1; o < i; )
        c = o + i >> 1, e[r[c]] < d ? o = c + 1 : i = c;
      d < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, i = r[o - 1]; o-- > 0; )
    r[o] = i, i = t[i];
  return r;
}
function Fi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fi(t);
}
const oc = (e) => e.__isTeleport, Ae = Symbol.for("v-fgt"), Er = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), wn = Symbol.for("v-stc"), fr = [];
let Ge = null;
function Et(e = !1) {
  fr.push(Ge = e ? null : []);
}
function sc() {
  fr.pop(), Ge = fr[fr.length - 1] || null;
}
let _r = 1;
function Bo(e) {
  _r += e;
}
function Ui(e) {
  return e.dynamicChildren = _r > 0 ? Ge || Ht : null, sc(), _r > 0 && Ge && Ge.push(e), e;
}
function Yt(e, t, r, n, s, o) {
  return Ui(
    Wr(
      e,
      t,
      r,
      n,
      s,
      o,
      !0
    )
  );
}
function Vi(e, t, r, n, s) {
  return Ui(
    _e(
      e,
      t,
      r,
      n,
      s,
      !0
    )
  );
}
function Hr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const sn = "__vInternal", $i = ({ key: e }) => e ?? null, Pr = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || ve(e) || B(e) ? { i: me, r: e, k: t, f: !!r } : e : null);
function Wr(e, t = null, r = null, n = 0, s = null, o = e === Ae ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $i(t),
    ref: t && Pr(t),
    scopeId: Ei,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return c ? (mo(u, r), o & 128 && e.normalize(u)) : r && (u.shapeFlag |= ae(r) ? 8 : 16), _r > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ge.push(u), u;
}
const _e = ic;
function ic(e, t = null, r = null, n = 0, s = null, o = !1) {
  if ((!e || e === Ea) && (e = zt), Hr(e)) {
    const c = Jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && mo(c, r), _r > 0 && !o && Ge && (c.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = c : Ge.push(c)), c.patchFlag |= -2, c;
  }
  if (wc(e) && (e = e.__vccOpts), t) {
    t = lc(t);
    let { class: c, style: u } = t;
    c && !ae(c) && (t.class = Zr(c)), ne(u) && (ai(u) && !H(u) && (u = be({}, u)), t.style = Zn(u));
  }
  const i = ae(e) ? 1 : va(e) ? 128 : oc(e) ? 64 : ne(e) ? 4 : B(e) ? 2 : 0;
  return Wr(
    e,
    t,
    r,
    n,
    s,
    i,
    o,
    !0
  );
}
function lc(e) {
  return e ? ai(e) || sn in e ? be({}, e) : e : null;
}
function Jt(e, t, r = !1) {
  const { props: n, ref: s, patchFlag: o, children: i } = e, c = t ? ac(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && $i(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? H(s) ? s.concat(Pr(t)) : [s, Pr(t)] : Pr(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ae ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jt(e.ssContent),
    ssFallback: e.ssFallback && Jt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Gr(e = " ", t = 0) {
  return _e(Er, null, e, t);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? _e(zt) : H(e) ? _e(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ht(e) : _e(Er, null, String(e));
}
function ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jt(e);
}
function mo(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (H(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), mo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = t._;
      !s && !(sn in t) ? t._ctx = me : s === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    B(t) ? (t = { default: t, _ctx: me }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Gr(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function ac(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const s in n)
      if (s === "class")
        t.class !== n.class && (t.class = Zr([t.class, n.class]));
      else if (s === "style")
        t.style = Zn([t.style, n.style]);
      else if (zr(s)) {
        const o = t[s], i = n[s];
        i && o !== i && !(H(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = n[s]);
  }
  return t;
}
function qe(e, t, r, n = null) {
  Ye(e, t, 7, [
    r,
    n
  ]);
}
const cc = xi();
let uc = 0;
function fc(e, t, r) {
  const n = e.type, s = (t ? t.appContext : e.appContext) || cc, o = {
    uid: uc++,
    vnode: e,
    type: n,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Js(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ai(n, s),
    emitsOptions: yi(n, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: oe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: oe,
    data: oe,
    props: oe,
    attrs: oe,
    slots: oe,
    refs: oe,
    setupState: oe,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ga.bind(null, o), e.ce && e.ce(o), o;
}
let pe = null;
const gr = () => pe || me;
let Kr, Mn;
{
  const e = Bs(), t = (r, n) => {
    let s;
    return (s = e[r]) || (s = e[r] = []), s.push(n), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Kr = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => pe = r
  ), Mn = t(
    "__VUE_SSR_SETTERS__",
    (r) => ln = r
  );
}
const vr = (e) => {
  const t = pe;
  return Kr(e), e.scope.on(), () => {
    e.scope.off(), Kr(t);
  };
}, Xo = () => {
  pe && pe.scope.off(), Kr(null);
};
function ji(e) {
  return e.vnode.shapeFlag & 4;
}
let ln = !1;
function dc(e, t = !1) {
  t && Mn(t);
  const { props: r, children: n } = e.vnode, s = ji(e);
  za(e, r, s, t), Za(e, n);
  const o = s ? pc(e, t) : void 0;
  return t && Mn(!1), o;
}
function pc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ci(new Proxy(e.ctx, $a));
  const { setup: n } = r;
  if (n) {
    const s = e.setupContext = n.length > 1 ? _c(e) : null, o = vr(e);
    Nt();
    const i = ct(
      n,
      e,
      0,
      [
        e.props,
        s
      ]
    );
    if (It(), o(), Ws(i)) {
      if (i.then(Xo, Xo), t)
        return i.then((c) => {
          zo(e, c, t);
        }).catch((c) => {
          rn(c, e, 0);
        });
      e.asyncDep = i;
    } else
      zo(e, i, t);
  } else
    Hi(e, t);
}
function zo(e, t, r) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = mi(t)), Hi(e, r);
}
let Jo;
function Hi(e, t, r) {
  const n = e.type;
  if (!e.render) {
    if (!t && Jo && !n.render) {
      const s = n.template || fo(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = n, d = be(
          be(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          u
        );
        n.render = Jo(s, d);
      }
    }
    e.render = n.render || De;
  }
  {
    const s = vr(e);
    Nt();
    try {
      ja(e);
    } finally {
      It(), s();
    }
  }
}
function mc(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, r) {
        return Pe(e, "get", "$attrs"), t[r];
      }
    }
  ));
}
function _c(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    get attrs() {
      return mc(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function an(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(mi(ci(e.exposed)), {
      get(t, r) {
        if (r in t)
          return t[r];
        if (r in ar)
          return ar[r](e);
      },
      has(t, r) {
        return r in t || r in ar;
      }
    }));
}
const gc = /(?:^|[-_])(\w)/g, bc = (e) => e.replace(gc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function hc(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wi(e, t, r = !1) {
  let n = hc(t);
  if (!n && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (n = s[1]);
  }
  if (!n && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    n = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return n ? bc(n) : r ? "App" : "Anonymous";
}
function wc(e) {
  return B(e) && "__vccOpts" in e;
}
const We = (e, t) => na(e, t, ln);
function Gi(e, t, r) {
  const n = arguments.length;
  return n === 2 ? ne(t) && !H(t) ? Hr(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Hr(r) && (r = [r]), _e(e, t, r));
}
const yc = "3.4.21", Ec = "http://www.w3.org/2000/svg", vc = "http://www.w3.org/1998/Math/MathML", wt = typeof document < "u" ? document : null, qo = wt && /* @__PURE__ */ wt.createElement("template"), kc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const s = t === "svg" ? wt.createElementNS(Ec, e) : t === "mathml" ? wt.createElementNS(vc, e) : wt.createElement(e, r ? { is: r } : void 0);
    return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s;
  },
  createText: (e) => wt.createTextNode(e),
  createComment: (e) => wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => wt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, s, o) {
    const i = r ? r.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), r), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      qo.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const c = qo.content;
      if (n === "svg" || n === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, r);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Tc = Symbol("_vtc");
function Nc(e, t, r) {
  const n = e[Tc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Zo = Symbol("_vod"), Ic = Symbol("_vsh"), Lc = Symbol(""), Oc = /(^|;)\s*display\s*:/;
function Cc(e, t, r) {
  const n = e.style, s = ae(r);
  let o = !1;
  if (r && !s) {
    if (t)
      if (ae(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          r[c] == null && Rr(n, c, "");
        }
      else
        for (const i in t)
          r[i] == null && Rr(n, i, "");
    for (const i in r)
      i === "display" && (o = !0), Rr(n, i, r[i]);
  } else if (s) {
    if (t !== r) {
      const i = n[Lc];
      i && (r += ";" + i), n.cssText = r, o = Oc.test(r);
    }
  } else
    t && e.removeAttribute("style");
  Zo in e && (e[Zo] = o ? n.display : "", e[Ic] && (n.display = "none"));
}
const Qo = /\s*!important$/;
function Rr(e, t, r) {
  if (H(r))
    r.forEach((n) => Rr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = xc(e, t);
    Qo.test(r) ? e.setProperty(
      He(n),
      r.replace(Qo, ""),
      "important"
    ) : e[n] = r;
  }
}
const es = ["Webkit", "Moz", "ms"], yn = {};
function xc(e, t) {
  const r = yn[t];
  if (r)
    return r;
  let n = lt(t);
  if (n !== "filter" && n in e)
    return yn[t] = n;
  n = Ys(n);
  for (let s = 0; s < es.length; s++) {
    const o = es[s] + n;
    if (o in e)
      return yn[t] = o;
  }
  return t;
}
const ts = "http://www.w3.org/1999/xlink";
function Sc(e, t, r, n, s) {
  if (n && t.startsWith("xlink:"))
    r == null ? e.removeAttributeNS(ts, t.slice(6, t.length)) : e.setAttributeNS(ts, t, r);
  else {
    const o = Sl(t);
    r == null || o && !Xs(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r);
  }
}
function Ac(e, t, r, n, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, s, o), e[t] = r ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r ?? "";
    (d !== p || !("_value" in e)) && (e.value = p), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let u = !1;
  if (r === "" || r == null) {
    const d = typeof e[t];
    d === "boolean" ? r = Xs(r) : r == null && d === "string" ? (r = "", u = !0) : d === "number" && (r = 0, u = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  u && e.removeAttribute(t);
}
function Ki(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Pc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const rs = Symbol("_vei");
function Rc(e, t, r, n, s = null) {
  const o = e[rs] || (e[rs] = {}), i = o[t];
  if (n && i)
    i.value = n;
  else {
    const [c, u] = Mc(t);
    if (n) {
      const d = o[t] = Uc(n, s);
      Ki(e, c, d, u);
    } else
      i && (Pc(e, c, i, u), o[t] = void 0);
  }
}
const ns = /(?:Once|Passive|Capture)$/;
function Mc(e) {
  let t;
  if (ns.test(e)) {
    t = {};
    let n;
    for (; n = e.match(ns); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : He(e.slice(2)), t];
}
let En = 0;
const Dc = /* @__PURE__ */ Promise.resolve(), Fc = () => En || (Dc.then(() => En = 0), En = Date.now());
function Uc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ye(
      Vc(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Fc(), r;
}
function Vc(e, t) {
  if (H(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map((n) => (s) => !s._stopped && n && n(s));
  } else
    return t;
}
const os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $c = (e, t, r, n, s, o, i, c, u) => {
  const d = s === "svg";
  t === "class" ? Nc(e, n, d) : t === "style" ? Cc(e, r, n) : zr(t) ? Xn(t) || Rc(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jc(e, t, n, d)) ? Ac(
    e,
    t,
    n,
    o,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Sc(e, t, n, d));
};
function jc(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && os(t) && B(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return os(t) && ae(r) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hc(e, t) {
  const r = /* @__PURE__ */ ut(e);
  class n extends _o {
    constructor(o) {
      super(r, o, t);
    }
  }
  return n.def = r, n;
}
const Wc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class _o extends Wc {
  constructor(t, r = {}, n) {
    super(), this._def = t, this._props = r, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), ao(() => {
      this._connected || (as(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const s of n)
        this._setAttr(s.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, s = !1) => {
      const { props: o, styles: i } = n;
      let c;
      if (o && !H(o))
        for (const u in o) {
          const d = o[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = Oo(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[lt(u)] = !0);
        }
      this._numberProps = c, s && this._resolveProps(n), this._applyStyles(i), this._update();
    }, r = this._def.__asyncLoader;
    r ? r().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: r } = t, n = H(r) ? r : Object.keys(r || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && n.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of n.map(lt))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(o) {
          this._setProp(s, o);
        }
      });
  }
  _setAttr(t) {
    let r = this.getAttribute(t);
    const n = lt(t);
    this._numberProps && this._numberProps[n] && (r = Oo(r)), this._setProp(n, r, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, r, n = !0, s = !0) {
    r !== this._props[t] && (this._props[t] = r, s && this._instance && this._update(), n && (r === !0 ? this.setAttribute(He(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(He(t), r + "") : r || this.removeAttribute(He(t))));
  }
  _update() {
    as(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = _e(this._def, be({}, this._props));
    return this._instance || (t.ce = (r) => {
      this._instance = r, r.isCE = !0;
      const n = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      r.emit = (o, ...i) => {
        n(o, i), He(o) !== o && n(He(o), i);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof _o) {
          r.parent = s._instance, r.provides = s._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((r) => {
      const n = document.createElement("style");
      n.textContent = r, this.shadowRoot.appendChild(n);
    });
  }
}
const ss = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (r) => Sr(t, r) : t;
}, vn = Symbol("_assign"), Gc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    const s = Jr(t);
    Ki(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => r ? qn(Yr(i)) : Yr(i)
      );
      e[vn](
        e.multiple ? s ? new Set(o) : o : o[0]
      ), e._assigning = !0, ao(() => {
        e._assigning = !1;
      });
    }), e[vn] = ss(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: r } }) {
    is(e, t, r);
  },
  beforeUpdate(e, t, r) {
    e[vn] = ss(r);
  },
  updated(e, { value: t, modifiers: { number: r } }) {
    e._assigning || is(e, t, r);
  }
};
function is(e, t, r) {
  const n = e.multiple, s = H(t);
  if (!(n && !s && !Jr(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const c = e.options[o], u = Yr(c);
      if (n)
        if (s) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.includes(
            r ? qn(u) : u
          ) : c.selected = Pl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (Qr(Yr(c), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Yr(e) {
  return "_value" in e ? e._value : e.value;
}
const Kc = /* @__PURE__ */ be({ patchProp: $c }, kc);
let ls;
function Yc() {
  return ls || (ls = ec(Kc));
}
const as = (...e) => {
  Yc().render(...e);
};
/*!
  * shared v9.10.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Br = typeof window < "u", Lt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Bc = (e, t, r) => Xc({ l: e, k: t, s: r }), Xc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), fe = (e) => typeof e == "number" && isFinite(e), zc = (e) => Bi(e) === "[object Date]", Tt = (e) => Bi(e) === "[object RegExp]", cn = (e) => K(e) && Object.keys(e).length === 0, Ee = Object.assign;
let cs;
const it = () => cs || (cs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function us(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Jc = Object.prototype.hasOwnProperty;
function Xr(e, t) {
  return Jc.call(e, t);
}
const se = Array.isArray, re = (e) => typeof e == "function", D = (e) => typeof e == "string", X = (e) => typeof e == "boolean", Q = (e) => e !== null && typeof e == "object", qc = (e) => Q(e) && re(e.then) && re(e.catch), Yi = Object.prototype.toString, Bi = (e) => Yi.call(e), K = (e) => {
  if (!Q(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Zc = (e) => e == null ? "" : se(e) || K(e) && e.toString === Yi ? JSON.stringify(e, null, 2) : String(e);
function Qc(e, t = "") {
  return e.reduce((r, n, s) => s === 0 ? r + n : r + t + n, "");
}
function go(e) {
  let t = e;
  return () => ++t;
}
function eu(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const xr = (e) => !Q(e) || se(e);
function Mr(e, t) {
  if (xr(e) || xr(t))
    throw new Error("Invalid value");
  const r = [{ src: e, des: t }];
  for (; r.length; ) {
    const { src: n, des: s } = r.pop();
    Object.keys(n).forEach((o) => {
      xr(n[o]) || xr(s[o]) ? s[o] = n[o] : r.push({ src: n[o], des: s[o] });
    });
  }
}
/*!
  * message-compiler v9.10.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function tu(e, t, r) {
  return { line: e, column: t, offset: r };
}
function Dn(e, t, r) {
  const n = { start: e, end: t };
  return r != null && (n.source = r), n;
}
const ru = /\{([0-9a-zA-Z]+)\}/g;
function nu(e, ...t) {
  return t.length === 1 && ou(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(ru, (r, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const Xi = Object.assign, fs = (e) => typeof e == "string", ou = (e) => e !== null && typeof e == "object";
function zi(e, t = "") {
  return e.reduce((r, n, s) => s === 0 ? r + n : r + t + n, "");
}
const W = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, su = {
  // tokenizer error messages
  [W.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [W.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [W.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [W.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [W.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [W.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [W.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [W.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [W.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [W.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [W.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [W.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [W.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [W.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [W.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function er(e, t, r = {}) {
  const { domain: n, messages: s, args: o } = r, i = nu((s || su)[e] || "", ...o || []), c = new SyntaxError(String(i));
  return c.code = e, t && (c.location = t), c.domain = n, c;
}
function iu(e) {
  throw e;
}
const ot = " ", lu = "\r", Oe = `
`, au = "\u2028", cu = "\u2029";
function uu(e) {
  const t = e;
  let r = 0, n = 1, s = 1, o = 0;
  const i = (V) => t[V] === lu && t[V + 1] === Oe, c = (V) => t[V] === Oe, u = (V) => t[V] === cu, d = (V) => t[V] === au, p = (V) => i(V) || c(V) || u(V) || d(V), g = () => r, h = () => n, v = () => s, R = () => o, C = (V) => i(V) || u(V) || d(V) ? Oe : t[V], A = () => C(r), _ = () => C(r + o);
  function T() {
    return o = 0, p(r) && (n++, s = 0), i(r) && r++, r++, s++, t[r];
  }
  function N() {
    return i(r + o) && o++, o++, t[r + o];
  }
  function y() {
    r = 0, n = 1, s = 1, o = 0;
  }
  function x(V = 0) {
    o = V;
  }
  function I() {
    const V = r + o;
    for (; V !== r; )
      T();
    o = 0;
  }
  return {
    index: g,
    line: h,
    column: v,
    peekOffset: R,
    charAt: C,
    currentChar: A,
    currentPeek: _,
    next: T,
    peek: N,
    reset: y,
    resetPeek: x,
    skipToPeek: I
  };
}
const gt = void 0, fu = ".", ds = "'", du = "tokenizer";
function pu(e, t = {}) {
  const r = t.location !== !1, n = uu(e), s = () => n.index(), o = () => tu(n.line(), n.column(), n.index()), i = o(), c = s(), u = {
    currentType: 14,
    offset: c,
    startLoc: i,
    endLoc: i,
    lastType: 14,
    lastOffset: c,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, d = () => u, { onError: p } = t;
  function g(a, l, f, ...m) {
    const w = d();
    if (l.column += f, l.offset += f, p) {
      const k = r ? Dn(w.startLoc, l) : null, S = er(a, k, {
        domain: du,
        args: m
      });
      p(S);
    }
  }
  function h(a, l, f) {
    a.endLoc = o(), a.currentType = l;
    const m = { type: l };
    return r && (m.loc = Dn(a.startLoc, a.endLoc)), f != null && (m.value = f), m;
  }
  const v = (a) => h(
    a,
    14
    /* TokenTypes.EOF */
  );
  function R(a, l) {
    return a.currentChar() === l ? (a.next(), l) : (g(W.EXPECTED_TOKEN, o(), 0, l), "");
  }
  function C(a) {
    let l = "";
    for (; a.currentPeek() === ot || a.currentPeek() === Oe; )
      l += a.currentPeek(), a.peek();
    return l;
  }
  function A(a) {
    const l = C(a);
    return a.skipToPeek(), l;
  }
  function _(a) {
    if (a === gt)
      return !1;
    const l = a.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l === 95;
  }
  function T(a) {
    if (a === gt)
      return !1;
    const l = a.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function N(a, l) {
    const { currentType: f } = l;
    if (f !== 2)
      return !1;
    C(a);
    const m = _(a.currentPeek());
    return a.resetPeek(), m;
  }
  function y(a, l) {
    const { currentType: f } = l;
    if (f !== 2)
      return !1;
    C(a);
    const m = a.currentPeek() === "-" ? a.peek() : a.currentPeek(), w = T(m);
    return a.resetPeek(), w;
  }
  function x(a, l) {
    const { currentType: f } = l;
    if (f !== 2)
      return !1;
    C(a);
    const m = a.currentPeek() === ds;
    return a.resetPeek(), m;
  }
  function I(a, l) {
    const { currentType: f } = l;
    if (f !== 8)
      return !1;
    C(a);
    const m = a.currentPeek() === ".";
    return a.resetPeek(), m;
  }
  function V(a, l) {
    const { currentType: f } = l;
    if (f !== 9)
      return !1;
    C(a);
    const m = _(a.currentPeek());
    return a.resetPeek(), m;
  }
  function Y(a, l) {
    const { currentType: f } = l;
    if (!(f === 8 || f === 12))
      return !1;
    C(a);
    const m = a.currentPeek() === ":";
    return a.resetPeek(), m;
  }
  function F(a, l) {
    const { currentType: f } = l;
    if (f !== 10)
      return !1;
    const m = () => {
      const k = a.currentPeek();
      return k === "{" ? _(a.peek()) : k === "@" || k === "%" || k === "|" || k === ":" || k === "." || k === ot || !k ? !1 : k === Oe ? (a.peek(), m()) : _(k);
    }, w = m();
    return a.resetPeek(), w;
  }
  function ie(a) {
    C(a);
    const l = a.currentPeek() === "|";
    return a.resetPeek(), l;
  }
  function he(a) {
    const l = C(a), f = a.currentPeek() === "%" && a.peek() === "{";
    return a.resetPeek(), {
      isModulo: f,
      hasSpace: l.length > 0
    };
  }
  function le(a, l = !0) {
    const f = (w = !1, k = "", S = !1) => {
      const O = a.currentPeek();
      return O === "{" ? k === "%" ? !1 : w : O === "@" || !O ? k === "%" ? !0 : w : O === "%" ? (a.peek(), f(w, "%", !0)) : O === "|" ? k === "%" || S ? !0 : !(k === ot || k === Oe) : O === ot ? (a.peek(), f(!0, ot, S)) : O === Oe ? (a.peek(), f(!0, Oe, S)) : !0;
    }, m = f();
    return l && a.resetPeek(), m;
  }
  function we(a, l) {
    const f = a.currentChar();
    return f === gt ? gt : l(f) ? (a.next(), f) : null;
  }
  function Be(a) {
    return we(a, (f) => {
      const m = f.charCodeAt(0);
      return m >= 97 && m <= 122 || // a-z
      m >= 65 && m <= 90 || // A-Z
      m >= 48 && m <= 57 || // 0-9
      m === 95 || // _
      m === 36;
    });
  }
  function dt(a) {
    return we(a, (f) => {
      const m = f.charCodeAt(0);
      return m >= 48 && m <= 57;
    });
  }
  function te(a) {
    return we(a, (f) => {
      const m = f.charCodeAt(0);
      return m >= 48 && m <= 57 || // 0-9
      m >= 65 && m <= 70 || // A-F
      m >= 97 && m <= 102;
    });
  }
  function Z(a) {
    let l = "", f = "";
    for (; l = dt(a); )
      f += l;
    return f;
  }
  function q(a) {
    A(a);
    const l = a.currentChar();
    return l !== "%" && g(W.EXPECTED_TOKEN, o(), 0, l), a.next(), "%";
  }
  function Ce(a) {
    let l = "";
    for (; ; ) {
      const f = a.currentChar();
      if (f === "{" || f === "}" || f === "@" || f === "|" || !f)
        break;
      if (f === "%")
        if (le(a))
          l += f, a.next();
        else
          break;
      else if (f === ot || f === Oe)
        if (le(a))
          l += f, a.next();
        else {
          if (ie(a))
            break;
          l += f, a.next();
        }
      else
        l += f, a.next();
    }
    return l;
  }
  function Xe(a) {
    A(a);
    let l = "", f = "";
    for (; l = Be(a); )
      f += l;
    return a.currentChar() === gt && g(W.UNTERMINATED_CLOSING_BRACE, o(), 0), f;
  }
  function ce(a) {
    A(a);
    let l = "";
    return a.currentChar() === "-" ? (a.next(), l += `-${Z(a)}`) : l += Z(a), a.currentChar() === gt && g(W.UNTERMINATED_CLOSING_BRACE, o(), 0), l;
  }
  function ye(a) {
    A(a), R(a, "'");
    let l = "", f = "";
    const m = (k) => k !== ds && k !== Oe;
    for (; l = we(a, m); )
      l === "\\" ? f += pt(a) : f += l;
    const w = a.currentChar();
    return w === Oe || w === gt ? (g(W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), w === Oe && (a.next(), R(a, "'")), f) : (R(a, "'"), f);
  }
  function pt(a) {
    const l = a.currentChar();
    switch (l) {
      case "\\":
      case "'":
        return a.next(), `\\${l}`;
      case "u":
        return mt(a, l, 4);
      case "U":
        return mt(a, l, 6);
      default:
        return g(W.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, l), "";
    }
  }
  function mt(a, l, f) {
    R(a, l);
    let m = "";
    for (let w = 0; w < f; w++) {
      const k = te(a);
      if (!k) {
        g(W.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${l}${m}${a.currentChar()}`);
        break;
      }
      m += k;
    }
    return `\\${l}${m}`;
  }
  function Ct(a) {
    A(a);
    let l = "", f = "";
    const m = (w) => w !== "{" && w !== "}" && w !== ot && w !== Oe;
    for (; l = we(a, m); )
      f += l;
    return f;
  }
  function Ne(a) {
    let l = "", f = "";
    for (; l = Be(a); )
      f += l;
    return f;
  }
  function rt(a) {
    const l = (f = !1, m) => {
      const w = a.currentChar();
      return w === "{" || w === "%" || w === "@" || w === "|" || w === "(" || w === ")" || !w || w === ot ? m : w === Oe || w === fu ? (m += w, a.next(), l(f, m)) : (m += w, a.next(), l(!0, m));
    };
    return l(!1, "");
  }
  function Ue(a) {
    A(a);
    const l = R(
      a,
      "|"
      /* TokenChars.Pipe */
    );
    return A(a), l;
  }
  function ze(a, l) {
    let f = null;
    switch (a.currentChar()) {
      case "{":
        return l.braceNest >= 1 && g(W.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), a.next(), f = h(
          l,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(a), l.braceNest++, f;
      case "}":
        return l.braceNest > 0 && l.currentType === 2 && g(W.EMPTY_PLACEHOLDER, o(), 0), a.next(), f = h(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), l.braceNest--, l.braceNest > 0 && A(a), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), f;
      case "@":
        return l.braceNest > 0 && g(W.UNTERMINATED_CLOSING_BRACE, o(), 0), f = Ie(a, l) || v(l), l.braceNest = 0, f;
      default:
        let w = !0, k = !0, S = !0;
        if (ie(a))
          return l.braceNest > 0 && g(W.UNTERMINATED_CLOSING_BRACE, o(), 0), f = h(l, 1, Ue(a)), l.braceNest = 0, l.inLinked = !1, f;
        if (l.braceNest > 0 && (l.currentType === 5 || l.currentType === 6 || l.currentType === 7))
          return g(W.UNTERMINATED_CLOSING_BRACE, o(), 0), l.braceNest = 0, Ve(a, l);
        if (w = N(a, l))
          return f = h(l, 5, Xe(a)), A(a), f;
        if (k = y(a, l))
          return f = h(l, 6, ce(a)), A(a), f;
        if (S = x(a, l))
          return f = h(l, 7, ye(a)), A(a), f;
        if (!w && !k && !S)
          return f = h(l, 13, Ct(a)), g(W.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, f.value), A(a), f;
        break;
    }
    return f;
  }
  function Ie(a, l) {
    const { currentType: f } = l;
    let m = null;
    const w = a.currentChar();
    switch ((f === 8 || f === 9 || f === 12 || f === 10) && (w === Oe || w === ot) && g(W.INVALID_LINKED_FORMAT, o(), 0), w) {
      case "@":
        return a.next(), m = h(
          l,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), l.inLinked = !0, m;
      case ".":
        return A(a), a.next(), h(
          l,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(a), a.next(), h(
          l,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ie(a) ? (m = h(l, 1, Ue(a)), l.braceNest = 0, l.inLinked = !1, m) : I(a, l) || Y(a, l) ? (A(a), Ie(a, l)) : V(a, l) ? (A(a), h(l, 12, Ne(a))) : F(a, l) ? (A(a), w === "{" ? ze(a, l) || m : h(l, 11, rt(a))) : (f === 8 && g(W.INVALID_LINKED_FORMAT, o(), 0), l.braceNest = 0, l.inLinked = !1, Ve(a, l));
    }
  }
  function Ve(a, l) {
    let f = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (l.braceNest > 0)
      return ze(a, l) || v(l);
    if (l.inLinked)
      return Ie(a, l) || v(l);
    switch (a.currentChar()) {
      case "{":
        return ze(a, l) || v(l);
      case "}":
        return g(W.UNBALANCED_CLOSING_BRACE, o(), 0), a.next(), h(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ie(a, l) || v(l);
      default:
        if (ie(a))
          return f = h(l, 1, Ue(a)), l.braceNest = 0, l.inLinked = !1, f;
        const { isModulo: w, hasSpace: k } = he(a);
        if (w)
          return k ? h(l, 0, Ce(a)) : h(l, 4, q(a));
        if (le(a))
          return h(l, 0, Ce(a));
        break;
    }
    return f;
  }
  function nt() {
    const { currentType: a, offset: l, startLoc: f, endLoc: m } = u;
    return u.lastType = a, u.lastOffset = l, u.lastStartLoc = f, u.lastEndLoc = m, u.offset = s(), u.startLoc = o(), n.currentChar() === gt ? h(
      u,
      14
      /* TokenTypes.EOF */
    ) : Ve(n, u);
  }
  return {
    nextToken: nt,
    currentOffset: s,
    currentPosition: o,
    context: d
  };
}
const mu = "parser", _u = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function gu(e, t, r) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const n = parseInt(t || r, 16);
      return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�";
    }
  }
}
function bu(e = {}) {
  const t = e.location !== !1, { onError: r } = e;
  function n(_, T, N, y, ...x) {
    const I = _.currentPosition();
    if (I.offset += y, I.column += y, r) {
      const V = t ? Dn(N, I) : null, Y = er(T, V, {
        domain: mu,
        args: x
      });
      r(Y);
    }
  }
  function s(_, T, N) {
    const y = { type: _ };
    return t && (y.start = T, y.end = T, y.loc = { start: N, end: N }), y;
  }
  function o(_, T, N, y) {
    y && (_.type = y), t && (_.end = T, _.loc && (_.loc.end = N));
  }
  function i(_, T) {
    const N = _.context(), y = s(3, N.offset, N.startLoc);
    return y.value = T, o(y, _.currentOffset(), _.currentPosition()), y;
  }
  function c(_, T) {
    const N = _.context(), { lastOffset: y, lastStartLoc: x } = N, I = s(5, y, x);
    return I.index = parseInt(T, 10), _.nextToken(), o(I, _.currentOffset(), _.currentPosition()), I;
  }
  function u(_, T) {
    const N = _.context(), { lastOffset: y, lastStartLoc: x } = N, I = s(4, y, x);
    return I.key = T, _.nextToken(), o(I, _.currentOffset(), _.currentPosition()), I;
  }
  function d(_, T) {
    const N = _.context(), { lastOffset: y, lastStartLoc: x } = N, I = s(9, y, x);
    return I.value = T.replace(_u, gu), _.nextToken(), o(I, _.currentOffset(), _.currentPosition()), I;
  }
  function p(_) {
    const T = _.nextToken(), N = _.context(), { lastOffset: y, lastStartLoc: x } = N, I = s(8, y, x);
    return T.type !== 12 ? (n(_, W.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), I.value = "", o(I, y, x), {
      nextConsumeToken: T,
      node: I
    }) : (T.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, Ze(T)), I.value = T.value || "", o(I, _.currentOffset(), _.currentPosition()), {
      node: I
    });
  }
  function g(_, T) {
    const N = _.context(), y = s(7, N.offset, N.startLoc);
    return y.value = T, o(y, _.currentOffset(), _.currentPosition()), y;
  }
  function h(_) {
    const T = _.context(), N = s(6, T.offset, T.startLoc);
    let y = _.nextToken();
    if (y.type === 9) {
      const x = p(_);
      N.modifier = x.node, y = x.nextConsumeToken || _.nextToken();
    }
    switch (y.type !== 10 && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(y)), y = _.nextToken(), y.type === 2 && (y = _.nextToken()), y.type) {
      case 11:
        y.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(y)), N.key = g(_, y.value || "");
        break;
      case 5:
        y.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(y)), N.key = u(_, y.value || "");
        break;
      case 6:
        y.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(y)), N.key = c(_, y.value || "");
        break;
      case 7:
        y.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(y)), N.key = d(_, y.value || "");
        break;
      default:
        n(_, W.UNEXPECTED_EMPTY_LINKED_KEY, T.lastStartLoc, 0);
        const x = _.context(), I = s(7, x.offset, x.startLoc);
        return I.value = "", o(I, x.offset, x.startLoc), N.key = I, o(N, x.offset, x.startLoc), {
          nextConsumeToken: y,
          node: N
        };
    }
    return o(N, _.currentOffset(), _.currentPosition()), {
      node: N
    };
  }
  function v(_) {
    const T = _.context(), N = T.currentType === 1 ? _.currentOffset() : T.offset, y = T.currentType === 1 ? T.endLoc : T.startLoc, x = s(2, N, y);
    x.items = [];
    let I = null;
    do {
      const F = I || _.nextToken();
      switch (I = null, F.type) {
        case 0:
          F.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(F)), x.items.push(i(_, F.value || ""));
          break;
        case 6:
          F.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(F)), x.items.push(c(_, F.value || ""));
          break;
        case 5:
          F.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(F)), x.items.push(u(_, F.value || ""));
          break;
        case 7:
          F.value == null && n(_, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(F)), x.items.push(d(_, F.value || ""));
          break;
        case 8:
          const ie = h(_);
          x.items.push(ie.node), I = ie.nextConsumeToken || null;
          break;
      }
    } while (T.currentType !== 14 && T.currentType !== 1);
    const V = T.currentType === 1 ? T.lastOffset : _.currentOffset(), Y = T.currentType === 1 ? T.lastEndLoc : _.currentPosition();
    return o(x, V, Y), x;
  }
  function R(_, T, N, y) {
    const x = _.context();
    let I = y.items.length === 0;
    const V = s(1, T, N);
    V.cases = [], V.cases.push(y);
    do {
      const Y = v(_);
      I || (I = Y.items.length === 0), V.cases.push(Y);
    } while (x.currentType !== 14);
    return I && n(_, W.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), o(V, _.currentOffset(), _.currentPosition()), V;
  }
  function C(_) {
    const T = _.context(), { offset: N, startLoc: y } = T, x = v(_);
    return T.currentType === 14 ? x : R(_, N, y, x);
  }
  function A(_) {
    const T = pu(_, Xi({}, e)), N = T.context(), y = s(0, N.offset, N.startLoc);
    return t && y.loc && (y.loc.source = _), y.body = C(T), e.onCacheKey && (y.cacheKey = e.onCacheKey(_)), N.currentType !== 14 && n(T, W.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, _[N.offset] || ""), o(y, T.currentOffset(), T.currentPosition()), y;
  }
  return { parse: A };
}
function Ze(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function hu(e, t = {}) {
  const r = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => r, helper: (o) => (r.helpers.add(o), o) };
}
function ps(e, t) {
  for (let r = 0; r < e.length; r++)
    bo(e[r], t);
}
function bo(e, t) {
  switch (e.type) {
    case 1:
      ps(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ps(e.items, t);
      break;
    case 6:
      bo(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function wu(e, t = {}) {
  const r = hu(e);
  r.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && bo(e.body, r);
  const n = r.context();
  e.helpers = Array.from(n.helpers);
}
function yu(e) {
  const t = e.body;
  return t.type === 2 ? ms(t) : t.cases.forEach((r) => ms(r)), e;
}
function ms(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let r = 0; r < e.items.length; r++) {
      const n = e.items[r];
      if (!(n.type === 3 || n.type === 9) || n.value == null)
        break;
      t.push(n.value);
    }
    if (t.length === e.items.length) {
      e.static = zi(t);
      for (let r = 0; r < e.items.length; r++) {
        const n = e.items[r];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const Eu = "minifier";
function $t(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      $t(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const r = e, n = r.cases;
      for (let p = 0; p < n.length; p++)
        $t(n[p]);
      r.c = n, delete r.cases;
      break;
    case 2:
      const s = e, o = s.items;
      for (let p = 0; p < o.length; p++)
        $t(o[p]);
      s.i = o, delete s.items, s.static && (s.s = s.static, delete s.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const i = e;
      i.value && (i.v = i.value, delete i.value);
      break;
    case 6:
      const c = e;
      $t(c.key), c.k = c.key, delete c.key, c.modifier && ($t(c.modifier), c.m = c.modifier, delete c.modifier);
      break;
    case 5:
      const u = e;
      u.i = u.index, delete u.index;
      break;
    case 4:
      const d = e;
      d.k = d.key, delete d.key;
      break;
    default:
      throw er(W.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Eu,
        args: [e.type]
      });
  }
  delete e.type;
}
const vu = "parser";
function ku(e, t) {
  const { sourceMap: r, filename: n, breakLineCode: s, needIndent: o } = t, i = t.location !== !1, c = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: o,
    indentLevel: 0
  };
  i && e.loc && (c.source = e.loc.source);
  const u = () => c;
  function d(A, _) {
    c.code += A;
  }
  function p(A, _ = !0) {
    const T = _ ? s : "";
    d(o ? T + "  ".repeat(A) : T);
  }
  function g(A = !0) {
    const _ = ++c.indentLevel;
    A && p(_);
  }
  function h(A = !0) {
    const _ = --c.indentLevel;
    A && p(_);
  }
  function v() {
    p(c.indentLevel);
  }
  return {
    context: u,
    push: d,
    indent: g,
    deindent: h,
    newline: v,
    helper: (A) => `_${A}`,
    needIndent: () => c.needIndent
  };
}
function Tu(e, t) {
  const { helper: r } = e;
  e.push(`${r(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), qt(e, t.key), t.modifier ? (e.push(", "), qt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Nu(e, t) {
  const { helper: r, needIndent: n } = e;
  e.push(`${r(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const s = t.items.length;
  for (let o = 0; o < s && (qt(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function Iu(e, t) {
  const { helper: r, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${r(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const s = t.cases.length;
    for (let o = 0; o < s && (qt(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function Lu(e, t) {
  t.body ? qt(e, t.body) : e.push("null");
}
function qt(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      Lu(e, t);
      break;
    case 1:
      Iu(e, t);
      break;
    case 2:
      Nu(e, t);
      break;
    case 6:
      Tu(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${r(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${r(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw er(W.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: vu,
        args: [t.type]
      });
  }
}
const Ou = (e, t = {}) => {
  const r = fs(t.mode) ? t.mode : "normal", n = fs(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : r !== "arrow", c = e.helpers || [], u = ku(e, {
    mode: r,
    filename: n,
    sourceMap: s,
    breakLineCode: o,
    needIndent: i
  });
  u.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(i), c.length > 0 && (u.push(`const { ${zi(c.map((g) => `${g}: _${g}`), ", ")} } = ctx`), u.newline()), u.push("return "), qt(u, e), u.deindent(i), u.push("}"), delete e.helpers;
  const { code: d, map: p } = u.context();
  return {
    ast: e,
    code: d,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Cu(e, t = {}) {
  const r = Xi({}, t), n = !!r.jit, s = !!r.minify, o = r.optimize == null ? !0 : r.optimize, c = bu(r).parse(e);
  return n ? (o && yu(c), s && $t(c), { ast: c, code: "" }) : (wu(c, r), Ou(c, r));
}
var xu = { TERM_PROGRAM: "vscode", NODE: "/usr/local/bin/node", INIT_CWD: "/Users/viktor/Projects/diabolocom-test-task", TERM: "xterm-256color", SHELL: "/bin/zsh", TMPDIR: "/var/folders/sk/w7366x6s21q8c3y2wyb2_jgc0000gn/T/", npm_config_global_prefix: "/usr/local", TERM_PROGRAM_VERSION: "1.87.0", ZDOTDIR: "/Users/viktor", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/viktor/Projects/diabolocom-test-task", USER: "viktor", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/usr/local/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.RsWxnT3Sog/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/usr/local/lib/node_modules/npm/bin/npm-cli.js", PATH: "/Users/viktor/Projects/diabolocom-test-task/node_modules/.bin:/Users/viktor/Projects/node_modules/.bin:/Users/viktor/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/viktor/Library/Application Support/cloud-code/installer/google-cloud-sdk/bin", npm_package_json: "/Users/viktor/Projects/diabolocom-test-task/package.json", npm_config_userconfig: "/Users/viktor/.npmrc", npm_config_init_module: "/Users/viktor/.npm-init.js", USER_ZDOTDIR: "/Users/viktor", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/viktor/Projects/diabolocom-test-task", npm_lifecycle_event: "build", EDITOR: "vi", npm_package_name: "diabolocom-test-task", LANG: "en_US.UTF-8", npm_config_npm_version: "10.2.4", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/viktor", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_cache: "/Users/viktor/.npm", VSCODE_PATH_PREFIX: "/Users/viktor/Library/Application Support/cloud-code/installer/google-cloud-sdk/bin:", LOGNAME: "viktor", npm_lifecycle_script: "vue-tsc --noEmit && vite build", VSCODE_GIT_IPC_HANDLE: "/var/folders/sk/w7366x6s21q8c3y2wyb2_jgc0000gn/T/vscode-git-9ea8734deb.sock", npm_config_user_agent: "npm/10.2.4 node/v20.11.1 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/usr/local/bin/node", npm_config_prefix: "/usr/local", COLORTERM: "truecolor", _: "/Users/viktor/Projects/diabolocom-test-task/node_modules/.bin/vite", NODE_ENV: "production" };
function Su() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (it().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (it().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (it().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ot = [];
Ot[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ot[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ot[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Ot[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Ot[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Ot[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Ot[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Au = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Pu(e) {
  return Au.test(e);
}
function Ru(e) {
  const t = e.charCodeAt(0), r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Mu(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Du(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Pu(t) ? Ru(t) : "*" + t;
}
function Fu(e) {
  const t = [];
  let r = -1, n = 0, s = 0, o, i, c, u, d, p, g;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    i === void 0 ? i = c : i += c;
  }, h[
    1
    /* Actions.PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), s++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, n = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, i === void 0 || (i = Du(i), i === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function v() {
    const R = e[r + 1];
    if (n === 5 && R === "'" || n === 6 && R === '"')
      return r++, c = "\\" + R, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (r++, o = e[r], !(o === "\\" && v())) {
      if (u = Mu(o), g = Ot[n], d = g[u] || g.l || 8, d === 8 || (n = d[0], d[1] !== void 0 && (p = h[d[1]], p && (c = o, p() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const _s = /* @__PURE__ */ new Map();
function Uu(e, t) {
  return Q(e) ? e[t] : null;
}
function Vu(e, t) {
  if (!Q(e))
    return null;
  let r = _s.get(t);
  if (r || (r = Fu(t), r && _s.set(t, r)), !r)
    return null;
  const n = r.length;
  let s = e, o = 0;
  for (; o < n; ) {
    const i = s[r[o]];
    if (i === void 0 || re(s))
      return null;
    s = i, o++;
  }
  return s;
}
const $u = (e) => e, ju = (e) => "", Hu = "text", Wu = (e) => e.length === 0 ? "" : Qc(e), Gu = Zc;
function gs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ku(e) {
  const t = fe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (fe(e.named.count) || fe(e.named.n)) ? fe(e.named.count) ? e.named.count : fe(e.named.n) ? e.named.n : t : t;
}
function Yu(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Bu(e = {}) {
  const t = e.locale, r = Ku(e), n = Q(e.pluralRules) && D(t) && re(e.pluralRules[t]) ? e.pluralRules[t] : gs, s = Q(e.pluralRules) && D(t) && re(e.pluralRules[t]) ? gs : void 0, o = (_) => _[n(r, _.length, s)], i = e.list || [], c = (_) => i[_], u = e.named || {};
  fe(e.pluralIndex) && Yu(r, u);
  const d = (_) => u[_];
  function p(_) {
    const T = re(e.messages) ? e.messages(_) : Q(e.messages) ? e.messages[_] : !1;
    return T || (e.parent ? e.parent.message(_) : ju);
  }
  const g = (_) => e.modifiers ? e.modifiers[_] : $u, h = K(e.processor) && re(e.processor.normalize) ? e.processor.normalize : Wu, v = K(e.processor) && re(e.processor.interpolate) ? e.processor.interpolate : Gu, R = K(e.processor) && D(e.processor.type) ? e.processor.type : Hu, A = {
    list: c,
    named: d,
    plural: o,
    linked: (_, ...T) => {
      const [N, y] = T;
      let x = "text", I = "";
      T.length === 1 ? Q(N) ? (I = N.modifier || I, x = N.type || x) : D(N) && (I = N || I) : T.length === 2 && (D(N) && (I = N || I), D(y) && (x = y || x));
      const V = p(_)(A), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        x === "vnode" && se(V) && I ? V[0] : V
      );
      return I ? g(I)(Y, x) : Y;
    },
    message: p,
    type: R,
    interpolate: v,
    normalize: h,
    values: Ee({}, i, u)
  };
  return A;
}
let br = null;
function Xu(e) {
  br = e;
}
function zu(e, t, r) {
  br && br.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  });
}
const Ju = /* @__PURE__ */ qu(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function qu(e) {
  return (t) => br && br.emit(e, t);
}
const Zu = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, Ji = W.__EXTEND_POINT__, At = go(Ji), Ke = {
  INVALID_ARGUMENT: Ji,
  // 18
  INVALID_DATE_ARGUMENT: At(),
  // 19
  INVALID_ISO_DATE_ARGUMENT: At(),
  // 20
  NOT_SUPPORT_NON_STRING_MESSAGE: At(),
  // 21
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: At(),
  // 22
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: At(),
  // 23
  NOT_SUPPORT_LOCALE_TYPE: At(),
  // 24
  __EXTEND_POINT__: At()
  // 25
};
function tt(e) {
  return er(e, null, void 0);
}
function ho(e, t) {
  return t.locale != null ? bs(t.locale) : bs(e.locale);
}
let kn;
function bs(e) {
  if (D(e))
    return e;
  if (re(e)) {
    if (e.resolvedOnce && kn != null)
      return kn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (qc(t))
        throw tt(Ke.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return kn = t;
    } else
      throw tt(Ke.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw tt(Ke.NOT_SUPPORT_LOCALE_TYPE);
}
function Qu(e, t, r) {
  return [.../* @__PURE__ */ new Set([
    r,
    ...se(t) ? t : Q(t) ? Object.keys(t) : D(t) ? [t] : [r]
  ])];
}
function qi(e, t, r) {
  const n = D(r) ? r : Zt, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(n);
  if (!o) {
    o = [];
    let i = [r];
    for (; se(i); )
      i = hs(o, i, t);
    const c = se(t) || !K(t) ? t : t.default ? t.default : null;
    i = D(c) ? [c] : c, se(i) && hs(o, i, !1), s.__localeChainCache.set(n, o);
  }
  return o;
}
function hs(e, t, r) {
  let n = !0;
  for (let s = 0; s < t.length && X(n); s++) {
    const o = t[s];
    D(o) && (n = ef(e, t[s], r));
  }
  return n;
}
function ef(e, t, r) {
  let n;
  const s = t.split("-");
  do {
    const o = s.join("-");
    n = tf(e, o, r), s.splice(-1, 1);
  } while (s.length && n === !0);
  return n;
}
function tf(e, t, r) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (se(r) || K(r)) && r[s] && (n = r[s]);
  }
  return n;
}
const rf = "9.10.1", un = -1, Zt = "en-US", ws = "", ys = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function nf() {
  return {
    upper: (e, t) => t === "text" && D(e) ? e.toUpperCase() : t === "vnode" && Q(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && D(e) ? e.toLowerCase() : t === "vnode" && Q(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && D(e) ? ys(e) : t === "vnode" && Q(e) && "__v_isVNode" in e ? ys(e.children) : e
  };
}
let Zi;
function Es(e) {
  Zi = e;
}
let Qi;
function of(e) {
  Qi = e;
}
let el;
function sf(e) {
  el = e;
}
let tl = null;
const lf = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  tl = e;
}, af = /* @__NO_SIDE_EFFECTS__ */ () => tl;
let rl = null;
const vs = (e) => {
  rl = e;
}, cf = () => rl;
let ks = 0;
function uf(e = {}) {
  const t = re(e.onWarn) ? e.onWarn : eu, r = D(e.version) ? e.version : rf, n = D(e.locale) || re(e.locale) ? e.locale : Zt, s = re(n) ? Zt : n, o = se(e.fallbackLocale) || K(e.fallbackLocale) || D(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, i = K(e.messages) ? e.messages : { [s]: {} }, c = K(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, u = K(e.numberFormats) ? e.numberFormats : { [s]: {} }, d = Ee({}, e.modifiers || {}, nf()), p = e.pluralRules || {}, g = re(e.missing) ? e.missing : null, h = X(e.missingWarn) || Tt(e.missingWarn) ? e.missingWarn : !0, v = X(e.fallbackWarn) || Tt(e.fallbackWarn) ? e.fallbackWarn : !0, R = !!e.fallbackFormat, C = !!e.unresolving, A = re(e.postTranslation) ? e.postTranslation : null, _ = K(e.processor) ? e.processor : null, T = X(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter, y = re(e.messageCompiler) ? e.messageCompiler : Zi, x = re(e.messageResolver) ? e.messageResolver : Qi || Uu, I = re(e.localeFallbacker) ? e.localeFallbacker : el || Qu, V = Q(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, F = Q(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), ie = Q(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), he = Q(Y.__meta) ? Y.__meta : {};
  ks++;
  const le = {
    version: r,
    cid: ks,
    locale: n,
    fallbackLocale: o,
    messages: i,
    modifiers: d,
    pluralRules: p,
    missing: g,
    missingWarn: h,
    fallbackWarn: v,
    fallbackFormat: R,
    unresolving: C,
    postTranslation: A,
    processor: _,
    warnHtmlMessage: T,
    escapeParameter: N,
    messageCompiler: y,
    messageResolver: x,
    localeFallbacker: I,
    fallbackContext: V,
    onWarn: t,
    __meta: he
  };
  return le.datetimeFormats = c, le.numberFormats = u, le.__datetimeFormatters = F, le.__numberFormatters = ie, __INTLIFY_PROD_DEVTOOLS__ && zu(le, r, he), le;
}
function wo(e, t, r, n, s) {
  const { missing: o, onWarn: i } = e;
  if (o !== null) {
    const c = o(e, r, t, s);
    return D(c) ? c : t;
  } else
    return t;
}
function rr(e, t, r) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, r, t);
}
function Tn(e) {
  return (r) => ff(r, e);
}
function ff(e, t) {
  const r = t.b || t.body;
  if ((r.t || r.type) === 1) {
    const n = r, s = n.c || n.cases;
    return e.plural(s.reduce((o, i) => [
      ...o,
      Ts(e, i)
    ], []));
  } else
    return Ts(e, r);
}
function Ts(e, t) {
  const r = t.s || t.static;
  if (r)
    return e.type === "text" ? r : e.normalize([r]);
  {
    const n = (t.i || t.items).reduce((s, o) => [...s, Fn(e, o)], []);
    return e.normalize(n);
  }
}
function Fn(e, t) {
  const r = t.t || t.type;
  switch (r) {
    case 3:
      const n = t;
      return n.v || n.value;
    case 9:
      const s = t;
      return s.v || s.value;
    case 4:
      const o = t;
      return e.interpolate(e.named(o.k || o.key));
    case 5:
      const i = t;
      return e.interpolate(e.list(i.i != null ? i.i : i.index));
    case 6:
      const c = t, u = c.m || c.modifier;
      return e.linked(Fn(e, c.k || c.key), u ? Fn(e, u) : void 0, e.type);
    case 7:
      const d = t;
      return d.v || d.value;
    case 8:
      const p = t;
      return p.v || p.value;
    default:
      throw new Error(`unhandled node type on format message part: ${r}`);
  }
}
const nl = (e) => e;
let jt = /* @__PURE__ */ Object.create(null);
const Qt = (e) => Q(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function ol(e, t = {}) {
  let r = !1;
  const n = t.onError || iu;
  return t.onError = (s) => {
    r = !0, n(s);
  }, { ...Cu(e, t), detectError: r };
}
const df = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!D(e))
    throw tt(Ke.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    X(t.warnHtmlMessage) && t.warnHtmlMessage;
    const n = (t.onCacheKey || nl)(e), s = jt[n];
    if (s)
      return s;
    const { code: o, detectError: i } = ol(e, t), c = new Function(`return ${o}`)();
    return i ? c : jt[n] = c;
  }
};
function pf(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && D(e)) {
    X(t.warnHtmlMessage) && t.warnHtmlMessage;
    const n = (t.onCacheKey || nl)(e), s = jt[n];
    if (s)
      return s;
    const { ast: o, detectError: i } = ol(e, {
      ...t,
      location: xu.NODE_ENV !== "production",
      jit: !0
    }), c = Tn(o);
    return i ? c : jt[n] = c;
  } else {
    const r = e.cacheKey;
    if (r) {
      const n = jt[r];
      return n || (jt[r] = Tn(e));
    } else
      return Tn(e);
  }
}
const Ns = () => "", Fe = (e) => re(e);
function Is(e, ...t) {
  const { fallbackFormat: r, postTranslation: n, unresolving: s, messageCompiler: o, fallbackLocale: i, messages: c } = e, [u, d] = Un(...t), p = X(d.missingWarn) ? d.missingWarn : e.missingWarn, g = X(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, h = X(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, v = !!d.resolvedMessage, R = D(d.default) || X(d.default) ? X(d.default) ? o ? u : () => u : d.default : r ? o ? u : () => u : "", C = r || R !== "", A = ho(e, d);
  h && mf(d);
  let [_, T, N] = v ? [
    u,
    A,
    c[A] || {}
  ] : sl(e, u, A, i, g, p), y = _, x = u;
  if (!v && !(D(y) || Qt(y) || Fe(y)) && C && (y = R, x = y), !v && (!(D(y) || Qt(y) || Fe(y)) || !D(T)))
    return s ? un : u;
  let I = !1;
  const V = () => {
    I = !0;
  }, Y = Fe(y) ? y : il(e, u, T, y, x, V);
  if (I)
    return y;
  const F = bf(e, T, N, d), ie = Bu(F), he = _f(e, Y, ie), le = n ? n(he, u) : he;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const we = {
      timestamp: Date.now(),
      key: D(u) ? u : Fe(y) ? y.key : "",
      locale: T || (Fe(y) ? y.locale : ""),
      format: D(y) ? y : Fe(y) ? y.source : "",
      message: le
    };
    we.meta = Ee({}, e.__meta, /* @__PURE__ */ af() || {}), Ju(we);
  }
  return le;
}
function mf(e) {
  se(e.list) ? e.list = e.list.map((t) => D(t) ? us(t) : t) : Q(e.named) && Object.keys(e.named).forEach((t) => {
    D(e.named[t]) && (e.named[t] = us(e.named[t]));
  });
}
function sl(e, t, r, n, s, o) {
  const { messages: i, onWarn: c, messageResolver: u, localeFallbacker: d } = e, p = d(e, n, r);
  let g = {}, h, v = null;
  const R = "translate";
  for (let C = 0; C < p.length && (h = p[C], g = i[h] || {}, (v = u(g, t)) === null && (v = g[t]), !(D(v) || Qt(v) || Fe(v))); C++) {
    const A = wo(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      h,
      o,
      R
    );
    A !== t && (v = A);
  }
  return [v, h, g];
}
function il(e, t, r, n, s, o) {
  const { messageCompiler: i, warnHtmlMessage: c } = e;
  if (Fe(n)) {
    const d = n;
    return d.locale = d.locale || r, d.key = d.key || t, d;
  }
  if (i == null) {
    const d = () => n;
    return d.locale = r, d.key = t, d;
  }
  const u = i(n, gf(e, r, s, n, c, o));
  return u.locale = r, u.key = t, u.source = n, u;
}
function _f(e, t, r) {
  return t(r);
}
function Un(...e) {
  const [t, r, n] = e, s = {};
  if (!D(t) && !fe(t) && !Fe(t) && !Qt(t))
    throw tt(Ke.INVALID_ARGUMENT);
  const o = fe(t) ? String(t) : (Fe(t), t);
  return fe(r) ? s.plural = r : D(r) ? s.default = r : K(r) && !cn(r) ? s.named = r : se(r) && (s.list = r), fe(n) ? s.plural = n : D(n) ? s.default = n : K(n) && Ee(s, n), [o, s];
}
function gf(e, t, r, n, s, o) {
  return {
    locale: t,
    key: r,
    warnHtmlMessage: s,
    onError: (i) => {
      throw o && o(i), i;
    },
    onCacheKey: (i) => Bc(t, r, i)
  };
}
function bf(e, t, r, n) {
  const { modifiers: s, pluralRules: o, messageResolver: i, fallbackLocale: c, fallbackWarn: u, missingWarn: d, fallbackContext: p } = e, h = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (v) => {
      let R = i(r, v);
      if (R == null && p) {
        const [, , C] = sl(p, v, t, c, u, d);
        R = i(C, v);
      }
      if (D(R) || Qt(R)) {
        let C = !1;
        const _ = il(e, v, t, R, v, () => {
          C = !0;
        });
        return C ? Ns : _;
      } else
        return Fe(R) ? R : Ns;
    }
  };
  return e.processor && (h.processor = e.processor), n.list && (h.list = n.list), n.named && (h.named = n.named), fe(n.plural) && (h.pluralIndex = n.plural), h;
}
function Ls(e, ...t) {
  const { datetimeFormats: r, unresolving: n, fallbackLocale: s, onWarn: o, localeFallbacker: i } = e, { __datetimeFormatters: c } = e, [u, d, p, g] = Vn(...t), h = X(p.missingWarn) ? p.missingWarn : e.missingWarn;
  X(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
  const v = !!p.part, R = ho(e, p), C = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    R
  );
  if (!D(u) || u === "")
    return new Intl.DateTimeFormat(R, g).format(d);
  let A = {}, _, T = null;
  const N = "datetime format";
  for (let I = 0; I < C.length && (_ = C[I], A = r[_] || {}, T = A[u], !K(T)); I++)
    wo(e, u, _, h, N);
  if (!K(T) || !D(_))
    return n ? un : u;
  let y = `${_}__${u}`;
  cn(g) || (y = `${y}__${JSON.stringify(g)}`);
  let x = c.get(y);
  return x || (x = new Intl.DateTimeFormat(_, Ee({}, T, g)), c.set(y, x)), v ? x.formatToParts(d) : x.format(d);
}
const ll = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Vn(...e) {
  const [t, r, n, s] = e, o = {};
  let i = {}, c;
  if (D(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw tt(Ke.INVALID_ISO_DATE_ARGUMENT);
    const d = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    c = new Date(d);
    try {
      c.toISOString();
    } catch {
      throw tt(Ke.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (zc(t)) {
    if (isNaN(t.getTime()))
      throw tt(Ke.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (fe(t))
    c = t;
  else
    throw tt(Ke.INVALID_ARGUMENT);
  return D(r) ? o.key = r : K(r) && Object.keys(r).forEach((u) => {
    ll.includes(u) ? i[u] = r[u] : o[u] = r[u];
  }), D(n) ? o.locale = n : K(n) && (i = n), K(s) && (i = s), [o.key || "", c, o, i];
}
function Os(e, t, r) {
  const n = e;
  for (const s in r) {
    const o = `${t}__${s}`;
    n.__datetimeFormatters.has(o) && n.__datetimeFormatters.delete(o);
  }
}
function Cs(e, ...t) {
  const { numberFormats: r, unresolving: n, fallbackLocale: s, onWarn: o, localeFallbacker: i } = e, { __numberFormatters: c } = e, [u, d, p, g] = $n(...t), h = X(p.missingWarn) ? p.missingWarn : e.missingWarn;
  X(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
  const v = !!p.part, R = ho(e, p), C = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    R
  );
  if (!D(u) || u === "")
    return new Intl.NumberFormat(R, g).format(d);
  let A = {}, _, T = null;
  const N = "number format";
  for (let I = 0; I < C.length && (_ = C[I], A = r[_] || {}, T = A[u], !K(T)); I++)
    wo(e, u, _, h, N);
  if (!K(T) || !D(_))
    return n ? un : u;
  let y = `${_}__${u}`;
  cn(g) || (y = `${y}__${JSON.stringify(g)}`);
  let x = c.get(y);
  return x || (x = new Intl.NumberFormat(_, Ee({}, T, g)), c.set(y, x)), v ? x.formatToParts(d) : x.format(d);
}
const al = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function $n(...e) {
  const [t, r, n, s] = e, o = {};
  let i = {};
  if (!fe(t))
    throw tt(Ke.INVALID_ARGUMENT);
  const c = t;
  return D(r) ? o.key = r : K(r) && Object.keys(r).forEach((u) => {
    al.includes(u) ? i[u] = r[u] : o[u] = r[u];
  }), D(n) ? o.locale = n : K(n) && (i = n), K(s) && (i = s), [o.key || "", c, o, i];
}
function xs(e, t, r) {
  const n = e;
  for (const s in r) {
    const o = `${t}__${s}`;
    n.__numberFormatters.has(o) && n.__numberFormatters.delete(o);
  }
}
Su();
var hf = { TERM_PROGRAM: "vscode", NODE: "/usr/local/bin/node", INIT_CWD: "/Users/viktor/Projects/diabolocom-test-task", TERM: "xterm-256color", SHELL: "/bin/zsh", TMPDIR: "/var/folders/sk/w7366x6s21q8c3y2wyb2_jgc0000gn/T/", npm_config_global_prefix: "/usr/local", TERM_PROGRAM_VERSION: "1.87.0", ZDOTDIR: "/Users/viktor", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/viktor/Projects/diabolocom-test-task", USER: "viktor", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/usr/local/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.RsWxnT3Sog/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/usr/local/lib/node_modules/npm/bin/npm-cli.js", PATH: "/Users/viktor/Projects/diabolocom-test-task/node_modules/.bin:/Users/viktor/Projects/node_modules/.bin:/Users/viktor/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/viktor/Library/Application Support/cloud-code/installer/google-cloud-sdk/bin", npm_package_json: "/Users/viktor/Projects/diabolocom-test-task/package.json", npm_config_userconfig: "/Users/viktor/.npmrc", npm_config_init_module: "/Users/viktor/.npm-init.js", USER_ZDOTDIR: "/Users/viktor", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/viktor/Projects/diabolocom-test-task", npm_lifecycle_event: "build", EDITOR: "vi", npm_package_name: "diabolocom-test-task", LANG: "en_US.UTF-8", npm_config_npm_version: "10.2.4", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/viktor", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_cache: "/Users/viktor/.npm", VSCODE_PATH_PREFIX: "/Users/viktor/Library/Application Support/cloud-code/installer/google-cloud-sdk/bin:", LOGNAME: "viktor", npm_lifecycle_script: "vue-tsc --noEmit && vite build", VSCODE_GIT_IPC_HANDLE: "/var/folders/sk/w7366x6s21q8c3y2wyb2_jgc0000gn/T/vscode-git-9ea8734deb.sock", npm_config_user_agent: "npm/10.2.4 node/v20.11.1 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/usr/local/bin/node", npm_config_prefix: "/usr/local", COLORTERM: "truecolor", _: "/Users/viktor/Projects/diabolocom-test-task/node_modules/.bin/vite", NODE_ENV: "production" };
const wf = "9.10.1";
function yf() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (it().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (it().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (it().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (it().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (it().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const cl = Zu.__EXTEND_POINT__, st = go(cl);
st(), st(), st(), st(), st(), st(), st(), st(), st();
const ul = Ke.__EXTEND_POINT__, xe = go(ul), de = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ul,
  // 26
  // legacy module errors
  INVALID_ARGUMENT: xe(),
  // 27
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: xe(),
  // 28
  NOT_INSTALLED: xe(),
  // 29
  NOT_AVAILABLE_IN_LEGACY_MODE: xe(),
  // 30
  // directive module errors
  REQUIRED_VALUE: xe(),
  // 31
  INVALID_VALUE: xe(),
  // 32
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: xe(),
  // 33
  NOT_INSTALLED_WITH_PROVIDE: xe(),
  // 34
  // unexpected error
  UNEXPECTED_ERROR: xe(),
  // 35
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: xe(),
  // 36
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: xe(),
  // 37
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: xe(),
  // 38
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: xe(),
  // 39
  // for enhancement
  __EXTEND_POINT__: xe()
  // 40
};
function ge(e, ...t) {
  return er(e, null, void 0);
}
const jn = /* @__PURE__ */ Lt("__translateVNode"), Hn = /* @__PURE__ */ Lt("__datetimeParts"), Wn = /* @__PURE__ */ Lt("__numberParts"), fl = Lt("__setPluralRules"), dl = /* @__PURE__ */ Lt("__injectWithOption"), Gn = /* @__PURE__ */ Lt("__dispose");
function hr(e) {
  if (!Q(e))
    return e;
  for (const t in e)
    if (Xr(e, t))
      if (!t.includes("."))
        Q(e[t]) && hr(e[t]);
      else {
        const r = t.split("."), n = r.length - 1;
        let s = e, o = !1;
        for (let i = 0; i < n; i++) {
          if (r[i] in s || (s[r[i]] = {}), !Q(s[r[i]])) {
            o = !0;
            break;
          }
          s = s[r[i]];
        }
        o || (s[r[n]] = e[t], delete e[t]), Q(s[r[n]]) && hr(s[r[n]]);
      }
  return e;
}
function fn(e, t) {
  const { messages: r, __i18n: n, messageResolver: s, flatJson: o } = t, i = K(r) ? r : se(n) ? {} : { [e]: {} };
  if (se(n) && n.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: u, resource: d } = c;
      u ? (i[u] = i[u] || {}, Mr(d, i[u])) : Mr(d, i);
    } else
      D(c) && Mr(JSON.parse(c), i);
  }), s == null && o)
    for (const c in i)
      Xr(i, c) && hr(i[c]);
  return i;
}
function pl(e) {
  return e.type;
}
function ml(e, t, r) {
  let n = Q(t.messages) ? t.messages : {};
  "__i18nGlobal" in r && (n = fn(e.locale.value, {
    messages: n,
    __i18n: r.__i18nGlobal
  }));
  const s = Object.keys(n);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, n[o]);
  });
  {
    if (Q(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (Q(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Ss(e) {
  return _e(Er, null, e, 0);
}
const As = "__INTLIFY_META__", Ps = () => [], Ef = () => !1;
let Rs = 0;
function Ms(e) {
  return (t, r, n, s) => e(r, n, gr() || void 0, s);
}
const vf = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = gr();
  let t = null;
  return e && (t = pl(e)[As]) ? { [As]: t } : null;
};
function yo(e = {}, t) {
  const { __root: r, __injectWithOption: n } = e, s = r === void 0, o = e.flatJson, i = Br ? Vt : di, c = !!e.translateExistCompatible;
  let u = X(e.inheritLocale) ? e.inheritLocale : !0;
  const d = i(
    // prettier-ignore
    r && u ? r.locale.value : D(e.locale) ? e.locale : Zt
  ), p = i(
    // prettier-ignore
    r && u ? r.fallbackLocale.value : D(e.fallbackLocale) || se(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : d.value
  ), g = i(fn(d.value, e)), h = i(K(e.datetimeFormats) ? e.datetimeFormats : { [d.value]: {} }), v = i(K(e.numberFormats) ? e.numberFormats : { [d.value]: {} });
  let R = r ? r.missingWarn : X(e.missingWarn) || Tt(e.missingWarn) ? e.missingWarn : !0, C = r ? r.fallbackWarn : X(e.fallbackWarn) || Tt(e.fallbackWarn) ? e.fallbackWarn : !0, A = r ? r.fallbackRoot : X(e.fallbackRoot) ? e.fallbackRoot : !0, _ = !!e.fallbackFormat, T = re(e.missing) ? e.missing : null, N = re(e.missing) ? Ms(e.missing) : null, y = re(e.postTranslation) ? e.postTranslation : null, x = r ? r.warnHtmlMessage : X(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const V = r ? r.modifiers : K(e.modifiers) ? e.modifiers : {};
  let Y = e.pluralRules || r && r.pluralRules, F;
  F = (() => {
    s && vs(null);
    const b = {
      version: wf,
      locale: d.value,
      fallbackLocale: p.value,
      messages: g.value,
      modifiers: V,
      pluralRules: Y,
      missing: N === null ? void 0 : N,
      missingWarn: R,
      fallbackWarn: C,
      fallbackFormat: _,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: x,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    b.datetimeFormats = h.value, b.numberFormats = v.value, b.__datetimeFormatters = K(F) ? F.__datetimeFormatters : void 0, b.__numberFormatters = K(F) ? F.__numberFormatters : void 0;
    const E = uf(b);
    return s && vs(E), E;
  })(), rr(F, d.value, p.value);
  function he() {
    return [
      d.value,
      p.value,
      g.value,
      h.value,
      v.value
    ];
  }
  const le = We({
    get: () => d.value,
    set: (b) => {
      d.value = b, F.locale = d.value;
    }
  }), we = We({
    get: () => p.value,
    set: (b) => {
      p.value = b, F.fallbackLocale = p.value, rr(F, d.value, b);
    }
  }), Be = We(() => g.value), dt = /* @__PURE__ */ We(() => h.value), te = /* @__PURE__ */ We(() => v.value);
  function Z() {
    return re(y) ? y : null;
  }
  function q(b) {
    y = b, F.postTranslation = b;
  }
  function Ce() {
    return T;
  }
  function Xe(b) {
    b !== null && (N = Ms(b)), T = b, F.missing = N;
  }
  const ce = (b, E, $, G, ee, ke) => {
    he();
    let Re;
    try {
      hf.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (F.fallbackContext = r ? cf() : void 0), Re = b(F);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s || (F.fallbackContext = void 0);
    }
    if ($ !== "translate exists" && // for not `te` (e.g `t`)
    fe(Re) && Re === un || $ === "translate exists" && !Re) {
      const [kr, Ut] = E();
      return r && A ? G(r) : ee(kr);
    } else {
      if (ke(Re))
        return Re;
      throw ge(de.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ye(...b) {
    return ce((E) => Reflect.apply(Is, null, [E, ...b]), () => Un(...b), "translate", (E) => Reflect.apply(E.t, E, [...b]), (E) => E, (E) => D(E));
  }
  function pt(...b) {
    const [E, $, G] = b;
    if (G && !Q(G))
      throw ge(de.INVALID_ARGUMENT);
    return ye(E, $, Ee({ resolvedMessage: !0 }, G || {}));
  }
  function mt(...b) {
    return ce((E) => Reflect.apply(Ls, null, [E, ...b]), () => Vn(...b), "datetime format", (E) => Reflect.apply(E.d, E, [...b]), () => ws, (E) => D(E));
  }
  function Ct(...b) {
    return ce((E) => Reflect.apply(Cs, null, [E, ...b]), () => $n(...b), "number format", (E) => Reflect.apply(E.n, E, [...b]), () => ws, (E) => D(E));
  }
  function Ne(b) {
    return b.map((E) => D(E) || fe(E) || X(E) ? Ss(String(E)) : E);
  }
  const Ue = {
    normalize: Ne,
    interpolate: (b) => b,
    type: "vnode"
  };
  function ze(...b) {
    return ce(
      (E) => {
        let $;
        const G = E;
        try {
          G.processor = Ue, $ = Reflect.apply(Is, null, [G, ...b]);
        } finally {
          G.processor = null;
        }
        return $;
      },
      () => Un(...b),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[jn](...b),
      (E) => [Ss(E)],
      (E) => se(E)
    );
  }
  function Ie(...b) {
    return ce(
      (E) => Reflect.apply(Cs, null, [E, ...b]),
      () => $n(...b),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Wn](...b),
      Ps,
      (E) => D(E) || se(E)
    );
  }
  function Ve(...b) {
    return ce(
      (E) => Reflect.apply(Ls, null, [E, ...b]),
      () => Vn(...b),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Hn](...b),
      Ps,
      (E) => D(E) || se(E)
    );
  }
  function nt(b) {
    Y = b, F.pluralRules = Y;
  }
  function a(b, E) {
    return ce(() => {
      if (!b)
        return !1;
      const $ = D(E) ? E : d.value, G = m($), ee = F.messageResolver(G, b);
      return c ? ee != null : Qt(ee) || Fe(ee) || D(ee);
    }, () => [b], "translate exists", ($) => Reflect.apply($.te, $, [b, E]), Ef, ($) => X($));
  }
  function l(b) {
    let E = null;
    const $ = qi(F, p.value, d.value);
    for (let G = 0; G < $.length; G++) {
      const ee = g.value[$[G]] || {}, ke = F.messageResolver(ee, b);
      if (ke != null) {
        E = ke;
        break;
      }
    }
    return E;
  }
  function f(b) {
    const E = l(b);
    return E ?? (r ? r.tm(b) || {} : {});
  }
  function m(b) {
    return g.value[b] || {};
  }
  function w(b, E) {
    if (o) {
      const $ = { [b]: E };
      for (const G in $)
        Xr($, G) && hr($[G]);
      E = $[b];
    }
    g.value[b] = E, F.messages = g.value;
  }
  function k(b, E) {
    g.value[b] = g.value[b] || {};
    const $ = { [b]: E };
    if (o)
      for (const G in $)
        Xr($, G) && hr($[G]);
    E = $[b], Mr(E, g.value[b]), F.messages = g.value;
  }
  function S(b) {
    return h.value[b] || {};
  }
  function O(b, E) {
    h.value[b] = E, F.datetimeFormats = h.value, Os(F, b, E);
  }
  function P(b, E) {
    h.value[b] = Ee(h.value[b] || {}, E), F.datetimeFormats = h.value, Os(F, b, E);
  }
  function L(b) {
    return v.value[b] || {};
  }
  function U(b, E) {
    v.value[b] = E, F.numberFormats = v.value, xs(F, b, E);
  }
  function j(b, E) {
    v.value[b] = Ee(v.value[b] || {}, E), F.numberFormats = v.value, xs(F, b, E);
  }
  Rs++, r && Br && (Ft(r.locale, (b) => {
    u && (d.value = b, F.locale = b, rr(F, d.value, p.value));
  }), Ft(r.fallbackLocale, (b) => {
    u && (p.value = b, F.fallbackLocale = b, rr(F, d.value, p.value));
  }));
  const M = {
    id: Rs,
    locale: le,
    fallbackLocale: we,
    get inheritLocale() {
      return u;
    },
    set inheritLocale(b) {
      u = b, b && r && (d.value = r.locale.value, p.value = r.fallbackLocale.value, rr(F, d.value, p.value));
    },
    get availableLocales() {
      return Object.keys(g.value).sort();
    },
    messages: Be,
    get modifiers() {
      return V;
    },
    get pluralRules() {
      return Y || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return R;
    },
    set missingWarn(b) {
      R = b, F.missingWarn = R;
    },
    get fallbackWarn() {
      return C;
    },
    set fallbackWarn(b) {
      C = b, F.fallbackWarn = C;
    },
    get fallbackRoot() {
      return A;
    },
    set fallbackRoot(b) {
      A = b;
    },
    get fallbackFormat() {
      return _;
    },
    set fallbackFormat(b) {
      _ = b, F.fallbackFormat = _;
    },
    get warnHtmlMessage() {
      return x;
    },
    set warnHtmlMessage(b) {
      x = b, F.warnHtmlMessage = b;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(b) {
      I = b, F.escapeParameter = b;
    },
    t: ye,
    getLocaleMessage: m,
    setLocaleMessage: w,
    mergeLocaleMessage: k,
    getPostTranslationHandler: Z,
    setPostTranslationHandler: q,
    getMissingHandler: Ce,
    setMissingHandler: Xe,
    [fl]: nt
  };
  return M.datetimeFormats = dt, M.numberFormats = te, M.rt = pt, M.te = a, M.tm = f, M.d = mt, M.n = Ct, M.getDateTimeFormat = S, M.setDateTimeFormat = O, M.mergeDateTimeFormat = P, M.getNumberFormat = L, M.setNumberFormat = U, M.mergeNumberFormat = j, M[dl] = n, M[jn] = ze, M[Hn] = Ve, M[Wn] = Ie, M;
}
function kf(e) {
  const t = D(e.locale) ? e.locale : Zt, r = D(e.fallbackLocale) || se(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, n = re(e.missing) ? e.missing : void 0, s = X(e.silentTranslationWarn) || Tt(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, o = X(e.silentFallbackWarn) || Tt(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = X(e.fallbackRoot) ? e.fallbackRoot : !0, c = !!e.formatFallbackMessages, u = K(e.modifiers) ? e.modifiers : {}, d = e.pluralizationRules, p = re(e.postTranslation) ? e.postTranslation : void 0, g = D(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, h = !!e.escapeParameterHtml, v = X(e.sync) ? e.sync : !0;
  let R = e.messages;
  if (K(e.sharedMessages)) {
    const I = e.sharedMessages;
    R = Object.keys(I).reduce((Y, F) => {
      const ie = Y[F] || (Y[F] = {});
      return Ee(ie, I[F]), Y;
    }, R || {});
  }
  const { __i18n: C, __root: A, __injectWithOption: _ } = e, T = e.datetimeFormats, N = e.numberFormats, y = e.flatJson, x = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: r,
    messages: R,
    flatJson: y,
    datetimeFormats: T,
    numberFormats: N,
    missing: n,
    missingWarn: s,
    fallbackWarn: o,
    fallbackRoot: i,
    fallbackFormat: c,
    modifiers: u,
    pluralRules: d,
    postTranslation: p,
    warnHtmlMessage: g,
    escapeParameter: h,
    messageResolver: e.messageResolver,
    inheritLocale: v,
    translateExistCompatible: x,
    __i18n: C,
    __root: A,
    __injectWithOption: _
  };
}
function Kn(e = {}, t) {
  {
    const r = yo(kf(e)), { __extender: n } = e, s = {
      // id
      id: r.id,
      // locale
      get locale() {
        return r.locale.value;
      },
      set locale(o) {
        r.locale.value = o;
      },
      // fallbackLocale
      get fallbackLocale() {
        return r.fallbackLocale.value;
      },
      set fallbackLocale(o) {
        r.fallbackLocale.value = o;
      },
      // messages
      get messages() {
        return r.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return r.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return r.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return r.availableLocales;
      },
      // formatter
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(o) {
      },
      // missing
      get missing() {
        return r.getMissingHandler();
      },
      set missing(o) {
        r.setMissingHandler(o);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return X(r.missingWarn) ? !r.missingWarn : r.missingWarn;
      },
      set silentTranslationWarn(o) {
        r.missingWarn = X(o) ? !o : o;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return X(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn;
      },
      set silentFallbackWarn(o) {
        r.fallbackWarn = X(o) ? !o : o;
      },
      // modifiers
      get modifiers() {
        return r.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return r.fallbackFormat;
      },
      set formatFallbackMessages(o) {
        r.fallbackFormat = o;
      },
      // postTranslation
      get postTranslation() {
        return r.getPostTranslationHandler();
      },
      set postTranslation(o) {
        r.setPostTranslationHandler(o);
      },
      // sync
      get sync() {
        return r.inheritLocale;
      },
      set sync(o) {
        r.inheritLocale = o;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return r.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(o) {
        r.warnHtmlMessage = o !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return r.escapeParameter;
      },
      set escapeParameterHtml(o) {
        r.escapeParameter = o;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return !0;
      },
      set preserveDirectiveContent(o) {
      },
      // pluralizationRules
      get pluralizationRules() {
        return r.pluralRules || {};
      },
      // for internal
      __composer: r,
      // t
      t(...o) {
        const [i, c, u] = o, d = {};
        let p = null, g = null;
        if (!D(i))
          throw ge(de.INVALID_ARGUMENT);
        const h = i;
        return D(c) ? d.locale = c : se(c) ? p = c : K(c) && (g = c), se(u) ? p = u : K(u) && (g = u), Reflect.apply(r.t, r, [
          h,
          p || g || {},
          d
        ]);
      },
      rt(...o) {
        return Reflect.apply(r.rt, r, [...o]);
      },
      // tc
      tc(...o) {
        const [i, c, u] = o, d = { plural: 1 };
        let p = null, g = null;
        if (!D(i))
          throw ge(de.INVALID_ARGUMENT);
        const h = i;
        return D(c) ? d.locale = c : fe(c) ? d.plural = c : se(c) ? p = c : K(c) && (g = c), D(u) ? d.locale = u : se(u) ? p = u : K(u) && (g = u), Reflect.apply(r.t, r, [
          h,
          p || g || {},
          d
        ]);
      },
      // te
      te(o, i) {
        return r.te(o, i);
      },
      // tm
      tm(o) {
        return r.tm(o);
      },
      // getLocaleMessage
      getLocaleMessage(o) {
        return r.getLocaleMessage(o);
      },
      // setLocaleMessage
      setLocaleMessage(o, i) {
        r.setLocaleMessage(o, i);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(o, i) {
        r.mergeLocaleMessage(o, i);
      },
      // d
      d(...o) {
        return Reflect.apply(r.d, r, [...o]);
      },
      // getDateTimeFormat
      getDateTimeFormat(o) {
        return r.getDateTimeFormat(o);
      },
      // setDateTimeFormat
      setDateTimeFormat(o, i) {
        r.setDateTimeFormat(o, i);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(o, i) {
        r.mergeDateTimeFormat(o, i);
      },
      // n
      n(...o) {
        return Reflect.apply(r.n, r, [...o]);
      },
      // getNumberFormat
      getNumberFormat(o) {
        return r.getNumberFormat(o);
      },
      // setNumberFormat
      setNumberFormat(o, i) {
        r.setNumberFormat(o, i);
      },
      // mergeNumberFormat
      mergeNumberFormat(o, i) {
        r.mergeNumberFormat(o, i);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(o, i) {
        return -1;
      }
    };
    return s.__extender = n, s;
  }
}
const Eo = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Tf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => [
    ...n,
    // prettier-ignore
    ...s.type === Ae ? s.children : [s]
  ], []) : t.reduce((r, n) => {
    const s = e[n];
    return s && (r[n] = s()), r;
  }, {});
}
function _l(e) {
  return Ae;
}
const Nf = /* @__PURE__ */ ut({
  /* eslint-disable */
  name: "i18n-t",
  props: Ee({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => fe(e) || !isNaN(e)
    }
  }, Eo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: r, attrs: n } = t, s = e.i18n || vo({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const o = Object.keys(r).filter((g) => g !== "_"), i = {};
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = D(e.plural) ? +e.plural : e.plural);
      const c = Tf(t, o), u = s[jn](e.keypath, c, i), d = Ee({}, n), p = D(e.tag) || Q(e.tag) ? e.tag : _l();
      return Gi(p, d, u);
    };
  }
}), Ds = Nf;
function If(e) {
  return se(e) && !D(e[0]);
}
function gl(e, t, r, n) {
  const { slots: s, attrs: o } = t;
  return () => {
    const i = { part: !0 };
    let c = {};
    e.locale && (i.locale = e.locale), D(e.format) ? i.key = e.format : Q(e.format) && (D(e.format.key) && (i.key = e.format.key), c = Object.keys(e.format).reduce((h, v) => r.includes(v) ? Ee({}, h, { [v]: e.format[v] }) : h, {}));
    const u = n(e.value, i, c);
    let d = [i.key];
    se(u) ? d = u.map((h, v) => {
      const R = s[h.type], C = R ? R({ [h.type]: h.value, index: v, parts: u }) : [h.value];
      return If(C) && (C[0].key = `${h.type}-${v}`), C;
    }) : D(u) && (d = [u]);
    const p = Ee({}, o), g = D(e.tag) || Q(e.tag) ? e.tag : _l();
    return Gi(g, p, d);
  };
}
const Lf = /* @__PURE__ */ ut({
  /* eslint-disable */
  name: "i18n-n",
  props: Ee({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Eo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const r = e.i18n || vo({
      useScope: "parent",
      __useComponent: !0
    });
    return gl(e, t, al, (...n) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      r[Wn](...n)
    ));
  }
}), Fs = Lf, Of = /* @__PURE__ */ ut({
  /* eslint-disable */
  name: "i18n-d",
  props: Ee({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Eo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const r = e.i18n || vo({
      useScope: "parent",
      __useComponent: !0
    });
    return gl(e, t, ll, (...n) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      r[Hn](...n)
    ));
  }
}), Us = Of;
function Cf(e, t) {
  const r = e;
  if (e.mode === "composition")
    return r.__getInstance(t) || e.global;
  {
    const n = r.__getInstance(t);
    return n != null ? n.__composer : e.global.__composer;
  }
}
function xf(e) {
  const t = (i) => {
    const { instance: c, modifiers: u, value: d } = i;
    if (!c || !c.$)
      throw ge(de.UNEXPECTED_ERROR);
    const p = Cf(e, c.$), g = Vs(d);
    return [
      Reflect.apply(p.t, p, [...$s(g)]),
      p
    ];
  };
  return {
    created: (i, c) => {
      const [u, d] = t(c);
      Br && e.global === d && (i.__i18nWatcher = Ft(d.locale, () => {
        c.instance && c.instance.$forceUpdate();
      })), i.__composer = d, i.textContent = u;
    },
    unmounted: (i) => {
      Br && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: c }) => {
      if (i.__composer) {
        const u = i.__composer, d = Vs(c);
        i.textContent = Reflect.apply(u.t, u, [
          ...$s(d)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [c] = t(i);
      return { textContent: c };
    }
  };
}
function Vs(e) {
  if (D(e))
    return { path: e };
  if (K(e)) {
    if (!("path" in e))
      throw ge(de.REQUIRED_VALUE, "path");
    return e;
  } else
    throw ge(de.INVALID_VALUE);
}
function $s(e) {
  const { path: t, locale: r, args: n, choice: s, plural: o } = e, i = {}, c = n || {};
  return D(r) && (i.locale = r), fe(s) && (i.plural = s), fe(o) && (i.plural = o), [t, c, i];
}
function Sf(e, t, ...r) {
  const n = K(r[0]) ? r[0] : {}, s = !!n.useI18nComponentName;
  (X(n.globalInstall) ? n.globalInstall : !0) && ([s ? "i18n" : Ds.name, "I18nT"].forEach((i) => e.component(i, Ds)), [Fs.name, "I18nN"].forEach((i) => e.component(i, Fs)), [Us.name, "I18nD"].forEach((i) => e.component(i, Us))), e.directive("t", xf(t));
}
function Af(e, t, r) {
  return {
    beforeCreate() {
      const n = gr();
      if (!n)
        throw ge(de.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const o = s.i18n;
        if (s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root)
          this.$i18n = js(e, o);
        else {
          o.__injectWithOption = !0, o.__extender = r.__vueI18nExtend, this.$i18n = Kn(o);
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = js(e, s);
        else {
          this.$i18n = Kn({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: r.__vueI18nExtend,
            __root: t
          });
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      s.__i18nGlobal && ml(t, s, s), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, i) => this.$i18n.te(o, i), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = (o) => this.$i18n.tm(o), r.__setInstance(n, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const n = gr();
      if (!n)
        throw ge(de.UNEXPECTED_ERROR);
      const s = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), r.__deleteInstance(n), delete this.$i18n;
    }
  };
}
function js(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[fl](t.pluralizationRules || e.pluralizationRules);
  const r = fn(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(r).forEach((n) => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
}
const Pf = /* @__PURE__ */ Lt("global-vue-i18n");
function Rf(e = {}, t) {
  const r = __VUE_I18N_LEGACY_API__ && X(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = X(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && r ? !!e.allowComposition : !0, o = /* @__PURE__ */ new Map(), [i, c] = Mf(e, r), u = /* @__PURE__ */ Lt("");
  function d(h) {
    return o.get(h) || null;
  }
  function p(h, v) {
    o.set(h, v);
  }
  function g(h) {
    o.delete(h);
  }
  {
    const h = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && r ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return s;
      },
      // install plugin
      async install(v, ...R) {
        if (v.__VUE_I18N_SYMBOL__ = u, v.provide(v.__VUE_I18N_SYMBOL__, h), K(R[0])) {
          const _ = R[0];
          h.__composerExtend = _.__composerExtend, h.__vueI18nExtend = _.__vueI18nExtend;
        }
        let C = null;
        !r && n && (C = Gf(v, h.global)), __VUE_I18N_FULL_INSTALL__ && Sf(v, h, ...R), __VUE_I18N_LEGACY_API__ && r && v.mixin(Af(c, c.__composer, h));
        const A = v.unmount;
        v.unmount = () => {
          C && C(), h.dispose(), A();
        };
      },
      // global accessor
      get global() {
        return c;
      },
      dispose() {
        i.stop();
      },
      // @internal
      __instances: o,
      // @internal
      __getInstance: d,
      // @internal
      __setInstance: p,
      // @internal
      __deleteInstance: g
    };
    return h;
  }
}
function vo(e = {}) {
  const t = gr();
  if (t == null)
    throw ge(de.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw ge(de.NOT_INSTALLED);
  const r = Df(t), n = Uf(r), s = pl(t), o = Ff(e, s);
  if (__VUE_I18N_LEGACY_API__ && r.mode === "legacy" && !e.__useComponent) {
    if (!r.allowComposition)
      throw ge(de.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Hf(t, o, n, e);
  }
  if (o === "global")
    return ml(n, e, s), n;
  if (o === "parent") {
    let u = Vf(r, t, e.__useComponent);
    return u == null && (u = n), u;
  }
  const i = r;
  let c = i.__getInstance(t);
  if (c == null) {
    const u = Ee({}, e);
    "__i18n" in s && (u.__i18n = s.__i18n), n && (u.__root = n), c = yo(u), i.__composerExtend && (c[Gn] = i.__composerExtend(c)), jf(i, t, c), i.__setInstance(t, c);
  }
  return c;
}
function Mf(e, t, r) {
  const n = Rl();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Kn(e)) : n.run(() => yo(e));
    if (s == null)
      throw ge(de.UNEXPECTED_ERROR);
    return [n, s];
  }
}
function Df(e) {
  {
    const t = ur(e.isCE ? Pf : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw ge(e.isCE ? de.NOT_INSTALLED_WITH_PROVIDE : de.UNEXPECTED_ERROR);
    return t;
  }
}
function Ff(e, t) {
  return cn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Uf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Vf(e, t, r = !1) {
  let n = null;
  const s = t.root;
  let o = $f(t, r);
  for (; o != null; ) {
    const i = e;
    if (e.mode === "composition")
      n = i.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = i.__getInstance(o);
      c != null && (n = c.__composer, r && n && !n[dl] && (n = null));
    }
    if (n != null || s === o)
      break;
    o = o.parent;
  }
  return n;
}
function $f(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function jf(e, t, r) {
  Li(() => {
  }, t), uo(() => {
    const n = r;
    e.__deleteInstance(t);
    const s = n[Gn];
    s && (s(), delete n[Gn]);
  }, t);
}
function Hf(e, t, r, n = {}) {
  const s = t === "local", o = di(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw ge(de.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = X(n.inheritLocale) ? n.inheritLocale : !D(n.locale), c = Vt(
    // prettier-ignore
    !s || i ? r.locale.value : D(n.locale) ? n.locale : Zt
  ), u = Vt(
    // prettier-ignore
    !s || i ? r.fallbackLocale.value : D(n.fallbackLocale) || se(n.fallbackLocale) || K(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : c.value
  ), d = Vt(fn(c.value, n)), p = Vt(K(n.datetimeFormats) ? n.datetimeFormats : { [c.value]: {} }), g = Vt(K(n.numberFormats) ? n.numberFormats : { [c.value]: {} }), h = s ? r.missingWarn : X(n.missingWarn) || Tt(n.missingWarn) ? n.missingWarn : !0, v = s ? r.fallbackWarn : X(n.fallbackWarn) || Tt(n.fallbackWarn) ? n.fallbackWarn : !0, R = s ? r.fallbackRoot : X(n.fallbackRoot) ? n.fallbackRoot : !0, C = !!n.fallbackFormat, A = re(n.missing) ? n.missing : null, _ = re(n.postTranslation) ? n.postTranslation : null, T = s ? r.warnHtmlMessage : X(n.warnHtmlMessage) ? n.warnHtmlMessage : !0, N = !!n.escapeParameter, y = s ? r.modifiers : K(n.modifiers) ? n.modifiers : {}, x = n.pluralRules || s && r.pluralRules;
  function I() {
    return [
      c.value,
      u.value,
      d.value,
      p.value,
      g.value
    ];
  }
  const V = We({
    get: () => o.value ? o.value.locale.value : c.value,
    set: (l) => {
      o.value && (o.value.locale.value = l), c.value = l;
    }
  }), Y = We({
    get: () => o.value ? o.value.fallbackLocale.value : u.value,
    set: (l) => {
      o.value && (o.value.fallbackLocale.value = l), u.value = l;
    }
  }), F = We(() => o.value ? o.value.messages.value : d.value), ie = We(() => p.value), he = We(() => g.value);
  function le() {
    return o.value ? o.value.getPostTranslationHandler() : _;
  }
  function we(l) {
    o.value && o.value.setPostTranslationHandler(l);
  }
  function Be() {
    return o.value ? o.value.getMissingHandler() : A;
  }
  function dt(l) {
    o.value && o.value.setMissingHandler(l);
  }
  function te(l) {
    return I(), l();
  }
  function Z(...l) {
    return o.value ? te(() => Reflect.apply(o.value.t, null, [...l])) : te(() => "");
  }
  function q(...l) {
    return o.value ? Reflect.apply(o.value.rt, null, [...l]) : "";
  }
  function Ce(...l) {
    return o.value ? te(() => Reflect.apply(o.value.d, null, [...l])) : te(() => "");
  }
  function Xe(...l) {
    return o.value ? te(() => Reflect.apply(o.value.n, null, [...l])) : te(() => "");
  }
  function ce(l) {
    return o.value ? o.value.tm(l) : {};
  }
  function ye(l, f) {
    return o.value ? o.value.te(l, f) : !1;
  }
  function pt(l) {
    return o.value ? o.value.getLocaleMessage(l) : {};
  }
  function mt(l, f) {
    o.value && (o.value.setLocaleMessage(l, f), d.value[l] = f);
  }
  function Ct(l, f) {
    o.value && o.value.mergeLocaleMessage(l, f);
  }
  function Ne(l) {
    return o.value ? o.value.getDateTimeFormat(l) : {};
  }
  function rt(l, f) {
    o.value && (o.value.setDateTimeFormat(l, f), p.value[l] = f);
  }
  function Ue(l, f) {
    o.value && o.value.mergeDateTimeFormat(l, f);
  }
  function ze(l) {
    return o.value ? o.value.getNumberFormat(l) : {};
  }
  function Ie(l, f) {
    o.value && (o.value.setNumberFormat(l, f), g.value[l] = f);
  }
  function Ve(l, f) {
    o.value && o.value.mergeNumberFormat(l, f);
  }
  const nt = {
    get id() {
      return o.value ? o.value.id : -1;
    },
    locale: V,
    fallbackLocale: Y,
    messages: F,
    datetimeFormats: ie,
    numberFormats: he,
    get inheritLocale() {
      return o.value ? o.value.inheritLocale : i;
    },
    set inheritLocale(l) {
      o.value && (o.value.inheritLocale = l);
    },
    get availableLocales() {
      return o.value ? o.value.availableLocales : Object.keys(d.value);
    },
    get modifiers() {
      return o.value ? o.value.modifiers : y;
    },
    get pluralRules() {
      return o.value ? o.value.pluralRules : x;
    },
    get isGlobal() {
      return o.value ? o.value.isGlobal : !1;
    },
    get missingWarn() {
      return o.value ? o.value.missingWarn : h;
    },
    set missingWarn(l) {
      o.value && (o.value.missingWarn = l);
    },
    get fallbackWarn() {
      return o.value ? o.value.fallbackWarn : v;
    },
    set fallbackWarn(l) {
      o.value && (o.value.missingWarn = l);
    },
    get fallbackRoot() {
      return o.value ? o.value.fallbackRoot : R;
    },
    set fallbackRoot(l) {
      o.value && (o.value.fallbackRoot = l);
    },
    get fallbackFormat() {
      return o.value ? o.value.fallbackFormat : C;
    },
    set fallbackFormat(l) {
      o.value && (o.value.fallbackFormat = l);
    },
    get warnHtmlMessage() {
      return o.value ? o.value.warnHtmlMessage : T;
    },
    set warnHtmlMessage(l) {
      o.value && (o.value.warnHtmlMessage = l);
    },
    get escapeParameter() {
      return o.value ? o.value.escapeParameter : N;
    },
    set escapeParameter(l) {
      o.value && (o.value.escapeParameter = l);
    },
    t: Z,
    getPostTranslationHandler: le,
    setPostTranslationHandler: we,
    getMissingHandler: Be,
    setMissingHandler: dt,
    rt: q,
    d: Ce,
    n: Xe,
    tm: ce,
    te: ye,
    getLocaleMessage: pt,
    setLocaleMessage: mt,
    mergeLocaleMessage: Ct,
    getDateTimeFormat: Ne,
    setDateTimeFormat: rt,
    mergeDateTimeFormat: Ue,
    getNumberFormat: ze,
    setNumberFormat: Ie,
    mergeNumberFormat: Ve
  };
  function a(l) {
    l.locale.value = c.value, l.fallbackLocale.value = u.value, Object.keys(d.value).forEach((f) => {
      l.mergeLocaleMessage(f, d.value[f]);
    }), Object.keys(p.value).forEach((f) => {
      l.mergeDateTimeFormat(f, p.value[f]);
    }), Object.keys(g.value).forEach((f) => {
      l.mergeNumberFormat(f, g.value[f]);
    }), l.escapeParameter = N, l.fallbackFormat = C, l.fallbackRoot = R, l.fallbackWarn = v, l.missingWarn = h, l.warnHtmlMessage = T;
  }
  return Ii(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw ge(de.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const l = o.value = e.proxy.$i18n.__composer;
    t === "global" ? (c.value = l.locale.value, u.value = l.fallbackLocale.value, d.value = l.messages.value, p.value = l.datetimeFormats.value, g.value = l.numberFormats.value) : s && a(l);
  }), nt;
}
const Wf = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Hs = ["t", "rt", "d", "n", "tm", "te"];
function Gf(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  return Wf.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o)
      throw ge(de.UNEXPECTED_ERROR);
    const i = ve(o.value) ? {
      get() {
        return o.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(c) {
        o.value.value = c;
      }
    } : {
      get() {
        return o.get && o.get();
      }
    };
    Object.defineProperty(r, s, i);
  }), e.config.globalProperties.$i18n = r, Hs.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o || !o.value)
      throw ge(de.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, o);
  }), () => {
    delete e.config.globalProperties.$i18n, Hs.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
yf();
__INTLIFY_JIT_COMPILATION__ ? Es(pf) : Es(df);
of(Vu);
sf(qi);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = it();
  e.__INTLIFY__ = !0, Xu(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const bl = "lang";
var ko = /* @__PURE__ */ ((e) => (e.EN = "EN", e.FR = "FR", e))(ko || {}), wr = /* @__PURE__ */ ((e) => (e.INCREMENT = "increment", e.DECREMENT = "decrement", e.COUNTER = "counter", e.RESET = "reset", e))(wr || {});
const Kf = () => {
  var t;
  const e = localStorage.getItem(bl) ?? ((t = navigator.language) == null ? void 0 : t.toUpperCase());
  return e && e in ko ? e : "EN";
}, Yf = (e) => {
  localStorage.setItem(bl, e);
}, dn = Rf({
  legacy: !1,
  locale: Kf(),
  fallbackLocale: "EN",
  messages: {
    EN: {
      increment: "Increment",
      decrement: "Decrement",
      counter: "Counter",
      reset: "Reset"
    },
    FR: {
      increment: "Incrémenter",
      decrement: "Décrémenter",
      counter: "Compteur",
      reset: "Réinitial"
    }
  }
}), hl = {
  count: 0
}, je = tn(hl), Dr = (e) => `count${e}`, Bf = {
  increment(e) {
    const t = Dr(e);
    typeof je[t] != "number" && (je[t] = 0), je[t]++;
  },
  decrement(e) {
    const t = Dr(e);
    typeof je[t] != "number" && (je[t] = 0), je[t] > 0 && je[t]--;
  },
  reset(e) {
    const t = Dr(e);
    je[t] = 0;
  }
}, Xf = {
  count: (e) => je[Dr(e)] ?? 0
}, zf = () => {
  Object.assign(je, hl);
}, To = () => ({
  state: oo(je),
  mutations: Bf,
  getters: Xf,
  resetState: zf
});
var wl = /* @__PURE__ */ ((e) => (e.DEFAULT = "DEFAULT", e.DANGER = "DANGER", e))(wl || {});
const Jf = {
  DEFAULT: "enabled:hover:bg-blue-500 enabled:text-blue-700 enabled:hover:text-white enabled:border-blue-500",
  DANGER: "enabled:hover:bg-red-500 enabled:text-red-700 enabled:hover:text-white enabled:border-red-500"
}, Yn = /* @__PURE__ */ ut({
  __name: "Btn.ce",
  props: {
    variant: {
      default: "DEFAULT"
      /* DEFAULT */
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = t, n = () => {
      r("click");
    };
    return (s, o) => (Et(), Yt("button", {
      class: Zr([
        "bg-transparent font-semibold py-2 px-4 border rounded enabled:hover:border-transparent disabled:cursor-not-allowed",
        Jf[e.variant]
      ]),
      onClick: n
    }, [
      Va(s.$slots, "default")
    ], 2));
  }
}), qf = { class: "flex flex-col items-center" }, Zf = /* @__PURE__ */ ut({
  __name: "Metrics.ce",
  props: {
    namespace: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { t } = dn.global, r = To();
    return (n, s) => (Et(), Yt("div", qf, [
      Wr("span", null, Bt(ue(t)(ue(wr).COUNTER)), 1),
      Wr("span", null, Bt(ue(r).getters.count(e.namespace)), 1)
    ]));
  }
}), Qf = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.block{display:block}.flex{display:flex}.w-20{width:5rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-semibold{font-weight:600}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.enabled\\:border-blue-500:enabled{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.enabled\\:border-red-500:enabled{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.enabled\\:text-blue-700:enabled{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.enabled\\:text-red-700:enabled{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.enabled\\:hover\\:border-transparent:hover:enabled{border-color:transparent}.enabled\\:hover\\:bg-blue-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.enabled\\:hover\\:bg-red-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.enabled\\:hover\\:text-white:hover:enabled{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}@media (prefers-color-scheme: dark){.dark\\:border-gray-600{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.dark\\:bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.dark\\:focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}}', pn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, yl = /* @__PURE__ */ pn(Zf, [["styles", [Qf]]]), ed = { class: "flex justify-center mx-auto" }, td = /* @__PURE__ */ ut({
  __name: "Counter.ce",
  props: {
    namespace: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { t } = dn.global, r = To();
    return (n, s) => (Et(), Yt("div", ed, [
      _e(Yn, {
        disabled: ue(r).getters.count(e.namespace) === 0,
        onClick: s[0] || (s[0] = (o) => ue(r).mutations.decrement(e.namespace))
      }, {
        default: $r(() => [
          Gr(Bt(ue(t)(ue(wr).DECREMENT)), 1)
        ]),
        _: 1
      }, 8, ["disabled"]),
      _e(yl, {
        class: "px-4",
        namespace: e.namespace,
        count: ue(r).getters.count(e.namespace)
      }, null, 8, ["namespace", "count"]),
      _e(Yn, {
        onClick: s[1] || (s[1] = (o) => ue(r).mutations.increment(e.namespace))
      }, {
        default: $r(() => [
          Gr(Bt(ue(t)(ue(wr).INCREMENT)), 1)
        ]),
        _: 1
      })
    ]));
  }
}), rd = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.block{display:block}.flex{display:flex}.w-20{width:5rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-semibold{font-weight:600}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.enabled\\:border-blue-500:enabled{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.enabled\\:border-red-500:enabled{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.enabled\\:text-blue-700:enabled{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.enabled\\:text-red-700:enabled{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.enabled\\:hover\\:border-transparent:hover:enabled{border-color:transparent}.enabled\\:hover\\:bg-blue-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.enabled\\:hover\\:bg-red-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.enabled\\:hover\\:text-white:hover:enabled{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}@media (prefers-color-scheme: dark){.dark\\:border-gray-600{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.dark\\:bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.dark\\:focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}}', nd = /* @__PURE__ */ pn(td, [["styles", [rd]]]), od = ["id", "value"], sd = /* @__PURE__ */ ut({
  __name: "LocalePicker.ce",
  setup(e) {
    const { locale: t } = dn.global;
    return Ft(t, (r) => {
      Yf(r);
    }), (r, n) => La((Et(), Yt("select", {
      "onUpdate:modelValue": n[0] || (n[0] = (s) => ve(t) ? t.value = s : null),
      class: "w-20 mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    }, [
      (Et(!0), Yt(Ae, null, Ua(ue(ko), (s) => (Et(), Yt("option", {
        key: s,
        id: s,
        value: s,
        type: "radio",
        name: "language"
      }, Bt(s), 9, od))), 128))
    ], 512)), [
      [Gc, ue(t)]
    ]);
  }
}), id = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.block{display:block}.flex{display:flex}.w-20{width:5rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-semibold{font-weight:600}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.enabled\\:border-blue-500:enabled{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.enabled\\:border-red-500:enabled{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.enabled\\:text-blue-700:enabled{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.enabled\\:text-red-700:enabled{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.enabled\\:hover\\:border-transparent:hover:enabled{border-color:transparent}.enabled\\:hover\\:bg-blue-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.enabled\\:hover\\:bg-red-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.enabled\\:hover\\:text-white:hover:enabled{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}@media (prefers-color-scheme: dark){.dark\\:border-gray-600{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.dark\\:bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.dark\\:focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}}', ld = /* @__PURE__ */ pn(sd, [["styles", [id]]]), ad = /* @__PURE__ */ ut({
  __name: "Reset.ce",
  props: {
    namespace: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { t } = dn.global, r = To();
    return (n, s) => (Et(), Vi(Yn, {
      disabled: ue(r).getters.count(e.namespace) === 0,
      variant: ue(wl).DANGER,
      onClick: s[0] || (s[0] = (o) => ue(r).mutations.reset(e.namespace))
    }, {
      default: $r(() => [
        Gr(Bt(ue(t)(ue(wr).RESET)), 1)
      ]),
      _: 1
    }, 8, ["disabled", "variant"]));
  }
}), cd = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.block{display:block}.flex{display:flex}.w-20{width:5rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-semibold{font-weight:600}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.enabled\\:border-blue-500:enabled{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.enabled\\:border-red-500:enabled{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.enabled\\:text-blue-700:enabled{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.enabled\\:text-red-700:enabled{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.enabled\\:hover\\:border-transparent:hover:enabled{border-color:transparent}.enabled\\:hover\\:bg-blue-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.enabled\\:hover\\:bg-red-500:hover:enabled{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.enabled\\:hover\\:text-white:hover:enabled{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}@media (prefers-color-scheme: dark){.dark\\:border-gray-600{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.dark\\:bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\\:focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.dark\\:focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}}', ud = /* @__PURE__ */ pn(ad, [["styles", [cd]]]), fd = (e) => {
  for (const t in e) {
    const r = /* @__PURE__ */ Hc(e[t]);
    customElements.define(t, r);
  }
};
fd({
  "counter-widget": nd,
  "locale-picker-widget": ld,
  "metrics-widget": yl,
  "reset-widget": ud
});
export {
  fd as defineCustomElements
};

/*!
 * Fotorama 4.4.3 | http://fotorama.io/license/
 */
!function (a, b, c, d, e) {
  "use strict";
  function f (a) {
    var b = "bez_" + d.makeArray(arguments).join("_").replace(".", "p");
    if ("function" != typeof d.easing[b]) {
      var c = function (a, b) {
        var c = [null, null], d = [null, null], e = [null, null], f = function (f, g) {
          return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g]))
        }, g = function (a) {
          return e[0] + a * (2 * d[0] + 3 * c[0] * a)
        }, h = function (a) {
          for (var b, c = a, d = 0; ++d < 14 && (b = f(c, 0) - a, !(Math.abs(b) < .001));)c -= b / g(c);
          return c
        };
        return function (a) {
          return f(h(a), 1)
        }
      };
      d.easing[b] = function (b, d, e, f, g) {
        return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e
      }
    }
    return b
  }

  function g () {
  }

  function h (a, b, c) {
    return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a))
  }

  function i (a) {
    return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4]
  }

  function j (a) {
    return xc ? +i(a.css("transform")) : +a.css("left").replace("px", "")
  }

  function k (a, b) {
    var c = {};
    return xc ? c.transform = "translate3d(" + (a + (b ? .001 : 0)) + "px,0,0)" : c.left = a, c
  }

  function l (a) {
    return{"transition-duration": a + "ms"}
  }

  function m (a, b) {
    return+String(a).replace(b || "px", "") || e
  }

  function n (a) {
    return/%$/.test(a) && m(a, "%")
  }

  function o (a) {
    return(!!m(a) || !!m(a, "%")) && a
  }

  function p (a, b, c, d) {
    return(a - (d || 0)) * (b + (c || 0))
  }

  function q (a, b, c, d) {
    return-Math.round(a / (b + (c || 0)) - (d || 0))
  }

  function r (a) {
    var b = a.data();
    if (!b.tEnd) {
      var c = a[0], d = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", msTransition: "MSTransitionEnd", transition: "transitionend"};
      c.addEventListener(d[ic.prefixed("transition")], function (a) {
        b.tProp && a.propertyName.match(b.tProp) && b.onEndFn()
      }, !1), b.tEnd = !0
    }
  }

  function s (a, b, c, d) {
    var e, f = a.data();
    f && (f.onEndFn = function () {
      e || (e = !0, clearTimeout(f.tT), c())
    }, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function () {
      f.onEndFn()
    }, 1.5 * d), r(a))
  }

  function t (a, b, c) {
    if (a.length) {
      var d = a.data();
      xc ? (a.css(l(0)), d.onEndFn = g, clearTimeout(d.tT)) : a.stop();
      var e = u(b, function () {
        return j(a)
      });
      return a.css(k(e, c)), e
    }
  }

  function u () {
    for (var a, b = 0, c = arguments.length; c > b && (a = b ? arguments[b]() : arguments[b], "number" != typeof a); b++);
    return a
  }

  function v (a, b) {
    return Math.round(a + (b - a) / 1.5)
  }

  function w () {
    return w.p = w.p || ("https://" === c.protocol ? "https://" : "http://"), w.p
  }

  function x (a) {
    var c = b.createElement("a");
    return c.href = a, c
  }

  function y (a, b) {
    if ("string" != typeof a)return a;
    a = x(a);
    var c, d;
    if (a.host.match(/youtube\.com/) && a.search) {
      if (c = a.search.split("v=")[1]) {
        var e = c.indexOf("&");
        -1 !== e && (c = c.substring(0, e)), d = "youtube"
      }
    } else a.host.match(/youtube\.com|youtu\.be/) ? (c = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), d = "youtube") : a.host.match(/vimeo\.com/) && (d = "vimeo", c = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
    return c && d || !b || (c = a.href, d = "custom"), c ? {id: c, type: d, s: a.search.replace(/^\?/, "")} : !1
  }

  function z (a, b, c) {
    var e, f, g = a.video;
    return"youtube" === g.type ? (f = w() + "img.youtube.com/vi/" + g.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === g.type ? d.ajax({url: w() + "vimeo.com/api/v2/video/" + g.id + ".json", dataType: "jsonp", success: function (d) {
      a.thumbsReady = !0, A(b, {img: d[0].thumbnail_large, thumb: d[0].thumbnail_small}, a.i, c)
    }}) : a.thumbsReady = !0, {img: e, thumb: f}
  }

  function A (a, b, c, e) {
    for (var f = 0, g = a.length; g > f; f++) {
      var h = a[f];
      if (h.i === c && h.thumbsReady) {
        var i = {videoReady: !0};
        i[Nc] = i[Pc] = i[Oc] = !1, e.splice(f, 1, d.extend({}, h, i, b));
        break
      }
    }
  }

  function B (a) {
    function b (a, b, e) {
      var f = a.children("img").eq(0), g = a.attr("href"), h = a.attr("src"), i = f.attr("src"), j = b.video, k = e ? y(g, j === !0) : !1;
      k ? g = !1 : k = j, c(a, f, d.extend(b, {video: k, img: b.img || g || h || i, thumb: b.thumb || i || h || g}))
    }

    function c (a, b, c) {
      var e = c.thumb && c.img !== c.thumb, f = m(c.width || a.attr("width")), g = m(c.height || a.attr("height"));
      d.extend(c, {width: f, height: g, thumbratio: Q(c.thumbratio || m(c.thumbwidth || b && b.attr("width") || e || f) / m(c.thumbheight || b && b.attr("height") || e || g))})
    }

    var e = [];
    return a.children().each(function () {
      var a = d(this), f = P(d.extend(a.data(), {id: a.attr("id")}));
      if (a.is("a, img"))b(a, f, !0); else {
        if (a.is(":empty"))return;
        c(a, null, d.extend(f, {html: this, _html: a.html()}))
      }
      e.push(f)
    }), e
  }

  function C (a) {
    return 0 === a.offsetWidth && 0 === a.offsetHeight
  }

  function D (a) {
    return!d.contains(b.documentElement, a)
  }

  function E (a, b, c) {
    a() ? b() : setTimeout(function () {
      E(a, b)
    }, c || 100)
  }

  function F (a) {
    c.replace(c.protocol + "//" + c.host + c.pathname.replace(/^\/?/, "/") + c.search + "#" + a)
  }

  function G (a, b, c) {
    var d = a.data(), e = d.measures;
    if (e && (!d.l || d.l.W !== e.width || d.l.H !== e.height || d.l.r !== e.ratio || d.l.w !== b.w || d.l.h !== b.h || d.l.m !== c)) {
      var f = e.width, g = e.height, i = b.w / b.h, j = e.ratio >= i, k = "scaledown" === c, l = "contain" === c, m = "cover" === c;
      j && (k || l) || !j && m ? (f = h(b.w, 0, k ? f : 1 / 0), g = f / e.ratio) : (j && m || !j && (k || l)) && (g = h(b.h, 0, k ? g : 1 / 0), f = g * e.ratio), a.css({width: Math.ceil(f), height: Math.ceil(g), marginLeft: Math.floor(-f / 2), marginTop: Math.floor(-g / 2)}), d.l = {W: e.width, H: e.height, r: e.ratio, w: b.w, h: b.h, m: c}
    }
    return!0
  }

  function H (a, b) {
    var c = a[0];
    c.styleSheet ? c.styleSheet.cssText = b : a.html(b)
  }

  function I (a, b, c) {
    return b === c ? !1 : b >= a ? "left" : a >= c ? "right" : "left right"
  }

  function J (a, b, c, d) {
    if (!c)return!1;
    if (!isNaN(a))return a - (d ? 0 : 1);
    for (var e, f = 0, g = b.length; g > f; f++) {
      var h = b[f];
      if (h.id === a) {
        e = f;
        break
      }
    }
    return e
  }

  function K (a, b, c) {
    c = c || {}, a.each(function () {
      var a, e = d(this), f = e.data();
      f.clickOn || (f.clickOn = !0, d.extend(W(e, {onStart: function (b) {
        a = b, (c.onStart || g).call(this, b)
      }, onMove: c.onMove || g, onEnd: function (d) {
        d.moved || c.tail.checked || b.call(this, a)
      }}), c.tail))
    })
  }

  function L (a, b) {
    return'<div class="' + a + '">' + (b || "") + "</div>"
  }

  function M (a) {
    for (var b = a.length; b;) {
      var c = Math.floor(Math.random() * b--), d = a[b];
      a[b] = a[c], a[c] = d
    }
    return a
  }

  function N (a) {
    return"[object Array]" == Object.prototype.toString.call(a) && d.map(a, function (a) {
      return d.extend({}, a)
    })
  }

  function O (a, b) {
    tc.scrollLeft(a).scrollTop(b)
  }

  function P (a) {
    if (a) {
      var b = {};
      return d.each(a, function (a, c) {
        b[a.toLowerCase()] = c
      }), b
    }
  }

  function Q (a) {
    if (a) {
      var b = +a;
      return isNaN(b) ? (b = a.split("/"), +b[0] / +b[1] || e) : b
    }
  }

  function R (a, b) {
    a.preventDefault(), b && a.stopPropagation()
  }

  function S (a) {
    return a ? ">" : "<"
  }

  function T (a, b) {
    var c = Math.round(b.pos), e = b.onEnd || g;
    "undefined" != typeof b.overPos && b.overPos !== b.pos && (c = b.overPos, e = function () {
      T(a, d.extend({}, b, {overPos: b.pos, time: Math.max(Gc, b.time / 2)}))
    });
    var f = d.extend(k(c, b._001), {width: b.width});
    xc ? (a.css(d.extend(l(b.time), f)), b.time > 10 ? s(a, "transform", e, b.time) : e()) : a.stop().animate(f, b.time, Qc, e)
  }

  function U (a, b, c, e, f, h) {
    var i = "undefined" != typeof h;
    if (i || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) {
      a = a || d(a), b = b || d(b);
      var j = a[0], k = b[0], l = "crossfade" === e.method, m = function () {
        if (!m.done) {
          m.done = !0;
          var a = (i || f.shift()) && f.shift();
          a && U.apply(this, a), (e.onEnd || g)(!!a)
        }
      }, n = e.time / (h || 1);
      c.not(a.addClass(Hb).removeClass(Gb)).not(b.addClass(Gb).removeClass(Hb)).removeClass(Hb + " " + Gb), a.stop(), b.stop(), l && k && a.fadeTo(0, 0), a.fadeTo(l ? n : 1, 1, l && m), b.fadeTo(n, 0, m), j && l || k || m()
    }
  }

  function V (a) {
    var b = (a.touches || [])[0] || a;
    a._x = b.pageX, a._y = b.clientY
  }

  function W (c, e) {
    function f (a) {
      return n = d(a.target), t.checked = q = r = !1, l || t.flow || a.touches && a.touches.length > 1 || a.which > 1 || pc && pc.type !== a.type && rc || (q = e.select && n.is(e.select, s)) ? q : (p = "touchstart" === a.type, r = n.is("a, a *", s), V(a), m = pc = a, qc = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), o = t.control, (e.onStart || g).call(s, a, {control: o, $target: n}), l = t.flow = !0, (!p || t.go) && R(a), void 0)
    }

    function h (a) {
      if (a.touches && a.touches.length > 1 || Dc && !a.isPrimary || qc !== a.type || !l)return l && i(), void 0;
      V(a);
      var b = Math.abs(a._x - m._x), c = Math.abs(a._y - m._y), d = b - c, f = (t.go || t.x || d >= 0) && !t.noSwipe, h = 0 > d;
      p && !t.checked ? (l = f) && R(a) : (R(a), (e.onMove || g).call(s, a, {touch: p})), t.checked = t.checked || f || h
    }

    function i (a) {
      var b = l;
      t.control = l = !1, b && (t.flow = !1), !b || r && !t.checked || (a && R(a), rc = !0, clearTimeout(sc), sc = setTimeout(function () {
        rc = !1
      }, 1e3), (e.onEnd || g).call(s, {moved: t.checked, $target: n, control: o, touch: p, startEvent: m, aborted: !a || "MSPointerCancel" === a.type}))
    }

    function j () {
      t.flow || setTimeout(function () {
        t.flow = !0
      }, 10)
    }

    function k () {
      t.flow && setTimeout(function () {
        t.flow = !1
      }, Fc)
    }

    var l, m, n, o, p, q, r, s = c[0], t = {};
    return Dc ? (s[Cc]("MSPointerDown", f, !1), b[Cc]("MSPointerMove", h, !1), b[Cc]("MSPointerCancel", i, !1), b[Cc]("MSPointerUp", i, !1)) : (s[Cc] && (s[Cc]("touchstart", f, !1), s[Cc]("touchmove", h, !1), s[Cc]("touchend", i, !1), b[Cc]("touchstart", j, !1), b[Cc]("touchend", k, !1), b[Cc]("touchcancel", k, !1), a[Cc]("scroll", k, !1)), c.on("mousedown", f), uc.on("mousemove", h).on("mouseup", i)), c.on("click", "a", function (a) {
      t.checked && R(a)
    }), t
  }

  function X (a, b) {
    function c (c) {
      j = l = c._x, q = d.now(), p = [
        [q, j]
      ], m = n = C.noMove ? 0 : t(a, b.getPos && b.getPos(), b._001), (b.onStart || g).call(A, c)
    }

    function e (a, b) {
      s = B.min, u = B.max, w = B.snap, x = a.altKey, z = !1, y = b.control, y || c(a)
    }

    function f (e, f) {
      y && (y = !1, c(e)), C.noSwipe || (l = e._x, p.push([d.now(), l]), n = m - (j - l), o = I(n, s, u), s >= n ? n = v(n, s) : n >= u && (n = v(n, u)), C.noMove || (a.css(k(n, b._001)), z || (z = !0, f.touch || Dc || a.addClass(Wb)), (b.onMove || g).call(A, e, {pos: n, edge: o})))
    }

    function i (c) {
      if (!y) {
        c.touch || Dc || a.removeClass(Wb), r = (new Date).getTime();
        for (var e, f, i, j, k, o, q, t, v, z = r - Fc, B = null, C = Gc, D = b.friction, E = p.length - 1; E >= 0; E--) {
          if (e = p[E][0], f = Math.abs(e - z), null === B || i > f)B = e, j = p[E][1]; else if (B === z || f > i)break;
          i = f
        }
        q = h(n, s, u);
        var F = j - l, G = F >= 0, H = r - B, I = H > Fc, J = !I && n !== m && q === n;
        w && (q = h(Math[J ? G ? "floor" : "ceil" : "round"](n / w) * w, s, u), s = u = q), J && (w || q === n) && (v = -(F / H), C *= h(Math.abs(v), b.timeLow, b.timeHigh), k = Math.round(n + v * C / D), w || (q = k), (!G && k > u || G && s > k) && (o = G ? s : u, t = k - o, w || (q = o), t = h(q + .03 * t, o - 50, o + 50), C = Math.abs((n - t) / (v / D)))), C *= x ? 10 : 1, (b.onEnd || g).call(A, d.extend(c, {pos: n, newPos: q, overPos: t, time: C, moved: I ? w : Math.abs(n - m) > (w ? 0 : 3)}))
      }
    }

    var j, l, m, n, o, p, q, r, s, u, w, x, y, z, A = a[0], B = a.data(), C = {};
    return C = d.extend(W(b.$wrap, {onStart: e, onMove: f, onEnd: i, select: b.select, control: b.control}), C)
  }

  function Y (a, b) {
    var c, e, f, h = a[0], i = {prevent: {}};
    return h[Cc] && h[Cc](Ec, function (a) {
      var h = a.wheelDeltaY || -1 * a.deltaY || 0, j = a.wheelDeltaX || -1 * a.deltaX || 0, k = Math.abs(j) > Math.abs(h), l = S(0 > j), m = e === l, n = d.now(), o = Fc > n - f;
      e = l, f = n, k && i.ok && (!i.prevent[l] || c) && (R(a, !0), c && m && o || (b.shift && (c = !0, clearTimeout(i.t), i.t = setTimeout(function () {
        c = !1
      }, Hc)), (b.onEnd || g)(a, b.shift ? l : j)))
    }, !1), i
  }

  function Z () {
    d.each(d.Fotorama.instances, function (a, b) {
      b.index = a
    })
  }

  function $ (a) {
    d.Fotorama.instances.push(a), Z()
  }

  function _ (a) {
    d.Fotorama.instances.splice(a.index, 1), Z()
  }

  var ab = "fotorama", bb = "fullscreen", cb = ab + "__wrap", db = cb + "--css3", eb = cb + "--video", fb = cb + "--fade", gb = cb + "--slide", hb = cb + "--no-controls", ib = cb + "--no-shadows", jb = cb + "--pan-y", kb = cb + "--rtl", lb = ab + "__stage", mb = lb + "__frame", nb = mb + "--video", ob = lb + "__shaft", pb = lb + "--only-active", qb = ab + "__grab", rb = ab + "__pointer", sb = ab + "__arr", tb = sb + "--disabled", ub = sb + "--prev", vb = sb + "--next", wb = sb + "__arr", xb = ab + "__nav", yb = xb + "-wrap", zb = xb + "__shaft", Ab = xb + "--dots", Bb = xb + "--thumbs", Cb = xb + "__frame", Db = Cb + "--dot", Eb = Cb + "--thumb", Fb = ab + "__fade", Gb = Fb + "-front", Hb = Fb + "-rear", Ib = ab + "__shadow", Jb = Ib + "s", Kb = Jb + "--left", Lb = Jb + "--right", Mb = ab + "__active", Nb = ab + "__select", Ob = ab + "--hidden", Pb = ab + "--fullscreen", Qb = ab + "__fullscreen-icon", Rb = ab + "__error", Sb = ab + "__loading", Tb = ab + "__loaded", Ub = Tb + "--full", Vb = Tb + "--img", Wb = ab + "__grabbing", Xb = ab + "__img", Yb = Xb + "--full", Zb = ab + "__dot", $b = ab + "__thumb", _b = $b + "-border", ac = ab + "__html", bc = ab + "__video", cc = bc + "-play", dc = bc + "-close", ec = ab + "__caption", fc = ab + "__oooo", gc = d && d.fn.jquery.split(".");
  if (!gc || gc[0] < 1 || 1 == gc[0] && gc[1] < 8)return a.console && console.error("Fotorama requires jQuery 1.8 or later and will not run without it."), void 0;
  var hc = {}, ic = function (a, b, c) {
    function d (a) {
      r.cssText = a
    }

    function e (a, b) {
      return typeof a === b
    }

    function f (a, b) {
      return!!~("" + a).indexOf(b)
    }

    function g (a, b) {
      for (var d in a) {
        var e = a[d];
        if (!f(e, "-") && r[e] !== c)return"pfx" == b ? e : !0
      }
      return!1
    }

    function h (a, b, d) {
      for (var f in a) {
        var g = b[a[f]];
        if (g !== c)return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
      }
      return!1
    }

    function i (a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1), f = (a + " " + u.join(d + " ") + d).split(" ");
      return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
    }

    var j, k, l, m = "2.6.2", n = {}, o = b.documentElement, p = "modernizr", q = b.createElement(p), r = q.style, s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), t = "Webkit Moz O ms", u = t.split(" "), v = t.toLowerCase().split(" "), w = {}, x = [], y = x.slice, z = function (a, c, d, e) {
      var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
      if (parseInt(d, 10))for (; d--;)h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h);
      return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !!g
    }, A = {}.hasOwnProperty;
    l = e(A, "undefined") || e(A.call, "undefined") ? function (a, b) {
      return b in a && e(a.constructor.prototype[b], "undefined")
    } : function (a, b) {
      return A.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function (a) {
      var b = this;
      if ("function" != typeof b)throw new TypeError;
      var c = y.call(arguments, 1), d = function () {
        if (this instanceof d) {
          var e = function () {
          };
          e.prototype = b.prototype;
          var f = new e, g = b.apply(f, c.concat(y.call(arguments)));
          return Object(g) === g ? g : f
        }
        return b.apply(a, c.concat(y.call(arguments)))
      };
      return d
    }), w.csstransforms3d = function () {
      var a = !!i("perspective");
      return a
    };
    for (var B in w)l(w, B) && (k = B.toLowerCase(), n[k] = w[B](), x.push((n[k] ? "" : "no-") + k));
    return n.addTest = function (a, b) {
      if ("object" == typeof a)for (var d in a)l(a, d) && n.addTest(d, a[d]); else {
        if (a = a.toLowerCase(), n[a] !== c)return n;
        b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b
      }
      return n
    }, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function (a) {
      return g([a])
    }, n.testAllProps = i, n.testStyles = z, n.prefixed = function (a, b, c) {
      return b ? i(a, b, c) : i(a, "pfx")
    }, n
  }(a, b), jc = {ok: !1, is: function () {
    return!1
  }, request: function () {
  }, cancel: function () {
  }, event: "", prefix: ""}, kc = "webkit moz o ms khtml".split(" ");
  if ("undefined" != typeof b.cancelFullScreen)jc.ok = !0; else for (var lc = 0, mc = kc.length; mc > lc; lc++)if (jc.prefix = kc[lc], "undefined" != typeof b[jc.prefix + "CancelFullScreen"]) {
    jc.ok = !0;
    break
  }
  jc.ok && (jc.event = jc.prefix + "fullscreenchange", jc.is = function () {
    switch (this.prefix) {
      case"":
        return b.fullScreen;
      case"webkit":
        return b.webkitIsFullScreen;
      default:
        return b[this.prefix + "FullScreen"]
    }
  }, jc.request = function (a) {
    return"" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
  }, jc.cancel = function () {
    return"" === this.prefix ? b.cancelFullScreen() : b[this.prefix + "CancelFullScreen"]()
  });
  var nc, oc, pc, qc, rc, sc, tc = d(a), uc = d(b), vc = "quirks" === c.hash.replace("#", ""), wc = ic.csstransforms3d, xc = wc && !vc, yc = wc || "CSS1Compat" === b.compatMode, zc = jc.ok, Ac = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i), Bc = !xc || Ac, Cc = "addEventListener", Dc = a.navigator.msPointerEnabled, Ec = "onwheel"in b.createElement("div") ? "wheel" : b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll", Fc = 250, Gc = 300, Hc = 1400, Ic = 5e3, Jc = 2, Kc = 64, Lc = 500, Mc = 333, Nc = "$stageFrame", Oc = "$navDotFrame", Pc = "$navThumbFrame", Qc = f([.1, 0, .25, 1]);
  jQuery.Fotorama = function (a, f) {
    function i () {
      d.each(id, function (a, b) {
        if (!b.i) {
          b.i = Ud++;
          var c = y(b.video, !0);
          if (c) {
            var d = {};
            b.video = c, b.img || b.thumb ? b.thumbsReady = !0 : d = z(b, id, Qd), A(id, {img: d.img, thumb: d.thumb}, b.i, Qd)
          }
        }
      })
    }

    function j (a) {
      var b = "keydown." + ab, c = "keydown." + ab + Rd, d = "resize." + ab + Rd;
      a ? (uc.on(c, function (a) {
        ld && 27 === a.keyCode ? (R(a), _c(ld, !0, !0)) : (Qd.fullScreen || f.keyboard && !Qd.index) && (27 === a.keyCode ? (R(a), Qd.cancelFullScreen()) : 39 === a.keyCode || 40 === a.keyCode && Qd.fullScreen ? (R(a), Qd.show({index: ">", slow: a.altKey, direct: !0})) : (37 === a.keyCode || 38 === a.keyCode && Qd.fullScreen) && (R(a), Qd.show({index: "<", slow: a.altKey, direct: !0})))
      }), Qd.index || uc.off(b).on(b, "textarea, input, select", function (a) {
        !oc.hasClass(bb) && a.stopPropagation()
      }), tc.on(d, Qd.resize)) : (uc.off(c), tc.off(d))
    }

    function r (b) {
      b !== r.f && (b ? (a.html("").addClass(ab + " " + Sd).append(Yd).before(Wd).before(Xd), $(Qd)) : (Yd.detach(), Wd.detach(), Xd.detach(), a.html(Vd.urtext).removeClass(Sd), _(Qd)), j(b), r.f = b)
    }

    function s () {
      id = Qd.data = id || N(f.data) || B(a), jd = Qd.size = id.length, !hd.ok && f.shuffle && M(id), i(), qe = W(qe), jd && r(!0)
    }

    function v () {
      var a = 2 > jd || ld;
      te.noMove = a || Ad, te.noSwipe = a || !f.swipe, $d.toggleClass(qb, !te.noMove && !te.noSwipe), Dc && Yd.toggleClass(jb, !te.noSwipe)
    }

    function w (a) {
      a === !0 && (a = ""), f.autoplay = Math.max(+a || Ic, 1.5 * Dd)
    }

    function x (a) {
      return a ? "add" : "remove"
    }

    function C () {
      Qd.options = f = P(f), Ad = "crossfade" === f.transition || "dissolve" === f.transition, ud = f.loop && (jd > 2 || Ad), Dd = +f.transitionduration || Gc, Fd = "rtl" === f.direction;
      var a = {add: [], remove: []};
      jd > 1 ? (vd = f.nav, xd = "top" === f.navposition, a.remove.push(Nb), ce.toggle(f.arrows)) : (vd = !1, ce.hide()), wc(), Ac(), f.autoplay && w(f.autoplay), Bd = m(f.thumbwidth) || Kc, Cd = m(f.thumbheight) || Kc, ue.ok = we.ok = f.trackpad && !Bc, v(), Tc(f, !0), wd = "thumbs" === vd, wd ? (lc(jd, "navThumb"), kd = he, Pd = Pc, H(Wd, d.Fotorama.jst.style({w: Bd, h: Cd, b: f.thumbborderwidth, m: f.thumbmargin, s: Rd, q: !yc})), ee.addClass(Bb).removeClass(Ab)) : "dots" === vd ? (lc(jd, "navDot"), kd = ge, Pd = Oc, ee.addClass(Ab).removeClass(Bb)) : (vd = !1, ee.removeClass(Bb + " " + Ab)), vd && (xd ? de.insertBefore(Zd) : de.insertAfter(Zd), rc.nav = !1, rc(kd, fe, "nav")), yd = f.allowfullscreen, yd ? (le.appendTo(Zd), zd = zc && "native" === yd) : (le.detach(), zd = !1), a[x(Ad)].push(fb), a[x(!Ad)].push(gb), a[x(Fd)].push(kb), Ed = f.shadows && !Bc, a[x(!Ed)].push(ib), ic(), Yd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")), re = d.extend({}, f)
    }

    function V (a) {
      return 0 > a ? (jd + a % jd) % jd : a >= jd ? a % jd : a
    }

    function W (a) {
      return h(a, 0, jd - 1)
    }

    function Z (a) {
      return ud ? V(a) : W(a)
    }

    function Fb (a) {
      return a > 0 || ud ? a - 1 : !1
    }

    function Gb (a) {
      return jd - 1 > a || ud ? a + 1 : !1
    }

    function Hb () {
      ie.min = ud ? -1 / 0 : -p(jd - 1, se.w, f.margin, od), ie.max = ud ? 1 / 0 : -p(0, se.w, f.margin, od), ie.snap = se.w + f.margin
    }

    function Ib () {
      je.min = Math.min(0, se.W - fe.width()), je.max = 0, fe.toggleClass(qb, !(ve.noMove = je.min === je.max))
    }

    function Wb (a, b, c) {
      if ("number" == typeof a) {
        a = new Array(a);
        var e = !0
      }
      return d.each(a, function (a, d) {
        if (e && (d = a), "number" == typeof d) {
          var f = id[V(d)];
          if (f) {
            var g = "$" + b + "Frame", h = f[g];
            c.call(this, a, d, f, h, g, h && h.data())
          }
        }
      })
    }

    function bc (a, b, c, d) {
      (!Gd || "*" === Gd && d === td) && (a = o(f.width) || o(a) || Lc, b = o(f.height) || o(b) || Mc, Qd.resize({width: a, ratio: f.ratio || c || a / b}, 0, d === td ? !0 : "*"))
    }

    function gc (a, b, c, e, g) {
      Wb(a, b, function (a, h, i, j, k, l) {
        function m (a) {
          var b = V(h);
          Uc(a, {index: b, src: v, frame: id[b]})
        }

        function n () {
          s.remove(), d.Fotorama.cache[v] = "error", i.html && "stage" === b || !w || w === v ? (!v || i.html || q ? "stage" === b && (j.trigger("f:load").removeClass(Sb + " " + Rb).addClass(Tb), m("load"), bc()) : (j.trigger("f:error").removeClass(Sb).addClass(Rb), m("error")), l.state = "error", !(jd > 1) || i.html || i.deleted || i.video || q || (i.deleted = !0, Qd.splice(h, 1))) : (i[u] = v = w, gc([h], b, c, e, !0))
        }

        function o () {
          var a = r.width, g = r.height, k = a / g;
          t.measures = {width: a, height: g, ratio: k}, bc(a, g, k, h), s.off("load error").addClass(Xb + (q ? " " + Yb : "")).prependTo(j), G(s, c || se, e || i.fit || f.fit), d.Fotorama.cache[v] = l.state = "loaded", setTimeout(function () {
            j.trigger("f:load").removeClass(Sb + " " + Rb).addClass(Tb + " " + (q ? Ub : Vb)), "stage" === b && m("load")
          }, 5)
        }

        function p () {
          var a = 10;
          E(function () {
            return!Nd || !a-- && !Bc
          }, function () {
            o()
          })
        }

        if (j) {
          var q = Qd.fullScreen && i.full && i.full !== i.img && !l.$full && "stage" === b;
          if (!l.$img || g || q) {
            var r = new Image, s = d(r), t = s.data();
            l[q ? "$full" : "$img"] = s;
            var u = "stage" === b ? q ? "full" : "img" : "thumb", v = i[u], w = q ? null : i["stage" === b ? "thumb" : "img"];
            if ("navThumb" === b && (j = l.$wrap), !v)return n(), void 0;
            d.Fotorama.cache[v] ? function x () {
              "error" === d.Fotorama.cache[v] ? n() : "loaded" === d.Fotorama.cache[v] ? setTimeout(p, 0) : setTimeout(x, 100)
            }() : (d.Fotorama.cache[v] = "*", s.on("load", p).on("error", n)), l.state = "", r.src = v
          }
        }
      })
    }

    function hc (a) {
      ic(!0), De.appendTo(a), Ce = 0, Ee(), Be = setInterval(Ee, 200)
    }

    function ic (a) {
      a || De.detach(), clearInterval(Be)
    }

    function kc () {
      var a = Qd.activeFrame[Nc];
      a && !a.data().state && (hc(a), a.on("f:load f:error", function () {
        a.off("f:load f:error"), ic()
      }))
    }

    function lc (a, b) {
      Wb(a, b, function (a, c, e, g, h, i) {
        g || (g = e[h] = Yd[h].clone(), i = g.data(), i.data = e, "stage" === b ? (e.html && d('<div class="' + ac + '"></div>').append(e._html ? d(e.html).removeAttr("id").html(e._html) : e.html).appendTo(g), f.captions && e.caption && d('<div class="' + ec + '"></div>').append(e.caption).appendTo(g), e.video && g.addClass(nb).append(ne.clone()), _d = _d.add(g)) : "navDot" === b ? ge = ge.add(g) : "navThumb" === b && (i.$wrap = g.children(":first"), he = he.add(g), e.video && g.append(ne.clone())))
      })
    }

    function mc (a, b, c) {
      return a && a.length && G(a, b, c)
    }

    function pc (a) {
      Wb(a, "stage", function (a, b, c, e, g, h) {
        if (e) {
          ye[Nc][V(b)] = e.css(d.extend({left: Ad ? 0 : p(b, se.w, f.margin, od)}, Ad && l(0))), D(e[0]) && (e.appendTo($d), _c(c.$video));
          var i = c.fit || f.fit;
          mc(h.$img, se, i), mc(h.$full, se, i)
        }
      })
    }

    function qc (a, b) {
      if ("thumbs" === vd && !isNaN(a)) {
        var c = -a, e = -a + se.w;
        he.each(function () {
          var a = d(this), f = a.data(), g = f.eq, h = {h: Cd}, i = "cover";
          h.w = f.w, f.l + f.w < c || f.l > e || mc(f.$img, h, i) || b && gc([g], "navThumb", h, i)
        })
      }
    }

    function rc (a, b, c) {
      if (!rc[c]) {
        var e = "nav" === c && wd, g = 0;
        b.append(a.filter(function () {
          for (var a, b = d(this), c = b.data(), e = 0, f = id.length; f > e; e++)if (c.data === id[e]) {
            a = !0, c.eq = e;
            break
          }
          return a || b.remove() && !1
        }).sort(function (a, b) {
          return d(a).data().eq - d(b).data().eq
        }).each(function () {
          if (e) {
            var a = d(this), b = a.data(), c = Math.round(Cd * b.data.thumbratio) || Bd;
            b.l = g, b.w = c, a.css({width: c}), g += c + f.thumbmargin
          }
        })), rc[c] = !0
      }
    }

    function sc (a) {
      return a - ze > se.w / 3
    }

    function vc (a) {
      return!(ud || qe + a && qe - jd + a || ld)
    }

    function wc () {
      ae.toggleClass(tb, vc(0)), be.toggleClass(tb, vc(1))
    }

    function Ac () {
      ue.ok && (ue.prevent = {"<": vc(0), ">": vc(1)})
    }

    function Cc (a) {
      var b, c, d = a.data();
      return wd ? (b = d.l, c = d.w) : (b = a.position().left, c = a.width()), {c: b + c / 2, min: -b + 10 * f.thumbmargin, max: -b + se.w - c - 10 * f.thumbmargin}
    }

    function Ec (a) {
      var b = Qd.activeFrame[Pd].data();
      T(ke, {time: .9 * a, pos: b.l, width: b.w - 2 * f.thumbborderwidth})
    }

    function Hc (a) {
      var b = id[a.guessIndex][Pd];
      if (b) {
        var c = je.min !== je.max, d = c && Cc(Qd.activeFrame[Pd]), e = c && (a.keep && Hc.l ? Hc.l : h((a.coo || se.w / 2) - Cc(b).c, d.min, d.max)), f = c && h(e, je.min, je.max), g = .9 * a.time;
        T(fe, {time: g, pos: f || 0, onEnd: function () {
          qc(f, !0)
        }}), g && qc(f), $c(ee, I(f, je.min, je.max)), Hc.l = e
      }
    }

    function Jc () {
      Qc(Pd), xe[Pd].push(Qd.activeFrame[Pd].addClass(Mb))
    }

    function Qc (a) {
      for (var b = xe[a]; b.length;)b.shift().removeClass(Mb)
    }

    function Rc (a) {
      var b = ye[a];
      d.each(nd, function (a, c) {
        delete b[V(c)]
      }), d.each(b, function (a, c) {
        delete b[a], c.detach()
      })
    }

    function Sc (a) {
      od = pd = qe;
      var b = Qd.activeFrame, c = b[Nc];
      c && (Qc(Nc), xe[Nc].push(c.addClass(Mb)), a || Qd.show.onEnd(!0), t($d, 0, !0), Rc(Nc), pc(nd), Hb(), Ib())
    }

    function Tc (a, b) {
      a && d.extend(se, {width: a.width || se.width, height: a.height, minwidth: a.minwidth, maxwidth: a.maxwidth, minheight: a.minheight, maxheight: a.maxheight, ratio: Q(a.ratio)}) && !b && d.extend(f, {width: se.width, height: se.height, minwidth: se.minwidth, maxwidth: se.maxwidth, minheight: se.minheight, maxheight: se.maxheight, ratio: se.ratio})
    }

    function Uc (b, c, d) {
      a.trigger(ab + ":" + b, [Qd, c]), Qd.prevent[b] ? delete Qd.prevent[b] : (d || g)()
    }

    function Vc () {
      clearTimeout(Wc.t), Nd = 1, f.stopautoplayontouch ? Qd.stopAutoplay() : Kd = !0
    }

    function Wc () {
      Wc.t = setTimeout(function () {
        Nd = 0
      }, Gc + Fc)
    }

    function Xc () {
      Kd = !(!ld && !Ld)
    }

    function Yc () {
      if (clearTimeout(Yc.t), !f.autoplay || Kd)return Qd.autoplay && (Qd.autoplay = !1, Uc("stopautoplay")), void 0;
      Qd.autoplay || (Qd.autoplay = !0, Uc("startautoplay"));
      var a = qe, b = Qd.activeFrame[Nc].data();
      E(function () {
        return b.state || a !== qe
      }, function () {
        Yc.t = setTimeout(function () {
          Kd || a !== qe || Qd.show(ud ? S(!Fd) : V(qe + (Fd ? -1 : 1)))
        }, f.autoplay)
      })
    }

    function Zc () {
      Qd.fullScreen && (Qd.fullScreen = !1, zc && jc.cancel(Td), oc.removeClass(bb), nc.removeClass(bb), a.removeClass(Pb).insertAfter(Xd), se = d.extend({}, Md), _c(ld, !0, !0), dd("x", !1), Qd.resize(), gc(nd, "stage"), O(Id, Hd), Uc("fullscreenexit"))
    }

    function $c (a, b) {
      Ed && (a.removeClass(Kb + " " + Lb), b && !ld && a.addClass(b.replace(/^|\s/g, " " + Jb + "--")))
    }

    function _c (a, b, c) {
      b && (Yd.removeClass(eb), ld = !1, v()), a && a !== ld && (a.remove(), Uc("unloadvideo")), c && (Xc(), Yc())
    }

    function ad (a) {
      Yd.toggleClass(hb, a)
    }

    function bd (a) {
      if (!te.flow) {
        var b = a ? a.pageX : bd.x, c = b && !vc(sc(b)) && f.click;
        bd.p === c || !Ad && f.swipe || !Zd.toggleClass(rb, c) || (bd.p = c, bd.x = b)
      }
    }

    function cd (a, b) {
      var c = a.target, g = d(c);
      g.hasClass(cc) ? Qd.playVideo() : c === me ? Qd[(Qd.fullScreen ? "cancel" : "request") + "FullScreen"]() : ld ? c === pe && _c(ld, !0, !0) : Uc("stagetap", e, function () {
        b ? ad() : f.click && Qd.show({index: a.shiftKey || S(sc(a._x)), slow: a.altKey, direct: !0})
      })
    }

    function dd (a, b) {
      te[a] = ve[a] = b
    }

    function ed (a, b) {
      var c = d(this).data().eq;
      Qd.show({index: c, slow: a.altKey, direct: !0, coo: a._x - ee.offset().left, time: b})
    }

    function fd () {
      if (s(), C(), !fd.i) {
        fd.i = !0;
        var a = f.startindex;
        (a || f.hash && c.hash) && (td = J(a || c.hash.replace(/^#/, ""), id, 0 === Qd.index || a, a)), qe = od = pd = qd = td = Z(td) || 0
      }
      if (jd) {
        if (gd())return;
        ld && _c(ld, !0), nd = [], Rc(Nc), Qd.show({index: qe, time: 0}), Qd.resize()
      } else Qd.destroy()
    }

    function gd () {
      return!gd.f === Fd ? (gd.f = Fd, qe = jd - 1 - qe, Qd.reverse(), !0) : void 0
    }

    function hd () {
      hd.ok || (hd.ok = !0, Uc("ready"))
    }

    nc = nc || d("html"), oc = oc || d("body");
    var id, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd = this, Rd = d.now(), Sd = ab + Rd, Td = a[0], Ud = 1, Vd = a.data(), Wd = d("<style></style>"), Xd = d(L(Ob)), Yd = d(L(cb)), Zd = d(L(lb)).appendTo(Yd), $d = (Zd[0], d(L(ob)).appendTo(Zd)), _d = d(), ae = d(L(sb + " " + ub, L(wb))), be = d(L(sb + " " + vb, L(wb))), ce = ae.add(be).appendTo(Zd), de = d(L(yb)), ee = d(L(xb)).appendTo(de), fe = d(L(zb)).appendTo(ee), ge = d(), he = d(), ie = $d.data(), je = fe.data(), ke = d(L(_b)).appendTo(fe), le = d(L(Qb)), me = le[0], ne = d(L(cc)), oe = d(L(dc)).appendTo(Zd), pe = oe[0], qe = !1, re = {}, se = {}, te = {}, ue = {}, ve = {}, we = {}, xe = {}, ye = {}, ze = 0, Ae = [];
    Yd[Nc] = d(L(mb)), Yd[Pc] = d(L(Cb + " " + Eb, L($b))), Yd[Oc] = d(L(Cb + " " + Db, L(Zb))), xe[Nc] = [], xe[Pc] = [], xe[Oc] = [], ye[Nc] = {}, Qd.prevent = {}, xc && Yd.addClass(db), Vd.fotorama = this;
    var Be, Ce, De = d(L("", L(fc))), Ee = function () {
      De.attr("class", fc + " " + fc + "--" + Ce), Ce++, Ce > 4 && (Ce = 0)
    };
    Qd.startAutoplay = function (a) {
      return Qd.autoplay ? this : (Kd = Ld = !1, w(a || f.autoplay), Yc(), this)
    }, Qd.stopAutoplay = function () {
      return Qd.autoplay && (Kd = Ld = !0, Yc()), this
    }, Qd.show = function (a) {
      var b;
      "object" != typeof a ? (b = a, a = {}) : b = a.index, b = ">" === b ? pd + 1 : "<" === b ? pd - 1 : "<<" === b ? 0 : ">>" === b ? jd - 1 : b, b = isNaN(b) ? J(b, id, !0) : b, b = "undefined" == typeof b ? qe || 0 : b, Qd.activeIndex = qe = Z(b), rd = Fb(qe), sd = Gb(qe), nd = [qe, rd, sd], pd = ud ? b : qe;
      var c = Math.abs(qd - pd), d = u(a.time, function () {
        return Math.min(Dd * (1 + (c - 1) / 12), 2 * Dd)
      }), e = a.overPos;
      a.slow && (d *= 10), Qd.activeFrame = md = id[qe], _c(ld, md.i !== id[V(od)].i), lc(nd, "stage"), pc([pd, Fb(pd), Gb(pd)]), dd("go", !0), Uc("show", a.direct);
      var g = Qd.show.onEnd = function (b) {
        g.ok || (g.ok = !0, kc(), gc(nd, "stage"), b || Sc(!0), Uc("showend", a.direct), dd("go", !1), Ac(), bd(), Xc(), Yc())
      };
      if (Ad) {
        var i = md[Nc], j = qe !== qd ? id[qd][Nc] : null;
        U(i, j, _d, {time: d, method: f.transition, onEnd: g}, Ae)
      } else T($d, {pos: -p(pd, se.w, f.margin, od), overPos: e, time: d, onEnd: g, _001: !0});
      if (wc(), vd) {
        Jc();
        var k = W(qe + h(pd - qd, -1, 1));
        Hc({time: d, coo: k !== qe && a.coo, guessIndex: "undefined" != typeof a.coo ? k : qe}), wd && Ec(d)
      }
      return Jd = "undefined" != typeof qd && qd !== qe, qd = qe, f.hash && Jd && !Qd.eq && F(md.id || qe + 1), this
    }, Qd.requestFullScreen = function () {
      return yd && !Qd.fullScreen && (Hd = tc.scrollTop(), Id = tc.scrollLeft(), O(0, 0), dd("x", !0), Md = d.extend({}, se), a.addClass(Pb).appendTo(oc.addClass(bb)), nc.addClass(bb), _c(ld, !0, !0), Qd.fullScreen = !0, zd && jc.request(Td), Qd.resize(), gc(nd, "stage"), kc(), Uc("fullscreenenter")), this
    }, Qd.cancelFullScreen = function () {
      return zd && jc.is() ? jc.cancel(b) : Zc(), this
    }, b.addEventListener && b.addEventListener(jc.event, function () {
      !id || jc.is() || ld || Zc()
    }, !1), Qd.resize = function (a) {
      if (!id)return this;
      Tc(Qd.fullScreen ? {width: "100%", maxwidth: null, minwidth: null, height: "100%", maxheight: null, minheight: null} : P(a), Qd.fullScreen);
      var b = arguments[1] || 0, c = arguments[2], d = se.width, e = se.height, g = se.ratio, i = tc.height() - (vd ? ee.height() : 0);
      return o(d) && (Yd.css({width: d, minWidth: se.minwidth, maxWidth: se.maxwidth}), d = se.W = se.w = Yd.width(), f.glimpse && (se.w -= Math.round(2 * (n(f.glimpse) / 100 * d || m(f.glimpse))), $d.css({width: se.w, marginLeft: (se.W - se.w) / 2})), e = n(e) / 100 * i || m(e), e = e || g && d / g, e && (d = Math.round(d), e = se.h = Math.round(h(e, n(se.minheight) / 100 * i || m(se.minheight), n(se.maxheight) / 100 * i || m(se.maxheight))), Sc(), Zd.addClass(pb).stop().animate({width: d, height: e}, b, function () {
        Zd.removeClass(pb)
      }), vd && (ee.stop().animate({width: d}, b), Hc({guessIndex: qe, time: b, keep: !0}), wd && rc.nav && Ec(b)), Gd = c || !0, hd())), ze = Zd.offset().left, this
    }, Qd.setOptions = function (a) {
      return d.extend(f, a), fd(), this
    }, Qd.shuffle = function () {
      return id && M(id) && fd(), this
    }, Qd.destroy = function () {
      return Qd.cancelFullScreen(), Qd.stopAutoplay(), id = Qd.data = null, r(), nd = [], Rc(Nc), this
    }, Qd.playVideo = function () {
      var a = Qd.activeFrame, b = a.video, c = qe;
      return"object" == typeof b && a.videoReady && (zd && Qd.fullScreen && Qd.cancelFullScreen(), E(function () {
        return!jc.is() || c !== qe
      }, function () {
        c === qe && (a.$video = a.$video || d(d.Fotorama.jst.video(b)), a.$video.appendTo(a[Nc]), Yd.addClass(eb), ld = a.$video, v(), Uc("loadvideo"))
      })), this
    }, Qd.stopVideo = function () {
      return _c(ld, !0, !0), this
    }, Zd.on("mousemove", bd), te = X($d, {onStart: Vc, onMove: function (a, b) {
      $c(Zd, b.edge)
    }, onEnd: function (a) {
      $c(Zd), Wc();
      var b = (Dc && !Od || a.touch) && f.arrows;
      if (a.moved || b && a.pos !== a.newPos) {
        var c = q(a.newPos, se.w, f.margin, od);
        Qd.show({index: c, time: Ad ? Dd : a.time, overPos: a.overPos, direct: !0})
      } else a.aborted || cd(a.startEvent, b)
    }, getPos: function () {
      return-p(pd, se.w, f.margin, od)
    }, _001: !0, timeLow: 1, timeHigh: 1, friction: 2, select: "." + Nb + ", ." + Nb + " *", $wrap: Zd}), ve = X(fe, {onStart: Vc, onMove: function (a, b) {
      $c(ee, b.edge)
    }, onEnd: function (a) {
      function b () {
        Hc.l = a.newPos, Xc(), Yc(), qc(a.newPos, !0)
      }

      if (Wc(), a.moved)a.pos !== a.newPos ? (T(fe, {time: a.time, pos: a.newPos, overPos: a.overPos, onEnd: b}), qc(a.newPos), Ed && $c(ee, I(a.newPos, je.min, je.max))) : b(); else {
        var c = a.$target.closest("." + Cb, fe)[0];
        c && ed.call(c, a.startEvent)
      }
    }, timeLow: .5, timeHigh: 2, friction: 5, $wrap: ee}), ue = Y(Zd, {shift: !0, onEnd: function (a, b) {
      Vc(), Wc(), Qd.show({index: b, slow: a.altKey})
    }}), we = Y(ee, {onEnd: function (a, b) {
      Vc(), Wc();
      var c = t(fe) + .25 * b;
      fe.css(k(h(c, je.min, je.max))), Ed && $c(ee, I(c, je.min, je.max)), we.prevent = {"<": c >= je.max, ">": c <= je.min}, clearTimeout(we.t), we.t = setTimeout(function () {
        qc(c, !0)
      }, Fc), qc(c)
    }}), Yd.hover(function () {
      setTimeout(function () {
        Nd || (Od = !0, ad(!Od))
      }, 0)
    }, function () {
      Od && (Od = !1, ad(!Od))
    }), K(ce, function (a) {
      R(a), ld ? _c(ld, !0, !0) : (Wc(), Qd.show({index: ce.index(this) ? ">" : "<", slow: a.altKey, direct: !0}))
    }, {onStart: function () {
      Vc(), te.control = !0
    }, tail: te}), d.each("load push pop shift unshift reverse sort splice".split(" "), function (a, b) {
      Qd[b] = function () {
        return id = id || [], "load" !== b ? Array.prototype[b].apply(id, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (id = arguments[0]), fd(), Qd
      }
    }), fd()
  }, d.fn.fotorama = function (b) {
    return this.each(function () {
      var c = this, e = d(this), f = e.data(), g = f.fotorama;
      g ? g.setOptions(b) : E(function () {
        return!C(c)
      }, function () {
        f.urtext = e.html(), new d.Fotorama(e, d.extend({}, {width: null, minwidth: null, maxwidth: "100%", height: null, minheight: null, maxheight: null, ratio: null, margin: Jc, glimpse: 0, nav: "dots", navposition: "bottom", thumbwidth: Kc, thumbheight: Kc, thumbmargin: Jc, thumbborderwidth: Jc, allowfullscreen: !1, fit: "contain", transition: "slide", transitionduration: Gc, captions: !0, hash: !1, startindex: 0, loop: !1, autoplay: !1, stopautoplayontouch: !0, keyboard: !1, arrows: !0, click: !0, swipe: !0, trackpad: !0, shuffle: !1, direction: "ltr", shadows: !0}, a.fotoramaDefaults, b, f))
      })
    })
  }, d.Fotorama.instances = [], d.Fotorama.cache = {}, d = d || {}, d.Fotorama = d.Fotorama || {}, d.Fotorama.jst = d.Fotorama.jst || {}, d.Fotorama.jst.style = function (a) {
    var b, c = "";
    return hc.escape, c += ".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}"
  }, d.Fotorama.jst.video = function (a) {
    function b () {
      c += d.call(arguments, "")
    }

    var c = "", d = (hc.escape, Array.prototype.join);
    return c += '<div class="fotorama__video"><iframe src="', b(("youtube" == a.type ? "http://youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? "http://player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s ? "&" + a.s : "")), c += '" frameborder="0" allowfullscreen></iframe></div>'
  }, d(function () {
    d("." + ab + ':not([data-auto="false"])').fotorama()
  })
}(window, document, location, window.jQuery);
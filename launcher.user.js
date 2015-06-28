// ==UserScript==
// @name        ScratchAgarBotLauncher
// @namespace   ScratchAgarBot
// @include     http://agar.io/
// @version     2.82
// @grant       none
// @author      http://github.com/ScratchAgarioBots
// ==/UserScript==

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

Array.prototype.peek = function() {
    return this[this.length-1];
}

$.get('https://raw.githubusercontent.com/ScratchAgarioBots/launcher.user.js/master/launcher.user.js?1', function(data) {
  var latestVersion = data.replace(/(\r\n|\n|\r)/gm,"");
  latestVersion = latestVersion.substring(latestVersion.indexOf("// @version")+11,latestVersion.indexOf("// @grant"));

  latestVersion = parseFloat(latestVersion + 0.0000);
    var myVersion = parseFloat(GM_info.script.version + 0.0000); 
  
  if(latestVersion > myVersion)
  {
    alert("Update Available for launcher.user.js: V" + latestVersion + "\nGet the latest version from the GitHub page.");
        window.open('https://github.com/ScratchAgarioBots/launcher.user.js/blob/master/launcher.user.js','_blank');
  }
  console.log('Current launcher.user.js Version: ' + myVersion + " on Github: " + latestVersion);
});

console.log("Running Bot Launcher!");
(function (h, f) {

  //UPDATE
  function keyAction(e) {
    if (84 == e.keyCode) {
      console.log("Toggle");
      toggle = !toggle;
    }
    if (82 == e.keyCode) {
      console.log("ToggleDraw");
      toggleDraw = !toggleDraw;
    }
    if (68 == e.keyCode) {
      window.setDarkTheme(!getDarkBool());
    }
    if (70 == e.keyCode) {
      window.setShowMass(!getMassBool());
    }
    if (69 == e.keyCode) {
        if (message.length > 0) {
            window.setMessage([]);
            window.onmouseup = function () {};
        }
    }
  }

  function humanPlayer() {
    //Don't need to do anything.
    return [getPointX(), getPointY()];
  }

  function Sa() {

    //UPDATE
    if (window.botList == null) {
        window.botList = [];
        window.jQuery('#locationUnknown').append(window.jQuery('<select id="bList" class="form-control" onchange="setBotIndex($(this).val());" />'));
        window.jQuery('#locationUnknown').addClass('form-group');
    }

    window.botList.push(["Human", humanPlayer]);

    var bList = window.jQuery('#bList');
    window.jQuery('<option />', {value: (window.botList.length - 1), text: "Human"}).appendTo(bList);

    la = !0;
    za();
    setInterval(za, 180000);
    B = ma = document.getElementById('canvas');
    e = B.getContext('2d');
    B.onmousedown = function (a) {
      if (Aa) {
        var b = a.clientX - (5 + p / 5 / 2),
        c = a.clientY - (5 + p / 5 / 2);
        if (Math.sqrt(b * b + c * c) <= p / 5 / 2) {
          K();
          C(17);
          return
        }
      }
      T = a.clientX;
      U = a.clientY;
      na();
      K()
    };
    B.onmousemove = function (a) {
      T = a.clientX;
      U = a.clientY;
      na()
    };
    B.onmouseup = function () {
    };
    /firefox/i.test(navigator.userAgent) ? document.addEventListener('DOMMouseScroll', Ba, !1)  : document.body.onmousewheel = Ba;
    var a = !1,
    b = !1,
    c = !1;
    h.onkeydown = function (d) {
      32 != d.keyCode || a || (K(), C(17), a = !0);
      81 != d.keyCode || b || (C(18), b = !0);
      87 != d.keyCode || c || (K(), C(21), c = !0);
      27 == d.keyCode && Ca(!0);

      //UPDATE
      keyAction(d);
    };
    h.onkeyup = function (d) {
      32 == d.keyCode && (a = !1);
      87 == d.keyCode && (c = !1);
      81 == d.keyCode && b && (C(19), b = !1)
    };
    h.onblur = function () {
      C(19);
      c = b = a = !1
    };
    h.onresize = Da;
    Da();
    h.requestAnimationFrame ? h.requestAnimationFrame(Ea)  : setInterval(oa, 1000 / 60);
    setInterval(K, 40);
    v && f('#region').val(v);
    Fa();
    V(f('#region').val());
    null == r && v && W();
    f('#overlays').show()
  }
  function Ba(a) {
    D *= Math.pow(0.9, a.wheelDelta / - 120 || a.detail || 0);
    1 > D && (D = 1);
    D > 4 / g && (D = 4 / g)
  }
  function Ta() {
    if (0.4 > g) L = null;
     else {
      for (var a = Number.POSITIVE_INFINITY, b = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, e = 0, l = 0; l < u.length; l++) {
        var k = u[l];
        !k.I() || k.M || 20 >= k.size * g || (e = Math.max(k.size, e), a = Math.min(k.x, a), b = Math.min(k.y, b), c = Math.max(k.x, c), d = Math.max(k.y, d))
      }
      L = Ua.ca({
        X: a - (e + 100),
        Y: b - (e + 100),
        fa: c + (e + 100),
        ga: d + (e + 100),
        da: 2,
        ea: 4
      });
      for (l = 0; l < u.length; l++) if (k = u[l], k.I() && !(20 >= k.size * g)) for (a = 0; a < k.a.length; ++a) b = k.a[a].x,
      c = k.a[a].y,
      b < s - p / 2 / g || c < t - q / 2 / g || b > s + p / 2 / g || c > t + q / 2 / g || L.i(k.a[a])
    }
  }
  function na() {
    //UPDATE
    if (toggle ||window.botList[botIndex][0] == "Human") {
      X = (T - p / 2) / g + s;
      Y = (U - q / 2) / g + t
    }
  }
  function za() {
    null == Z && (Z = {
    }, f('#region').children().each(function () {
      var a = f(this),
      b = a.val();
      b && (Z[b] = a.text())
    }));
    f.get($ + '//m.agar.io/info', function (a) {
      var b = {
      },
      c;
      for (c in a.regions) {
        var d = c.split(':') [0];
        b[d] = b[d] || 0;
        b[d] += a.regions[c].numPlayers
      }
      for (c in b) f('#region option[value="' + c + '"]').text(Z[c] + ' (' + b[c] + ' players)')
    }, 'json')
  }
  function Ga() {
    f('#adsBottom').hide();
    f('#overlays').hide();
    Fa()
  }
  function V(a) {
    a && a != v && (f('#region').val() != a && f('#region').val(a), v = h.localStorage.location = a, f('.region-message').hide(), f('.region-message.' + a).show(), f('.btn-needs-server').prop('disabled', !1), la && W())
  }
  function Ca(a) {
    E = null;
    f('#overlays').fadeIn(a ? 200 : 3000);
    a || f('#adsBottom').fadeIn(3000)
  }
  function Fa() {
    f('#region').val() ? h.localStorage.location = f('#region').val()  : h.localStorage.location && f('#region').val(h.localStorage.location);
    f('#region').val() ? f('#locationKnown').append(f('#region'))  : f('#locationUnknown').append(f('#region'))
  }
  function pa() {
    console.log('Find ' + v + M);
    f.ajax($ + '//m.agar.io/', {
      error: function () {
        setTimeout(pa, 1000)
      },
      success: function (a) {
        a = a.split('\n');
        Ha('ws://' + a[0], a[1])
      },
      dataType: 'text',
      method: 'POST',
      cache: !1,
      crossDomain: !0,
      data: v + M || '?'
    })
  }
  function W() {
    la && v && (f('#connecting').show(), pa())
  }
  function Ha(a, hash) {
    if (r) {
      r.onopen = null;
      r.onmessage = null;
      r.onclose = null;
      try {
        r.close()
      } catch (b) {
      }
      r = null
    }
    if (Va) {
      var d = a.split(':');
      a = d[0] + 's://ip-' + d[1].replace(/\./g, '-').replace(/\//g, '') + '.tech.agar.io:' + ( + d[2] + 2000)
    }
    F = [
    ];
    m = [
    ];
    z = {
    };
    u = [
    ];
    H = [
    ];
    A = [
    ];
    w = x = null;
    I = 0;
    console.log('Connecting to ' + a);
    //UPDATE
    serverIP = a;
    r = new WebSocket(a);
    r.binaryType = 'arraybuffer';
    r.onopen = function() {
      var a;
      aa = 500;
      f('#connecting').hide();
      console.log('socket open');
      a = N(5);
      a.setUint8(0, 254);
      a.setUint32(1, 4, !0);
      O(a);
      a = N(5);
      a.setUint8(0, 255);
      a.setUint32(1, 154669603, !0);
      O(a);
      a = N(1 + hash.length);
      a.setUint8(0, 80);
      for (var c = 0; c < hash.length; ++c) {
        a.setUint8(c + 1, hash.charCodeAt(c));
      }
      O(a);
      Ia()
    }
    r.onmessage = Xa;
    r.onclose = Ya;
    r.onerror = function () {
      console.log('socket error')
    }
  }
  function N(a) {
    return new DataView(new ArrayBuffer(a))
  }
  function O(a) {
    r.send(a.buffer)
  }
  function Ya() {
    console.log('socket close');
    setTimeout(W, aa);
    aa *= 1.5
  }
  function Xa(a) {
    Za(new DataView(a.data))
  }
  function Za(a) {
    function b() {
      for (var b = ''; ; ) {
        var d = a.getUint16(c, !0);
        c += 2;
        if (0 == d) break;
        b += String.fromCharCode(d)
      }
      return b
    }
    var c = 0;
    240 == a.getUint8(c) && (c += 5);
    switch (a.getUint8(c++)) {
      case 16:
        $a(a, c);
        break;
      case 17:
        P = a.getFloat32(c, !0);
        c += 4;
        Q = a.getFloat32(c, !0);
        c += 4;
        R = a.getFloat32(c, !0);
        c += 4;
        break;
      case 20:
        m = [
        ];
        F = [
        ];
        break;
      case 21:
        qa = a.getInt16(c, !0);
        c += 2;
        ra = a.getInt16(c, !0);
        c += 2;
        sa || (sa = !0, ba = qa, ca = ra);
        break;
      case 32:
        F.push(a.getUint32(c, !0));
        c += 4;
        break;
      case 49:
        if (null != x) break;
        var d = a.getUint32(c, !0),
        c = c + 4;
        A = [
        ];
        for (var e = 0; e < d; ++e) {
          var l = a.getUint32(c, !0),
          c = c + 4;
          A.push({
            id: l,
            name: b()
          })
        }
        Ja();
        break;
      case 50:
        x = [
        ];
        d = a.getUint32(c, !0);
        c += 4;
        for (e = 0; e < d; ++e) x.push(a.getFloat32(c, !0)),
        c += 4;
        Ja();
        break;
      case 64:
        da = a.getFloat64(c, !0),
        c += 8,
        ea = a.getFloat64(c, !0),
        c += 8,
        fa = a.getFloat64(c, !0),
        c += 8,
        ga = a.getFloat64(c, !0),
        c += 8,
        P = (fa + da) / 2,
        Q = (ga + ea) / 2,
        R = 1,
        0 == m.length && (s = P, t = Q, g = R)
    }
  }
  function $a(a, b) {
    G = + new Date;
    var c = Math.random();
    ta = !1;
    var d = a.getUint16(b, !0);
    b += 2;
    for (var e = 0; e < d; ++e) {
      var l = z[a.getUint32(b, !0)],
      k = z[a.getUint32(b + 4, !0)];
      b += 8;
      l && k && (k.S(), k.p = k.x, k.q = k.y, k.o = k.size, k.D = l.x, k.F = l.y, k.n = k.size, k.L = G)
    }
    for (e = 0; ; ) {
      d = a.getUint32(b, !0);
      b += 4;
      if (0 == d) break;
      ++e;
      var h,
      l = a.getInt16(b, !0);
      b += 2;
      k = a.getInt16(b, !0);
      b += 2;
      h = a.getInt16(b, !0);
      b += 2;
      for (var g = a.getUint8(b++), f = a.getUint8(b++), p = a.getUint8(b++), g = (g <<
      16 | f << 8 | p).toString(16); 6 > g.length; ) g = '0' + g;
      var g = '#' + g,
      f = a.getUint8(b++),
      p = !!(f & 1),
      r = !!(f & 16);
      f & 2 && (b += 4);
      f & 4 && (b += 8);
      f & 8 && (b += 16);
      for (var q, n = ''; ; ) {
        q = a.getUint16(b, !0);
        b += 2;
        if (0 == q) break;
        n += String.fromCharCode(q)
      }
      q = n;
      n = null;
      z.hasOwnProperty(d) ? (n = z[d], n.K(), n.p = n.x, n.q = n.y, n.o = n.size, n.color = g)  : (n = new Ka(d, l, k, h, g, q), n.ka = l, n.la = k);
      n.d = p;
      n.j = r;
      n.D = l;
      n.F = k;
      n.n = h;
      n.ja = c;
      n.L = G;
      n.W = f;
      q && n.Z(q);
      - 1 != F.indexOf(d) && - 1 == m.indexOf(n) && (document.getElementById('overlays').style.display = 'none', m.push(n), 1 == m.length && (s = n.x, t = n.y))

      //UPDATE
      interNodes[d] = window.getCells()[d];
    }

    //UPDATE
    Object.keys(interNodes).forEach(function (element, index) {
        //console.log("start: " + interNodes[element].updateTime + " current: " + D + " life: " + (D - interNodes[element].updateTime));
        var isRemoved = !window.getCells().hasOwnProperty(element);


        if (isRemoved  && (getLastUpdate() - interNodes[element].L) > 3000) {
            delete interNodes[element];
        } else if (isRemoved && computeDistance(getOffsetX(), getOffsetY(), interNodes[element].x, interNodes[element].y) < screenDistance()) {
            //console.log("Too close! Remove " + computeDistance(getOffsetX(), getOffsetY(), interNodes[element].x, interNodes[element].y) + " || " + screenDistance());

            delete interNodes[element];
        }
    });

    c = a.getUint32(b, !0);
    b += 4;
    for (e = 0; e < c; e++) d = a.getUint32(b, !0),
    b += 4,
    n = z[d],
    null != n && n.S();
    //ta && 0 == m.length && Ca(!1)
  }

  //UPDATE
  function computeDistance(x1, y1, x2, y2) {
      var xdis = x1 - x2; // <--- FAKE AmS OF COURSE!
      var ydis = y1 - y2;
      var distance = Math.sqrt(xdis * xdis + ydis * ydis);

      return distance;
  }

  function screenDistance() {
      return Math.min(computeDistance
        (getOffsetX(), getOffsetY(), screenToGameX(getWidth()), getOffsetY()), computeDistance
        (getOffsetX(), getOffsetY(), getOffsetX(), screenToGameY(getHeight())));
  }

  function screenToGameX(x) {
      return (x - getWidth() / 2) / getRatio() + getX();
  }

  function screenToGameY(y) {
      return (y - getHeight() / 2) / getRatio() + getY();;
  }

  window.drawPoint = function(x_1, y_1, drawColor, text) {
      if (!toggleDraw) {
          dPoints.push([x_1, y_1, drawColor]);
          dText.push(text);
      }
  }

  window.drawArc = function(x_1, y_1, x_2, y_2, x_3, y_3, drawColor) {
      if (!toggleDraw) {
          var radius = computeDistance(x_1, y_1, x_3, y_3);
          dArc.push([x_1, y_1, x_2, y_2, x_3, y_3, radius, drawColor]);
      }
  }

  window.drawLine =  function(x_1, y_1, x_2, y_2, drawColor) {
      if (!toggleDraw) {
          lines.push([x_1, y_1, x_2, y_2, drawColor]);
      }
  }

  window.drawCircle = function(x_1, y_1, radius, drawColor) {
      if (!toggleDraw) {
          circles.push([x_1, y_1, radius, drawColor]);
      }
  }

  function K() {

    //UPDATE
    if (getPlayer().length == 0 && !reviving && ~~(getCurrentScore() / 100) > 0) {
        console.log("Dead: " + ~~(getCurrentScore() / 100));
        apos('send', 'pageview');
    }
    
    if (getPlayer().length == 0) {
        console.log("Revive");
        setNick(originalName);
        reviving = true;
    } else if (getPlayer().length > 0 && reviving) {
        reviving = false;
    }



    var a;
    if (ua()) {
      a = T - p / 2;
      var b = U - q / 2;
      64 > a * a + b * b || 0.01 > Math.abs(La - X) && 0.01 > Math.abs(Ma - Y) || (La = X, Ma = Y, a = N(21), a.setUint8(0, 16), a.setFloat64(1, X, !0), a.setFloat64(9, Y, !0), a.setUint32(17, 0, !0), O(a))
    }
  }
  function Ia() {
    if (ua() && null != E) {
      var a = N(1 + 2 * E.length);
      a.setUint8(0, 0);
      for (var b = 0; b < E.length; ++b) a.setUint16(1 + 2 * b, E.charCodeAt(b), !0);
      O(a)
    }
  }
  function ua() {
    return null != r && r.readyState == r.OPEN
  }
  function C(a) {
    if (ua()) {
      var b = N(1);
      b.setUint8(0, a);
      O(b)
    }
  }
  function Ea() {
    oa();
    h.requestAnimationFrame(Ea)
  }
  function Da() {
    p = h.innerWidth;
    q = h.innerHeight;
    ma.width = B.width = p;
    ma.height = B.height = q;
    oa()
  }
  function Na() {
    var a;
    a = 1 * Math.max(q / 1080, p / 1920);
    return a *= D
  }
  function ab() {
    if (0 != m.length) {
      for (var a = 0, b = 0; b < m.length; b++) a += m[b].size;
      a = Math.pow(Math.min(64 / a, 1), 0.4) * Na();
      g = (9 * g + a) / 10
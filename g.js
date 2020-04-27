(function (a) {
    /*
 * g.js
 * 
 * Rohan Kahaisingh
 */
    var a, b, c, d, e, f;
    a = window || document.window;
    (function () {
        !function () { if (typeof window !== 'undefined') { return this; } else if (typeof window == 'undefined' && typeof document == 'undefined') throw new Error("g.js require a interactive document"); }(); window.Width = window.innerWidth; window.Height = window.innerHeight; window.onresize = () => { window.Width = window.innerWidth; window.Height = window.innerHeight; }; document.GetElement = (element, elementTarget) => { return g.Selector(element, elementTarget); };
    })();
    a.g = {
        DefineNames: function (boolean) {
            var boolean;
            if (typeof boolean == "boolean") {
                if (typeof document !== "undefined") {
                    var a = {};
                    for (var i = 0; i < document.getElementsByTagName("*").length; i++) {
                        var b = document.getElementsByTagName("*")[i];
                        if (b.getAttribute("g-name") !== null && b.getAttribute("g-name") !== undefined) {
                            a[b.getAttribute("g-name")] = b;
                        }
                    }
                    for (c in a) {
                        window[c] = a[c];
                    }
                }
            }
            else {
                console.log("The argument has to be a boolean");
            }
        },
        Help: function (name) {
            var name, a;
            if (typeof name !== "undefined") {
                a = name.toLowerCase();
                if (a == 'selector') {
                    var b = new XMLHttpRequest();
                    b.onreadystatechange = function () {
                        if (b.readyState === 4) {
                            if (b.status === 200 || b.status == 0) {
                                var text = b.responseText;
                                console.log(text);
                            }
                        }
                    }
                    b.open("GET", 'g_help/g_selector.txt', true);
                    b.send(null);
                    b.onloadend = function () {
                        if (b.status == 404) {
                            throw 'Something wrong happened';
                        }
                    }
                }
            } else {

            }
        },
        Highlight: function (target, timeout, duration) {
            var target, timeout, duration;
            if (duration == "" || duration == undefined) {
                duration = 4e3;
            }
            if (timeout == "" || timeout == undefined) {
                timeout = true;
            }
            if (typeof (target) == "string") {
                if (target.indexOf(".") > -1) {
                    var a = target.substring(target.indexOf(".") + 1);
                    for (var i = 0; i < document.body.getElementsByClassName(a).length; i++) {
                        document.getElementsByClassName(a)[i].classList.add("gx-highlight");
                    }
                    if (typeof (timeout) == "boolean") {
                        if (timeout == true) {
                            setTimeout(function () {
                                for (var i = 0; i < document.body.getElementsByClassName(a).length; i++) {
                                    document.getElementsByClassName(a)[i].classList.remove("gx-highlight");
                                }
                            }, duration);
                        }
                    }
                }
                if (target.indexOf("#") > -1) {
                    var a = target.substring(target.indexOf("#") + 1);
                    document.getElementById(a).classList.add('gx-highlight');
                    if (typeof (timeout) == "boolean") {
                        if (timeout == true) {
                            setTimeout(function () {
                                document.getElementById(a).classList.remove("gx-highlight");
                            }, duration);
                        }
                    }
                }
                if (target.indexOf("<") > -1 && target.indexOf(">") > -1) {
                    var a = target.substring(target.indexOf("<") + 1, target.indexOf(">"));
                    for (var i = 0; i < document.body.getElementsByTagName(a).length; i++) {
                        document.getElementsByTagName(a)[i].classList.add("gx-highlight");
                    }
                    if (typeof (timeout) == "boolean") {
                        if (timeout == true) {
                            setTimeout(function () {
                                for (var i = 0; i < document.body.getElementsByTagName(a).length; i++) {
                                    document.getElementsByTagName(a)[i].classList.remove("gx-highlight");
                                    if (document.getElementsByTagName(a)[i].getAttribute("class") == null || document.getElementsByTagName(a)[i].getAttribute("class") == '') {
                                        document.getElementsByTagName(a)[i].removeAttribute("class");
                                    }
                                }
                            }, duration);
                        }
                    }
                }
            }
            if (typeof (target) == "object") {
                target.classList.add("gx-highlight");
                if (typeof (timeout) == "boolean") {
                    if (timeout == true) {
                        setTimeout(function () {
                            target.classList.remove("gx-highlight");
                        }, duration);
                    }
                }
            }
        },
        All: function (element) {
            var element, a, b, c, d;
            if (typeof element !== 'undefined') {
                b = new Array();

                if (element.substring(0, 1) == '.') {
                    a = element.substring(element.indexOf(".") + 1);
                    for (var i = 0; i < document.getElementsByClassName(a).length; i++) {
                        b.push(document.getElementsByClassName(a)[i]);
                    }
                    return y(b);
                }
                else if (element.substring(0, 1) == '#') {
                    a = element.substring(element.indexOf("#") + 1);
                    for (var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
                        c = document.body.getElementsByTagName("*")[i];
                        if (c.getAttribute('id') == a) {
                            b.push(c);
                        }
                    }
                    return y(b);
                }
                if (element.substring(0, 1) == '<' && element.indexOf(">") > -1) {
                    a = element.substring(element.indexOf("<") + 1, element.indexOf(">"));
                    for (var i = 0; i < document.getElementsByTagName(a).length; i++) {
                        b.push(document.getElementsByTagName(a)[i]);
                    }
                    return y(b);
                }
                function y(c) {
                    if (c.length !== 0) {
                        c.Random = () => {
                            d = c[Math.floor(Math.random() * c.length)];
                            return d;
                        }
                        c.Css = (param, property) => {
                            if (param !== undefined && property !== undefined) {
                                for (var i = 0; i < c.length; i++) {
                                    c[i].style.setProperty(param, property);
                                }
                            }
                        }
                        c.SetAttribute = (name, value) => {
                            var name, value;
                            if (name !== undefined && value !== undefined) {
                                for (var i = 0; i < c.length; i++) {
                                    c[i].setAttribute(name, value);
                                }
                            }
                        }
                        c.RemoveAttribute = (name) => {
                            var name;
                            if (name !== undefined) {
                                for (var i = 0; i < c.length; i++) {
                                    c[i].removeAttribute(name);
                                }
                            }
                        }
                        c.Attribute = (val) => {
                            var val, a, b, d, e, f;
                            if (val !== undefined) {
                                if (val.substring(0, 1) == '.') {
                                    // set default classname
                                    a = val.substring(1);
                                    for (var i = 0; i < c.length; i++) {
                                        c[i].className = a;
                                    }
                                }
                                else if (val.substring(0, 1) == '#') {
                                    // set default id
                                    a = val.substring(1);
                                    for (var i = 0; i < c.length; i++) {
                                        c[i].setAttribute("id", a);
                                    }
                                }
                            }
                        }
                        return c;
                    }
                }
            } else {
                throw "Uncaught TypeError: Failed to execute 'All' on 'Document': 1 argument required, but only 0 present";
                return;
            }
        },
        Selector(element, elementTarget) {
            var element, a, b, elementTarget;
            var d;

            if (typeof (element) == 'string') {
                if (element !== undefined || element !== "") {
                    if (element.indexOf(" ") > -1 && element.indexOf("in") > -1) {
                        if (elementTarget == undefined || elementTarget == "") elementTarget = 0;
                        var sp = element.split(" ");
                        var a = sp[0]; // parent element
                        var b = sp[2]; // child element
                        var c, d, f, e, h;
                        if (typeof b !== "undefined") {
                            if (b.substring(0, 1) == '.') {
                                c = document.getElementsByClassName(b.substring(1))[0];
                            }
                            if (b.substring(0, 1) == '#') {
                                c = document.getElementById(b.substring(1));
                            }
                            if (b.substring(0, 1) == '<' && b.substring(b.length - 1, b.length) == '>') {
                                h = b.substring(b.indexOf("<") + 1, b.indexOf(">"));
                                c = document.getElementsByTagName(h)[0];
                            }
                        }
                        if (typeof a !== 'undefined') {
                            if (typeof c !== "undefined") {
                                if (a.substring(0, 1) == ".") {
                                    for (var i = 0; i < c.getElementsByClassName(a.substring(1)).length; i++) {
                                        if (typeof c.getElementsByClassName(a.substring(1))[i] !== 'undefined') {
                                            e = c.getElementsByClassName(a.substring(1))[elementTarget];
                                            if (typeof e !== "undefined") {
                                                d = e;
                                                return y(d);
                                            }
                                        }
                                    }
                                }
                                if (a.substring(0, 1) == '<' && a.substring(a.length - 1, a.length) == '>') {
                                    f = a.substring(a.indexOf("<") + 1, a.indexOf(">"));
                                    for (var i = 0; i < c.getElementsByTagName(f).length; i++) {
                                        if (typeof c.getElementsByTagName(f)[i] !== 'undefined') {
                                            e = c.getElementsByTagName(f)[elementTarget];
                                            if (typeof e !== "undefined") {
                                                d = e;
                                                return y(d);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (elementTarget == undefined || elementTarget == "") elementTarget = 0;
                        if (element.indexOf(".") > -1) {
                            a = element.substring(element.indexOf(".") + 1);
                            b = document.getElementsByClassName(a)[elementTarget];
                            d = b;
                            return y(d);
                        }
                        else if (element.indexOf("#") > -1) {
                            a = element.substring(element.indexOf("#") + 1);
                            b = document.getElementById(a);
                            d = b;
                            return y(d);
                        }
                        if (element.indexOf("<") > -1 && element.indexOf(">") > -1) {
                            a = element.substring(element.indexOf("<") + 1, element.indexOf(">"));
                            b = document.getElementsByTagName(a)[elementTarget];
                            d = b;
                            return y(d);
                        }
                        else if (element.indexOf("@") > -1) {
                            a = element.substring(element.indexOf("@") + 1);
                            b = document.getElementsByName(a)[elementTarget];
                            d = b;
                            return y(d);
                        }
                    }
                }
                else {
                    return "Can not find a undefined element";
                }
            }
            else if (typeof (element) == 'object') {
                return element;
            }
            function y(h) {
                if (d !== undefined) {
                    h.On = function (event, func) {
                        var event, func;
                        if (typeof d !== 'undefined') {
                            if (typeof event !== 'undefined') {
                                if (typeof event == 'string') {
                                    d.addEventListener(event, func);
                                }
                                if (typeof event == "object") {
                                    d.addEventListener(event, func);
                                }
                            }
                        }
                    };
                    h.Css = function (param, property) {
                        var param, property;
                        if (typeof d !== 'undefined') {
                            if (param !== undefined && property !== undefined) {
                                d.style.setProperty(param, property);
                            }
                        }
                    };
                    h.Width = function (val) {
                        var val;
                        if (val !== undefined) {
                            d.style.width = val;
                        } else if (val == undefined) {
                            return d.clientWidth;
                        }
                    };
                    h.Height = function (val) {
                        var val;
                        if (val !== undefined) {
                            d.style.height = val;
                        } else if (val == undefined) {
                            return d.clientHeight;
                        }
                    };
                    h.Class = (val) => {
                        var val;
                        if (val !== undefined) {
                            d.className = val;
                        } else if (val == undefined) {
                            return d.className;
                        }
                    }
                    h.Style = (obj) => {
                        var obj;
                        if (typeof obj !== "undefined") {
                            for (a in obj) {
                                d.style[a] = obj[a];
                            }
                        } else {
                            return d.style == null ? d.style : getComputedStyle(d)
                        }
                    }
                    h.Click = (call) => {
                        var call;
                        if (typeof call !== "undefined") {
                            d.onclick = call;
                        } else {
                            d.click();
                        }
                    }
                }
                return h;
            }
        },
        Define: function (element, defineName) {
            var element, defineName;
            if (typeof element !== "undefined" && typeof defineName !== "undefined") {
                if (element == 'all') {
                    for (var i = 0; i < document.getElementsByTagName("*").length; i++) {
                        if (document.getElementsByTagName("*")[i].getAttribute("class") !== null) {
                            console.log(true);
                            window[document.getElementsByTagName("*")[i].getAttribute("class")] = document.getElementsByTagName("*")[i];
                        }
                    }
                } else {
                    window[defineName] = element;
                    return window[defineName];
                }
            }
        },
        XHLoad: function (filepath, callback) {
            var filepath, callback, a, b, c, d, e;
            a = new XMLHttpRequest();
            a.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    if (this.status == 200) {
                        if (typeof callback !== "undefined") {
                            callback(
                                response = {
                                    text: this.responseText,
                                    code: this.status,
                                    main: this
                                }
                            );
                        }
                    }
                    if (this.status !== 200) {
                        if (typeof callback !== "undefined") {
                            callback(
                                response = {
                                    text: this.status,
                                    code: this.status,
                                    main: this.status
                                }
                            );
                        }
                    }
                }
            });
            a.onerror = function () {
                console.error("An error has occurred");
            }
            a.open("GET", filepath, true);
            a.send(null);
        },
        CreateElement: function (element, returnElement) {
            var element, returnElement, a, b, c, d, e, f, h, i, j, k;
            if (typeof element !== 'undefined' && element !== '') {
                if (element.indexOf(".") > -1 && element.indexOf("#") == -1) {
                    a = element.split(".");
                    c = [];
                    for (b in a) c.push(a[b]);
                    if (c.length == 2) {
                        d = c[0];
                        e = c[1];
                    }
                    f = document.createElement(d); f.className = e;
                    return tE(f);
                    delete f;
                }
                if (element.indexOf("#") > -1 && element.indexOf(".") == -1) {
                    a = element.split("#");
                    c = [];
                    for (b in a) c.push(a[b]);
                    if (c.length == 2) {
                        d = c[0];
                        e = c[1];
                    }
                    f = document.createElement(d); f.id = e;
                    return tE(f);
                    delete f;
                }
                if (element.indexOf("#") == -1 && element.indexOf(".") == -1) {
                    f = document.createElement(element);
                    return tE(f);
                    delete f;
                }
            }
            function tE(r) {
                var r, t, u, v, w, x;
                r.Style = (obj) => {
                    var obj;
                    if (typeof obj !== 'undefined') {
                        for (t in obj) {
                            r.style[t] = obj[t];
                        }
                    }
                }
                r.On = (event, fun) => {
                    var event, fun;
                    if (typeof event !== 'undefined' && typeof fun !== 'undefined') {
                        r.addEventListener(event, fun);
                        arguments = [];
                    }
                }
                r.Text = (val) => {
                    var val;
                    if (typeof val !== 'undefined' && val !== '') {
                        r.innerText = val;
                        return val;
                    } else {
                        return r.innerText;
                    }
                }
                if (typeof returnElement !== 'undefined') {
                    if (typeof g.Selector !== 'undefined') {
                        g.Selector(returnElement).appendChild(r);
                    } else {
                        console.error("Couldn't create element!");
                    }
                }
                return r;
            }
            function wj(r) {
                var r, t, u, v, w, x;
                return r;
            }
        }
    };
    a.Colors = {
        RED: "#ff0000",
        ORANGE: "#ff6600",
        YELLOW: "#ffff00",
        GREEN: "#008000",
        BLUE: "#0000ff",
        INDIGO: "#4b0082",
        VIOLET: "#7f00ff",
        BLACK: "#000000",
        WHITE: "#ffffff",
        RANDOM: function () {
            var r, g, b;
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
    }
    g.Canvas = class Canvas{
        constructor() {
            this.width = undefined;
            this.height = undefined;
            this.documentElement = undefined;
            this.id = undefined;
        }
        SetCanvas(elementReturn) {
            var a, b, c, d, e, f, elementReturn;
            if (this.height == 'full') this.height = window.innerHeight;
            if (this.width == 'full') this.width = window.innerWidth;
            a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            if (typeof this.id !== "undefined") {
                a.setAttribute("name", this.id);
            } else {
                b = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                d = navigator.userAgent.split(" ");
                c = "";
                for (var i = 0; i < 22; i++) {
                    c += b.charAt(Math.floor(Math.random() * b.length));
                }
                this.id = c;
                a.setAttribute("unique-id", c);
            }
            this.documentElement = a;
            g.Selector(elementReturn).appendChild(a);
            a = null;
            this.ctx = this.documentElement.getContext("2d");
        }
        DrawLine(obj) {
            var obj, a, b, c, d, e;
            if (typeof obj == "object") {
                a = {
                    NewPath: true,
                    StartX: undefined,
                    StartY: undefined,
                    EndX: undefined,
                    EndY: undefined,
                    LineColor: 'black',
                    LineWidth: 1,
                    LineCap: undefined
                }
                for (b in obj) a[b] = obj[b];
                if (a.NewPath == true) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = a.LineColor;
                    this.ctx.lineCap = a.LineCap;
                    this.ctx.lineWidth = a.LineWidth;
                    this.ctx.moveTo(a.StartX, a.StartY);
                    this.ctx.lineTo(a.EndX, a.EndY);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
                return c = {
                    On: (event, func) => {
                        var event, func, a, b, c, d, e;

                    }
                } 
            } else {
                console.error("You need to enter a object as argument");
            }
        }
    }
})(window);
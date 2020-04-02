/*
 * g.js
 * 
 * Rohan Kahaisingh
 */
(function () {
    !function () { if (typeof window !== 'undefined') { return this; } else if (typeof window == 'undefined' && typeof document == 'undefined') throw new Error("g.js require a interactive document"); }(); window.Width = window.innerWidth; window.Height = window.innerHeight; window.onresize = () => { window.Width = window.innerWidth; window.Height = window.innerHeight; }; document.GetElement = (element, elementTarget) => { return g.Selector(element, elementTarget); };})();
var g = {
    DefineNames: function (boolean) {
        var boolean;
        if (typeof boolean == "boolean") {
            if (typeof document !== "undefined") {
                var a = {};
                for (var i = 0; i < document.getElementsByTagName("*").length; i++) {
                    var b = document.getElementsByTagName("*")[i];
                    if (b.getAttribute("name") !== null && b.getAttribute("name") !== undefined) {
                        a[b.getAttribute("name")] = b;
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
    XHLoad: function (filename) {
        var type, filename, a, b;
        a = new XMLHttpRequest();
        if (typeof filename !== "undefined") {
            a.onreadystatechange = function () {
                if (a.readyState === 4) {
                    if (a.status === 200 || a.status == 0) {
                        b = a.responseText;
                        return b;
                    } else {
                        return a.status;
                    }
                }
            }
            a.open("GET", filename, false);
            a.send(null);
        }
    },
    CreatElement: function (a, obj) {
        var a, obj;
        console.log(a);
        var d;
        if (a.indexOf(".") > -1 || a.indexOf("#") > -1) {
            if (a.indexOf(".") > -1) {
                var b = a.substring(a.indexOf(".") + 1);
                var e = a.substring(0, a.indexOf("."));
                d = document.createElement(e);
                d.className = b;
                document.body.appendChild(d);
            }

            if (typeof obj !== "undefined") {
                if (typeof obj.Style !== "undefined") {
                    for (e in obj.Style) {
                        d.style[e] = obj.Style[e];
                    }
                }
                if (typeof obj.On !== "undefined") {
                    for (e in obj.On) {
                        var f = e.toLowerCase();
                        d.addEventListener(f, obj.On[e]);
                    }
                }
                if (typeof obj.Text !== "undefined") {
                    d.innerText = obj.Text;
                }
            }
            return d;
        } else {
            
        }

    }
};

var Toast = function (Text, Duration, TextColor, BackgroundColor) {
    this.text = Text;
    this.duration = Duration * 1000;
    this.textColor = TextColor;
    this.backgroundColor = BackgroundColor;
    this.Run = function () {
        var a = document.createElement("div");
        a.className = 'Toast-Container';
        var b = document.createElement("span");
        b.className = 'Toast-Text';
        b.innerHTML = this.text;
        b.style.color = this.textColor;
        b.style.background = this.backgroundColor;
        b.style.animation = 'Toast-Popup 1s ease';
        setTimeout(function () {
            b.style.opacity = '0';
            setTimeout(function () {
                a.remove();
                b.remove();
            }, 300);
        }, this.duration);
        a.appendChild(b);
        document.body.appendChild(a);
    }
}

void function _teJIE() {
    for (var i = 0; i < document.getElementsByTagName("interact").length; i++) {
        var a = document.getElementsByTagName('interact')[i];
        var b = {
            b1: a.getAttribute("animate"),
            b2: a.getAttribute("mousefollow"),
            b3: a.getAttribute("event"),
            b4: a.getAttribute("action")
        }
        if (b !== null) {
            if (b.b3 !== null) {
                if (b.b3 == 'click') {
                    a.onclick = new Function(b.b4);
                }
                if (b.b3 == 'hover') {
                    a.onmouseover = new Function(b.b4);
                    a.onmouseout = function () {
                        return false;
                    }
                }
            }
        }
    }
}();
var _EEjijeT;
var CTX;
var Canvas = {
    Create: function (w, h) {
        if (w == undefined || h == undefined) { w = 200; h = 200; }
        var a = document.createElement("canvas");
        a.width = w;
        a.height = h;
        a.className = 'g-canvas';
        _EEjijeT = a;
        document.body.appendChild(a);
        CTX = a.getContext("2d");
        return a;
        Height = a.w;
        Width = a.h;
    },
    Clear: function () {
        CTX.clearRect(0, 0, window.innerWidth, window.innerHeight);
    },
    BeginPath: function () {
        CTX.beginPath();
    },
    FillStyle: function (a) {
        if (typeof (a) == 'string') {
            CTX.fillStyle = a;
        }
        if (typeof (a) == 'object') {
            CTX.fillStyle = a;
        }
    },
    Background: function (color) {
        if (typeof (color) == 'string') {
            CTX.fillStyle = color;
            CTX.fillRect(0, 0, window.innerWidth, window.innerHeight);
        }
        else if (typeof (color) == 'object') {

        }
    },
    StrokeStyle: function (a) {
        if (typeof (a) == 'string') {
            CTX.strokeStyle = a;
        }
        if (typeof (a) == 'object') {
            CTX.strokeStyle = a;
        }
    },
    LineWidth: function (a) {
        CTX.lineWidth = a;
    },
    Rect: function (w, h, posX, posY) {
        var w, h, posX, posY;
        CTX.beginPath();
        CTX.rect(w, h, posX, posY);
    },
    Fill: function () {
        CTX.fill();
    },
    Stroke: function () {
        CTX.stroke();
    },
    DrawCircle: function (obj) {
        var obj;
        var properties = {
            x: undefined,
            y: undefined,
            Radius: undefined,
            Fill: undefined,
            Border: undefined,
            Event: undefined
        }
        if (typeof obj !== "undefined") {
            for (a in obj) {
                properties[a] = obj[a];
            }
            if (properties.x !== 'center' && properties.y !== 'center') {
                CTX.beginPath();
                CTX.strokeStyle = properties.Border;
                CTX.fillStyle = properties.Fill;
                CTX.arc(properties.x, properties.y, properties.Radius, 0, 2 * Math.PI);
                if (typeof properties.Border !== "undefined") {
                    CTX.stroke();
                }
                if (typeof properties.Fill !== "undefined") {
                    CTX.fill();
                }
            } else {
                CTX.beginPath();
                CTX.strokeStyle = properties.Border;
                CTX.fillStyle = properties.Fill;
                CTX.arc(_EEjijeT.width / 2 , _EEjijeT.height / 2, properties.Radius, 0, 2 * Math.PI);
                if (typeof properties.Border !== "undefined") {
                    CTX.stroke();
                }
                if (typeof properties.Fill !== "undefined") {
                    CTX.fill();
                }
                console.log(properties);
            }
        }
    },
    DrawLine: function (obj) {
        var obj;
        var properties = {
            StartX: undefined,
            StartY: undefined,
            EndX: undefined,
            EndY: undefined,
            LineWidth: undefined,
            LineCap: undefined,
            Color: undefined
        }
        for (a in obj) {
            properties[a] = obj[a];
        }
        console.log(properties);
    }
}

var Colors = {
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
        return 'rgb(' + r + ', ' + g + ', ' + b +')';
    }
}

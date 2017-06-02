webpackJsonp([1,4],{

/***/ 286:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 286;


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(295);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_alert_bar_alert_bar_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_alert_bar_alert_bar_options__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(alert) {
        this.alert = alert;
        this.title = "Title";
        this.body = "Content Body";
        this.options = new __WEBPACK_IMPORTED_MODULE_2__ng2_alert_bar_alert_bar_options__["a" /* AlertBarOptions */]();
        this.color = "#449d44";
        this.availableColors = new Array("#449d44", "#d9534f", "#f0ad4e", "#5bc0de", "#977ffa", "#4c4034", "#eec9a4", "#ae030e", "#d8be7e", "#0a014d");
        this.textColors = new Array("#ffffff", "#000000");
        this.options.textPlacement = __WEBPACK_IMPORTED_MODULE_2__ng2_alert_bar_alert_bar_options__["c" /* TextPlacement */].left;
    }
    AppComponent.prototype.success = function () {
        this.alert.success(this.title, this.body);
    };
    AppComponent.prototype.error = function () {
        this.alert.error(this.title, this.body);
    };
    AppComponent.prototype.warning = function () {
        this.alert.warning(this.title, this.body);
    };
    AppComponent.prototype.info = function () {
        this.alert.info(this.title, this.body);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(381),
        styles: [__webpack_require__(351)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng2_alert_bar_alert_bar_service__["a" /* AlertBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng2_alert_bar_alert_bar_service__["a" /* AlertBar */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng2_alert_bar_alert_bar_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_color_picker__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(293);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng2_alert_bar_alert_bar_module__["a" /* AlertBarModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_color_picker__["a" /* ColorPickerModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_bar_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertBarComponent; });
/* unused harmony export Item */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertBarComponent = (function () {
    function AlertBarComponent(service, renderer) {
        this.service = service;
        this.renderer = renderer;
        this.options = new __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__["a" /* AlertBarOptions */]();
        this.items = new Array();
        this.initFunctions();
    }
    AlertBarComponent.prototype.initFunctions = function () {
        var _this = this;
        this.service.open.subscribe(function (data) {
            _this.title = data.title;
            _this.body = data.body;
            var item = new Item();
            item.title = data.title;
            item.body = data.body;
            item.position = _this.items.length * 30 + "px";
            if (data.type == __WEBPACK_IMPORTED_MODULE_1__alert_bar_service__["b" /* Type */].success) {
                item.color = _this.options.successColor;
            }
            else if (data.type == __WEBPACK_IMPORTED_MODULE_1__alert_bar_service__["b" /* Type */].error) {
                item.color = _this.options.errorColor;
            }
            else if (data.type == __WEBPACK_IMPORTED_MODULE_1__alert_bar_service__["b" /* Type */].warning) {
                item.color = _this.options.warningColor;
            }
            else if (data.type == __WEBPACK_IMPORTED_MODULE_1__alert_bar_service__["b" /* Type */].info) {
                item.color = _this.options.infoColor;
            }
            if (_this.options.placement == __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__["b" /* Placement */].bottom) {
                _this.items.unshift(item);
            }
            else {
                _this.items.push(item);
            }
            var id = "alert_item_" + _this.items.indexOf(item, 0);
            if (!_this.options.noTimeout) {
                setTimeout(function () {
                    _this.closeWithElement(document.getElementById(id), _this.items.indexOf(item, 0));
                }, _this.options.duration);
            }
        });
    };
    AlertBarComponent.prototype.getContainerStyle = function () {
        var myStyles = {};
        if (this.options.placement == __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__["b" /* Placement */].bottom) {
            myStyles = {
                'bottom': '0px'
            };
        }
        else {
            myStyles = {
                'top': '0px'
            };
        }
        return myStyles;
    };
    AlertBarComponent.prototype.getItemStyles = function (item) {
        var myStyles = {
            'bottom': item.position,
            'background': item.color,
            'color': this.options.innerColor,
            'text-align': this.options.textPlacement == __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__["c" /* TextPlacement */].left ? 'left' : 'right'
        };
        return myStyles;
    };
    AlertBarComponent.prototype.getTextStyle = function () {
        var style = {};
        if (this.options.textPlacement == __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__["c" /* TextPlacement */].right) {
            style = {
                'right': '5px'
            };
        }
        else {
            if (this.options.showClose) {
                style = {
                    'left': '20px'
                };
            }
            else {
                style = {
                    left: '10px'
                };
            }
        }
        return style;
    };
    AlertBarComponent.prototype.closeAlert = function (event, item) {
        this.closeWithElement(event.srcElement.parentNode, this.items.indexOf(item, 0));
    };
    AlertBarComponent.prototype.closeWithElement = function (element, index) {
        var _this = this;
        if (index > -1) {
            this.renderer.setElementStyle(element, 'opacity', "0");
            setTimeout(function () {
                if (index > -1) {
                    _this.items.splice(index, 1);
                }
            }, 300);
        }
    };
    AlertBarComponent.prototype.tapClose = function (event, item) {
        if (this.options.closeOnTap) {
            this.closeWithElement(event.srcElement, this.items.indexOf(item, 0));
        }
    };
    return AlertBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object)
], AlertBarComponent.prototype, "container", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _b || Object)
], AlertBarComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('text'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _c || Object)
], AlertBarComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__["a" /* AlertBarOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_bar_options__["a" /* AlertBarOptions */]) === "function" && _d || Object)
], AlertBarComponent.prototype, "options", void 0);
AlertBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'alert-bar',
        template: __webpack_require__(382),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__alert_bar_service__["a" /* AlertBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__alert_bar_service__["a" /* AlertBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer */]) === "function" && _f || Object])
], AlertBarComponent);

var Item = (function () {
    function Item() {
    }
    return Item;
}());

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=alert-bar.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_bar_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_bar_component__ = __webpack_require__(296);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertBarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertBarModule = AlertBarModule_1 = (function () {
    function AlertBarModule() {
    }
    AlertBarModule.forRoot = function () {
        return {
            ngModule: AlertBarModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__alert_bar_service__["a" /* AlertBar */]]
        };
    };
    return AlertBarModule;
}());
AlertBarModule = AlertBarModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__alert_bar_component__["a" /* AlertBarComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__alert_bar_service__["a" /* AlertBar */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__alert_bar_component__["a" /* AlertBarComponent */]
        ]
    })
], AlertBarModule);

var AlertBarModule_1;
//# sourceMappingURL=alert-bar.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, "/*\r\n * Globals\r\n */\r\n\r\n/* Links */\r\na,\r\na:focus,\r\na:hover {\r\n  color: #fff;\r\n}\r\n\r\n.text-placement-picker {\r\n  width:40%!important;\r\n  display:inline-block!important;\r\n  margin-top: 4px;\r\n}\r\n\r\n.placement-picker {\r\n    width: 80%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.text-container {\r\n    border: 1px solid;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    padding-top: 10px;\r\n    padding-left: 30px;\r\n}\r\n\r\n.checkbox {\r\n      margin-top: 30px;\r\n}\r\n\r\n.colors-container {\r\n      margin-bottom: 15px;\r\n}\r\n\r\n/* Custom default button */\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus {\r\n  color: #333;\r\n  text-shadow: none; /* Prevent inheritance from `body` */\r\n  background-color: #fff;\r\n  border: .05rem solid #fff;\r\n}\r\n\r\n/* Extra markup and styles for table-esque vertical and horizontal centering */\r\n.site-wrapper {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%; /* For at least Firefox */\r\n  min-height: 100%;\r\n  box-shadow: inset 0 0 5rem rgba(0,0,0,.5);\r\n}\r\n.site-wrapper-inner {\r\n  display: table-cell;\r\n  vertical-align: top;\r\n}\r\n.cover-container {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n/* Padding for spacing */\r\n.inner {\r\n  padding: 2rem;\r\n}\r\n\r\n\r\n/*\r\n * Header\r\n */\r\n\r\n.masthead {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.masthead-brand {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.nav-masthead {\r\n    margin-top:20px;\r\n}\r\n\r\n.nav-masthead .nav-link {\r\n  padding: .25rem 0;\r\n  font-weight: bold;\r\n  color: rgba(255,255,255,.5);\r\n  background-color: transparent;\r\n  border-bottom: .25rem solid transparent;\r\n}\r\n\r\n.nav-masthead .nav-link:hover,\r\n.nav-masthead .nav-link:focus {\r\n  border-bottom-color: rgba(255,255,255,.25);\r\n}\r\n\r\n.nav-masthead .nav-link + .nav-link {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.nav-masthead .active {\r\n  color: #fff;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  .masthead-brand {\r\n    float: left;\r\n  }\r\n  .nav-masthead {\r\n    float: right;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Cover\r\n */\r\n\r\n.cover {\r\n  padding: 0 1.5rem;\r\n}\r\n.cover .btn-lg {\r\n  padding: .75rem 1.25rem;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\n.mastfoot {\r\n  color: rgba(255,255,255,.5);\r\n}\r\n\r\n\r\n/*\r\n * Affix and center\r\n */\r\n\r\n@media (min-width: 40em) {\r\n  /* Pull out the header and footer */\r\n  .masthead {\r\n    position: fixed;\r\n    top: 0;\r\n  }\r\n  .mastfoot {\r\n    position: fixed;\r\n    bottom: 0;\r\n  }\r\n  /* Start the vertical centering */\r\n  .site-wrapper-inner {\r\n    vertical-align: middle;\r\n  }\r\n  /* Handle the widths */\r\n  .masthead,\r\n  .mastfoot,\r\n  .cover-container {\r\n    width: 100%; /* Must be percentage or pixels for horizontal alignment */\r\n  }\r\n}\r\n\r\n@media (min-width: 62em) {\r\n  .masthead,\r\n  .mastfoot,\r\n  .cover-container {\r\n    width: 50rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, ".ng2-alert-bar {\r\n    /*background: #d9e155;*/\r\n    height: 30px;\r\n    z-index: 10001;\r\n    transition: opacity 0.3s ease-in-out;\r\n    opacity: 1;\r\n    \r\n    /*background: red;*/\r\n}\r\n\r\n.alert-bar-container {\r\n    z-index: 10000;\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    display:block;\r\n}\r\n\r\n@-webkit-keyframes AlertAnimation {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  } \r\n}\r\n\r\n@keyframes AlertAnimation {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  } \r\n}\r\n\r\n.alert-animation {\r\n  -webkit-animation: AlertAnimation 0.3s;\r\n          animation: AlertAnimation 0.3s;\r\n}\r\n\r\n.content-text {\r\n    position: relative;\r\n    top: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.close-alert {\r\n    float: left;\r\n    position: relative;\r\n    top: 5px;\r\n    left: 10px;\r\n    font-size: 17px;\r\n    line-height: 17px;\r\n    -webkit-transform: scale(1.4, 1.0);\r\n    transform: scale(1.4,1.0);\r\n    text-align: center;\r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 104,
	"./af.js": 104,
	"./ar": 111,
	"./ar-dz": 105,
	"./ar-dz.js": 105,
	"./ar-kw": 106,
	"./ar-kw.js": 106,
	"./ar-ly": 107,
	"./ar-ly.js": 107,
	"./ar-ma": 108,
	"./ar-ma.js": 108,
	"./ar-sa": 109,
	"./ar-sa.js": 109,
	"./ar-tn": 110,
	"./ar-tn.js": 110,
	"./ar.js": 111,
	"./az": 112,
	"./az.js": 112,
	"./be": 113,
	"./be.js": 113,
	"./bg": 114,
	"./bg.js": 114,
	"./bn": 115,
	"./bn.js": 115,
	"./bo": 116,
	"./bo.js": 116,
	"./br": 117,
	"./br.js": 117,
	"./bs": 118,
	"./bs.js": 118,
	"./ca": 119,
	"./ca.js": 119,
	"./cs": 120,
	"./cs.js": 120,
	"./cv": 121,
	"./cv.js": 121,
	"./cy": 122,
	"./cy.js": 122,
	"./da": 123,
	"./da.js": 123,
	"./de": 126,
	"./de-at": 124,
	"./de-at.js": 124,
	"./de-ch": 125,
	"./de-ch.js": 125,
	"./de.js": 126,
	"./dv": 127,
	"./dv.js": 127,
	"./el": 128,
	"./el.js": 128,
	"./en-au": 129,
	"./en-au.js": 129,
	"./en-ca": 130,
	"./en-ca.js": 130,
	"./en-gb": 131,
	"./en-gb.js": 131,
	"./en-ie": 132,
	"./en-ie.js": 132,
	"./en-nz": 133,
	"./en-nz.js": 133,
	"./eo": 134,
	"./eo.js": 134,
	"./es": 136,
	"./es-do": 135,
	"./es-do.js": 135,
	"./es.js": 136,
	"./et": 137,
	"./et.js": 137,
	"./eu": 138,
	"./eu.js": 138,
	"./fa": 139,
	"./fa.js": 139,
	"./fi": 140,
	"./fi.js": 140,
	"./fo": 141,
	"./fo.js": 141,
	"./fr": 144,
	"./fr-ca": 142,
	"./fr-ca.js": 142,
	"./fr-ch": 143,
	"./fr-ch.js": 143,
	"./fr.js": 144,
	"./fy": 145,
	"./fy.js": 145,
	"./gd": 146,
	"./gd.js": 146,
	"./gl": 147,
	"./gl.js": 147,
	"./gom-latn": 148,
	"./gom-latn.js": 148,
	"./he": 149,
	"./he.js": 149,
	"./hi": 150,
	"./hi.js": 150,
	"./hr": 151,
	"./hr.js": 151,
	"./hu": 152,
	"./hu.js": 152,
	"./hy-am": 153,
	"./hy-am.js": 153,
	"./id": 154,
	"./id.js": 154,
	"./is": 155,
	"./is.js": 155,
	"./it": 156,
	"./it.js": 156,
	"./ja": 157,
	"./ja.js": 157,
	"./jv": 158,
	"./jv.js": 158,
	"./ka": 159,
	"./ka.js": 159,
	"./kk": 160,
	"./kk.js": 160,
	"./km": 161,
	"./km.js": 161,
	"./kn": 162,
	"./kn.js": 162,
	"./ko": 163,
	"./ko.js": 163,
	"./ky": 164,
	"./ky.js": 164,
	"./lb": 165,
	"./lb.js": 165,
	"./lo": 166,
	"./lo.js": 166,
	"./lt": 167,
	"./lt.js": 167,
	"./lv": 168,
	"./lv.js": 168,
	"./me": 169,
	"./me.js": 169,
	"./mi": 170,
	"./mi.js": 170,
	"./mk": 171,
	"./mk.js": 171,
	"./ml": 172,
	"./ml.js": 172,
	"./mr": 173,
	"./mr.js": 173,
	"./ms": 175,
	"./ms-my": 174,
	"./ms-my.js": 174,
	"./ms.js": 175,
	"./my": 176,
	"./my.js": 176,
	"./nb": 177,
	"./nb.js": 177,
	"./ne": 178,
	"./ne.js": 178,
	"./nl": 180,
	"./nl-be": 179,
	"./nl-be.js": 179,
	"./nl.js": 180,
	"./nn": 181,
	"./nn.js": 181,
	"./pa-in": 182,
	"./pa-in.js": 182,
	"./pl": 183,
	"./pl.js": 183,
	"./pt": 185,
	"./pt-br": 184,
	"./pt-br.js": 184,
	"./pt.js": 185,
	"./ro": 186,
	"./ro.js": 186,
	"./ru": 187,
	"./ru.js": 187,
	"./sd": 188,
	"./sd.js": 188,
	"./se": 189,
	"./se.js": 189,
	"./si": 190,
	"./si.js": 190,
	"./sk": 191,
	"./sk.js": 191,
	"./sl": 192,
	"./sl.js": 192,
	"./sq": 193,
	"./sq.js": 193,
	"./sr": 195,
	"./sr-cyrl": 194,
	"./sr-cyrl.js": 194,
	"./sr.js": 195,
	"./ss": 196,
	"./ss.js": 196,
	"./sv": 197,
	"./sv.js": 197,
	"./sw": 198,
	"./sw.js": 198,
	"./ta": 199,
	"./ta.js": 199,
	"./te": 200,
	"./te.js": 200,
	"./tet": 201,
	"./tet.js": 201,
	"./th": 202,
	"./th.js": 202,
	"./tl-ph": 203,
	"./tl-ph.js": 203,
	"./tlh": 204,
	"./tlh.js": 204,
	"./tr": 205,
	"./tr.js": 205,
	"./tzl": 206,
	"./tzl.js": 206,
	"./tzm": 208,
	"./tzm-latn": 207,
	"./tzm-latn.js": 207,
	"./tzm.js": 208,
	"./uk": 209,
	"./uk.js": 209,
	"./ur": 210,
	"./ur.js": 210,
	"./uz": 212,
	"./uz-latn": 211,
	"./uz-latn.js": 211,
	"./uz.js": 212,
	"./vi": 213,
	"./vi.js": 213,
	"./x-pseudo": 214,
	"./x-pseudo.js": 214,
	"./yo": 215,
	"./yo.js": 215,
	"./zh-cn": 216,
	"./zh-cn.js": 216,
	"./zh-hk": 217,
	"./zh-hk.js": 217,
	"./zh-tw": 218,
	"./zh-tw.js": 218
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 353;


/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\">\n\n    <div class=\"site-wrapper-inner\">\n\n        <div class=\"cover-container\">\n\n            <div class=\"masthead clearfix\">\n                <div class=\"inner\">\n                    <h3 class=\"masthead-brand\">ng2-alert-bar</h3>\n                    <nav class=\"nav nav-masthead\">\n                        <a class=\"nav-link\" target=\"_blank\" href=\"https://www.npmjs.com/package/ng2-alert-bar\">npm</a>\n                        <a class=\"nav-link\" target=\"_blank\" href=\"https://github.com/nedimhozic/ng2-alert-bar\">GitHub</a>\n                        <a class=\"nav-link\" target=\"_blank\" href=\"https://nedimhozic.com/\">Nedim Hozić</a>\n                    </nav>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"cover-container\">\n            <p class=\"lead\">Demo</p>\n            <div class=\"form-group\">\n                <label for=\"title\">Title</label>\n                <input class=\"form-control\" type=\"text\" name=\"title\" [(ngModel)]=\"title\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"body\">Body</label>\n                <input class=\"form-control\" type=\"text\" name=\"body\" [(ngModel)]=\"body\" />\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group row\">\n                    <label for=\"timeout\">Timeout</label>\n                    <input [disabled]=\"options.noTimeout\" min=\"0\" class=\"form-control\" type=\"number\" name=\"timeout\" [(ngModel)]=\"options.duration\" />\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group row\">\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" [(ngModel)]=\"options.noTimeout\">No Timeout</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group row\">\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" [(ngModel)]=\"options.showClose\">Show X</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group row\">\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" [(ngModel)]=\"options.closeOnTap\">Close On Tap</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"form-group row\">\n                    <label >Position:</label>\n                    <select class=\"form-control placement-picker\" [(ngModel)]=\"options.placement\">\n                                <option value=\"0\">Bottom</option>\n                                <option value=\"1\">Top</option>\n                            </select>\n                </div>\n            </div>\n            <div class=\"col-md-7 colors-container\">\n                <div class=\"row\"><span>Text</span></div>\n                <div class=\"row text-container\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group row\">\n                            <color-picker [(ngModel)]=\"options.innerColor\" [availableColors]=\"textColors\"></color-picker><span> Color</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-9\">\n                        <div class=\"form-group row\">\n                            <label>Position:</label>\n                            <select class=\"form-control text-placement-picker\" [(ngModel)]=\"options.textPlacement\">\n                                <option value=\"0\">Left</option>\n                                <option value=\"1\">Right</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 colors-container\">\n                <div class=\"row\"><span>Colors</span></div>\n                <div class=\"row text-container\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group row\">\n                            <color-picker [(ngModel)]=\"options.successColor\" [availableColors]=\"availableColors\"></color-picker><span> Success</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group row\">\n                            <color-picker [(ngModel)]=\"options.errorColor\" [availableColors]=\"availableColors\"></color-picker><span> Error</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group row\">\n                            <color-picker [(ngModel)]=\"options.warningColor\" [availableColors]=\"availableColors\"></color-picker><span> Warning</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group row\">\n                            <color-picker [(ngModel)]=\"options.infoColor\" [availableColors]=\"availableColors\"></color-picker><span> Info</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <button (click)=\"success()\" class=\"btn btn-success\">Success</button>\n                    <button (click)=\"error()\" class=\"btn btn-danger\">Error</button>\n                    <button (click)=\"warning()\" class=\"btn btn-warning\">Warning</button>\n                    <button (click)=\"info()\" class=\"btn btn-info\">Info</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n<alert-bar [options]=\"options\"></alert-bar>"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"getContainerStyle()\" class=\"alert-bar-container\">\r\n    <div id=\"alert_item_{{items.indexOf(item, 0)}}\" *ngFor=\"let item of items\" [ngStyle]=\"getItemStyles(item)\" class=\"ng2-alert-bar alert-animation\" (click)=\"tapClose($event, item)\">\r\n        <span #close [hidden]=\"!options.showClose\" class=\"close-alert\" (click)=\"closeAlert($event, item)\">x</span>\r\n        <span #text [ngStyle]=\"getTextStyle()\" class=\"content-text\"><strong>{{item.title}}</strong> {{item.body}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Type; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertBar = (function () {
    function AlertBar() {
        this.open = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    AlertBar.prototype.success = function (title, body) {
        this.open.next({ type: Type.success, title: title, body: body });
    };
    AlertBar.prototype.error = function (title, body) {
        this.open.next({ type: Type.error, title: title, body: body });
    };
    AlertBar.prototype.warning = function (title, body) {
        this.open.next({ type: Type.warning, title: title, body: body });
    };
    AlertBar.prototype.info = function (title, body) {
        this.open.next({ type: Type.info, title: title, body: body });
    };
    return AlertBar;
}());
AlertBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AlertBar);

var Type;
(function (Type) {
    Type[Type["success"] = 0] = "success";
    Type[Type["error"] = 1] = "error";
    Type[Type["warning"] = 2] = "warning";
    Type[Type["info"] = 3] = "info";
})(Type || (Type = {}));
//# sourceMappingURL=alert-bar.service.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(287);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertBarOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Placement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TextPlacement; });
var AlertBarOptions = (function () {
    function AlertBarOptions(fields) {
        this.placement = Placement.bottom;
        this.duration = 5000;
        this.successColor = "#449d44";
        this.errorColor = "#d9534f";
        this.warningColor = "#f0ad4e";
        this.infoColor = "#5bc0de";
        this.showClose = true;
        this.closeOnTap = false;
        this.noTimeout = false;
        this.textPlacement = TextPlacement.right;
        this.innerColor = "#ffffff";
        if (fields)
            Object.assign(this, fields);
    }
    return AlertBarOptions;
}());

var Placement;
(function (Placement) {
    Placement[Placement["bottom"] = 0] = "bottom";
    Placement[Placement["top"] = 1] = "top";
})(Placement || (Placement = {}));
var TextPlacement;
(function (TextPlacement) {
    TextPlacement[TextPlacement["left"] = 0] = "left";
    TextPlacement[TextPlacement["right"] = 1] = "right";
})(TextPlacement || (TextPlacement = {}));
//# sourceMappingURL=alert-bar.options.js.map

/***/ })

},[421]);
//# sourceMappingURL=main.bundle.js.map
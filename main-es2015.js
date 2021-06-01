(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-level/game-level.component */ "./src/app/game-level/game-level.component.ts");
/* harmony import */ var _login_check_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-check.guard */ "./src/app/login-check.guard.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");







const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'game',
        component: _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_2__["GameLevelComponent"],
        canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_3__["LoginCheckGuard"]],
    },
    {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_3__["LoginCheckGuard"]],
    },
    {
        path: 'register',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_3__["LoginCheckGuard"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'game';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-level/game-level.component */ "./src/app/game-level/game-level.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _game_level_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-level/menu/menu.component */ "./src/app/game-level/menu/menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _game_level_finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game-level/finish-window/finish-window.component */ "./src/app/game-level/finish-window/finish-window.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _game_level_game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game-level/game-loads/game-loads.component */ "./src/app/game-level/game-loads/game-loads.component.ts");
/* harmony import */ var _game_level_size_choose_size_choose_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game-level/size-choose/size-choose.component */ "./src/app/game-level/size-choose/size-choose.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_4__["GameLevelComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
        _game_level_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _game_level_finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_11__["FinishWindowComponent"],
        _game_level_game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_14__["GameLoadsComponent"],
        _game_level_size_choose_size_choose_component__WEBPACK_IMPORTED_MODULE_15__["SizeChooseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_4__["GameLevelComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
                    _game_level_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _game_level_finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_11__["FinishWindowComponent"],
                    _game_level_game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_14__["GameLoadsComponent"],
                    _game_level_size_choose_size_choose_component__WEBPACK_IMPORTED_MODULE_15__["SizeChooseComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/game-level/finish-window/finish-window.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/game-level/finish-window/finish-window.component.ts ***!
  \*********************************************************************/
/*! exports provided: FinishWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishWindowComponent", function() { return FinishWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _scripts_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/draw */ "./src/app/game-level/scripts/draw.ts");
/* harmony import */ var src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/game-save-load.service */ "./src/app/services/game-save-load.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function FinishWindowComponent_div_0_mat_card_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in to be placed in leaderboard!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { hightlighted: a0 }; };
function FinishWindowComponent_div_0_mat_card_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r38.currentResultId == result_r40._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r41 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r40.user.login, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r40.time, "s ");
} }
function FinishWindowComponent_div_0_mat_card_1_div_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u22EE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r43.currentResultId == result_r42._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r42.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r42.user.login, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r42.time, "s ");
} }
function FinishWindowComponent_div_0_mat_card_1_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinishWindowComponent_div_0_mat_card_1_div_4_ng_container_2_ng_container_1_Template, 11, 6, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r42 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", result_r42.index > 5);
} }
function FinishWindowComponent_div_0_mat_card_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinishWindowComponent_div_0_mat_card_1_div_4_div_1_Template, 7, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FinishWindowComponent_div_0_mat_card_1_div_4_ng_container_2_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const results_r37 = ctx.ngIf;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r36.getTop5Results(results_r37));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.getExactResultInfo(ctx_r36.currentResultId, results_r37));
} }
function FinishWindowComponent_div_0_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FinishWindowComponent_div_0_mat_card_1_span_3_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FinishWindowComponent_div_0_mat_card_1_div_4_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishWindowComponent_div_0_mat_card_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.restartLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start new level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your time is: ", ctx_r32.finishTime, " seconds!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r32.currentResultId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r32.resultsTable$));
} }
function FinishWindowComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinishWindowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinishWindowComponent_div_0_mat_card_1_Template, 8, 5, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FinishWindowComponent_div_0_ng_template_2_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.isLoaderDisplayed)("ngIfElse", _r33);
} }
class FinishWindowComponent {
    constructor(gameSavesService, loginService) {
        this.gameSavesService = gameSavesService;
        this.loginService = loginService;
        this.startNewLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isModalDisplayed = false;
        this.isLoaderDisplayed = false;
        this.ngUnsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.levelFinishedEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            this.isModalDisplayed = true;
            this.isLoaderDisplayed = true;
            return this.loginService.isAuthorized();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((isAuthorized) => {
            return isAuthorized
                ? this.gameSavesService.saveLevelFinishStats(Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["getLevelStats"])(), this.loginService.currentUserId)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ resultId: null });
        }))
            .subscribe(({ resultId }) => {
            this.isLoaderDisplayed = false;
            this.currentResultId = resultId;
            this.resultsTable$ = this.gameSavesService.getLevelTableStats(Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["getLevelStats"])().size);
        });
    }
    ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
    restartLevel() {
        this.startNewLevel.emit(true);
        this.isModalDisplayed = false;
    }
    getTop5Results(results) {
        return results.slice(0, 5);
    }
    getExactResultInfo(id, results) {
        let resultIndex = 0;
        return Object.assign(Object.assign({}, results.find((element, index) => element._id === id && (resultIndex = index + 1))), { index: resultIndex });
    }
}
FinishWindowComponent.ɵfac = function FinishWindowComponent_Factory(t) { return new (t || FinishWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__["GameSaveLoadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
FinishWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinishWindowComponent, selectors: [["app-finish-window"]], inputs: { levelFinishedEmitter: "levelFinishedEmitter", finishTime: "finishTime" }, outputs: { startNewLevel: "startNewLevel" }, decls: 1, vars: 1, consts: [["class", "modal-background", 4, "ngIf"], [1, "modal-background"], ["class", "modal-itself", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "modal-itself"], [1, "modal-text", "time-score"], ["class", "log-in", 4, "ngIf"], ["class", "score-table", 4, "ngIf"], ["mat-raised-button", "", 1, "modal-button", 3, "click"], [1, "log-in"], [1, "score-table"], ["class", "modal-text table-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "modal-text", "table-item", 3, "ngClass"], [1, "index"], [1, "user-login"], [1, "modal-text", "table-item"], [1, "loader"]], template: function FinishWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FinishWindowComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalDisplayed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #a4a4a4;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: #0f5;\n  text-shadow: 1px solid #000;\n}\n\n.time-score[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 12px;\n}\n\n.log-in[_ngcontent-%COMP%] {\n  color: #f00;\n  background-color: #0006;\n  padding: 0 4px;\n  border-radius: 2px;\n}\n\n.table-item[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n}\n\n.table-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.table-item[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.table-item[_ngcontent-%COMP%]   .user-login[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-right: auto;\n}\n\n.table-item.hightlighted[_ngcontent-%COMP%] {\n  background-color: #0004;\n  border-radius: 4px;\n}\n\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9maW5pc2gtd2luZG93L0M6XFxVc2Vyc1xca292b3NcXERvY3VtZW50c1xccHJvamVjdHNcXGdhbWUvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxtb2RhbC13aXRoLWJsdXIuc2NzcyIsInNyYy9hcHAvZ2FtZS1sZXZlbC9maW5pc2gtd2luZG93L2ZpbmlzaC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUtbGV2ZWwvZmluaXNoLXdpbmRvdy9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxnYW1lLWxldmVsXFxmaW5pc2gtd2luZG93XFxmaW5pc2gtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQ0FGOztBQ2hDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRG1DRjs7QUNoQ0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURtQ0Y7O0FDaENBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QURtQ0Y7O0FDbENFO0VBQ0UsY0FBQTtBRG9DSjs7QUNsQ0U7RUFDRSxXQUFBO0FEb0NKOztBQ2xDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QURvQ0o7O0FDbENFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBRG9DSjs7QUNoQ0E7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRG1DRjs7QUNoQ0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7QURtQ0Y7O0FDakNBO0VBQ0U7SUFDRSx1QkFBQTtFRG9DRjtFQ2xDQTtJQUNFLHlCQUFBO0VEb0NGO0FBQ0Y7O0FDbENBO0VBQ0U7SUFDRSx1QkFBQTtFRG9DRjtFQ2xDQTtJQUNFLHlCQUFBO0VEb0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nYW1lLWxldmVsL2ZpbmlzaC13aW5kb3cvZmluaXNoLXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcblxyXG4ubW9kYWwtaXRzZWxmIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAubW9kYWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YTRhNDtcclxufVxyXG5cclxuLm1vZGFsLXRleHQge1xyXG4gIGNvbG9yOiAjMGY1O1xyXG4gIHRleHQtc2hhZG93OiAxcHggc29saWQgIzAwMDtcclxufVxyXG4iLCIubW9kYWwtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5tb2RhbC1pdHNlbGYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tb2RhbC1pdHNlbGYgLm1vZGFsLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YTRhNDtcbn1cblxuLm1vZGFsLXRleHQge1xuICBjb2xvcjogIzBmNTtcbiAgdGV4dC1zaGFkb3c6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4udGltZS1zY29yZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmxvZy1pbiB7XG4gIGNvbG9yOiAjZjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNjtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRhYmxlLWl0ZW0ge1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGFibGUtaXRlbSBzcGFuIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4udGFibGUtaXRlbSAuaW5kZXgge1xuICB3aWR0aDogNDBweDtcbn1cbi50YWJsZS1pdGVtIC51c2VyLWxvZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi50YWJsZS1pdGVtLmhpZ2h0bGlnaHRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sb2FkZXIsXG4ubG9hZGVyOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xufVxuXG4ubG9hZGVyIHtcbiAgbWFyZ2luOiA2MHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgYm9yZGVyLXRvcDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmlnaHQ6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItbGVmdDogMS4xZW0gc29saWQgI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBhbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDgge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkOCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vYXBwL3NoYXJlZC9zdHlsZXMvbW9kYWwtd2l0aC1ibHVyLnNjc3MnO1xyXG5cclxuLnRpbWUtc2NvcmUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4ubG9nLWluIHtcclxuICBjb2xvcjogI2YwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNjtcclxuICBwYWRkaW5nOiAwIDRweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1pdGVtIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBzcGFuIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuICAuaW5kZXgge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG4gIC51c2VyLWxvZ2luIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAmLmhpZ2h0bGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2FkZXIsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTBlbTtcclxuICBoZWlnaHQ6IDEwZW07XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgYm9yZGVyLXRvcDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItbGVmdDogMS4xZW0gc29saWQgI2ZmZmZmZjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDgge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZDgge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-finish-window',
                templateUrl: './finish-window.component.html',
                styleUrls: ['./finish-window.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__["GameSaveLoadService"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, { levelFinishedEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], finishTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startNewLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/game-level/game-level.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-level/game-level.component.ts ***!
  \****************************************************/
/*! exports provided: GameLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevelComponent", function() { return GameLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _scripts_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/draw */ "./src/app/game-level/scripts/draw.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finish-window/finish-window.component */ "./src/app/game-level/finish-window/finish-window.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/game-level/menu/menu.component.ts");
/* harmony import */ var _game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game-loads/game-loads.component */ "./src/app/game-level/game-loads/game-loads.component.ts");
/* harmony import */ var _size_choose_size_choose_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./size-choose/size-choose.component */ "./src/app/game-level/size-choose/size-choose.component.ts");













function GameLevelComponent_app_menu_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openCloseMenu", function GameLevelComponent_app_menu_17_Template_app_menu_openCloseMenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openCloseMenu($event); })("startLevel", function GameLevelComponent_app_menu_17_Template_app_menu_startLevel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.startLevel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAuthorizedUser", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.isAuthorizedUser$));
} }
function GameLevelComponent_app_game_loads_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-game-loads", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openCloseMenu", function GameLevelComponent_app_game_loads_18_Template_app_game_loads_openCloseMenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openCloseMenu($event); })("startLevel", function GameLevelComponent_app_game_loads_18_Template_app_game_loads_startLevel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.startLevel(null, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameLevelComponent_app_size_choose_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-size-choose", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openCloseMenu", function GameLevelComponent_app_size_choose_19_Template_app_size_choose_openCloseMenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openCloseMenu($event); })("beginLevel", function GameLevelComponent_app_size_choose_19_Template_app_size_choose_beginLevel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.generateLevel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GameLevelComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.levelFinishedEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentMenuId = -1;
        this.ESCBtnPressHandler = (event) => {
            if (event.keyCode === 27 && !this.isLevelFinished) {
                this.openCloseMenu();
            }
        };
    }
    ngOnInit() {
        this.startLevel(true);
        this.initRestartKeyListener();
        document.addEventListener('keydown', this.ESCBtnPressHandler);
        this.isAuthorizedUser$ = this.loginService.isAuthorized().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    ngOnDestroy() {
        document.removeEventListener('keydown', this.ESCBtnPressHandler);
    }
    get levelTime() {
        return (_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["levelTimer"].time / 1000).toFixed(1);
    }
    get animationData() {
        return _scripts_draw__WEBPACK_IMPORTED_MODULE_3__["animationData"];
    }
    get fps() {
        return _scripts_draw__WEBPACK_IMPORTED_MODULE_3__["animationData"].fps ^ 0;
    }
    openCloseMenu(menuId = null) {
        if (this.currentMenuId == 2 && menuId != -1) {
            this.generateLevel();
            this.currentMenuId = -1;
        }
        else if (this.currentMenuId == -1) {
            ++this.currentMenuId;
        }
        else if (!menuId) {
            --this.currentMenuId;
        }
        else {
            this.currentMenuId = menuId;
        }
        if (this.currentMenuId == -1) {
            Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["startGameInterval"])();
        }
        else {
            Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["clearGameInterval"])();
        }
    }
    initRestartKeyListener() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 82 && !this.isLevelFinished) {
                this.startLevel(true);
            }
        });
    }
    startLevel(askLevelSize = false, { preloadData, size } = { preloadData: null, size: null }) {
        if (askLevelSize) {
            this.currentMenuId = 2;
            Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["clearGameInterval"])();
        }
        else {
            this.generateLevel({ preloadData, size, textureId: null });
        }
    }
    generateLevel({ preloadData, size, textureId } = { preloadData: null, size: null, textureId: null }) {
        this.isLevelFinished = false;
        clearInterval(this.interval);
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["startLevel"])(preloadData, size, textureId);
        this.interval = setInterval(() => {
            if (Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["getIsLevelFinished"])()) {
                clearInterval(this.interval);
                this.finishLevel();
                this.levelFinishedEmitter.next();
            }
        }, 100);
    }
    finishLevel() {
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["clearGameInterval"])();
        this.isLevelFinished = true;
    }
    moveForward() {
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerMoveForward"])();
    }
    moveBackward() {
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerMoveBack"])();
    }
    rotateLeft() {
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerRotateLeft"])();
    }
    rotateRight() {
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerRotateRight"])();
    }
    stopRotating() {
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerStopRotating"])();
    }
    stopMoving() {
        Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerStopMoving"])();
    }
}
GameLevelComponent.ɵfac = function GameLevelComponent_Factory(t) { return new (t || GameLevelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
GameLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameLevelComponent, selectors: [["app-game-level"]], decls: 26, vars: 7, consts: [["id", "canvas"], ["id", "canvasPlayWindow"], [1, "buttons-layer"], ["color", "primary", "mat-fab", "", "aria-label", "Example icon button with a menu icon", 1, "open-menu-button", 3, "click"], [1, "move-buttons"], [1, "button-pair-wrapper"], ["mat-flat-button", "", "id", "btn-top", 1, "control-button", 3, "touchstart", "touchend"], ["mat-flat-button", "", "id", "btn-right", 1, "control-button", 3, "touchstart", "touchend"], ["mat-flat-button", "", "id", "btn-left", 1, "control-button", 3, "touchstart", "touchend"], ["mat-flat-button", "", "id", "btn-bottom", 1, "control-button", 3, "touchstart", "touchend"], [1, "timer"], [1, "fps"], [3, "isAuthorizedUser", "openCloseMenu", "startLevel", 4, "ngIf"], [3, "openCloseMenu", "startLevel", 4, "ngIf"], [3, "openCloseMenu", "beginLevel", 4, "ngIf"], [3, "levelFinishedEmitter", "finishTime", "startNewLevel"], [1, "rotate-device"], ["aria-hidden", "false", "aria-label", "Example refresh icon"], [3, "isAuthorizedUser", "openCloseMenu", "startLevel"], [3, "openCloseMenu", "startLevel"], [3, "openCloseMenu", "beginLevel"]], template: function GameLevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameLevelComponent_Template_button_click_3_listener() { return ctx.openCloseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_8_listener() { return ctx.moveForward(); })("touchend", function GameLevelComponent_Template_button_touchend_8_listener() { return ctx.stopMoving(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_9_listener() { return ctx.rotateRight(); })("touchend", function GameLevelComponent_Template_button_touchend_9_listener() { return ctx.stopRotating(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_11_listener() { return ctx.rotateLeft(); })("touchend", function GameLevelComponent_Template_button_touchend_11_listener() { return ctx.stopRotating(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_12_listener() { return ctx.moveBackward(); })("touchend", function GameLevelComponent_Template_button_touchend_12_listener() { return ctx.stopMoving(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GameLevelComponent_app_menu_17_Template, 2, 3, "app-menu", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GameLevelComponent_app_game_loads_18_Template, 1, 0, "app-game-loads", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GameLevelComponent_app_size_choose_19_Template, 1, 0, "app-size-choose", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-finish-window", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("startNewLevel", function GameLevelComponent_Template_app_finish_window_startNewLevel_20_listener($event) { return ctx.startLevel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ROTATE YOUR DEVICE! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.levelTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.fps, " FPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuId == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuId == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("levelFinishedEmitter", ctx.levelFinishedEmitter.asObservable())("finishTime", ctx.levelTime);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_8__["FinishWindowComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_10__["GameLoadsComponent"], _size_choose_size_choose_component__WEBPACK_IMPORTED_MODULE_11__["SizeChooseComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  width: 15vw;\n  min-width: 250px;\n  position: absolute;\n}\n\n#canvasPlayWindow[_ngcontent-%COMP%] {\n  width: calc(100vw - (100vw - 100%));\n  height: calc(var(--vh, 1vh) * 100);\n}\n\n.timer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: aqua;\n  font-size: 16px;\n  font-weight: 400px;\n  padding: 5px;\n  background-color: #0002;\n  border-radius: 4px;\n}\n\n.fps[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  color: aqua;\n  font-size: 16px;\n  font-weight: 400px;\n  padding: 5px;\n  background-color: #0002;\n  border-radius: 4px;\n}\n\n.buttons-layer[_ngcontent-%COMP%], .rotate-device[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (orientation: portrait) {\n  .rotate-device[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100vw;\n    height: calc(var(--vh, 1vh) * 100);\n    background-color: #444447;\n    color: aqua;\n    font-size: 16px;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  #canvas[_ngcontent-%COMP%] {\n    right: 0;\n    max-width: 200px;\n    min-width: 170px;\n    width: 25vw;\n  }\n\n  .buttons-layer[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    width: 100vw;\n    height: calc(var(--vh, 1vh) * 100);\n    top: 0;\n    left: 0;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .open-menu-button[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    background-color: #0008;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 4vw;\n    bottom: 4vw;\n    width: 17vw;\n    height: 17vw;\n    border-radius: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    transform: rotate(45deg);\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%]   .button-pair-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 45%;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%] {\n    width: 45%;\n    height: 100%;\n    margin: 0;\n    border-radius: 10%;\n    background-color: #0008;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%]   .control-button.mat-flat-button[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxnYW1lLWxldmVsXFxnYW1lLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYW1lLWxldmVsL2dhbWUtbGV2ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQ0FBQTtFQUNBLGtDQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTs7RUFFRSxhQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLGtDQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLFFBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0dGOztFRERBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGtDQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7RUNJRjtFREZFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLHVCQUFBO0VDSUo7RURERTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSx3QkFBQTtFQ0dKO0VEREk7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQ0dOO0VEQUk7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0VDRU47RURETTtJQUNFLFlBQUE7RUNHUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1sZXZlbC9nYW1lLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNjYW52YXMge1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiNjYW52YXNQbGF5V2luZG93IHtcclxuICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG59XHJcblxyXG4udGltZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBjb2xvcjogYXF1YTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5mcHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IGFxdWE7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1sYXllcixcclxuLnJvdGF0ZS1kZXZpY2Uge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAucm90YXRlLWRldmljZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDc7XHJcbiAgICBjb2xvcjogYXF1YTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgI2NhbnZhcyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgfVxyXG4gIC5idXR0b25zLWxheWVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgLm9wZW4tbWVudS1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vdmUtYnV0dG9ucyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNHZ3O1xyXG4gICAgICBib3R0b206IDR2dztcclxuICAgICAgd2lkdGg6IDE3dnc7XHJcbiAgICAgIGhlaWdodDogMTd2dztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHJcbiAgICAgIC5idXR0b24tcGFpci13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRyb2wtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4O1xyXG4gICAgICAgICYubWF0LWZsYXQtYnV0dG9uIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNjYW52YXMge1xuICB3aWR0aDogMTV2dztcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jY2FudmFzUGxheVdpbmRvdyB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xufVxuXG4udGltZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGNvbG9yOiBhcXVhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZnBzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBjb2xvcjogYXF1YTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ1dHRvbnMtbGF5ZXIsXG4ucm90YXRlLWRldmljZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnJvdGF0ZS1kZXZpY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDc7XG4gICAgY29sb3I6IGFxdWE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgI2NhbnZhcyB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgIHdpZHRoOiAyNXZ3O1xuICB9XG5cbiAgLmJ1dHRvbnMtbGF5ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAub3Blbi1tZW51LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4O1xuICB9XG4gIC5idXR0b25zLWxheWVyIC5tb3ZlLWJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0dnc7XG4gICAgYm90dG9tOiA0dnc7XG4gICAgd2lkdGg6IDE3dnc7XG4gICAgaGVpZ2h0OiAxN3Z3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAubW92ZS1idXR0b25zIC5idXR0b24tcGFpci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAubW92ZS1idXR0b25zIC5jb250cm9sLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwODtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAubW92ZS1idXR0b25zIC5jb250cm9sLWJ1dHRvbi5tYXQtZmxhdC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameLevelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-level',
                templateUrl: './game-level.component.html',
                styleUrls: ['./game-level.component.scss'],
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game-level/game-loads/game-loads.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/game-level/game-loads/game-loads.component.ts ***!
  \***************************************************************/
/*! exports provided: GameLoadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLoadsComponent", function() { return GameLoadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game-save-load.service */ "./src/app/services/game-save-load.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function GameLoadsComponent_ng_container_3_ng_container_1_button_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lvlSize_r55 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", lvlSize_r55, "x", lvlSize_r55, " ");
} }
function GameLoadsComponent_ng_container_3_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameLoadsComponent_ng_container_3_ng_container_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const save_r53 = ctx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r56.loadGame(save_r53._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameLoadsComponent_ng_container_3_ng_container_1_button_1_span_4_Template, 2, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const save_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, save_r53.timestamp, ctx_r52.dateFormat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", save_r53.levelPreload.levelSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", save_r53.levelTime / 1000, "s ");
} }
function GameLoadsComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameLoadsComponent_ng_container_3_ng_container_1_button_1_Template, 7, 6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const gameSaves_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gameSaves_r48);
} }
function GameLoadsComponent_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No game saves to load");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameLoadsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameLoadsComponent_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameLoadsComponent_ng_container_3_ng_template_2_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const gameSaves_r48 = ctx.ngIf;
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameSaves_r48.length)("ngIfElse", _r50);
} }
class GameLoadsComponent {
    constructor(loginService, gameSaveLoadService) {
        this.loginService = loginService;
        this.gameSaveLoadService = gameSaveLoadService;
        this.openCloseMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dateFormat = 'MMM d, y, HH:mm:ss';
    }
    ngOnInit() {
        this.gameSaves$ = this.gameSaveLoadService.getGameSaves(this.loginService.currentUserId);
    }
    loadGame(saveId) {
        this.gameSaveLoadService
            .getGameData(saveId, this.loginService.currentUserId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((gameSave) => {
            this.openCloseMenu.emit(-1);
            this.startLevel.emit({ preloadData: gameSave });
        });
    }
}
GameLoadsComponent.ɵfac = function GameLoadsComponent_Factory(t) { return new (t || GameLoadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_3__["GameSaveLoadService"])); };
GameLoadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameLoadsComponent, selectors: [["app-game-loads"]], outputs: { openCloseMenu: "openCloseMenu", startLevel: "startLevel" }, decls: 5, vars: 3, consts: [[1, "modal-background"], [1, "modal-itself"], [1, "inside-container"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["nothingFound", ""], ["class", "modal-button", "mat-raised-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "modal-button", 3, "click"], ["class", "lvl-size", 4, "ngIf"], [1, "lvl-size"], [1, "modal-text"]], template: function GameLoadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameLoadsComponent_ng_container_3_Template, 4, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.gameSaves$));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #a4a4a4;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: #0f5;\n  text-shadow: 1px solid #000;\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  max-height: 250px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  padding: 0 5px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\n  background-color: transparent;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #cbcbcb;\n  border-radius: 4px;\n  border: 0.1px solid #b7b7b7;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #909090;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]   .lvl-size[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-right: auto;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]    .mat-button-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9nYW1lLWxvYWRzL0M6XFxVc2Vyc1xca292b3NcXERvY3VtZW50c1xccHJvamVjdHNcXGdhbWUvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxtb2RhbC13aXRoLWJsdXIuc2NzcyIsInNyYy9hcHAvZ2FtZS1sZXZlbC9nYW1lLWxvYWRzL2dhbWUtbG9hZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUtbGV2ZWwvZ2FtZS1sb2Fkcy9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxnYW1lLWxldmVsXFxnYW1lLWxvYWRzXFxnYW1lLWxvYWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQ0FGOztBQ2pDQTtFQUNFLGlCQUFBO0FEb0NGOztBQ25DRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRHFDSjs7QUNwQ0k7RUFDRSxVQUFBO0FEc0NOOztBQ25DSTtFQUNFLDZCQUFBO0FEcUNOOztBQ2xDSTtFQUNFLG9EQUFBO0VBQ0Esa0JBQUE7QURvQ047O0FDakNJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUVBLDJCQUFBO0FEa0NOOztBQy9CSTtFQUNFLHlCQUFBO0FEaUNOOztBQzlCRTtFQUNFLFlBQUE7QURnQ0o7O0FDL0JJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBRGlDTjs7QUMvQkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FEaUNOIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1sZXZlbC9nYW1lLWxvYWRzL2dhbWUtbG9hZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLm1vZGFsLWl0c2VsZiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgLm1vZGFsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XHJcbn1cclxuXHJcbi5tb2RhbC10ZXh0IHtcclxuICBjb2xvcjogIzBmNTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuIiwiLm1vZGFsLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4ubW9kYWwtaXRzZWxmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubW9kYWwtaXRzZWxmIC5tb2RhbC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tb2RhbC1pdHNlbGYgLm1vZGFsLWJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XG59XG5cbi5tb2RhbC10ZXh0IHtcbiAgY29sb3I6ICMwZjU7XG4gIHRleHQtc2hhZG93OiAxcHggc29saWQgIzAwMDtcbn1cblxuLm1vZGFsLWl0c2VsZiB7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuLm1vZGFsLWl0c2VsZiAuaW5zaWRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4ubW9kYWwtaXRzZWxmIC5pbnNpZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG4ubW9kYWwtaXRzZWxmIC5pbnNpZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1vZGFsLWl0c2VsZiAuaW5zaWRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubW9kYWwtaXRzZWxmIC5pbnNpZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjYjdiN2I3O1xufVxuLm1vZGFsLWl0c2VsZiAuaW5zaWRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MDkwO1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uIC5sdmwtc2l6ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubW9kYWwtaXRzZWxmIC5tb2RhbC1idXR0b24gOjpuZy1kZWVwLm1hdC1idXR0b24td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vYXBwL3NoYXJlZC9zdHlsZXMvbW9kYWwtd2l0aC1ibHVyLnNjc3MnO1xyXG4ubW9kYWwtaXRzZWxmIHtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAuaW5zaWRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjYmNiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICBib3JkZXI6IDAuMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MDkwO1xyXG4gICAgfVxyXG4gIH1cclxuICAubW9kYWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIC5sdmwtc2l6ZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameLoadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-loads',
                templateUrl: './game-loads.component.html',
                styleUrls: ['./game-loads.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_3__["GameSaveLoadService"] }]; }, { openCloseMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/game-level/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/game-level/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _scripts_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/draw */ "./src/app/game-level/scripts/draw.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/game-save-load.service */ "./src/app/services/game-save-load.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









function MenuComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.loadGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Load game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.saveGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(loginService, gameSaveLoadService) {
        this.loginService = loginService;
        this.gameSaveLoadService = gameSaveLoadService;
        this.openCloseMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    logOut() {
        this.loginService.logOut();
    }
    loadGame() {
        this.openCloseMenu.emit(1);
    }
    startLevelNewLevel() {
        this.openCloseMenu.emit(-1);
        this.startLevel.emit(true);
    }
    saveGame() {
        this.gameSaveLoadService
            .saveGameData(Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_2__["createGameSave"])(), this.loginService.currentUserId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => {
            this.openCloseMenu.emit(-1);
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__["GameSaveLoadService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { isAuthorizedUser: "isAuthorizedUser" }, outputs: { openCloseMenu: "openCloseMenu", startLevel: "startLevel" }, decls: 10, vars: 2, consts: [[1, "modal-background"], [1, "modal-itself"], ["mat-raised-button", "", 1, "modal-button", 3, "click"], ["class", "modal-button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "mat-raised-button", "", 1, "modal-button", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_2_listener() { return ctx.openCloseMenu.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_4_listener() { return ctx.startLevelNewLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start new level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_button_7_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_8_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthorizedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthorizedUser);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #a4a4a4;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: #0f5;\n  text-shadow: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9tZW51L0M6XFxVc2Vyc1xca292b3NcXERvY3VtZW50c1xccHJvamVjdHNcXGdhbWUvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxtb2RhbC13aXRoLWJsdXIuc2NzcyIsInNyYy9hcHAvZ2FtZS1sZXZlbC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDREY7O0FERUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9nYW1lLWxldmVsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcblxyXG4ubW9kYWwtaXRzZWxmIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAubW9kYWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YTRhNDtcclxufVxyXG5cclxuLm1vZGFsLXRleHQge1xyXG4gIGNvbG9yOiAjMGY1O1xyXG4gIHRleHQtc2hhZG93OiAxcHggc29saWQgIzAwMDtcclxufVxyXG4iLCIubW9kYWwtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5tb2RhbC1pdHNlbGYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tb2RhbC1pdHNlbGYgLm1vZGFsLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YTRhNDtcbn1cblxuLm1vZGFsLXRleHQge1xuICBjb2xvcjogIzBmNTtcbiAgdGV4dC1zaGFkb3c6IDFweCBzb2xpZCAjMDAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__["GameSaveLoadService"] }]; }, { isAuthorizedUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openCloseMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/game-level/scripts/draw.ts":
/*!********************************************!*\
  !*** ./src/app/game-level/scripts/draw.ts ***!
  \********************************************/
/*! exports provided: isLevelFinished, getIsLevelFinished, getLevelStats, createGameSave, animationData, startGameInterval, clearGameInterval, levelTimer, startLevel, playerMoveForward, playerMoveBack, playerStopMoving, playerRotateLeft, playerRotateRight, playerStopRotating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLevelFinished", function() { return isLevelFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLevelFinished", function() { return getIsLevelFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevelStats", function() { return getLevelStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGameSave", function() { return createGameSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationData", function() { return animationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGameInterval", function() { return startGameInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearGameInterval", function() { return clearGameInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelTimer", function() { return levelTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLevel", function() { return startLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMoveForward", function() { return playerMoveForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMoveBack", function() { return playerMoveBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerStopMoving", function() { return playerStopMoving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerRotateLeft", function() { return playerRotateLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerRotateRight", function() { return playerRotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerStopRotating", function() { return playerStopRotating; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

let canvas;
let canvasPlayWindow;
let body;
let ctx;
let ctxPlay;
let currentLevel;
let currentPlayer;
const defaultMoveVelocity = 31;
const defaultRotateVelocity = 3.2;
const textureDim = 64;
const defaultLevelSize = 40;
const rayCount = 221;
const FOV = 70;
const halfFOV = FOV / 2;
const mainColor = '#000';
const secondaryColor = '#666';
const thirdColor = '#5d7';
const playerColor = '#1d7';
const canvasWidth = 1178;
const canvasHeight = 512;
const playerEyesVerticalPosition = [-10, 15];
const playerEyesVerticalChange = [-1.4, 1];
const fpsLimit = 61;
const ignoreMask = false;
const isLevelFinished = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
let defaultTextureId = 1;
let textures = new Image();
textures.src = './assets/images/walls.png';
// var itemTypes = [{ img: './assets/lamp.png', block: false }];
var mapItemsAndEnemies = [];
class Enemy {
    constructor(player, level) {
        this.player = player;
        this.level = level;
        this.isVisible = false;
        this.x = level.tileSize * 2.5;
        this.y = level.tileSize * 2.5;
    }
}
function normilizeAngle(angle) {
    angle = angle % (2 * Math.PI);
    if (angle < 0) {
        angle += 2 * Math.PI;
    }
    return angle;
}
function getIsLevelFinished() {
    return isLevelFinished.value;
}
function getLevelStats() {
    return { size: currentLevel.tilesCount, time: levelTimer.time / 1000 };
}
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}
function convertToRadians(angle) {
    return angle * (Math.PI / 180);
}
function createGameSave() {
    return {
        playerPreload: currentPlayer.getPlayerData(),
        levelPreload: currentLevel.getLevelData(),
        levelTime: levelTimer.time,
        timestamp: new Date(),
    };
}
// function rescaleCanvas(canvas: HTMLCanvasElement) {
//     canvas.style.width = `${document.body.clientWidth}px`;
//     canvas.style.height = `${document.body.clientHeight}px`;
// }
class Ray {
    constructor(ctx, level, x, y, playerRotateAngle, angleIncrement, columnIndex) {
        this.isLookingDown = false;
        this.isLookingLeft = false;
        this.yStep = 0;
        this.xStep = 0;
        this.ctx = ctx;
        this.level = level;
        this.x = x;
        this.y = y;
        this.angle = playerRotateAngle;
        this.angleIncrement = angleIncrement;
        this.columnIndex = columnIndex;
        this.distanceToWall = 0;
        this.wallHitX = 0;
        this.wallHitY = 0;
        this.wallHitXHorizontal = 0;
        this.wallHitYHorizontal = 0;
        this.wallHitXVertical = 0;
        this.wallHitYVertical = 0;
        this.texturePixel = 0;
        this.textureId = 0;
    }
    setAngleAndPosition(angle, x, y) {
        this.playerAngle = angle;
        this.angle = normilizeAngle(angle + this.angleIncrement);
        this.x = x;
        this.y = y;
    }
    cast() {
        this.xIntercept = 0;
        this.yIntercept = 0;
        this.xStep = 0;
        this.yStep = 0;
        this.isLookingDown = false;
        this.isLookingLeft = false;
        this.angle < Math.PI && (this.isLookingDown = true);
        this.angle > Math.PI / 2 && this.angle < (3 * Math.PI) / 2 && (this.isLookingLeft = true);
        let tan = Math.tan(this.angle);
        let yTemp = this.y / this.level.tileSize;
        this.yIntercept =
            (this.isLookingDown ? Math.ceil(yTemp) : Math.floor(yTemp)) * this.level.tileSize; //tile y coord
        this.xIntercept = this.x + (this.yIntercept - this.y) / tan; //neighbor tile
        this.yStep = this.isLookingDown ? this.level.tileSize : -this.level.tileSize; //calculating Y step
        this.xStep = this.yStep / tan; //calculating X step according to angle
        let nextXHorizontal = this.xIntercept;
        let nextYHorizontal = this.yIntercept;
        !this.isLookingDown && --nextYHorizontal; //to count tile behind current wall
        let isCollidingHorizontal = false;
        while (!isCollidingHorizontal &&
            nextXHorizontal >= 0 &&
            nextXHorizontal <= canvasWidth &&
            nextYHorizontal >= 0 &&
            nextYHorizontal <= canvasHeight) {
            let xCollision = (nextXHorizontal / this.level.tileSize) ^ 0; //j for level array
            let yCollision = (nextYHorizontal / this.level.tileSize) ^ 0; //i for level array
            if (this.level.isCollision(xCollision, yCollision) ||
                yCollision > this.level.tilesCount - 1) {
                isCollidingHorizontal = true;
                this.wallHitXHorizontal = nextXHorizontal;
                this.wallHitYHorizontal = nextYHorizontal;
            }
            else {
                nextXHorizontal += this.xStep;
                nextYHorizontal += this.yStep;
            }
        }
        let tempX = this.x / this.level.tileSize;
        this.xIntercept =
            (this.isLookingLeft ? Math.floor(tempX) : Math.ceil(tempX)) * this.level.tileSize; //tile x coord
        this.yIntercept = this.y + (this.xIntercept - this.x) * tan;
        this.xStep = this.isLookingLeft ? -this.level.tileSize : this.level.tileSize;
        this.yStep = this.xStep * tan;
        let nextXVertical = this.xIntercept;
        let nextYVertical = this.yIntercept;
        this.isLookingLeft && --nextXVertical;
        let isCollidingVertical = false;
        while (!isCollidingVertical &&
            nextXVertical >= 0 &&
            nextXVertical <= canvasWidth &&
            nextYVertical >= 0 &&
            nextYVertical <= canvasHeight) {
            let xCollision = (nextXVertical / this.level.tileSize) ^ 0;
            let yCollision = (nextYVertical / this.level.tileSize) ^ 0;
            if (this.level.isCollision(xCollision, yCollision) ||
                xCollision > this.level.tilesCount - 1) {
                isCollidingVertical = true;
                this.wallHitXVertical = nextXVertical;
                this.wallHitYVertical = nextYVertical;
            }
            else {
                nextXVertical += this.xStep;
                nextYVertical += this.yStep;
            }
        }
        // find distance
        let horizontalDist = Number.MAX_VALUE;
        let verticalDist = Number.MAX_VALUE;
        if (isCollidingHorizontal) {
            horizontalDist = calculateDistance(this.x, this.y, this.wallHitXHorizontal, this.wallHitYHorizontal);
        }
        if (isCollidingVertical) {
            verticalDist = calculateDistance(this.x, this.y, this.wallHitXVertical, this.wallHitYVertical);
        }
        this.isHittingHorizontal = horizontalDist < verticalDist;
        if (this.isHittingHorizontal) {
            this.wallHitX = this.wallHitXHorizontal;
            this.wallHitY = this.wallHitYHorizontal;
            this.distanceToWall = horizontalDist;
            this.texturePixel =
                ((this.wallHitX - ((this.wallHitX / this.level.tileSize) ^ 0) * this.level.tileSize) /
                    this.level.tileSize) *
                    textureDim;
        }
        else {
            this.wallHitX = this.wallHitXVertical;
            this.wallHitY = this.wallHitYVertical;
            this.distanceToWall = verticalDist;
            this.texturePixel =
                ((this.wallHitY - ((this.wallHitY / this.level.tileSize) ^ 0) * this.level.tileSize) /
                    this.level.tileSize) *
                    textureDim;
        }
        this.level.clearMaskTile(this.wallHitX, this.wallHitY, this.isLookingDown, this.isLookingLeft);
        this.texturePixel = this.texturePixel ^ 0;
        this.textureId = this.level.getTile(this.wallHitX, this.wallHitY) - 1;
        // this.textureId = horizontalDist < verticalDist ? 0 : 1;
    }
    renderWall(ctx, eyesLevel) {
        const defaultWallHeight = this.level.tileSize * 1.7;
        const defaultDistance = -(canvasHeight / 3) / Math.tan(halfFOV); //negative to become positive
        this.distanceToWall = this.distanceToWall * Math.cos(this.angle - this.playerAngle); //fisheye fix
        let wallHeight = (defaultWallHeight / this.distanceToWall) * defaultDistance;
        let y0 = ((canvasHeight / 2) ^ 0) - ((wallHeight / 2) ^ 0);
        let y1 = y0 + wallHeight;
        let imageHeight = y0 - y1;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(textures, this.texturePixel + (this.isHittingHorizontal ? 0 : 64), this.textureId * textureDim, 1, textureDim, this.columnIndex * (canvasWidth / rayCount), y1 + eyesLevel, canvasWidth / rayCount, imageHeight);
        // ctx.fillStyle = `#888`;
        // if(this.textureId) {
        //     ctx.fillStyle = `#aaa`;
        // }
        // ctx.fillRect(
        //     this.columnIndex * (canvasWidth/rayCount),
        //     y1 + eyesLevel,
        //     canvasWidth/rayCount,
        //     imageHeight
        // )
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.wallHitX, this.wallHitY);
        this.ctx.strokeStyle = '#f33';
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
class Player {
    constructor(ctx, currentLevel, playerPreload) {
        this.rays = [];
        this.ctx = ctx;
        this.currentLevel = currentLevel;
        // random start
        // this.x = currentLevel.startingPoint.j * currentLevel.tileSize + currentLevel.tileSize/2;
        // this.y = currentLevel.startingPoint.i * currentLevel.tileSize + currentLevel.tileSize/2;
        if (playerPreload) {
            this.x = playerPreload.playerCoords.x;
            this.y = playerPreload.playerCoords.y;
            this.rotateAngle = playerPreload.playerRotateAngle;
        }
        else {
            this.x = currentLevel.tileSize * 1.5;
            this.y = currentLevel.tileSize * 1.5;
            this.rotateAngle = 0;
        }
        this.moveState = 0;
        this.rotateState = 0;
        this.eyesLevel = 0;
        this.doesEyesLevelChangingUp = true;
        this.rayCount = rayCount;
        let angleIncrementForRays = convertToRadians(FOV / this.rayCount);
        let raysStartAngle = convertToRadians(this.rotateAngle - halfFOV);
        for (let i = 0; i < this.rayCount; ++i, raysStartAngle += angleIncrementForRays) {
            this.rays[i] = new Ray(this.ctx, this.currentLevel, this.x, this.y, this.rotateAngle, raysStartAngle, i);
        }
    }
    isOnFinish() {
        return (((this.x / this.currentLevel.tileSize) ^ 0) == this.currentLevel.finishPoint.j &&
            ((this.y / this.currentLevel.tileSize) ^ 0) == this.currentLevel.finishPoint.i);
    }
    getPlayerData() {
        return {
            playerCoords: {
                x: this.x,
                y: this.y,
            },
            playerRotateAngle: this.rotateAngle,
        };
    }
    tick(fps) {
        this.updatePosition(fps);
        this.castRays();
        this.renderRays();
        this.draw();
    }
    draw() {
        this.ctx.fillStyle = playerColor;
        this.ctx.fillRect(this.x - 3, this.y - 3, 6, 6);
    }
    castRays() {
        this.rays.forEach((ray) => ray.cast());
        this.rays.forEach((ray) => ray.draw());
    }
    renderRays() {
        this.rays.forEach((ray) => ray.renderWall(ctxPlay, this.eyesLevel));
    }
    forward() {
        this.moveState = 1;
    }
    back() {
        this.moveState = -1;
    }
    left() {
        this.rotateState = -1;
    }
    right() {
        this.rotateState = 1;
    }
    moveStateZero() {
        this.moveState = 0;
    }
    rotateStateZero() {
        this.rotateState = 0;
    }
    updatePosition(fps) {
        this.moveVelocity =
            ((this.currentLevel.tileSize / canvasHeight) * defaultMoveVelocity * fpsLimit) / fps;
        this.rotateVelocity = (((defaultRotateVelocity * Math.PI) / 180) * fpsLimit) / fps;
        isLevelFinished.next(this.isOnFinish());
        let newX = this.x + this.moveState * Math.cos(this.rotateAngle) * this.moveVelocity;
        let newY = this.y + this.moveState * Math.sin(this.rotateAngle) * this.moveVelocity;
        if (this.moveState) {
            if (this.eyesLevel > -playerEyesVerticalPosition[0] ||
                this.eyesLevel < -playerEyesVerticalPosition[1]) {
                if (this.doesEyesLevelChangingUp) {
                    this.eyesLevel = -playerEyesVerticalPosition[1];
                }
                else {
                    this.eyesLevel = -playerEyesVerticalPosition[0];
                }
                this.doesEyesLevelChangingUp = !this.doesEyesLevelChangingUp;
            }
            if (this.doesEyesLevelChangingUp) {
                this.eyesLevel += (playerEyesVerticalChange[0] * fpsLimit) / fps;
            }
            else {
                this.eyesLevel += (playerEyesVerticalChange[1] * fpsLimit) / fps;
            }
        }
        !this.isCollision(newX, newY) && ((this.x = newX), (this.y = newY));
        this.rotateAngle += this.rotateState * this.rotateVelocity;
        this.rotateAngle = normilizeAngle(this.rotateAngle);
        this.rays.forEach((ray) => ray.setAngleAndPosition(this.rotateAngle, this.x, this.y));
    }
    isCollision(x, y) {
        let playerX = (x / this.currentLevel.tileSize) ^ 0;
        let playerY = (y / this.currentLevel.tileSize) ^ 0;
        return this.currentLevel.isCollision(playerX, playerY);
    }
}
class Level {
    constructor(ctx, levelSize, levelPreload) {
        this.ctx = ctx;
        this.startingPoint = {
            i: Math.round(Math.random() * (levelSize - 3)) + 1,
            j: Math.round(Math.random() * (levelSize - 3)) + 1,
        };
        if (levelPreload) {
            this.finishPoint = levelPreload.finishPoint;
            [this.levelArray, this.mask] = levelPreload.levelData;
            this.tilesCount = this.levelArray[0].length;
        }
        else {
            this.finishPoint = {
                i: levelSize - 1,
                j: levelSize - 2,
            };
            [this.levelArray, this.mask] = this.generateLevel(levelSize);
            this.tilesCount = levelSize;
        }
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.tileSize = this.tileSize = (this.canvasWidth / this.tilesCount) ^ 0;
    }
    clearSpritesArray() {
        mapItemsAndEnemies.forEach((element) => {
            element.isVisible = false;
        });
        for (let i = 0; i < this.tilesCount; ++i) {
            this.spritesArray[i] = Array(this.tilesCount).fill(0);
        }
    }
    fillSpritesArray() {
        mapItemsAndEnemies.forEach((element) => {
            this.spritesArray[(element.y / this.tileSize) ^ 0][(element.x / this.tileSize) ^ 0] = element;
        });
    }
    getLevelData() {
        return {
            levelData: [this.levelArray, this.mask],
            finishPoint: this.finishPoint,
            levelSize: this.tilesCount,
        };
    }
    getTile(x, y) {
        const i = (y / this.tileSize) ^ 0, j = (x / this.tileSize) ^ 0;
        if (i > this.tilesCount - 1 || j > this.tilesCount - 1)
            return 5;
        return this.levelArray[i][j];
    }
    generateLevel(size) {
        let lvlMap = Array(size);
        let mask;
        for (let i = 0; i < size; ++i) {
            lvlMap[i] = Array(size).fill(defaultTextureId);
        }
        mask = lvlMap.map((row) => row.slice());
        let lvlStack = [];
        lvlStack.push({ i: 1, j: 1 });
        let i = this.startingPoint.i, j = this.startingPoint.j;
        lvlMap[i][j] = 0;
        while (1) {
            // console.log('Searching neighbours of: ',i,j);
            if (this.isAvailableAnyNeighbour(lvlMap, i, j)) {
                lvlStack.push({ i, j });
                let newI = i, newJ = j;
                while (1) {
                    newI = i;
                    newJ = j;
                    switch (Math.round(Math.random() * 4)) {
                        case 0:
                            newI = i - 1;
                            break;
                        case 1:
                            newJ = j - 1;
                            break;
                        case 2:
                            newI = i + 1;
                            break;
                        case 3:
                            newJ = j + 1;
                            break;
                    }
                    if (newI > 0 &&
                        newI < size - 1 &&
                        newJ > 0 &&
                        newJ < size - 1 &&
                        lvlMap[newI][newJ] &&
                        lvlMap[newI][newJ] != 0 &&
                        !this.doesAnyRadiusNeighbourIsPartOfPath({ i, j }, lvlMap, newI, newJ))
                        break;
                }
                i = newI;
                j = newJ;
                lvlMap[i][j] = 0;
            }
            else if (!lvlStack.length) {
                break;
            }
            else {
                let previous = lvlStack.pop();
                if (previous) {
                    i = previous.i;
                    j = previous.j;
                }
            }
        }
        this.clearMapBlock(lvlMap, 2, 1, 1);
        this.clearMapBlock(lvlMap, 2, size - 3, size - 3);
        this.clearMapBlock(lvlMap, 1, this.finishPoint.i, this.finishPoint.j);
        return [lvlMap, mask];
    }
    clearMapBlock(lvlArray, size, i, j) {
        for (let x = i, xN = size; xN > 0; --xN, ++x) {
            for (let y = j, yN = size; yN > 0; --yN, ++y) {
                lvlArray[x][y] = 0;
            }
        }
    }
    isAvailableAnyNeighbour(lvlMap, i, j) {
        let isHavingSpareNeighbour = false;
        let neighbourI = i, neighbourJ = j;
        for (let index = 0; index < 4; ++index) {
            switch (index) {
                case 0:
                    neighbourI = i - 1;
                    break;
                case 1:
                    neighbourJ = j - 1;
                    break;
                case 2:
                    neighbourI = i + 1;
                    break;
                case 3:
                    neighbourJ = j + 1;
                    break;
            }
            if (neighbourI > 0 &&
                neighbourI < lvlMap.length - 1 &&
                neighbourJ > 0 &&
                neighbourJ < lvlMap.length - 1 &&
                lvlMap[neighbourI][neighbourJ]) {
                isHavingSpareNeighbour = true;
                if (isHavingSpareNeighbour) {
                    isHavingSpareNeighbour = !this.doesAnyRadiusNeighbourIsPartOfPath({ i, j }, lvlMap, neighbourI, neighbourJ);
                }
                if (isHavingSpareNeighbour)
                    break;
            }
            neighbourI = i;
            neighbourJ = j;
        }
        return isHavingSpareNeighbour;
    }
    doesAnyRadiusNeighbourIsPartOfPath(exception, lvlMap, neighbourI, neighbourJ) {
        // console.log('Subneighbour: ', neighbourI,neighbourJ);
        let changes = { i: exception.i - neighbourI, j: exception.j - neighbourJ };
        let anyNeighbourIsPath = false;
        let startI = neighbourI, endI = neighbourI, startJ = neighbourJ, endJ = neighbourJ;
        if (changes.i > 0) {
            startI -= 1;
            startJ -= 1;
            endJ += 1;
        }
        if (changes.i < 0) {
            endI += 1;
            startJ -= 1;
            endJ += 1;
        }
        if (changes.j > 0) {
            startJ -= 1;
            startI -= 1;
            endI += 1;
        }
        if (changes.j < 0) {
            endJ += 1;
            startI -= 1;
            endI += 1;
        }
        // console.log(`ranges: [i : ${startI}, ${endI} j : ${startJ}, ${endJ}]`);
        for (let i = startI; i <= endI; ++i) {
            for (let j = startJ; j <= endJ; ++j) {
                // console.log('Checking: ',i,j);
                if (i > 0 && i < lvlMap.length - 1 && j > 0 && j < lvlMap.length - 1 && !lvlMap[i][j]) {
                    anyNeighbourIsPath = true;
                    // console.log(i, j, ' is 0');
                    break;
                }
            }
        }
        return anyNeighbourIsPath;
    }
    clearMaskTile(hitX, hitY, down, left) {
        hitY += down ? 1 : -1;
        hitX += left ? -1 : 1;
        const jTileHit = (hitX / this.tileSize) ^ 0, iTileHit = (hitY / this.tileSize) ^ 0;
        if (iTileHit > this.tilesCount - 1 || jTileHit > this.tilesCount - 1)
            return;
        this.mask[iTileHit][jTileHit] = 0;
    }
    draw(ignoreMask = false) {
        for (let i = 0; i < this.tilesCount; ++i) {
            for (let j = 0; j < this.tilesCount; ++j) {
                this.ctx.fillStyle =
                    this.levelArray[i][j] && (!this.mask[i][j] || ignoreMask) ? mainColor : secondaryColor;
                this.ctx.fillRect(j * this.tileSize, i * this.tileSize, this.tileSize, this.tileSize);
            }
        }
    }
    tick(ignoreMask = false) {
        this.draw(ignoreMask);
        // this.clearSpritesArray();
        // this.fillSpritesArray();
    }
    drawFinishPoint() {
        this.ctx.fillStyle = thirdColor;
        this.ctx.fillRect(this.finishPoint.j * this.tileSize, this.finishPoint.i * this.tileSize, this.tileSize, this.tileSize);
    }
    isCollision(x, y) {
        if (y >= this.levelArray.length) {
            y = this.levelArray.length - 1;
        }
        return !!this.levelArray[y][x];
    }
}
function paintFloorAndCeiling(ctx) {
    ctx.fillStyle = '#005';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight / 2);
    ctx.fillStyle = '#222';
    ctx.fillRect(0, canvasHeight / 2, canvasWidth, canvasHeight);
}
let gameInterval = {
    interval: 0,
};
let isGameRunning = false;
let timeInterval;
let audioObj = null;
let gameTime = 0;
const animationData = {
    fps: 0,
};
let localFPS = 0;
function animationFrameRepeat(timeSpent) {
    gameInterval.interval = requestAnimationFrame(animationFrameRepeat);
    localFPS = 1000 / (timeSpent - gameTime);
    if (localFPS >= fpsLimit)
        return;
    animationData.fps = localFPS;
    gameTime = timeSpent;
    draw(animationData.fps);
}
function startGameInterval() {
    gameInterval.interval = requestAnimationFrame(animationFrameRepeat);
    isGameRunning = true;
}
function clearGameInterval() {
    cancelAnimationFrame(gameInterval.interval);
    isGameRunning = false;
}
const levelTimer = {
    time: 0,
};
function clearTimerInterval() {
    clearInterval(timeInterval);
    levelTimer.time = 0;
}
function startTimerInterval() {
    timeInterval = setInterval(() => {
        if (isGameRunning) {
            levelTimer.time += 100;
        }
    }, 100);
}
function startLevel(loadGame = null, levelSize = null, textureId = 1) {
    var _a, _b;
    isLevelFinished.next(false);
    // audioObj?.pause();
    // audioObj = null;
    // audioObj = new Audio('./assets/audio/amogus.mp4');
    // audioObj.addEventListener("canplaythrough", () => {
    //     audioObj.play();
    // });
    defaultTextureId = textureId;
    clearGameInterval();
    clearTimerInterval();
    startTimerInterval();
    mapItemsAndEnemies = [];
    canvas = document.getElementById('canvas');
    canvasPlayWindow = document.getElementById('canvasPlayWindow');
    ctx = canvas.getContext('2d');
    ctxPlay = canvasPlayWindow.getContext('2d');
    // body = document.querySelector('body') as HTMLBodyElement;
    // if (body) {
    //   body.style.backgroundColor = secondaryColor;
    // }
    canvas.width = canvasHeight;
    canvas.height = canvasHeight;
    canvasPlayWindow.width = canvasWidth;
    canvasPlayWindow.height = canvasHeight;
    // rescaleCanvas(canvasPlayWindow);
    loadGame && (levelTimer.time = loadGame.levelTime);
    currentLevel = new Level(ctx, levelSize || defaultLevelSize, (_a = loadGame) === null || _a === void 0 ? void 0 : _a.levelPreload);
    currentPlayer = new Player(ctx, currentLevel, (_b = loadGame) === null || _b === void 0 ? void 0 : _b.playerPreload);
    mapItemsAndEnemies.push(new Enemy(currentPlayer, currentLevel));
    startGameInterval();
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxPlay.clearRect(0, 0, canvas.width, canvas.height);
}
function draw(fps) {
    clearCanvas();
    paintFloorAndCeiling(ctxPlay);
    currentLevel.tick(ignoreMask);
    currentPlayer.tick(fps);
    currentLevel.drawFinishPoint();
}
// document.addEventListener('DOMContentLoaded', startLevel);
function playerMoveForward() {
    currentPlayer.forward();
}
function playerMoveBack() {
    currentPlayer.back();
}
function playerStopMoving() {
    currentPlayer.moveStateZero();
}
function playerRotateLeft() {
    currentPlayer.left();
}
function playerRotateRight() {
    currentPlayer.right();
}
function playerStopRotating() {
    currentPlayer.rotateStateZero();
}
document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 37: {
            //left
            currentPlayer.left();
            break;
        }
        case 39: {
            //right
            currentPlayer.right();
            break;
        }
        case 38: {
            //forward
            currentPlayer.forward();
            break;
        }
        case 40: {
            //backward
            currentPlayer.back();
            break;
        }
        // case 82: {
        //     startLevel();
        //     break;
        // }
    }
});
document.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 37: {
            //left
            currentPlayer.rotateStateZero();
            break;
        }
        case 39: {
            //right
            currentPlayer.rotateStateZero();
            break;
        }
        case 38: {
            //forward
            currentPlayer.moveStateZero();
            break;
        }
        case 40: {
            //backward
            currentPlayer.moveStateZero();
            break;
        }
    }
});


/***/ }),

/***/ "./src/app/game-level/size-choose/size-choose.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/game-level/size-choose/size-choose.component.ts ***!
  \*****************************************************************/
/*! exports provided: SizeChooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeChooseComponent", function() { return SizeChooseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function SizeChooseComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", size_r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", size_r61, "x", size_r61, " ");
} }
const _c0 = function (a0) { return { "background-position": a0, width: "64px", height: "64px" }; };
const _c1 = function (a0) { return { highlight: a0 }; };
function SizeChooseComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeChooseComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const textureId_r62 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.setActiveTextureId(textureId_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const textureId_r62 = ctx.$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r60.getTexturePosition(textureId_r62)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r60.activeTextureId === textureId_r62));
} }
class SizeChooseComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.openCloseMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.beginLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textureIds = [1, 3, 4];
        this.sizes = [13, 21, 34, 55];
    }
    startLevel() {
        this.openCloseMenu.emit(-1);
        this.beginLevel.emit({ size: this.levelSize, textureId: this.activeTextureId });
    }
    logOut() {
        this.loginService.logOut();
    }
    setActiveTextureId(textureId) {
        this.activeTextureId = textureId;
    }
    getTexturePosition(textureId) {
        return `0px ${-(textureId - 1) * 64}px`;
    }
}
SizeChooseComponent.ɵfac = function SizeChooseComponent_Factory(t) { return new (t || SizeChooseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
SizeChooseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SizeChooseComponent, selectors: [["app-size-choose"]], outputs: { openCloseMenu: "openCloseMenu", beginLevel: "beginLevel" }, decls: 15, vars: 4, consts: [[1, "modal-background"], [1, "modal-itself"], ["appearance", "outline"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "title"], [1, "texture-choose"], ["class", "texture", 3, "ngStyle", "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "modal-button", 3, "disabled", "click"], ["color", "warn", "mat-raised-button", "", 1, "modal-button", "log-out", 3, "click"], [3, "value"], [1, "texture", 3, "ngStyle", "ngClass", "click"]], template: function SizeChooseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose level size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SizeChooseComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.levelSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SizeChooseComponent_mat_option_6_Template, 2, 3, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose level texture *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SizeChooseComponent_div_10_Template, 1, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeChooseComponent_Template_button_click_11_listener() { return ctx.startLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Start level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeChooseComponent_Template_button_click_13_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.levelSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.textureIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.activeTextureId || !ctx.levelSize);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #a4a4a4;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: #0f5;\n  text-shadow: 1px solid #000;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white;\n  border-radius: 5px;\n}\n\n@media screen and (max-width: 1024px) {\n    .mat-select-panel {\n    max-height: 150px !important;\n  }\n}\n\n .mat-form-field-wrapper {\n  padding-bottom: 8px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.texture-choose[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.texture-choose[_ngcontent-%COMP%]   .texture[_ngcontent-%COMP%] {\n  background-image: url('walls.png');\n  background-repeat: no-repeat;\n  margin: 12px;\n  cursor: pointer;\n  border: 2px solid #a4a4a4;\n}\n\n.texture-choose[_ngcontent-%COMP%]   .texture.highlight[_ngcontent-%COMP%] {\n  border: 2px solid #f00;\n}\n\n.log-out[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9zaXplLWNob29zZS9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcbW9kYWwtd2l0aC1ibHVyLnNjc3MiLCJzcmMvYXBwL2dhbWUtbGV2ZWwvc2l6ZS1jaG9vc2Uvc2l6ZS1jaG9vc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUtbGV2ZWwvc2l6ZS1jaG9vc2UvQzpcXFVzZXJzXFxrb3Zvc1xcRG9jdW1lbnRzXFxwcm9qZWN0c1xcZ2FtZS9zcmNcXGFwcFxcZ2FtZS1sZXZlbFxcc2l6ZS1jaG9vc2VcXHNpemUtY2hvb3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQ0FGOztBQ2pDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRG9DRjs7QUNsQ0E7RUFDRTtJQUNFLDRCQUFBO0VEcUNGO0FBQ0Y7O0FDbkNBO0VBQ0UsbUJBQUE7QURxQ0Y7O0FDbkNBO0VBQ0Usc0JBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QURzQ0Y7O0FDckNFO0VBQ0Usa0NBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUR1Q0o7O0FDckNJO0VBQ0Usc0JBQUE7QUR1Q047O0FDbkNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRHNDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtbGV2ZWwvc2l6ZS1jaG9vc2Uvc2l6ZS1jaG9vc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLm1vZGFsLWl0c2VsZiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgLm1vZGFsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XHJcbn1cclxuXHJcbi5tb2RhbC10ZXh0IHtcclxuICBjb2xvcjogIzBmNTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuIiwiLm1vZGFsLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4ubW9kYWwtaXRzZWxmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubW9kYWwtaXRzZWxmIC5tb2RhbC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tb2RhbC1pdHNlbGYgLm1vZGFsLWJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XG59XG5cbi5tb2RhbC10ZXh0IHtcbiAgY29sb3I6ICMwZjU7XG4gIHRleHQtc2hhZG93OiAxcHggc29saWQgIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgbWF4LWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgfVxufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4udGl0bGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4udGV4dHVyZS1jaG9vc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50ZXh0dXJlLWNob29zZSAudGV4dHVyZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2FsbHMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW46IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI2E0YTRhNDtcbn1cbi50ZXh0dXJlLWNob29zZSAudGV4dHVyZS5oaWdobGlnaHQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjAwO1xufVxuXG4ubG9nLW91dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogMTZweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAvc2hhcmVkL3N0eWxlcy9tb2RhbC13aXRoLWJsdXIuc2Nzcyc7XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4udGl0bGUge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi50ZXh0dXJlLWNob29zZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAudGV4dHVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2FsbHMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2E0YTRhNDtcclxuXHJcbiAgICAmLmhpZ2hsaWdodCB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5sb2ctb3V0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgYm90dG9tOiAxNnB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SizeChooseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-size-choose',
                templateUrl: './size-choose.component.html',
                styleUrls: ['./size-choose.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, { openCloseMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], beginLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/login-check.guard.ts":
/*!**************************************!*\
  !*** ./src/app/login-check.guard.ts ***!
  \**************************************/
/*! exports provided: LoginCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCheckGuard", function() { return LoginCheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");




class LoginCheckGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate(next, state) {
        const isInLoginPage = state.url.includes('login') || state.url.includes('register');
        if (this.loginService.isLoggedIn()) {
            if (isInLoginPage) {
                this.router.navigateByUrl('/game');
            }
            return true;
        }
        else {
            if (isInLoginPage) {
                return true;
            }
            else {
                this.router.navigateByUrl('/login');
                return false;
            }
        }
    }
}
LoginCheckGuard.ɵfac = function LoginCheckGuard_Factory(t) { return new (t || LoginCheckGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
LoginCheckGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginCheckGuard, factory: LoginCheckGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginCheckGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");













function LoginPageComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min length of password is 8 symbols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_mat_form_field_14_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.loginForm.get("passwordRepeat").errors["match"]);
} }
function LoginPageComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repeat password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginPageComponent_mat_form_field_14_mat_error_5_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r13.isOnLoginPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.loginForm.get("passwordRepeat").errors);
} }
function LoginPageComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "don't have account yet?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "already registered?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.logInAsUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.loginForm.valid);
} }
function LoginPageComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.loginForm.valid);
} }
class LoginPageComponent {
    constructor(loginService, fb, router, activatedRoute) {
        this.loginService = loginService;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginForm = this.fb.group({
            login: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            passwordRepeat: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.isOnLoginPage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.isOnLoginPage.next(this.router.url.includes('login'));
        const passwordRepeatField = this.loginForm.get('passwordRepeat');
        this.activatedRoute.url.subscribe(() => {
            this.isOnLoginPage.next(this.router.url.includes('login'));
            const validators = [];
            !this.isOnLoginPage.value && validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            passwordRepeatField.setValidators(validators);
        });
        passwordRepeatField.valueChanges.subscribe((value) => {
            if (value !== this.loginForm.get('password').value) {
                passwordRepeatField.setErrors({
                    match: "passwords doesn't match",
                });
            }
            else {
                passwordRepeatField.setErrors(null);
            }
        });
    }
    logInAsGuest() {
        this.loginService.logInAsGuest();
    }
    logInAsUser() {
        this.loginService
            .logIn(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }))
            .subscribe((response) => {
            if (response.error) {
                alert(response.error);
            }
            else {
                this.loginService.setUserIdToLocalStorage(response.userId);
                this.router.navigateByUrl('/game');
            }
        });
    }
    register() {
        this.loginService
            .register(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }))
            .subscribe((response) => {
            if (response.error) {
                alert(response.error);
            }
            else {
                this.loginService.setUserIdToLocalStorage(response.userId);
                this.router.navigateByUrl('/game');
            }
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 25, vars: 13, consts: [[1, "modal-background"], ["mat-raised-button", "", "color", "primary", 1, "as-guest", 3, "click"], [1, "modal-itself"], [1, "form", 3, "formGroup"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "type", "text", "formControlName", "login", "placeholder", "Login", "required", ""], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password", "required", ""], [4, "ngIf"], ["class", "form-field", "appearance", "outline", 4, "ngIf"], [1, "login-buttons"], ["routerLink", "/register", 4, "ngIf", "ngIfElse"], ["alreadyRegistered", ""], ["class", "modal-button sign-in-btn", "mat-raised-button", "", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["regButton", ""], ["matInput", "", "type", "password", "formControlName", "passwordRepeat", "placeholder", "Repeat password", 3, "required"], ["routerLink", "/register"], ["routerLink", "/login"], ["mat-raised-button", "", 1, "modal-button", "sign-in-btn", 3, "disabled", "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_1_listener() { return ctx.logInAsGuest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Play as guest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginPageComponent_mat_error_13_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginPageComponent_mat_form_field_14_Template, 6, 4, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginPageComponent_a_17_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginPageComponent_ng_template_19_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginPageComponent_button_21_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginPageComponent_ng_template_23_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, ctx.isOnLoginPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx.isOnLoginPage))("ngIfElse", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, ctx.isOnLoginPage))("ngIfElse", _r18);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #a4a4a4;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: #0f5;\n  text-shadow: 1px solid #000;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\n.form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white;\n  border-radius: 5px;\n}\n\n.as-guest[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  background-color: #a4a4a4;\n  box-shadow: none;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcbW9kYWwtd2l0aC1ibHVyLnNjc3MiLCJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQ0FGOztBQ2pDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QURvQ0Y7O0FDbkNFO0VBQ0UsV0FBQTtBRHFDSjs7QUNuQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURxQ0o7O0FDbENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRHFDRjs7QUNuQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FEc0NGOztBQ3JDRTtFQUNFLFlBQUE7QUR1Q0o7O0FDckNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FEdUNKOztBQ3RDSTtFQUNFLFNBQUE7QUR3Q04iLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLm1vZGFsLWl0c2VsZiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgLm1vZGFsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XHJcbn1cclxuXHJcbi5tb2RhbC10ZXh0IHtcclxuICBjb2xvcjogIzBmNTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuIiwiLm1vZGFsLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4ubW9kYWwtaXRzZWxmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubW9kYWwtaXRzZWxmIC5tb2RhbC1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tb2RhbC1pdHNlbGYgLm1vZGFsLWJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XG59XG5cbi5tb2RhbC10ZXh0IHtcbiAgY29sb3I6ICMwZjU7XG4gIHRleHQtc2hhZG93OiAxcHggc29saWQgIzAwMDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzAwcHg7XG59XG4uZm9ybSAuZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFzLWd1ZXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgYm90dG9tOiAxNnB4O1xufVxuXG4ubW9kYWwtaXRzZWxmIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YTRhNDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5tb2RhbC1pdHNlbGYgLnNpZ24taW4tYnRuIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubG9naW4tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vZGFsLWl0c2VsZiAubG9naW4tYnV0dG9ucyAubW9kYWwtYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufSIsIkBpbXBvcnQgJy4uLy4uL2FwcC9zaGFyZWQvc3R5bGVzL21vZGFsLXdpdGgtYmx1ci5zY3NzJztcclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuLmFzLWd1ZXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgYm90dG9tOiAxNnB4O1xyXG59XHJcbi5tb2RhbC1pdHNlbGYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAuc2lnbi1pbi1idG4ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICAubG9naW4tYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5tb2RhbC1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss'],
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");








class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/game-save-load.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/game-save-load.service.ts ***!
  \****************************************************/
/*! exports provided: GameSaveLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSaveLoadService", function() { return GameSaveLoadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration/apiUrl */ "./src/configuration/apiUrl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





class GameSaveLoadService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    saveGameData(payload, userId) {
        return this.http.post(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/save-game/${userId}`, payload);
    }
    getGameData(saveId, userId) {
        return this.http.get(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/load-game/${saveId}/${userId}`);
    }
    getGameSaves(userId) {
        return this.http.get(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/game-saves/${userId}`);
    }
    saveLevelFinishStats({ time, size }, userId) {
        return this.http.post(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/level-stats/`, { time, size, userId });
    }
    getLevelTableStats(size) {
        return this.http.get(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/level-stats/${size}`);
    }
}
GameSaveLoadService.ɵfac = function GameSaveLoadService_Factory(t) { return new (t || GameSaveLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GameSaveLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameSaveLoadService, factory: GameSaveLoadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameSaveLoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration/apiUrl */ "./src/configuration/apiUrl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





class LoginService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    isLoggedIn() {
        return !!localStorage.getItem('userId');
    }
    logInAsGuest() {
        this.setUserIdToLocalStorage('guest');
        this.router.navigateByUrl('/game');
    }
    setUserIdToLocalStorage(userId) {
        localStorage.setItem('userId', userId);
    }
    logIn({ login, password }) {
        return this.http.post(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/login`, { login, password });
    }
    register({ login, password }) {
        return this.http.post(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/register`, { login, password });
    }
    isAuthorized() {
        return this.http.get(`${_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"]}/user-exists/${localStorage.getItem('userId')}`);
    }
    logOut() {
        localStorage.removeItem('userId');
        this.router.navigateByUrl('/login');
    }
    get currentUserId() {
        return localStorage.getItem('userId');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/configuration/apiUrl.ts":
/*!*************************************!*\
  !*** ./src/configuration/apiUrl.ts ***!
  \*************************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
const URL = 'https://raycast.herokuapp.com/api';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kovos\Documents\projects\game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game-level/game-level.component */
    "./src/app/game-level/game-level.component.ts");
    /* harmony import */


    var _login_check_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-check.guard */
    "./src/app/login-check.guard.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'game',
      component: _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_2__["GameLevelComponent"],
      canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_3__["LoginCheckGuard"]]
    }, {
      path: 'login',
      component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
      canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_3__["LoginCheckGuard"]]
    }, {
      path: 'register',
      component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
      canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_3__["LoginCheckGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'game';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game-level/game-level.component */
    "./src/app/game-level/game-level.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");
    /* harmony import */


    var _game_level_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./game-level/menu/menu.component */
    "./src/app/game-level/menu/menu.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _game_level_finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./game-level/finish-window/finish-window.component */
    "./src/app/game-level/finish-window/finish-window.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _game_level_game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./game-level/game-loads/game-loads.component */
    "./src/app/game-level/game-loads/game-loads.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_4__["GameLevelComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"], _game_level_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _game_level_finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_11__["FinishWindowComponent"], _game_level_game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_14__["GameLoadsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _game_level_game_level_component__WEBPACK_IMPORTED_MODULE_4__["GameLevelComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"], _game_level_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _game_level_finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_11__["FinishWindowComponent"], _game_level_game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_14__["GameLoadsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game-level/finish-window/finish-window.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/game-level/finish-window/finish-window.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FinishWindowComponent */

  /***/
  function srcAppGameLevelFinishWindowFinishWindowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishWindowComponent", function () {
      return FinishWindowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function FinishWindowComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishWindowComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.restartLevel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "start new level");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your time is: ", ctx_r27.finishTime, " seconds!");
      }
    }

    var FinishWindowComponent =
    /*#__PURE__*/
    function () {
      function FinishWindowComponent() {
        _classCallCheck(this, FinishWindowComponent);

        this.startNewLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isModalDisplayed = false;
        this.ngUnsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(FinishWindowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.levelFinishedEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe$)).subscribe(function () {
            _this.isModalDisplayed = true;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe$.next();
          this.ngUnsubscribe$.complete();
        }
      }, {
        key: "restartLevel",
        value: function restartLevel() {
          this.startNewLevel.emit();
          this.isModalDisplayed = false;
        }
      }]);

      return FinishWindowComponent;
    }();

    FinishWindowComponent.ɵfac = function FinishWindowComponent_Factory(t) {
      return new (t || FinishWindowComponent)();
    };

    FinishWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinishWindowComponent,
      selectors: [["app-finish-window"]],
      inputs: {
        levelFinishedEmitter: "levelFinishedEmitter",
        finishTime: "finishTime"
      },
      outputs: {
        startNewLevel: "startNewLevel"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "modal-background", 4, "ngIf"], [1, "modal-background"], [1, "modal-itself"], [1, "modal-text"], ["mat-raised-button", "", 1, "modal-button", 3, "click"]],
      template: function FinishWindowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FinishWindowComponent_div_0_Template, 6, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalDisplayed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #444447;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: aqua;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9maW5pc2gtd2luZG93L0M6XFxVc2Vyc1xca292b3NcXERvY3VtZW50c1xccHJvamVjdHNcXGdhbWUvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxtb2RhbC13aXRoLWJsdXIuc2NzcyIsInNyYy9hcHAvZ2FtZS1sZXZlbC9maW5pc2gtd2luZG93L2ZpbmlzaC13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDREY7O0FERUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1sZXZlbC9maW5pc2gtd2luZG93L2ZpbmlzaC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLm1vZGFsLWl0c2VsZiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgLm1vZGFsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDc7XHJcbn1cclxuLm1vZGFsLXRleHQge1xyXG4gIGNvbG9yOiBhcXVhO1xyXG59XHJcbiIsIi5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1cblxuLm1vZGFsLWl0c2VsZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubW9kYWwtaXRzZWxmIC5tb2RhbC1idXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubWF0LWNhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ3O1xufVxuXG4ubW9kYWwtdGV4dCB7XG4gIGNvbG9yOiBhcXVhO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-finish-window',
          templateUrl: './finish-window.component.html',
          styleUrls: ['./finish-window.component.scss']
        }]
      }], function () {
        return [];
      }, {
        levelFinishedEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        finishTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startNewLevel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game-level/game-level.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/game-level/game-level.component.ts ***!
    \****************************************************/

  /*! exports provided: GameLevelComponent */

  /***/
  function srcAppGameLevelGameLevelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameLevelComponent", function () {
      return GameLevelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _scripts_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scripts/draw */
    "./src/app/game-level/scripts/draw.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./finish-window/finish-window.component */
    "./src/app/game-level/finish-window/finish-window.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/game-level/menu/menu.component.ts");
    /* harmony import */


    var _game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./game-loads/game-loads.component */
    "./src/app/game-level/game-loads/game-loads.component.ts");

    function GameLevelComponent_app_menu_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openCloseMenu", function GameLevelComponent_app_menu_15_Template_app_menu_openCloseMenu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.openCloseMenu($event);
        })("startLevel", function GameLevelComponent_app_menu_15_Template_app_menu_startLevel_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.startLevel($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAuthorizedUser", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.isAuthorizedUser$));
      }
    }

    function GameLevelComponent_app_game_loads_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-game-loads", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openCloseMenu", function GameLevelComponent_app_game_loads_16_Template_app_game_loads_openCloseMenu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.openCloseMenu($event);
        })("startLevel", function GameLevelComponent_app_game_loads_16_Template_app_game_loads_startLevel_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.startLevel($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GameLevelComponent =
    /*#__PURE__*/
    function () {
      function GameLevelComponent(loginService) {
        var _this2 = this;

        _classCallCheck(this, GameLevelComponent);

        this.loginService = loginService;
        this.levelFinishedEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentMenuId = -1;

        this.ESCBtnPressHandler = function (event) {
          if (event.keyCode === 27 && !_this2.isLevelFinished) {
            _this2.openCloseMenu();
          }
        };
      }

      _createClass(GameLevelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startLevel();
          this.initRestartKeyListener();
          document.addEventListener('keydown', this.ESCBtnPressHandler);
          this.isAuthorizedUser$ = this.loginService.isAuthorized().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          document.removeEventListener('keydown', this.ESCBtnPressHandler);
        }
      }, {
        key: "openCloseMenu",
        value: function openCloseMenu() {
          var menuId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (this.currentMenuId == -1) {
            ++this.currentMenuId;
          } else if (!menuId) {
            --this.currentMenuId;
          } else {
            this.currentMenuId = menuId;
          }

          if (this.currentMenuId == -1 && menuId != -1) {
            Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["startGameInterval"])();
          } else {
            Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["clearGameInterval"])();
          }
        }
      }, {
        key: "initRestartKeyListener",
        value: function initRestartKeyListener() {
          var _this3 = this;

          document.addEventListener('keydown', function (event) {
            if (event.keyCode === 82 && !_this3.isLevelFinished) {
              _this3.startLevel();
            }
          });
        }
      }, {
        key: "startLevel",
        value: function startLevel() {
          var _this4 = this;

          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            preloadData: null,
            size: null
          },
              preloadData = _ref.preloadData,
              size = _ref.size;

          this.isLevelFinished = false;
          clearInterval(this.interval);
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["startLevel"])(preloadData, size);
          this.interval = setInterval(function () {
            _this4.levelTime = Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["getLevelTime"])();

            if (Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["getIsLevelFinished"])()) {
              clearInterval(_this4.interval);

              _this4.finishLevel();

              _this4.levelFinishedEmitter.next();
            }
          }, 100);
        }
      }, {
        key: "finishLevel",
        value: function finishLevel() {
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["clearGameInterval"])();
          this.isLevelFinished = true;
        }
      }, {
        key: "moveForward",
        value: function moveForward() {
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerMoveForward"])();
        }
      }, {
        key: "moveBackward",
        value: function moveBackward() {
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerMoveBack"])();
        }
      }, {
        key: "rotateLeft",
        value: function rotateLeft() {
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerRotateLeft"])();
        }
      }, {
        key: "rotateRight",
        value: function rotateRight() {
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerRotateRight"])();
        }
      }, {
        key: "stopRotating",
        value: function stopRotating() {
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerStopRotating"])();
        }
      }, {
        key: "stopMoving",
        value: function stopMoving() {
          Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_3__["playerStopMoving"])();
        }
      }]);

      return GameLevelComponent;
    }();

    GameLevelComponent.ɵfac = function GameLevelComponent_Factory(t) {
      return new (t || GameLevelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]));
    };

    GameLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameLevelComponent,
      selectors: [["app-game-level"]],
      decls: 23,
      vars: 5,
      consts: [["id", "canvas"], ["id", "canvasPlayWindow"], [1, "buttons-layer"], ["color", "primary", "mat-fab", "", "aria-label", "Example icon button with a menu icon", 1, "open-menu-button", 3, "click"], [1, "move-buttons"], [1, "button-pair-wrapper"], ["mat-flat-button", "", "id", "btn-top", 1, "control-button", 3, "touchstart", "touchend"], ["mat-flat-button", "", "id", "btn-right", 1, "control-button", 3, "touchstart", "touchend"], ["mat-flat-button", "", "id", "btn-left", 1, "control-button", 3, "touchstart", "touchend"], ["mat-flat-button", "", "id", "btn-bottom", 1, "control-button", 3, "touchstart", "touchend"], [1, "timer"], [3, "isAuthorizedUser", "openCloseMenu", "startLevel", 4, "ngIf"], [3, "openCloseMenu", "startLevel", 4, "ngIf"], [3, "levelFinishedEmitter", "finishTime", "startNewLevel"], [1, "rotate-device"], ["aria-hidden", "false", "aria-label", "Example refresh icon"], [3, "isAuthorizedUser", "openCloseMenu", "startLevel"], [3, "openCloseMenu", "startLevel"]],
      template: function GameLevelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameLevelComponent_Template_button_click_3_listener() {
            return ctx.openCloseMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_8_listener() {
            return ctx.moveForward();
          })("touchend", function GameLevelComponent_Template_button_touchend_8_listener() {
            return ctx.stopMoving();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_9_listener() {
            return ctx.rotateRight();
          })("touchend", function GameLevelComponent_Template_button_touchend_9_listener() {
            return ctx.stopRotating();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_11_listener() {
            return ctx.rotateLeft();
          })("touchend", function GameLevelComponent_Template_button_touchend_11_listener() {
            return ctx.stopRotating();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GameLevelComponent_Template_button_touchstart_12_listener() {
            return ctx.moveBackward();
          })("touchend", function GameLevelComponent_Template_button_touchend_12_listener() {
            return ctx.stopMoving();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GameLevelComponent_app_menu_15_Template, 2, 3, "app-menu", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GameLevelComponent_app_game_loads_16_Template, 1, 0, "app-game-loads", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-finish-window", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("startNewLevel", function GameLevelComponent_Template_app_finish_window_startNewLevel_17_listener() {
            return ctx.startLevel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ROTATE YOUR DEVICE! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.levelTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuId == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuId == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("levelFinishedEmitter", ctx.levelFinishedEmitter.asObservable())("finishTime", ctx.levelTime);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _finish_window_finish_window_component__WEBPACK_IMPORTED_MODULE_8__["FinishWindowComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _game_loads_game_loads_component__WEBPACK_IMPORTED_MODULE_10__["GameLoadsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  width: 15vw;\n  min-width: 200px;\n  position: absolute;\n}\n\n#canvasPlayWindow[_ngcontent-%COMP%] {\n  width: calc(100vw - (100vw - 100%));\n  height: calc(var(--vh, 1vh) * 100);\n}\n\n.timer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: aqua;\n  font-size: 16px;\n  font-weight: 400px;\n  padding: 5px;\n  background-color: #0002;\n  border-radius: 4px;\n}\n\n.buttons-layer[_ngcontent-%COMP%], .rotate-device[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (orientation: portrait) {\n  .rotate-device[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100vw;\n    height: calc(var(--vh, 1vh) * 100);\n    background-color: #444447;\n    color: aqua;\n    font-size: 16px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  #canvas[_ngcontent-%COMP%] {\n    right: 0;\n  }\n\n  .buttons-layer[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    width: 100vw;\n    height: calc(var(--vh, 1vh) * 100);\n    top: 0;\n    left: 0;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .open-menu-button[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    background-color: #0008;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 4vw;\n    bottom: 4vw;\n    width: 17vw;\n    height: 17vw;\n    border-radius: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    transform: rotate(45deg);\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%]   .button-pair-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 45%;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%]   .control-button[_ngcontent-%COMP%] {\n    width: 45%;\n    height: 100%;\n    margin: 0;\n    border-radius: 10%;\n    background-color: #0008;\n  }\n  .buttons-layer[_ngcontent-%COMP%]   .move-buttons[_ngcontent-%COMP%]   .control-button.mat-flat-button[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxnYW1lLWxldmVsXFxnYW1lLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYW1lLWxldmVsL2dhbWUtbGV2ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQ0FBQTtFQUNBLGtDQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTs7RUFFRSxhQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLGtDQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLFFBQUE7RUNHRjs7RUREQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxrQ0FBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VDSUY7RURGRTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSx1QkFBQTtFQ0lKO0VEREU7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDhCQUFBO0lBQ0Esd0JBQUE7RUNHSjtFRERJO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNHTjtFREFJO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtFQ0VOO0VERE07SUFDRSxZQUFBO0VDR1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtbGV2ZWwvZ2FtZS1sZXZlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jY2FudmFzIHtcclxuICB3aWR0aDogMTV2dztcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4jY2FudmFzUGxheVdpbmRvdyB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxufVxyXG5cclxuLnRpbWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgY29sb3I6IGFxdWE7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1sYXllcixcclxuLnJvdGF0ZS1kZXZpY2Uge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAucm90YXRlLWRldmljZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDc7XHJcbiAgICBjb2xvcjogYXF1YTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgI2NhbnZhcyB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgLmJ1dHRvbnMtbGF5ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAub3Blbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwODtcclxuICAgIH1cclxuXHJcbiAgICAubW92ZS1idXR0b25zIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA0dnc7XHJcbiAgICAgIGJvdHRvbTogNHZ3O1xyXG4gICAgICB3aWR0aDogMTd2dztcclxuICAgICAgaGVpZ2h0OiAxN3Z3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cclxuICAgICAgLmJ1dHRvbi1wYWlyLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udHJvbC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDg7XHJcbiAgICAgICAgJi5tYXQtZmxhdC1idXR0b24ge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NhbnZhcyB7XG4gIHdpZHRoOiAxNXZ3O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNjYW52YXNQbGF5V2luZG93IHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG59XG5cbi50aW1lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgY29sb3I6IGFxdWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5idXR0b25zLWxheWVyLFxuLnJvdGF0ZS1kZXZpY2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5yb3RhdGUtZGV2aWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ3O1xuICAgIGNvbG9yOiBhcXVhO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICNjYW52YXMge1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmJ1dHRvbnMtbGF5ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAub3Blbi1tZW51LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4O1xuICB9XG4gIC5idXR0b25zLWxheWVyIC5tb3ZlLWJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0dnc7XG4gICAgYm90dG9tOiA0dnc7XG4gICAgd2lkdGg6IDE3dnc7XG4gICAgaGVpZ2h0OiAxN3Z3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAubW92ZS1idXR0b25zIC5idXR0b24tcGFpci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAubW92ZS1idXR0b25zIC5jb250cm9sLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwODtcbiAgfVxuICAuYnV0dG9ucy1sYXllciAubW92ZS1idXR0b25zIC5jb250cm9sLWJ1dHRvbi5tYXQtZmxhdC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameLevelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-level',
          templateUrl: './game-level.component.html',
          styleUrls: ['./game-level.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game-level/game-loads/game-loads.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/game-level/game-loads/game-loads.component.ts ***!
    \***************************************************************/

  /*! exports provided: GameLoadsComponent */

  /***/
  function srcAppGameLevelGameLoadsGameLoadsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameLoadsComponent", function () {
      return GameLoadsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/game-save-load.service */
    "./src/app/services/game-save-load.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function GameLoadsComponent_ng_container_3_ng_container_1_button_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lvlSize_r38 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", lvlSize_r38, "x", lvlSize_r38, " ");
      }
    }

    function GameLoadsComponent_ng_container_3_ng_container_1_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameLoadsComponent_ng_container_3_ng_container_1_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var save_r36 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r39.loadGame(save_r36._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameLoadsComponent_ng_container_3_ng_container_1_button_1_span_4_Template, 2, 2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var save_r36 = ctx.$implicit;

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, save_r36.timestamp, ctx_r35.dateFormat), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", save_r36.levelPreload.levelSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", save_r36.levelTime / 1000, "s ");
      }
    }

    function GameLoadsComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameLoadsComponent_ng_container_3_ng_container_1_button_1_Template, 7, 6, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gameSaves_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gameSaves_r31);
      }
    }

    function GameLoadsComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No game saves to load");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameLoadsComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameLoadsComponent_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameLoadsComponent_ng_container_3_ng_template_2_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gameSaves_r31 = ctx.ngIf;

        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameSaves_r31.length)("ngIfElse", _r33);
      }
    }

    var GameLoadsComponent =
    /*#__PURE__*/
    function () {
      function GameLoadsComponent(loginService, gameSaveLoadService) {
        _classCallCheck(this, GameLoadsComponent);

        this.loginService = loginService;
        this.gameSaveLoadService = gameSaveLoadService;
        this.openCloseMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dateFormat = 'MMM d, y, HH:mm:ss';
      }

      _createClass(GameLoadsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gameSaves$ = this.gameSaveLoadService.getGameSaves(this.loginService.currentUserId);
        }
      }, {
        key: "loadGame",
        value: function loadGame(saveId) {
          var _this5 = this;

          this.gameSaveLoadService.getGameData(saveId, this.loginService.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (gameSave) {
            _this5.openCloseMenu.emit(-1);

            _this5.startLevel.emit({
              preloadData: gameSave
            });
          });
        }
      }]);

      return GameLoadsComponent;
    }();

    GameLoadsComponent.ɵfac = function GameLoadsComponent_Factory(t) {
      return new (t || GameLoadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_3__["GameSaveLoadService"]));
    };

    GameLoadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameLoadsComponent,
      selectors: [["app-game-loads"]],
      outputs: {
        openCloseMenu: "openCloseMenu",
        startLevel: "startLevel"
      },
      decls: 5,
      vars: 3,
      consts: [[1, "modal-background"], [1, "modal-itself"], [1, "inside-container"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["nothingFound", ""], ["class", "modal-button", "mat-raised-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "modal-button", 3, "click"], ["class", "lvl-size", 4, "ngIf"], [1, "lvl-size"], [1, "modal-text"]],
      template: function GameLoadsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameLoadsComponent_ng_container_3_Template, 4, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.gameSaves$));
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #444447;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: aqua;\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  max-height: 250px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  padding: 0 5px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\n  background-color: transparent;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #cbcbcb;\n  border-radius: 4px;\n  border: 0.1px solid #b7b7b7;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .inside-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #909090;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]   .lvl-size[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-right: auto;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]    .mat-button-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9nYW1lLWxvYWRzL0M6XFxVc2Vyc1xca292b3NcXERvY3VtZW50c1xccHJvamVjdHNcXGdhbWUvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxtb2RhbC13aXRoLWJsdXIuc2NzcyIsInNyYy9hcHAvZ2FtZS1sZXZlbC9nYW1lLWxvYWRzL2dhbWUtbG9hZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUtbGV2ZWwvZ2FtZS1sb2Fkcy9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxnYW1lLWxldmVsXFxnYW1lLWxvYWRzXFxnYW1lLWxvYWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QUNoQ0E7RUFDRSxpQkFBQTtBRG1DRjs7QUNsQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURvQ0o7O0FDbkNJO0VBQ0UsVUFBQTtBRHFDTjs7QUNsQ0k7RUFDRSw2QkFBQTtBRG9DTjs7QUNqQ0k7RUFDRSxvREFBQTtFQUNBLGtCQUFBO0FEbUNOOztBQ2hDSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQkFBQTtBRGlDTjs7QUM5Qkk7RUFDRSx5QkFBQTtBRGdDTjs7QUM3QkU7RUFDRSxZQUFBO0FEK0JKOztBQzlCSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QURnQ047O0FDOUJJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBRGdDTiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtbGV2ZWwvZ2FtZS1sb2Fkcy9nYW1lLWxvYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJhY2tncm91bmQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuXHJcbi5tb2RhbC1pdHNlbGYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIC5tb2RhbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ3O1xyXG59XHJcbi5tb2RhbC10ZXh0IHtcclxuICBjb2xvcjogYXF1YTtcclxufVxyXG4iLCIubW9kYWwtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5tb2RhbC1pdHNlbGYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tb2RhbC1pdHNlbGYgLm1vZGFsLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0Nztcbn1cblxuLm1vZGFsLXRleHQge1xuICBjb2xvcjogYXF1YTtcbn1cblxuLm1vZGFsLWl0c2VsZiB7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuLm1vZGFsLWl0c2VsZiAuaW5zaWRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4ubW9kYWwtaXRzZWxmIC5pbnNpZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG4ubW9kYWwtaXRzZWxmIC5pbnNpZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1vZGFsLWl0c2VsZiAuaW5zaWRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubW9kYWwtaXRzZWxmIC5pbnNpZGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjYjdiN2I3O1xufVxuLm1vZGFsLWl0c2VsZiAuaW5zaWRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MDkwO1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uIC5sdmwtc2l6ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubW9kYWwtaXRzZWxmIC5tb2RhbC1idXR0b24gOjpuZy1kZWVwLm1hdC1idXR0b24td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vYXBwL3NoYXJlZC9zdHlsZXMvbW9kYWwtd2l0aC1ibHVyLnNjc3MnO1xyXG4ubW9kYWwtaXRzZWxmIHtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAuaW5zaWRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjYmNiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICBib3JkZXI6IDAuMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MDkwO1xyXG4gICAgfVxyXG4gIH1cclxuICAubW9kYWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIC5sdmwtc2l6ZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameLoadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-loads',
          templateUrl: './game-loads.component.html',
          styleUrls: ['./game-loads.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_3__["GameSaveLoadService"]
        }];
      }, {
        openCloseMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        startLevel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game-level/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/game-level/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppGameLevelMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _scripts_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scripts/draw */
    "./src/app/game-level/scripts/draw.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/game-save-load.service */
    "./src/app/services/game-save-load.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function MenuComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.loadGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Load game ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.saveGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save game ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(loginService, gameSaveLoadService) {
        _classCallCheck(this, MenuComponent);

        this.loginService = loginService;
        this.gameSaveLoadService = gameSaveLoadService;
        this.openCloseMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {
          this.loginService.logOut();
        }
      }, {
        key: "loadGame",
        value: function loadGame() {
          this.openCloseMenu.emit(1);
        }
      }, {
        key: "startLevelNewLevel",
        value: function startLevelNewLevel() {
          this.openCloseMenu.emit(-1);
          this.startLevel.emit({
            size: 40
          });
        }
      }, {
        key: "saveGame",
        value: function saveGame() {
          var _this6 = this;

          this.gameSaveLoadService.saveGameData(Object(_scripts_draw__WEBPACK_IMPORTED_MODULE_2__["createGameSave"])(), this.loginService.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
            _this6.openCloseMenu.emit(-1);
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__["GameSaveLoadService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      inputs: {
        isAuthorizedUser: "isAuthorizedUser"
      },
      outputs: {
        openCloseMenu: "openCloseMenu",
        startLevel: "startLevel"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "modal-background"], [1, "modal-itself"], ["mat-raised-button", "", 1, "modal-button", 3, "click"], ["class", "modal-button", "mat-raised-button", "", 3, "click", 4, "ngIf"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_2_listener() {
            return ctx.openCloseMenu.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to game ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_4_listener() {
            return ctx.startLevelNewLevel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start new level ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_button_6_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_button_7_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_8_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthorizedUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthorizedUser);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #444447;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: aqua;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1sZXZlbC9tZW51L0M6XFxVc2Vyc1xca292b3NcXERvY3VtZW50c1xccHJvamVjdHNcXGdhbWUvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxtb2RhbC13aXRoLWJsdXIuc2NzcyIsInNyYy9hcHAvZ2FtZS1sZXZlbC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDREY7O0FERUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1sZXZlbC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLm1vZGFsLWl0c2VsZiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgLm1vZGFsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDc7XHJcbn1cclxuLm1vZGFsLXRleHQge1xyXG4gIGNvbG9yOiBhcXVhO1xyXG59XHJcbiIsIi5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1cblxuLm1vZGFsLWl0c2VsZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubW9kYWwtaXRzZWxmIC5tb2RhbC1idXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubWF0LWNhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ3O1xufVxuXG4ubW9kYWwtdGV4dCB7XG4gIGNvbG9yOiBhcXVhO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: src_app_services_game_save_load_service__WEBPACK_IMPORTED_MODULE_4__["GameSaveLoadService"]
        }];
      }, {
        isAuthorizedUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openCloseMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        startLevel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game-level/scripts/draw.ts":
  /*!********************************************!*\
    !*** ./src/app/game-level/scripts/draw.ts ***!
    \********************************************/

  /*! exports provided: createGameSave, startGameInterval, clearGameInterval, getLevelTime, getIsLevelFinished, startLevel, playerMoveForward, playerMoveBack, playerStopMoving, playerRotateLeft, playerRotateRight, playerStopRotating */

  /***/
  function srcAppGameLevelScriptsDrawTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createGameSave", function () {
      return createGameSave;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startGameInterval", function () {
      return startGameInterval;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearGameInterval", function () {
      return clearGameInterval;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLevelTime", function () {
      return getLevelTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIsLevelFinished", function () {
      return getIsLevelFinished;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startLevel", function () {
      return startLevel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerMoveForward", function () {
      return playerMoveForward;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerMoveBack", function () {
      return playerMoveBack;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerStopMoving", function () {
      return playerStopMoving;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerRotateLeft", function () {
      return playerRotateLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerRotateRight", function () {
      return playerRotateRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerStopRotating", function () {
      return playerStopRotating;
    });

    var canvas;
    var canvasPlayWindow;
    var body;
    var ctx;
    var ctxPlay;
    var currentLevel;
    var currentPlayer;
    var defaultMoveVelocity = 10;
    var defaultRotateVelocity = 1;
    var textureDim = 64;
    var defaultLevelSize = 40;
    var rayCount = 128;
    var FOV = 76;
    var halfFOV = FOV / 2;
    var mainColor = '#000';
    var secondaryColor = '#666';
    var thirdColor = '#5d7';
    var playerColor = '#1d7';
    var canvasWidth = 1178;
    var canvasHeight = 512;
    var playerEyesVerticalPosition = [-10, 15];
    var playerEyesVerticalChange = [-0.5, 0.28];
    var isLevelFinished = false;
    var textures = new Image();
    textures.src = './assets/images/walls.png';

    function normilizeAngle(angle) {
      angle = angle % (2 * Math.PI);

      if (angle < 0) {
        angle += 2 * Math.PI;
      }

      return angle;
    }

    function calculateDistance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function convertToRadians(angle) {
      return angle * (Math.PI / 180);
    }

    function createGameSave() {
      return {
        playerPreload: currentPlayer.getPlayerData(),
        levelPreload: currentLevel.getLevelData(),
        levelTime: levelTimer.time,
        timestamp: new Date()
      };
    } // function rescaleCanvas(canvas: HTMLCanvasElement) {
    //     canvas.style.width = `${document.body.clientWidth}px`;
    //     canvas.style.height = `${document.body.clientHeight}px`;
    // }


    var Ray =
    /*#__PURE__*/
    function () {
      function Ray(ctx, level, x, y, playerRotateAngle, angleIncrement, columnIndex) {
        _classCallCheck(this, Ray);

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

      _createClass(Ray, [{
        key: "setAngleAndPosition",
        value: function setAngleAndPosition(angle, x, y) {
          this.playerAngle = angle;
          this.angle = normilizeAngle(angle + this.angleIncrement);
          this.x = x;
          this.y = y;
        }
      }, {
        key: "cast",
        value: function cast() {
          this.xIntercept = 0;
          this.yIntercept = 0;
          this.xStep = 0;
          this.yStep = 0;
          this.isLookingDown = false;
          this.isLookingLeft = false;
          this.angle < Math.PI && (this.isLookingDown = true);
          this.angle > Math.PI / 2 && this.angle < 3 * Math.PI / 2 && (this.isLookingLeft = true);
          var tan = Math.tan(this.angle);
          var yTemp = this.y / this.level.tileSize;
          this.yIntercept = (this.isLookingDown ? Math.ceil(yTemp) : Math.floor(yTemp)) * this.level.tileSize; //tile y coord

          this.xIntercept = this.x + (this.yIntercept - this.y) / tan; //neighbor tile

          this.yStep = this.isLookingDown ? this.level.tileSize : -this.level.tileSize; //calculating Y step

          this.xStep = this.yStep / tan; //calculating X step according to angle

          var nextXHorizontal = this.xIntercept;
          var nextYHorizontal = this.yIntercept;
          !this.isLookingDown && --nextYHorizontal; //to count tile behind current wall

          var isCollidingHorizontal = false;

          while (!isCollidingHorizontal && nextXHorizontal >= 0 && nextXHorizontal <= canvasWidth && nextYHorizontal >= 0 && nextYHorizontal <= canvasHeight) {
            var xCollision = nextXHorizontal / this.level.tileSize ^ 0; //j for level array

            var yCollision = nextYHorizontal / this.level.tileSize ^ 0; //i for level array

            if (this.level.isCollision(xCollision, yCollision)) {
              isCollidingHorizontal = true;
              this.wallHitXHorizontal = nextXHorizontal;
              this.wallHitYHorizontal = nextYHorizontal;
            } else {
              nextXHorizontal += this.xStep;
              nextYHorizontal += this.yStep;
            }
          }

          var tempX = this.x / this.level.tileSize;
          this.xIntercept = (this.isLookingLeft ? Math.floor(tempX) : Math.ceil(tempX)) * this.level.tileSize; //tile x coord

          this.yIntercept = this.y + (this.xIntercept - this.x) * tan;
          this.xStep = this.isLookingLeft ? -this.level.tileSize : this.level.tileSize;
          this.yStep = this.xStep * tan;
          var nextXVertical = this.xIntercept;
          var nextYVertical = this.yIntercept;
          this.isLookingLeft && --nextXVertical;
          var isCollidingVertical = false;

          while (!isCollidingVertical && nextXVertical >= 0 && nextXVertical <= canvasWidth && nextYVertical >= 0 && nextYVertical <= canvasHeight) {
            var _xCollision = nextXVertical / this.level.tileSize ^ 0;

            var _yCollision = nextYVertical / this.level.tileSize ^ 0;

            if (this.level.isCollision(_xCollision, _yCollision)) {
              isCollidingVertical = true;
              this.wallHitXVertical = nextXVertical;
              this.wallHitYVertical = nextYVertical;
            } else {
              nextXVertical += this.xStep;
              nextYVertical += this.yStep;
            }
          } // find distance


          var horizontalDist = Number.MAX_VALUE;
          var verticalDist = Number.MAX_VALUE;

          if (isCollidingHorizontal) {
            horizontalDist = calculateDistance(this.x, this.y, this.wallHitXHorizontal, this.wallHitYHorizontal);
          }

          if (isCollidingVertical) {
            verticalDist = calculateDistance(this.x, this.y, this.wallHitXVertical, this.wallHitYVertical);
          }

          if (horizontalDist < verticalDist) {
            this.wallHitX = this.wallHitXHorizontal;
            this.wallHitY = this.wallHitYHorizontal;
            this.distanceToWall = horizontalDist;
            this.texturePixel = (this.wallHitX - (this.wallHitX / this.level.tileSize ^ 0) * this.level.tileSize) / this.level.tileSize * textureDim;
          } else {
            this.wallHitX = this.wallHitXVertical;
            this.wallHitY = this.wallHitYVertical;
            this.distanceToWall = verticalDist;
            this.texturePixel = (this.wallHitY - (this.wallHitY / this.level.tileSize ^ 0) * this.level.tileSize) / this.level.tileSize * textureDim;
          }

          this.level.clearMaskTile(this.wallHitX, this.wallHitY, this.isLookingDown, this.isLookingLeft);
          this.texturePixel = this.texturePixel ^ 0;
          this.textureId = this.level.getTile(this.wallHitX, this.wallHitY) - 1; // this.textureId = horizontalDist < verticalDist ? 0 : 1;
        }
      }, {
        key: "renderWall",
        value: function renderWall(ctx, eyesLevel) {
          var defaultWallHeight = this.level.tileSize;
          var defaultDistance = -(canvasHeight / 3) / Math.tan(halfFOV); //negative to become positive

          this.distanceToWall = this.distanceToWall * Math.cos(this.angle - this.playerAngle); //fisheye fix

          var wallHeight = defaultWallHeight / this.distanceToWall * defaultDistance;
          var y0 = (canvasHeight / 2 ^ 0) - (wallHeight / 2 ^ 0);
          var y1 = y0 + wallHeight;
          var imageHeight = y0 - y1;
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(textures, this.texturePixel, this.textureId * textureDim, 1, textureDim, this.columnIndex * (canvasWidth / rayCount), y1 + eyesLevel, canvasWidth / rayCount, imageHeight); // ctx.fillStyle = `#888`;
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
      }, {
        key: "draw",
        value: function draw() {
          this.ctx.beginPath();
          this.ctx.moveTo(this.x, this.y);
          this.ctx.lineTo(this.wallHitX, this.wallHitY);
          this.ctx.strokeStyle = '#f33';
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }]);

      return Ray;
    }();

    var Player =
    /*#__PURE__*/
    function () {
      function Player(ctx, currentLevel, playerPreload) {
        _classCallCheck(this, Player);

        this.rays = [];
        this.ctx = ctx;
        this.currentLevel = currentLevel; // random start
        // this.x = currentLevel.startingPoint.j * currentLevel.tileSize + currentLevel.tileSize/2;
        // this.y = currentLevel.startingPoint.i * currentLevel.tileSize + currentLevel.tileSize/2;

        if (playerPreload) {
          this.x = playerPreload.playerCoords.x;
          this.y = playerPreload.playerCoords.y;
          this.rotateAngle = playerPreload.playerRotateAngle;
        } else {
          this.x = currentLevel.tileSize * 1.5;
          this.y = currentLevel.tileSize * 1.5;
          this.rotateAngle = 0;
        }

        this.moveState = 0;
        this.rotateState = 0;
        this.eyesLevel = 0;
        this.doesEyesLevelChangingUp = true;
        this.moveVelocity = this.currentLevel.tileSize / canvasHeight * defaultMoveVelocity;
        this.rotateVelocity = defaultRotateVelocity * Math.PI / 180;
        this.rayCount = rayCount;
        var angleIncrementForRays = convertToRadians(FOV / this.rayCount);
        var raysStartAngle = convertToRadians(this.rotateAngle - halfFOV);

        for (var i = 0; i < this.rayCount; ++i, raysStartAngle += angleIncrementForRays) {
          this.rays[i] = new Ray(this.ctx, this.currentLevel, this.x, this.y, this.rotateAngle, raysStartAngle, i);
        }
      }

      _createClass(Player, [{
        key: "isOnFinish",
        value: function isOnFinish() {
          return (this.x / this.currentLevel.tileSize ^ 0) == this.currentLevel.finishPoint.j && (this.y / this.currentLevel.tileSize ^ 0) == this.currentLevel.finishPoint.i;
        }
      }, {
        key: "getPlayerData",
        value: function getPlayerData() {
          return {
            playerCoords: {
              x: this.x,
              y: this.y
            },
            playerRotateAngle: this.rotateAngle
          };
        }
      }, {
        key: "tick",
        value: function tick() {
          this.updatePosition();
          this.castRays();
          this.renderRays();
          this.draw();
        }
      }, {
        key: "draw",
        value: function draw() {
          this.ctx.fillStyle = playerColor;
          this.ctx.fillRect(this.x - 3, this.y - 3, 6, 6);
        }
      }, {
        key: "castRays",
        value: function castRays() {
          this.rays.forEach(function (ray) {
            return ray.cast();
          });
          this.rays.forEach(function (ray) {
            return ray.draw();
          });
        }
      }, {
        key: "renderRays",
        value: function renderRays() {
          var _this7 = this;

          this.rays.forEach(function (ray) {
            return ray.renderWall(ctxPlay, _this7.eyesLevel);
          });
        }
      }, {
        key: "forward",
        value: function forward() {
          this.moveState = 1;
        }
      }, {
        key: "back",
        value: function back() {
          this.moveState = -1;
        }
      }, {
        key: "left",
        value: function left() {
          this.rotateState = -1;
        }
      }, {
        key: "right",
        value: function right() {
          this.rotateState = 1;
        }
      }, {
        key: "moveStateZero",
        value: function moveStateZero() {
          this.moveState = 0;
        }
      }, {
        key: "rotateStateZero",
        value: function rotateStateZero() {
          this.rotateState = 0;
        }
      }, {
        key: "updatePosition",
        value: function updatePosition() {
          var _this8 = this;

          isLevelFinished = this.isOnFinish();
          var newX = this.x + this.moveState * Math.cos(this.rotateAngle) * this.moveVelocity;
          var newY = this.y + this.moveState * Math.sin(this.rotateAngle) * this.moveVelocity;

          if (this.moveState) {
            if (this.eyesLevel > -playerEyesVerticalPosition[0] || this.eyesLevel < -playerEyesVerticalPosition[1]) {
              if (this.doesEyesLevelChangingUp) {
                this.eyesLevel = -playerEyesVerticalPosition[1];
              } else {
                this.eyesLevel = -playerEyesVerticalPosition[0];
              }

              this.doesEyesLevelChangingUp = !this.doesEyesLevelChangingUp;
            }

            if (this.doesEyesLevelChangingUp) {
              this.eyesLevel += playerEyesVerticalChange[0];
            } else {
              this.eyesLevel += playerEyesVerticalChange[1];
            }
          }

          !this.isCollision(newX, newY) && (this.x = newX, this.y = newY);
          this.rotateAngle += this.rotateState * this.rotateVelocity;
          this.rotateAngle = normilizeAngle(this.rotateAngle);
          this.rays.forEach(function (ray) {
            return ray.setAngleAndPosition(_this8.rotateAngle, _this8.x, _this8.y);
          });
        }
      }, {
        key: "isCollision",
        value: function isCollision(x, y) {
          var playerX = x / this.currentLevel.tileSize ^ 0;
          var playerY = y / this.currentLevel.tileSize ^ 0;
          return this.currentLevel.isCollision(playerX, playerY);
        }
      }]);

      return Player;
    }();

    var Level =
    /*#__PURE__*/
    function () {
      function Level(ctx, levelSize, levelPreload) {
        _classCallCheck(this, Level);

        this.ctx = ctx;
        this.startingPoint = {
          i: Math.round(Math.random() * (levelSize - 3)) + 1,
          j: Math.round(Math.random() * (levelSize - 3)) + 1
        };

        if (levelPreload) {
          var _levelPreload$levelDa = _slicedToArray(levelPreload.levelData, 2);

          this.levelArray = _levelPreload$levelDa[0];
          this.mask = _levelPreload$levelDa[1];
          this.finishPoint = levelPreload.finishPoint;
          this.tilesCount = this.levelArray[0].length;
        } else {
          var _this$generateLevel = this.generateLevel(levelSize);

          var _this$generateLevel2 = _slicedToArray(_this$generateLevel, 2);

          this.levelArray = _this$generateLevel2[0];
          this.mask = _this$generateLevel2[1];
          this.finishPoint = {
            i: levelSize - 2,
            j: levelSize - 2
          };
          this.tilesCount = levelSize;
        }

        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.tileSize = this.tileSize = this.canvasWidth / this.tilesCount ^ 0;
      }

      _createClass(Level, [{
        key: "getLevelData",
        value: function getLevelData() {
          return {
            levelData: [this.levelArray, this.mask],
            finishPoint: this.finishPoint,
            levelSize: this.tilesCount
          };
        }
      }, {
        key: "getTile",
        value: function getTile(x, y) {
          return this.levelArray[y / this.tileSize ^ 0][x / this.tileSize ^ 0];
        }
      }, {
        key: "generateLevel",
        value: function generateLevel(size) {
          var lvlMap = Array(size);
          var mask;

          for (var _i2 = 0; _i2 < size; ++_i2) {
            lvlMap[_i2] = Array(size).fill(1);
          }

          mask = lvlMap.map(function (row) {
            return row.slice();
          }); //.fill(0)

          var lvlStack = [];
          lvlStack.push({
            i: 1,
            j: 1
          });
          var i = this.startingPoint.i,
              j = this.startingPoint.j;
          lvlMap[i][j] = 0;

          while (1) {
            // console.log('Searching neighbours of: ',i,j);
            if (this.isAvailableAnyNeighbour(lvlMap, i, j)) {
              lvlStack.push({
                i: i,
                j: j
              });
              var newI = i,
                  newJ = j;

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

                if (newI > 0 && newI < size - 1 && newJ > 0 && newJ < size - 1 && lvlMap[newI][newJ] && lvlMap[newI][newJ] != 0 && !this.doesAnyRadiusNeighbourIsPartOfPath({
                  i: i,
                  j: j
                }, lvlMap, newI, newJ)) break;
              }

              i = newI;
              j = newJ;
              lvlMap[i][j] = 0;
            } else if (!lvlStack.length) {
              break;
            } else {
              var previous = lvlStack.pop();

              if (previous) {
                i = previous.i;
                j = previous.j;
              }
            }
          }

          this.clearMapBlock(lvlMap, 2, 1, 1);
          this.clearMapBlock(lvlMap, 2, size - 3, size - 3);
          return [lvlMap, mask];
        }
      }, {
        key: "clearMapBlock",
        value: function clearMapBlock(lvlArray, size, i, j) {
          for (var x = i, xN = size; xN > 0; --xN, ++x) {
            for (var y = j, yN = size; yN > 0; --yN, ++y) {
              lvlArray[x][y] = 0;
            }
          }
        }
      }, {
        key: "isAvailableAnyNeighbour",
        value: function isAvailableAnyNeighbour(lvlMap, i, j) {
          var isHavingSpareNeighbour = false;
          var neighbourI = i,
              neighbourJ = j;

          for (var index = 0; index < 4; ++index) {
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

            if (neighbourI > 0 && neighbourI < lvlMap.length - 1 && neighbourJ > 0 && neighbourJ < lvlMap.length - 1 && lvlMap[neighbourI][neighbourJ]) {
              isHavingSpareNeighbour = true;

              if (isHavingSpareNeighbour) {
                isHavingSpareNeighbour = !this.doesAnyRadiusNeighbourIsPartOfPath({
                  i: i,
                  j: j
                }, lvlMap, neighbourI, neighbourJ);
              }

              if (isHavingSpareNeighbour) break;
            }

            neighbourI = i;
            neighbourJ = j;
          }

          return isHavingSpareNeighbour;
        }
      }, {
        key: "doesAnyRadiusNeighbourIsPartOfPath",
        value: function doesAnyRadiusNeighbourIsPartOfPath(exception, lvlMap, neighbourI, neighbourJ) {
          // console.log('Subneighbour: ', neighbourI,neighbourJ);
          var changes = {
            i: exception.i - neighbourI,
            j: exception.j - neighbourJ
          };
          var anyNeighbourIsPath = false;
          var startI = neighbourI,
              endI = neighbourI,
              startJ = neighbourJ,
              endJ = neighbourJ;

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
          } // console.log(`ranges: [i : ${startI}, ${endI} j : ${startJ}, ${endJ}]`);


          for (var i = startI; i <= endI; ++i) {
            for (var j = startJ; j <= endJ; ++j) {
              // console.log('Checking: ',i,j);
              if (i > 0 && i < lvlMap.length - 1 && j > 0 && j < lvlMap.length - 1 && !lvlMap[i][j]) {
                anyNeighbourIsPath = true; // console.log(i, j, ' is 0');

                break;
              }
            }
          }

          return anyNeighbourIsPath;
        }
      }, {
        key: "clearMaskTile",
        value: function clearMaskTile(hitX, hitY, down, left) {
          hitY += down ? 1 : -1;
          hitX += left ? -1 : 1;
          var jTileHit = hitX / this.tileSize ^ 0,
              iTileHit = hitY / this.tileSize ^ 0;
          this.mask[iTileHit][jTileHit] = 0;
        }
      }, {
        key: "draw",
        value: function draw() {
          var ignoreMask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          for (var i = 0; i < this.tilesCount; ++i) {
            for (var j = 0; j < this.tilesCount; ++j) {
              this.ctx.fillStyle = this.levelArray[i][j] && (!this.mask[i][j] || ignoreMask) ? mainColor : secondaryColor;
              this.ctx.fillRect(j * this.tileSize, i * this.tileSize, this.tileSize, this.tileSize);
            }
          }
        }
      }, {
        key: "drawFinishPoint",
        value: function drawFinishPoint() {
          this.ctx.fillStyle = thirdColor;
          this.ctx.fillRect(this.finishPoint.j * this.tileSize, this.finishPoint.i * this.tileSize, this.tileSize, this.tileSize);
        }
      }, {
        key: "isCollision",
        value: function isCollision(x, y) {
          if (y >= this.levelArray.length) {
            y = this.levelArray.length - 1;
          }

          return !!this.levelArray[y][x];
        }
      }]);

      return Level;
    }();

    function paintFloorAndCeiling(ctx) {
      ctx.fillStyle = '#566';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight / 2);
      ctx.fillStyle = '#442300';
      ctx.fillRect(0, canvasHeight / 2, canvasWidth, canvasHeight);
    }

    var gameInterval;
    var isGameRunning = false;
    var timeInterval;
    var audioObj = null;

    function animationFrameRepeat() {
      draw();
      gameInterval = requestAnimationFrame(animationFrameRepeat);
    }

    function startGameInterval() {
      gameInterval = animationFrameRepeat();
      isGameRunning = true;
    }

    function clearGameInterval() {
      cancelAnimationFrame(gameInterval);
      isGameRunning = false;
    }

    var levelTimer = {
      time: 0
    };

    function getLevelTime() {
      return (levelTimer.time / 1000).toFixed(1);
    }

    function getIsLevelFinished() {
      return isLevelFinished;
    }

    function clearTimerInterval() {
      clearInterval(timeInterval);
      levelTimer.time = 0;
    }

    function startTimerInterval() {
      timeInterval = setInterval(function () {
        if (isGameRunning) {
          levelTimer.time += 100;
        }
      }, 100);
    }

    function startLevel() {
      var loadGame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var levelSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _a, _b;

      isLevelFinished = false; // audioObj?.pause();
      // audioObj = null;
      // audioObj = new Audio('./assets/audio/amogus.mp4');
      // audioObj.addEventListener("canplaythrough", () => {
      //     audioObj.play();
      // });

      clearGameInterval();
      clearTimerInterval();
      startTimerInterval();
      canvas = document.getElementById('canvas');
      canvasPlayWindow = document.getElementById('canvasPlayWindow');
      ctx = canvas.getContext('2d');
      ctxPlay = canvasPlayWindow.getContext('2d'); // body = document.querySelector('body') as HTMLBodyElement;
      // if (body) {
      //   body.style.backgroundColor = secondaryColor;
      // }

      canvas.width = canvasHeight;
      canvas.height = canvasHeight;
      canvasPlayWindow.width = canvasWidth;
      canvasPlayWindow.height = canvasHeight; // rescaleCanvas(canvasPlayWindow);

      loadGame && (levelTimer.time = loadGame.levelTime);
      currentLevel = new Level(ctx, levelSize || defaultLevelSize, (_a = loadGame) === null || _a === void 0 ? void 0 : _a.levelPreload);
      currentPlayer = new Player(ctx, currentLevel, (_b = loadGame) === null || _b === void 0 ? void 0 : _b.playerPreload);
      startGameInterval();
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctxPlay.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      clearCanvas();
      paintFloorAndCeiling(ctxPlay);
      currentLevel.draw();
      currentPlayer.tick(); // currentPlayer.updatePosition();
      // currentPlayer.castRays();
      // currentPlayer.renderRays();
      // currentPlayer.draw();

      currentLevel.drawFinishPoint();
    } // document.addEventListener('DOMContentLoaded', startLevel);


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

    document.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 37:
          {
            //left
            currentPlayer.left();
            break;
          }

        case 39:
          {
            //right
            currentPlayer.right();
            break;
          }

        case 38:
          {
            //forward
            currentPlayer.forward();
            break;
          }

        case 40:
          {
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
    document.addEventListener('keyup', function (event) {
      switch (event.keyCode) {
        case 37:
          {
            //left
            currentPlayer.rotateStateZero();
            break;
          }

        case 39:
          {
            //right
            currentPlayer.rotateStateZero();
            break;
          }

        case 38:
          {
            //forward
            currentPlayer.moveStateZero();
            break;
          }

        case 40:
          {
            //backward
            currentPlayer.moveStateZero();
            break;
          }
      }
    });
    /***/
  },

  /***/
  "./src/app/login-check.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/login-check.guard.ts ***!
    \**************************************/

  /*! exports provided: LoginCheckGuard */

  /***/
  function srcAppLoginCheckGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCheckGuard", function () {
      return LoginCheckGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");

    var LoginCheckGuard =
    /*#__PURE__*/
    function () {
      function LoginCheckGuard(router, loginService) {
        _classCallCheck(this, LoginCheckGuard);

        this.router = router;
        this.loginService = loginService;
      }

      _createClass(LoginCheckGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isInLoginPage = state.url.includes('login') || state.url.includes('register');

          if (this.loginService.isLoggedIn()) {
            if (isInLoginPage) {
              this.router.navigateByUrl('/game');
            }

            return true;
          } else {
            if (isInLoginPage) {
              return true;
            } else {
              this.router.navigateByUrl('/login');
              return false;
            }
          }
        }
      }]);

      return LoginCheckGuard;
    }();

    LoginCheckGuard.ɵfac = function LoginCheckGuard_Factory(t) {
      return new (t || LoginCheckGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]));
    };

    LoginCheckGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginCheckGuard,
      factory: LoginCheckGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginCheckGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login-page/login-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-page/login-page.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function LoginPageComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min length of password is 8 symbols");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_mat_form_field_14_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.loginForm.get("passwordRepeat").errors["match"]);
      }
    }

    function LoginPageComponent_mat_form_field_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repeat password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginPageComponent_mat_form_field_14_mat_error_5_Template, 2, 1, "mat-error", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r9.isOnLoginPage));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.loginForm.get("passwordRepeat").errors);
      }
    }

    function LoginPageComponent_a_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "don't have account yet?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "already registered?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_button_21_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.logInAsUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign in ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r13.loginForm.valid);
      }
    }

    function LoginPageComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_23_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.register();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r15.loginForm.valid);
      }
    }

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(loginService, fb, router, activatedRoute) {
        _classCallCheck(this, LoginPageComponent);

        this.loginService = loginService;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginForm = this.fb.group({
          login: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
          passwordRepeat: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.isOnLoginPage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.isOnLoginPage.next(this.router.url.includes('login'));
          var passwordRepeatField = this.loginForm.get('passwordRepeat');
          this.activatedRoute.url.subscribe(function () {
            _this9.isOnLoginPage.next(_this9.router.url.includes('login'));

            var validators = [];
            !_this9.isOnLoginPage.value && validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            passwordRepeatField.setValidators(validators);
          });
          passwordRepeatField.valueChanges.subscribe(function (value) {
            if (value !== _this9.loginForm.get('password').value) {
              passwordRepeatField.setErrors({
                match: "passwords doesn't match"
              });
            } else {
              passwordRepeatField.setErrors(null);
            }
          });
        }
      }, {
        key: "logInAsGuest",
        value: function logInAsGuest() {
          this.loginService.logInAsGuest();
        }
      }, {
        key: "logInAsUser",
        value: function logInAsUser() {
          var _this10 = this;

          this.loginService.logIn(this.loginForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          })).subscribe(function (response) {
            if (response.error) {
              alert(response.error);
            } else {
              _this10.loginService.setUserIdToLocalStorage(response.userId);

              _this10.router.navigateByUrl('/game');
            }
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this11 = this;

          this.loginService.register(this.loginForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          })).subscribe(function (response) {
            if (response.error) {
              alert(response.error);
            } else {
              _this11.loginService.setUserIdToLocalStorage(response.userId);

              _this11.router.navigateByUrl('/game');
            }
          });
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 25,
      vars: 13,
      consts: [[1, "modal-background"], ["mat-raised-button", "", "color", "primary", 1, "as-guest", 3, "click"], [1, "modal-itself"], [1, "form", 3, "formGroup"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "type", "text", "formControlName", "login", "placeholder", "Login", "required", ""], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password", "required", ""], [4, "ngIf"], ["class", "form-field", "appearance", "outline", 4, "ngIf"], [1, "login-buttons"], ["routerLink", "/register", 4, "ngIf", "ngIfElse"], ["alreadyRegistered", ""], ["class", "modal-button sign-in-btn", "mat-raised-button", "", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["regButton", ""], ["matInput", "", "type", "password", "formControlName", "passwordRepeat", "placeholder", "Repeat password", 3, "required"], ["routerLink", "/register"], ["routerLink", "/login"], ["mat-raised-button", "", 1, "modal-button", "sign-in-btn", 3, "disabled", "click"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_1_listener() {
            return ctx.logInAsGuest();
          });

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
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, ctx.isOnLoginPage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx.isOnLoginPage))("ngIfElse", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, ctx.isOnLoginPage))("ngIfElse", _r14);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".modal-background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 16px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #444447;\n}\n\n.modal-text[_ngcontent-%COMP%] {\n  color: aqua;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\n.form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white;\n  border-radius: 5px;\n}\n\n.as-guest[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n}\n\n.modal-itself[_ngcontent-%COMP%] {\n  background-color: #a4a4a4;\n  box-shadow: none;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.modal-itself[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%]   .modal-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcbW9kYWwtd2l0aC1ibHVyLnNjc3MiLCJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4tcGFnZS9DOlxcVXNlcnNcXGtvdm9zXFxEb2N1bWVudHNcXHByb2plY3RzXFxnYW1lL3NyY1xcYXBwXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QUNoQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FEbUNGOztBQ2xDRTtFQUNFLFdBQUE7QURvQ0o7O0FDbENFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FEb0NKOztBQ2pDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURvQ0Y7O0FDbENBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBRHFDRjs7QUNwQ0U7RUFDRSxZQUFBO0FEc0NKOztBQ3BDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBRHNDSjs7QUNyQ0k7RUFDRSxTQUFBO0FEdUNOIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJhY2tncm91bmQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuXHJcbi5tb2RhbC1pdHNlbGYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIC5tb2RhbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ3O1xyXG59XHJcbi5tb2RhbC10ZXh0IHtcclxuICBjb2xvcjogYXF1YTtcclxufVxyXG4iLCIubW9kYWwtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5tb2RhbC1pdHNlbGYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tb2RhbC1pdHNlbGYgLm1vZGFsLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubW9kYWwtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0Nztcbn1cblxuLm1vZGFsLXRleHQge1xuICBjb2xvcjogYXF1YTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzAwcHg7XG59XG4uZm9ybSAuZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFzLWd1ZXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgYm90dG9tOiAxNnB4O1xufVxuXG4ubW9kYWwtaXRzZWxmIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0YTRhNDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5tb2RhbC1pdHNlbGYgLnNpZ24taW4tYnRuIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLm1vZGFsLWl0c2VsZiAubG9naW4tYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vZGFsLWl0c2VsZiAubG9naW4tYnV0dG9ucyAubW9kYWwtYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufSIsIkBpbXBvcnQgJy4uLy4uL2FwcC9zaGFyZWQvc3R5bGVzL21vZGFsLXdpdGgtYmx1ci5zY3NzJztcclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuLmFzLWd1ZXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgYm90dG9tOiAxNnB4O1xyXG59XHJcbi5tb2RhbC1pdHNlbGYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNGE0YTQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAuc2lnbi1pbi1idG4ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICAubG9naW4tYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5tb2RhbC1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/game-save-load.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/game-save-load.service.ts ***!
    \****************************************************/

  /*! exports provided: GameSaveLoadService */

  /***/
  function srcAppServicesGameSaveLoadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameSaveLoadService", function () {
      return GameSaveLoadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../configuration/apiUrl */
    "./src/configuration/apiUrl.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var GameSaveLoadService =
    /*#__PURE__*/
    function () {
      function GameSaveLoadService(router, http) {
        _classCallCheck(this, GameSaveLoadService);

        this.router = router;
        this.http = http;
      }

      _createClass(GameSaveLoadService, [{
        key: "saveGameData",
        value: function saveGameData(payload, userId) {
          return this.http.post("".concat(_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"], "/save-game/").concat(userId), payload);
        }
      }, {
        key: "getGameData",
        value: function getGameData(saveId, userId) {
          return this.http.get("".concat(_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"], "/load-game/").concat(saveId, "/").concat(userId));
        }
      }, {
        key: "getGameSaves",
        value: function getGameSaves(userId) {
          return this.http.get("".concat(_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"], "/game-saves/").concat(userId));
        }
      }]);

      return GameSaveLoadService;
    }();

    GameSaveLoadService.ɵfac = function GameSaveLoadService_Factory(t) {
      return new (t || GameSaveLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    GameSaveLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameSaveLoadService,
      factory: GameSaveLoadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameSaveLoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../configuration/apiUrl */
    "./src/configuration/apiUrl.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(router, http) {
        _classCallCheck(this, LoginService);

        this.router = router;
        this.http = http;
      }

      _createClass(LoginService, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!localStorage.getItem('userId');
        }
      }, {
        key: "logInAsGuest",
        value: function logInAsGuest() {
          this.setUserIdToLocalStorage('guest');
          this.router.navigateByUrl('/game');
        }
      }, {
        key: "setUserIdToLocalStorage",
        value: function setUserIdToLocalStorage(userId) {
          localStorage.setItem('userId', userId);
        }
      }, {
        key: "logIn",
        value: function logIn(_ref2) {
          var login = _ref2.login,
              password = _ref2.password;
          return this.http.post("".concat(_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"], "/login"), {
            login: login,
            password: password
          });
        }
      }, {
        key: "register",
        value: function register(_ref3) {
          var login = _ref3.login,
              password = _ref3.password;
          return this.http.post("".concat(_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"], "/register"), {
            login: login,
            password: password
          });
        }
      }, {
        key: "isAuthorized",
        value: function isAuthorized() {
          return this.http.get("".concat(_configuration_apiUrl__WEBPACK_IMPORTED_MODULE_1__["URL"], "/user-exists/").concat(localStorage.getItem('userId')));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem('userId');
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "currentUserId",
        get: function get() {
          return localStorage.getItem('userId');
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/configuration/apiUrl.ts":
  /*!*************************************!*\
    !*** ./src/configuration/apiUrl.ts ***!
    \*************************************/

  /*! exports provided: URL */

  /***/
  function srcConfigurationApiUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL", function () {
      return URL;
    });

    var URL = 'https://raycast.herokuapp.com/api';
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kovos\Documents\projects\game\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
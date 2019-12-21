(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('cms', ['exports', '@angular/core', '@angular/common/http', '@angular/common'], factory) :
    (global = global || self, factory(global.cms = {}, global.ng.core, global.ng.common.http, global.ng.common));
}(this, (function (exports, core, http, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cms.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsService = /** @class */ (function () {
        function CmsService(httpClient) {
            this.httpClient = httpClient;
        }
        /**
         * @return {?}
         */
        CmsService.prototype.getUsers = /**
         * @return {?}
         */
        function () {
            return this.httpClient.get('http://localhost:3000/api/users');
        };
        CmsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CmsService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ CmsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(core.ɵɵinject(http.HttpClient)); }, token: CmsService, providedIn: "root" });
        return CmsService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CmsService.prototype.httpClient;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cms.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsComponent = /** @class */ (function () {
        function CmsComponent() {
        }
        /**
         * @return {?}
         */
        CmsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        CmsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-cms',
                        template: "\n    <p>\n      cms works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        CmsComponent.ctorParameters = function () { return []; };
        return CmsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/users/users.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UsersComponent = /** @class */ (function () {
        function UsersComponent(cmsService) {
            this.cmsService = cmsService;
        }
        /**
         * @return {?}
         */
        UsersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.getUsers();
            console.log("get users");
        };
        /**
         * @return {?}
         */
        UsersComponent.prototype.getUsers = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.cmsService.getUsers().subscribe((/**
             * @param {?} arg
             * @return {?}
             */
            function (arg) { return _this.users = arg; }));
        };
        UsersComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-users',
                        template: "<div>\r\n    <ul>\r\n      <li *ngFor=\"let user of users\">\r\n        {{user.id}}, {{user.name}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  ",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        UsersComponent.ctorParameters = function () { return [
            { type: CmsService }
        ]; };
        return UsersComponent;
    }());
    if (false) {
        /** @type {?} */
        UsersComponent.prototype.users;
        /**
         * @type {?}
         * @private
         */
        UsersComponent.prototype.cmsService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cms.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CmsModule = /** @class */ (function () {
        function CmsModule() {
        }
        CmsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CmsComponent, UsersComponent],
                        imports: [common.CommonModule,
                            http.HttpClientModule
                        ],
                        exports: [CmsComponent]
                    },] }
        ];
        return CmsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/model/user.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    if (false) {
        /** @type {?} */
        User.prototype.id;
        /** @type {?} */
        User.prototype.name;
    }

    exports.CmsComponent = CmsComponent;
    exports.CmsModule = CmsModule;
    exports.CmsService = CmsService;
    exports.User = User;
    exports.ɵa = UsersComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cms.umd.js.map

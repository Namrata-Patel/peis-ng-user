import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/cms.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @return {?}
     */
    getUsers() {
        return this.httpClient.get('http://localhost:3000/api/users');
    }
}
CmsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CmsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ CmsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(ɵɵinject(HttpClient)); }, token: CmsService, providedIn: "root" });
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
class CmsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CmsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-cms',
                template: `
    <p>
      cms works!
    </p>
  `
            }] }
];
/** @nocollapse */
CmsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UsersComponent {
    /**
     * @param {?} cmsService
     */
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getUsers();
        console.log("get users");
    }
    /**
     * @return {?}
     */
    getUsers() {
        this.cmsService.getUsers().subscribe((/**
         * @param {?} arg
         * @return {?}
         */
        arg => this.users = arg));
    }
}
UsersComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-users',
                template: "<div>\r\n    <ul>\r\n      <li *ngFor=\"let user of users\">\r\n        {{user.id}}, {{user.name}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  ",
                styles: [""]
            }] }
];
/** @nocollapse */
UsersComponent.ctorParameters = () => [
    { type: CmsService }
];
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
class CmsModule {
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CmsComponent, UsersComponent],
                imports: [CommonModule,
                    HttpClientModule
                ],
                exports: [CmsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/user.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class User {
}
if (false) {
    /** @type {?} */
    User.prototype.id;
    /** @type {?} */
    User.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cms.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CmsComponent, CmsModule, CmsService, User, UsersComponent as ɵa };
//# sourceMappingURL=cms.js.map

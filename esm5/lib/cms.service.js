/**
 * @fileoverview added by tsickle
 * Generated from: lib/cms.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CmsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ CmsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.ɵɵinject(i1.HttpClient)); }, token: CmsService, providedIn: "root" });
    return CmsService;
}());
export { CmsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbXMvIiwic291cmNlcyI6WyJsaWIvY21zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSTlEO0lBS0Usb0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOzs7O0lBRS9DLDZCQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQVMsaUNBQWlDLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFURixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLFVBQVU7OztxQkFEbkI7Q0FlQyxBQVZELElBVUM7U0FQWSxVQUFVOzs7Ozs7SUFFVCxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vbW9kZWwvdXNlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbXNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0VXNlcnMoKTogT2JzZXJ2YWJsZTxVc2VyW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFVzZXJbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMnKTtcclxuICB9XHJcbn1cclxuIl19
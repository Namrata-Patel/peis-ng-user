/**
 * @fileoverview added by tsickle
 * Generated from: lib/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CmsService } from "../cms.service";
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
        { type: Component, args: [{
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
export { UsersComponent };
if (false) {
    /** @type {?} */
    UsersComponent.prototype.users;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.cmsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21zLyIsInNvdXJjZXMiOlsibGliL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDO0lBU0Usd0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOzs7O0lBRS9DLGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw0SkFBcUM7O2lCQUV0Qzs7OztnQkFOUSxVQUFVOztJQXNCbkIscUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLGNBQWM7OztJQUV6QiwrQkFBYzs7Ozs7SUFFRixvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsL3VzZXJcIjtcclxuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gXCIuLi9jbXMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdXNlcnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91c2Vycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdXNlcnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHVzZXJzOiBVc2VyW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRVc2VycygpO1xyXG4gICAgY29uc29sZS5sb2coXCJnZXQgdXNlcnNcIik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VycygpOiB2b2lkIHtcclxuICAgIHRoaXMuY21zU2VydmljZS5nZXRVc2VycygpLnN1YnNjcmliZShhcmcgPT4gdGhpcy51c2VycyA9IGFyZyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
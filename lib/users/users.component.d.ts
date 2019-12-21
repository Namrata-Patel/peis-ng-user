import { OnInit } from '@angular/core';
import { User } from "../model/user";
import { CmsService } from "../cms.service";
export declare class UsersComponent implements OnInit {
    private cmsService;
    users: User[];
    constructor(cmsService: CmsService);
    ngOnInit(): void;
    getUsers(): void;
}

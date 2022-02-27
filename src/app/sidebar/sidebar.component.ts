import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'สถิติข้อมูล',         icon:'bi bi-bar-chart-line',       class: '' },
    { path: '/user',          title: 'กรอกข้อมูลคนไข้',      icon:'bi bi-clipboard-data',  class: '' },
    // { path: '/table',         title: 'รายชื่อคนไข้',        icon:'nc-tile-56',    class: '' },
    { path: '/table2',         title: 'รายชื่อคนไข้',        icon:'bi bi-person-lines-fill',    class: '' },
    { path: '/icons',         title: 'การรักษา',             icon:'bi bi-card-checklist',    class: '' },

    { path: '/maps',          title: 'นัดคิวคนไข้',              icon:'bi bi-calendar-check',      class: '' },
    { path: '/notifications', title: 'คิวนัดวันนี้',     icon:'bi bi-calendar-event',    class: '' },
    { path: '/typography',    title: 'ตารางเวรหมอ',        icon:'bi bi-calendar3', class: '' },
    { path: '/upgrade',       title: 'ประวัติการรักษา',    icon:'bi bi-journal-richtext',  class: '' },
    { path: '/login',       title: 'เข้าสู่ระบบ',    icon:'nc-single-02',  class: '' },
    { path: '/members',       title: 'สมาชิก',    icon:'bi bi-people',  class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

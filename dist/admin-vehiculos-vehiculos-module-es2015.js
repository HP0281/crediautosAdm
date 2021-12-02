(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-vehiculos-vehiculos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"data | paginate: {id:'listar', itemsPerPage: 4, currentPage: pageActual }\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"marca\">\r\n        <th mat-header-cell *matHeaderCellDef> Marca </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.marca}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"modelo\">\r\n        <th mat-header-cell *matHeaderCellDef> Modelo </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.modelo}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"version\">\r\n        <th mat-header-cell *matHeaderCellDef> Version </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.version}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"year\">\r\n        <th mat-header-cell *matHeaderCellDef>Año </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.year}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef>  </th>\r\n        <td mat-cell *matCellDef=\"let element\"> <button mat-button (click)=\"onVer(element)\">Ver</button> <button mat-button (click)=\"onEditar(element)\">Editar</button> <button mat-button>Eliminar</button></td>\r\n      </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<pagination-controls id=\"listar\" (pageChange)=\"pageActual = $event\" responsive=\"true\">\r\n</pagination-controls>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculos/vehiculos.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/vehiculos/vehiculos.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row submenu\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <mat-tab-group mat-align-tabs=\"start\">\r\n                    <mat-tab label=\"Listar\">\r\n                        <app-list-vehicles></app-list-vehicles>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Nuevo\">\r\n                        <app-new-vehicles></app-new-vehicles>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/vehiculos/list-vehicles/list-vehicles-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/vehiculos/list-vehicles/list-vehicles-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ListVehiclesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiclesRoutingModule", function() { return ListVehiclesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _versiones_list_versiones_list_versiones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../versiones/list-versiones/list-versiones.component */ "./src/app/admin/versiones/list-versiones/list-versiones.component.ts");




const routes = [{ path: "", component: _versiones_list_versiones_list_versiones_component__WEBPACK_IMPORTED_MODULE_3__["ListVersionesComponent"] }];
let ListVehiclesRoutingModule = class ListVehiclesRoutingModule {
};
ListVehiclesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListVehiclesRoutingModule);



/***/ }),

/***/ "./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    width: 100%;\r\n}\r\nbutton{\r\n    margin: 0 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmVoaWN1bG9zL2xpc3QtdmVoaWNsZXMvbGlzdC12ZWhpY2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmVoaWN1bG9zL2xpc3QtdmVoaWNsZXMvbGlzdC12ZWhpY2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListVehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiclesComponent", function() { return ListVehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_vehicles_info_basic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vehicles-info-basic.service */ "./src/app/services/vehicles-info-basic.service.ts");




let ListVehiclesComponent = class ListVehiclesComponent {
    constructor(vehiclesService, router) {
        this.vehiclesService = vehiclesService;
        this.router = router;
        this.pageActual = 1;
        this.displayedColumns = ['marca', 'modelo', 'version', 'year', 'actions'];
        this.navigationExtras = {
            state: {
                value: null
            }
        };
        this.vehiclesService.vehicles.subscribe(resp => {
            this.data = resp;
        });
    }
    ngOnInit() {
    }
    onEditar(item) {
        this.navigationExtras.state.value = item;
        this.router.navigate(['editar/vehicle'], this.navigationExtras);
    }
    onVer(item) {
        this.navigationExtras.state.value = item;
        this.router.navigate(['ver/vehicle'], this.navigationExtras);
    }
    onEliminar() {
    }
};
ListVehiclesComponent.ctorParameters = () => [
    { type: src_app_services_vehicles_info_basic_service__WEBPACK_IMPORTED_MODULE_3__["VehiclesInfoBasicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListVehiclesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-vehicles',
        template: __webpack_require__(/*! raw-loader!./list-vehicles.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.html"),
        styles: [__webpack_require__(/*! ./list-vehicles.component.css */ "./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_vehicles_info_basic_service__WEBPACK_IMPORTED_MODULE_3__["VehiclesInfoBasicService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ListVehiclesComponent);



/***/ }),

/***/ "./src/app/admin/vehiculos/list-vehicles/list-vehicles.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/vehiculos/list-vehicles/list-vehicles.module.ts ***!
  \***********************************************************************/
/*! exports provided: ListVehiclesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiclesModule", function() { return ListVehiclesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-vehicles-routing.module */ "./src/app/admin/vehiculos/list-vehicles/list-vehicles-routing.module.ts");
/* harmony import */ var _list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-vehicles/list-vehicles.component */ "./src/app/admin/vehiculos/list-vehicles/list-vehicles.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");








let ListVehiclesModule = class ListVehiclesModule {
};
ListVehiclesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["ListVehiclesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListVehiclesRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
        ],
        exports: [_list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["ListVehiclesComponent"]]
    })
], ListVehiclesModule);



/***/ }),

/***/ "./src/app/admin/vehiculos/vehiculos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/vehiculos/vehiculos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VehiculosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculosRoutingModule", function() { return VehiculosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vehiculos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehiculos.component */ "./src/app/admin/vehiculos/vehiculos.component.ts");




const routes = [{ path: "", component: _vehiculos_component__WEBPACK_IMPORTED_MODULE_3__["VehiculosComponent"] }];
let VehiculosRoutingModule = class VehiculosRoutingModule {
};
VehiculosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VehiculosRoutingModule);



/***/ }),

/***/ "./src/app/admin/vehiculos/vehiculos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/vehiculos/vehiculos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZlaGljdWxvcy92ZWhpY3Vsb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/vehiculos/vehiculos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/vehiculos/vehiculos.component.ts ***!
  \********************************************************/
/*! exports provided: VehiculosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculosComponent", function() { return VehiculosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VehiculosComponent = class VehiculosComponent {
    constructor() { }
    ngOnInit() {
    }
};
VehiculosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehiculos',
        template: __webpack_require__(/*! raw-loader!./vehiculos.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculos/vehiculos.component.html"),
        styles: [__webpack_require__(/*! ./vehiculos.component.css */ "./src/app/admin/vehiculos/vehiculos.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], VehiculosComponent);



/***/ }),

/***/ "./src/app/admin/vehiculos/vehiculos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/vehiculos/vehiculos.module.ts ***!
  \*****************************************************/
/*! exports provided: VehiculosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculosModule", function() { return VehiculosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _vehiculos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehiculos-routing.module */ "./src/app/admin/vehiculos/vehiculos-routing.module.ts");
/* harmony import */ var _vehiculos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehiculos.component */ "./src/app/admin/vehiculos/vehiculos.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _list_vehicles_list_vehicles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-vehicles/list-vehicles.module */ "./src/app/admin/vehiculos/list-vehicles/list-vehicles.module.ts");
/* harmony import */ var _new_vehicles_new_vehicles_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-vehicles/new-vehicles.module */ "./src/app/admin/vehiculos/new-vehicles/new-vehicles.module.ts");








let VehiculosModule = class VehiculosModule {
};
VehiculosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vehiculos_component__WEBPACK_IMPORTED_MODULE_4__["VehiculosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vehiculos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VehiculosRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _list_vehicles_list_vehicles_module__WEBPACK_IMPORTED_MODULE_6__["ListVehiclesModule"],
            _new_vehicles_new_vehicles_module__WEBPACK_IMPORTED_MODULE_7__["NewVehiclesModule"]
        ],
        exports: [_vehiculos_component__WEBPACK_IMPORTED_MODULE_4__["VehiculosComponent"]]
    })
], VehiculosModule);



/***/ })

}]);
//# sourceMappingURL=admin-vehiculos-vehiculos-module-es2015.js.map
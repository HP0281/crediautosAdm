(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listar-productos-listar-productos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-loader\" *ngIf=\"loader\">\r\n    <strong>Cargando\r\n        <span class=\"loader__dot\">.</span>\r\n        <span class=\"loader__dot\">.</span>\r\n        <span class=\"loader__dot\">.</span></strong>\r\n</div>\r\n\r\n<div class=\"container table-responsive\" *ngIf=\"!loader\">\r\n    <button style=\"margin-bottom: 10px; margin-left: 0px;\" class=\"btn btn-warning text-white\" (click)=\"ngOnInit()\">\r\n        <i class=\"material-icons text-white\">restore_page\r\n        </i> Refrescar Tabla\r\n    </button>\r\n\r\n    <div class=\"card min\">\r\n        <div class=\"card-header\">\r\n            <h3>LISTADO DE PRODUCTOS</h3>\r\n\r\n        </div>\r\n        <input class=\"form-control\" type=\"text\" name=\"filterProducto\" placeholder=\"Buscar Producto\" [(ngModel)]=\"filterMarcas\">\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr class=\"text-center\">\r\n                        <th>Vendedor</th>\r\n                        <th>Marca</th>\r\n                        <th>Modelo</th>\r\n                        <th>Version</th>\r\n                        <th>Año</th>\r\n                        <th>Placa</th>\r\n                        <th>Publicar</th>\r\n                        <th>Promocion</th>\r\n                        <th>Valor</th>\r\n                        <th>Accion</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let vehicle of vehicles | filtarmarca:filterMarcas | paginate: {id:'listar', itemsPerPage: 10, currentPage: pageActual } \"  class=\"text-center\">\r\n                        <td>{{vehicle.Vendedor}}</td>\r\n                        <td>{{vehicle.marca}}</td>\r\n                        <td>{{vehicle.modelo}}</td>\r\n                        <td>{{vehicle.version}}</td>\r\n                        <td>{{vehicle.year}}</td>\r\n                        <td>{{vehicle.placa}}</td>\r\n                        <td>  <label class=\"switch-wrap switch-success ml-2\">\r\n                            <input type=\"checkbox\" [checked]=\"vehicle.status\" (change)=\"status(vehicle,cambiandoModal)\" />\r\n                            <div class=\"switch\"></div>\r\n                        </label></td>\r\n                        <td><label class=\"switch-wrap switch-danger ml-2\">\r\n                            <input type=\"checkbox\" [checked]=\"vehicle.promocion\" (change)=\"promocion(vehicle,cambiandoModal)\"/>\r\n                            <div class=\"switch\"></div>\r\n                        </label></td>\r\n                        <td>{{vehicle.valor}}</td>\r\n                        <td>\r\n                            <button (click)=\"modificarProducto(vehicle)\" class=\"btn\"><i class=\"material-icons\">\r\n                                edit</i></button>\r\n                            <a class=\"btn \"><i class=\"material-icons\">visibility</i></a>\r\n                            <a class=\"btn \"><i class=\"material-icons\">delete</i></a>\r\n\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <pagination-controls id=\"listar\" (pageChange)=\"pageActual = $event\" responsive=\"true\">\r\n                </pagination-controls>\r\n        </div>\r\n        <!-- <div *ngIf=\"failEliminado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-danger text-white rounded\">Error: {{msjErr}}</p>\r\n        </div>\r\n        <div *ngIf=\"eliminado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-success text-white rounded\">OK: {{msjOK}}</p>\r\n        </div>\r\n        <div *ngIf=\"failActualizado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-danger text-white rounded\" style=\"margin: 10px\">Error: {{msjErr}}</p>\r\n        </div>\r\n        <div *ngIf=\"actualizado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-success text-white rounded\" style=\"margin: 10px\">OK: {{msjOK}}</p>\r\n        </div>-->\r\n    </div>\r\n    \r\n</div>\r\n<ng-template #cambiandoModal>\r\n    <div class=\"center-loader\" *ngIf=\"loaderEstado\">\r\n        <strong>Cambiando estado\r\n                <span class=\"loader__dot\">.</span>\r\n                <span class=\"loader__dot\">.</span>\r\n                <span class=\"loader__dot\">.</span></strong>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/listar-productos/listar-producto-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/listar-productos/listar-producto-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ListarProductoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductoRoutingModule", function() { return ListarProductoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listar_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar-productos.component */ "./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.ts");




const routes = [
    { path: '', component: _listar_productos_component__WEBPACK_IMPORTED_MODULE_3__["ListarProductosComponent"] }
];
let ListarProductoRoutingModule = class ListarProductoRoutingModule {
};
ListarProductoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListarProductoRoutingModule);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.center-loader {\r\n    font-size: large;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n.loader__dot {\r\n    -webkit-animation: 1s blink infinite;\r\n            animation: 1s blink infinite;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(2) {\r\n    -webkit-animation-delay: 250ms;\r\n            animation-delay: 250ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(3) {\r\n    -webkit-animation-delay: 500ms;\r\n            animation-delay: 500ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.min { \r\n    min-width: -webkit-min-content; \r\n    min-width: -moz-min-content; \r\n    min-width: min-content;\r\n}\r\n\r\n.modal-backdrop {\r\n    background-color: #0000ff;\r\n}\r\n\r\n.modal-white .modal-backdrop {\r\n    background-color: #d8d8d8;\r\n}\r\n\r\n.centrado {\r\n    text-align: center;\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9wcm9kdWN0b3MvbGlzdGFyLXByb2R1Y3Rvcy9saXN0YXItcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFFVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBSkE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL21vZHVsZXMvcHJvZHVjdG9zL2xpc3Rhci1wcm9kdWN0b3MvbGlzdGFyLXByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50ZXItbG9hZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudFxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9hZGVyX19kb3Qge1xyXG4gICAgYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmxvYWRlcl9fZG90Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDI1MG1zO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4ubG9hZGVyX19kb3Q6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogNTAwbXM7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5taW4geyBcclxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGZmO1xyXG59XHJcblxyXG4ubW9kYWwtd2hpdGUgLm1vZGFsLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbn1cclxuXHJcbi5jZW50cmFkbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ListarProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductosComponent", function() { return ListarProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_vehicles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vehicles.service */ "./src/app/services/vehicles.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let ListarProductosComponent = class ListarProductosComponent {
    constructor(router, vehicleService, serviceModal) {
        this.router = router;
        this.vehicleService = vehicleService;
        this.serviceModal = serviceModal;
        this.filterProducto = '';
        this.administrador = false;
        this.empresaIs = false;
        this.loader = false;
        this.loaderEstado = false;
        this.pageActual = 1;
        this.filterMarcas = '';
        this.navigationExtras = {
            state: {
                value: null
            }
        };
    }
    ngOnInit() {
        this.cargarProductos();
    }
    ActivarProducto(producto) {
        if (confirm("esta seguro de Activar?")) {
            producto.estadoProducto = "Activo";
        }
    }
    promocion(event, cambiandoModal) {
        console.log(event);
        event.promocion = !event.promocion;
        this.vehicleService.onSaveVehicle(event, event.id);
        this.serviceModal.open(cambiandoModal);
        this.loaderEstado = true;
    }
    status(vehicle, modal) {
        vehicle.status = !vehicle.status;
        this.vehicleService.onSaveVehicle(vehicle, vehicle.id);
        this.serviceModal.open(modal);
        this.loaderEstado = true;
    }
    inactivarProducto(producto) {
        if (confirm("esta seguro de inactivar?")) {
            producto.estadoProducto = "Inactivo";
        }
    }
    cargarProductos() {
        this.loader = true;
        console.log("metodo de listar productos oinit");
        this.vehicleService.vehicles.subscribe(data => {
            this.vehicles = data;
            this.loader = false;
            console.log("data", data);
        });
    }
    cargarImagenes() {
    }
    modificarProducto(vehicle) {
        //localStorage.setItem("idVehicle", vehicle.id + "");
        this.navigationExtras.state.value = vehicle;
        debugger;
        this.router.navigate(["productos/editar-producto"], this.navigationExtras);
    }
    isAdmin() {
    }
    isEmpresa() {
    }
};
ListarProductosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_vehicles_service__WEBPACK_IMPORTED_MODULE_3__["VehiclesService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
ListarProductosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listar-productos',
        template: __webpack_require__(/*! raw-loader!./listar-productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.html"),
        styles: [__webpack_require__(/*! ./listar-productos.component.css */ "./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_vehicles_service__WEBPACK_IMPORTED_MODULE_3__["VehiclesService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], ListarProductosComponent);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/listar-productos/listar-productos.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/listar-productos/listar-productos.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListarProductosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductosModule", function() { return ListarProductosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _listar_productos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-productos.component */ "./src/app/layout/components/modules/productos/listar-productos/listar-productos.component.ts");
/* harmony import */ var _listar_producto_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listar-producto-routing.module */ "./src/app/layout/components/modules/productos/listar-productos/listar-producto-routing.module.ts");
/* harmony import */ var _pipe_listar_producto_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/listar-producto.pipe */ "./src/app/layout/components/modules/productos/listar-productos/pipe/listar-producto.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _pipe_filtar_marca_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/filtar-marca.pipe */ "./src/app/layout/components/modules/productos/listar-productos/pipe/filtar-marca.pipe.ts");











let ListarProductosModule = class ListarProductosModule {
};
ListarProductosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_listar_productos_component__WEBPACK_IMPORTED_MODULE_6__["ListarProductosComponent"], _pipe_listar_producto_pipe__WEBPACK_IMPORTED_MODULE_8__["ListarProductoPipe"], _pipe_filtar_marca_pipe__WEBPACK_IMPORTED_MODULE_10__["FiltarMarcaPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _listar_producto_routing_module__WEBPACK_IMPORTED_MODULE_7__["ListarProductoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
        ], exports: [_pipe_filtar_marca_pipe__WEBPACK_IMPORTED_MODULE_10__["FiltarMarcaPipe"]]
    })
], ListarProductosModule);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/listar-productos/pipe/filtar-marca.pipe.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/listar-productos/pipe/filtar-marca.pipe.ts ***!
  \************************************************************************************************/
/*! exports provided: FiltarMarcaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltarMarcaPipe", function() { return FiltarMarcaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltarMarcaPipe = class FiltarMarcaPipe {
    transform(value, arg) {
        const resultProduct = [];
        for (const Vehicle of value) {
            if (Vehicle.marca.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                //console.log("si");
                resultProduct.push(Vehicle);
            }
        }
        return resultProduct;
    }
};
FiltarMarcaPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtarmarca'
    })
], FiltarMarcaPipe);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/listar-productos/pipe/listar-producto.pipe.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/listar-productos/pipe/listar-producto.pipe.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListarProductoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProductoPipe", function() { return ListarProductoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListarProductoPipe = class ListarProductoPipe {
    transform(value, arg) {
        const resultProducto = [];
        for (const producto of value) {
            if (producto.nombreProducto.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultProducto.push(producto);
            }
            else if (producto.empresa.razonSocial.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultProducto.push(producto);
            }
        }
        return resultProducto;
    }
};
ListarProductoPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'listarProducto'
    })
], ListarProductoPipe);



/***/ })

}]);
//# sourceMappingURL=listar-productos-listar-productos-module-es2015.js.map
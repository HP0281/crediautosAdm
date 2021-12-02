(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/charts/charts.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/charts/charts.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Charts'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card border-0 shadow-sm mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <p class=\"fs15\">User Session Overview<br /><small class=\"text-template-primary-light\">Per Quarter</small></p>\r\n                        </div>\r\n                        <form class=\"form-inline search align-self-center\">\r\n                            <input class=\"form-control form-control-sm\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" />\r\n                            <button class=\"btn btn-link btn-sm\" type=\"submit\"><i class=\"material-icons\">search</i></button>\r\n                        </form>\r\n                        <div class=\"col-auto\">\r\n                            <button class=\"btn btn-sm btn-outline-template\"><i class=\"material-icons md-18 mr-2\">print</i> Print</button>\r\n                            <button class=\"btn btn-sm btn-outline-template ml-2\">\r\n                                <i class=\"material-icons md-18 mr-2\">cloud_download</i> Export\r\n                            </button>\r\n                            <div class=\"dropdown d-inline-block  ml-2\" ngbDropdown>\r\n                                <button\r\n                                    class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                    type=\"button\"\r\n                                    data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\"\r\n                                    aria-expanded=\"false\" ngbDropdownToggle\r\n                                >\r\n                                    <i class=\"material-icons\">more_horiz</i>\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Another</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Something</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <br />                    \r\n                    <div class=\"areachart\">\r\n                            <canvas baseChart [datasets]=\"mixedchartjsData\" [labels]=\"mixedchartjsLabels\" [options]=\"mixedchartjsOptions\" [legend]=\"mixedchartjsLegend\" [chartType]=\"mixedchartjsType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                        </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        IT User <small class=\"d-block\"><span class=\"text-template-primary\">25600</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-success fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Non-IT <small class=\"d-block\"><span class=\"text-template-primary\">6548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-danger fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Trainee <small class=\"d-block\"><span class=\"text-template-primary\">15548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-6 col-lg-12\">\r\n            <div class=\"card shadow-sm border-0 mb-4\">\r\n                <div class=\"card-header border-0 \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h6 class=\"card-title\">Mix Chart<br /><small class=\"text-template-primary-light\">Chart js Chart</small></h6>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\" float-right text-right\">\r\n                                <button class=\"btn btn-link btn-sm\"><i class=\"material-icons md-24 template-primary\">refresh</i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n                    <div class=\"h-320\">\r\n                        <canvas baseChart [datasets]=\"mixedchartfulljsData\" [labels]=\"mixedchartfulljsLabels\" [options]=\"mixedchartfulljsOptions\" [legend]=\"mixedchartfulljsLegend\" [chartType]=\"mixedchartfulljsType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-8\">\r\n            <div class=\"card shadow-sm border-0 mb-4\">\r\n                <div class=\"card-header border-0 \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h6 class=\"card-title\">Live Bubble<br /><small class=\"text-template-primary-light\">Chart js Chart</small></h6>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\" float-right text-right\">\r\n                                <button class=\"btn btn-link btn-sm\"><i class=\"material-icons md-24 template-primary\">refresh</i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n                    <canvas baseChart [datasets]=\"bubblechartData\" [labels]=\"bubblechartLabels\" [options]=\"bubblechartOptions\" [legend]=\"bubblechartLegend\" [chartType]=\"bubblechartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-12 col-lg-4\">\r\n            <div class=\"card shadow-sm border-0 mb-4\">\r\n                <div class=\"card-header border-0 \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h6 class=\"card-title\">Radar<br /><small class=\"text-template-primary-light\">Chart js Chart</small></h6>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\" float-right text-right\">\r\n                                <button class=\"btn btn-link btn-sm\"><i class=\"material-icons md-24 template-primary\">refresh</i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n                    <canvas class=\"my-3 w-100\" baseChart [datasets]=\"radarchartData\" [labels]=\"radarchartLabels\" [options]=\"radarchartOptions\" [legend]=\"radarchartLegend\" [chartType]=\"radarchartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card shadow-sm border-0 mb-4\">\r\n                <div class=\"card-header border-0 \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h6 class=\"card-title\">Donut<br /><small class=\"text-template-primary-light\">Chart js Chart</small></h6>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\" float-right text-right\">\r\n                                <button class=\"btn btn-link btn-sm\"><i class=\"material-icons md-24 template-primary\">refresh</i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 mx-auto\">\r\n                            <canvas class=\"my-3\" baseChart [datasets]=\"doughutchartData\" [labels]=\"doughutchartLabels\" [options]=\"doughutchartOptions\" [legend]=\"doughutchartLegend\" [chartType]=\"doughutchartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer text-center\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        IT User <small class=\"d-block\"><span class=\"text-template-primary\">25600</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-success fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Non-IT <small class=\"d-block\"><span class=\"text-template-primary\">6548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-danger fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Trainee <small class=\"d-block\"><span class=\"text-template-primary\">15548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card shadow-sm border-0 mb-4\">\r\n                <div class=\"card-header border-0 \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h6 class=\"card-title\">Pie<br /><small class=\"text-template-primary-light\">Chart js Chart</small></h6>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\" float-right text-right\">\r\n                                <button class=\"btn btn-link btn-sm\"><i class=\"material-icons md-24 template-primary\">refresh</i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 mx-auto\"><canvas class=\"my-3\" baseChart [datasets]=\"piechartData\" [labels]=\"piechartLabels\" [options]=\"piechartOptions\" [legend]=\"piechartLegend\" [chartType]=\"piechartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer text-center\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        IT User <small class=\"d-block\"><span class=\"text-template-primary\">25600</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-success fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Non-IT <small class=\"d-block\"><span class=\"text-template-primary\">6548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-danger fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Trainee <small class=\"d-block\"><span class=\"text-template-primary\">15548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card shadow-sm border-0 mb-4\">\r\n                <div class=\"card-header border-0 \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h6 class=\"card-title\">Polar<br /><small class=\"text-template-primary-light\">Chart js Chart</small></h6>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\" float-right text-right\">\r\n                                <button class=\"btn btn-link btn-sm\"><i class=\"material-icons md-24 template-primary\">refresh</i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 mx-auto\"><canvas class=\"my-3\" baseChart [datasets]=\"polarchartData\" [labels]=\"polarchartLabels\" [options]=\"polarchartOptions\" [legend]=\"polarchartLegend\" [chartType]=\"polarchartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer text-center\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        IT User <small class=\"d-block\"><span class=\"text-template-primary\">25600</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-success fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Non-IT <small class=\"d-block\"><span class=\"text-template-primary\">6548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-danger fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Trainee <small class=\"d-block\"><span class=\"text-template-primary\">15548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/charts/charts-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/charts/charts-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ChartsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts.component */ "./src/app/layout/charts/charts.component.ts");




var routes = [
    {
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"]
    }
];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/charts/charts.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/charts/charts.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/charts/charts.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/charts/charts.component.ts ***!
  \***************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");



var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        // mixedchartjs chart
        this.mixedchartjsOptions = {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart - Stacked Area'
            },
            tooltips: {
                mode: 'index'
            },
            hover: {
                mode: 'index'
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            display: true,
                            fontColor: '#90b5ff'
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            display: true,
                            fontColor: '#90b5ff'
                        },
                        display: true,
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        }
                    }
                ]
            }
        };
        this.mixedchartjsLabels = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
        this.mixedchartjsData = [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'My First dataset',
                borderWidth: '2',
                borderColor: '#5B92FF',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            {
                data: [25, 39, 55, 64, 35, 29, 24],
                label: 'My Second dataset',
                borderWidth: '2',
                borderColor: '#F85778',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            {
                data: [80, 87, 92, 79, 68, 65, 55],
                label: 'My Third dataset',
                borderWidth: '2',
                borderColor: '#1FC96E',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }
        ];
        // mixedchartfulljs chart
        this.mixedchartfulljsOptions = {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: 'Chart.js Combo Bar Line Chart'
            },
            legend: {
                display: false,
                labels: {
                    fontColor: '#cccccc'
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontColor: '#bbbbbb'
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            zeroLineColor: 'rgba(255,255,255,0.2)'
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#bbbbbb'
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            zeroLineColor: 'rgba(0,0,0,0.2)'
                        }
                    }
                ]
            }
        };
        this.mixedchartfulljsLabels = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
        this.mixedchartfulljsData = [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                type: 'bar',
                maintainAspectRatio: false,
                backgroundColor: '#ff6e73',
                borderColor: '#ff6e73'
            },
            {
                data: [25, 39, 55, 64, 35, 29, 24],
                type: 'line',
                label: 'Dataset 2',
                borderWidth: 1,
                backgroundColor: 'rgba(91, 146, 255, 0.18)',
                borderColor: '#5B92FF'
            },
            {
                data: [80, 87, 92, 79, 68, 65, 55],
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: '#ffc322',
                borderColor: '#ffc322'
            }
        ];
        // bubblechart chart
        this.bubblechartOptions = {
            responsive: true,
            title: {
                display: false,
                text: 'Chart.js Bubble Chart'
            },
            tooltips: {
                mode: 'point'
            },
            legend: {
                labels: {
                    fontColor: '#cccccc'
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontColor: '#bbbbbb'
                        },
                        gridLines: {
                            color: 'rgba(160, 160, 160, 0.05)',
                            zeroLineColor: 'rgba(160,160,160,0.2)'
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#bbbbbb'
                        },
                        gridLines: {
                            color: 'rgba(160, 160, 160, 0.05)',
                            zeroLineColor: 'rgba(160,160,160,0.2)'
                        }
                    }
                ]
            }
        };
        this.bubblechartLabels = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
        this.bubblechartData = [
            {
                data: [
                    { x: 15, y: 10, r: 5 },
                    { x: 15, y: 20, r: 5 },
                    { x: 22, y: 58, r: 15 },
                    { x: 45, y: 81, r: 30 },
                    { x: 52, y: 10, r: 5 },
                    { x: 74, y: 50, r: 25 },
                    { x: 80, y: 19, r: 35 }
                ],
                label: 'My First dataset',
                backgroundColor: '#5B92FF',
                borderColor: '#5B92FF',
                borderWidth: 1
            },
            {
                data: [
                    { x: 15, y: 10, r: 15 },
                    { x: 25, y: 30, r: 8 },
                    { x: 32, y: 68, r: 17 },
                    { x: 55, y: 91, r: 20 },
                    { x: 62, y: 20, r: 8 },
                    { x: 84, y: 60, r: 19 },
                    { x: 80, y: 29, r: 23 }
                ],
                label: 'My Second dataset',
                backgroundColor: '#ff6e73',
                borderColor: '#ff6e73',
                borderWidth: 1
            }
        ];
        // radarchart chart
        this.radarchartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'top'
            },
            title: {
                display: false,
                text: 'Chart.js Radar Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                pointLabels: {
                    fontColor: '#a1c1ff'
                }
            }
        };
        this.radarchartLabels = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
        this.radarchartData = [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'My First dataset',
                backgroundColor: '#ff6e73',
                borderColor: '#ff6e73',
                pointBackgroundColor: '#ff898d'
            },
            {
                data: [25, 39, 55, 64, 35, 29, 24],
                label: 'My Second dataset',
                backgroundColor: '#5B92FF',
                borderColor: '#5B92FF',
                pointBackgroundColor: '#8bb2ff'
            },
            {
                data: [35, 49, 58, 68, 40, 32, 28],
                label: 'My Third dataset',
                backgroundColor: '#ffc322',
                borderColor: '#ffc322',
                pointBackgroundColor: '#ffd461'
            }
        ];
        // doughutchart chart
        this.doughutchartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'top'
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };
        this.doughutchartLabels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
        this.doughutchartData = [
            {
                data: [10, 15, 15, 40, 30],
                backgroundColor: ['#ff6e73', '#ff7600', '#ffc322', '#0fddad', '#5B92FF'],
                label: 'Dataset 1',
                borderColor: 'rgb(0, 0, 0, 0)'
            }
        ];
        // Pie chart
        this.piechartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'top'
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };
        this.piechartLabels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
        this.piechartData = [
            {
                data: [10, 15, 15, 40, 30],
                backgroundColor: ['#ff6e73', '#ff7600', '#ffc322', '#0fddad', '#5B92FF'],
                label: 'Dataset 1',
                borderColor: 'rgb(0, 0, 0, 0)'
            }
        ];
        // Polar chart
        this.polarchartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: false,
                text: 'Chart.js Polar Area Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
            animation: {
                animateRotate: false,
                animateScale: true
            }
        };
        this.polarchartLabels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
        this.polarchartData = [
            {
                data: [10, 15, 15, 40, 30],
                backgroundColor: [
                    '#ff6e73',
                    '#ff7600',
                    '#ffc322',
                    '#0fddad',
                    '#5B92FF',
                ],
                borderColor: 'rgb(0, 0, 0, 0)',
                label: 'My dataset' // for legend
            }
        ];
    }
    // events
    ChartsComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.ngOnInit = function () {
        this.mixedchartjsType = 'line';
        this.mixedchartfulljsType = 'bar';
        this.bubblechartType = 'bubble';
        this.radarchartType = 'radar';
        this.doughutchartType = 'doughnut';
        this.piechartType = 'pie';
        this.polarchartType = 'polarArea';
    };
    ChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/charts/charts.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/layout/charts/charts.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/layout/charts/charts.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/charts/charts.module.ts ***!
  \************************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm5/ng2-charts.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts-routing.module */ "./src/app/layout/charts/charts-routing.module.ts");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts.component */ "./src/app/layout/charts/charts.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");








var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"]],
            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module-es5.js.map
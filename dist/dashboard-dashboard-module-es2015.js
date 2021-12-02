(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/dashboard/dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");




const routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n.summary-small {\n  height: 40px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9DOlxcVHJhYmFqb1xcY3JlZGlhdXRvc0FkbS9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxRQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogYXV0bztcclxufVxyXG5cclxuLnN1bW1hcnktc21hbGx7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cblxuLnN1bW1hcnktc21hbGwge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");



let DashboardComponent = class DashboardComponent {
    constructor() {
        this.alerts = [];
        this.sliders = [];
        // summaryChart1 chart
        this.summaryChart1Options = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: 'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                enabled: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }
                ],
                yAxes: [
                    {
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }
                ]
            }
        };
        this.summaryChart1Labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.summaryChart1Data = [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Series A',
                backgroundColor: 'transparent',
                borderColor: '#FFFFFF',
                borderWidth: '1.5',
                radius: 0,
                fill: false
            }
        ];
        // summaryChart2 chart
        this.summaryChart2Options = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: 'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                enabled: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            display: false
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
                            display: false
                        },
                        display: false,
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        }
                    }
                ]
            }
        };
        this.summaryChart2Labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.summaryChart2Data = [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Series A',
                backgroundColor: '#FFFFFF',
                borderColor: 'transparent',
                borderWidth: '1.5',
                radius: 0,
                fill: false
            }
        ];
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
        this.mixedchartjsLabels = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'];
        this.mixedchartjsData = [
            {
                label: 'My First dataset',
                borderWidth: '1',
                borderColor: 'rgba(144, 181, 255, 0)',
                backgroundColor: 'rgba(91, 146, 255, 0.70) ',
                data: [15, 20, 25, 35, 40, 35, 20, 18, 20, 30]
            },
            {
                label: 'My Second dataset',
                borderWidth: '1',
                borderColor: 'rgba(91, 146, 255, 0)',
                backgroundColor: 'rgba(91, 146, 255, 0.5) ',
                data: [35, 30, 45, 50, 48, 40, 40, 30, 48, 40]
            }
        ];
        // donughtchart chart
        this.donughtchartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            cutoutPercentage: 70,
            responsive: true,
            aspectRatio: '1',
            legend: {
                display: false
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
        this.donughtchartLabels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
        this.donughtchartData = [
            {
                data: [30, 20, 35, 15],
                backgroundColor: ['rgba(240, 240, 240, 0.5)', '#5B92FF', '#1FC96E', '#F85778'],
                label: 'Dataset 1'
            }
        ];
        // linechartlarge chart
        this.linechartlargeOptions = {
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
                            display: false,
                            fontColor: '#90b5ff'
                        },
                        display: false,
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        }
                    }
                ]
            }
        };
        this.linechartlargeLabels = ['0', 'Q1', 'Q2', 'Q3', 'Q4'];
        this.linechartlargeData = [
            {
                data: [30, 20, 35, 15, 20],
                label: 'My First dataset',
                borderWidth: '2',
                borderColor: '#efe9e9',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }
        ];
        // barcharts chart
        this.barchartsOptions = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false,
                position: 'top'
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            display: true,
                            fontColor: '#90b5ff'
                        },
                        categoryPercentage: 0.3,
                        barPercentage: 1,
                        barThickness: 5
                    }
                ],
                yAxes: [
                    {
                        display: false
                    }
                ]
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart'
            }
        };
        this.barchartsLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
        this.barchartsData = [
            {
                label: 'Dataset 1',
                backgroundColor: '#efe9e9',
                borderColor: '#efe9e9',
                borderWidth: 1,
                data: [30, 20, 35, 15, 20]
            },
            {
                label: 'Dataset 2',
                backgroundColor: '#5B92FF',
                borderColor: '#5B92FF',
                borderWidth: 1,
                data: [35, 26, 25, 45, 30]
            }
        ];
        this.sliders.push({
            imagePath: 'assets/images/intro-1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/intro-2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/intro-3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }
    // events
    chartClicked(e) {
        // console.log(e);
    }
    chartHovered(e) {
        // console.log(e);
    }
    randomize() {
        // Only Change 3 values
        const data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
        const clone = JSON.parse(JSON.stringify(this.summaryChart1Data));
        clone[0].data = data;
        this.summaryChart1Data = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }
    ngOnInit() {
        this.summaryChart1Type = 'line';
        this.summaryChart2Type = 'bar';
        this.mixedchartjsType = 'line';
        this.donughtchartType = 'doughnut';
        this.linechartlargeType = 'line';
        this.barchartsType = 'bar';
        $('#mapwrap').vectorMap({
            map: 'world_mill'
        });
    }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
};
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/dashboard.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");









let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_8__["StatModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetModule"],
            // Specify ng-circle-progress as an import
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"].forRoot({
                // set defaults here
                radius: 50,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: '#78C000',
                innerStrokeColor: '#C7E596',
                animationDuration: 300,
            })
        ],
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map
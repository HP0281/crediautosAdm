(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboardnetworking-dashboardnetworking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/dashboardnetworking/dashboardnetworking.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/dashboardnetworking/dashboardnetworking.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card border-0 shadow-sm overflow-hidden mb-4\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto text-center\">\r\n                            <i class=\"material-icons icons bg-primary md-36 icon-50\">monetization_on</i>\r\n                        </div>\r\n                        <div class=\"col pl-0\">\r\n                            <p class=\"mb-0\">Total Profit</p>\r\n                            <h4 class=\"font-weight-light\"><small>$</small> 25,410</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"progress h-5 mt-2\">\r\n                        <div\r\n                            class=\"progress-bar\"\r\n                            role=\"progressbar\"\r\n                            style=\"width: 50%\"\r\n                            aria-valuenow=\"50\"\r\n                            aria-valuemin=\"0\"\r\n                            aria-valuemax=\"100\"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card border-0 shadow-sm overflow-hidden mb-4\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto text-center\">\r\n                            <i class=\"material-icons icons bg-danger md-36 icon-50\">remove_from_queue</i>\r\n                        </div>\r\n                        <div class=\"col pl-0\">\r\n                            <p class=\"mb-0\">Total Loss</p>\r\n                            <h4 class=\"font-weight-light\"><small>$</small> 15,410</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"progress h-5 mt-2\">\r\n                        <div\r\n                            class=\"progress-bar bg-danger\"\r\n                            role=\"progressbar\"\r\n                            style=\"width: 25%\"\r\n                            aria-valuenow=\"25\"\r\n                            aria-valuemin=\"0\"\r\n                            aria-valuemax=\"100\"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card border-0 shadow-sm overflow-hidden mb-4\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto align-self-center\">\r\n                            <div class=\"progress-summary\">\r\n                                <p class=\"mb-0\">\r\n                                    60%<br /><small><span class=\"d-block small text-template-primary\">Global</span></small>\r\n                                </p>\r\n                                <div class=\"circle-progress\">\r\n                                    <circle-progress\r\n                                        [percent]=\"76\"\r\n                                        [radius]=\"26\"\r\n                                        [outerStrokeWidth]=\"5\"\r\n                                        [innerStrokeWidth]=\"0\"\r\n                                        [outerStrokeColor]=\"'#1FC96E'\"\r\n                                        [showTitle]=\"false\"\r\n                                        [showSubtitle]=\"false\"\r\n                                        [innerStrokeColor]=\"'transparent'\"\r\n                                        [animation]=\"true\"\r\n                                        [animationDuration]=\"300\"\r\n                                    ></circle-progress>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col pl-0 \">\r\n                            <p class=\"mb-1\">Awareness<span class=\"text-template-primary d-block small\">Frequency</span></p>\r\n                            <h4 class=\"font-weight-light mb-0\">76.98%</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card border-0 shadow-sm overflow-hidden mb-4\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col \">\r\n                            <p class=\"mb-0\">Total Deals</p>\r\n                            <h4 class=\"font-weight-light\">15410 <small>+15%</small></h4>\r\n                        </div>\r\n                        <div class=\"col-auto text-center pl-0\">\r\n                            <i class=\"material-icons icons bg-warning md-36 icon-50\">language</i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"progress h-5 mt-2\">\r\n                        <div\r\n                            class=\"progress-bar bg-warning\"\r\n                            role=\"progressbar\"\r\n                            style=\"width: 65%\"\r\n                            aria-valuenow=\"65\"\r\n                            aria-valuemin=\"0\"\r\n                            aria-valuemax=\"100\"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card border-0 shadow-sm mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <p class=\"fs15\">User Session Overview<br /><small class=\"text-template-primary-light\">Per Quarter</small></p>\r\n                        </div>\r\n                        <form class=\"form-inline search align-self-center\">\r\n                            <input class=\"form-control form-control-sm\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" />\r\n                            <button class=\"btn btn-link btn-sm\" type=\"submit\"><i class=\"material-icons\">search</i></button>\r\n                        </form>\r\n                        <div class=\"col-auto\">\r\n                            <button class=\"btn btn-sm btn-outline-template\"><i class=\"material-icons md-18 mr-2\">print</i> Print</button>\r\n                            <button class=\"btn btn-sm btn-outline-template ml-2\">\r\n                                <i class=\"material-icons md-18 mr-2\">cloud_download</i> Export\r\n                            </button>\r\n                            <div class=\"dropdown d-inline-block  ml-2\" ngbDropdown>\r\n                                <button\r\n                                    class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                    type=\"button\"\r\n                                    data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\"\r\n                                    aria-expanded=\"false\" ngbDropdownToggle\r\n                                >\r\n                                    <i class=\"material-icons\">more_horiz</i>\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Another</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Something</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <br />\r\n                    <div class=\"areachart\">\r\n                        <canvas baseChart [datasets]=\"mixedchartjsData\" [labels]=\"mixedchartjsLabels\" [options]=\"mixedchartjsOptions\" [legend]=\"mixedchartjsLegend\" [chartType]=\"mixedchartjsType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        IT User <small class=\"d-block\"><span class=\"text-template-primary\">25600</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-success fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Non-IT <small class=\"d-block\"><span class=\"text-template-primary\">6548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-auto border-left-dashed\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-danger fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Trainee <small class=\"d-block\"><span class=\"text-template-primary\">15548</span></small>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-4  mb-4\">\r\n            <div class=\"card border-0 shadow-sm overflow-hidden h-100\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <p class=\"fs15\">Page Views<br /><small class=\"text-template-primary-light\">This week vs Last week</small></p>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"dropdown\" ngbDropdown>\r\n                                <button class=\"btn dropdown-toggle btn-sm btn-link active\" ngbDropdownToggle>\r\n                                    <i class=\"material-icons\">more_horiz</i>\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another</a>\r\n                                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ngb-tabset #t=\"ngbTabset\" class=\"charttab\">\r\n                        <ngb-tab class=\"show active\" id=\"tabsone\">\r\n                            <ng-template ngbTabContent>\r\n                                <div class=\"barcharts\">\r\n                                    <canvas\r\n                                        baseChart\r\n                                        [datasets]=\"barchartsData\"\r\n                                        [labels]=\"barchartsLabels\"\r\n                                        [options]=\"barchartsOptions\"\r\n                                        [legend]=\"barchartsLegend\"\r\n                                        [chartType]=\"barchartsType\"\r\n                                        (chartHover)=\"chartHovered($event)\"\r\n                                        (chartClick)=\"chartClicked($event)\"\r\n                                    ></canvas>\r\n                                </div>\r\n                            </ng-template>\r\n                        </ngb-tab>\r\n                        <ngb-tab class=\"tab-pane fade\" id=\"tabstwo\"><ng-template ngbTabContent>Tab 2</ng-template></ngb-tab>\r\n                        <ngb-tab class=\"tab-pane fade\" id=\"tabsthree\"><ng-template ngbTabContent>Tab 3</ng-template></ngb-tab>\r\n                    </ngb-tabset>\r\n                </div>\r\n                <div class=\"card-footer p-0 border-0 bg-none\">\r\n                    <ul class=\"nav nav-tabs nav-fill\" id=\"myTab\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" (click)=\"t.select('tabsone')\">\r\n                                <p class=\"mb-1\">New User</p>\r\n                                <p class=\"text-template-primary-light\">2540 <span class=\"badge badge-success vm\">+21%</span></p>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"t.select('tabstwo')\">\r\n                                <p class=\"mb-1\">Returning User</p>\r\n                                <p class=\"text-template-primary-light\">1540 <span class=\"badge badge-danger vm\">-21%</span></p>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"t.select('tabsthree')\">\r\n                                <p class=\"mb-1\">Referral</p>\r\n                                <p class=\"text-template-primary-light\">10 <span class=\"badge badge-danger vm\">-21%</span></p>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-4\">\r\n            <div class=\"card border-0 shadow-sm mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col align-self-center\">\r\n                            <p class=\"fs15\">Sales by Categories</p>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"dropdown\" ngbDropdown>\r\n                                <button\r\n                                    class=\"btn dropdown-toggle btn-sm btn-link py-0 active\"\r\n                                    type=\"button\"\r\n                                    data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\"\r\n                                    aria-expanded=\"false\"\r\n                                    ngbDropdownToggle\r\n                                >\r\n                                    <i class=\"material-icons\">more_horiz</i>\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Another</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Something</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body pt-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-auto text-center align-self-center\">\r\n                            <div class=\"donughtchart\">\r\n                                <canvas baseChart [datasets]=\"donughtchartData\" [labels]=\"donughtchartLabels\" [options]=\"donughtchartOptions\" [legend]=\"donughtchartLegend\" [chartType]=\"donughtchartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"row mb-1\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Referral Sale\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-danger\">20%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mb-1\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-success fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Direct Sales\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-success\">15%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-danger fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Offline Sales\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-success\">18%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card border-0 shadow-sm mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col align-self-center\">\r\n                            <p class=\"fs15\">Bounce Rate</p>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"dropdown\" ngbDropdown>\r\n                                <button\r\n                                    class=\"btn dropdown-toggle btn-sm btn-link py-0 active\"\r\n                                    type=\"button\"\r\n                                    data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\"\r\n                                    aria-expanded=\"false\" ngbDropdownToggle\r\n                                >\r\n                                    <i class=\"material-icons\">more_horiz</i>\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Another</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Something</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 text-center align-self-center\">\r\n                            <div class=\"linechart-large\">\r\n                                <canvas baseChart [datasets]=\"linechartlargeData\" [labels]=\"linechartlargeLabels\" [options]=\"linechartlargeOptions\" [legend]=\"linechartlargeLegend\" [chartType]=\"linechartlargeType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-4\">\r\n            <div class=\"card border-0 shadow-sm mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <p class=\"fs15\">Internet Speed<br /><small class=\"text-template-primary-light\">Speed Check Server 1</small></p>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <div class=\"dropdown\" ngbDropdown>\r\n                                <button\r\n                                    class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                    type=\"button\"\r\n                                    data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\"\r\n                                    aria-expanded=\"false\" ngbDropdownToggle\r\n                                >\r\n                                    <i class=\"material-icons\">more_horiz</i>\r\n                                </button>\r\n                                <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Another</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Something</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body pt-0\">\r\n                    <div class=\"guagechart\">\r\n                        <h3 class=\"mt-2\">30.1<br /><small class=\"text-template-primary\">mbps</small></h3>\r\n                        <rg-gauge-chart class=\"mx-auto\" [canvasWidth]=\"canvasWidth\" [needleValue]=\"needleValue\" [centralLabel]=\"centralLabel\" [options]=\"options\"></rg-gauge-chart>                   \r\n                    </div>\r\n                    <h3 class=\"text-warning text-center mb-3\">\r\n                        <i class=\"material-icons\">star_outline</i>\r\n                        <i class=\"material-icons\">star_outline</i>\r\n                        <i class=\"material-icons\">star_outline</i>\r\n                    </h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 text-right\">\r\n                            <p class=\"mb-1\">Total Sales <i class=\"material-icons text-template-primary fs15 vm\">album</i></p>\r\n                            <p class=\"text-template-primary-light\">25600</p>\r\n                        </div>\r\n                        <div class=\"col-6 border-left-dashed\">\r\n                            <p class=\"mb-1\"><i class=\"material-icons text-template-primary-light fs15 vm\">album</i> Referral Sales</p>\r\n                            <p class=\"text-template-primary-light\">6500</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-md-12\">\r\n            <div class=\"card border-0 shadow-sm overflow-hidden mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-md\">\r\n                            <p class=\"fs15\">\r\n                                Assigned Tickets and Status<br /><small class=\"text-template-primary-light\">This week vs Last week</small>\r\n                            </p>\r\n                        </div>\r\n                        <form class=\"form-inline search col-auto align-self-center px-0\">\r\n                            <input class=\"form-control form-control-sm\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" />\r\n                            <button class=\"btn btn-link btn-sm\" type=\"submit\"><i class=\"material-icons\">search</i></button>\r\n                        </form>\r\n                        <div class=\"col-auto align-self-center\">\r\n                            <button class=\"btn btn-sm btn-outline-template ml-2\">\r\n                                <i class=\"material-icons md-18\">cloud_download</i> Export\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table datatable display responsive w-100\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"all\">Order ID</th>\r\n                                <th class=\"min-tablet\">Order From</th>\r\n                                <th class=\"min-desktop\">Date</th>\r\n                                <th class=\"\">Status</th>\r\n                                <th class=\"min-desktop\">Order Receiver</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>ID0001</td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            <img src=\"assets/images/user3.png\" alt=\"\" />\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">John Alexandar</p>\r\n                                            <p class=\"text-template-primary-light\">Sydney, Australia</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>12-12-2019</td>\r\n                                <td>\r\n                                    <div class=\"btn-success btn btn-sm\">Accepted</div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            <img src=\"assets/images/user1.png\" alt=\"\" />\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Sonya Wilson</p>\r\n                                            <p class=\"text-template-primary-light\">Aquaguaard Manager</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"dropdown\" ngbDropdown>\r\n                                        <button\r\n                                            class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                            type=\"button\"\r\n                                            data-toggle=\"dropdown\"\r\n                                            aria-haspopup=\"true\"\r\n                                            aria-expanded=\"false\" ngbDropdownToggle\r\n                                        >\r\n                                            <i class=\"material-icons\">more_horiz</i>\r\n                                        </button>\r\n                                        <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                            <a class=\"dropdown-item\" href=\"#\">View</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>ID0002</td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            A\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Anthony Desouza</p>\r\n                                            <p class=\"text-template-primary-light\">Sydney, Australia</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>12-12-2019</td>\r\n                                <td>\r\n                                    <div class=\"btn-primary btn btn-sm\">Accepted</div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            <img src=\"assets/images/user2.png\" alt=\"\" />\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Anjali Govind</p>\r\n                                            <p class=\"text-template-primary-light\">Aquaguaard Manager</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"dropdown\" ngbDropdown>\r\n                                        <button\r\n                                            class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                            type=\"button\"\r\n                                            data-toggle=\"dropdown\"\r\n                                            aria-haspopup=\"true\"\r\n                                            aria-expanded=\"false\" ngbDropdownToggle\r\n                                        >\r\n                                            <i class=\"material-icons\">more_horiz</i>\r\n                                        </button>\r\n                                        <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                            <a class=\"dropdown-item\" href=\"#\">View</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>ID0003</td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            M\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Mark Zukarburgs</p>\r\n                                            <p class=\"text-template-primary-light\">Sydney, Australia</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>12-12-2019</td>\r\n                                <td>\r\n                                    <div class=\"btn-warning btn btn-sm\">Accepted</div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            <img src=\"assets/images/user3.png\" alt=\"\" />\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Syam Prashad</p>\r\n                                            <p class=\"text-template-primary-light\">Aquaguaard Manager</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"dropdown\" ngbDropdown>\r\n                                        <button\r\n                                            class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                            type=\"button\"\r\n                                            data-toggle=\"dropdown\"\r\n                                            aria-haspopup=\"true\"\r\n                                            aria-expanded=\"false\" ngbDropdownToggle\r\n                                        >\r\n                                            <i class=\"material-icons\">more_horiz</i>\r\n                                        </button>\r\n                                        <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                            <a class=\"dropdown-item\" href=\"#\">View</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>ID0004</td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            <img src=\"assets/images/user3.png\" alt=\"\" />\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">John Doe</p>\r\n                                            <p class=\"text-template-primary-light\">Sydney, Australia</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>12-12-2019</td>\r\n                                <td>\r\n                                    <div class=\"btn-danger btn btn-sm\">Accepted</div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            S\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Sonya Wilson</p>\r\n                                            <p class=\"text-template-primary-light\">Aquaguaard Manager</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"dropdown\" ngbDropdown>\r\n                                        <button\r\n                                            class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                            type=\"button\"\r\n                                            data-toggle=\"dropdown\"\r\n                                            aria-haspopup=\"true\"\r\n                                            aria-expanded=\"false\" ngbDropdownToggle\r\n                                        >\r\n                                            <i class=\"material-icons\">more_horiz</i>\r\n                                        </button>\r\n                                        <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                            <a class=\"dropdown-item\" href=\"#\">View</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>ID0005</td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            M\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Mark Zukarburgs</p>\r\n                                            <p class=\"text-template-primary-light\">Sydney, Australia</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>12-12-2019</td>\r\n                                <td>\r\n                                    <div class=\"btn-success btn btn-sm\">Accepted</div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"media\">\r\n                                        <figure class=\"mb-0 avatar avatar-40 mr-2\">\r\n                                            <img src=\"assets/images/user4.png\" alt=\"\" />\r\n                                        </figure>\r\n                                        <div class=\"media-body\">\r\n                                            <p class=\"mb-0 template-inverse\">Sonya Wilson</p>\r\n                                            <p class=\"text-template-primary-light\">Aquaguaard Manager</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"dropdown\" ngbDropdown>\r\n                                        <button\r\n                                            class=\"btn dropdown-toggle btn-sm btn-link active\"\r\n                                            type=\"button\"\r\n                                            data-toggle=\"dropdown\"\r\n                                            aria-haspopup=\"true\"\r\n                                            aria-expanded=\"false\" ngbDropdownToggle\r\n                                        >\r\n                                            <i class=\"material-icons\">more_horiz</i>\r\n                                        </button>\r\n                                        <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\" ngbDropdownMenu>\r\n                                            <a class=\"dropdown-item\" href=\"#\">View</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                                            <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-4 \">\r\n            <div class=\"card border-0 shadow-sm overflow-hidden mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <p class=\"fs15\">\r\n                                Activity Wall<br /><small class=\"text-template-primary-light\">Most recent activities done</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body scroll-y h-400 p-0\">\r\n                    <div class=\"list-group timeline-list roudned-0\">\r\n                        <div class=\"list-group-item border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col mw-80 pr-0\">\r\n                                    <p class=\"mb-0\">11:20am</p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <div class=\"timeline-circle-wrap\">\r\n                                        <div class=\"timeline-circle border-warning\"><span class=\"bg-warning\"></span></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p class=\"mb-0\">We become world most valauble</p>\r\n                                    <p class=\"small text-mute\">Thank you for all of your support and well wishes</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"list-group-item border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col mw-80 pr-0\">\r\n                                    <p class=\"mb-0\">08:45am</p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <div class=\"timeline-circle-wrap\">\r\n                                        <div class=\"timeline-circle border-danger\"><span class=\"bg-danger\"></span></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p class=\"mb-0\">Team Closer</p>\r\n                                    <p class=\"small text-template-primary-light mb-1\">Maxartkiller Team</p>\r\n                                </div>\r\n                                <div class=\"col pl-0 align-self-center\">\r\n                                    <figure class=\"avatar avatar-20\"><img src=\"assets/images/user1.png\" alt=\"\" /></figure>\r\n                                    <figure class=\"avatar avatar-20\"><img src=\"assets/images/user2.png\" alt=\"\" /></figure>\r\n                                    <figure class=\"avatar avatar-20\"><img src=\"assets/images/user3.png\" alt=\"\" /></figure>\r\n                                    <figure class=\"avatar avatar-20\"><img src=\"assets/images/user4.png\" alt=\"\" /></figure>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"list-group-item border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col mw-80 pr-0\">\r\n                                    <p class=\"mb-0\">09:10am</p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <div class=\"timeline-circle-wrap\">\r\n                                        <div class=\"timeline-circle border-success\"><span class=\"bg-success\"></span></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p class=\"mb-0\">Final Amendments are done</p>\r\n                                    <p class=\"small text-template-primary-light\">Creative visual hierarchy completed</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"list-group-item border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col mw-80 pr-0\">\r\n                                    <p class=\"mb-0\">10:15am</p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <div class=\"timeline-circle-wrap\">\r\n                                        <div class=\"timeline-circle border-primary\"><span class=\"bg-primary\"></span></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p class=\"mb-0\">Vision deployment done</p>\r\n                                    <p class=\"small text-template-primary-light\">UX designer worked upon timline</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"list-group-item border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col mw-80 pr-0\">\r\n                                    <p class=\"mb-0\">11:20am</p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <div class=\"timeline-circle-wrap\">\r\n                                        <div class=\"timeline-circle border-primary\"><span class=\"bg-primary\"></span></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p class=\"mb-0\">Vision deployment done</p>\r\n                                    <p class=\"small text-template-primary-light\">UX designer worked upon timline</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"list-group-item border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col mw-80 pr-0\">\r\n                                    <p class=\"mb-0\">11:45am</p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <div class=\"timeline-circle-wrap\">\r\n                                        <div class=\"timeline-circle border-primary\"><span class=\"bg-primary\"></span></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p class=\"mb-0\">Vision deployment done</p>\r\n                                    <p class=\"small text-template-primary-light\">UX designer worked upon timline</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"list-group-item border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col mw-80 pr-0\">\r\n                                    <p class=\"mb-0\">12:00am</p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <div class=\"timeline-circle-wrap\">\r\n                                        <div class=\"timeline-circle border-info\"><span class=\"bg-info\"></span></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p class=\"mb-0\">Critical Bug resolved</p>\r\n                                    <p class=\"small text-template-primary-light\">Cleared list for bugs and development.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-4\">\r\n            <div class=\"card border-0 shadow-sm mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col align-self-center\">\r\n                            <p class=\"fs15\">\r\n                                Sales by Country<br /><small class=\"text-template-primary-light\">Locate best popular country</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body pt-2\">\r\n                    <div class=\"worldmap3\" id=\"mapwrap\"></div>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col text-right\">\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Sydeny\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-danger\">20%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        WestIndies\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-success\">15%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Newzealand\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-success\">18%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        Brazil\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-danger\">20%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        India\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-success\">15%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"material-icons text-template-primary fs15 vm\">album</i>\r\n                                </div>\r\n                                <div class=\"col pl-0\">\r\n                                    <p>\r\n                                        England\r\n                                        <small class=\"d-block\"\r\n                                            ><span class=\"text-template-primary\">2548</span> <span class=\"text-success\">18%</span></small\r\n                                        >\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-6 col-xl-4\">\r\n            <div class=\"card border-0 shadow-sm mb-4\">\r\n                <div class=\"card-header border-0 bg-none\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col align-self-center\">\r\n                            <p class=\"fs15\">\r\n                                New Users<br /><small class=\"text-template-primary-light\">Most recent new registrations</small>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 mb-4 text-center\">\r\n                            <figure class=\"avatar avatar-110 mb-3\">\r\n                                <button class=\"btn btn-sm text-danger user-like\"><i class=\"material-icons md-18\">favorite</i></button>\r\n                                <img src=\"assets/images/user2.png\" alt=\"\" />\r\n                            </figure>\r\n                            <p class=\"mb-1\">Anjali Govind</p>\r\n                            <p class=\"text-template-primary-light\">Team Lead</p>\r\n                        </div>\r\n                        <div class=\"col-6 mb-4 text-center\">\r\n                            <figure class=\"avatar avatar-110 mb-3\">\r\n                                <button class=\"btn btn-sm text-danger user-like\"><i class=\"material-icons md-18\">favorite</i></button>\r\n                                <img src=\"assets/images/user3.png\" alt=\"\" />\r\n                            </figure>\r\n                            <p class=\"mb-1\">Sonya Wilson</p>\r\n                            <p class=\"text-template-primary-light\">Marketing Lead</p>\r\n                        </div>\r\n                        <div class=\"col-6 text-center\">\r\n                            <figure class=\"avatar avatar-110 mb-3\">\r\n                                <button class=\"btn btn-sm text-danger user-like\"><i class=\"material-icons md-18\">favorite</i></button>\r\n                                <img src=\"assets/images/user4.png\" alt=\"\" />\r\n                            </figure>\r\n                            <p class=\"mb-1\">Syam Prashad</p>\r\n                            <p class=\"text-template-primary-light\">Production Manager</p>\r\n                        </div>\r\n                        <div class=\"col-6 text-center\">\r\n                            <figure class=\"avatar avatar-110 mb-3\">\r\n                                <button class=\"btn btn-sm text-danger user-like\"><i class=\"material-icons md-18\">favorite</i></button>\r\n                                <img src=\"assets/images/user5.png\" alt=\"\" />\r\n                            </figure>\r\n                            <p class=\"mb-1\">John Doe</p>\r\n                            <p class=\"text-template-primary-light\">CEO, Aquaagaurd</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboardnetworking/dashboardnetworking-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/dashboardnetworking/dashboardnetworking-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboardnetworking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboardnetworking.component */ "./src/app/layout/dashboardnetworking/dashboardnetworking.component.ts");




var routes = [
    {
        path: '', component: _dashboardnetworking_component__WEBPACK_IMPORTED_MODULE_3__["DashboardNetworkingComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboardnetworking/dashboardnetworking.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/dashboardnetworking/dashboardnetworking.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n.summary-small {\n  height: 40px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZG5ldHdvcmtpbmcvQzpcXFRyYWJham9cXGNyZWRpYXV0b3NBZG0vc3JjXFxhcHBcXGxheW91dFxcZGFzaGJvYXJkbmV0d29ya2luZ1xcZGFzaGJvYXJkbmV0d29ya2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZG5ldHdvcmtpbmcvZGFzaGJvYXJkbmV0d29ya2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZG5ldHdvcmtpbmcvZGFzaGJvYXJkbmV0d29ya2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuZHJvcGRvd24tbWVudS1yaWdodCB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXNtYWxse1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5zdW1tYXJ5LXNtYWxsIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/dashboardnetworking/dashboardnetworking.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/dashboardnetworking/dashboardnetworking.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardNetworkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardNetworkingComponent", function() { return DashboardNetworkingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");



var DashboardNetworkingComponent = /** @class */ (function () {
    function DashboardNetworkingComponent() {
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
        /* guage chart  */
        this.canvasWidth = 300;
        this.needleValue = 30;
        this.centralLabel = '';
        this.options = {
            hasNeedle: false,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ['#1FC96E', 'lightgray'],
            arcDelimiters: [20],
            needleStartValue: 30
        };
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
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    // events
    DashboardNetworkingComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    DashboardNetworkingComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    DashboardNetworkingComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
        var clone = JSON.parse(JSON.stringify(this.summaryChart1Data));
        clone[0].data = data;
        this.summaryChart1Data = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    DashboardNetworkingComponent.prototype.ngOnInit = function () {
        this.summaryChart1Type = 'line';
        this.summaryChart2Type = 'bar';
        this.mixedchartjsType = 'line';
        this.donughtchartType = 'doughnut';
        this.linechartlargeType = 'line';
        this.barchartsType = 'bar';
        $('#mapwrap').vectorMap({
            map: 'world_mill'
        });
    };
    DashboardNetworkingComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DashboardNetworkingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboardnetworking.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/dashboardnetworking/dashboardnetworking.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./dashboardnetworking.component.scss */ "./src/app/layout/dashboardnetworking/dashboardnetworking.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardNetworkingComponent);
    return DashboardNetworkingComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboardnetworking/dashboardnetworking.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/dashboardnetworking/dashboardnetworking.module.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardNetworkingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardNetworkingModule", function() { return DashboardNetworkingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm5/ng2-charts.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");
/* harmony import */ var angular_gauge_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gauge-chart */ "./node_modules/angular-gauge-chart/__ivy_ngcc__/fesm5/angular-gauge-chart.js");
/* harmony import */ var _dashboardnetworking_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboardnetworking-routing.module */ "./src/app/layout/dashboardnetworking/dashboardnetworking-routing.module.ts");
/* harmony import */ var _dashboardnetworking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboardnetworking.component */ "./src/app/layout/dashboardnetworking/dashboardnetworking.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");










var DashboardNetworkingModule = /** @class */ (function () {
    function DashboardNetworkingModule() {
    }
    DashboardNetworkingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
                _dashboardnetworking_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_9__["StatModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetModule"],
                angular_gauge_chart__WEBPACK_IMPORTED_MODULE_6__["GaugeChartModule"],
                // Specify ng-circle-progress as an import
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 50,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: '#78C000',
                    innerStrokeColor: '#C7E596',
                    animationDuration: 300
                })
            ],
            declarations: [_dashboardnetworking_component__WEBPACK_IMPORTED_MODULE_8__["DashboardNetworkingComponent"]]
        })
    ], DashboardNetworkingModule);
    return DashboardNetworkingModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboardnetworking-dashboardnetworking-module-es5.js.map
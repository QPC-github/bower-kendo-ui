/**
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["brx-IN"] = {
        name: "brx-IN",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3,2],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3,2],
                symbol: "%"
            },
            currency: {
                name: "Indian Rupee",
                abbr: "INR",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3,2],
                symbol: "₹"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["रबिबार","समबार","मंगलबार","बुदबार","बिसथिबार","सुखुरबार","सुनिबार"],
                    namesAbbr: ["रबि","सम","मंगल","बुद","बिसथि","सुखुर","सुनि"],
                    namesShort: ["रबि","सम","मंगल","बुद","बिसथि","सुखुर","सुनि"]
                },
                months: {
                    names: ["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"],
                    namesAbbr: ["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"]
                },
                AM: ["फुं","फुं","फुं"],
                PM: ["बेलासे","बेलासे","बेलासे"],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM d, yyyy",
                    F: "dddd, MMMM d, yyyy h:mm:ss tt",
                    g: "M/d/yyyy h:mm tt",
                    G: "M/d/yyyy h:mm:ss tt",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
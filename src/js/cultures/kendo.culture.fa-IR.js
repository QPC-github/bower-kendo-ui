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
    kendo.cultures["fa-IR"] = {
        name: "fa-IR",
        numberFormat: {
            pattern: ["n-"],
            decimals: 2,
            ",": ",",
            ".": "/",
            groupSize: [3],
            percent: {
                pattern: ["n- %","n %"],
                decimals: 2,
                ",": ",",
                ".": "/",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Iranian Rial",
                abbr: "IRR",
                pattern: ["n-$","n$"],
                decimals: 2,
                ",": ",",
                ".": "/",
                groupSize: [3],
                symbol: "ريال"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
                    namesAbbr: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
                    namesShort: ["ی","د","س","چ","پ","ج","ش"]
                },
                months: {
                    names: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],
                    namesAbbr: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"]
                },
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    F: "dddd, d MMMM yyyy hh:mm:ss tt",
                    g: "dd/MM/yyyy hh:mm tt",
                    G: "dd/MM/yyyy hh:mm:ss tt",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 6
            }
        }
    };
})(this);
}));
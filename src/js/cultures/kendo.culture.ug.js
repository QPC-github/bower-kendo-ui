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
    kendo.cultures["ug"] = {
        name: "ug",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["$-n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "¥"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],
                    namesAbbr: ["يە","دۈ","سە","چا","پە","جۈ","شە"],
                    namesShort: ["ي","د","س","چ","پ","ج","ش"]
                },
                months: {
                    names: ["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","نويابىر","دېكابىر"],
                    namesAbbr: ["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي"]
                },
                AM: ["چۈشتىن بۇرۇن","چۈشتىن بۇرۇن","چۈشتىن بۇرۇن"],
                PM: ["چۈشتىن كېيىن","چۈشتىن كېيىن","چۈشتىن كېيىن"],
                patterns: {
                    d: "yyyy-M-d",
                    D: "yyyy-'يىل' d-MMMM",
                    F: "yyyy-'يىل' d-MMMM H:mm:ss",
                    g: "yyyy-M-d H:mm",
                    G: "yyyy-M-d H:mm:ss",
                    m: "d-MMMM",
                    M: "d-MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy-'يىلى' MMMM",
                    Y: "yyyy-'يىلى' MMMM"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
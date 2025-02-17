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
    kendo.cultures["eo"] = {
        name: "eo",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "XDR"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"],
                    namesAbbr: ["di","lu","ma","me","ĵa","ve","sa"],
                    namesShort: ["di","lu","ma","me","ĵa","ve","sa"]
                },
                months: {
                    names: ["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"],
                    namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"]
                },
                AM: ["atm","atm","ATM"],
                PM: ["ptm","ptm","PTM"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "dddd, d-'a' 'de' MMMM yyyy",
                    F: "dddd, d-'a' 'de' MMMM yyyy HH:mm:ss",
                    g: "yyyy-MM-dd HH:mm",
                    G: "yyyy-MM-dd HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
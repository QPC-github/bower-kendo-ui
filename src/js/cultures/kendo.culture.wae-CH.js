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
    kendo.cultures["wae-CH"] = {
        name: "wae-CH",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": "’",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": "’",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Swiss Franc",
                abbr: "CHF",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": "’",
                ".": ",",
                groupSize: [3],
                symbol: "CHF"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Sunntag","Mäntag","Zištag","Mittwuč","Fróntag","Fritag","Samštag"],
                    namesAbbr: ["Sun","Män","Ziš","Mit","Fró","Fri","Sam"],
                    namesShort: ["Sun","Män","Ziš","Mit","Fró","Fri","Sam"]
                },
                months: {
                    names: ["Jenner","Hornig","Märze","Abrille","Meije","Bráčet","Heiwet","Öigšte","Herbštmánet","Wímánet","Wintermánet","Chrištmánet"],
                    namesAbbr: ["Jen","Hor","Mär","Abr","Mei","Brá","Hei","Öig","Her","Wím","Win","Chr"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "dddd, d. MMMM yyyy",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
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
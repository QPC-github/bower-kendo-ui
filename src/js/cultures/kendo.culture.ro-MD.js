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
    kendo.cultures["ro-MD"] = {
        name: "ro-MD",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Moldovan Leu",
                abbr: "MDL",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "L"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],
                    namesAbbr: ["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],
                    namesShort: ["Du","Lu","Ma","Mi","Jo","Vi","Sâ"]
                },
                months: {
                    names: ["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],
                    namesAbbr: ["ian.","feb.","mar.","apr.","mai","iun.","iul.","aug.","sept.","oct.","nov.","dec."]
                },
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d MMMM yyyy",
                    F: "dddd, d MMMM yyyy HH:mm:ss",
                    g: "dd.MM.yyyy HH:mm",
                    G: "dd.MM.yyyy HH:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
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
    kendo.cultures["kl"] = {
        name: "kl",
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
                name: "",
                abbr: "",
                pattern: ["$ -n","$n"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3,0],
                symbol: "kr."
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["sapaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],
                    namesAbbr: ["sap.","at.","marl.","ping.","sis.","tall.","arf."],
                    namesShort: ["sa","at","ma","pi","si","ta","ar"]
                },
                months: {
                    names: ["januaari","februaari","marsi","apriili","maaji","juuni","juuli","aggusti","septembari","oktobari","novembari","decembari"],
                    namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec"]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "MMMM d'.-at, 'yyyy",
                    F: "MMMM d'.-at, 'yyyy HH:mm:ss",
                    g: "dd-MM-yyyy HH:mm",
                    G: "dd-MM-yyyy HH:mm:ss",
                    m: "MMMM d'.-at'",
                    M: "MMMM d'.-at'",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
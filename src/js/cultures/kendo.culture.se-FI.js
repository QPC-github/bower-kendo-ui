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
    kendo.cultures["se-FI"] = {
        name: "se-FI",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Euro",
                abbr: "EUR",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "€"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorastat","bearjadat","lávvardat"],
                    namesAbbr: ["so","má","di","ga","du","be","lá"],
                    namesShort: ["s","v","m","g","d","b","l"]
                },
                months: {
                    names: ["ođđajagemánu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu"],
                    namesAbbr: ["ođđj","guov","njuk","cuoŋ","mies","geas","suoi","borg","čakč","golg","skáb","juov"]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "d.M.yyyy",
                    D: "dddd', 'MMMM d'. b. 'yyyy",
                    F: "dddd', 'MMMM d'. b. 'yyyy H:mm:ss",
                    g: "d.M.yyyy H:mm",
                    G: "d.M.yyyy H:mm:ss",
                    m: "MMMM d'. b.'",
                    M: "MMMM d'. b.'",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
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
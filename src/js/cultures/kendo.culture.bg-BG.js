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
    kendo.cultures["bg-BG"] = {
        name: "bg-BG",
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
                name: "Bulgarian Lev",
                abbr: "BGN",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "лв."
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],
                    namesAbbr: ["нед","пон","вт","ср","четв","пет","съб"],
                    namesShort: ["нд","пн","вт","ср","чт","пт","сб"]
                },
                months: {
                    names: ["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"],
                    namesAbbr: ["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "d.M.yyyy 'г.'",
                    D: "dd MMMM yyyy 'г.'",
                    F: "dd MMMM yyyy 'г.' H:mm:ss",
                    g: "d.M.yyyy 'г.' H:mm",
                    G: "d.M.yyyy 'г.' H:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy 'г.'",
                    Y: "MMMM yyyy 'г.'"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
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
    kendo.cultures["oc"] = {
        name: "oc",
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
                    names: ["dimenge","diluns","dimarts","dimècres","dijòus","divendres","dissabte"],
                    namesAbbr: ["dg.","dl.","dma.","dmc.","dj.","dv.","ds."],
                    namesShort: ["dg","dl","da","dc","dj","dv","ds"]
                },
                months: {
                    names: ["genièr","febrièr","març","abril","mai","junh","julhet","agost","setembre","octobre","novembre","decembre"],
                    namesAbbr: ["gen.","feb.","març","abr.","mai","junh","julh","ag.","set.","oct.","nov.","dec."]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM' de 'yyyy",
                    F: "dddd d MMMM' de 'yyyy HH.mm.ss",
                    g: "dd/MM/yyyy HH' h 'mm",
                    G: "dd/MM/yyyy HH.mm.ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH' h 'mm",
                    T: "HH.mm.ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM' de 'yyyy",
                    Y: "MMMM' de 'yyyy"
                },
                "/": "/",
                ":": ".",
                firstDay: 1
            }
        }
    };
})(this);
}));
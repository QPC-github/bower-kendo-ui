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
    kendo.cultures["fur-IT"] = {
        name: "fur-IT",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Euro",
                abbr: "EUR",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "€"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["domenie","lunis","martars","miercus","joibe","vinars","sabide"],
                    namesAbbr: ["dom","lun","mar","mie","joi","vin","sab"],
                    namesShort: ["dom","lun","mar","mie","joi","vin","sab"]
                },
                months: {
                    names: ["Zenâr","Fevrâr","Març","Avrîl","Mai","Jugn","Lui","Avost","Setembar","Otubar","Novembar","Dicembar"],
                    namesAbbr: ["Zen","Fev","Mar","Avr","Mai","Jug","Lui","Avo","Set","Otu","Nov","Dic"]
                },
                AM: ["a.","a.","A."],
                PM: ["p.","p.","P."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d 'di' MMMM 'dal' yyyy",
                    F: "dddd d 'di' MMMM 'dal' yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "d 'di' MMMM",
                    M: "d 'di' MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM 'dal' yyyy",
                    Y: "MMMM 'dal' yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
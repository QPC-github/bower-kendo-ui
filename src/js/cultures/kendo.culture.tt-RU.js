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
    kendo.cultures["tt-RU"] = {
        name: "tt-RU",
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
                name: "Russian Ruble",
                abbr: "RUB",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "₽"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["якшәмбе","дүшәмбе","сишәмбе","чәршәмбе","пәнҗешәмбе","җомга","шимбә"],
                    namesAbbr: ["якш.","дүш.","сиш.","чәрш.","пәнҗ.","җом.","шим."],
                    namesShort: ["я","д","с","ч","п","җ","ш"]
                },
                months: {
                    names: ["гыйнвар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],
                    namesAbbr: ["гыйн.","фев.","мар.","апр.","май","июнь","июль","авг.","сен.","окт.","нояб.","дек."]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dd MMMM yyyy' ел'",
                    F: "dd MMMM yyyy' ел' HH:mm:ss",
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
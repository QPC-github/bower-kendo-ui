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
    kendo.cultures["kk-KZ"] = {
        name: "kk-KZ",
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
                name: "Kazakhstani Tenge",
                abbr: "KZT",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "₸"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"],
                    namesAbbr: ["жс","дс","сс","ср","бс","жм","сб"],
                    namesShort: ["жс","дс","сс","ср","бс","жм","сб"]
                },
                months: {
                    names: ["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],
                    namesAbbr: ["қаң.","ақп.","нау.","сәу.","мам.","мау.","шіл.","там.","қыр.","қаз.","қар.","жел."]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "yyyy 'ж'. d MMMM, dddd",
                    F: "yyyy 'ж'. d MMMM, dddd HH:mm:ss",
                    g: "dd.MM.yyyy HH:mm",
                    G: "dd.MM.yyyy HH:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy 'ж'. MMMM",
                    Y: "yyyy 'ж'. MMMM"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
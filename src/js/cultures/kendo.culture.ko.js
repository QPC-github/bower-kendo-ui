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
    kendo.cultures["ko"] = {
        name: "ko",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-$n","$n"],
                decimals: 0,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "₩"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
                    namesAbbr: ["일","월","화","수","목","금","토"],
                    namesShort: ["일","월","화","수","목","금","토"]
                },
                months: {
                    names: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12"]
                },
                AM: ["오전","오전","오전"],
                PM: ["오후","오후","오후"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy'년' M'월' d'일' dddd",
                    F: "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
                    g: "yyyy-MM-dd tt h:mm",
                    G: "yyyy-MM-dd tt h:mm:ss",
                    m: "M월 d일",
                    M: "M월 d일",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy'년' M'월'",
                    Y: "yyyy'년' M'월'"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
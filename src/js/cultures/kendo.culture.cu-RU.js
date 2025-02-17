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
    kendo.cultures["cu-RU"] = {
        name: "cu-RU",
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
                    names: ["недѣ́лѧ","понедѣ́льникъ","вто́рникъ","среда̀","четверто́къ","пѧто́къ","сꙋббѡ́та"],
                    namesAbbr: ["ндⷧ҇ѧ","пнⷣе","втоⷬ҇","срⷣе","чеⷦ҇","пѧⷦ҇","сꙋⷠ҇"],
                    namesShort: ["ндⷧ҇ѧ","пнⷣе","втоⷬ҇","срⷣе","чеⷦ҇","пѧⷦ҇","сꙋⷠ҇"]
                },
                months: {
                    names: ["і҆аннꙋа́рїй","феврꙋа́рїй","ма́ртъ","а҆прі́ллїй","ма́їй","і҆ꙋ́нїй","і҆ꙋ́лїй","а҆́ѵгꙋстъ","септе́мврїй","ѻ҆ктѡ́врїй","ное́мврїй","деке́мврїй"],
                    namesAbbr: ["і҆аⷩ҇","феⷡ҇","маⷬ҇","а҆пⷬ҇","маꙵ","і҆ꙋⷩ҇","і҆ꙋⷧ҇","а҆́ѵⷢ҇","сеⷫ҇","ѻ҆кⷮ","ноеⷨ","деⷦ҇"]
                },
                AM: ["ДП","дп","ДП"],
                PM: ["ПП","пп","ПП"],
                patterns: {
                    d: "yyyy.MM.dd",
                    D: "dddd, d MMMM 'л'. yyyy.",
                    F: "dddd, d MMMM 'л'. yyyy. HH:mm:ss",
                    g: "yyyy.MM.dd HH:mm",
                    G: "yyyy.MM.dd HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
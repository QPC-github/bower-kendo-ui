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
    kendo.cultures["yo-NG"] = {
        name: "yo-NG",
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
                name: "Nigerian Naira",
                abbr: "NGN",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "₦"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Ọjọ́ Àìkú","Ọjọ́ Ajé","Ọjọ́ Ìsẹ́gun","Ọjọ́rú","Ọjọ́bọ","Ọjọ́ Ẹtì","Ọjọ́ Àbámẹ́ta"],
                    namesAbbr: ["Àìkú","Ajé","Ìsẹ́gun","Ọjọ́rú","Ọjọ́bọ","Ẹtì","Àbámẹ́ta"],
                    namesShort: ["Àìkú","Ajé","Ìsẹ́gun","Ọjọ́rú","Ọjọ́bọ","Ẹtì","Àbámẹ́ta"]
                },
                months: {
                    names: ["Oṣù Ṣẹ́rẹ́","Oṣù Èrèlè","Oṣù Ẹrẹ̀nà","Oṣù Ìgbé","Oṣù Ẹ̀bibi","Oṣù Òkúdu","Oṣù Agẹmọ","Oṣù Ògún","Oṣù Owewe","Oṣù Ọ̀wàrà","Oṣù Bélú","Oṣù Ọ̀pẹ̀"],
                    namesAbbr: ["Ṣẹ́rẹ́","Èrèlè","Ẹrẹ̀nà","Ìgbé","Ẹ̀bibi","Òkúdu","Agẹmọ","Ògún","Owewe","Ọ̀wàrà","Bélú","Ọ̀pẹ̀"]
                },
                AM: ["Àárọ̀","àárọ̀","ÀÁRỌ̀"],
                PM: ["Ọ̀sán","ọ̀sán","Ọ̀SÁN"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    F: "dddd, d MMMM yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
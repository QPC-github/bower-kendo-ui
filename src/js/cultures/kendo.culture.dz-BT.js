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
    kendo.cultures["dz-BT"] = {
        name: "dz-BT",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3,2],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3,2],
                symbol: "%"
            },
            currency: {
                name: "Bhutanese Ngultrum",
                abbr: "BTN",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3,2],
                symbol: "Nu."
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["གཟའ་ཟླ་བ་","གཟའ་མིག་དམར་","གཟའ་ལྷག་པ་","གཟའ་ཕུར་བུ་","གཟའ་པ་སངས་","གཟའ་སྤེན་པ་","གཟའ་ཉི་མ་"],
                    namesAbbr: ["ཟླ་","མིར་","ལྷག་","ཕུར་","སངས་","སྤེན་","ཉི་"],
                    namesShort: ["ཟླ་","མིར་","ལྷག་","ཕུར་","སངས་","སྤེན་","ཉི་"]
                },
                months: {
                    names: ["སྤྱི་ཟླ་དངཔ་","སྤྱི་ཟླ་གཉིས་པ་","སྤྱི་ཟླ་གསུམ་པ་","སྤྱི་ཟླ་བཞི་པ","སྤྱི་ཟླ་ལྔ་པ་","སྤྱི་ཟླ་དྲུག་པ","སྤྱི་ཟླ་བདུན་པ་","སྤྱི་ཟླ་བརྒྱད་པ་","སྤྱི་ཟླ་དགུ་པ་","སྤྱི་ཟླ་བཅུ་པ་","སྤྱི་ཟླ་བཅུ་གཅིག་པ་","སྤྱི་ཟླ་བཅུ་གཉིས་པ་"],
                    namesAbbr: ["ཟླ་༡","ཟླ་༢","ཟླ་༣","ཟླ་༤","ཟླ་༥","ཟླ་༦","ཟླ་༧","ཟླ་༨","ཟླ་༩","ཟླ་༡༠","ཟླ་༡༡","ཟླ་༡༢"]
                },
                AM: ["སྔ་ཆ་","སྔ་ཆ་","སྔ་ཆ་"],
                PM: ["ཕྱི་ཆ་","ཕྱི་ཆ་","ཕྱི་ཆ་"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "dddd, སྤྱི་ལོ་yyyy MMMM ཚེས་dd",
                    F: "dddd, སྤྱི་ལོ་yyyy MMMM ཚེས་dd ཆུ་ཚོད་h:mm:ss tt",
                    g: "yyyy-MM-dd ཆུ་ཚོད་ h སྐར་མ་ mm tt",
                    G: "yyyy-MM-dd ཆུ་ཚོད་h:mm:ss tt",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "ཆུ་ཚོད་ h སྐར་མ་ mm tt",
                    T: "ཆུ་ཚོད་h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
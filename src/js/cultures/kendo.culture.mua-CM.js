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
    kendo.cultures["mua-CM"] = {
        name: "mua-CM",
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
                name: "Central African CFA Franc",
                abbr: "XAF",
                pattern: ["-$n","$n"],
                decimals: 0,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "FCFA"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Com’yakke","Comlaaɗii","Comzyiiɗii","Comkolle","Comkaldǝɓlii","Comgaisuu","Comzyeɓsuu"],
                    namesAbbr: ["Cya","Cla","Czi","Cko","Cka","Cga","Cze"],
                    namesShort: ["Cya","Cla","Czi","Cko","Cka","Cga","Cze"]
                },
                months: {
                    names: ["Fĩi Loo","Cokcwaklaŋne","Cokcwaklii","Fĩi Marfoo","Madǝǝuutǝbijaŋ","Mamǝŋgwãafahbii","Mamǝŋgwãalii","Madǝmbii","Fĩi Dǝɓlii","Fĩi Mundaŋ","Fĩi Gwahlle","Fĩi Yuru"],
                    namesAbbr: ["FLO","CLA","CKI","FMF","MAD","MBI","MLI","MAM","FDE","FMU","FGW","FYU"]
                },
                AM: ["comme","comme","COMME"],
                PM: ["lilli","lilli","LILLI"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd d MMMM yyyy",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    g: "d/M/yyyy HH:mm",
                    G: "d/M/yyyy HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
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
    kendo.cultures["ff-Latn-NG"] = {
        name: "ff-Latn-NG",
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
                pattern: ["-$n","$ n"],
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
                    names: ["alete","altine","talaata","alarba","alkamiisa","aljumaa","asete"],
                    namesAbbr: ["alet","alt.","tal.","alar.","alk.","alj.","aset"],
                    namesShort: ["Al","Te","Ta","Al","Al","Ju","As"]
                },
                months: {
                    names: ["samwiee","feeburyee","marsa","awril","me","suyeŋ","sulyee","ut","satambara","oktoobar","nowamburu","deesamburu"],
                    namesAbbr: ["samw","feeb","mar","awr","me","suy","sul","ut","sat","okt","now","dees"]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    F: "dddd, MMMM dd, yyyy HH:mm:ss",
                    g: "d/M/yyyy H:mm",
                    G: "d/M/yyyy HH:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
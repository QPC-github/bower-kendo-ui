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
    kendo.cultures["rw-RW"] = {
        name: "rw-RW",
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
                name: "Rwandan Franc",
                abbr: "RWF",
                pattern: ["-$ n","$ n"],
                decimals: 0,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "RF"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Ku cyumweru","Kuwa mbere","Kuwa kabiri","Kuwa gatatu","Kuwa kane","Kuwa gatanu","Kuwa gatandatu"],
                    namesAbbr: ["cyu.","mbe.","kab.","gtu.","kan.","gnu.","gnd."],
                    namesShort: ["cyu.","mbe.","kab.","gtu.","kan.","gnu.","gnd."]
                },
                months: {
                    names: ["Mutarama","Gashyantare","Werurwe","Mata","Gicuransi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza"],
                    namesAbbr: ["mut.","gas.","wer.","mat.","gic.","kam.","nya.","kan.","nze.","ukw.","ugu.","uku."]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy MMMM d, dddd",
                    F: "yyyy MMMM d, dddd HH:mm:ss",
                    g: "yyyy-MM-dd HH:mm",
                    G: "yyyy-MM-dd HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
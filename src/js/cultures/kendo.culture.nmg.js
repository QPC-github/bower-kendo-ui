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
    kendo.cultures["nmg"] = {
        name: "nmg",
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
                name: "",
                abbr: "",
                pattern: ["-n $","n $"],
                decimals: 0,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "FCFA"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["sɔ́ndɔ","mɔ́ndɔ","sɔ́ndɔ mafú mába","sɔ́ndɔ mafú málal","sɔ́ndɔ mafú mána","mabágá má sukul","sásadi"],
                    namesAbbr: ["sɔ́n","mɔ́n","smb","sml","smn","mbs","sas"],
                    namesShort: ["sɔ́n","mɔ́n","smb","sml","smn","mbs","sas"]
                },
                months: {
                    names: ["ngwɛn matáhra","ngwɛn ńmba","ngwɛn ńlal","ngwɛn ńna","ngwɛn ńtan","ngwɛn ńtuó","ngwɛn hɛmbuɛrí","ngwɛn lɔmbi","ngwɛn rɛbvuâ","ngwɛn wum","ngwɛn wum navǔr","krísimin"],
                    namesAbbr: ["ng1","ng2","ng3","ng4","ng5","ng6","ng7","ng8","ng9","ng10","ng11","kris"]
                },
                AM: ["maná","maná","MANÁ"],
                PM: ["kugú","kugú","KUGÚ"],
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
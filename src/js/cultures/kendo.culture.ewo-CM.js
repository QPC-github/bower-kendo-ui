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
    kendo.cultures["ewo-CM"] = {
        name: "ewo-CM",
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
                name: "Central African CFA Franc",
                abbr: "XAF",
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
                    names: ["sɔ́ndɔ","mɔ́ndi","sɔ́ndɔ məlú mə́bɛ̌","sɔ́ndɔ məlú mə́lɛ́","sɔ́ndɔ məlú mə́nyi","fúladé","séradé"],
                    namesAbbr: ["sɔ́n","mɔ́n","smb","sml","smn","fúl","sér"],
                    namesShort: ["sɔ́n","mɔ́n","smb","sml","smn","fúl","sér"]
                },
                months: {
                    names: ["ngɔn osú","ngɔn bɛ̌","ngɔn lála","ngɔn nyina","ngɔn tána","ngɔn saməna","ngɔn zamgbála","ngɔn mwom","ngɔn ebulú","ngɔn awóm","ngɔn awóm ai dziá","ngɔn awóm ai bɛ̌"],
                    namesAbbr: ["ngo","ngb","ngl","ngn","ngt","ngs","ngz","ngm","nge","nga","ngad","ngab"]
                },
                AM: ["kíkíríg","kíkíríg","KÍKÍRÍG"],
                PM: ["ngəgógəle","ngəgógəle","NGƏGÓGƏLE"],
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
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
    kendo.cultures["sa-IN"] = {
        name: "sa-IN",
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
                name: "Indian Rupee",
                abbr: "INR",
                pattern: ["$ -n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3,2],
                symbol: "₹"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],
                    namesAbbr: ["रवि","सोम","मङ्ग","बुध","गुरु","शुक्र","शनि"],
                    namesShort: ["र","सो","म","बु","गु","शु","श"]
                },
                months: {
                    names: ["जान्युअरी","फेब्रुअरी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर"],
                    namesAbbr: ["जान्युअरी","फेब्रुअरी","मार्च","एप्रिल","मे","जुन","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर"]
                },
                AM: ["मध्यानपूर्व","मध्यानपूर्व","मध्यानपूर्व"],
                PM: ["मध्यानपच्यात","मध्यानपच्यात","मध्यानपच्यात"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy dddd",
                    F: "dd MMMM yyyy dddd HH:mm:ss",
                    g: "dd-MM-yyyy HH:mm",
                    G: "dd-MM-yyyy HH:mm:ss",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
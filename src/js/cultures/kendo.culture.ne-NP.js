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
    kendo.cultures["ne-NP"] = {
        name: "ne-NP",
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
                name: "Nepalese Rupee",
                abbr: "NPR",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "रु"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],
                    namesAbbr: ["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],
                    namesShort: ["आ","सो","म","बु","बि","शु","श"]
                },
                months: {
                    names: ["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"],
                    namesAbbr: ["जन","फेब","मार्च","अप्रिल","मे","जून","जुलाई","अग","सेप्ट","अक्ट","नोभ","डिस"]
                },
                AM: ["पूर्वाह्न","पूर्वाह्न","पूर्वाह्न"],
                PM: ["अपराह्न","अपराह्न","अपराह्न"],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    g: "M/d/yyyy h:mm tt",
                    G: "M/d/yyyy h:mm:ss tt",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM,yyyy",
                    Y: "MMMM,yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
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
    kendo.cultures["yi-001"] = {
        name: "yi-001",
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
                name: "Special Drawing Rights",
                abbr: "XDR",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "XDR"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],
                    namesAbbr: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],
                    namesShort: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"]
                },
                months: {
                    names: ["יאַנואַר","פֿעברואַר","מערץ","אַפּריל","מיי","יוני","יולי","אויגוסט","סעפּטעמבער","אקטאבער","נאוועמבער","דעצעמבער"],
                    namesAbbr: ["יאַנ","פֿעב","מערץ","אַפּר","מיי","יוני","יולי","אויג","סעפּ","אקט","נאוו","דעצ"]
                },
                AM: ["פֿאַרמיטאָג","פֿאַרמיטאָג","פֿאַרמיטאָג"],
                PM: ["נאָכמיטאָג","נאָכמיטאָג","נאָכמיטאָג"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dטן MMMM yyyy",
                    F: "dddd, dטן MMMM yyyy HH:mm:ss",
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
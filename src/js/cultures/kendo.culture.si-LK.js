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
    kendo.cultures["si-LK"] = {
        name: "si-LK",
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
                name: "Sri Lankan Rupee",
                abbr: "LKR",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "රු."
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],
                    namesAbbr: ["ඉරිදා","සඳුදා","අඟහ","බදාදා","බ්‍රහස්","සිකු","සෙන"],
                    namesShort: ["ඉරි","සඳු","අඟ","බදා","බ්‍රහ","සිකු","සෙන"]
                },
                months: {
                    names: ["ජනවාරි","පෙබරවාරි","මාර්තු","අප්‍රේල්","මැයි","ජූනි","ජූලි","අගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්"],
                    namesAbbr: ["ජන","පෙබ","මාර්","අප්‍රේල්","මැයි","ජූනි","ජූලි","අගෝ","සැප්","ඔක්","නොවැ","දෙසැ"]
                },
                AM: ["පෙ.ව.","පෙ.ව.","පෙ.ව."],
                PM: ["ප.ව.","ප.ව.","ප.ව."],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy MMMM d, dddd",
                    F: "yyyy MMMM d, dddd HH.mm.ss",
                    g: "yyyy-MM-dd HH.mm",
                    G: "yyyy-MM-dd HH.mm.ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "-",
                ":": ".",
                firstDay: 1
            }
        }
    };
})(this);
}));
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
    kendo.cultures["as-IN"] = {
        name: "as-IN",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3,2],
            percent: {
                pattern: ["-n%","n%"],
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
                    names: ["ৰবিবাৰ","সোমবাৰ","মঙ্গলবাৰ","বুধবাৰ","বৃহস্পতিবাৰ","শুক্রবাৰ","শনিবাৰ"],
                    namesAbbr: ["ৰবি.","সোম.","মঙ্গল.","বুধ.","বৃহ.","শুক্র.","শনি."],
                    namesShort: ["ৰ","সো","ম","বু","বৃ","শু","শ"]
                },
                months: {
                    names: ["জানুৱাৰী","ফেব্রুৱাৰী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টেম্বৰ","অক্টোবৰ","নবেম্বৰ","ডিচেম্বৰ"],
                    namesAbbr: ["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টে","অক্টো","নবে","ডিচে"]
                },
                AM: ["ৰাতিপু","ৰাতিপু","ৰাতিপু"],
                PM: ["আবেলি","আবেলি","আবেলি"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "yyyy,MMMM dd, dddd",
                    F: "yyyy,MMMM dd, dddd tt h:mm:ss",
                    g: "dd-MM-yyyy tt h:mm",
                    G: "dd-MM-yyyy tt h:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM,yy",
                    Y: "MMMM,yy"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
}));
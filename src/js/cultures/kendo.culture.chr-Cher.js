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
    kendo.cultures["chr-Cher"] = {
        name: "chr-Cher",
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
                name: "",
                abbr: "",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "$"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["ᎤᎾᏙᏓᏆᏍᎬ","ᎤᎾᏙᏓᏉᏅᎯ","ᏔᎵᏁᎢᎦ","ᏦᎢᏁᎢᎦ","ᏅᎩᏁᎢᎦ","ᏧᎾᎩᎶᏍᏗ","ᎤᎾᏙᏓᏈᏕᎾ"],
                    namesAbbr: ["ᏆᏍᎬ","ᏉᏅᎯ","ᏔᎵᏁ","ᏦᎢᏁ","ᏅᎩᏁ","ᏧᎾᎩ","ᏈᏕᎾ"],
                    namesShort: ["ᏆᏍ","ᏉᏅ","ᏔᎵ","ᏦᎢ","ᏅᎩ","ᏧᎾ","ᏈᏕ"]
                },
                months: {
                    names: ["ᎤᏃᎸᏔᏅ","ᎧᎦᎵ","ᎠᏅᏱ","ᏝᏬᏂ","ᎠᏂᏍᎬᏘ","ᏕᎭᎷᏱ","ᎫᏰᏉᏂ","ᎦᎶᏂ","ᏚᎵᏍᏗ","ᏚᏂᏅᏗ","ᏅᏓᏕᏆ","ᎤᏍᎩᏱ"],
                    namesAbbr: ["ᎤᏃᎸ","ᎧᎦᎵ","ᎠᏅᏱ","ᏝᏬᏂ","ᎠᏂᏍ","ᏕᎭᎷ","ᎫᏰᏉ","ᎦᎶᏂ","ᏚᎵᏍ","ᏚᏂᏅ","ᏅᏓᏕ","ᎤᏍᎩ"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd,yyyy",
                    F: "dddd, MMMM dd,yyyy h:mm:ss tt",
                    g: "M/d/yyyy h:mm tt",
                    G: "M/d/yyyy h:mm:ss tt",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
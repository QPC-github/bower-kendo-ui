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
    kendo.cultures["lkt-US"] = {
        name: "lkt-US",
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
                name: "US Dollar",
                abbr: "USD",
                pattern: ["-$ n","$ n"],
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
                    names: ["Aŋpétuwakȟaŋ","Aŋpétuwaŋži","Aŋpétunuŋpa","Aŋpétuyamni","Aŋpétutopa","Aŋpétuzaptaŋ","Owáŋgyužažapi"],
                    namesAbbr: ["Aŋpétuwakȟaŋ","Aŋpétuwaŋži","Aŋpétunuŋpa","Aŋpétuyamni","Aŋpétutopa","Aŋpétuzaptaŋ","Owáŋgyužažapi"],
                    namesShort: ["Aŋpétuwakȟaŋ","Aŋpétuwaŋži","Aŋpétunuŋpa","Aŋpétuyamni","Aŋpétutopa","Aŋpétuzaptaŋ","Owáŋgyužažapi"]
                },
                months: {
                    names: ["Wiótheȟika Wí","Thiyóȟeyuŋka Wí","Ištáwičhayazaŋ Wí","Pȟežítȟo Wí","Čhaŋwápetȟo Wí","Wípazukȟa-wašté Wí","Čhaŋpȟásapa Wí","Wasútȟuŋ Wí","Čhaŋwápeǧi Wí","Čhaŋwápe-kasná Wí","Waníyetu Wí","Tȟahékapšuŋ Wí"],
                    namesAbbr: ["Wiótheȟika Wí","Thiyóȟeyuŋka Wí","Ištáwičhayazaŋ Wí","Pȟežítȟo Wí","Čhaŋwápetȟo Wí","Wípazukȟa-wašté Wí","Čhaŋpȟásapa Wí","Wasútȟuŋ Wí","Čhaŋwápeǧi Wí","Čhaŋwápe-kasná Wí","Waníyetu Wí","Tȟahékapšuŋ Wí"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM d, yyyy",
                    F: "dddd, MMMM d, yyyy h:mm:ss tt",
                    g: "M/d/yyyy h:mm tt",
                    G: "M/d/yyyy h:mm:ss tt",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    };
})(this);
}));
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app_components_ScrollEffect_js",{

/***/ "./app/components/ScrollEffect.js":
/*!****************************************!*\
  !*** ./app/components/ScrollEffect.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction ScrollEffect() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Dynamically import the libraries\n        // Split and animate text\n        handleTextAnimation(gsap, ScrollTrigger);\n        // Handle hero animations\n        handleHeroAnimations(gsap, ScrollTrigger);\n        // Handle service animations\n        handleServiceAnimations(gsap, ScrollTrigger);\n        // Handle portfolio animations\n        handlePortfolioAnimations(gsap, ScrollTrigger);\n        // Handle background color change\n        handleBackgroundColorChange(gsap, ScrollTrigger);\n        handleInfotextAnimation(gsap, ScrollTrigger);\n    });\n    return null;\n}\n_s(ScrollEffect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ScrollEffect;\nfunction handleTextAnimation(gsap1, ScrollTrigger1) {\n    const splitText = new SplitType(\"#split-text\");\n    gsap1.to(\".char\", {\n        y: 0,\n        stagger: 0.02,\n        delay: 0.1,\n        duration: .01,\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n}\nfunction handleHeroAnimations(gsap1, ScrollTrigger1) {\n    const heroTimeline = gsap1.timeline({\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n    heroTimeline.to(\"img\", {\n        clipPath: \"polygon(0 0, 100% 0, 100% 100%, 0 100%)\",\n        scale: 1.1,\n        duration: 0.7\n    });\n}\nfunction handleInfotextAnimation(gsap1, ScrollTrigger1) {\n    const splitTypeText = document.querySelectorAll(\".info-text\");\n    splitTypeText.forEach((char, i)=>{\n        const textAnimation = new SplitType(char, {\n            types: \"chars\"\n        });\n        gsap1.from(textAnimation.chars, {\n            scrollTrigger: {\n                trigger: char,\n                start: \"top 80%\",\n                end: \"top 30%\",\n                scrub: true,\n                once: true\n            },\n            opacity: 0.2,\n            stagger: 0.1\n        });\n    });\n}\nfunction handleServiceAnimations(gsap1, ScrollTrigger1) {\n    const serviceContainerTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceContainerTimeline.to(\".service-border\", {\n        width: \"100%\",\n        duration: 2,\n        ease: \"power4.out\"\n    });\n    const serviceItemTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceItemTimeline.to(\".service-item-border\", {\n        width: \"100%\",\n        duration: 1.5,\n        ease: \"power4.out\"\n    });\n    ScrollTrigger1.create({\n        trigger: \".service-container\",\n        start: \"top 80%\",\n        onEnter: ()=>{\n            serviceContainerTimeline.play();\n        }\n    });\n    serviceContainerTimeline.call(()=>{\n        serviceItemTimeline.play();\n    });\n}\nfunction handlePortfolioAnimations(gsap1, ScrollTrigger1) {\n    if (window.innerWidth < 768) {\n        return;\n    }\n    const portfolioAnimations = [\n        {\n            selector: \"#portfolio-1, #portfolio-4\",\n            y: 0\n        },\n        {\n            selector: \"#portfolio-2, #portfolio-5\",\n            y: -150\n        },\n        {\n            selector: \"#portfolio-3, #portfolio-6\",\n            y: -250\n        }\n    ];\n    portfolioAnimations.forEach((animation)=>{\n        gsap1.from(animation.selector, {\n            y: animation.y,\n            yPercent: 0,\n            scrollTrigger: {\n                trigger: \".work-container\",\n                start: \"top top\",\n                end: \"top center\",\n                scrub: 1\n            }\n        });\n    });\n}\nfunction handleBackgroundColorChange(gsap1, ScrollTrigger1) {\n    const animationSettings = {\n        \"portfolio-1\": {\n            start: -50,\n            end: 0\n        },\n        \"portfolio-4\": {\n            start: -50,\n            end: 0\n        },\n        \"portfolio-2\": {\n            start: -150,\n            end: 0\n        },\n        \"portfolio-5\": {\n            start: -150,\n            end: 0\n        },\n        \"portfolio-3\": {\n            start: -250,\n            end: 0\n        },\n        \"portfolio-6\": {\n            start: -250,\n            end: 0\n        }\n    };\n    // Iterate over each portfolio ID and create the animation\n    for(let id in animationSettings){\n        let element = document.getElementById(id);\n        if (element) {\n            gsap1.from(element, {\n                y: animationSettings[id].start,\n                scrollTrigger: {\n                    trigger: element,\n                    start: \"top bottom\",\n                    end: \"top top\",\n                    scrub: true\n                },\n                y: animationSettings[id].end\n            });\n        }\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollEffect);\nvar _c;\n$RefreshReg$(_c, \"ScrollEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9TY3JvbGxFZmZlY3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QztBQUV6QyxTQUFTRTs7SUFDTEQsZ0RBQVNBLENBQUM7UUFDTixtQ0FBbUM7UUFHL0IseUJBQXlCO1FBQ3hCRSxvQkFBb0JDLE1BQU1DO1FBRTNCLHlCQUF5QjtRQUN4QkMscUJBQXFCRixNQUFNQztRQUU1Qiw0QkFBNEI7UUFDNUJFLHdCQUF3QkgsTUFBTUM7UUFFOUIsOEJBQThCO1FBQzlCRywwQkFBMEJKLE1BQU1DO1FBRWhDLGlDQUFpQztRQUNqQ0ksNEJBQTRCTCxNQUFNQztRQUVsQ0ssd0JBQXdCTixNQUFNQztJQUNsQztJQUVKLE9BQU87QUFDWDtHQXhCU0g7S0FBQUE7QUEwQlIsU0FBU0Msb0JBQW9CQyxLQUFJLEVBQUVDLGNBQWE7SUFDNUMsTUFBTU0sWUFBWSxJQUFJQyxVQUFVO0lBQ2hDUixNQUFLUyxFQUFFLENBQUMsU0FBUztRQUNiQyxHQUFHO1FBQ0hDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGVBQWU7WUFDWEMsU0FBUztZQUNUQyxPQUFPO1lBQ1BDLGVBQWU7UUFDbkI7SUFDSjtBQUNKO0FBRUEsU0FBU2YscUJBQXFCRixLQUFJLEVBQUVDLGNBQWE7SUFDN0MsTUFBTWlCLGVBQWVsQixNQUFLbUIsUUFBUSxDQUFDO1FBQy9CTCxlQUFlO1lBQ1hDLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxlQUFlO1FBQ25CO0lBQ0o7SUFFQUMsYUFBYVQsRUFBRSxDQUFDLE9BQU87UUFDbkJXLFVBQVU7UUFDVkMsT0FBTztRQUNQUixVQUFVO0lBQ2Q7QUFDSjtBQUlELFNBQVNQLHdCQUF3Qk4sS0FBSSxFQUFFQyxjQUFhO0lBQ2xELE1BQU1xQixnQkFBZ0JDLFNBQVNDLGdCQUFnQixDQUFDO0lBRTVDRixjQUFjRyxPQUFPLENBQUMsQ0FBQ0MsTUFBTUM7UUFDM0IsTUFBTUMsZ0JBQWdCLElBQUlwQixVQUFVa0IsTUFBTTtZQUFDRyxPQUFPO1FBQU87UUFFekQ3QixNQUFLOEIsSUFBSSxDQUFDRixjQUFjRyxLQUFLLEVBQUU7WUFDN0JqQixlQUFlO2dCQUNiQyxTQUFTVztnQkFDVFYsT0FBTztnQkFDUGdCLEtBQUs7Z0JBQ0xDLE9BQU87Z0JBQ1BDLE1BQU07WUFDUjtZQUNBQyxTQUFTO1lBQ1R4QixTQUFTO1FBQ1g7SUFDRjtBQUNOO0FBRUEsU0FBU1Isd0JBQXdCSCxLQUFJLEVBQUVDLGNBQWE7SUFDaEQsTUFBTW1DLDJCQUEyQnBDLE1BQUttQixRQUFRLENBQUM7UUFBRWtCLFFBQVE7SUFBSztJQUM5REQseUJBQXlCM0IsRUFBRSxDQUFDLG1CQUFtQjtRQUMzQzZCLE9BQU87UUFDUHpCLFVBQVU7UUFDVjBCLE1BQU07SUFDVjtJQUVBLE1BQU1DLHNCQUFzQnhDLE1BQUttQixRQUFRLENBQUM7UUFBRWtCLFFBQVE7SUFBSztJQUN6REcsb0JBQW9CL0IsRUFBRSxDQUFDLHdCQUF3QjtRQUMzQzZCLE9BQU87UUFDUHpCLFVBQVU7UUFDVjBCLE1BQU07SUFDVjtJQUVBdEMsZUFBY3dDLE1BQU0sQ0FBQztRQUNqQjFCLFNBQVM7UUFDVEMsT0FBTztRQUNQMEIsU0FBUztZQUNMTix5QkFBeUJPLElBQUk7UUFDakM7SUFDSjtJQUVBUCx5QkFBeUJRLElBQUksQ0FBQztRQUMxQkosb0JBQW9CRyxJQUFJO0lBQzVCO0FBQ0o7QUFFQSxTQUFTdkMsMEJBQTBCSixLQUFJLEVBQUVDLGNBQWE7SUFFcEQsSUFBSTRDLE9BQU9DLFVBQVUsR0FBRyxLQUFJO1FBQzFCO0lBQ0Y7SUFDRSxNQUFNQyxzQkFBc0I7UUFDeEI7WUFBRUMsVUFBVTtZQUE4QnRDLEdBQUc7UUFBRTtRQUMvQztZQUFFc0MsVUFBVTtZQUE4QnRDLEdBQUcsQ0FBQztRQUFJO1FBQ2xEO1lBQUVzQyxVQUFVO1lBQThCdEMsR0FBRyxDQUFDO1FBQUk7S0FDckQ7SUFFRHFDLG9CQUFvQnRCLE9BQU8sQ0FBQ3dCLENBQUFBO1FBQ3hCakQsTUFBSzhCLElBQUksQ0FBQ21CLFVBQVVELFFBQVEsRUFBRTtZQUMxQnRDLEdBQUd1QyxVQUFVdkMsQ0FBQztZQUNkd0MsVUFBVTtZQUNWcEMsZUFBZTtnQkFDWEMsU0FBUztnQkFDVEMsT0FBTztnQkFDUGdCLEtBQUs7Z0JBQ0xDLE9BQU87WUFDWDtRQUNKO0lBQ0o7QUFDSjtBQUVBLFNBQVM1Qiw0QkFBNEJMLEtBQUksRUFBRUMsY0FBYTtJQUV0RCxNQUFNa0Qsb0JBQW9CO1FBQ3hCLGVBQWU7WUFBRW5DLE9BQU8sQ0FBQztZQUFJZ0IsS0FBSztRQUFFO1FBQ3BDLGVBQWU7WUFBRWhCLE9BQU8sQ0FBQztZQUFJZ0IsS0FBSztRQUFFO1FBQ3BDLGVBQWU7WUFBRWhCLE9BQU8sQ0FBQztZQUFLZ0IsS0FBSztRQUFFO1FBQ3JDLGVBQWU7WUFBRWhCLE9BQU8sQ0FBQztZQUFLZ0IsS0FBSztRQUFFO1FBQ3JDLGVBQWU7WUFBRWhCLE9BQU8sQ0FBQztZQUFLZ0IsS0FBSztRQUFFO1FBQ3JDLGVBQWU7WUFBRWhCLE9BQU8sQ0FBQztZQUFLZ0IsS0FBSztRQUFFO0lBQ3pDO0lBRUEsMERBQTBEO0lBQzFELElBQUssSUFBSW9CLE1BQU1ELGtCQUFtQjtRQUM5QixJQUFJRSxVQUFVOUIsU0FBUytCLGNBQWMsQ0FBQ0Y7UUFDdEMsSUFBSUMsU0FBUztZQUNUckQsTUFBSzhCLElBQUksQ0FBQ3VCLFNBQVM7Z0JBQ2YzQyxHQUFHeUMsaUJBQWlCLENBQUNDLEdBQUcsQ0FBQ3BDLEtBQUs7Z0JBQzlCRixlQUFlO29CQUNYQyxTQUFTc0M7b0JBQ1RyQyxPQUFPO29CQUNQZ0IsS0FBSztvQkFDTEMsT0FBTztnQkFDWDtnQkFDQXZCLEdBQUd5QyxpQkFBaUIsQ0FBQ0MsR0FBRyxDQUFDcEIsR0FBRztZQUNoQztRQUNKO0lBQ0o7QUFDQTtBQUdBLCtEQUFlbEMsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TY3JvbGxFZmZlY3QuanM/ODEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBTY3JvbGxFZmZlY3QoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gRHluYW1pY2FsbHkgaW1wb3J0IHRoZSBsaWJyYXJpZXNcbiAgICAgIFxuXG4gICAgICAgICAgICAvLyBTcGxpdCBhbmQgYW5pbWF0ZSB0ZXh0XG4gICAgICAgICAgICAgaGFuZGxlVGV4dEFuaW1hdGlvbihnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGhlcm8gYW5pbWF0aW9uc1xuICAgICAgICAgICAgIGhhbmRsZUhlcm9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgc2VydmljZSBhbmltYXRpb25zXG4gICAgICAgICAgICBoYW5kbGVTZXJ2aWNlQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHBvcnRmb2xpbyBhbmltYXRpb25zXG4gICAgICAgICAgICBoYW5kbGVQb3J0Zm9saW9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2VcbiAgICAgICAgICAgIGhhbmRsZUJhY2tncm91bmRDb2xvckNoYW5nZShnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgaGFuZGxlSW5mb3RleHRBbmltYXRpb24oZ3NhcCwgU2Nyb2xsVHJpZ2dlcik7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbiBmdW5jdGlvbiBoYW5kbGVUZXh0QW5pbWF0aW9uKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcbiAgICAgY29uc3Qgc3BsaXRUZXh0ID0gbmV3IFNwbGl0VHlwZSgnI3NwbGl0LXRleHQnKTtcbiAgICAgZ3NhcC50bygnLmNoYXInLCB7XG4gICAgICAgICB5OiAwLFxuICAgICAgICAgc3RhZ2dlcjogMC4wMixcbiAgICAgICAgIGRlbGF5OiAwLjEsXG4gICAgICAgICBkdXJhdGlvbjogLjAxLFxuICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgIHRyaWdnZXI6ICcuc2VydmljZS1vdmVydmlldycsXG4gICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgICAgICAgfVxuICAgICB9KTtcbiB9XG5cbiBmdW5jdGlvbiBoYW5kbGVIZXJvQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKSB7XG4gICAgIGNvbnN0IGhlcm9UaW1lbGluZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgIHRyaWdnZXI6ICcuc2VydmljZS1vdmVydmlldycsXG4gICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgICAgICAgfVxuICAgICB9KTtcblxuICAgICBoZXJvVGltZWxpbmUudG8oXCJpbWdcIiwge1xuICAgICAgICAgY2xpcFBhdGg6ICdwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSknLFxuICAgICAgICAgc2NhbGU6IDEuMSxcbiAgICAgICAgIGR1cmF0aW9uOiAwLjdcbiAgICAgfSk7XG4gfVxuXG5cblxuZnVuY3Rpb24gaGFuZGxlSW5mb3RleHRBbmltYXRpb24oZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuICBjb25zdCBzcGxpdFR5cGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm8tdGV4dCcpXG5cbiAgICAgIHNwbGl0VHlwZVRleHQuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0QW5pbWF0aW9uID0gbmV3IFNwbGl0VHlwZShjaGFyLCB7dHlwZXM6ICdjaGFycyd9KVxuXG4gICAgICAgIGdzYXAuZnJvbSh0ZXh0QW5pbWF0aW9uLmNoYXJzLCB7XG4gICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogY2hhcixcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wIDgwJScsXG4gICAgICAgICAgICBlbmQ6ICd0b3AgMzAlJyxcbiAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgICAgIHN0YWdnZXI6IDAuMVxuICAgICAgICB9KVxuICAgICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VydmljZUFuaW1hdGlvbnMoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuICAgIGNvbnN0IHNlcnZpY2VDb250YWluZXJUaW1lbGluZSA9IGdzYXAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSk7XG4gICAgc2VydmljZUNvbnRhaW5lclRpbWVsaW5lLnRvKFwiLnNlcnZpY2UtYm9yZGVyXCIsIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZWFzZTogXCJwb3dlcjQub3V0XCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlSXRlbVRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KTtcbiAgICBzZXJ2aWNlSXRlbVRpbWVsaW5lLnRvKFwiLnNlcnZpY2UtaXRlbS1ib3JkZXJcIiwge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIH0pO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICB0cmlnZ2VyOiBcIi5zZXJ2aWNlLWNvbnRhaW5lclwiLFxuICAgICAgICBzdGFydDogXCJ0b3AgODAlXCIsXG4gICAgICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2VDb250YWluZXJUaW1lbGluZS5wbGF5KCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBzZXJ2aWNlQ29udGFpbmVyVGltZWxpbmUuY2FsbCgoKSA9PiB7XG4gICAgICAgIHNlcnZpY2VJdGVtVGltZWxpbmUucGxheSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQb3J0Zm9saW9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3Njgpe1xuICAgIHJldHVybjtcbiAgfVxuICAgIGNvbnN0IHBvcnRmb2xpb0FuaW1hdGlvbnMgPSBbXG4gICAgICAgIHsgc2VsZWN0b3I6IFwiI3BvcnRmb2xpby0xLCAjcG9ydGZvbGlvLTRcIiwgeTogMCB9LFxuICAgICAgICB7IHNlbGVjdG9yOiBcIiNwb3J0Zm9saW8tMiwgI3BvcnRmb2xpby01XCIsIHk6IC0xNTAgfSxcbiAgICAgICAgeyBzZWxlY3RvcjogXCIjcG9ydGZvbGlvLTMsICNwb3J0Zm9saW8tNlwiLCB5OiAtMjUwIH1cbiAgICBdO1xuXG4gICAgcG9ydGZvbGlvQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGdzYXAuZnJvbShhbmltYXRpb24uc2VsZWN0b3IsIHtcbiAgICAgICAgICAgIHk6IGFuaW1hdGlvbi55LFxuICAgICAgICAgICAgeVBlcmNlbnQ6IDAsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJy53b3JrLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICAgICBzY3J1YjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcblxuICBjb25zdCBhbmltYXRpb25TZXR0aW5ncyA9IHtcbiAgICAncG9ydGZvbGlvLTEnOiB7IHN0YXJ0OiAtNTAsIGVuZDogMCB9LFxuICAgICdwb3J0Zm9saW8tNCc6IHsgc3RhcnQ6IC01MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby0yJzogeyBzdGFydDogLTE1MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby01JzogeyBzdGFydDogLTE1MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby0zJzogeyBzdGFydDogLTI1MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby02JzogeyBzdGFydDogLTI1MCwgZW5kOiAwIH1cbn07XG5cbi8vIEl0ZXJhdGUgb3ZlciBlYWNoIHBvcnRmb2xpbyBJRCBhbmQgY3JlYXRlIHRoZSBhbmltYXRpb25cbmZvciAobGV0IGlkIGluIGFuaW1hdGlvblNldHRpbmdzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZ3NhcC5mcm9tKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHk6IGFuaW1hdGlvblNldHRpbmdzW2lkXS5zdGFydCxcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogYW5pbWF0aW9uU2V0dGluZ3NbaWRdLmVuZFxuICAgICAgICB9KTtcbiAgICB9XG59XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiU2Nyb2xsRWZmZWN0IiwiaGFuZGxlVGV4dEFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiaGFuZGxlSGVyb0FuaW1hdGlvbnMiLCJoYW5kbGVTZXJ2aWNlQW5pbWF0aW9ucyIsImhhbmRsZVBvcnRmb2xpb0FuaW1hdGlvbnMiLCJoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UiLCJoYW5kbGVJbmZvdGV4dEFuaW1hdGlvbiIsInNwbGl0VGV4dCIsIlNwbGl0VHlwZSIsInRvIiwieSIsInN0YWdnZXIiLCJkZWxheSIsImR1cmF0aW9uIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsInRvZ2dsZUFjdGlvbnMiLCJoZXJvVGltZWxpbmUiLCJ0aW1lbGluZSIsImNsaXBQYXRoIiwic2NhbGUiLCJzcGxpdFR5cGVUZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNoYXIiLCJpIiwidGV4dEFuaW1hdGlvbiIsInR5cGVzIiwiZnJvbSIsImNoYXJzIiwiZW5kIiwic2NydWIiLCJvbmNlIiwib3BhY2l0eSIsInNlcnZpY2VDb250YWluZXJUaW1lbGluZSIsInBhdXNlZCIsIndpZHRoIiwiZWFzZSIsInNlcnZpY2VJdGVtVGltZWxpbmUiLCJjcmVhdGUiLCJvbkVudGVyIiwicGxheSIsImNhbGwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicG9ydGZvbGlvQW5pbWF0aW9ucyIsInNlbGVjdG9yIiwiYW5pbWF0aW9uIiwieVBlcmNlbnQiLCJhbmltYXRpb25TZXR0aW5ncyIsImlkIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/ScrollEffect.js\n"));

/***/ })

});
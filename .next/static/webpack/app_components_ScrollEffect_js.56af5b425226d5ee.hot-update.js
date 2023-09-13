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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction ScrollEffect() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Dynamically import the libraries\n        // Split and animate text\n        handleTextAnimation(gsap, ScrollTrigger);\n        // Handle hero animations\n        handleHeroAnimations(gsap, ScrollTrigger);\n        // Handle service animations\n        handleServiceAnimations(gsap, ScrollTrigger);\n        // Handle portfolio animations\n        handlePortfolioAnimations(gsap, ScrollTrigger);\n        // Handle background color change\n        // handleBackgroundColorChange(gsap, ScrollTrigger);\n        handleInfotextAnimation(gsap, ScrollTrigger);\n    });\n    return null;\n}\n_s(ScrollEffect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ScrollEffect;\nfunction handleTextAnimation(gsap1, ScrollTrigger1) {\n    const splitText = new SplitType(\"#split-text\");\n    gsap1.to(\".char\", {\n        y: 0,\n        stagger: 0.02,\n        delay: 0.1,\n        duration: .01,\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n}\nfunction handleHeroAnimations(gsap1, ScrollTrigger1) {\n    const heroTimeline = gsap1.timeline({\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n    heroTimeline.to(\"img\", {\n        clipPath: \"polygon(0 0, 100% 0, 100% 100%, 0 100%)\",\n        scale: 1.1,\n        duration: 0.7\n    });\n}\nfunction handleInfotextAnimation(gsap1, ScrollTrigger1) {\n    const splitTypeText = document.querySelectorAll(\".info-text\");\n    splitTypeText.forEach((char, i)=>{\n        const textAnimation = new SplitType(char, {\n            types: \"chars\"\n        });\n        gsap1.from(textAnimation.chars, {\n            scrollTrigger: {\n                trigger: char,\n                start: \"top 80%\",\n                end: \"top 30%\",\n                scrub: true,\n                once: true\n            },\n            opacity: 0.2,\n            stagger: 0.1\n        });\n    });\n}\nfunction handleServiceAnimations(gsap1, ScrollTrigger1) {\n    const serviceContainerTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceContainerTimeline.to(\".service-border\", {\n        width: \"100%\",\n        duration: 2,\n        ease: \"power4.out\"\n    });\n    const serviceItemTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceItemTimeline.to(\".service-item-border\", {\n        width: \"100%\",\n        duration: 1.5,\n        ease: \"power4.out\"\n    });\n    ScrollTrigger1.create({\n        trigger: \".service-container\",\n        start: \"top 80%\",\n        onEnter: ()=>{\n            serviceContainerTimeline.play();\n        }\n    });\n    serviceContainerTimeline.call(()=>{\n        serviceItemTimeline.play();\n    });\n}\nfunction handlePortfolioAnimations(gsap1, ScrollTrigger1) {\n    const portfolioAnimations = [\n        {\n            selector: \"#portfolio-1, #portfolio-4\",\n            y: -50\n        },\n        {\n            selector: \"#portfolio-2, #portfolio-5\",\n            y: -150\n        },\n        {\n            selector: \"#portfolio-3, #portfolio-6\",\n            y: -250\n        }\n    ];\n    portfolioAnimations.forEach((animation)=>{\n        gsap1.from(animation.selector, {\n            y: animation.y,\n            yPercent: 0,\n            scrollTrigger: {\n                trigger: \".work-container\",\n                start: \"top center\",\n                end: \"bottom center\",\n                scrub: 1.5\n            }\n        });\n    });\n}\n// function handleBackgroundColorChange(gsap, ScrollTrigger) {\n//   // ScrollTrigger for background color change\n//   const textContainer = document.querySelector(\".text-container\");\n//   const portfolioContainer = document.querySelector(\".portfolio-container\");\n//   const serviceOverview = document.querySelector(\".service-overview\");\n//   ScrollTrigger.create({\n//       trigger: textContainer,\n//       start: \"bottom 0%\",\n//       onEnter: () => {\n//           gsap.to(\".text-container\", { backgroundColor: \"#000\", color: \"#fff\", duration: .5 });\n//       },\n//       onEnterBack: () => {\n//           gsap.to(\".text-container\", { backgroundColor: \"#000\", color: \"#fff\", duration: .5 });\n//           gsap.to(\".portfolio-section\", { backgroundColor: \"#000\", color: \"#fff\", duration: .5 });\n//       }\n//   });\n//   ScrollTrigger.create({\n//       trigger: portfolioContainer,\n//       start: \"top 90%\",\n//       // end: \"top 20%\",\n//       onEnter: () => {\n//           gsap.to(\".portfolio-section\", { backgroundColor: \"#fff\", color: \"#000\", duration: .5 });\n//           gsap.to(\".text-container\", { backgroundColor: \"#fff\", color: \"#000\", duration: .5 });\n//       }\n//   });\n//   ScrollTrigger.create({\n//     trigger: serviceOverview,\n//     start: \"top bottom\", // This means the top of serviceOverview hits the bottom of the viewport\n//     onEnter: () => {\n//         gsap.to(\".service-overview\", { backgroundColor: \"#000\", color: \"#fff\", duration: .5 });\n//         gsap.to(\".portfolio-section\", { backgroundColor: \"#000\", color: \"#fff\", duration: .5 });\n//     }\n// });\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollEffect);\nvar _c;\n$RefreshReg$(_c, \"ScrollEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxlQUFlO2dCQUNYQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQZ0IsS0FBSztnQkFDTEMsT0FBTztZQUNYO1FBQ0o7SUFDSjtBQUNKO0FBRUEsOERBQThEO0FBRTlELGlEQUFpRDtBQUNqRCxxRUFBcUU7QUFDckUsK0VBQStFO0FBQy9FLHlFQUF5RTtBQUV6RSwyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsa0dBQWtHO0FBQ2xHLFdBQVc7QUFDWCw2QkFBNkI7QUFDN0Isa0dBQWtHO0FBQ2xHLHFHQUFxRztBQUNyRyxVQUFVO0FBQ1YsUUFBUTtBQUVSLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIscUdBQXFHO0FBQ3JHLGtHQUFrRztBQUNsRyxVQUFVO0FBQ1YsUUFBUTtBQUVSLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFDaEMsb0dBQW9HO0FBQ3BHLHVCQUF1QjtBQUN2QixrR0FBa0c7QUFDbEcsbUdBQW1HO0FBQ25HLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUdKLCtEQUFlbEMsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TY3JvbGxFZmZlY3QuanM/ODEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBTY3JvbGxFZmZlY3QoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gRHluYW1pY2FsbHkgaW1wb3J0IHRoZSBsaWJyYXJpZXNcbiAgICAgIFxuXG4gICAgICAgICAgICAvLyBTcGxpdCBhbmQgYW5pbWF0ZSB0ZXh0XG4gICAgICAgICAgICAgaGFuZGxlVGV4dEFuaW1hdGlvbihnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGhlcm8gYW5pbWF0aW9uc1xuICAgICAgICAgICAgIGhhbmRsZUhlcm9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgc2VydmljZSBhbmltYXRpb25zXG4gICAgICAgICAgICBoYW5kbGVTZXJ2aWNlQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHBvcnRmb2xpbyBhbmltYXRpb25zXG4gICAgICAgICAgICBoYW5kbGVQb3J0Zm9saW9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGhhbmRsZUJhY2tncm91bmRDb2xvckNoYW5nZShnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgaGFuZGxlSW5mb3RleHRBbmltYXRpb24oZ3NhcCwgU2Nyb2xsVHJpZ2dlcik7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbiBmdW5jdGlvbiBoYW5kbGVUZXh0QW5pbWF0aW9uKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcbiAgICAgY29uc3Qgc3BsaXRUZXh0ID0gbmV3IFNwbGl0VHlwZSgnI3NwbGl0LXRleHQnKTtcbiAgICAgZ3NhcC50bygnLmNoYXInLCB7XG4gICAgICAgICB5OiAwLFxuICAgICAgICAgc3RhZ2dlcjogMC4wMixcbiAgICAgICAgIGRlbGF5OiAwLjEsXG4gICAgICAgICBkdXJhdGlvbjogLjAxLFxuICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgIHRyaWdnZXI6ICcuc2VydmljZS1vdmVydmlldycsXG4gICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgICAgICAgfVxuICAgICB9KTtcbiB9XG5cbiBmdW5jdGlvbiBoYW5kbGVIZXJvQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKSB7XG4gICAgIGNvbnN0IGhlcm9UaW1lbGluZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgIHRyaWdnZXI6ICcuc2VydmljZS1vdmVydmlldycsXG4gICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgICAgICAgfVxuICAgICB9KTtcblxuICAgICBoZXJvVGltZWxpbmUudG8oXCJpbWdcIiwge1xuICAgICAgICAgY2xpcFBhdGg6ICdwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSknLFxuICAgICAgICAgc2NhbGU6IDEuMSxcbiAgICAgICAgIGR1cmF0aW9uOiAwLjdcbiAgICAgfSk7XG4gfVxuXG5cblxuZnVuY3Rpb24gaGFuZGxlSW5mb3RleHRBbmltYXRpb24oZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuICBjb25zdCBzcGxpdFR5cGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm8tdGV4dCcpXG5cbiAgICAgIHNwbGl0VHlwZVRleHQuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0QW5pbWF0aW9uID0gbmV3IFNwbGl0VHlwZShjaGFyLCB7dHlwZXM6ICdjaGFycyd9KVxuXG4gICAgICAgIGdzYXAuZnJvbSh0ZXh0QW5pbWF0aW9uLmNoYXJzLCB7XG4gICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogY2hhcixcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wIDgwJScsXG4gICAgICAgICAgICBlbmQ6ICd0b3AgMzAlJyxcbiAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgICAgIHN0YWdnZXI6IDAuMVxuICAgICAgICB9KVxuICAgICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VydmljZUFuaW1hdGlvbnMoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuICAgIGNvbnN0IHNlcnZpY2VDb250YWluZXJUaW1lbGluZSA9IGdzYXAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSk7XG4gICAgc2VydmljZUNvbnRhaW5lclRpbWVsaW5lLnRvKFwiLnNlcnZpY2UtYm9yZGVyXCIsIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZWFzZTogXCJwb3dlcjQub3V0XCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlSXRlbVRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KTtcbiAgICBzZXJ2aWNlSXRlbVRpbWVsaW5lLnRvKFwiLnNlcnZpY2UtaXRlbS1ib3JkZXJcIiwge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIH0pO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICB0cmlnZ2VyOiBcIi5zZXJ2aWNlLWNvbnRhaW5lclwiLFxuICAgICAgICBzdGFydDogXCJ0b3AgODAlXCIsXG4gICAgICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2VDb250YWluZXJUaW1lbGluZS5wbGF5KCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBzZXJ2aWNlQ29udGFpbmVyVGltZWxpbmUuY2FsbCgoKSA9PiB7XG4gICAgICAgIHNlcnZpY2VJdGVtVGltZWxpbmUucGxheSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQb3J0Zm9saW9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcbiAgICBjb25zdCBwb3J0Zm9saW9BbmltYXRpb25zID0gW1xuICAgICAgICB7IHNlbGVjdG9yOiBcIiNwb3J0Zm9saW8tMSwgI3BvcnRmb2xpby00XCIsIHk6IC01MCB9LFxuICAgICAgICB7IHNlbGVjdG9yOiBcIiNwb3J0Zm9saW8tMiwgI3BvcnRmb2xpby01XCIsIHk6IC0xNTAgfSxcbiAgICAgICAgeyBzZWxlY3RvcjogXCIjcG9ydGZvbGlvLTMsICNwb3J0Zm9saW8tNlwiLCB5OiAtMjUwIH1cbiAgICBdO1xuXG4gICAgcG9ydGZvbGlvQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGdzYXAuZnJvbShhbmltYXRpb24uc2VsZWN0b3IsIHtcbiAgICAgICAgICAgIHk6IGFuaW1hdGlvbi55LFxuICAgICAgICAgICAgeVBlcmNlbnQ6IDAsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJy53b3JrLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdib3R0b20gY2VudGVyJyxcbiAgICAgICAgICAgICAgICBzY3J1YjogMS41XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuXG4vLyAgIC8vIFNjcm9sbFRyaWdnZXIgZm9yIGJhY2tncm91bmQgY29sb3IgY2hhbmdlXG4vLyAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtY29udGFpbmVyXCIpO1xuLy8gICBjb25zdCBwb3J0Zm9saW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby1jb250YWluZXJcIik7XG4vLyAgIGNvbnN0IHNlcnZpY2VPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZS1vdmVydmlld1wiKTtcblxuLy8gICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4vLyAgICAgICB0cmlnZ2VyOiB0ZXh0Q29udGFpbmVyLFxuLy8gICAgICAgc3RhcnQ6IFwiYm90dG9tIDAlXCIsXG4vLyAgICAgICBvbkVudGVyOiAoKSA9PiB7XG4vLyAgICAgICAgICAgZ3NhcC50byhcIi50ZXh0LWNvbnRhaW5lclwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsIGNvbG9yOiBcIiNmZmZcIiwgZHVyYXRpb246IC41IH0pO1xuLy8gICAgICAgfSxcbi8vICAgICAgIG9uRW50ZXJCYWNrOiAoKSA9PiB7XG4vLyAgICAgICAgICAgZ3NhcC50byhcIi50ZXh0LWNvbnRhaW5lclwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsIGNvbG9yOiBcIiNmZmZcIiwgZHVyYXRpb246IC41IH0pO1xuLy8gICAgICAgICAgIGdzYXAudG8oXCIucG9ydGZvbGlvLXNlY3Rpb25cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLCBjb2xvcjogXCIjZmZmXCIsIGR1cmF0aW9uOiAuNSB9KTtcbi8vICAgICAgIH1cbi8vICAgfSk7XG5cbi8vICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuLy8gICAgICAgdHJpZ2dlcjogcG9ydGZvbGlvQ29udGFpbmVyLFxuLy8gICAgICAgc3RhcnQ6IFwidG9wIDkwJVwiLFxuLy8gICAgICAgLy8gZW5kOiBcInRvcCAyMCVcIixcbi8vICAgICAgIG9uRW50ZXI6ICgpID0+IHtcbi8vICAgICAgICAgICBnc2FwLnRvKFwiLnBvcnRmb2xpby1zZWN0aW9uXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIiwgY29sb3I6IFwiIzAwMFwiLCBkdXJhdGlvbjogLjUgfSk7XG4vLyAgICAgICAgICAgZ3NhcC50byhcIi50ZXh0LWNvbnRhaW5lclwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsIGNvbG9yOiBcIiMwMDBcIiwgZHVyYXRpb246IC41IH0pO1xuLy8gICAgICAgfVxuLy8gICB9KTtcblxuLy8gICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4vLyAgICAgdHJpZ2dlcjogc2VydmljZU92ZXJ2aWV3LFxuLy8gICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIiwgLy8gVGhpcyBtZWFucyB0aGUgdG9wIG9mIHNlcnZpY2VPdmVydmlldyBoaXRzIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0XG4vLyAgICAgb25FbnRlcjogKCkgPT4ge1xuLy8gICAgICAgICBnc2FwLnRvKFwiLnNlcnZpY2Utb3ZlcnZpZXdcIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLCBjb2xvcjogXCIjZmZmXCIsIGR1cmF0aW9uOiAuNSB9KTtcbi8vICAgICAgICAgZ3NhcC50byhcIi5wb3J0Zm9saW8tc2VjdGlvblwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsIGNvbG9yOiBcIiNmZmZcIiwgZHVyYXRpb246IC41IH0pO1xuLy8gICAgIH1cbi8vIH0pO1xuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEVmZmVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlNjcm9sbEVmZmVjdCIsImhhbmRsZVRleHRBbmltYXRpb24iLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsImhhbmRsZUhlcm9BbmltYXRpb25zIiwiaGFuZGxlU2VydmljZUFuaW1hdGlvbnMiLCJoYW5kbGVQb3J0Zm9saW9BbmltYXRpb25zIiwiaGFuZGxlSW5mb3RleHRBbmltYXRpb24iLCJzcGxpdFRleHQiLCJTcGxpdFR5cGUiLCJ0byIsInkiLCJzdGFnZ2VyIiwiZGVsYXkiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJ0b2dnbGVBY3Rpb25zIiwiaGVyb1RpbWVsaW5lIiwidGltZWxpbmUiLCJjbGlwUGF0aCIsInNjYWxlIiwic3BsaXRUeXBlVGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjaGFyIiwiaSIsInRleHRBbmltYXRpb24iLCJ0eXBlcyIsImZyb20iLCJjaGFycyIsImVuZCIsInNjcnViIiwib25jZSIsIm9wYWNpdHkiLCJzZXJ2aWNlQ29udGFpbmVyVGltZWxpbmUiLCJwYXVzZWQiLCJ3aWR0aCIsImVhc2UiLCJzZXJ2aWNlSXRlbVRpbWVsaW5lIiwiY3JlYXRlIiwib25FbnRlciIsInBsYXkiLCJjYWxsIiwicG9ydGZvbGlvQW5pbWF0aW9ucyIsInNlbGVjdG9yIiwiYW5pbWF0aW9uIiwieVBlcmNlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/ScrollEffect.js\n"));

/***/ })

});
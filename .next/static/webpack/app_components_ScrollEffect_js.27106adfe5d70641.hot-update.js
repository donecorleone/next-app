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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction ScrollEffect() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Dynamically import the libraries\n        // Split and animate text\n        handleTextAnimation(gsap, ScrollTrigger);\n        // Handle hero animations\n        handleHeroAnimations(gsap, ScrollTrigger);\n        // Handle service animations\n        handleServiceAnimations(gsap, ScrollTrigger);\n        // Handle portfolio animations\n        handlePortfolioAnimations(gsap, ScrollTrigger);\n        // Handle background color change\n        handleBackgroundColorChange(gsap, ScrollTrigger);\n        handleInfotextAnimation(gsap, ScrollTrigger);\n    });\n    return null;\n}\n_s(ScrollEffect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ScrollEffect;\nfunction handleTextAnimation(gsap1, ScrollTrigger1) {\n    const splitText = new SplitType(\"#split-text\");\n    gsap1.to(\".char\", {\n        y: 0,\n        stagger: 0.02,\n        delay: 0.1,\n        duration: .01,\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n}\nfunction handleHeroAnimations(gsap1, ScrollTrigger1) {\n    const heroTimeline = gsap1.timeline({\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n    heroTimeline.to(\"img\", {\n        clipPath: \"polygon(0 0, 100% 0, 100% 100%, 0 100%)\",\n        scale: 1.1,\n        duration: 0.7\n    });\n}\nfunction handleInfotextAnimation(gsap1, ScrollTrigger1) {\n    const splitTypeText = document.querySelectorAll(\".info-text\");\n    splitTypeText.forEach((char, i)=>{\n        const textAnimation = new SplitType(char, {\n            types: \"chars\"\n        });\n        gsap1.from(textAnimation.chars, {\n            scrollTrigger: {\n                trigger: char,\n                start: \"top 80%\",\n                end: \"top 30%\",\n                scrub: true,\n                once: true\n            },\n            opacity: 0.2,\n            stagger: 0.1\n        });\n    });\n}\nfunction handleServiceAnimations(gsap1, ScrollTrigger1) {\n    const serviceContainerTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceContainerTimeline.to(\".service-border\", {\n        width: \"100%\",\n        duration: 2,\n        ease: \"power4.out\"\n    });\n    const serviceItemTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceItemTimeline.to(\".service-item-border\", {\n        width: \"100%\",\n        duration: 1.5,\n        ease: \"power4.out\"\n    });\n    ScrollTrigger1.create({\n        trigger: \".service-container\",\n        start: \"top 80%\",\n        onEnter: ()=>{\n            serviceContainerTimeline.play();\n        }\n    });\n    serviceContainerTimeline.call(()=>{\n        serviceItemTimeline.play();\n    });\n}\nfunction handlePortfolioAnimations(gsap1, ScrollTrigger1) {\n    const portfolioAnimations = [\n        {\n            selector: \"#portfolio-1, #portfolio-4\",\n            y: -50\n        },\n        {\n            selector: \"#portfolio-2, #portfolio-5\",\n            y: -100\n        },\n        {\n            selector: \"#portfolio-3, #portfolio-6\",\n            y: -150\n        }\n    ];\n    portfolioAnimations.forEach((animation)=>{\n        gsap1.from(animation.selector, {\n            duration: 2,\n            y: animation.y,\n            yPercent: 0,\n            scrollTrigger: {\n                trigger: \".work-container\",\n                start: \"top center\",\n                end: \"bottom center\",\n                scrub: 1.5\n            }\n        });\n    });\n}\nfunction handleBackgroundColorChange(gsap1, ScrollTrigger1) {\n    // ScrollTrigger for background color change\n    const textContainer = document.querySelector(\".text-containerr\");\n    const portfolioContainer = document.querySelector(\".portfolio-container\");\n    ScrollTrigger1.create({\n        trigger: textContainer,\n        start: \"top center\",\n        end: \"bottom center\",\n        onLeave: ()=>{\n            gsap1.to(\".text-container\", {\n                backgroundColor: \"#fff\",\n                color: \"#000\",\n                duration: 1\n            });\n        },\n        onEnterBack: ()=>{\n            gsap1.to(\".text-container\", {\n                backgroundColor: \"#000\",\n                color: \"#fff\",\n                duration: 1\n            });\n        }\n    });\n    ScrollTrigger1.create({\n        trigger: portfolioContainer,\n        start: \"top center\",\n        end: \"bottom center\",\n        onEnter: ()=>{\n            gsap1.to(\".portfolio-section\", {\n                backgroundColor: \"#fff\",\n                color: \"#000\",\n                duration: 1\n            });\n            gsap1.to(\".text-container\", {\n                backgroundColor: \"#fff\",\n                color: \"#fff\",\n                duration: 1\n            });\n        },\n        onLeaveBack: ()=>{\n            gsap1.to(\".portfolio-section\", {\n                backgroundColor: \"#000\",\n                color: \"#fff\",\n                duration: 1\n            });\n            gsap1.to(\".text-container\", {\n                backgroundColor: \"#000\",\n                color: \"#fff\",\n                duration: 1\n            });\n        }\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollEffect);\nvar _c;\n$RefreshReg$(_c, \"ScrollEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2Nyb2xsRWZmZWN0LmpzPzgxMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU2Nyb2xsRWZmZWN0KCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIER5bmFtaWNhbGx5IGltcG9ydCB0aGUgbGlicmFyaWVzXG4gICAgICBcblxuICAgICAgICAgICAgLy8gU3BsaXQgYW5kIGFuaW1hdGUgdGV4dFxuICAgICAgICAgICAgIGhhbmRsZVRleHRBbmltYXRpb24oZ3NhcCwgU2Nyb2xsVHJpZ2dlcik7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBoZXJvIGFuaW1hdGlvbnNcbiAgICAgICAgICAgICBoYW5kbGVIZXJvQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHNlcnZpY2UgYW5pbWF0aW9uc1xuICAgICAgICAgICAgaGFuZGxlU2VydmljZUFuaW1hdGlvbnMoZ3NhcCwgU2Nyb2xsVHJpZ2dlcik7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBwb3J0Zm9saW8gYW5pbWF0aW9uc1xuICAgICAgICAgICAgaGFuZGxlUG9ydGZvbGlvQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGJhY2tncm91bmQgY29sb3IgY2hhbmdlXG4gICAgICAgICAgICBoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoZ3NhcCwgU2Nyb2xsVHJpZ2dlcik7XG5cbiAgICAgICAgICAgIGhhbmRsZUluZm90ZXh0QW5pbWF0aW9uKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG4gZnVuY3Rpb24gaGFuZGxlVGV4dEFuaW1hdGlvbihnc2FwLCBTY3JvbGxUcmlnZ2VyKSB7XG4gICAgIGNvbnN0IHNwbGl0VGV4dCA9IG5ldyBTcGxpdFR5cGUoJyNzcGxpdC10ZXh0Jyk7XG4gICAgIGdzYXAudG8oJy5jaGFyJywge1xuICAgICAgICAgeTogMCxcbiAgICAgICAgIHN0YWdnZXI6IDAuMDIsXG4gICAgICAgICBkZWxheTogMC4xLFxuICAgICAgICAgZHVyYXRpb246IC4wMSxcbiAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICB0cmlnZ2VyOiAnLnNlcnZpY2Utb3ZlcnZpZXcnLFxuICAgICAgICAgICAgIHN0YXJ0OiAndG9wIGNlbnRlcicsXG4gICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCJcbiAgICAgICAgIH1cbiAgICAgfSk7XG4gfVxuXG4gZnVuY3Rpb24gaGFuZGxlSGVyb0FuaW1hdGlvbnMoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuICAgICBjb25zdCBoZXJvVGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICB0cmlnZ2VyOiAnLnNlcnZpY2Utb3ZlcnZpZXcnLFxuICAgICAgICAgICAgIHN0YXJ0OiAndG9wIGNlbnRlcicsXG4gICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCJcbiAgICAgICAgIH1cbiAgICAgfSk7XG5cbiAgICAgaGVyb1RpbWVsaW5lLnRvKFwiaW1nXCIsIHtcbiAgICAgICAgIGNsaXBQYXRoOiAncG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpJyxcbiAgICAgICAgIHNjYWxlOiAxLjEsXG4gICAgICAgICBkdXJhdGlvbjogMC43XG4gICAgIH0pO1xuIH1cblxuXG5cbmZ1bmN0aW9uIGhhbmRsZUluZm90ZXh0QW5pbWF0aW9uKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcbiAgY29uc3Qgc3BsaXRUeXBlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvLXRleHQnKVxuXG4gICAgICBzcGxpdFR5cGVUZXh0LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dEFuaW1hdGlvbiA9IG5ldyBTcGxpdFR5cGUoY2hhciwge3R5cGVzOiAnY2hhcnMnfSlcblxuICAgICAgICBnc2FwLmZyb20odGV4dEFuaW1hdGlvbi5jaGFycywge1xuICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IGNoYXIsXG4gICAgICAgICAgICBzdGFydDogJ3RvcCA4MCUnLFxuICAgICAgICAgICAgZW5kOiAndG9wIDMwJScsXG4gICAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wYWNpdHk6IDAuMixcbiAgICAgICAgICBzdGFnZ2VyOiAwLjFcbiAgICAgICAgfSlcbiAgICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlcnZpY2VBbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcbiAgICBjb25zdCBzZXJ2aWNlQ29udGFpbmVyVGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuICAgIHNlcnZpY2VDb250YWluZXJUaW1lbGluZS50byhcIi5zZXJ2aWNlLWJvcmRlclwiLCB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VydmljZUl0ZW1UaW1lbGluZSA9IGdzYXAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSk7XG4gICAgc2VydmljZUl0ZW1UaW1lbGluZS50byhcIi5zZXJ2aWNlLWl0ZW0tYm9yZGVyXCIsIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiBcInBvd2VyNC5vdXRcIixcbiAgICB9KTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgdHJpZ2dlcjogXCIuc2VydmljZS1jb250YWluZXJcIixcbiAgICAgICAgc3RhcnQ6IFwidG9wIDgwJVwiLFxuICAgICAgICBvbkVudGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlQ29udGFpbmVyVGltZWxpbmUucGxheSgpO1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgc2VydmljZUNvbnRhaW5lclRpbWVsaW5lLmNhbGwoKCkgPT4ge1xuICAgICAgICBzZXJ2aWNlSXRlbVRpbWVsaW5lLnBsYXkoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9ydGZvbGlvQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKSB7XG4gICAgY29uc3QgcG9ydGZvbGlvQW5pbWF0aW9ucyA9IFtcbiAgICAgICAgeyBzZWxlY3RvcjogXCIjcG9ydGZvbGlvLTEsICNwb3J0Zm9saW8tNFwiLCB5OiAtNTAgfSxcbiAgICAgICAgeyBzZWxlY3RvcjogXCIjcG9ydGZvbGlvLTIsICNwb3J0Zm9saW8tNVwiLCB5OiAtMTAwIH0sXG4gICAgICAgIHsgc2VsZWN0b3I6IFwiI3BvcnRmb2xpby0zLCAjcG9ydGZvbGlvLTZcIiwgeTogLTE1MCB9XG4gICAgXTtcblxuICAgIHBvcnRmb2xpb0FuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICBnc2FwLmZyb20oYW5pbWF0aW9uLnNlbGVjdG9yLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICAgIHk6IGFuaW1hdGlvbi55LFxuICAgICAgICAgICAgeVBlcmNlbnQ6IDAsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJy53b3JrLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdib3R0b20gY2VudGVyJyxcbiAgICAgICAgICAgICAgICBzY3J1YjogMS41XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuXG4gICAgICAgIC8vIFNjcm9sbFRyaWdnZXIgZm9yIGJhY2tncm91bmQgY29sb3IgY2hhbmdlXG4gICAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtY29udGFpbmVyclwiKTtcbiAgICAgICAgY29uc3QgcG9ydGZvbGlvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tY29udGFpbmVyXCIpO1xuICBcbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICAgIHRyaWdnZXI6IHRleHRDb250YWluZXIsXG4gICAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgICAgICAgIGVuZDogXCJib3R0b20gY2VudGVyXCIsXG4gICAgICAgICAgb25MZWF2ZTogKCkgPT4ge1xuICAgICAgICAgICAgZ3NhcC50byhcIi50ZXh0LWNvbnRhaW5lclwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsIGNvbG9yOiBcIiMwMDBcIiwgZHVyYXRpb246IDEgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVudGVyQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgZ3NhcC50byhcIi50ZXh0LWNvbnRhaW5lclwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsIGNvbG9yOiBcIiNmZmZcIiwgZHVyYXRpb246IDEgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgICAgdHJpZ2dlcjogcG9ydGZvbGlvQ29udGFpbmVyLFxuICAgICAgICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICAgICAgICBlbmQ6IFwiYm90dG9tIGNlbnRlclwiLFxuICAgICAgICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oXCIucG9ydGZvbGlvLXNlY3Rpb25cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLCBjb2xvcjogXCIjMDAwXCIsIGR1cmF0aW9uOiAxIH0pO1xuICAgICAgICAgICAgZ3NhcC50byhcIi50ZXh0LWNvbnRhaW5lclwiLCB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsIGNvbG9yOiBcIiNmZmZcIiwgZHVyYXRpb246IDF9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25MZWF2ZUJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oXCIucG9ydGZvbGlvLXNlY3Rpb25cIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLCBjb2xvcjogXCIjZmZmXCIsIGR1cmF0aW9uOiAxIH0pO1xuICAgICAgICAgICAgZ3NhcC50byhcIi50ZXh0LWNvbnRhaW5lclwiLCB7YmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIiwgY29sb3I6IFwiI2ZmZlwiLCBkdXJhdGlvbjogMSB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiU2Nyb2xsRWZmZWN0IiwiaGFuZGxlVGV4dEFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiaGFuZGxlSGVyb0FuaW1hdGlvbnMiLCJoYW5kbGVTZXJ2aWNlQW5pbWF0aW9ucyIsImhhbmRsZVBvcnRmb2xpb0FuaW1hdGlvbnMiLCJoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UiLCJoYW5kbGVJbmZvdGV4dEFuaW1hdGlvbiIsInNwbGl0VGV4dCIsIlNwbGl0VHlwZSIsInRvIiwieSIsInN0YWdnZXIiLCJkZWxheSIsImR1cmF0aW9uIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsInRvZ2dsZUFjdGlvbnMiLCJoZXJvVGltZWxpbmUiLCJ0aW1lbGluZSIsImNsaXBQYXRoIiwic2NhbGUiLCJzcGxpdFR5cGVUZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNoYXIiLCJpIiwidGV4dEFuaW1hdGlvbiIsInR5cGVzIiwiZnJvbSIsImNoYXJzIiwiZW5kIiwic2NydWIiLCJvbmNlIiwib3BhY2l0eSIsInNlcnZpY2VDb250YWluZXJUaW1lbGluZSIsInBhdXNlZCIsIndpZHRoIiwiZWFzZSIsInNlcnZpY2VJdGVtVGltZWxpbmUiLCJjcmVhdGUiLCJvbkVudGVyIiwicGxheSIsImNhbGwiLCJwb3J0Zm9saW9BbmltYXRpb25zIiwic2VsZWN0b3IiLCJhbmltYXRpb24iLCJ5UGVyY2VudCIsInRleHRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwicG9ydGZvbGlvQ29udGFpbmVyIiwib25MZWF2ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwib25FbnRlckJhY2siLCJvbkxlYXZlQmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/ScrollEffect.js\n"));

/***/ })

});
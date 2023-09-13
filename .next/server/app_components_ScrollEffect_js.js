"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "app_components_ScrollEffect_js";
exports.ids = ["app_components_ScrollEffect_js"];
exports.modules = {

/***/ "./app/components/ScrollEffect.js":
/*!****************************************!*\
  !*** ./app/components/ScrollEffect.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ScrollEffect() {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Dynamically import the libraries\n        // Split and animate text\n        handleTextAnimation(gsap, ScrollTrigger);\n        // Handle hero animations\n        handleHeroAnimations(gsap, ScrollTrigger);\n        // Handle service animations\n        handleServiceAnimations(gsap, ScrollTrigger);\n        // Handle portfolio animations\n        handlePortfolioAnimations(gsap, ScrollTrigger);\n        // Handle background color change\n        handleBackgroundColorChange(gsap, ScrollTrigger);\n        handleInfotextAnimation(gsap, ScrollTrigger);\n    });\n    return null;\n}\nfunction handleTextAnimation(gsap1, ScrollTrigger1) {\n    const splitText = new SplitType(\"#split-text\");\n    gsap1.to(\".char\", {\n        y: 0,\n        stagger: 0.02,\n        delay: 0.1,\n        duration: .01,\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n}\nfunction handleHeroAnimations(gsap1, ScrollTrigger1) {\n    const heroTimeline = gsap1.timeline({\n        scrollTrigger: {\n            trigger: \".service-overview\",\n            start: \"top center\",\n            toggleActions: \"play none none reverse\"\n        }\n    });\n    heroTimeline.to(\"img\", {\n        clipPath: \"polygon(0 0, 100% 0, 100% 100%, 0 100%)\",\n        scale: 1.1,\n        duration: 0.7\n    });\n}\nfunction handleInfotextAnimation(gsap1, ScrollTrigger1) {\n    const splitTypeText = document.querySelectorAll(\".info-text\");\n    splitTypeText.forEach((char, i)=>{\n        const textAnimation = new SplitType(char, {\n            types: \"chars\"\n        });\n        gsap1.from(textAnimation.chars, {\n            scrollTrigger: {\n                trigger: char,\n                start: \"top 80%\",\n                end: \"top 30%\",\n                scrub: true,\n                once: true\n            },\n            opacity: 0.2,\n            stagger: 0.1\n        });\n    });\n}\nfunction handleServiceAnimations(gsap1, ScrollTrigger1) {\n    const serviceContainerTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceContainerTimeline.to(\".service-border\", {\n        width: \"100%\",\n        duration: 2,\n        ease: \"power4.out\"\n    });\n    const serviceItemTimeline = gsap1.timeline({\n        paused: true\n    });\n    serviceItemTimeline.to(\".service-item-border\", {\n        width: \"100%\",\n        duration: 1.5,\n        ease: \"power4.out\"\n    });\n    ScrollTrigger1.create({\n        trigger: \".service-container\",\n        start: \"top 80%\",\n        onEnter: ()=>{\n            serviceContainerTimeline.play();\n        }\n    });\n    serviceContainerTimeline.call(()=>{\n        serviceItemTimeline.play();\n    });\n}\nfunction handlePortfolioAnimations(gsap1, ScrollTrigger1) {\n    if (window.innerWidth < 768) {\n        return;\n    }\n    const portfolioAnimations = [\n        {\n            selector: \"#portfolio-1, #portfolio-4\",\n            y: 0\n        },\n        {\n            selector: \"#portfolio-2, #portfolio-5\",\n            y: -150\n        },\n        {\n            selector: \"#portfolio-3, #portfolio-6\",\n            y: -250\n        }\n    ];\n    portfolioAnimations.forEach((animation)=>{\n        gsap1.from(animation.selector, {\n            y: animation.y,\n            yPercent: 0,\n            scrollTrigger: {\n                trigger: \".work-container\",\n                start: \"top top\",\n                end: \"top center\",\n                scrub: 1\n            }\n        });\n    });\n}\nfunction handleBackgroundColorChange(gsap1, ScrollTrigger1) {\n    const animationSettings = {\n        \"portfolio-1\": {\n            start: -50,\n            end: 0\n        },\n        \"portfolio-4\": {\n            start: -50,\n            end: 0\n        },\n        \"portfolio-2\": {\n            start: -150,\n            end: 0\n        },\n        \"portfolio-5\": {\n            start: -150,\n            end: 0\n        },\n        \"portfolio-3\": {\n            start: -250,\n            end: 0\n        },\n        \"portfolio-6\": {\n            start: -250,\n            end: 0\n        }\n    };\n    // Iterate over each portfolio ID and create the animation\n    for(let id in animationSettings){\n        let element = document.getElementById(id);\n        if (element) {\n            gsap1.from(element, {\n                y: animationSettings[id].start,\n                scrollTrigger: {\n                    trigger: element,\n                    start: \"top bottom\",\n                    end: \"top top\",\n                    scrub: true\n                },\n                y: animationSettings[id].end\n            });\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R3VDLFVBQVV2QyxDQUFDO1lBQ2R3QyxVQUFVO1lBQ1ZwQyxlQUFlO2dCQUNYQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQZ0IsS0FBSztnQkFDTEMsT0FBTztZQUNYO1FBQ0o7SUFDSjtBQUNKO0FBRUEsU0FBUzVCLDRCQUE0QkwsS0FBSSxFQUFFQyxjQUFhO0lBRXRELE1BQU1rRCxvQkFBb0I7UUFDeEIsZUFBZTtZQUFFbkMsT0FBTyxDQUFDO1lBQUlnQixLQUFLO1FBQUU7UUFDcEMsZUFBZTtZQUFFaEIsT0FBTyxDQUFDO1lBQUlnQixLQUFLO1FBQUU7UUFDcEMsZUFBZTtZQUFFaEIsT0FBTyxDQUFDO1lBQUtnQixLQUFLO1FBQUU7UUFDckMsZUFBZTtZQUFFaEIsT0FBTyxDQUFDO1lBQUtnQixLQUFLO1FBQUU7UUFDckMsZUFBZTtZQUFFaEIsT0FBTyxDQUFDO1lBQUtnQixLQUFLO1FBQUU7UUFDckMsZUFBZTtZQUFFaEIsT0FBTyxDQUFDO1lBQUtnQixLQUFLO1FBQUU7SUFDekM7SUFFQSwwREFBMEQ7SUFDMUQsSUFBSyxJQUFJb0IsTUFBTUQsa0JBQW1CO1FBQzlCLElBQUlFLFVBQVU5QixTQUFTK0IsY0FBYyxDQUFDRjtRQUN0QyxJQUFJQyxTQUFTO1lBQ1RyRCxNQUFLOEIsSUFBSSxDQUFDdUIsU0FBUztnQkFDZjNDLEdBQUd5QyxpQkFBaUIsQ0FBQ0MsR0FBRyxDQUFDcEMsS0FBSztnQkFDOUJGLGVBQWU7b0JBQ1hDLFNBQVNzQztvQkFDVHJDLE9BQU87b0JBQ1BnQixLQUFLO29CQUNMQyxPQUFPO2dCQUNYO2dCQUNBdkIsR0FBR3lDLGlCQUFpQixDQUFDQyxHQUFHLENBQUNwQixHQUFHO1lBQ2hDO1FBQ0o7SUFDSjtBQUNBO0FBR0EsaUVBQWVsQyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9hcHAvY29tcG9uZW50cy9TY3JvbGxFZmZlY3QuanM/ODEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBTY3JvbGxFZmZlY3QoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gRHluYW1pY2FsbHkgaW1wb3J0IHRoZSBsaWJyYXJpZXNcbiAgICAgIFxuXG4gICAgICAgICAgICAvLyBTcGxpdCBhbmQgYW5pbWF0ZSB0ZXh0XG4gICAgICAgICAgICAgaGFuZGxlVGV4dEFuaW1hdGlvbihnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGhlcm8gYW5pbWF0aW9uc1xuICAgICAgICAgICAgIGhhbmRsZUhlcm9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgc2VydmljZSBhbmltYXRpb25zXG4gICAgICAgICAgICBoYW5kbGVTZXJ2aWNlQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHBvcnRmb2xpbyBhbmltYXRpb25zXG4gICAgICAgICAgICBoYW5kbGVQb3J0Zm9saW9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2VcbiAgICAgICAgICAgIGhhbmRsZUJhY2tncm91bmRDb2xvckNoYW5nZShnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcblxuICAgICAgICAgICAgaGFuZGxlSW5mb3RleHRBbmltYXRpb24oZ3NhcCwgU2Nyb2xsVHJpZ2dlcik7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbiBmdW5jdGlvbiBoYW5kbGVUZXh0QW5pbWF0aW9uKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcbiAgICAgY29uc3Qgc3BsaXRUZXh0ID0gbmV3IFNwbGl0VHlwZSgnI3NwbGl0LXRleHQnKTtcbiAgICAgZ3NhcC50bygnLmNoYXInLCB7XG4gICAgICAgICB5OiAwLFxuICAgICAgICAgc3RhZ2dlcjogMC4wMixcbiAgICAgICAgIGRlbGF5OiAwLjEsXG4gICAgICAgICBkdXJhdGlvbjogLjAxLFxuICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgIHRyaWdnZXI6ICcuc2VydmljZS1vdmVydmlldycsXG4gICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgICAgICAgfVxuICAgICB9KTtcbiB9XG5cbiBmdW5jdGlvbiBoYW5kbGVIZXJvQW5pbWF0aW9ucyhnc2FwLCBTY3JvbGxUcmlnZ2VyKSB7XG4gICAgIGNvbnN0IGhlcm9UaW1lbGluZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgIHRyaWdnZXI6ICcuc2VydmljZS1vdmVydmlldycsXG4gICAgICAgICAgICAgc3RhcnQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgICAgICAgfVxuICAgICB9KTtcblxuICAgICBoZXJvVGltZWxpbmUudG8oXCJpbWdcIiwge1xuICAgICAgICAgY2xpcFBhdGg6ICdwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSknLFxuICAgICAgICAgc2NhbGU6IDEuMSxcbiAgICAgICAgIGR1cmF0aW9uOiAwLjdcbiAgICAgfSk7XG4gfVxuXG5cblxuZnVuY3Rpb24gaGFuZGxlSW5mb3RleHRBbmltYXRpb24oZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuICBjb25zdCBzcGxpdFR5cGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm8tdGV4dCcpXG5cbiAgICAgIHNwbGl0VHlwZVRleHQuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0QW5pbWF0aW9uID0gbmV3IFNwbGl0VHlwZShjaGFyLCB7dHlwZXM6ICdjaGFycyd9KVxuXG4gICAgICAgIGdzYXAuZnJvbSh0ZXh0QW5pbWF0aW9uLmNoYXJzLCB7XG4gICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogY2hhcixcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wIDgwJScsXG4gICAgICAgICAgICBlbmQ6ICd0b3AgMzAlJyxcbiAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgICAgIHN0YWdnZXI6IDAuMVxuICAgICAgICB9KVxuICAgICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VydmljZUFuaW1hdGlvbnMoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xuICAgIGNvbnN0IHNlcnZpY2VDb250YWluZXJUaW1lbGluZSA9IGdzYXAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSk7XG4gICAgc2VydmljZUNvbnRhaW5lclRpbWVsaW5lLnRvKFwiLnNlcnZpY2UtYm9yZGVyXCIsIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZWFzZTogXCJwb3dlcjQub3V0XCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlSXRlbVRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KTtcbiAgICBzZXJ2aWNlSXRlbVRpbWVsaW5lLnRvKFwiLnNlcnZpY2UtaXRlbS1ib3JkZXJcIiwge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6IFwicG93ZXI0Lm91dFwiLFxuICAgIH0pO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICB0cmlnZ2VyOiBcIi5zZXJ2aWNlLWNvbnRhaW5lclwiLFxuICAgICAgICBzdGFydDogXCJ0b3AgODAlXCIsXG4gICAgICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2VDb250YWluZXJUaW1lbGluZS5wbGF5KCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBzZXJ2aWNlQ29udGFpbmVyVGltZWxpbmUuY2FsbCgoKSA9PiB7XG4gICAgICAgIHNlcnZpY2VJdGVtVGltZWxpbmUucGxheSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQb3J0Zm9saW9BbmltYXRpb25zKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3Njgpe1xuICAgIHJldHVybjtcbiAgfVxuICAgIGNvbnN0IHBvcnRmb2xpb0FuaW1hdGlvbnMgPSBbXG4gICAgICAgIHsgc2VsZWN0b3I6IFwiI3BvcnRmb2xpby0xLCAjcG9ydGZvbGlvLTRcIiwgeTogMCB9LFxuICAgICAgICB7IHNlbGVjdG9yOiBcIiNwb3J0Zm9saW8tMiwgI3BvcnRmb2xpby01XCIsIHk6IC0xNTAgfSxcbiAgICAgICAgeyBzZWxlY3RvcjogXCIjcG9ydGZvbGlvLTMsICNwb3J0Zm9saW8tNlwiLCB5OiAtMjUwIH1cbiAgICBdO1xuXG4gICAgcG9ydGZvbGlvQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGdzYXAuZnJvbShhbmltYXRpb24uc2VsZWN0b3IsIHtcbiAgICAgICAgICAgIHk6IGFuaW1hdGlvbi55LFxuICAgICAgICAgICAgeVBlcmNlbnQ6IDAsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJy53b3JrLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICd0b3AgY2VudGVyJyxcbiAgICAgICAgICAgICAgICBzY3J1YjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQmFja2dyb3VuZENvbG9yQ2hhbmdlKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcblxuICBjb25zdCBhbmltYXRpb25TZXR0aW5ncyA9IHtcbiAgICAncG9ydGZvbGlvLTEnOiB7IHN0YXJ0OiAtNTAsIGVuZDogMCB9LFxuICAgICdwb3J0Zm9saW8tNCc6IHsgc3RhcnQ6IC01MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby0yJzogeyBzdGFydDogLTE1MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby01JzogeyBzdGFydDogLTE1MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby0zJzogeyBzdGFydDogLTI1MCwgZW5kOiAwIH0sXG4gICAgJ3BvcnRmb2xpby02JzogeyBzdGFydDogLTI1MCwgZW5kOiAwIH1cbn07XG5cbi8vIEl0ZXJhdGUgb3ZlciBlYWNoIHBvcnRmb2xpbyBJRCBhbmQgY3JlYXRlIHRoZSBhbmltYXRpb25cbmZvciAobGV0IGlkIGluIGFuaW1hdGlvblNldHRpbmdzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZ3NhcC5mcm9tKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHk6IGFuaW1hdGlvblNldHRpbmdzW2lkXS5zdGFydCxcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTogYW5pbWF0aW9uU2V0dGluZ3NbaWRdLmVuZFxuICAgICAgICB9KTtcbiAgICB9XG59XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiU2Nyb2xsRWZmZWN0IiwiaGFuZGxlVGV4dEFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiaGFuZGxlSGVyb0FuaW1hdGlvbnMiLCJoYW5kbGVTZXJ2aWNlQW5pbWF0aW9ucyIsImhhbmRsZVBvcnRmb2xpb0FuaW1hdGlvbnMiLCJoYW5kbGVCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UiLCJoYW5kbGVJbmZvdGV4dEFuaW1hdGlvbiIsInNwbGl0VGV4dCIsIlNwbGl0VHlwZSIsInRvIiwieSIsInN0YWdnZXIiLCJkZWxheSIsImR1cmF0aW9uIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsInRvZ2dsZUFjdGlvbnMiLCJoZXJvVGltZWxpbmUiLCJ0aW1lbGluZSIsImNsaXBQYXRoIiwic2NhbGUiLCJzcGxpdFR5cGVUZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNoYXIiLCJpIiwidGV4dEFuaW1hdGlvbiIsInR5cGVzIiwiZnJvbSIsImNoYXJzIiwiZW5kIiwic2NydWIiLCJvbmNlIiwib3BhY2l0eSIsInNlcnZpY2VDb250YWluZXJUaW1lbGluZSIsInBhdXNlZCIsIndpZHRoIiwiZWFzZSIsInNlcnZpY2VJdGVtVGltZWxpbmUiLCJjcmVhdGUiLCJvbkVudGVyIiwicGxheSIsImNhbGwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicG9ydGZvbGlvQW5pbWF0aW9ucyIsInNlbGVjdG9yIiwiYW5pbWF0aW9uIiwieVBlcmNlbnQiLCJhbmltYXRpb25TZXR0aW5ncyIsImlkIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/ScrollEffect.js\n");

/***/ })

};
;
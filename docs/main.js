(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+24W":
/*!*********************************************************!*\
  !*** ./src/app/photographer/resume/resume.component.ts ***!
  \*********************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/progress-bar/line/line.component */ "yMhq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/timeline/timeline.component */ "A8ej");
/* harmony import */ var _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/progress-bar/circle/circle.component */ "mmjH");
/* harmony import */ var _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/tags/tags.component */ "MhBU");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");












class ResumeComponent {
    constructor() {
        this.profile = {
            logo: "logo-black.png",
            profile: "photographer"
        };
        this.page_banner = {
            title: "Resume",
            profile: "photographer",
        };
        this.member = {
            image: "user-img.jpg",
            logo: "",
            designation: "",
            age: "29",
            dob: "01.07.1990",
            residence: "USA",
            address: "AVE 11, NEW YORK, USA",
            email: "INFO@EXAMPLE.COM",
            phone: "(+01) 123 456 7890",
            skype: "ALEX.SMITH",
            whatsapp: "",
            about_me: "Hi! My name is <span class='text-primary'>Thomas Grady</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.",
            intrests: "PLAYSTATION, READING",
            name: "Thomas Grady",
            study: "UNIVERSITY OF CHICAGO",
            highes_degree: "MASTER",
            profile: "photographer"
        };
        this.skills = [
            {
                title: "Creativity",
                score: "60",
            },
            {
                title: "photography",
                score: "45",
            },
            {
                title: "editing",
                score: "75",
            },
            {
                title: "Team working",
                score: "95",
            },
        ];
        this.education = [
            {
                title: "Fronted Development",
                year: "2019",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Graphic Design",
                year: "2014",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Senior Ui/Ux Designer",
                year: "2012",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Junior Ui/Ux Designer",
                year: "2011",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
        ];
        this.experience = [
            {
                title: "Fronted Development",
                year: "2019",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Graphic Design",
                year: "2014",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
        ];
        this.language_known = [
            {
                title: "English",
                score: "60",
            },
            {
                title: "French",
                score: "45",
            },
            {
                title: "German",
                score: "75",
            },
            {
                title: "Italian",
                score: "95",
            },
        ];
        this.knowledge = [
            "Website hosting",
            "iOS and android apps",
            "Create logo design",
            "Design for print",
            "Modern and mobile-ready",
            "Advertising services include",
            "Graphics and animations",
            "Search engine marketing",
        ];
    }
    ngOnInit() {
    }
}
ResumeComponent.??fac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 90, vars: 20, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "row"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-6", "col-lg-12", "wow", "fadeInUp"], [1, "sticky-top", "m-lg-b30"], ["alt", "", 3, "src"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-xl-6", "col-lg-12", "m-b30", "wow", "fadeInUp"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "m-b0", 3, "innerHTML"], [1, "m-t50", "m-xs-t30"], [1, "site-button", "button-gradient", "button-md", "radius-no", 3, "routerLink"], [1, "site-button", "white", "button-md", "radius-no", 3, "routerLink"], [1, "section-full", "content-inner-1"], [1, "resume-tag"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.8s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.0s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["href", "#"], ["data-wow-duration", "2s", "data-wow-delay", "1.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "app-line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Check portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "BIRTHDAY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "LOCATION :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "INTERESTS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "STUDY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "AGE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "DEGREE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "MAIL :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "PHONE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "app-circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "KNOWLEDGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "app-tags", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.member.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.member.about_me, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/portfolio-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.intrests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.study);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.highes_degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.language_known);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.knowledge);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__["CircleComponent"], _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__["TagsComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGhlci9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+r0e":
/*!************************************************************!*\
  !*** ./src/app/pages/blog-single/blog-single.component.ts ***!
  \************************************************************/
/*! exports provided: BlogSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSingleComponent", function() { return BlogSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");






class BlogSingleComponent {
    constructor() {
        this.profile = {
            logo: "logo-black.png",
            profile: "photographer"
        };
        this.page_banner = {
            title: "Blog Single",
            profile: "photographer",
        };
    }
    ngOnInit() {
    }
}
BlogSingleComponent.??fac = function BlogSingleComponent_Factory(t) { return new (t || BlogSingleComponent)(); };
BlogSingleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogSingleComponent, selectors: [["app-blog-single"]], decls: 179, vars: 2, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "blog-post", "blog-single"], [1, "dlab-post-meta"], [1, "post-date"], [1, "dlab-post-title"], [1, "post-title", "m-t0"], [1, "dlab-post-media"], ["src", "assets/images/blog/grid/single.jpg", "alt", ""], [1, "dlab-post-text"], ["width", "300", "src", "assets/images/blog/grid/pic4.jpg", "alt", "", 1, "alignleft"], [1, "dlab-divider", "bg-gray-dark"], ["width", "300", "src", "assets/images/blog/grid/pic1.jpg", "alt", "", 1, "alignright"], [1, "dlab-post-tags", "clear"], [1, "post-tags"], ["href", "javascript:void(0);"], ["id", "comment-list", 1, "clear"], ["id", "comments", 1, "comments-area"], [1, "comments-title"], [1, "clearfix"], [1, "comment-list"], [1, "comment"], [1, "comment-body"], [1, "comment-author", "vcard"], ["src", "assets/images/testimonial/pic1.jpg", "alt", "", 1, "avatar", "photo"], [1, "fn"], [1, "says"], [1, "comment-meta"], [1, "reply"], ["href", "javascript:void(0);", 1, "comment-reply-link"], [1, "children"], [1, "comment", "odd", "parent"], ["src", "assets/images/testimonial/pic2.jpg", "alt", "", 1, "avatar", "photo"], ["src", "assets/images/testimonial/pic3.jpg", "alt", "", 1, "avatar", "photo"], ["id", "respond", 1, "comment-respond"], ["id", "reply-title", 1, "comment-reply-title"], ["href", "javascript:void(0);", "id", "cancel-comment-reply-link", "rel", "nofollow", 2, "display", "none"], ["id", "commentform", "method", "post", "action", "http://sedatelab.com/developer/donate/wp-comments-post.php", 1, "comment-form"], [1, "comment-form-author"], ["for", "author"], [1, "required"], ["type", "text", "value", "author", "name", "author", "placeholder", "Author", "id", "author"], [1, "comment-form-email"], ["for", "email"], ["type", "text", "value", "email", "placeholder", "Email", "name", "email", "id", "email"], [1, "comment-form-url"], ["for", "url"], ["type", "text", "value", "url", "placeholder", "Website", "name", "url", "id", "url"], [1, "comment-form-comment"], ["for", "comment"], ["rows", "8", "name", "comment", "placeholder", "Comment", "id", "comment"], [1, "form-submit"], ["type", "submit", "value", "Post Comment", "id", "submit", "name", "submit", 1, "submit"]], template: function BlogSingleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " february 23, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Blog Developer Is So Famous, But Why?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting printer a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since the 1500s, when an unknown printer took a galley.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Completely Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasefive centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Child ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Eduction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Resturent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "3 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ol", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "cite", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Nashid Martines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "October 6, 2015 at 7:15 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "ol", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "cite", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Hackson Willingham");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "October 6, 2015 at 7:15 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "ol", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "cite", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Konne Backfield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "October 6, 2015 at 7:15 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "cite", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Nashid Martines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "October 6, 2015 at 7:15 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "cite", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Hackson Willingham");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "October 6, 2015 at 7:15 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "cite", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Konne Backfield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "October 6, 2015 at 7:15 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Leave a Reply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Cancel reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "form", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2ctc2luZ2xlL2Jsb2ctc2luZ2xlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogSingleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-single',
                templateUrl: './blog-single.component.html',
                styleUrls: ['./blog-single.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+vy1":
/*!**********************************************************************************************!*\
  !*** ./src/app/web-developer/web-developer-contact-us/web-developer-contact-us.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: WebDeveloperContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDeveloperContactUsComponent", function() { return WebDeveloperContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");







class WebDeveloperContactUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-5.png",
            profile: "web-developer"
        };
        this.page_banner = {
            title: "Contact Us",
            profile: "web-developer",
        };
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                if (jQuery('.dezPlaceAni').length) {
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus', function () {
                        $(this).parents('.form-group, .news-box').addClass('focused');
                    });
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur', function () {
                        var inputValue = $(this).val();
                        if (inputValue == "") {
                            $(this).removeClass('filled');
                            $(this).parents('.form-group, .news-box').removeClass('focused');
                        }
                        else {
                            $(this).addClass('filled');
                        }
                    });
                }
            }, 500);
        })(jQuery);
    }
}
WebDeveloperContactUsComponent.??fac = function WebDeveloperContactUsComponent_Factory(t) { return new (t || WebDeveloperContactUsComponent)(); };
WebDeveloperContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WebDeveloperContactUsComponent, selectors: [["app-web-developer-contact-us"]], decls: 59, vars: 2, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "contact-form"], ["method", "post", "action", "script/contact.php", 1, "dzForm", "dezPlaceAni"], [1, "dzFormMsg"], ["type", "hidden", "value", "Contact", "name", "dzToDo"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "las", "la-user", "text-gradient"], ["name", "dzName", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-envelope-open", "text-gradient"], ["name", "dzEmail", "type", "email", "required", "", 1, "form-control"], [1, "las", "la-phone-volume", "text-gradient"], ["name", "dzPhone", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-file-alt", "text-gradient"], ["name", "dzSubject", "type", "text", "required", "", 1, "form-control"], [1, "col-sm-12"], ["name", "dzMessage", "rows", "4", "required", "", 1, "form-control"], [1, "col-md-12", "m-b20", "m-xs-b0"], ["data-sitekey", "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN", "data-callback", "verifyRecaptchaCallback", "data-expired-callback", "expiredRecaptchaCallback", 1, "g-recaptcha"], ["data-recaptcha", "true", "required", "", "data-error", "Please complete the Captcha", 1, "form-control", "d-none", 2, "display", "none"], [1, "col-md-12"], ["name", "submit", "type", "submit", "value", "Submit", 1, "site-button", "button-gradient", "button-md", "radius-no"], [1, "section-full", "content-inner"], [1, "section-full", "maps"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14445.871196953145!2d75.8417313!3d25.153677599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1580295328844!5m2!1sen!2sin", "allowfullscreen", "", 2, "border", "0", "width", "100%"]], template: function WebDeveloperContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "How Can I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Help You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Your Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "iframe", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1kZXZlbG9wZXIvd2ViLWRldmVsb3Blci1jb250YWN0LXVzL3dlYi1kZXZlbG9wZXItY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebDeveloperContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-developer-contact-us',
                templateUrl: './web-developer-contact-us.component.html',
                styleUrls: ['./web-developer-contact-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\downloads\portfol\Angular-Myintro-v1.2_02_March_2021\myintro_package\src\main.ts */"zUnb");


/***/ }),

/***/ "1ECE":
/*!***************************************************************************!*\
  !*** ./src/app/security/security-about-us/security-about-us.component.ts ***!
  \***************************************************************************/
/*! exports provided: SecurityAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAboutUsComponent", function() { return SecurityAboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/my-services/my-services.component */ "WtFa");
/* harmony import */ var _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/fun-fact-counter/fun-fact-counter.component */ "HK96");
/* harmony import */ var _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/testimonial/testimonial.component */ "ujG/");
/* harmony import */ var _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/our-client/our-client.component */ "Zotn");










class SecurityAboutUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-4.png",
            profile: "security"
        };
        this.page_banner = {
            title: "About us",
            profile: "security",
        };
        this.page_info = {
            title: "What I Do",
            image: "pic5.jpg",
            description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue."
        };
        this.member = {
            image: "",
            logo: "",
            designation: "",
            age: "29",
            dob: "",
            residence: "USA",
            address: "88 SOME STREET, SOME TOW",
            email: "EMAIL@EXAMPLE.COM",
            phone: "+0123 123 456 789",
            skype: "ALEX.SMITH",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "Thomas Grady",
            study: "UNIVERSITY OF CHICAGO",
            highes_degree: "MASTER",
            profile: "security"
        };
        this.services = [
            {
                title: "CCTV Design House",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "Fire Alarm Systems",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "Home Automation",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "Surveillance Cam kit",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
        ];
        this.fun_facts = [
            {
                number: "2325",
                title: "HAPPY CLIENTS",
            },
            {
                number: "758",
                title: "WORKING HOURS",
            },
            {
                number: "12",
                title: "AWARDS WON",
            },
            {
                number: "18",
                title: "EXPERIENCE",
            },
        ];
        this.testimonials = [
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "Security Guard",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "Security Guard",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "Client",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "Security Guard",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "Security Guard",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "Client",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
        ];
        this.our_clients = [
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo3.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
        ];
    }
    ngOnInit() {
    }
}
SecurityAboutUsComponent.??fac = function SecurityAboutUsComponent_Factory(t) { return new (t || SecurityAboutUsComponent)(); };
SecurityAboutUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SecurityAboutUsComponent, selectors: [["app-security-about-us"]], decls: 64, vars: 15, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "wow", "fadeInUp"], ["alt", "", 3, "src"], [1, "section-full", "content-inner-1"], [1, "row", "align-items-center"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-md-6", "wow", "fadeInUp"], [1, "section-head", "m-b0"], [1, "title", "text-uppercase"], [1, "m-b0"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "col-md-6", "wow", "fadeInUp"], [1, "personal-info"], ["href", "#"], [1, "section-head"]], template: function SecurityAboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "AGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "RESIDENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "E-MAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "PHONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "SKYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "app-my-services", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Fun Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "app-fun-fact-counter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-testimonial", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "our Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-our-client", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.page_info.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.residence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.skype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.fun_facts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.our_clients);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__["MyServicesComponent"], _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__["FunFactCounterComponent"], _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__["TestimonialComponent"], _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__["OurClientComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3NlY3VyaXR5LWFib3V0LXVzL3NlY3VyaXR5LWFib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SecurityAboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-about-us',
                templateUrl: './security-about-us.component.html',
                styleUrls: ['./security-about-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1bEB":
/*!*****************************************************************!*\
  !*** ./src/app/photographer/contact-us/contact-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");







class ContactUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black.png",
            profile: "photographer"
        };
        this.page_banner = {
            title: "Contact Us",
            profile: "photographer",
        };
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                if (jQuery('.dezPlaceAni').length) {
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus', function () {
                        $(this).parents('.form-group, .news-box').addClass('focused');
                    });
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur', function () {
                        var inputValue = $(this).val();
                        if (inputValue == "") {
                            $(this).removeClass('filled');
                            $(this).parents('.form-group, .news-box').removeClass('focused');
                        }
                        else {
                            $(this).addClass('filled');
                        }
                    });
                }
            }, 500);
        })(jQuery);
    }
}
ContactUsComponent.??fac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 59, vars: 2, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "contact-form"], ["method", "post", "action", "script/contact.php", 1, "dzForm", "dezPlaceAni"], [1, "dzFormMsg"], ["type", "hidden", "value", "Contact", "name", "dzToDo"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "las", "la-user", "text-gradient"], ["name", "dzName", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-envelope-open", "text-gradient"], ["name", "dzEmail", "type", "email", "required", "", 1, "form-control"], [1, "las", "la-phone-volume", "text-gradient"], ["name", "dzPhone", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-file-alt", "text-gradient"], ["name", "dzSubject", "type", "text", "required", "", 1, "form-control"], [1, "col-sm-12"], ["name", "dzMessage", "rows", "4", "required", "", 1, "form-control"], [1, "col-md-12", "m-b20", "m-xs-b0"], ["data-sitekey", "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN", "data-callback", "verifyRecaptchaCallback", "data-expired-callback", "expiredRecaptchaCallback", 1, "g-recaptcha"], ["data-recaptcha", "true", "required", "", "data-error", "Please complete the Captcha", 1, "form-control", "d-none", 2, "display", "none"], [1, "col-md-12"], ["name", "submit", "type", "submit", "value", "Submit", 1, "site-button", "button-gradient", "button-md", "radius-no"], [1, "section-full", "content-inner"], [1, "section-full", "maps"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14445.871196953145!2d75.8417313!3d25.153677599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1580295328844!5m2!1sen!2sin", "allowfullscreen", "", 2, "border", "0", "width", "100%"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "How Can I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Help You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Your Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "iframe", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGhlci9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5tuB":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");






class BlogComponent {
    constructor() {
        this.profile = {
            logo: "logo-black.png",
            profile: "photographer"
        };
        this.page_banner = {
            title: "Blog",
            profile: "photographer",
        };
    }
    ngOnInit() {
    }
}
BlogComponent.??fac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 167, vars: 2, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head", "m-b50"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "row"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "col-xl-4", "col-lg-6", "col-sm-6", "wow", "fadeInLeft"], [1, "blog-post"], [1, "dlab-post-media"], ["href", "blog-single.html"], ["src", "assets/images/blog/grid/pic1.jpg", "alt", ""], [1, "dlab-post-info"], [1, "dlab-post-meta"], [1, "post-date"], [1, "dlab-post-title"], [1, "post-title"], [1, "dlab-post-text"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-xl-4", "col-lg-6", "col-sm-6", "wow", "fadeInLeft"], ["src", "assets/images/blog/grid/pic2.jpg", "alt", ""], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-4", "col-lg-6", "col-sm-6", "wow", "fadeInLeft"], ["src", "assets/images/blog/grid/pic3.jpg", "alt", ""], ["data-wow-duration", "2s", "data-wow-delay", "1.6s", 1, "col-xl-4", "col-lg-6", "col-sm-6", "wow", "fadeInLeft"], ["src", "assets/images/blog/grid/pic4.jpg", "alt", ""], ["data-wow-duration", "2s", "data-wow-delay", "1.4s", 1, "col-xl-4", "col-lg-6", "col-sm-6", "wow", "fadeInLeft"], ["src", "assets/images/blog/grid/pic5.jpg", "alt", ""], ["data-wow-duration", "2s", "data-wow-delay", "1.2s", 1, "col-xl-4", "col-lg-6", "col-sm-6", "wow", "fadeInLeft"], ["src", "assets/images/blog/grid/pic6.jpg", "alt", ""], ["data-wow-duration", "2s", "data-wow-delay", "1.8s", 1, "col-xl-4", "col-lg-6", "col-sm-6", "wow", "fadeInLeft"], ["src", "assets/images/blog/grid/pic7.jpg", "alt", ""], ["src", "assets/images/blog/grid/pic8.jpg", "alt", ""], ["src", "assets/images/blog/grid/pic9.jpg", "alt", ""]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Get to Know Latest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " february 23, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Creativity Is More Than");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " february 22, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "The Influence Of Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " february 21, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Seven Easy Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " february 20, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "10 Quick Tips For Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " february 19, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "The Ultimate Revelation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " february 18, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "5 Reasons Why People Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " february 17, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "The Truth About Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " february 16, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Own Blog Developer For Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " february 15, 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "10 Common Myths About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6a+P":
/*!************************************************************************************!*\
  !*** ./src/app/web-developer/web-developer-index/web-developer-index.component.ts ***!
  \************************************************************************************/
/*! exports provided: WebDeveloperIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDeveloperIndexComponent", function() { return WebDeveloperIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/copywrite/copywrite.component */ "flWs");
/* harmony import */ var _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/user-card/user-card.component */ "IdUB");









class WebDeveloperIndexComponent {
    constructor() {
        this.profile = {
            logo: "logo-5.png",
            profile: "web-developer"
        };
        this.member = {
            image: "",
            logo: "pic9.jpg",
            designation: "Web Developer",
            age: "29",
            dob: "",
            residence: "",
            address: "",
            email: "",
            phone: "",
            skype: "",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "Thomas Grady",
            study: "",
            highes_degree: "",
            profile: "web-developer"
        };
    }
    ngOnInit() {
        (function ($) {
            /* setTimeout(function(){ */
            var c = document.getElementById("c");
            var ctx = c.getContext("2d");
            //making the canvas full screen
            c.height = window.innerHeight;
            c.width = window.innerWidth;
            //chinese characters - taken from the unicode charset
            var chinese1 = "df65g4ad6hgadh331687hat646n4f644865g6satfd5h4asr6tynm4s9yfj8";
            //converting the string into an array of single characters
            var chinese = chinese1.split("");
            var font_size = 14;
            var columns = c.width / font_size; //number of columns for the rain
            //an array of drops - one per column
            var drops = [];
            //x below is the x coordinate
            //1 = y co-ordinate of the drop(same for every drop initially)
            for (var x = 0; x < columns; x++)
                drops[x] = 1;
            //drawing the characters
            function draw() {
                //Black BG for the canvas
                //translucent BG to show trail
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                ctx.fillRect(0, 0, c.width, c.height);
                ctx.fillStyle = "#766100"; //green text
                ctx.font = font_size + "px arial";
                //looping over drops
                for (var i = 0; i < drops.length; i++) {
                    //a random chinese character to print
                    var text = chinese[Math.floor(Math.random() * chinese.length)];
                    //x = i*font_size, y = value of drops[i]*font_size
                    ctx.fillText(text, i * font_size, drops[i] * font_size);
                    //sending the drop back to the top randomly after it has crossed the screen
                    //adding a randomness to the reset to make the drops scattered on the Y axis
                    if (drops[i] * font_size > c.height && Math.random() > 0.975)
                        drops[i] = 0;
                    //incrementing Y coordinate
                    drops[i]++;
                }
            }
            setInterval(draw, 33);
            /* }, 500);   */
        })(jQuery);
    }
}
WebDeveloperIndexComponent.??fac = function WebDeveloperIndexComponent_Factory(t) { return new (t || WebDeveloperIndexComponent)(); };
WebDeveloperIndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WebDeveloperIndexComponent, selectors: [["app-web-developer-index"]], decls: 17, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "banner-section", "coad-bnr"], ["id", "c", 1, "coad-bg"], [1, "banner-inner", "bnr-left"], [1, "sub-title"], [1, "text-gradient"], [1, "title"], [1, "site-button", "outline", "button-md", "outline-half", 3, "routerLink"]], template: function WebDeveloperIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Amine Abouothmane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "software engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Check My Cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-copywrite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-user-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.member);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__["CopywriteComponent"], _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__["UserCardComponent"]], styles: ["/*===================== \r\n\tPrimary bg color \r\n=====================*/\r\n:root{\r\n\t--primary: #ffbf36;\r\n}\r\n/* Hex */\r\n.menuleft:after,\r\n#loading-area > div,\r\n.bg-primary,\r\na.bg-primary:hover,\r\n.overlay-primary-light:after,\r\n.overlay-primary-middle:after,\r\n.overlay-primary-dark:after,\r\n.site-button,\r\n.owl-theme.dots-style-1 .owl-dots .owl-dot.active span, \r\n.owl-theme.dots-style-1 .owl-dots .owl-dot:hover span{\r\n    background-color: #ffbf36;\r\n}\r\n/*Hex color :hover */\r\n.site-button:active,\r\n.site-button:hover,\r\n.site-button:focus,\r\n.active > .site-button,\r\n.bg-primary-dark,\r\n.sidenav .closebtn:hover,\r\n.style-2 .dez-social-icon.dez-border li a:hover{\r\n    background-color: #ffb820;\r\n}\r\n/*===================== \r\n\tPremery text color \r\n=====================*/\r\na,\r\n.text-primary,\r\n.site-button.outline,\r\n.dez-countdown .date .time,\r\n.lg-outer .lg-toogle-thumb,\r\n.lg-outer .lg-toogle-thumb:hover,\r\n.dlab-bnr-inr .breadcrumb-row ul li:after, \r\n.dlab-bnr-inr .breadcrumb-row ul li:last-child,\r\n.testimonial-1 .testimonial-position,\r\n.resume-tag .resume-tag-btn strong,\r\n.knowledge-tag li:after,\r\n.site-filters .active > [class*=\"site-button\"]{\r\n    color: #ffbf36;\r\n}\r\n/*===================== \r\n\tBorder Color color \r\n=====================*/\r\n.timeline .box-left,\r\n.timeline .box-left:after,\r\n.site-button.outline,\r\n.dez-countdown .date .time{\r\n\tborder-color:#ffbf36;\r\n}\r\n.lg-outer .lg-thumb-item.active, \r\n.lg-outer .lg-thumb-item:hover{\r\n\tborder-color: #ffbf36;\r\n}\r\n/* Gradiyant Bottom To Top */\r\n.dlab-gallery-box:after,\r\n.service-box:not(.contact-box):after, \r\n.service-box:before,\r\n.text-gradient,\r\n.resume-user .site-button,\r\n.extra-nav ul li a.menu-btn{\r\n    background-image: linear-gradient(to top,#ffb820 0,#ffbf36 100%,#ffb820 100%);\r\n    background-size: 200%;\r\n}\r\n.contact-form .form-group:after,\r\n.button-gradient, \r\n.progress-bar{\r\n    background-image: linear-gradient(to right,#ffb820 0,#ffbf36 100%,#ffb820 500%);\r\n    background-size: 200%;\r\n}\r\nsvg.radial-progress:nth-of-type(6n+1) circle{\r\n\tstroke: #ffbf36;\r\n}\r\n.resume-tag .resume-tag-btn,\r\n.knowledge-tag li{\r\n\tbackground-color:rgba(255,191,54,0.1);\r\n\tborder-color:rgba(255,191,54,0.2);\r\n}\r\n/* text dark */\r\n.styleswitcher-right .switcher-btn-bx a,\r\n.resume-user .site-button,\r\n.extra-nav ul li a.menu-btn,\r\n.text-dark .social-sidebar ul li a,\r\n.text-dark .copyright-fixed,\r\n.text-dark .banner-inner .title,\r\n.text-dark .banner-inner .sub-title,\r\n.text-dark .extra-nav ul li a:not(.menu-btn){\r\n\tcolor:#000000;\r\n}\r\n.menu-btn .menu span{\r\n\tbackground:#000;\r\n}\r\n#loading-area {\r\n\tbackground-image: url('logo-5.png'), url('line-bgw-5.png');\r\n}\r\n.content-body-inner{\r\n    background-image: url('line-bgb-5.png');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWRldmVsb3Blci93ZWItZGV2ZWxvcGVyLWluZGV4L3dlYi1kZXZlbG9wZXItaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7c0JBRXNCO0FBQ3RCO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0EsUUFBUTtBQUNSOzs7Ozs7Ozs7O0lBVUkseUJBQXlCO0FBQzdCO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7Ozs7O0lBT0kseUJBQXlCO0FBQzdCO0FBQ0E7O3NCQUVzQjtBQUN0Qjs7Ozs7Ozs7Ozs7O0lBWUksY0FBYztBQUNsQjtBQUVBOztzQkFFc0I7QUFDdEI7Ozs7Q0FJQyxvQkFBb0I7QUFDckI7QUFFQTs7Q0FFQyxxQkFBcUI7QUFDdEI7QUFDQSw0QkFBNEI7QUFDNUI7Ozs7OztJQU1JLDZFQUE2RTtJQUM3RSxxQkFBcUI7QUFDekI7QUFDQTs7O0lBR0ksK0VBQStFO0lBQy9FLHFCQUFxQjtBQUN6QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBOztDQUVDLHFDQUFxQztDQUNyQyxpQ0FBaUM7QUFDbEM7QUFDQSxjQUFjO0FBQ2Q7Ozs7Ozs7O0NBUUMsYUFBYTtBQUNkO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQywwREFBK0c7QUFDaEg7QUFDQTtJQUNJLHVDQUF1RTtBQUMzRSIsImZpbGUiOiJzcmMvYXBwL3dlYi1kZXZlbG9wZXIvd2ViLWRldmVsb3Blci1pbmRleC93ZWItZGV2ZWxvcGVyLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRQcmltYXJ5IGJnIGNvbG9yIFxyXG49PT09PT09PT09PT09PT09PT09PT0qL1xyXG46cm9vdHtcclxuXHQtLXByaW1hcnk6ICNmZmJmMzY7XHJcbn1cclxuLyogSGV4ICovXHJcbi5tZW51bGVmdDphZnRlcixcclxuI2xvYWRpbmctYXJlYSA+IGRpdixcclxuLmJnLXByaW1hcnksXHJcbmEuYmctcHJpbWFyeTpob3ZlcixcclxuLm92ZXJsYXktcHJpbWFyeS1saWdodDphZnRlcixcclxuLm92ZXJsYXktcHJpbWFyeS1taWRkbGU6YWZ0ZXIsXHJcbi5vdmVybGF5LXByaW1hcnktZGFyazphZnRlcixcclxuLnNpdGUtYnV0dG9uLFxyXG4ub3dsLXRoZW1lLmRvdHMtc3R5bGUtMSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sIFxyXG4ub3dsLXRoZW1lLmRvdHMtc3R5bGUtMSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMzY7XHJcbn1cclxuLypIZXggY29sb3IgOmhvdmVyICovXHJcbi5zaXRlLWJ1dHRvbjphY3RpdmUsXHJcbi5zaXRlLWJ1dHRvbjpob3ZlcixcclxuLnNpdGUtYnV0dG9uOmZvY3VzLFxyXG4uYWN0aXZlID4gLnNpdGUtYnV0dG9uLFxyXG4uYmctcHJpbWFyeS1kYXJrLFxyXG4uc2lkZW5hdiAuY2xvc2VidG46aG92ZXIsXHJcbi5zdHlsZS0yIC5kZXotc29jaWFsLWljb24uZGV6LWJvcmRlciBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjgyMDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRQcmVtZXJ5IHRleHQgY29sb3IgXHJcbj09PT09PT09PT09PT09PT09PT09PSovXHJcbmEsXHJcbi50ZXh0LXByaW1hcnksXHJcbi5zaXRlLWJ1dHRvbi5vdXRsaW5lLFxyXG4uZGV6LWNvdW50ZG93biAuZGF0ZSAudGltZSxcclxuLmxnLW91dGVyIC5sZy10b29nbGUtdGh1bWIsXHJcbi5sZy1vdXRlciAubGctdG9vZ2xlLXRodW1iOmhvdmVyLFxyXG4uZGxhYi1ibnItaW5yIC5icmVhZGNydW1iLXJvdyB1bCBsaTphZnRlciwgXHJcbi5kbGFiLWJuci1pbnIgLmJyZWFkY3J1bWItcm93IHVsIGxpOmxhc3QtY2hpbGQsXHJcbi50ZXN0aW1vbmlhbC0xIC50ZXN0aW1vbmlhbC1wb3NpdGlvbixcclxuLnJlc3VtZS10YWcgLnJlc3VtZS10YWctYnRuIHN0cm9uZyxcclxuLmtub3dsZWRnZS10YWcgbGk6YWZ0ZXIsXHJcbi5zaXRlLWZpbHRlcnMgLmFjdGl2ZSA+IFtjbGFzcyo9XCJzaXRlLWJ1dHRvblwiXXtcclxuICAgIGNvbG9yOiAjZmZiZjM2O1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRCb3JkZXIgQ29sb3IgY29sb3IgXHJcbj09PT09PT09PT09PT09PT09PT09PSovXHJcbi50aW1lbGluZSAuYm94LWxlZnQsXHJcbi50aW1lbGluZSAuYm94LWxlZnQ6YWZ0ZXIsXHJcbi5zaXRlLWJ1dHRvbi5vdXRsaW5lLFxyXG4uZGV6LWNvdW50ZG93biAuZGF0ZSAudGltZXtcclxuXHRib3JkZXItY29sb3I6I2ZmYmYzNjtcclxufVxyXG5cclxuLmxnLW91dGVyIC5sZy10aHVtYi1pdGVtLmFjdGl2ZSwgXHJcbi5sZy1vdXRlciAubGctdGh1bWItaXRlbTpob3ZlcntcclxuXHRib3JkZXItY29sb3I6ICNmZmJmMzY7XHJcbn1cclxuLyogR3JhZGl5YW50IEJvdHRvbSBUbyBUb3AgKi9cclxuLmRsYWItZ2FsbGVyeS1ib3g6YWZ0ZXIsXHJcbi5zZXJ2aWNlLWJveDpub3QoLmNvbnRhY3QtYm94KTphZnRlciwgXHJcbi5zZXJ2aWNlLWJveDpiZWZvcmUsXHJcbi50ZXh0LWdyYWRpZW50LFxyXG4ucmVzdW1lLXVzZXIgLnNpdGUtYnV0dG9uLFxyXG4uZXh0cmEtbmF2IHVsIGxpIGEubWVudS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNmZmI4MjAgMCwjZmZiZjM2IDEwMCUsI2ZmYjgyMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxufVxyXG4uY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwOmFmdGVyLFxyXG4uYnV0dG9uLWdyYWRpZW50LCBcclxuLnByb2dyZXNzLWJhcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZmZiODIwIDAsI2ZmYmYzNiAxMDAlLCNmZmI4MjAgNTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbn1cclxuc3ZnLnJhZGlhbC1wcm9ncmVzczpudGgtb2YtdHlwZSg2bisxKSBjaXJjbGV7XHJcblx0c3Ryb2tlOiAjZmZiZjM2O1xyXG59XHJcbi5yZXN1bWUtdGFnIC5yZXN1bWUtdGFnLWJ0bixcclxuLmtub3dsZWRnZS10YWcgbGl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxOTEsNTQsMC4xKTtcclxuXHRib3JkZXItY29sb3I6cmdiYSgyNTUsMTkxLDU0LDAuMik7XHJcbn1cclxuLyogdGV4dCBkYXJrICovXHJcbi5zdHlsZXN3aXRjaGVyLXJpZ2h0IC5zd2l0Y2hlci1idG4tYnggYSxcclxuLnJlc3VtZS11c2VyIC5zaXRlLWJ1dHRvbixcclxuLmV4dHJhLW5hdiB1bCBsaSBhLm1lbnUtYnRuLFxyXG4udGV4dC1kYXJrIC5zb2NpYWwtc2lkZWJhciB1bCBsaSBhLFxyXG4udGV4dC1kYXJrIC5jb3B5cmlnaHQtZml4ZWQsXHJcbi50ZXh0LWRhcmsgLmJhbm5lci1pbm5lciAudGl0bGUsXHJcbi50ZXh0LWRhcmsgLmJhbm5lci1pbm5lciAuc3ViLXRpdGxlLFxyXG4udGV4dC1kYXJrIC5leHRyYS1uYXYgdWwgbGkgYTpub3QoLm1lbnUtYnRuKXtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG59XHJcblxyXG4ubWVudS1idG4gLm1lbnUgc3BhbntcclxuXHRiYWNrZ3JvdW5kOiMwMDA7XHJcbn1cclxuI2xvYWRpbmctYXJlYSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby01LnBuZyksIHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvbGluZS1iZ3ctNS5wbmcpO1xyXG59XHJcbi5jb250ZW50LWJvZHktaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2xpbmUtYmdiLTUucG5nKTtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebDeveloperIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-developer-index',
                templateUrl: './web-developer-index.component.html',
                styleUrls: ['./web-developer-index.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A8ej":
/*!*********************************************************!*\
  !*** ./src/app/elements/timeline/timeline.component.ts ***!
  \*********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TimelineComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const timeline_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](timeline_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](timeline_r1.organization_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](timeline_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](timeline_r1.description);
} }
class TimelineComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimelineComponent.??fac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["class", "timeline", 4, "ngFor", "ngForOf"], [1, "timeline"], [1, "box-left"], [1, "title", "text-primary"], [1, "box-right"], [1, "title", "text-uppercase"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, TimelineComponent_div_0_Template, 11, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Az6h":
/*!***********************************************************************!*\
  !*** ./src/app/security/security-resume/security-resume.component.ts ***!
  \***********************************************************************/
/*! exports provided: SecurityResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityResumeComponent", function() { return SecurityResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/progress-bar/line/line.component */ "yMhq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/timeline/timeline.component */ "A8ej");
/* harmony import */ var _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/progress-bar/circle/circle.component */ "mmjH");
/* harmony import */ var _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/tags/tags.component */ "MhBU");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");












class SecurityResumeComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-4.png",
            profile: "security"
        };
        this.page_banner = {
            title: "Resume",
            profile: "security",
        };
        this.member = {
            image: "user-img-5.jpg",
            logo: "",
            designation: "",
            age: "29",
            dob: "01.07.1990",
            residence: "USA",
            address: "AVE 11, NEW YORK, USA",
            email: "INFO@EXAMPLE.COM",
            phone: "(+01) 123 456 7890",
            skype: "ALEX.SMITH",
            whatsapp: "",
            about_me: 'Hi! My name is <span class="text-primary">Thomas Grady</span>. I am a Web Developer, and I\'m very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.',
            intrests: "PLAYSTATION, READING",
            name: "Thomas Grady",
            study: "UNIVERSITY OF CHICAGO",
            highes_degree: "MASTER",
            profile: "security"
        };
        this.skills = [
            {
                title: "SECURITY",
                score: "70",
            },
            {
                title: "Communication",
                score: "90",
            },
            {
                title: "Law Enforcement",
                score: "45",
            },
            {
                title: "Surveillance",
                score: "67",
            },
        ];
        this.education = [
            {
                title: "Fronted Development",
                year: "2019",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Graphic Design",
                year: "2014",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Senior Ui/Ux Designer",
                year: "2012",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Junior Ui/Ux Designer",
                year: "2011",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
        ];
        this.experience = [
            {
                title: "Fronted Development",
                year: "2019",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Graphic Design",
                year: "2014",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
        ];
        this.language_known = [
            {
                title: "English",
                score: "60",
            },
            {
                title: "French",
                score: "45",
            },
            {
                title: "German",
                score: "75",
            },
            {
                title: "Italian",
                score: "95",
            },
        ];
        this.knowledge = [
            "Website hosting",
            "iOS and android apps",
            "Create logo design",
            "Design for print",
            "Modern and mobile-ready",
            "Advertising services include",
            "Graphics and animations",
            "Search engine marketing",
        ];
    }
    ngOnInit() {
    }
}
SecurityResumeComponent.??fac = function SecurityResumeComponent_Factory(t) { return new (t || SecurityResumeComponent)(); };
SecurityResumeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SecurityResumeComponent, selectors: [["app-security-resume"]], decls: 90, vars: 20, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "row"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-6", "col-lg-12", "wow", "fadeInUp"], [1, "sticky-top", "m-lg-b30"], ["alt", "", 3, "src"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-xl-6", "col-lg-12", "m-b30", "wow", "fadeInUp"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "m-b0", 3, "innerHTML"], [1, "m-t50", "m-xs-t30"], [1, "site-button", "button-gradient", "button-md", "radius-no", 3, "routerLink"], [1, "site-button", "white", "button-md", "radius-no", 3, "routerLink"], [1, "section-full", "content-inner-1"], [1, "resume-tag"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.8s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.0s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"]], template: function SecurityResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "app-line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Check portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "BIRTHDAY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "LOCATION :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "INTERESTS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "STUDY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "AGE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "DEGREE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "MAIL :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "PHONE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "app-circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "KNOWLEDGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "app-tags", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.member.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.member.about_me, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/portfolio-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.intrests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.study);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.highes_degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.language_known);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.knowledge);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__["CircleComponent"], _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__["TagsComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3NlY3VyaXR5LXJlc3VtZS9zZWN1cml0eS1yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SecurityResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-resume',
                templateUrl: './security-resume.component.html',
                styleUrls: ['./security-resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "B7r3":
/*!**********************************************************************!*\
  !*** ./src/app/elements/banner/page-banner/page-banner.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBannerComponent", function() { return PageBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageBannerComponent.??fac = function PageBannerComponent_Factory(t) { return new (t || PageBannerComponent)(); };
PageBannerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageBannerComponent, selectors: [["app-page-banner"]], inputs: { data: "data" }, decls: 12, vars: 4, consts: [[1, "dlab-bnr-inr", "text-center"], [1, "container"], [1, "dlab-bnr-inr-entry", "align-m", "text-center"], [1, "text-white"], [1, "breadcrumb-row"], [1, "list-inline"], [3, "href"]], template: function PageBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-content", ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "index-", ctx.data.profile, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Jhbm5lci9wYWdlLWJhbm5lci9wYWdlLWJhbm5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-banner',
                templateUrl: './page-banner.component.html',
                styleUrls: ['./page-banner.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "G5fZ":
/*!*******************************************************!*\
  !*** ./src/app/elements/loading/loading.component.ts ***!
  \*******************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                jQuery('#loading-area').remove();
            }, 0);
        })(jQuery);
    }
}
LoadingComponent.??fac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 4, vars: 0, consts: [["id", "loading-area"], [1, "counter"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HK96":
/*!*************************************************************************!*\
  !*** ./src/app/elements/fun-fact-counter/fun-fact-counter.component.ts ***!
  \*************************************************************************/
/*! exports provided: FunFactCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunFactCounterComponent", function() { return FunFactCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FunFactCounterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const funFacts_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](funFacts_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](funFacts_r1.title);
} }
class FunFactCounterComponent {
    constructor() { }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                jQuery('.counter').counterUp({
                    delay: 10,
                    time: 3000
                });
            }, 500);
        })(jQuery);
    }
}
FunFactCounterComponent.??fac = function FunFactCounterComponent_Factory(t) { return new (t || FunFactCounterComponent)(); };
FunFactCounterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FunFactCounterComponent, selectors: [["app-fun-fact-counter"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-xl-3 col-lg-6 col-sm-6 col-6 m-lg-b30 m-xs-b15 wow fadeInUp", "data-wow-duration", "2s", "data-wow-delay", "0.2s", 4, "ngFor", "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-3", "col-lg-6", "col-sm-6", "col-6", "m-lg-b30", "m-xs-b15", "wow", "fadeInUp"], [1, "counter-style-1"], [1, ""], [1, "counter", "text-gradient"], [1, "counter-text"]], template: function FunFactCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FunFactCounterComponent_div_1_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Z1bi1mYWN0LWNvdW50ZXIvZnVuLWZhY3QtY291bnRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FunFactCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fun-fact-counter',
                templateUrl: './fun-fact-counter.component.html',
                styleUrls: ['./fun-fact-counter.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IIBm":
/*!********************************************************************************************!*\
  !*** ./src/app/web-developer/web-developer-portfolio/web-developer-portfolio.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WebDeveloperPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDeveloperPortfolioComponent", function() { return WebDeveloperPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WebDeveloperPortfolioComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const portfolio_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("card-container col-xl-4 col-lg-6 col-md-6 col-sm-6 ", portfolio_r1.filter_class, " wow fadeInLeft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/common/", portfolio_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("exthumbimage", "assets/images/gallery/common/", portfolio_r1.image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/common/orignal/", portfolio_r1.src_image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.category);
} }
class WebDeveloperPortfolioComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-5.png",
            profile: "web-developer"
        };
        this.page_banner = {
            title: "Portfolio",
            profile: "web-developer",
        };
        this.categories = [
            {
                title: "Design",
                filter_title: "design",
            },
            {
                title: "Photography",
                filter_title: "photography",
            },
            {
                title: "development",
                filter_title: "Development",
            },
        ];
        this.portfolios = [
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic1.jpg",
                src_image: "main-pic1.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic2.jpg",
                src_image: "main-pic2.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic3.jpg",
                src_image: "main-pic3.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic4.jpg",
                src_image: "main-pic4.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic5.jpg",
                src_image: "main-pic5.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic6.jpg",
                src_image: "main-pic6.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic7.jpg",
                src_image: "main-pic7.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic8.jpg",
                src_image: "main-pic8.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic9.jpg",
                src_image: "main-pic9.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
        ];
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                var self = jQuery("#masonry, .masonry");
                if (jQuery('.card-container').length) {
                    self.imagesLoaded(function () {
                        self.masonry({
                            gutterWidth: 15,
                            isAnimated: true,
                            itemSelector: ".card-container"
                        });
                    });
                }
                jQuery(".filters").on('click', 'li', function (e) {
                    var filter = jQuery(this).attr("data-filter");
                    self.masonryFilter({
                        filter: function () {
                            if (!filter)
                                return true;
                            return jQuery(this).hasClass(filter);
                        }
                    });
                });
            }, 500);
        })(jQuery);
    }
}
WebDeveloperPortfolioComponent.??fac = function WebDeveloperPortfolioComponent_Factory(t) { return new (t || WebDeveloperPortfolioComponent)(); };
WebDeveloperPortfolioComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WebDeveloperPortfolioComponent, selectors: [["app-web-developer-portfolio"]], decls: 39, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head", "m-b20"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "site-filters", "clearfix"], ["data-toggle", "buttons", 1, "filters"], ["data-filter", "", 1, "btn", "active"], ["type", "radio"], ["href", "javascript:void(0);", 1, "site-button-link"], ["data-filter", "design", 1, "btn"], ["data-filter", "photography", 1, "btn"], ["data-filter", "development", 1, "btn"], [1, "clearfix"], ["id", "masonry", 1, "dlab-gallery-listing", "gallery", "lightgallery", "row", "sp40"], ["ngFor", "", 3, "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s"], [1, "dlab-box", "dlab-gallery-box"], [1, "dlab-media"], ["alt", "", 3, "src"], [1, "check-km", 3, "exthumbimage", "src", "title"], [1, "la", "la-plus"], [1, "dlab-info"], [1, "title"]], template: function WebDeveloperPortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Some of My ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Creative Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, WebDeveloperPortfolioComponent_ng_template_38_Template, 11, 9, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.portfolios);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1kZXZlbG9wZXIvd2ViLWRldmVsb3Blci1wb3J0Zm9saW8vd2ViLWRldmVsb3Blci1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebDeveloperPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-developer-portfolio',
                templateUrl: './web-developer-portfolio.component.html',
                styleUrls: ['./web-developer-portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IdUB":
/*!***********************************************************!*\
  !*** ./src/app/elements/user-card/user-card.component.ts ***!
  \***********************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserCardComponent.??fac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(); };
UserCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserCardComponent, selectors: [["app-user-card"]], inputs: { data: "data" }, decls: 9, vars: 4, consts: [[1, "resume-user"], [1, "resume-info"], ["alt", "", 3, "src"], [1, "title"], [1, "text-primary"], [1, "site-button", 3, "routerLink"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Check portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/", ctx.data.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.designation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/portfolio-", ctx.data.profile, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3VzZXItY2FyZC91c2VyLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-card',
                templateUrl: './user-card.component.html',
                styleUrls: ['./user-card.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JE0/":
/*!*********************************************************!*\
  !*** ./src/app/elements/icon-box/icon-box.component.ts ***!
  \*********************************************************/
/*! exports provided: IconBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBoxComponent", function() { return IconBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IconBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const icons_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-content", icons_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("las ", icons_r1.icon_class, " text-gradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", icons_r1.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", icons_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
class IconBoxComponent {
    constructor() {
        this.icon_box = [
            {
                title: "Address",
                description: "8901 Marmora Road Chi Minh City, Vietnam",
                icon_class: "la-map-marker",
            },
            {
                title: "Email",
                description: '<a href="javascript:void(0);">info@example.com</a><br/><a href="javascript:void(0);">info@example.com</a>',
                icon_class: "la-envelope-open",
            },
            {
                title: "Phone",
                description: "(+1) 123 456 7890<br/>(+91) 423 547 8909",
                icon_class: "la-phone-volume",
            },
        ];
    }
    ngOnInit() {
    }
}
IconBoxComponent.??fac = function IconBoxComponent_Factory(t) { return new (t || IconBoxComponent)(); };
IconBoxComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: IconBoxComponent, selectors: [["app-icon-box"]], decls: 2, vars: 1, consts: [[1, "row", "sp40"], ["class", "col-xl-4 col-lg-6 col-md-6 wow fadeIn", "data-wow-duration", "2s", "data-wow-delay", "0.2s", 4, "ngFor", "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-4", "col-lg-6", "col-md-6", "wow", "fadeIn"], [1, "icon-bx-wraper", "service-box", "m-b40", "contact-box"], [1, "icon-content"], [1, "dlab-tilte", "text-uppercase"], [3, "innerHTML"]], template: function IconBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, IconBoxComponent_div_1_Template, 7, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.icon_box);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2ljb24tYm94L2ljb24tYm94LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IconBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon-box',
                templateUrl: './icon-box.component.html',
                styleUrls: ['./icon-box.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Kkq/":
/*!*********************************************************************!*\
  !*** ./src/app/security/security-index/security-index.component.ts ***!
  \*********************************************************************/
/*! exports provided: SecurityIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityIndexComponent", function() { return SecurityIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/copywrite/copywrite.component */ "flWs");
/* harmony import */ var _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/user-card/user-card.component */ "IdUB");









class SecurityIndexComponent {
    constructor() {
        this.profile = {
            logo: "logo-4.png",
            profile: "security"
        };
        this.member = {
            image: "",
            logo: "pic5.jpg",
            designation: "security officer",
            age: "29",
            dob: "",
            residence: "",
            address: "",
            email: "",
            phone: "",
            skype: "",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "Thomas Grady",
            study: "",
            highes_degree: "",
            profile: "security"
        };
    }
    ngOnInit() {
    }
}
SecurityIndexComponent.??fac = function SecurityIndexComponent_Factory(t) { return new (t || SecurityIndexComponent)(); };
SecurityIndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SecurityIndexComponent, selectors: [["app-security-index"]], decls: 19, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "banner-section", "security-bnr"], ["autoplay", "", "loop", "", "id", "video-background", "muted", "", "plays-inline", ""], ["src", "assets/media/video-2.mp4", "type", "video/mp4"], [1, "banner-inner", "bnr-left"], [1, "sub-title"], [1, "text-gradient"], [1, "title"], [1, "site-button", "outline", "button-md", "outline-half", 3, "routerLink"], ["src", "assets/images/background/bg4.png", "alt", "", 1, "main-content"]], template: function SecurityIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Thomas Grady");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "security officer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Check My Cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "app-copywrite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "app-user-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.member);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__["CopywriteComponent"], _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__["UserCardComponent"]], styles: ["/*===================== \r\n\tPrimary bg color \r\n=====================*/\r\n:root{\r\n\t--primary: #d2dd51;\r\n}\r\n/* Hex */\r\n.menuleft:after,\r\n#loading-area > div,\r\n.bg-primary,\r\na.bg-primary:hover,\r\n.overlay-primary-light:after,\r\n.overlay-primary-middle:after,\r\n.overlay-primary-dark:after,\r\n.site-button,\r\n.owl-theme.dots-style-1 .owl-dots .owl-dot.active span, \r\n.owl-theme.dots-style-1 .owl-dots .owl-dot:hover span{\r\n    background-color: #d2dd51;\r\n}\r\n/*Hex color :hover */\r\n.site-button:active,\r\n.site-button:hover,\r\n.site-button:focus,\r\n.active > .site-button,\r\n.bg-primary-dark,\r\n.sidenav .closebtn:hover,\r\n.style-2 .dez-social-icon.dez-border li a:hover{\r\n    background-color: #bcc926;\r\n}\r\n/*===================== \r\n\tPremery text color \r\n=====================*/\r\na,\r\n.text-primary,\r\n.site-button.outline,\r\n.dez-countdown .date .time,\r\n.lg-outer .lg-toogle-thumb,\r\n.lg-outer .lg-toogle-thumb:hover,\r\n.dlab-bnr-inr .breadcrumb-row ul li:after, \r\n.dlab-bnr-inr .breadcrumb-row ul li:last-child,\r\n.testimonial-1 .testimonial-position,\r\n.resume-tag .resume-tag-btn strong,\r\n.knowledge-tag li:after,\r\n.site-filters .active > [class*=\"site-button\"]{\r\n    color: #d2dd51;\r\n}\r\n/*===================== \r\n\tBorder Color color \r\n=====================*/\r\n.timeline .box-left,\r\n.timeline .box-left:after,\r\n.site-button.outline,\r\n.dez-countdown .date .time{\r\n\tborder-color:#d2dd51;\r\n}\r\n.lg-outer .lg-thumb-item.active, \r\n.lg-outer .lg-thumb-item:hover{\r\n\tborder-color: #d2dd51;\r\n}\r\n/* Gradiyant Bottom To Top */\r\n.dlab-gallery-box:after,\r\n.service-box:not(.contact-box):after, \r\n.service-box:before,\r\n.text-gradient,\r\n.resume-user .site-button,\r\n.extra-nav ul li a.menu-btn{\r\n    background-image: linear-gradient(to top,#bcc926 0,#d2dd51 100%,#bcc926 100%);\r\n    background-size: 200%;\r\n}\r\n.contact-form .form-group:after,\r\n.button-gradient, \r\n.progress-bar{\r\n    background-image: linear-gradient(to right,#bcc926 0,#d2dd51 100%,#bcc926 500%);\r\n    background-size: 200%;\r\n}\r\nsvg.radial-progress:nth-of-type(6n+1) circle{\r\n\tstroke: #d2dd51;\r\n}\r\n.resume-tag .resume-tag-btn,\r\n.knowledge-tag li{\r\n\tbackground-color:rgba(210,221,81,0.05);\r\n\tborder-color:rgba(210,221,81,0.2);\r\n}\r\n/* text dark */\r\n.styleswitcher-right .switcher-btn-bx a,\r\n.resume-user .site-button,\r\n.extra-nav ul li a.menu-btn,\r\n.text-dark .social-sidebar ul li a,\r\n.text-dark .copyright-fixed,\r\n.text-dark .banner-inner .title,\r\n.text-dark .banner-inner .sub-title,\r\n.text-dark .extra-nav ul li a:not(.menu-btn){\r\n\tcolor:#000000;\r\n}\r\n.menu-btn .menu span{\r\n\tbackground:#000;\r\n}\r\n#loading-area {\r\n\tbackground-image: url('logo-4.png'), url('line-bgw-4.png');\r\n}\r\n.content-body-inner{\r\n    background-image: url('line-bgb-4.png');\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdXJpdHkvc2VjdXJpdHktaW5kZXgvc2VjdXJpdHktaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7c0JBRXNCO0FBQ3RCO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUEsUUFBUTtBQUNSOzs7Ozs7Ozs7O0lBVUkseUJBQXlCO0FBQzdCO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7Ozs7O0lBT0kseUJBQXlCO0FBQzdCO0FBQ0E7O3NCQUVzQjtBQUN0Qjs7Ozs7Ozs7Ozs7O0lBWUksY0FBYztBQUNsQjtBQUVBOztzQkFFc0I7QUFDdEI7Ozs7Q0FJQyxvQkFBb0I7QUFDckI7QUFFQTs7Q0FFQyxxQkFBcUI7QUFDdEI7QUFDQSw0QkFBNEI7QUFDNUI7Ozs7OztJQU1JLDZFQUE2RTtJQUM3RSxxQkFBcUI7QUFDekI7QUFDQTs7O0lBR0ksK0VBQStFO0lBQy9FLHFCQUFxQjtBQUN6QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBOztDQUVDLHNDQUFzQztDQUN0QyxpQ0FBaUM7QUFDbEM7QUFDQSxjQUFjO0FBQ2Q7Ozs7Ozs7O0NBUUMsYUFBYTtBQUNkO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQywwREFBK0c7QUFDaEg7QUFDQTtJQUNJLHVDQUF1RTtBQUMzRSIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3NlY3VyaXR5LWluZGV4L3NlY3VyaXR5LWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRQcmltYXJ5IGJnIGNvbG9yIFxyXG49PT09PT09PT09PT09PT09PT09PT0qL1xyXG46cm9vdHtcclxuXHQtLXByaW1hcnk6ICNkMmRkNTE7XHJcbn1cclxuXHJcbi8qIEhleCAqL1xyXG4ubWVudWxlZnQ6YWZ0ZXIsXHJcbiNsb2FkaW5nLWFyZWEgPiBkaXYsXHJcbi5iZy1wcmltYXJ5LFxyXG5hLmJnLXByaW1hcnk6aG92ZXIsXHJcbi5vdmVybGF5LXByaW1hcnktbGlnaHQ6YWZ0ZXIsXHJcbi5vdmVybGF5LXByaW1hcnktbWlkZGxlOmFmdGVyLFxyXG4ub3ZlcmxheS1wcmltYXJ5LWRhcms6YWZ0ZXIsXHJcbi5zaXRlLWJ1dHRvbixcclxuLm93bC10aGVtZS5kb3RzLXN0eWxlLTEgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCBcclxuLm93bC10aGVtZS5kb3RzLXN0eWxlLTEgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkZDUxO1xyXG59XHJcbi8qSGV4IGNvbG9yIDpob3ZlciAqL1xyXG4uc2l0ZS1idXR0b246YWN0aXZlLFxyXG4uc2l0ZS1idXR0b246aG92ZXIsXHJcbi5zaXRlLWJ1dHRvbjpmb2N1cyxcclxuLmFjdGl2ZSA+IC5zaXRlLWJ1dHRvbixcclxuLmJnLXByaW1hcnktZGFyayxcclxuLnNpZGVuYXYgLmNsb3NlYnRuOmhvdmVyLFxyXG4uc3R5bGUtMiAuZGV6LXNvY2lhbC1pY29uLmRlei1ib3JkZXIgbGkgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiY2M5MjY7XHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT0gXHJcblx0UHJlbWVyeSB0ZXh0IGNvbG9yIFxyXG49PT09PT09PT09PT09PT09PT09PT0qL1xyXG5hLFxyXG4udGV4dC1wcmltYXJ5LFxyXG4uc2l0ZS1idXR0b24ub3V0bGluZSxcclxuLmRlei1jb3VudGRvd24gLmRhdGUgLnRpbWUsXHJcbi5sZy1vdXRlciAubGctdG9vZ2xlLXRodW1iLFxyXG4ubGctb3V0ZXIgLmxnLXRvb2dsZS10aHVtYjpob3ZlcixcclxuLmRsYWItYm5yLWluciAuYnJlYWRjcnVtYi1yb3cgdWwgbGk6YWZ0ZXIsIFxyXG4uZGxhYi1ibnItaW5yIC5icmVhZGNydW1iLXJvdyB1bCBsaTpsYXN0LWNoaWxkLFxyXG4udGVzdGltb25pYWwtMSAudGVzdGltb25pYWwtcG9zaXRpb24sXHJcbi5yZXN1bWUtdGFnIC5yZXN1bWUtdGFnLWJ0biBzdHJvbmcsXHJcbi5rbm93bGVkZ2UtdGFnIGxpOmFmdGVyLFxyXG4uc2l0ZS1maWx0ZXJzIC5hY3RpdmUgPiBbY2xhc3MqPVwic2l0ZS1idXR0b25cIl17XHJcbiAgICBjb2xvcjogI2QyZGQ1MTtcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT0gXHJcblx0Qm9yZGVyIENvbG9yIGNvbG9yIFxyXG49PT09PT09PT09PT09PT09PT09PT0qL1xyXG4udGltZWxpbmUgLmJveC1sZWZ0LFxyXG4udGltZWxpbmUgLmJveC1sZWZ0OmFmdGVyLFxyXG4uc2l0ZS1idXR0b24ub3V0bGluZSxcclxuLmRlei1jb3VudGRvd24gLmRhdGUgLnRpbWV7XHJcblx0Ym9yZGVyLWNvbG9yOiNkMmRkNTE7XHJcbn1cclxuXHJcbi5sZy1vdXRlciAubGctdGh1bWItaXRlbS5hY3RpdmUsIFxyXG4ubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW06aG92ZXJ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZDJkZDUxO1xyXG59XHJcbi8qIEdyYWRpeWFudCBCb3R0b20gVG8gVG9wICovXHJcbi5kbGFiLWdhbGxlcnktYm94OmFmdGVyLFxyXG4uc2VydmljZS1ib3g6bm90KC5jb250YWN0LWJveCk6YWZ0ZXIsIFxyXG4uc2VydmljZS1ib3g6YmVmb3JlLFxyXG4udGV4dC1ncmFkaWVudCxcclxuLnJlc3VtZS11c2VyIC5zaXRlLWJ1dHRvbixcclxuLmV4dHJhLW5hdiB1bCBsaSBhLm1lbnUtYnRue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjYmNjOTI2IDAsI2QyZGQ1MSAxMDAlLCNiY2M5MjYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuZm9ybS1ncm91cDphZnRlcixcclxuLmJ1dHRvbi1ncmFkaWVudCwgXHJcbi5wcm9ncmVzcy1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2JjYzkyNiAwLCNkMmRkNTEgMTAwJSwjYmNjOTI2IDUwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG59XHJcbnN2Zy5yYWRpYWwtcHJvZ3Jlc3M6bnRoLW9mLXR5cGUoNm4rMSkgY2lyY2xle1xyXG5cdHN0cm9rZTogI2QyZGQ1MTtcclxufVxyXG4ucmVzdW1lLXRhZyAucmVzdW1lLXRhZy1idG4sXHJcbi5rbm93bGVkZ2UtdGFnIGxpe1xyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgyMTAsMjIxLDgxLDAuMDUpO1xyXG5cdGJvcmRlci1jb2xvcjpyZ2JhKDIxMCwyMjEsODEsMC4yKTtcclxufVxyXG4vKiB0ZXh0IGRhcmsgKi9cclxuLnN0eWxlc3dpdGNoZXItcmlnaHQgLnN3aXRjaGVyLWJ0bi1ieCBhLFxyXG4ucmVzdW1lLXVzZXIgLnNpdGUtYnV0dG9uLFxyXG4uZXh0cmEtbmF2IHVsIGxpIGEubWVudS1idG4sXHJcbi50ZXh0LWRhcmsgLnNvY2lhbC1zaWRlYmFyIHVsIGxpIGEsXHJcbi50ZXh0LWRhcmsgLmNvcHlyaWdodC1maXhlZCxcclxuLnRleHQtZGFyayAuYmFubmVyLWlubmVyIC50aXRsZSxcclxuLnRleHQtZGFyayAuYmFubmVyLWlubmVyIC5zdWItdGl0bGUsXHJcbi50ZXh0LWRhcmsgLmV4dHJhLW5hdiB1bCBsaSBhOm5vdCgubWVudS1idG4pe1xyXG5cdGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbi5tZW51LWJ0biAubWVudSBzcGFue1xyXG5cdGJhY2tncm91bmQ6IzAwMDtcclxufVxyXG4jbG9hZGluZy1hcmVhIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLTQucG5nKSwgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9saW5lLWJndy00LnBuZyk7XHJcbn1cclxuLmNvbnRlbnQtYm9keS1pbm5lcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvbGluZS1iZ2ItNC5wbmcpO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SecurityIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-index',
                templateUrl: './security-index.component.html',
                styleUrls: ['./security-index.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "L0qV":
/*!**************************************************************!*\
  !*** ./src/app/elements/header/header1/header1.component.ts ***!
  \**************************************************************/
/*! exports provided: Header1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header1Component", function() { return Header1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function Header1Component_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const menuData_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("routerLink", "/", menuData_r1.link, "-", ctx_r0.data.profile, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](menuData_r1.class);
} }
class Header1Component {
    constructor() {
        this.menu_item = [
            {
                title: "home",
                link: "index",
                class: "ti-home"
            },
            {
                title: "about-us",
                link: "about-us",
                class: "ti-info-alt"
            },
            {
                title: "resume",
                link: "resume",
                class: "ti-user"
            },
            {
                title: "portfolio",
                link: "portfolio",
                class: "ti-layout-grid2"
            },
            {
                title: "contact-us",
                link: "contact-us",
                class: "ti-headphone-alt"
            },
        ];
    }
    ngOnInit() {
        (function ($) {
            /* setTimeout(function(){ */
            var screenWidth = jQuery(window).width();
            jQuery('.menu-btn').on('click', function () {
                jQuery('.menu-btn').toggleClass('active');
                jQuery('.header-nav').toggleClass('active');
            });
            if (screenWidth < 999) {
                jQuery('.menu-btn').removeClass('active');
                jQuery('.header-nav').removeClass('active');
            }
            /* }, 500) */ ;
        })(jQuery);
    }
}
Header1Component.??fac = function Header1Component_Factory(t) { return new (t || Header1Component)(); };
Header1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Header1Component, selectors: [["app-header1"]], inputs: { data: "data" }, decls: 25, vars: 4, consts: [[1, "site-header", "header-transparent", "header2"], [1, "sticky-header", "main-bar-wraper", "navbar-expand-xl"], [1, "main-bar", "clearfix"], [1, "container-fluid", "clearfix"], [1, "logo-header"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "extra-nav"], [1, "extra-cell"], ["href", "javascript:void(0);", 1, "menu-btn", "active"], [1, "menu"], [1, "header-nav", "icon-menu", "active"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active"]], template: function Header1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Contact us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, Header1Component_li_24_Template, 3, 5, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/index-", ctx.data.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/", ctx.data.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/contact-us-", ctx.data.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.menu_item);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2hlYWRlci9oZWFkZXIxL2hlYWRlcjEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Header1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header1',
                templateUrl: './header1.component.html',
                styleUrls: ['./header1.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MhBU":
/*!*************************************************!*\
  !*** ./src/app/elements/tags/tags.component.ts ***!
  \*************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TagsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](tag_r1);
} }
class TagsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TagsComponent.??fac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(); };
TagsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "knowledge-tag"], [4, "ngFor", "ngForOf"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TagsComponent_li_1_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3RhZ3MvdGFncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags',
                templateUrl: './tags.component.html',
                styleUrls: ['./tags.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "N+9G":
/*!******************************************************************************************!*\
  !*** ./src/app/web-developer/web-developer-about-us/web-developer-about-us.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WebDeveloperAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDeveloperAboutUsComponent", function() { return WebDeveloperAboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/my-services/my-services.component */ "WtFa");
/* harmony import */ var _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/fun-fact-counter/fun-fact-counter.component */ "HK96");
/* harmony import */ var _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/testimonial/testimonial.component */ "ujG/");
/* harmony import */ var _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/our-client/our-client.component */ "Zotn");










class WebDeveloperAboutUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-5.png",
            profile: "web-developer"
        };
        this.page_banner = {
            title: "About us",
            profile: "web-developer",
        };
        this.page_info = {
            title: "What I Do",
            image: "pic1.jpg",
            description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue."
        };
        this.member = {
            image: "",
            logo: "",
            designation: "",
            age: "29",
            dob: "",
            residence: "USA",
            address: "88 SOME STREET, SOME TOW",
            email: "EMAIL@EXAMPLE.COM",
            phone: "+0123 123 456 789",
            skype: "ALEX.SMITH",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "",
            study: "",
            highes_degree: "",
            profile: "web-developer"
        };
        this.services = [
            {
                title: "Web Design",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "Web Development",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "JAVASCRIPT",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "UI/UX DESIGNER",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
        ];
        this.fun_facts = [
            {
                number: "2325",
                title: "HAPPY CLIENTS",
            },
            {
                number: "7582",
                title: "WORKING HOURS",
            },
            {
                number: "12",
                title: "AWARDS WON",
            },
            {
                number: "2000",
                title: "PROJECTS COMPLETED",
            },
        ];
        this.testimonials = [
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "Developer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "Designer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "Manager",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "Developer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "Designer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "Manager",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
        ];
        this.our_clients = [
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo3.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
        ];
    }
    ngOnInit() {
    }
}
WebDeveloperAboutUsComponent.??fac = function WebDeveloperAboutUsComponent_Factory(t) { return new (t || WebDeveloperAboutUsComponent)(); };
WebDeveloperAboutUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WebDeveloperAboutUsComponent, selectors: [["app-web-developer-about-us"]], decls: 64, vars: 15, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "wow", "fadeInUp"], ["alt", "", 3, "src"], [1, "section-full", "content-inner-1"], [1, "row", "align-items-center"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-md-6", "wow", "fadeInUp"], [1, "section-head", "m-b0"], [1, "title", "text-uppercase"], [1, "m-b0"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "col-md-6", "wow", "fadeInUp"], [1, "personal-info"], ["href", "#"], [1, "section-head"]], template: function WebDeveloperAboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "AGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "RESIDENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "E-MAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "PHONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "SKYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "app-my-services", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Fun Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "app-fun-fact-counter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-testimonial", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "our Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-our-client", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.page_info.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.residence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.skype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.fun_facts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.our_clients);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__["MyServicesComponent"], _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__["FunFactCounterComponent"], _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__["TestimonialComponent"], _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__["OurClientComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1kZXZlbG9wZXIvd2ViLWRldmVsb3Blci1hYm91dC11cy93ZWItZGV2ZWxvcGVyLWFib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebDeveloperAboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-developer-about-us',
                templateUrl: './web-developer-about-us.component.html',
                styleUrls: ['./web-developer-about-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RypF":
/*!*******************************************************!*\
  !*** ./src/app/photographer/index/index.component.ts ***!
  \*******************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/copywrite/copywrite.component */ "flWs");
/* harmony import */ var _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/user-card/user-card.component */ "IdUB");









class IndexComponent {
    constructor() {
        this.profile = {
            logo: "logo.png",
            profile: "photographer"
        };
        this.member = {
            image: "",
            logo: "pic1.jpg",
            designation: "photographer",
            age: "29",
            dob: "",
            residence: "",
            address: "",
            email: "",
            phone: "",
            skype: "",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "Thomas Grady",
            study: "",
            highes_degree: "",
            profile: "photographer"
        };
    }
    ngOnInit() {
    }
}
IndexComponent.??fac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 16, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "banner-section", "line-move", 2, "background-image", "url(assets/images/background/bg1.jpg)", "background-size", "cover"], [1, "banner-inner", "bnr-center"], [1, "sub-title"], [1, "text-gradient"], [1, "title"], [1, "site-button", "outline", "button-md", "outline-half", 3, "routerLink"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Thomas Grady");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Photographer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Check My Cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "app-copywrite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-user-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.member);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__["CopywriteComponent"], _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__["UserCardComponent"]], styles: ["/*===================== \r\n\tPrimary bg color \r\n=====================*/\r\n:root{\r\n\t--primary: #ef5525;\r\n}\r\n/* Hex */\r\n.menuleft:after,\r\n#loading-area > div,\r\n.bg-primary,\r\na.bg-primary:hover,\r\n.overlay-primary-light:after,\r\n.overlay-primary-middle:after,\r\n.overlay-primary-dark:after,\r\n.site-button,\r\n.owl-theme.dots-style-1 .owl-dots .owl-dot.active span, \r\n.owl-theme.dots-style-1 .owl-dots .owl-dot:hover span,\r\n.comments-area .comment-form p input[type=\"submit\"]{\r\n    background-color: #ef5525;\r\n}\r\n/*Hex color :hover */\r\n.site-button:active,\r\n.site-button:hover,\r\n.site-button:focus,\r\n.active > .site-button,\r\n.bg-primary-dark,\r\n.sidenav .closebtn:hover,\r\n.style-2 .dez-social-icon.dez-border li a:hover,\r\n.comments-area .comment-form p input[type=\"submit\"]:hover{\r\n    background-color: #f0342b;\r\n}\r\n/*===================== \r\n\tPremery text color \r\n=====================*/\r\na,\r\n.text-primary,\r\n.site-button.outline,\r\n.dez-countdown .date .time,\r\n.lg-outer .lg-toogle-thumb,\r\n.lg-outer .lg-toogle-thumb:hover,\r\n.dlab-bnr-inr .breadcrumb-row ul li:after, \r\n.dlab-bnr-inr .breadcrumb-row ul li:last-child,\r\n.testimonial-1 .testimonial-position,\r\n.resume-tag .resume-tag-btn strong,\r\n.knowledge-tag li:after,\r\n.site-filters .active > [class*=\"site-button\"]{\r\n    color: #ef5525;\r\n}\r\n/*===================== \r\n\tBorder Color color \r\n=====================*/\r\n.timeline .box-left,\r\n.timeline .box-left:after,\r\n.site-button.outline,\r\n.dez-countdown .date .time,\r\n.dlab-post-tags .post-tags a,\r\n.comments-area .comment-form p input[type=\"text\"]:focus, \r\n.comments-area .comment-form p input[type=\"text\"]:hover, \r\n.comments-area .comment-form p textarea:focus,\r\n.comments-area .comment-form p textarea:hover{\r\n\tborder-color:#ef5525;\r\n}\r\n.lg-outer .lg-thumb-item.active, \r\n.lg-outer .lg-thumb-item:hover{\r\n\tborder-color: #ef5525;\r\n}\r\n/* Gradiyant Bottom To Top */\r\n.dlab-gallery-box:after,\r\n.service-box:not(.contact-box):after, \r\n.service-box:before,\r\n.text-gradient,\r\n.resume-user .site-button,\r\n.extra-nav ul li a.menu-btn{\r\n    background-image: linear-gradient(to top,#f0342b 0,#ef5525 100%,#f0342b 100%);\r\n    background-size: 200%;\r\n}\r\n.contact-form .form-group:after,\r\n.button-gradient, \r\n.progress-bar{\r\n    background-image: linear-gradient(to right,#f0342b 0,#ef5525 100%,#f0342b 500%);\r\n    background-size: 200%;\r\n}\r\nsvg.radial-progress:nth-of-type(6n+1) circle{\r\n\tstroke: #ef5525;\r\n}\r\n.resume-tag .resume-tag-btn,\r\n.knowledge-tag li{\r\n\tbackground-color:rgba(239,85,37,0.1);\r\n\tborder-color:rgba(239,85,37,0.2);\r\n}\r\n/* text dark */\r\n.text-dark .social-sidebar ul li a,\r\n.text-dark .copyright-fixed,\r\n.text-dark .banner-inner .title,\r\n.text-dark .banner-inner .sub-title,\r\n.text-dark .extra-nav ul li a:not(.menu-btn){\r\n\tcolor:#000000;\r\n}\r\n#loading-area {\r\n\tbackground-image: url('logo.png'), url('line-bgw-1.png');\r\n}\r\n.content-body-inner{\r\n    background-image: url('line-bgb-1.png');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9ncmFwaGVyL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3NCQUVzQjtBQUN0QjtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBLFFBQVE7QUFDUjs7Ozs7Ozs7Ozs7SUFXSSx5QkFBeUI7QUFDN0I7QUFDQSxvQkFBb0I7QUFDcEI7Ozs7Ozs7O0lBUUkseUJBQXlCO0FBQzdCO0FBQ0E7O3NCQUVzQjtBQUN0Qjs7Ozs7Ozs7Ozs7O0lBWUksY0FBYztBQUNsQjtBQUVBOztzQkFFc0I7QUFDdEI7Ozs7Ozs7OztDQVNDLG9CQUFvQjtBQUNyQjtBQUVBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBLDRCQUE0QjtBQUM1Qjs7Ozs7O0lBTUksNkVBQTZFO0lBQzdFLHFCQUFxQjtBQUN6QjtBQUNBOzs7SUFHSSwrRUFBK0U7SUFDL0UscUJBQXFCO0FBQ3pCO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7O0NBRUMsb0NBQW9DO0NBQ3BDLGdDQUFnQztBQUNqQztBQUNBLGNBQWM7QUFFZDs7Ozs7Q0FLQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHdEQUE2RztBQUM5RztBQUNBO0lBQ0ksdUNBQXVFO0FBQzNFIiwiZmlsZSI6InNyYy9hcHAvcGhvdG9ncmFwaGVyL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRQcmltYXJ5IGJnIGNvbG9yIFxyXG49PT09PT09PT09PT09PT09PT09PT0qL1xyXG46cm9vdHtcclxuXHQtLXByaW1hcnk6ICNlZjU1MjU7XHJcbn1cclxuLyogSGV4ICovXHJcbi5tZW51bGVmdDphZnRlcixcclxuI2xvYWRpbmctYXJlYSA+IGRpdixcclxuLmJnLXByaW1hcnksXHJcbmEuYmctcHJpbWFyeTpob3ZlcixcclxuLm92ZXJsYXktcHJpbWFyeS1saWdodDphZnRlcixcclxuLm92ZXJsYXktcHJpbWFyeS1taWRkbGU6YWZ0ZXIsXHJcbi5vdmVybGF5LXByaW1hcnktZGFyazphZnRlcixcclxuLnNpdGUtYnV0dG9uLFxyXG4ub3dsLXRoZW1lLmRvdHMtc3R5bGUtMSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sIFxyXG4ub3dsLXRoZW1lLmRvdHMtc3R5bGUtMSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbixcclxuLmNvbW1lbnRzLWFyZWEgLmNvbW1lbnQtZm9ybSBwIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1NTI1O1xyXG59XHJcbi8qSGV4IGNvbG9yIDpob3ZlciAqL1xyXG4uc2l0ZS1idXR0b246YWN0aXZlLFxyXG4uc2l0ZS1idXR0b246aG92ZXIsXHJcbi5zaXRlLWJ1dHRvbjpmb2N1cyxcclxuLmFjdGl2ZSA+IC5zaXRlLWJ1dHRvbixcclxuLmJnLXByaW1hcnktZGFyayxcclxuLnNpZGVuYXYgLmNsb3NlYnRuOmhvdmVyLFxyXG4uc3R5bGUtMiAuZGV6LXNvY2lhbC1pY29uLmRlei1ib3JkZXIgbGkgYTpob3ZlcixcclxuLmNvbW1lbnRzLWFyZWEgLmNvbW1lbnQtZm9ybSBwIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAzNDJiO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09IFxyXG5cdFByZW1lcnkgdGV4dCBjb2xvciBcclxuPT09PT09PT09PT09PT09PT09PT09Ki9cclxuYSxcclxuLnRleHQtcHJpbWFyeSxcclxuLnNpdGUtYnV0dG9uLm91dGxpbmUsXHJcbi5kZXotY291bnRkb3duIC5kYXRlIC50aW1lLFxyXG4ubGctb3V0ZXIgLmxnLXRvb2dsZS10aHVtYixcclxuLmxnLW91dGVyIC5sZy10b29nbGUtdGh1bWI6aG92ZXIsXHJcbi5kbGFiLWJuci1pbnIgLmJyZWFkY3J1bWItcm93IHVsIGxpOmFmdGVyLCBcclxuLmRsYWItYm5yLWluciAuYnJlYWRjcnVtYi1yb3cgdWwgbGk6bGFzdC1jaGlsZCxcclxuLnRlc3RpbW9uaWFsLTEgLnRlc3RpbW9uaWFsLXBvc2l0aW9uLFxyXG4ucmVzdW1lLXRhZyAucmVzdW1lLXRhZy1idG4gc3Ryb25nLFxyXG4ua25vd2xlZGdlLXRhZyBsaTphZnRlcixcclxuLnNpdGUtZmlsdGVycyAuYWN0aXZlID4gW2NsYXNzKj1cInNpdGUtYnV0dG9uXCJde1xyXG4gICAgY29sb3I6ICNlZjU1MjU7XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09IFxyXG5cdEJvcmRlciBDb2xvciBjb2xvciBcclxuPT09PT09PT09PT09PT09PT09PT09Ki9cclxuLnRpbWVsaW5lIC5ib3gtbGVmdCxcclxuLnRpbWVsaW5lIC5ib3gtbGVmdDphZnRlcixcclxuLnNpdGUtYnV0dG9uLm91dGxpbmUsXHJcbi5kZXotY291bnRkb3duIC5kYXRlIC50aW1lLFxyXG4uZGxhYi1wb3N0LXRhZ3MgLnBvc3QtdGFncyBhLFxyXG4uY29tbWVudHMtYXJlYSAuY29tbWVudC1mb3JtIHAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsIFxyXG4uY29tbWVudHMtYXJlYSAuY29tbWVudC1mb3JtIHAgaW5wdXRbdHlwZT1cInRleHRcIl06aG92ZXIsIFxyXG4uY29tbWVudHMtYXJlYSAuY29tbWVudC1mb3JtIHAgdGV4dGFyZWE6Zm9jdXMsXHJcbi5jb21tZW50cy1hcmVhIC5jb21tZW50LWZvcm0gcCB0ZXh0YXJlYTpob3ZlcntcclxuXHRib3JkZXItY29sb3I6I2VmNTUyNTtcclxufVxyXG5cclxuLmxnLW91dGVyIC5sZy10aHVtYi1pdGVtLmFjdGl2ZSwgXHJcbi5sZy1vdXRlciAubGctdGh1bWItaXRlbTpob3ZlcntcclxuXHRib3JkZXItY29sb3I6ICNlZjU1MjU7XHJcbn1cclxuLyogR3JhZGl5YW50IEJvdHRvbSBUbyBUb3AgKi9cclxuLmRsYWItZ2FsbGVyeS1ib3g6YWZ0ZXIsXHJcbi5zZXJ2aWNlLWJveDpub3QoLmNvbnRhY3QtYm94KTphZnRlciwgXHJcbi5zZXJ2aWNlLWJveDpiZWZvcmUsXHJcbi50ZXh0LWdyYWRpZW50LFxyXG4ucmVzdW1lLXVzZXIgLnNpdGUtYnV0dG9uLFxyXG4uZXh0cmEtbmF2IHVsIGxpIGEubWVudS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNmMDM0MmIgMCwjZWY1NTI1IDEwMCUsI2YwMzQyYiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxufVxyXG4uY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwOmFmdGVyLFxyXG4uYnV0dG9uLWdyYWRpZW50LCBcclxuLnByb2dyZXNzLWJhcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZjAzNDJiIDAsI2VmNTUyNSAxMDAlLCNmMDM0MmIgNTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbn1cclxuc3ZnLnJhZGlhbC1wcm9ncmVzczpudGgtb2YtdHlwZSg2bisxKSBjaXJjbGV7XHJcblx0c3Ryb2tlOiAjZWY1NTI1O1xyXG59XHJcbi5yZXN1bWUtdGFnIC5yZXN1bWUtdGFnLWJ0bixcclxuLmtub3dsZWRnZS10YWcgbGl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzOSw4NSwzNywwLjEpO1xyXG5cdGJvcmRlci1jb2xvcjpyZ2JhKDIzOSw4NSwzNywwLjIpO1xyXG59XHJcbi8qIHRleHQgZGFyayAqL1xyXG5cclxuLnRleHQtZGFyayAuc29jaWFsLXNpZGViYXIgdWwgbGkgYSxcclxuLnRleHQtZGFyayAuY29weXJpZ2h0LWZpeGVkLFxyXG4udGV4dC1kYXJrIC5iYW5uZXItaW5uZXIgLnRpdGxlLFxyXG4udGV4dC1kYXJrIC5iYW5uZXItaW5uZXIgLnN1Yi10aXRsZSxcclxuLnRleHQtZGFyayAuZXh0cmEtbmF2IHVsIGxpIGE6bm90KC5tZW51LWJ0bil7XHJcblx0Y29sb3I6IzAwMDAwMDtcclxufVxyXG4jbG9hZGluZy1hcmVhIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyksIHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvbGluZS1iZ3ctMS5wbmcpO1xyXG59XHJcbi5jb250ZW50LWJvZHktaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2xpbmUtYmdiLTEucG5nKTtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'myintro';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "V6RS":
/*!*****************************************************************************!*\
  !*** ./src/app/security/security-portfolio/security-portfolio.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SecurityPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPortfolioComponent", function() { return SecurityPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SecurityPortfolioComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const portfolio_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("card-container col-xl-4 col-lg-6 col-md-6 col-sm-6 ", portfolio_r1.filter_class, " wow fadeInLeft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/security-officer/", portfolio_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("exthumbimage", "assets/images/gallery/security-officer/", portfolio_r1.image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/security-officer/orignal/", portfolio_r1.src_image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.category);
} }
class SecurityPortfolioComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-4.png",
            profile: "security"
        };
        this.page_banner = {
            title: "Portfolio",
            profile: "security",
        };
        this.categories = [
            {
                title: "Design",
                filter_title: "design",
            },
            {
                title: "Photography",
                filter_title: "photography",
            },
            {
                title: "development",
                filter_title: "Development",
            },
        ];
        this.portfolios = [
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic1.jpg",
                src_image: "main-pic1.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic2.jpg",
                src_image: "main-pic2.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic3.jpg",
                src_image: "main-pic3.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic4.jpg",
                src_image: "main-pic4.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic5.jpg",
                src_image: "main-pic5.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic6.jpg",
                src_image: "main-pic6.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic7.jpg",
                src_image: "main-pic7.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic8.jpg",
                src_image: "main-pic8.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic9.jpg",
                src_image: "main-pic9.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
        ];
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                var self = jQuery("#masonry, .masonry");
                if (jQuery('.card-container').length) {
                    self.imagesLoaded(function () {
                        self.masonry({
                            gutterWidth: 15,
                            isAnimated: true,
                            itemSelector: ".card-container"
                        });
                    });
                }
                jQuery(".filters").on('click', 'li', function (e) {
                    var filter = jQuery(this).attr("data-filter");
                    self.masonryFilter({
                        filter: function () {
                            if (!filter)
                                return true;
                            return jQuery(this).hasClass(filter);
                        }
                    });
                });
            }, 500);
        })(jQuery);
    }
}
SecurityPortfolioComponent.??fac = function SecurityPortfolioComponent_Factory(t) { return new (t || SecurityPortfolioComponent)(); };
SecurityPortfolioComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SecurityPortfolioComponent, selectors: [["app-security-portfolio"]], decls: 38, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head", "m-b20"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "site-filters", "clearfix"], ["data-toggle", "buttons", 1, "filters"], ["data-filter", "", 1, "btn", "active"], ["type", "radio"], ["href", "javascript:void(0);", 1, "site-button-link"], ["data-filter", "design", 1, "btn"], ["data-filter", "photography", 1, "btn"], ["data-filter", "development", 1, "btn"], [1, "clearfix"], ["id", "masonry", 1, "dlab-gallery-listing", "gallery", "lightgallery", "row", "sp40"], ["ngFor", "", 3, "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s"], [1, "dlab-box", "dlab-gallery-box"], [1, "dlab-media"], ["alt", "", 3, "src"], [1, "check-km", 3, "exthumbimage", "src", "title"], [1, "la", "la-plus"], [1, "dlab-info"], [1, "title"]], template: function SecurityPortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Some of My ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Creative Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, SecurityPortfolioComponent_ng_template_37_Template, 11, 9, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.portfolios);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3NlY3VyaXR5LXBvcnRmb2xpby9zZWN1cml0eS1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SecurityPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-portfolio',
                templateUrl: './security-portfolio.component.html',
                styleUrls: ['./security-portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WtFa":
/*!***************************************************************!*\
  !*** ./src/app/elements/my-services/my-services.component.ts ***!
  \***************************************************************/
/*! exports provided: MyServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServicesComponent", function() { return MyServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MyServicesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](service_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](service_r1.description);
} }
class MyServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyServicesComponent.??fac = function MyServicesComponent_Factory(t) { return new (t || MyServicesComponent)(); };
MyServicesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MyServicesComponent, selectors: [["app-my-services"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "row", "sp40"], ["class", "col-xl-6 col-lg-12 wow fadeInUp", "data-wow-duration", "2s", "data-wow-delay", "0.2s", 4, "ngFor", "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-6", "col-lg-12", "wow", "fadeInUp"], [1, "icon-bx-wraper", "service-box", "m-b40"], [1, "icon-content"], [1, "dlab-tilte", "text-uppercase"], [1, "ti-desktop", "bg-icon"]], template: function MyServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MyServicesComponent_div_1_Template, 8, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL215LXNlcnZpY2VzL215LXNlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MyServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-services',
                templateUrl: './my-services.component.html',
                styleUrls: ['./my-services.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/my-services/my-services.component */ "WtFa");
/* harmony import */ var _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/fun-fact-counter/fun-fact-counter.component */ "HK96");
/* harmony import */ var _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/testimonial/testimonial.component */ "ujG/");
/* harmony import */ var _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/our-client/our-client.component */ "Zotn");
/* harmony import */ var _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/timeline/timeline.component */ "A8ej");
/* harmony import */ var _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/progress-bar/circle/circle.component */ "mmjH");
/* harmony import */ var _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements/progress-bar/line/line.component */ "yMhq");
/* harmony import */ var _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/tags/tags.component */ "MhBU");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/icon-box/icon-box.component */ "JE0/");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _photographer_index_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./photographer/index/index.component */ "RypF");
/* harmony import */ var _photographer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./photographer/about-us/about-us.component */ "x2Ll");
/* harmony import */ var _photographer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./photographer/contact-us/contact-us.component */ "1bEB");
/* harmony import */ var _photographer_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./photographer/portfolio/portfolio.component */ "rPiP");
/* harmony import */ var _photographer_resume_resume_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./photographer/resume/resume.component */ "+24W");
/* harmony import */ var _modal_modal_about_us_modal_about_us_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/modal-about-us/modal-about-us.component */ "eP8G");
/* harmony import */ var _modal_modal_contact_us_modal_contact_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modal/modal-contact-us/modal-contact-us.component */ "s8YL");
/* harmony import */ var _modal_modal_index_modal_index_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal/modal-index/modal-index.component */ "d9dI");
/* harmony import */ var _modal_modal_portfolio_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modal/modal-portfolio/modal-portfolio.component */ "p+3h");
/* harmony import */ var _modal_modal_resume_modal_resume_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modal/modal-resume/modal-resume.component */ "cWzX");
/* harmony import */ var _security_security_about_us_security_about_us_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./security/security-about-us/security-about-us.component */ "1ECE");
/* harmony import */ var _security_security_contact_us_security_contact_us_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./security/security-contact-us/security-contact-us.component */ "hUM4");
/* harmony import */ var _security_security_index_security_index_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./security/security-index/security-index.component */ "Kkq/");
/* harmony import */ var _security_security_portfolio_security_portfolio_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./security/security-portfolio/security-portfolio.component */ "V6RS");
/* harmony import */ var _security_security_resume_security_resume_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./security/security-resume/security-resume.component */ "Az6h");
/* harmony import */ var _web_developer_web_developer_about_us_web_developer_about_us_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./web-developer/web-developer-about-us/web-developer-about-us.component */ "N+9G");
/* harmony import */ var _web_developer_web_developer_contact_us_web_developer_contact_us_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./web-developer/web-developer-contact-us/web-developer-contact-us.component */ "+vy1");
/* harmony import */ var _web_developer_web_developer_index_web_developer_index_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./web-developer/web-developer-index/web-developer-index.component */ "6a+P");
/* harmony import */ var _web_developer_web_developer_portfolio_web_developer_portfolio_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./web-developer/web-developer-portfolio/web-developer-portfolio.component */ "IIBm");
/* harmony import */ var _web_developer_web_developer_resume_web_developer_resume_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./web-developer/web-developer-resume/web-developer-resume.component */ "Zz6a");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/blog/blog.component */ "5tuB");
/* harmony import */ var _pages_blog_single_blog_single_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/blog-single/blog-single.component */ "+r0e");
/* harmony import */ var _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./elements/user-card/user-card.component */ "IdUB");
/* harmony import */ var _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./elements/copywrite/copywrite.component */ "flWs");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");













































class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_42__["CarouselModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_4__["Header1Component"],
        _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_5__["PageBannerComponent"],
        _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_6__["SocialBarComponent"],
        _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_7__["MyServicesComponent"],
        _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_8__["FunFactCounterComponent"],
        _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_9__["TestimonialComponent"],
        _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_10__["OurClientComponent"],
        _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__["TimelineComponent"],
        _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_12__["CircleComponent"],
        _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_13__["LineComponent"],
        _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_14__["TagsComponent"],
        _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_15__["IconBoxComponent"],
        _photographer_index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
        _photographer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_18__["AboutUsComponent"],
        _photographer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_19__["ContactUsComponent"],
        _photographer_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioComponent"],
        _photographer_resume_resume_component__WEBPACK_IMPORTED_MODULE_21__["ResumeComponent"],
        _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"],
        _modal_modal_about_us_modal_about_us_component__WEBPACK_IMPORTED_MODULE_22__["ModalAboutUsComponent"],
        _modal_modal_contact_us_modal_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ModalContactUsComponent"],
        _modal_modal_index_modal_index_component__WEBPACK_IMPORTED_MODULE_24__["ModalIndexComponent"],
        _modal_modal_portfolio_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_25__["ModalPortfolioComponent"],
        _modal_modal_resume_modal_resume_component__WEBPACK_IMPORTED_MODULE_26__["ModalResumeComponent"],
        _security_security_about_us_security_about_us_component__WEBPACK_IMPORTED_MODULE_27__["SecurityAboutUsComponent"],
        _security_security_contact_us_security_contact_us_component__WEBPACK_IMPORTED_MODULE_28__["SecurityContactUsComponent"],
        _security_security_index_security_index_component__WEBPACK_IMPORTED_MODULE_29__["SecurityIndexComponent"],
        _security_security_portfolio_security_portfolio_component__WEBPACK_IMPORTED_MODULE_30__["SecurityPortfolioComponent"],
        _security_security_resume_security_resume_component__WEBPACK_IMPORTED_MODULE_31__["SecurityResumeComponent"],
        _web_developer_web_developer_about_us_web_developer_about_us_component__WEBPACK_IMPORTED_MODULE_32__["WebDeveloperAboutUsComponent"],
        _web_developer_web_developer_contact_us_web_developer_contact_us_component__WEBPACK_IMPORTED_MODULE_33__["WebDeveloperContactUsComponent"],
        _web_developer_web_developer_index_web_developer_index_component__WEBPACK_IMPORTED_MODULE_34__["WebDeveloperIndexComponent"],
        _web_developer_web_developer_portfolio_web_developer_portfolio_component__WEBPACK_IMPORTED_MODULE_35__["WebDeveloperPortfolioComponent"],
        _web_developer_web_developer_resume_web_developer_resume_component__WEBPACK_IMPORTED_MODULE_36__["WebDeveloperResumeComponent"],
        _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_37__["BlogComponent"],
        _pages_blog_single_blog_single_component__WEBPACK_IMPORTED_MODULE_38__["BlogSingleComponent"],
        _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_39__["UserCardComponent"],
        _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_40__["CopywriteComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_43__["Page404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_42__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_4__["Header1Component"],
                    _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_5__["PageBannerComponent"],
                    _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_6__["SocialBarComponent"],
                    _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_7__["MyServicesComponent"],
                    _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_8__["FunFactCounterComponent"],
                    _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_9__["TestimonialComponent"],
                    _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_10__["OurClientComponent"],
                    _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__["TimelineComponent"],
                    _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_12__["CircleComponent"],
                    _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_13__["LineComponent"],
                    _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_14__["TagsComponent"],
                    _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_15__["IconBoxComponent"],
                    _photographer_index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
                    _photographer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_18__["AboutUsComponent"],
                    _photographer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_19__["ContactUsComponent"],
                    _photographer_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioComponent"],
                    _photographer_resume_resume_component__WEBPACK_IMPORTED_MODULE_21__["ResumeComponent"],
                    _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"],
                    _modal_modal_about_us_modal_about_us_component__WEBPACK_IMPORTED_MODULE_22__["ModalAboutUsComponent"],
                    _modal_modal_contact_us_modal_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ModalContactUsComponent"],
                    _modal_modal_index_modal_index_component__WEBPACK_IMPORTED_MODULE_24__["ModalIndexComponent"],
                    _modal_modal_portfolio_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_25__["ModalPortfolioComponent"],
                    _modal_modal_resume_modal_resume_component__WEBPACK_IMPORTED_MODULE_26__["ModalResumeComponent"],
                    _security_security_about_us_security_about_us_component__WEBPACK_IMPORTED_MODULE_27__["SecurityAboutUsComponent"],
                    _security_security_contact_us_security_contact_us_component__WEBPACK_IMPORTED_MODULE_28__["SecurityContactUsComponent"],
                    _security_security_index_security_index_component__WEBPACK_IMPORTED_MODULE_29__["SecurityIndexComponent"],
                    _security_security_portfolio_security_portfolio_component__WEBPACK_IMPORTED_MODULE_30__["SecurityPortfolioComponent"],
                    _security_security_resume_security_resume_component__WEBPACK_IMPORTED_MODULE_31__["SecurityResumeComponent"],
                    _web_developer_web_developer_about_us_web_developer_about_us_component__WEBPACK_IMPORTED_MODULE_32__["WebDeveloperAboutUsComponent"],
                    _web_developer_web_developer_contact_us_web_developer_contact_us_component__WEBPACK_IMPORTED_MODULE_33__["WebDeveloperContactUsComponent"],
                    _web_developer_web_developer_index_web_developer_index_component__WEBPACK_IMPORTED_MODULE_34__["WebDeveloperIndexComponent"],
                    _web_developer_web_developer_portfolio_web_developer_portfolio_component__WEBPACK_IMPORTED_MODULE_35__["WebDeveloperPortfolioComponent"],
                    _web_developer_web_developer_resume_web_developer_resume_component__WEBPACK_IMPORTED_MODULE_36__["WebDeveloperResumeComponent"],
                    _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_37__["BlogComponent"],
                    _pages_blog_single_blog_single_component__WEBPACK_IMPORTED_MODULE_38__["BlogSingleComponent"],
                    _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_39__["UserCardComponent"],
                    _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_40__["CopywriteComponent"],
                    _page404_page404_component__WEBPACK_IMPORTED_MODULE_43__["Page404Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["BrowserAnimationsModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_42__["CarouselModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zawe":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/index"]; };
class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.??fac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 15, vars: 2, consts: [[1, "authincation", "bg-white", "vh-100"], [1, "container", "h-100"], [1, "row", "justify-content-center", "h-100", "align-items-center"], [1, "col-md-8"], [1, "form-input-content", "text-center", "error-page"], [1, "error-text", "font-weight-bold"], [1, "fa", "fa-exclamation-triangle", "text-warning"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " The page you were looking for is not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "You may have mistyped the address or the page may have moved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Zotn":
/*!*************************************************************!*\
  !*** ./src/app/elements/our-client/our-client.component.ts ***!
  \*************************************************************/
/*! exports provided: OurClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurClientComponent", function() { return OurClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function OurClientComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/client-logo/", client_r1.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
class OurClientComponent {
    constructor() { }
    ngOnInit() {
    }
}
OurClientComponent.??fac = function OurClientComponent_Factory(t) { return new (t || OurClientComponent)(); };
OurClientComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OurClientComponent, selectors: [["app-our-client"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 wow fadeInUp", "data-wow-duration", "2s", "data-wow-delay", "0.1s", 4, "ngFor", "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.1s", 1, "col-xl-2", "col-lg-3", "col-md-3", "col-sm-4", "col-6", "wow", "fadeInUp"], [1, "client-logo"], ["alt", "", 3, "src"]], template: function OurClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OurClientComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL291ci1jbGllbnQvb3VyLWNsaWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OurClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-client',
                templateUrl: './our-client.component.html',
                styleUrls: ['./our-client.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Zz6a":
/*!**************************************************************************************!*\
  !*** ./src/app/web-developer/web-developer-resume/web-developer-resume.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WebDeveloperResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDeveloperResumeComponent", function() { return WebDeveloperResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/progress-bar/line/line.component */ "yMhq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/timeline/timeline.component */ "A8ej");
/* harmony import */ var _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/progress-bar/circle/circle.component */ "mmjH");
/* harmony import */ var _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/tags/tags.component */ "MhBU");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");












class WebDeveloperResumeComponent {
    constructor() {
        this.profile = {
            logo: 'logo-black-5.png',
            profile: 'web-developer',
        };
        this.page_banner = {
            title: 'Resume',
            profile: 'web-developer',
        };
        this.member = {
            image: 'user-img-9.jpg',
            logo: '',
            designation: '',
            age: '24',
            dob: '05.12.1998',
            residence: 'MAROC',
            address: 'AVE 11, NEW YORK, USA',
            email: ' amineab203@gmail.COM',
            phone: '(+212) 640147304',
            skype: 'amine.ab',
            whatsapp: '(+212) 640147304',
            about_me: 'Hi! My name is <span class="text-primary">AMIINE ABOUOTHMANE</span>. I am a software engineer, and I\'m very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.',
            intrests: 'GAMING, READING',
            name: 'Amine Abouothmane',
            study: 'EMSI',
            highes_degree: 'software engineer',
            profile: 'developer',
        };
        this.skills = [
            {
                title: 'HTML5',
                score: '70',
            },
            {
                title: 'CSS3',
                score: '90',
            },
            {
                title: 'JavaScript',
                score: '45',
            },
            {
                title: 'UI/UX designer',
                score: '67',
            },
        ];
        this.education = [
            {
                title: 'Fronted Development',
                year: '2019',
                organization_name: 'University of Studies',
                description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
            },
            {
                title: 'Graphic Design',
                year: '2014',
                organization_name: 'University of Studies',
                description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
            },
            {
                title: 'Senior Ui/Ux Designer',
                year: '2012',
                organization_name: 'University of Studies',
                description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
            },
            {
                title: 'Junior Ui/Ux Designer',
                year: '2011',
                organization_name: 'University of Studies',
                description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
            },
        ];
        this.experience = [
            {
                title: 'Fronted Development',
                year: '2019',
                organization_name: 'University of Studies',
                description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
            },
            {
                title: 'Graphic Design',
                year: '2014',
                organization_name: 'University of Studies',
                description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
            },
        ];
        this.language_known = [
            {
                title: 'English',
                score: '80',
            },
            {
                title: 'French',
                score: '70',
            },
            {
                title: 'Arabic',
                score: '100',
            },
        ];
        this.knowledge = [
            'Website hosting',
            'iOS and android apps',
            'Create logo design',
            'Design for print',
            'Modern and mobile-ready',
            'Advertising services include',
            'Graphics and animations',
            'Search engine marketing',
        ];
    }
    ngOnInit() { }
}
WebDeveloperResumeComponent.??fac = function WebDeveloperResumeComponent_Factory(t) { return new (t || WebDeveloperResumeComponent)(); };
WebDeveloperResumeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WebDeveloperResumeComponent, selectors: [["app-web-developer-resume"]], decls: 90, vars: 20, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "row"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-6", "col-lg-12", "wow", "fadeInUp"], [1, "sticky-top", "m-lg-b30"], ["alt", "", 3, "src"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-xl-6", "col-lg-12", "m-b30", "wow", "fadeInUp"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "m-b0", 3, "innerHTML"], [1, "m-t50", "m-xs-t30"], [1, "site-button", "button-gradient", "button-md", "radius-no", 3, "routerLink"], [1, "site-button", "white", "button-md", "radius-no", 3, "routerLink"], [1, "section-full", "content-inner-1"], [1, "resume-tag"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.8s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.0s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"]], template: function WebDeveloperResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "app-line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Check portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "BIRTHDAY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "LOCATION :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "INTERESTS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "STUDY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "AGE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "DEGREE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "MAIL :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "PHONE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "app-circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "KNOWLEDGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "app-tags", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.member.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.member.about_me, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/portfolio-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.intrests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.study);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.highes_degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.language_known);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.knowledge);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__["CircleComponent"], _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__["TagsComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1kZXZlbG9wZXIvd2ViLWRldmVsb3Blci1yZXN1bWUvd2ViLWRldmVsb3Blci1yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebDeveloperResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-developer-resume',
                templateUrl: './web-developer-resume.component.html',
                styleUrls: ['./web-developer-resume.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cWzX":
/*!**************************************************************!*\
  !*** ./src/app/modal/modal-resume/modal-resume.component.ts ***!
  \**************************************************************/
/*! exports provided: ModalResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalResumeComponent", function() { return ModalResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/progress-bar/line/line.component */ "yMhq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/timeline/timeline.component */ "A8ej");
/* harmony import */ var _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/progress-bar/circle/circle.component */ "mmjH");
/* harmony import */ var _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/tags/tags.component */ "MhBU");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");












class ModalResumeComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-3.png",
            profile: "modal"
        };
        this.page_banner = {
            title: "Resume",
            profile: "modal",
        };
        this.member = {
            image: "user-img-3.jpg",
            logo: "",
            designation: "",
            age: "29",
            dob: "01.07.1990",
            residence: "USA",
            address: "AVE 11, NEW YORK, USA",
            email: "INFO@EXAMPLE.COM",
            phone: "(+01) 123 456 7890",
            skype: "ALEX.SMITH",
            whatsapp: "",
            about_me: 'Hi! My name is <span class="text-primary">Ella grady</span>. I am a Web Developer, and I\'m very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.',
            intrests: "PLAYSTATION, READING",
            name: "ELLA GRADY",
            study: "UNIVERSITY OF CHICAGO",
            highes_degree: "MASTER",
            profile: "modal"
        };
        this.skills = [
            {
                title: "DIRECTING",
                score: "70",
            },
            {
                title: "PHOTOGRAPHY",
                score: "90",
            },
            {
                title: "HAIRSTYLING",
                score: "45",
            },
            {
                title: "RETOUCHING",
                score: "67",
            },
        ];
        this.education = [
            {
                title: "Fronted Development",
                year: "2019",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Graphic Design",
                year: "2014",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Senior Ui/Ux Designer",
                year: "2012",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Junior Ui/Ux Designer",
                year: "2011",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
        ];
        this.experience = [
            {
                title: "Fronted Development",
                year: "2019",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
            {
                title: "Graphic Design",
                year: "2014",
                organization_name: "University of Studies",
                description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
            },
        ];
        this.language_known = [
            {
                title: "English",
                score: "60",
            },
            {
                title: "French",
                score: "45",
            },
            {
                title: "German",
                score: "75",
            },
            {
                title: "Italian",
                score: "95",
            },
        ];
        this.knowledge = [
            "Website hosting",
            "iOS and android apps",
            "Create logo design",
            "Design for print",
            "Modern and mobile-ready",
            "Advertising services include",
            "Graphics and animations",
            "Search engine marketing",
        ];
    }
    ngOnInit() {
    }
}
ModalResumeComponent.??fac = function ModalResumeComponent_Factory(t) { return new (t || ModalResumeComponent)(); };
ModalResumeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModalResumeComponent, selectors: [["app-modal-resume"]], decls: 90, vars: 20, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "row"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "col-xl-6", "col-lg-12", "wow", "fadeInUp"], [1, "sticky-top", "m-lg-b30"], ["alt", "", 3, "src"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-xl-6", "col-lg-12", "m-b30", "wow", "fadeInUp"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "m-b0", 3, "innerHTML"], [1, "m-t50", "m-xs-t30"], [1, "site-button", "button-gradient", "button-md", "radius-no", 3, "routerLink"], [1, "site-button", "white", "button-md", "radius-no", 3, "routerLink"], [1, "section-full", "content-inner-1"], [1, "resume-tag"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.8s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.0s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.2s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.4s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "1.6s", 1, "resume-tag-btn", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "section-full", "content-inner-1", "wow", "fadeInUp"]], template: function ModalResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "app-line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Check portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "BIRTHDAY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "LOCATION :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "INTERESTS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "STUDY :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "AGE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "DEGREE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "MAIL :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "PHONE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "app-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "app-circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "KNOWLEDGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "app-tags", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.member.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.member.about_me, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/portfolio-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.intrests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.study);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.highes_degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.language_known);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.knowledge);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_progress_bar_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _elements_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _elements_progress_bar_circle_circle_component__WEBPACK_IMPORTED_MODULE_8__["CircleComponent"], _elements_tags_tags_component__WEBPACK_IMPORTED_MODULE_9__["TagsComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_10__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLXJlc3VtZS9tb2RhbC1yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-resume',
                templateUrl: './modal-resume.component.html',
                styleUrls: ['./modal-resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "d9dI":
/*!************************************************************!*\
  !*** ./src/app/modal/modal-index/modal-index.component.ts ***!
  \************************************************************/
/*! exports provided: ModalIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalIndexComponent", function() { return ModalIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/copywrite/copywrite.component */ "flWs");
/* harmony import */ var _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/user-card/user-card.component */ "IdUB");









class ModalIndexComponent {
    constructor() {
        this.profile = {
            logo: "logo-3.png",
            profile: "modal"
        };
        this.member = {
            image: "",
            logo: "pic3.jpg",
            designation: "brand MODEL",
            age: "29",
            dob: "",
            residence: "",
            address: "",
            email: "",
            phone: "",
            skype: "",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "ELLA GRADY",
            study: "",
            highes_degree: "",
            profile: "modal"
        };
    }
    ngOnInit() {
        (function ($) {
            /* setTimeout(function(){ */
            jQuery("#kenburn").slippry({
                transition: 'kenburns',
                useCSS: false,
                speed: 3000,
                pause: 3000,
                auto: true,
                kenZoom: 105,
                preload: 'visible',
                autoHover: false
            });
            /* }, 500);   */
        })(jQuery);
    }
}
ModalIndexComponent.??fac = function ModalIndexComponent_Factory(t) { return new (t || ModalIndexComponent)(); };
ModalIndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModalIndexComponent, selectors: [["app-modal-index"]], decls: 23, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "banner-section", "model-bnr", 2, "background-image", "url(assets/images/background/bg2.jpg)", "background-size", "cover"], ["id", "kenburn"], ["src", "assets/images/main-slider/slide1.jpg", "alt", ""], ["src", "assets/images/main-slider/slide2.jpg", "alt", ""], ["src", "assets/images/main-slider/slide3.jpg", "alt", ""], [1, "banner-inner", "bnr-left"], [1, "sub-title"], [1, "text-gradient"], [1, "title"], [1, "site-button", "outline", "button-md", "outline-half", 3, "routerLink"]], template: function ModalIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "I\u2019 Am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Ella Grady");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "brand MODEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Check My Cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "app-copywrite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "app-user-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/resume-", ctx.member.profile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.member);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_copywrite_copywrite_component__WEBPACK_IMPORTED_MODULE_5__["CopywriteComponent"], _elements_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_6__["UserCardComponent"]], styles: ["/*===================== \r\n\tPrimary bg color \r\n=====================*/\r\n:root{\r\n\t--primary: #d48d54;\r\n}\r\n/* Hex */\r\n.menuleft:after,\r\n#loading-area > div,\r\n.bg-primary,\r\na.bg-primary:hover,\r\n.overlay-primary-light:after,\r\n.overlay-primary-middle:after,\r\n.overlay-primary-dark:after,\r\n.site-button,\r\n.owl-theme.dots-style-1 .owl-dots .owl-dot.active span, \r\n.owl-theme.dots-style-1 .owl-dots .owl-dot:hover span{\r\n    background-color: #d48d54;\r\n}\r\n/*Hex color :hover */\r\n.site-button:active,\r\n.site-button:hover,\r\n.site-button:focus,\r\n.active > .site-button,\r\n.bg-primary-dark,\r\n.sidenav .closebtn:hover,\r\n.style-2 .dez-social-icon.dez-border li a:hover{\r\n    background-color: #ad6d39;\r\n}\r\n/*===================== \r\n\tPremery text color \r\n=====================*/\r\na,\r\n.text-primary,\r\n.site-button.outline,\r\n.dez-countdown .date .time,\r\n.lg-outer .lg-toogle-thumb,\r\n.lg-outer .lg-toogle-thumb:hover,\r\n.dlab-bnr-inr .breadcrumb-row ul li:after, \r\n.dlab-bnr-inr .breadcrumb-row ul li:last-child,\r\n.testimonial-1 .testimonial-position,\r\n.resume-tag .resume-tag-btn strong,\r\n.knowledge-tag li:after,\r\n.site-filters .active > [class*=\"site-button\"]{\r\n    color: #d48d54;\r\n}\r\n/*===================== \r\n\tBorder Color color \r\n=====================*/\r\n.timeline .box-left,\r\n.timeline .box-left:after,\r\n.site-button.outline,\r\n.dez-countdown .date .time{\r\n\tborder-color:#d48d54;\r\n}\r\n.lg-outer .lg-thumb-item.active, \r\n.lg-outer .lg-thumb-item:hover{\r\n\tborder-color: #d48d54;\r\n}\r\n/* Gradiyant Bottom To Top */\r\n.dlab-gallery-box:after,\r\n.service-box:not(.contact-box):after, \r\n.service-box:before,\r\n.text-gradient,\r\n.resume-user .site-button,\r\n.extra-nav ul li a.menu-btn{\r\n    background-image: linear-gradient(to top,#ad6d39 0,#d48d54 100%,#ad6d39 100%);\r\n    background-size: 200%;\r\n}\r\n.contact-form .form-group:after,\r\n.button-gradient, \r\n.progress-bar{\r\n    background-image: linear-gradient(to right,#ad6d39 0,#d48d54 100%,#ad6d39 500%);\r\n    background-size: 200%;\r\n}\r\nsvg.radial-progress:nth-of-type(6n+1) circle{\r\n\tstroke: #d48d54;\r\n}\r\n.resume-tag .resume-tag-btn,\r\n.knowledge-tag li{\r\n\tbackground-color:rgba(212,141,84,0.1);\r\n\tborder-color:rgba(212,141,84,0.2);\r\n}\r\n/* text dark */\r\n.text-dark .social-sidebar ul li a,\r\n.text-dark .copyright-fixed,\r\n.text-dark .banner-inner .title,\r\n.text-dark .banner-inner .sub-title,\r\n.text-dark .extra-nav ul li a:not(.menu-btn){\r\n\tcolor:#000000;\r\n}\r\n#loading-area {\r\n\tbackground-image: url('logo-3.png'), url('line-bgw-3.png');\r\n}\r\n.content-body-inner{\r\n    background-image: url('line-bgb-3.png');\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwtaW5kZXgvbW9kYWwtaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7c0JBRXNCO0FBQ3RCO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0EsUUFBUTtBQUNSOzs7Ozs7Ozs7O0lBVUkseUJBQXlCO0FBQzdCO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7Ozs7O0lBT0kseUJBQXlCO0FBQzdCO0FBQ0E7O3NCQUVzQjtBQUN0Qjs7Ozs7Ozs7Ozs7O0lBWUksY0FBYztBQUNsQjtBQUVBOztzQkFFc0I7QUFDdEI7Ozs7Q0FJQyxvQkFBb0I7QUFDckI7QUFFQTs7Q0FFQyxxQkFBcUI7QUFDdEI7QUFDQSw0QkFBNEI7QUFDNUI7Ozs7OztJQU1JLDZFQUE2RTtJQUM3RSxxQkFBcUI7QUFDekI7QUFDQTs7O0lBR0ksK0VBQStFO0lBQy9FLHFCQUFxQjtBQUN6QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBOztDQUVDLHFDQUFxQztDQUNyQyxpQ0FBaUM7QUFDbEM7QUFDQSxjQUFjO0FBRWQ7Ozs7O0NBS0MsYUFBYTtBQUNkO0FBRUE7Q0FDQywwREFBK0c7QUFDaEg7QUFDQTtJQUNJLHVDQUF1RTtBQUMzRSIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWluZGV4L21vZGFsLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRQcmltYXJ5IGJnIGNvbG9yIFxyXG49PT09PT09PT09PT09PT09PT09PT0qL1xyXG46cm9vdHtcclxuXHQtLXByaW1hcnk6ICNkNDhkNTQ7XHJcbn1cclxuLyogSGV4ICovXHJcbi5tZW51bGVmdDphZnRlcixcclxuI2xvYWRpbmctYXJlYSA+IGRpdixcclxuLmJnLXByaW1hcnksXHJcbmEuYmctcHJpbWFyeTpob3ZlcixcclxuLm92ZXJsYXktcHJpbWFyeS1saWdodDphZnRlcixcclxuLm92ZXJsYXktcHJpbWFyeS1taWRkbGU6YWZ0ZXIsXHJcbi5vdmVybGF5LXByaW1hcnktZGFyazphZnRlcixcclxuLnNpdGUtYnV0dG9uLFxyXG4ub3dsLXRoZW1lLmRvdHMtc3R5bGUtMSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sIFxyXG4ub3dsLXRoZW1lLmRvdHMtc3R5bGUtMSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDhkNTQ7XHJcbn1cclxuLypIZXggY29sb3IgOmhvdmVyICovXHJcbi5zaXRlLWJ1dHRvbjphY3RpdmUsXHJcbi5zaXRlLWJ1dHRvbjpob3ZlcixcclxuLnNpdGUtYnV0dG9uOmZvY3VzLFxyXG4uYWN0aXZlID4gLnNpdGUtYnV0dG9uLFxyXG4uYmctcHJpbWFyeS1kYXJrLFxyXG4uc2lkZW5hdiAuY2xvc2VidG46aG92ZXIsXHJcbi5zdHlsZS0yIC5kZXotc29jaWFsLWljb24uZGV6LWJvcmRlciBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkNmQzOTtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRQcmVtZXJ5IHRleHQgY29sb3IgXHJcbj09PT09PT09PT09PT09PT09PT09PSovXHJcbmEsXHJcbi50ZXh0LXByaW1hcnksXHJcbi5zaXRlLWJ1dHRvbi5vdXRsaW5lLFxyXG4uZGV6LWNvdW50ZG93biAuZGF0ZSAudGltZSxcclxuLmxnLW91dGVyIC5sZy10b29nbGUtdGh1bWIsXHJcbi5sZy1vdXRlciAubGctdG9vZ2xlLXRodW1iOmhvdmVyLFxyXG4uZGxhYi1ibnItaW5yIC5icmVhZGNydW1iLXJvdyB1bCBsaTphZnRlciwgXHJcbi5kbGFiLWJuci1pbnIgLmJyZWFkY3J1bWItcm93IHVsIGxpOmxhc3QtY2hpbGQsXHJcbi50ZXN0aW1vbmlhbC0xIC50ZXN0aW1vbmlhbC1wb3NpdGlvbixcclxuLnJlc3VtZS10YWcgLnJlc3VtZS10YWctYnRuIHN0cm9uZyxcclxuLmtub3dsZWRnZS10YWcgbGk6YWZ0ZXIsXHJcbi5zaXRlLWZpbHRlcnMgLmFjdGl2ZSA+IFtjbGFzcyo9XCJzaXRlLWJ1dHRvblwiXXtcclxuICAgIGNvbG9yOiAjZDQ4ZDU0O1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PSBcclxuXHRCb3JkZXIgQ29sb3IgY29sb3IgXHJcbj09PT09PT09PT09PT09PT09PT09PSovXHJcbi50aW1lbGluZSAuYm94LWxlZnQsXHJcbi50aW1lbGluZSAuYm94LWxlZnQ6YWZ0ZXIsXHJcbi5zaXRlLWJ1dHRvbi5vdXRsaW5lLFxyXG4uZGV6LWNvdW50ZG93biAuZGF0ZSAudGltZXtcclxuXHRib3JkZXItY29sb3I6I2Q0OGQ1NDtcclxufVxyXG5cclxuLmxnLW91dGVyIC5sZy10aHVtYi1pdGVtLmFjdGl2ZSwgXHJcbi5sZy1vdXRlciAubGctdGh1bWItaXRlbTpob3ZlcntcclxuXHRib3JkZXItY29sb3I6ICNkNDhkNTQ7XHJcbn1cclxuLyogR3JhZGl5YW50IEJvdHRvbSBUbyBUb3AgKi9cclxuLmRsYWItZ2FsbGVyeS1ib3g6YWZ0ZXIsXHJcbi5zZXJ2aWNlLWJveDpub3QoLmNvbnRhY3QtYm94KTphZnRlciwgXHJcbi5zZXJ2aWNlLWJveDpiZWZvcmUsXHJcbi50ZXh0LWdyYWRpZW50LFxyXG4ucmVzdW1lLXVzZXIgLnNpdGUtYnV0dG9uLFxyXG4uZXh0cmEtbmF2IHVsIGxpIGEubWVudS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNhZDZkMzkgMCwjZDQ4ZDU0IDEwMCUsI2FkNmQzOSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxufVxyXG4uY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwOmFmdGVyLFxyXG4uYnV0dG9uLWdyYWRpZW50LCBcclxuLnByb2dyZXNzLWJhcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjYWQ2ZDM5IDAsI2Q0OGQ1NCAxMDAlLCNhZDZkMzkgNTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbn1cclxuc3ZnLnJhZGlhbC1wcm9ncmVzczpudGgtb2YtdHlwZSg2bisxKSBjaXJjbGV7XHJcblx0c3Ryb2tlOiAjZDQ4ZDU0O1xyXG59XHJcbi5yZXN1bWUtdGFnIC5yZXN1bWUtdGFnLWJ0bixcclxuLmtub3dsZWRnZS10YWcgbGl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxMiwxNDEsODQsMC4xKTtcclxuXHRib3JkZXItY29sb3I6cmdiYSgyMTIsMTQxLDg0LDAuMik7XHJcbn1cclxuLyogdGV4dCBkYXJrICovXHJcblxyXG4udGV4dC1kYXJrIC5zb2NpYWwtc2lkZWJhciB1bCBsaSBhLFxyXG4udGV4dC1kYXJrIC5jb3B5cmlnaHQtZml4ZWQsXHJcbi50ZXh0LWRhcmsgLmJhbm5lci1pbm5lciAudGl0bGUsXHJcbi50ZXh0LWRhcmsgLmJhbm5lci1pbm5lciAuc3ViLXRpdGxlLFxyXG4udGV4dC1kYXJrIC5leHRyYS1uYXYgdWwgbGkgYTpub3QoLm1lbnUtYnRuKXtcclxuXHRjb2xvcjojMDAwMDAwO1xyXG59XHJcblxyXG4jbG9hZGluZy1hcmVhIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLTMucG5nKSwgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9saW5lLWJndy0zLnBuZyk7XHJcbn1cclxuLmNvbnRlbnQtYm9keS1pbm5lcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvbGluZS1iZ2ItMy5wbmcpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-index',
                templateUrl: './modal-index.component.html',
                styleUrls: ['./modal-index.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eP8G":
/*!******************************************************************!*\
  !*** ./src/app/modal/modal-about-us/modal-about-us.component.ts ***!
  \******************************************************************/
/*! exports provided: ModalAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAboutUsComponent", function() { return ModalAboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/my-services/my-services.component */ "WtFa");
/* harmony import */ var _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/fun-fact-counter/fun-fact-counter.component */ "HK96");
/* harmony import */ var _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/testimonial/testimonial.component */ "ujG/");
/* harmony import */ var _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/our-client/our-client.component */ "Zotn");










class ModalAboutUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-3.png",
            profile: "modal"
        };
        this.page_banner = {
            title: "About us",
            profile: "modal",
        };
        this.page_info = {
            title: "What I Do",
            image: "pic3.jpg",
            description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue."
        };
        this.member = {
            image: "",
            logo: "",
            designation: "",
            age: "29",
            dob: "",
            residence: "USA",
            address: "88 SOME STREET, SOME TOW",
            email: "EMAIL@EXAMPLE.COM",
            phone: "+0123 123 456 789",
            skype: "ALEX.SMITH",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "",
            study: "",
            highes_degree: "",
            profile: "modal"
        };
        this.services = [
            {
                title: "CAMERA WORK",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "POST PRODUCTION",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "CINEMATOGRAPHY",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "INVITATIONS CARDS",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
        ];
        this.fun_facts = [
            {
                number: "2325",
                title: "HAPPY CLIENTS",
            },
            {
                number: "7582",
                title: "WORKING HOURS",
            },
            {
                number: "12",
                title: "AWARDS WON",
            },
            {
                number: "2000",
                title: "PROJECTS COMPLETED",
            },
        ];
        this.testimonials = [
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "photographer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "artist",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "modal",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "photographer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "artist",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "modal",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
        ];
        this.our_clients = [
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo3.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
        ];
    }
    ngOnInit() {
    }
}
ModalAboutUsComponent.??fac = function ModalAboutUsComponent_Factory(t) { return new (t || ModalAboutUsComponent)(); };
ModalAboutUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModalAboutUsComponent, selectors: [["app-modal-about-us"]], decls: 64, vars: 15, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "wow", "fadeInUp"], ["alt", "", 3, "src"], [1, "section-full", "content-inner-1"], [1, "row", "align-items-center"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-md-6", "wow", "fadeInUp"], [1, "section-head", "m-b0"], [1, "title", "text-uppercase"], [1, "m-b0"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "col-md-6", "wow", "fadeInUp"], [1, "personal-info"], ["href", "#"], [1, "section-head"]], template: function ModalAboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "AGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "RESIDENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "E-MAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "PHONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "SKYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "app-my-services", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Fun Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "app-fun-fact-counter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-testimonial", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "our Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-our-client", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.page_info.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.residence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.skype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.fun_facts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.our_clients);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__["MyServicesComponent"], _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__["FunFactCounterComponent"], _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__["TestimonialComponent"], _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__["OurClientComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWFib3V0LXVzL21vZGFsLWFib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalAboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-about-us',
                templateUrl: './modal-about-us.component.html',
                styleUrls: ['./modal-about-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "flWs":
/*!***********************************************************!*\
  !*** ./src/app/elements/copywrite/copywrite.component.ts ***!
  \***********************************************************/
/*! exports provided: CopywriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopywriteComponent", function() { return CopywriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CopywriteComponent {
    constructor() { }
    ngOnInit() {
        (function ($) {
            /* setTimeout(function(){ */
            jQuery('.styleswitcher').animate({
                'left': '-220px'
            });
            jQuery('.switcher-demo').animate({
                'left': '-300px'
            });
            jQuery('.switch-btn').addClass('closed');
            jQuery('.switch-demo-btn').addClass('closed');
            //=== Switcher panal slide function	=====================//
            jQuery('.switch-btn').on('click', function () {
                if (jQuery(this).hasClass('open')) {
                    jQuery(this).addClass('closed');
                    jQuery(this).removeClass('open');
                    jQuery('.styleswitcher').animate({
                        'left': '-220px'
                    });
                }
                else {
                    if (jQuery(this).hasClass('closed')) {
                        jQuery(this).addClass('open');
                        jQuery(this).removeClass('closed');
                        jQuery('.styleswitcher').animate({
                            'left': '0'
                        });
                    }
                }
            });
            //=== Switcher panal slide function	=====================//
            jQuery('.switch-demo-btn').on('click', function () {
                if (jQuery(this).hasClass('open')) {
                    jQuery(this).addClass('closed');
                    jQuery(this).removeClass('open');
                    jQuery('.switcher-demo').animate({
                        'left': '-300px'
                    });
                }
                else {
                    if (jQuery(this).hasClass('closed')) {
                        jQuery(this).addClass('open');
                        jQuery(this).removeClass('closed');
                        jQuery('.switcher-demo').animate({
                            'left': '0'
                        });
                    }
                }
            });
            //=== Color css change function	=====================//
            // Color changer
            jQuery(".skin-1").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-1.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black.png");
                return false;
            });
            jQuery(".skin-2").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-2.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-2.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-2.png");
                return false;
            });
            jQuery(".skin-3").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-3.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-3.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-3.png");
                return false;
            });
            jQuery(".skin-4").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-4.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-4.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-4.png");
                return false;
            });
            jQuery(".skin-5").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-5.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-5.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-5.png");
                return false;
            });
            jQuery(".skin-6").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-6.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-6.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-6.png");
                return false;
            });
            jQuery(".skin-7").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-7.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-7.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-7.png");
                return false;
            });
            jQuery(".skin-8").on('click', function () {
                /* jQuery(".skin").attr("href", "assets/css/skin/skin-8.css"); */
                jQuery(".site-header .logo-header img").attr("src", "assets/images/logo-8.png");
                jQuery(".site-header .logo-dark img").attr("src", "assets/images/logo-black-8.png");
                return false;
            });
            //=== Color css change function	=====================//	
            /* }, 500);   */
        })(jQuery);
    }
}
CopywriteComponent.??fac = function CopywriteComponent_Factory(t) { return new (t || CopywriteComponent)(); };
CopywriteComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CopywriteComponent, selectors: [["app-copywrite"]], decls: 80, vars: 0, consts: [[1, "copyright-fixed"], ["href", "javascript:void(0);"], ["id", "dzSwitcher", 1, "styleswitcher", 2, "left", "-220px"], [1, "switcher-btn-bx"], [1, "switch-btn", "closed"], [1, "fa", "fa-cogs", "fa-lg"], [1, "styleswitcher-inner"], ["href", "javascript:void(0);", "onclick", "deleteAllCookie();", 1, "dez-page", "site-button", "button-sm"], [1, "theme-box"], [1, "switcher-title"], ["val", "themeFullColor", 1, "color-skins-db", "theme-panel-save"], ["href", "#", "dir", "css/skin/skin-1", "logo", "assets/images/logo.png", 1, "theme-skin", "skin-1"], ["href", "#", "dir", "css/skin/skin-2", "logo", "assets/images/logo-2.png", 1, "theme-skin", "skin-2"], ["href", "#", "dir", "css/skin/skin-3", "logo", "assets/images/logo-3.png", 1, "theme-skin", "skin-3"], ["href", "#", "dir", "css/skin/skin-4", "logo", "assets/images/logo-4.png", 1, "theme-skin", "skin-4"], ["href", "#", "dir", "css/skin/skin-5", "logo", "assets/images/logo-5.png", 1, "theme-skin", "skin-5"], ["href", "#", "dir", "css/skin/skin-6", "logo", "assets/images/logo-6.png", 1, "theme-skin", "skin-6"], ["href", "#", "dir", "css/skin/skin-7", "logo", "assets/images/logo-7.png", 1, "theme-skin", "skin-7"], ["href", "#", "dir", "css/skin/skin-8", "logo", "assets/images/logo-8.png", 1, "theme-skin", "skin-8"], [1, "switcher-demo", 2, "left", "0px"], [1, "switch-demo-btn", "open"], [1, "switch-demo-bx"], [1, "switch-demo"], ["routerLink", "/index-photographer"], ["src", "assets/images/demo/01-index-photographer.jpg", "alt", ""], ["routerLink", "/index-business-man"], ["src", "assets/images/demo/02-index-business-man.jpg", "alt", ""], ["routerLink", "/index-modal"], ["src", "assets/images/demo/03-index-modal.jpg", "alt", ""], ["routerLink", "/index-doctor"], ["src", "assets/images/demo/04-index-doctor.jpg", "alt", ""], ["routerLink", "/index-security"], ["src", "assets/images/demo/05-index-security.jpg", "alt", ""], ["routerLink", "/index-health-coach"], ["src", "assets/images/demo/06-index-health-coach.jpg", "alt", ""], ["routerLink", "/index-electrician"], ["src", "assets/images/demo/07-index-electrician.jpg", "alt", ""], ["routerLink", "/index-blogger"], ["src", "assets/images/demo/08-index-blogger.jpg", "alt", ""], ["routerLink", "/index-web-developer"], ["src", "assets/images/demo/09-index-web-developer.jpg", "alt", ""], ["routerLink", "/index-swimmer"], ["src", "assets/images/demo/10-index-swimmer.jpg", "alt", ""], ["routerLink", "/index-dance-trainer"], ["src", "assets/images/demo/11-index-dance-trainer.jpg", "alt", ""], ["routerLink", "/index-news-anchor"], ["src", "assets/images/demo/12-index-news-anchor.jpg", "alt", ""], ["routerLink", "/index-youtube"], ["src", "assets/images/demo/13-index-youtube.jpg", "alt", ""]], template: function CopywriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "DexignLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " \u00A9 2021 All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Delete All Cookie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Check Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2NvcHl3cml0ZS9jb3B5d3JpdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CopywriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-copywrite',
                templateUrl: './copywrite.component.html',
                styleUrls: ['./copywrite.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hUM4":
/*!*******************************************************************************!*\
  !*** ./src/app/security/security-contact-us/security-contact-us.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SecurityContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityContactUsComponent", function() { return SecurityContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");







class SecurityContactUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-4.png",
            profile: "security"
        };
        this.page_banner = {
            title: "Contact Us",
            profile: "security",
        };
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                if (jQuery('.dezPlaceAni').length) {
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus', function () {
                        $(this).parents('.form-group, .news-box').addClass('focused');
                    });
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur', function () {
                        var inputValue = $(this).val();
                        if (inputValue == "") {
                            $(this).removeClass('filled');
                            $(this).parents('.form-group, .news-box').removeClass('focused');
                        }
                        else {
                            $(this).addClass('filled');
                        }
                    });
                }
            }, 500);
        })(jQuery);
    }
}
SecurityContactUsComponent.??fac = function SecurityContactUsComponent_Factory(t) { return new (t || SecurityContactUsComponent)(); };
SecurityContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SecurityContactUsComponent, selectors: [["app-security-contact-us"]], decls: 59, vars: 2, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "contact-form"], ["method", "post", "action", "script/contact.php", 1, "dzForm", "dezPlaceAni"], [1, "dzFormMsg"], ["type", "hidden", "value", "Contact", "name", "dzToDo"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "las", "la-user", "text-gradient"], ["name", "dzName", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-envelope-open", "text-gradient"], ["name", "dzEmail", "type", "email", "required", "", 1, "form-control"], [1, "las", "la-phone-volume", "text-gradient"], ["name", "dzPhone", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-file-alt", "text-gradient"], ["name", "dzSubject", "type", "text", "required", "", 1, "form-control"], [1, "col-sm-12"], ["name", "dzMessage", "rows", "4", "required", "", 1, "form-control"], [1, "col-md-12", "m-b20", "m-xs-b0"], ["data-sitekey", "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN", "data-callback", "verifyRecaptchaCallback", "data-expired-callback", "expiredRecaptchaCallback", 1, "g-recaptcha"], ["data-recaptcha", "true", "required", "", "data-error", "Please complete the Captcha", 1, "form-control", "d-none", 2, "display", "none"], [1, "col-md-12"], ["name", "submit", "type", "submit", "value", "Submit", 1, "site-button", "button-gradient", "button-md", "radius-no"], [1, "section-full", "content-inner"], [1, "section-full", "maps"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14445.871196953145!2d75.8417313!3d25.153677599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1580295328844!5m2!1sen!2sin", "allowfullscreen", "", 2, "border", "0", "width", "100%"]], template: function SecurityContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "How Can I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Help You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Your Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "iframe", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3NlY3VyaXR5LWNvbnRhY3QtdXMvc2VjdXJpdHktY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SecurityContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-security-contact-us',
                templateUrl: './security-contact-us.component.html',
                styleUrls: ['./security-contact-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mmjH":
/*!******************************************************************!*\
  !*** ./src/app/elements/progress-bar/circle/circle.component.ts ***!
  \******************************************************************/
/*! exports provided: CircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CircleComponent {
    constructor() { }
    ngOnInit() {
        (function ($) {
            jQuery('.radial-progress').each(function (index, value) {
                jQuery(this).find(jQuery('circle.complete')).removeAttr('style');
            });
            jQuery(window).scroll(function () {
                jQuery('svg.radial-progress').each(function (index, value) {
                    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
                    if (jQuery(window).scrollTop() > jQuery(this).offset().top - (jQuery(window).height() * 0.75) &&
                        jQuery(window).scrollTop() < jQuery(this).offset().top + jQuery(this).height() - (jQuery(window).height() * 0.25)) {
                        // Get percentage of progress
                        var percent = jQuery(value).data('percentage');
                        console.log(value);
                        console.log(percent + "----------");
                        // Get radius of the svg's circle.complete
                        var radius = jQuery(this).find(jQuery('circle.complete')).attr('r');
                        // Get circumference (2??r)
                        var circumference = 2 * Math.PI * radius;
                        // Get stroke-dashoffset value based on the percentage of the circumference
                        var strokeDashOffset = circumference - ((percent * circumference) / 100);
                        // Transition progress for 1.25 seconds
                        jQuery(this).find(jQuery('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
                    }
                });
            }).trigger('scroll');
        })(jQuery);
    }
}
CircleComponent.??fac = function CircleComponent_Factory(t) { return new (t || CircleComponent)(); };
CircleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CircleComponent, selectors: [["app-circle"]], inputs: { data: "data" }, decls: 41, vars: 12, consts: [[1, "row"], [1, "col-xl-3", "col-md-6", "col-6", "m-lg-b20"], [1, "radial-progress-box"], ["viewBox", "0 0 80 80", 1, "radial-progress"], ["cx", "40", "cy", "40", "r", "35", 1, "incomplete"], ["cx", "40", "cy", "40", "r", "35", 1, "complete"], ["x", "50%", "y", "58%", "transform", "matrix(0, 1, -1, 0, 80, 0)", 1, "percentage"], [1, "icon-content"], [1, "title"], [1, "col-xl-3", "col-md-6", "col-6"]], template: function CircleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "45%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "German");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "95%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Italian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-percentage", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("stroke-dashoffset", "39.58406743523136");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-percentage", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("stroke-dashoffset", "39.58406743523136");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-percentage", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("stroke-dashoffset", "39.58406743523136");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-percentage", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("stroke-dashoffset", "39.58406743523136");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3Byb2dyZXNzLWJhci9jaXJjbGUvY2lyY2xlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circle',
                templateUrl: './circle.component.html',
                styleUrls: ['./circle.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "p+3h":
/*!********************************************************************!*\
  !*** ./src/app/modal/modal-portfolio/modal-portfolio.component.ts ***!
  \********************************************************************/
/*! exports provided: ModalPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPortfolioComponent", function() { return ModalPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ModalPortfolioComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const portfolio_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("card-container col-xl-4 col-lg-6 col-md-6 col-sm-6 ", portfolio_r1.filter_class, " wow fadeInLeft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/brand-model/", portfolio_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("exthumbimage", "assets/images/gallery/brand-model/", portfolio_r1.image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/brand-model/orignal/", portfolio_r1.src_image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.category);
} }
class ModalPortfolioComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-3.png",
            profile: "modal"
        };
        this.page_banner = {
            title: "Portfolio",
            profile: "modal",
        };
        this.categories = [
            {
                title: "Design",
                filter_title: "design",
            },
            {
                title: "Photography",
                filter_title: "photography",
            },
            {
                title: "development",
                filter_title: "Development",
            },
        ];
        this.portfolios = [
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic1.jpg",
                src_image: "main-pic1.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic2.jpg",
                src_image: "main-pic2.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic3.jpg",
                src_image: "main-pic3.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic4.jpg",
                src_image: "main-pic4.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic5.jpg",
                src_image: "main-pic5.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic6.jpg",
                src_image: "main-pic6.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic7.jpg",
                src_image: "main-pic7.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic8.jpg",
                src_image: "main-pic8.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic9.jpg",
                src_image: "main-pic9.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
        ];
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                var self = jQuery("#masonry, .masonry");
                if (jQuery('.card-container').length) {
                    self.imagesLoaded(function () {
                        self.masonry({
                            gutterWidth: 15,
                            isAnimated: true,
                            itemSelector: ".card-container"
                        });
                    });
                }
                jQuery(".filters").on('click', 'li', function (e) {
                    var filter = jQuery(this).attr("data-filter");
                    self.masonryFilter({
                        filter: function () {
                            if (!filter)
                                return true;
                            return jQuery(this).hasClass(filter);
                        }
                    });
                });
            }, 500);
        })(jQuery);
    }
}
ModalPortfolioComponent.??fac = function ModalPortfolioComponent_Factory(t) { return new (t || ModalPortfolioComponent)(); };
ModalPortfolioComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModalPortfolioComponent, selectors: [["app-modal-portfolio"]], decls: 39, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head", "m-b20"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "site-filters", "clearfix"], ["data-toggle", "buttons", 1, "filters"], ["data-filter", "", 1, "btn", "active"], ["type", "radio"], ["href", "javascript:void(0);", 1, "site-button-link"], ["data-filter", "design", 1, "btn"], ["data-filter", "photography", 1, "btn"], ["data-filter", "development", 1, "btn"], [1, "clearfix"], ["id", "masonry", 1, "dlab-gallery-listing", "gallery", "lightgallery", "row", "sp40"], ["ngFor", "", 3, "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s"], [1, "dlab-box", "dlab-gallery-box"], [1, "dlab-media"], ["alt", "", 3, "src"], [1, "check-km", 3, "exthumbimage", "src", "title"], [1, "la", "la-plus"], [1, "dlab-info"], [1, "title"]], template: function ModalPortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Some of My ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Creative Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, ModalPortfolioComponent_ng_template_38_Template, 11, 9, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.portfolios);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLXBvcnRmb2xpby9tb2RhbC1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-portfolio',
                templateUrl: './modal-portfolio.component.html',
                styleUrls: ['./modal-portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rPiP":
/*!***************************************************************!*\
  !*** ./src/app/photographer/portfolio/portfolio.component.ts ***!
  \***************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PortfolioComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const portfolio_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("card-container col-xl-4 col-lg-6 col-md-6 col-sm-6 ", portfolio_r1.filter_class, " wow fadeInLeft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/common/", portfolio_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("exthumbimage", "assets/images/gallery/common/", portfolio_r1.image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/gallery/common/orignal/", portfolio_r1.src_image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](portfolio_r1.category);
} }
class PortfolioComponent {
    constructor() {
        this.profile = {
            logo: "logo-black.png",
            profile: "photographer"
        };
        this.page_banner = {
            title: "Portfolio",
            profile: "photographer",
        };
        this.categories = [
            {
                title: "Design",
                filter_title: "design",
            },
            {
                title: "Photography",
                filter_title: "photography",
            },
            {
                title: "development",
                filter_title: "Creative",
            },
        ];
        this.portfolios = [
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic1.jpg",
                src_image: "assets/images/gallery/common/pic1.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic2.jpg",
                src_image: "main-pic2.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic3.jpg",
                src_image: "main-pic3.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic4.jpg",
                src_image: "main-pic4.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic5.jpg",
                src_image: "main-pic5.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic6.jpg",
                src_image: "main-pic6.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic7.jpg",
                src_image: "main-pic7.jpg",
                link: "javascript:vois(0)",
                filter_class: "development",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic8.jpg",
                src_image: "main-pic8.jpg",
                link: "javascript:vois(0)",
                filter_class: "design",
            },
            {
                title: "MOCKUP COLLECTION",
                category: "DESIGN",
                image: "pic9.jpg",
                src_image: "main-pic9.jpg",
                link: "javascript:vois(0)",
                filter_class: "photography",
            },
        ];
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                var self = jQuery("#masonry, .masonry");
                if (jQuery('.card-container').length) {
                    self.imagesLoaded(function () {
                        self.masonry({
                            gutterWidth: 15,
                            isAnimated: true,
                            itemSelector: ".card-container"
                        });
                    });
                }
                jQuery(".filters").on('click', 'li', function (e) {
                    var filter = jQuery(this).attr("data-filter");
                    self.masonryFilter({
                        filter: function () {
                            if (!filter)
                                return true;
                            return jQuery(this).hasClass(filter);
                        }
                    });
                });
                /* jQuery('#lightgallery, .lightgallery').lightGallery({
                  selector : '.check-km',
                  loop:true,
                  thumbnail:true,
                  exThumbImage: 'data-exthumbimage'
                }); */
            }, 500);
        })(jQuery);
    }
}
PortfolioComponent.??fac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 39, vars: 3, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head", "m-b20"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "site-filters", "clearfix"], ["data-toggle", "buttons", 1, "filters"], ["data-filter", "", 1, "btn", "active"], ["type", "radio"], ["href", "javascript:void(0);", 1, "site-button-link"], ["data-filter", "design", 1, "btn"], ["data-filter", "photography", 1, "btn"], ["data-filter", "development", 1, "btn"], [1, "clearfix"], ["id", "masonry", 1, "dlab-gallery-listing", "gallery", "lightgallery", "row", "sp40"], ["ngFor", "", 3, "ngForOf"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s"], [1, "dlab-box", "dlab-gallery-box"], [1, "dlab-media"], ["alt", "", 3, "src"], [1, "check-km", 3, "exthumbimage", "src", "title"], [1, "la", "la-plus"], [1, "dlab-info"], [1, "title"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Some of My ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Creative Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, PortfolioComponent_ng_template_38_Template, 11, 9, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.portfolios);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGhlci9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s/hJ":
/*!*************************************************************!*\
  !*** ./src/app/elements/social-bar/social-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: SocialBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialBarComponent", function() { return SocialBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SocialBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialBarComponent.??fac = function SocialBarComponent_Factory(t) { return new (t || SocialBarComponent)(); };
SocialBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SocialBarComponent, selectors: [["app-social-bar"]], decls: 11, vars: 0, consts: [[1, "social-sidebar"], ["target", "_blank", "href", "https://www.facebook.com/dexignzone/"], ["target", "_blank", "href", "https://twitter.com/dexignzones"], ["target", "_blank", "href", "https://www.linkedin.com/in/dexignzone"]], template: function SocialBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3NvY2lhbC1iYXIvc29jaWFsLWJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SocialBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-bar',
                templateUrl: './social-bar.component.html',
                styleUrls: ['./social-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s8YL":
/*!**********************************************************************!*\
  !*** ./src/app/modal/modal-contact-us/modal-contact-us.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModalContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContactUsComponent", function() { return ModalContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/icon-box/icon-box.component */ "JE0/");







class ModalContactUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black-3.png",
            profile: "modal"
        };
        this.page_banner = {
            title: "Contact Us",
            profile: "modal",
        };
    }
    ngOnInit() {
        (function ($) {
            setTimeout(function () {
                if (jQuery('.dezPlaceAni').length) {
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus', function () {
                        $(this).parents('.form-group, .news-box').addClass('focused');
                    });
                    $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur', function () {
                        var inputValue = $(this).val();
                        if (inputValue == "") {
                            $(this).removeClass('filled');
                            $(this).parents('.form-group, .news-box').removeClass('focused');
                        }
                        else {
                            $(this).addClass('filled');
                        }
                    });
                }
            }, 500);
        })(jQuery);
    }
}
ModalContactUsComponent.??fac = function ModalContactUsComponent_Factory(t) { return new (t || ModalContactUsComponent)(); };
ModalContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModalContactUsComponent, selectors: [["app-modal-contact-us"]], decls: 59, vars: 2, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], [1, "section-full"], [1, "section-head"], [1, "title", "text-uppercase"], [1, "text-gradient"], [1, "contact-form"], ["method", "post", "action", "script/contact.php", 1, "dzForm", "dezPlaceAni"], [1, "dzFormMsg"], ["type", "hidden", "value", "Contact", "name", "dzToDo"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "las", "la-user", "text-gradient"], ["name", "dzName", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-envelope-open", "text-gradient"], ["name", "dzEmail", "type", "email", "required", "", 1, "form-control"], [1, "las", "la-phone-volume", "text-gradient"], ["name", "dzPhone", "type", "text", "required", "", 1, "form-control"], [1, "las", "la-file-alt", "text-gradient"], ["name", "dzSubject", "type", "text", "required", "", 1, "form-control"], [1, "col-sm-12"], ["name", "dzMessage", "rows", "4", "required", "", 1, "form-control"], [1, "col-md-12", "m-b20", "m-xs-b0"], ["data-sitekey", "6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN", "data-callback", "verifyRecaptchaCallback", "data-expired-callback", "expiredRecaptchaCallback", 1, "g-recaptcha"], ["data-recaptcha", "true", "required", "", "data-error", "Please complete the Captcha", 1, "form-control", "d-none", 2, "display", "none"], [1, "col-md-12"], ["name", "submit", "type", "submit", "value", "Submit", 1, "site-button", "button-gradient", "button-md", "radius-no"], [1, "section-full", "content-inner"], [1, "section-full", "maps"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14445.871196953145!2d75.8417313!3d25.153677599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1580295328844!5m2!1sen!2sin", "allowfullscreen", "", 2, "border", "0", "width", "100%"]], template: function ModalContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "How Can I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Help You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Your Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-icon-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "iframe", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_icon_box_icon_box_component__WEBPACK_IMPORTED_MODULE_5__["IconBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWNvbnRhY3QtdXMvbW9kYWwtY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-contact-us',
                templateUrl: './modal-contact-us.component.html',
                styleUrls: ['./modal-contact-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ujG/":
/*!***************************************************************!*\
  !*** ./src/app/elements/testimonial/testimonial.component.ts ***!
  \***************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TestimonialComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const testimonial_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](testimonial_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/testimonial/", testimonial_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](testimonial_r1.client_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](testimonial_r1.designation);
} }
function TestimonialComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, TestimonialComponent_1_ng_template_0_Template, 13, 4, "ng-template", 2);
} }
class TestimonialComponent {
    constructor() {
        this.customOptions = {
            loop: true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            /* paginationSpeed: 3000, */
            /* slideSpeed: 3000, */
            smartSpeed: 3000,
            autoplay: true,
            margin: 30,
            nav: true,
            dots: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },
        };
    }
    ngOnInit() {
    }
}
TestimonialComponent.??fac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
TestimonialComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], inputs: { data: "data" }, decls: 2, vars: 2, consts: [[1, "testimonial-one1", "owl-carousel-1", "dots-style-1", "owl-theme", "owl-none", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "item"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "testimonial-1", "wow", "fadeInUp"], [1, "testimonial-text"], [1, "ti-quote-left", "quote-icon", "text-gradient"], [1, "testimonial-detail", "clearfix"], [1, "testimonial-pic", "radius"], ["width", "100", "height", "100", "alt", "", 3, "src"], [1, "testimonial-name"], [1, "testimonial-position"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TestimonialComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonial',
                templateUrl: './testimonial.component.html',
                styleUrls: ['./testimonial.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _photographer_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photographer/index/index.component */ "RypF");
/* harmony import */ var _photographer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photographer/about-us/about-us.component */ "x2Ll");
/* harmony import */ var _photographer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photographer/contact-us/contact-us.component */ "1bEB");
/* harmony import */ var _photographer_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photographer/portfolio/portfolio.component */ "rPiP");
/* harmony import */ var _photographer_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photographer/resume/resume.component */ "+24W");
/* harmony import */ var _modal_modal_about_us_modal_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal-about-us/modal-about-us.component */ "eP8G");
/* harmony import */ var _modal_modal_contact_us_modal_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal-contact-us/modal-contact-us.component */ "s8YL");
/* harmony import */ var _modal_modal_index_modal_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal-index/modal-index.component */ "d9dI");
/* harmony import */ var _modal_modal_portfolio_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/modal-portfolio/modal-portfolio.component */ "p+3h");
/* harmony import */ var _modal_modal_resume_modal_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/modal-resume/modal-resume.component */ "cWzX");
/* harmony import */ var _security_security_about_us_security_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./security/security-about-us/security-about-us.component */ "1ECE");
/* harmony import */ var _security_security_contact_us_security_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./security/security-contact-us/security-contact-us.component */ "hUM4");
/* harmony import */ var _security_security_index_security_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./security/security-index/security-index.component */ "Kkq/");
/* harmony import */ var _security_security_portfolio_security_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./security/security-portfolio/security-portfolio.component */ "V6RS");
/* harmony import */ var _security_security_resume_security_resume_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./security/security-resume/security-resume.component */ "Az6h");
/* harmony import */ var _web_developer_web_developer_about_us_web_developer_about_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web-developer/web-developer-about-us/web-developer-about-us.component */ "N+9G");
/* harmony import */ var _web_developer_web_developer_contact_us_web_developer_contact_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web-developer/web-developer-contact-us/web-developer-contact-us.component */ "+vy1");
/* harmony import */ var _web_developer_web_developer_index_web_developer_index_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./web-developer/web-developer-index/web-developer-index.component */ "6a+P");
/* harmony import */ var _web_developer_web_developer_portfolio_web_developer_portfolio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./web-developer/web-developer-portfolio/web-developer-portfolio.component */ "IIBm");
/* harmony import */ var _web_developer_web_developer_resume_web_developer_resume_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./web-developer/web-developer-resume/web-developer-resume.component */ "Zz6a");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/blog/blog.component */ "5tuB");
/* harmony import */ var _pages_blog_single_blog_single_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/blog-single/blog-single.component */ "+r0e");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");



























const routes = [
    { path: '', component: _web_developer_web_developer_index_web_developer_index_component__WEBPACK_IMPORTED_MODULE_19__["WebDeveloperIndexComponent"] },
    { path: 'index', component: _photographer_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'index-photographer', component: _photographer_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'about-us-photographer', component: _photographer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'contact-us-photographer', component: _photographer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'portfolio-photographer', component: _photographer_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] },
    { path: 'resume-photographer', component: _photographer_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"] },
    { path: 'about-us-modal', component: _modal_modal_about_us_modal_about_us_component__WEBPACK_IMPORTED_MODULE_7__["ModalAboutUsComponent"] },
    { path: 'contact-us-modal', component: _modal_modal_contact_us_modal_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ModalContactUsComponent"] },
    { path: 'index-modal', component: _modal_modal_index_modal_index_component__WEBPACK_IMPORTED_MODULE_9__["ModalIndexComponent"] },
    { path: 'portfolio-modal', component: _modal_modal_portfolio_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["ModalPortfolioComponent"] },
    { path: 'resume-modal', component: _modal_modal_resume_modal_resume_component__WEBPACK_IMPORTED_MODULE_11__["ModalResumeComponent"] },
    { path: 'about-us-security', component: _security_security_about_us_security_about_us_component__WEBPACK_IMPORTED_MODULE_12__["SecurityAboutUsComponent"] },
    { path: 'contact-us-security', component: _security_security_contact_us_security_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["SecurityContactUsComponent"] },
    { path: 'index-security', component: _security_security_index_security_index_component__WEBPACK_IMPORTED_MODULE_14__["SecurityIndexComponent"] },
    { path: 'portfolio-security', component: _security_security_portfolio_security_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["SecurityPortfolioComponent"] },
    { path: 'resume-security', component: _security_security_resume_security_resume_component__WEBPACK_IMPORTED_MODULE_16__["SecurityResumeComponent"] },
    { path: 'about-us-web-developer', component: _web_developer_web_developer_about_us_web_developer_about_us_component__WEBPACK_IMPORTED_MODULE_17__["WebDeveloperAboutUsComponent"] },
    {
        path: 'contact-us-web-developer',
        component: _web_developer_web_developer_contact_us_web_developer_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["WebDeveloperContactUsComponent"],
    },
    { path: 'index-web-developer', component: _web_developer_web_developer_index_web_developer_index_component__WEBPACK_IMPORTED_MODULE_19__["WebDeveloperIndexComponent"] },
    {
        path: 'portfolio-web-developer',
        component: _web_developer_web_developer_portfolio_web_developer_portfolio_component__WEBPACK_IMPORTED_MODULE_20__["WebDeveloperPortfolioComponent"],
    },
    { path: 'resume-web-developer', component: _web_developer_web_developer_resume_web_developer_resume_component__WEBPACK_IMPORTED_MODULE_21__["WebDeveloperResumeComponent"] },
    { path: 'about-us-web-developer', component: _web_developer_web_developer_about_us_web_developer_about_us_component__WEBPACK_IMPORTED_MODULE_17__["WebDeveloperAboutUsComponent"] },
    {
        path: 'contact-us-web-developer',
        component: _web_developer_web_developer_contact_us_web_developer_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["WebDeveloperContactUsComponent"],
    },
    { path: 'index-web-developer', component: _web_developer_web_developer_index_web_developer_index_component__WEBPACK_IMPORTED_MODULE_19__["WebDeveloperIndexComponent"] },
    {
        path: 'portfolio-web-developer',
        component: _web_developer_web_developer_portfolio_web_developer_portfolio_component__WEBPACK_IMPORTED_MODULE_20__["WebDeveloperPortfolioComponent"],
    },
    { path: 'resume-web-developer', component: _web_developer_web_developer_resume_web_developer_resume_component__WEBPACK_IMPORTED_MODULE_21__["WebDeveloperResumeComponent"] },
    { path: 'blog', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_22__["BlogComponent"] },
    { path: 'blog-single', component: _pages_blog_single_blog_single_component__WEBPACK_IMPORTED_MODULE_23__["BlogSingleComponent"] },
    { path: '**', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_24__["Page404Component"] },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "x2Ll":
/*!*************************************************************!*\
  !*** ./src/app/photographer/about-us/about-us.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/loading/loading.component */ "G5fZ");
/* harmony import */ var _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/header/header1/header1.component */ "L0qV");
/* harmony import */ var _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/banner/page-banner/page-banner.component */ "B7r3");
/* harmony import */ var _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/social-bar/social-bar.component */ "s/hJ");
/* harmony import */ var _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/my-services/my-services.component */ "WtFa");
/* harmony import */ var _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/fun-fact-counter/fun-fact-counter.component */ "HK96");
/* harmony import */ var _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/testimonial/testimonial.component */ "ujG/");
/* harmony import */ var _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/our-client/our-client.component */ "Zotn");










class AboutUsComponent {
    constructor() {
        this.profile = {
            logo: "logo-black.png",
            profile: "photographer"
        };
        this.page_banner = {
            title: "About us",
            profile: "photographer",
        };
        this.page_info = {
            title: "What I Do",
            image: "pic1.jpg",
            description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue."
        };
        this.member = {
            image: "",
            logo: "",
            designation: "",
            age: "29",
            dob: "",
            residence: "USA",
            address: "88 SOME STREET, SOME TOW",
            email: "EMAIL@EXAMPLE.COM",
            phone: "+0123 123 456 789",
            skype: "ALEX.SMITH",
            whatsapp: "",
            about_me: "",
            intrests: "",
            name: "",
            study: "",
            highes_degree: "",
            profile: "photographer"
        };
        this.services = [
            {
                title: "Portrait Photographer",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "Engagement photography",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "Commercial photography",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
            {
                title: "Personal photography",
                description: "Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
            },
        ];
        this.fun_facts = [
            {
                number: "2325",
                title: "HAPPY CLIENTS",
            },
            {
                number: "7582",
                title: "WORKING HOURS",
            },
            {
                number: "120",
                title: "AWARDS WON",
            },
            {
                number: "2000",
                title: "PROJECTS COMPLETED",
            },
        ];
        this.testimonials = [
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "photographer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "Manager",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "Client",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Steve Tylor",
                image: "pic1.jpg",
                designation: "photographer",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "David Matin",
                image: "pic3.jpg",
                designation: "Manager",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
            {
                client_name: "Monica Rodriguez",
                image: "pic2.jpg",
                designation: "Client",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
            },
        ];
        this.our_clients = [
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo3.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo5.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo1.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo2.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo6.jpg",
                link: "javascript:void(0);",
            },
            {
                client_title: "",
                logo: "logo4.jpg",
                link: "javascript:void(0);",
            },
        ];
    }
    ngOnInit() {
    }
}
AboutUsComponent.??fac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 64, vars: 15, consts: [[1, "page-wraper"], [3, "data"], [1, "content-body"], [1, "content-body-inner"], ["data-wow-duration", "2s", "data-wow-delay", "0.2s", 1, "section-full", "wow", "fadeInUp"], ["alt", "", 3, "src"], [1, "section-full", "content-inner-1"], [1, "row", "align-items-center"], ["data-wow-duration", "2s", "data-wow-delay", "0.4s", 1, "col-md-6", "wow", "fadeInUp"], [1, "section-head", "m-b0"], [1, "title", "text-uppercase"], [1, "m-b0"], ["data-wow-duration", "2s", "data-wow-delay", "0.6s", 1, "col-md-6", "wow", "fadeInUp"], [1, "personal-info"], ["href", "#"], [1, "section-head"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-page-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-social-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "AGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "RESIDENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "E-MAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "PHONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "SKYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "app-my-services", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Fun Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "app-fun-fact-counter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-testimonial", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Our Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-our-client", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.page_banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/about/", ctx.page_info.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.page_info.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.residence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.member.skype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.fun_facts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.our_clients);
    } }, directives: [_elements_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _elements_header_header1_header1_component__WEBPACK_IMPORTED_MODULE_2__["Header1Component"], _elements_banner_page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_3__["PageBannerComponent"], _elements_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_4__["SocialBarComponent"], _elements_my_services_my_services_component__WEBPACK_IMPORTED_MODULE_5__["MyServicesComponent"], _elements_fun_fact_counter_fun_fact_counter_component__WEBPACK_IMPORTED_MODULE_6__["FunFactCounterComponent"], _elements_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__["TestimonialComponent"], _elements_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__["OurClientComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGhlci9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yMhq":
/*!**************************************************************!*\
  !*** ./src/app/elements/progress-bar/line/line.component.ts ***!
  \**************************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LineComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const skills_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](skills_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", skills_r1.score, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMapInterpolate1"]("width: ", skills_r1.score, "%");
} }
class LineComponent {
    constructor() { }
    ngOnInit() {
    }
}
LineComponent.??fac = function LineComponent_Factory(t) { return new (t || LineComponent)(); };
LineComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LineComponent, selectors: [["app-line"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["class", "progress-box", 4, "ngFor", "ngForOf"], [1, "progress-box"], [1, "progress-title"], [1, "progress"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", "role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "wow", "slideInLeft"]], template: function LineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, LineComponent_div_0_Template, 7, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3Byb2dyZXNzLWJhci9saW5lL2xpbmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line',
                templateUrl: './line.component.html',
                styleUrls: ['./line.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
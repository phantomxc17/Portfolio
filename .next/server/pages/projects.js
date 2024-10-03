(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 7068:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ProjectCard_card__Ilp8p",
	"content": "ProjectCard_content__SHdnM",
	"tags": "ProjectCard_tags__Atl1P",
	"cta": "ProjectCard_cta__J86_O",
	"underline": "ProjectCard_underline__IoTds"
};


/***/ }),

/***/ 9872:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ProjectsPage_container__f2WwY"
};


/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/ProjectCard.module.css
var ProjectCard_module = __webpack_require__(7068);
var ProjectCard_module_default = /*#__PURE__*/__webpack_require__.n(ProjectCard_module);
;// CONCATENATED MODULE: ./components/ProjectCard.jsx



const ProjectCard = ({ project  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProjectCard_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: project.image,
                height: 300,
                width: 600,
                alt: project.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProjectCard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: project.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: project.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectCard_module_default()).tags,
                        children: project.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: tag,
                                children: tag
                            }, tag))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ProjectCard_module_default()).cta,
                        children: [
                            project.source_code && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.source_code,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "Source Code"
                            }),
                            project.demo && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                id: "2",
                                href: project.demo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "Live Demo"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);

;// CONCATENATED MODULE: ./pages/api/projects.json
const projects_namespaceObject = JSON.parse('[{"id":1,"name":"ResQ-Food","image":"https://imgur.com/FAY099m.png","description":"An application for selling food with close expiry date is close.","tags":["java"],"source_code":"https://github.com/phantomxc17/ResQ-Food"},{"id":2,"name":"Breath Forum","image":"https://imgur.com/mTOo8mq.png","description":"Web based application to create discussion forums between one user and another. There is also a community feature to create a community between users","tags":["next","tailwind","mongodb"],"source_code":"https://github.com/phantomxc17/Breath","demo":"https://breaath.vercel.app/"},{"id":3,"name":"Siramkuy","image":"https://imgur.com/JgtBdmy.jpeg","description":"An IoT device automatic sprinkler that will work if the soil is dry.","tags":["CPP","blynk"],"source_code":"https://github.com/phantomxc17/Siramkuy"},{"id":4,"name":"VR Campus Tour","image":"https://imgur.com/5Khph7B.jpg","description":"VR for campus tours to make the campus orientation period for new students more enjoyable","tags":["unity","CSharp"],"source_code":"https://github.com/phantomxc17/VR-Campus-Tour"},{"id":5,"name":"Breath TV","image":"https://imgur.com/qTEkV5y.jpg","description":"Mobile application that contains information about currently showing and popular films. App can add movies to watchlist and can search movie details.","tags":["java","android"],"source_code":"https://github.com/phantomxc17/Movie-App"},{"id":6,"name":"Enhancing Water Spinach Cultivation Efficiency through Deep Pipe Irrigation Utilizing IoT Technology","image":"https://imgur.com/K26eOBp.jpg","description":"Research on the effectiveness of water spinach plant growth using the Siramkuy iot in regular planting techniques and using the deep pipe irrigation technique","tags":["research"],"source_code":"https://github.com/phantomxc17/Enhancing-Water-Spinach-Cultivation-Efficiency-through-Deep-Pipe-Irrigation-Utilizing-IoT-Technology"}]');
;// CONCATENATED MODULE: ./pages/api/projects.js

const getProjects = ()=>{
    return projects_namespaceObject;
};
/* harmony default export */ const projects = ((req, res)=>{
    const projects = getProjects();
    res.json(projects);
});

// EXTERNAL MODULE: ./styles/ProjectsPage.module.css
var ProjectsPage_module = __webpack_require__(9872);
var ProjectsPage_module_default = /*#__PURE__*/__webpack_require__.n(ProjectsPage_module);
;// CONCATENATED MODULE: ./pages/projects.jsx




const ProjectsPage = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Stuff I've Built So Far"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProjectsPage_module_default()).container,
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProjectCard, {
                        project: project
                    }, project.id))
            })
        ]
    });
};
async function getStaticProps() {
    const projects = getProjects();
    return {
        props: {
            title: "Projects",
            projects
        }
    };
}
/* harmony default export */ const pages_projects = (ProjectsPage);


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675], () => (__webpack_exec__(5761)));
module.exports = __webpack_exports__;

})();
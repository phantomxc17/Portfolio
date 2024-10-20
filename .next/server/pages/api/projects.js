"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getProjects": () => (/* binding */ getProjects)
});

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7678));
module.exports = __webpack_exports__;

})();
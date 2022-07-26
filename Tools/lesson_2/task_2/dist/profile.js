"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printProfile = void 0;

var printProfile = function printProfile(profileData) {
  var name = profileData.name,
      company = profileData.company;
  console.log("".concat(name, " from ").concat(company));
};

exports.printProfile = printProfile;
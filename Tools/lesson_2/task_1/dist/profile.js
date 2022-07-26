export const printProfile = function (profileData) {
  const {
    name,
    company
  } = profileData;
  console.log("".concat(name, " from ").concat(company));
};
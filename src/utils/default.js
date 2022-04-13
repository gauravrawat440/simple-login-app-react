const getUserDetails = (details) => {
  let parsedDeatils = JSON.parse(details);
  let fullName = parsedDeatils.profileObj.name;
  let email = parsedDeatils.profileObj.email;
  let imageUrl = parsedDeatils.profileObj.imageUrl;
  return { fullName, email, imageUrl };
};
export { getUserDetails };

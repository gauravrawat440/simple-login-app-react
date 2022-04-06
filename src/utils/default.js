const getUserDetails = (details) => {
  let parsedDeatils = JSON.parse(details)
  let fullName = parsedDeatils.profileObj.name;
  let email = parsedDeatils.profileObj.email;
  return { fullName, email };
};
export { getUserDetails };

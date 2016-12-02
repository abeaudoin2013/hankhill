var postSignUp = function (userId, info) {
  console.log(userId);
  console.log(info);

  if (info.profile.firstName === "Andy") {
    console.log("hello");
    Roles.addUsersToRoles(userId, ['admin', 'author']);
  };
  
};

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});

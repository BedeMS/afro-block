import signUpTermsView from "./views/signUpTermsView";
import signUpFormView from "./views/signUpFormView";
import ConfirmationView from "./views/confirmationView";

const signUpTerms = function () {
  //2.Next Page is loader for user.
  signUpTermsView.renderSignUpForm();
};

const signUpForm = function () {
  const userInfo = signUpFormView.getUserInfo();

  if (!userInfo) {
    console.log("nothing to see");
  } else {
    console.log(userInfo);
    ConfirmationView.render(userInfo);
  }
};

const init = function () {
  //1.User Agrees to Sign Up Terms
  signUpTermsView.addHandlerRender(signUpTerms);
  signUpFormView.addHandlerRender(signUpForm);
};

init();

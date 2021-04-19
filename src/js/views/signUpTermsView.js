// const signupAgree = document.querySelector(".terms__form-btn");

class SignUpTermsView {
  _agreeBtn = document.querySelector(".terms__form-btn");
  _terms = document.querySelector(".terms");
  _signUpForm = document.querySelector(".signup");

  addHandlerRender(handler) {
    document.addEventListener("DOMContentLoaded", () => {
      if (this._agreeBtn) {
        this._agreeBtn.addEventListener("click", handler);
      }
      return;
    });
  }

  renderSignUpForm() {
    this._terms.style.display = "none";
    this._signUpForm.style.display = "flex";
  }
}

export default new SignUpTermsView();

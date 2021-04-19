import View from "./View";

class SignUpFormView extends View {
  _signupBtn = document.querySelector(".signup__button");
  _businessName = document.querySelector("#businessName");
  _businessEmail = document.querySelector("#businessEmail");
  _businessPhone = document.querySelector("#businessPhone-number");
  _ownerName = document.querySelector("#ownerName");
  _businessAddress = document.querySelector("#businessAddress");
  _businessOpenDate = document.querySelector("#businessOpen-date");

  getUserInfo() {
    this._checkRequired([
      this._businessName,
      this._ownerName,
      this._businessAddress,
      this._businessOpenDate,
    ]);
    this._checkEmail(this._businessEmail);
    this._checkLength(this._businessPhone, 10, 10);
    if (Object.keys(this._businessData).length !== 6) {
      return;
    }
    return this._businessData;
  }

  addHandlerRender(handler) {
    document.addEventListener("DOMContentLoaded", () => {
      if (this._signupBtn) {
        this._signupBtn.addEventListener("click", function (e) {
          e.preventDefault();
          handler();
        });
      }
      return;
    });
  }
}

export default new SignUpFormView();

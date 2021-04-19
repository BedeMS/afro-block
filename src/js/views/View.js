class View {
  _businessData = {};

  _showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  //Show Input Success Message
  _showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    this._businessData[input.id] = input.value;
    // const small = formControl.querySelector("small");
    // small.innerText = message;
  }

  _checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        this._showError(input, `${this._getFieldName(input)} is required`);
      } else {
        this._showSuccess(input);
      }
    }, this);
  }

  _checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
      this._showSuccess(input);
    } else {
      this._showError(input, "Email is not valid");
    }
  }

  _checkLength(input, min, max) {
    if (input.value.length < min) {
      this._showError(
        input,
        `${this._getFieldName(input)} must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      this._showError(
        input,
        `${this._getFieldName(input)} must be less than ${max} characters`
      );
    } else {
      this._showSuccess(input);
    }
  }

  _checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
      this._showError(input2, "Passwords do not match");
    }
  }

  _getFieldName(input) {
    const name = input.id.replace(/([A-Z])/g, " $1");
    return name.replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }

  _setCapName(input) {
    const name = input.replace(/([A-Z])/g, " $1");
    return name.replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }
}

export default View;

//   constructor() {
//     this._showError = this._showError.bind(this);
//     this._showSuccess = this._showSuccess.bind(this);
//     this._checkEmail = this._checkEmail.bind(this);
//     this._checkLength = this._checkLength.bind(this);
//     this._checkPasswordMatch = this._checkPasswordMatch.bind(this);
//     this._checkRequired = this._checkRequired.bind(this);
//     this._getFieldName = this._getFieldName.bind(this);
//   }

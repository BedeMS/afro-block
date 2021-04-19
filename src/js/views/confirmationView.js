import View from "./View";

class ConfirmationView extends View {
  _signUpForm = document.querySelector(".signup");
  _main = document.querySelector(".main");
  render(data) {
    this._signUpForm.style.display = "none";
    const markup = `
    <section class="confirmation">
    <h1>Thank You For Signing Up ${data.ownerName}</h1>
    <ul class="confirmation__userInfo">
    ${Object.entries(data)
      .map(([key, value]) => `<li>${this._setCapName(key)}: ${value}</li>`)
      .join(" ")}
    </ul>
    <p>
      Once we have finalized the confirmation process, we will be in touch
      with you.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
      cupiditate nostrum amet laborum aspernatur eos itaque molestias. Sunt
      quas qui repellendus enim libero itaque provident expedita et
      consectetur perferendis unde, praesentium culpa adipisci excepturi minus
      impedit esse odio soluta sed obcaecati ratione. Corporis accusamus est
      iste, error ipsam ipsa consectetur.
    </p>
    <ul>
      <li>Please prepare good photos for listings</li>
      <li>Please prepare good photos for listings</li>
      <li>Please prepare good photos for listings</li>
      <li>Please prepare good photos for listings</li>
      <li>Please prepare good photos for listings</li>
    </ul>
    </section>`;

    this._main.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new ConfirmationView();

function ContactDetails(props) {
  return (
    <>
      <fieldset>
        <h2 className="fs-title">Contact Details</h2>
        <h3 className="fs-subtitle">Enter your cantact details</h3>
        <div className="mb-3 d-flex">
          <span class="input-group-text" id="inputGroupPrepend">
            +27
          </span>
          <input
            onChange={props.cellNumber}
            type="text"
            className="form-control form-floating"
            id="floatingInput"
            placeholder="Primary Cellphone Number"
          />
          {/* <label for="floatingInput">Primary Cellphone Number</label> */}
        </div>
        <div className="mb-3 d-flex">
          <span class="input-group-text" id="inputGroupPrepend">
            +27
          </span>
          <input
            onChange={props.kinNumber}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Next Of Kin Cellphone Number"
          />
          {/* <label for="inputGroupPrepend">Next Of Kin Cellphone Number</label> */}
        </div>
        <div className="form-floating mb-3">
          <input
            value={props.email}
            type="email"
            className="form-control"
            id="floatingInput"
            disabled
          />
          <label for="floatingInput">Email Address</label>
        </div>

        <div className="d-grid">
          <button
            className="
            btn btn-lg btn-primary btn-login
            text-uppercase
            fw-bold
            mb-2
          "
            onClick={props.onClick}
          >
            Continue
          </button>
        </div>
      </fieldset>
    </>
  );
}

export default ContactDetails;

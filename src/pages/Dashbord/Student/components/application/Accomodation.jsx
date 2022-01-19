function Accomodation(props) {
  return (
    <>
      <fieldset>
        <h2 className="fs-title">Accomodation Details</h2>
        <h3 className="fs-subtitle">Apply for your prefered accomodation</h3>
        <div className="form-control pt-4">
          <h5>Select Building</h5>{" "}
          <label class="form-check-label" for="exampleRadios1">
            <div class="form-check form-control building">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value={"Bertrams, Johannesburg"}
                onChange={props.building}
              />
              <span>
                <h6>
                  <b>Bertrams, Johannesburg</b>
                </h6>
                <small>
                  50 Fuller Road, Bertrams, Johannesburg Res for Uj students
                  12345
                </small>
              </span>
            </div>
          </label>
          <label class="form-check-label" for="exampleRadios2">
            <div class="form-check form-control building">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value={"25Frara, Durban"}
                onChange={props.building}
              />
              <span>
                <h6>
                  <b>25Frara, Durban</b>
                </h6>
                <small>
                  25Frara drive Pinetown, 3610 Res for Edgewook campus students
                </small>
              </span>
            </div>
          </label>
        </div>

        {/* Room Type.................................................................. */}
        <div className="form-control mt-5">
          <h5>Select Room Type</h5>
          <div class="form-check form-check-inline ">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="2 sharing"
              onChange={props.roomType}
            />
            <label class="form-check-label" for="inlineRadio1">
              2 Sharing
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="3 sharing"
              onChange={props.roomType}
            />
            <label class="form-check-label" for="inlineRadio2">
              3 Sharing
            </label>
          </div>
        </div>
        <br />

        {/* Bursary Details================================================================ */}
        <div className="form-control">
          <div class="form-check pt-4">
            <h5>Select Student Type</h5>{" "}
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="cash-paying"
              onChange={props.studentType}
            />
            <label class="form-check-label" for="exampleRadios2">
              <h6>Cash Paying</h6>
            </label>
            <p class="justify">
              My accommodation will be funded yourself or your parent / guardian
            </p>
          </div>
          <div class="form-check pt-4">
            {" "}
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="bursary"
              onChange={props.studentType}
            />{" "}
            <label class="form-check-label" for="exampleRadios2">
              <h6>Bursary/Sponsor</h6>
            </label>
            <p class="justify">
              My accommodation will be funded by a grant or bursary i.e. NSFAS
            </p>
          </div>
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

export default Accomodation;

import { useState } from "react";

function Payments(props) {
  const [showForm, setShowForm] = useState("");
  return (
    <>
      <fieldset>
        <h2 className="fs-title">Payments Details</h2>
        <h3 className="fs-subtitle">Tell us how you gonna pay accomodation</h3>
        {props.isBursary && (
          <>
            <div className="form-floating mb-3">
              <input
                onChange={props.bursaryName}
                type="text"
                className="form-control"
                id="floatingInput"
                // value={props.bursaryname}
              />
              <label for="floatingInput">Enter the bursary you are using</label>
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
          </>
        )}
        {props.isCash && (
          <>
            <div className="form-control pt-4 mb-3">
              <h5>Who's gonna be responsible for Payments</h5>{" "}
              <label class="form-check-label" for="exampleRadios1">
                <div class="form-check form-control building">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value={"jozi"}
                    onChange={props.myself}
                  />
                  <span>
                    <h6>
                      <b>MYSELF</b>
                    </h6>
                    <small>You will be responsible for your account</small>
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
                    value={"durban"}
                    onChange={props.guardian}
                  />
                  <span>
                    <h6>
                      <b>PARENT / GUARDIAN OR OTHER</b>
                    </h6>
                    <small>
                      Your Parent / Guardian will be responsible for your
                      account
                    </small>
                  </span>
                </div>
              </label>
            </div>
            {props.isGuardian && (
              <>
                <div className="form-floating mb-3">
                  <input
                    onChange={props.firstName}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">ACCOUNT HOLDERS FIRST NAME</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={props.surname}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">ACCOUNT HOLDERS LAST NAME</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={props.otherId}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">ACCOUNT HOLDERS ID NUMBER</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={props.otherEmail}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">
                    ACCOUNT HOLDERS EMAIL ADDRESS
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={props.cell}
                    type="text"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">
                    ACCOUNT HOLDERS PHONE NUMBER
                  </label>
                </div>
              </>
            )}
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
              <button
                className="
            btn btn-lg btn-outline-primary btn-login
            text-uppercase
            fw-bold
            mb-2
          "
                onClick={props.onClickPrev}
              >
                Prev
              </button>
            </div>
          </>
        )}
      </fieldset>
    </>
  );
}

export default Payments;

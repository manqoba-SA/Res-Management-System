function PersonalDetails(props) {
  return (
    <>
      <fieldset>
        <h2 className="fs-title">Personal Details</h2>
        <h3 className="fs-subtitle">Tell us something more about you</h3>
        <div className="form-floating mb-3">
          <input
            onChange={props.firstName}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={props.surName}
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Surname</label>
        </div>
        <div className="form-floating mb-3">
          <select
            onChange={props.nationality}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Please select Nationality</option>
            <option value="South African">South African</option>
            <option value="Foreign">Foreign</option>
          </select>
          <label for="floatingPassword">Nationality</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={props.idNumber}
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="ID number"
          />
          <label for="floatingPassword">ID number</label>
        </div>
        <div className="form-floating mb-3">
          <select
            onChange={props.gender}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Please select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label for="floatingPassword">Gender</label>
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

export default PersonalDetails;

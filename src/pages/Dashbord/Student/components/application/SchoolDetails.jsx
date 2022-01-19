function SchoolDetails(props) {
  return (
    <>
      <fieldset>
        <h2 className="fs-title">School Details</h2>
        <h3 className="fs-subtitle">We need more info about you academics</h3>
        <div className="form-floating mb-3">
          <input
            onChange={props.studentNumber}
            type="text"
            className="form-control"
            id="floatingInput"
          />
          <label for="floatingInput">Student Number</label>
        </div>
        <div className="form-floating mb-3">
          <select
            onChange={props.campus}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Please select your campus</option>
            <option value="UJ DFC">UJ DFC</option>
            <option value="UJ APK">UJ APK</option>
            <option value="UJ APB">UJ APB</option>
            <option value="Ukzn Edgewook">Ukzn Edgewook</option>
          </select>
          <label for="floatingPassword">Campus</label>
        </div>
        <div className="form-floating mb-3">
          <select
            onChange={props.studyYear}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Year of Study</option>
            <option value="1st year">1st year</option>
            <option value="2nd year">2nd year</option>
            <option value="3rd year">3rd year</option>
            <option value="4th year">4th year</option>
            <option value="Post graduate">Post graduate</option>
          </select>
          <label for="floatingPassword">Year of Study</label>
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

export default SchoolDetails;

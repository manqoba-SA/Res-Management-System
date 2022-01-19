function PersonalInfo(props) {
  return (
    <>
      <div class="col-md-6 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <h4>Personal Info</h4>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">First Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.firstName}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Surname</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.surname}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Gender</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.gender}</div>
            </div>

            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Nationality</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.nationality}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Identifications Number</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.idNumber}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;

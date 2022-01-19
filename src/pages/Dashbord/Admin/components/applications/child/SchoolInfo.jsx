function SchoolInfo(props) {
  return (
    <>
      <div class="col-md-6 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <h4>School Info</h4>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Student Number</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.studentNumber}</div>
            </div>

            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Campus</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.campus}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Year of study</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.studyYear}</div>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolInfo;

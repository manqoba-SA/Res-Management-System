function AccomodationInfo(props) {
  return (
    <>
      <div class="col-md-6 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <h4>Accomodation Info</h4>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Building</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.building}</div>
            </div>

            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Room Type</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.roomType}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Student Type</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.paymentOption}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccomodationInfo;

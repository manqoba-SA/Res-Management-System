function ContactInfo(props) {
  return (
    <>
      <div class="col-md-6 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <h4>Contact Info</h4>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.email}</div>
            </div>

            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.cellNumber}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Next of kin Mobile</h6>
              </div>
              <div class="col-sm-9 text-secondary">{props.kinNumber}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;

function FormInfo(props) {
  return (
    <>
      <div class="col-md-6 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <h4>Documents</h4>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">First Name</h6>
              </div>
              <div class="col-sm-9">
                <a href={props.idCopy}>
                  <img src="https://img.icons8.com/ios/50/000000/document-writer.png" />
                  ID Copy
                </a>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Surname</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                <a href={props.schoolProof}>
                  <img src="https://img.icons8.com/ios/50/000000/document--v1.png" />
                  Proof of schooling
                </a>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Gender</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                <a href={props.paymentProof}>
                  <img src="https://img.icons8.com/ios/50/000000/document--v1.png" />
                  Proof of financials
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormInfo;

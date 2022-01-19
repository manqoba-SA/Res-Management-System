function PaymentInfo(props) {
  return (
    <>
      <div class="col-md-6 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <h4>Payment Info</h4>
            {props.studentType === "bursary" ? (
              <>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Bursary name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{props.bursaryName}</div>
                </div>
              </>
            ) : (
              <>
                <hr />
                <h5>
                  Details of responsible person for Accomodation payments{" "}
                </h5>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Accountant Name </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {props.otherFirstname}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Accountant Surname</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {props.otherSurname}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Accountant ID Number</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{props.otherId}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Accountant Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{props.otherEmail}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Accountant cell Number</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{props.otherNumber}</div>
                </div>
                <hr />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentInfo;

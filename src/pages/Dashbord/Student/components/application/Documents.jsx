function Documents(props) {
  return (
    <>
      <fieldset>
        <h2 className="fs-title">Upload Documents</h2>
        <h3 className="fs-subtitle">Last Step🙏, now upload your documents</h3>
        <div className="form-control mb-3">
          <h4>ID copy</h4>
          <div className="form-floating mb-3">
            <input
              type="file"
              onChange={props.idCopy}
              className="form-control"
              id="floatingInput"
              placeholder="Proof of registeration from university"
            />
          </div>
          <small>picture or pdf of you ID book/card</small>
        </div>
        <div className="form-control mb-3">
          <h4>Proof of schooling</h4>
          <div className="form-floating mb-3">
            <input
              type="file"
              onChange={props.schoolProof}
              className="form-control"
              id="floatingInput"
              placeholder="Proof of registeration from university"
            />
          </div>
          <small>Proof of registeration from university</small>
        </div>
        <div className="form-control mb-3">
          <h4>Proof of payment</h4>
          <div className="form-floating mb-3">
            <input
              type="file"
              onChange={props.paymentProof}
              className="form-control"
              id="floatingInput"
              placeholder="Proof of bursary or payslip if you are cash paying"
            />
          </div>
          <small>Proof of bursary or payslip if you are cash paying</small>
        </div>

        <div className="d-grid">
          <button
            className="
                      btn btn-lg btn-primary btn-login
                      text-uppercase
                      fw-bold
                      mb-2
                    "
            type="submit"
            disabled={props.loading ? true : false}
            onClick={props.onClick}
          >
            {props.loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              ""
            )}
            {props.loading ? "" : "Submit"}
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
      </fieldset>
    </>
  );
}

export default Documents;

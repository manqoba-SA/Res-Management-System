import { Link } from "react-router-dom";
import image from "../../images/check.png";
import { useUserAuth } from "../../context/UserAuthContext";
function CompleteRegister() {
  const { user } = useUserAuth();
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={image}
          alt=""
          width="60"
          height="60"
        />
        <h1 className="display-5 fw-bold">Account Created</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Good Day account <b>{user.email}</b>, now you have created an
            account with us, now you can continue to your dashboard and apply
            for accomodation mind the required documents is your ID proof of
            your financials or bbursary and proof of registaration or any proof
            that you are a registered student.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/student-dashboard"
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompleteRegister;

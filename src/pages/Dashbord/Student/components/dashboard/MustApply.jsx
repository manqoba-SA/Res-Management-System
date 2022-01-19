import { Link } from "react-router-dom";

function MustApply() {
  return (
    <>
      <div className="container">
        <div className="row vertical-align-middle mt-5 mb-5">
          <div className="col-md-6">
            <h4>
              The student has not applied yet for the room please apply for you
              room
            </h4>
            <Link to="/apply" className="btn btn-primary text-center">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MustApply;

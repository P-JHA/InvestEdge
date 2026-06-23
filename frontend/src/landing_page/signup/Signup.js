import React from "react";

function Signup() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/account_open.svg"
            alt="Signup Illustration"
            style={{ width: "80%" }}
          />
        </div>

        {/* Right Side */}
        <div className="col-md-6">
          <h2 className="mb-3">Open your account</h2>
          <p className="text-muted mb-4">
            Start investing and trading with a modern platform built for speed,
            simplicity, and smarter financial decisions.
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Create Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create password"
              />
            </div>

            <button className="btn btn-primary w-100 mt-2">
              Create Account
            </button>
          </form>

          <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

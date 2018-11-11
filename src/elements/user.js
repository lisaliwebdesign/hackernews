import React from "react";

const LogIn = props => (
  <div className="login-wrapper columns is-gapless">
    <div className="column is-7">
      <div className="hero is-fullheight">
        <div className="hero-heading">
          <div className="section has-text-centered">
            <h1 className="title has-text-centered is-2 hp-title">
              This page is under construction
            </h1>
          </div>

          <div className="no-account-link has-text-centered">
            <a href="#">Don't have an account ? </a>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column" />
              <div className="column is-5">
                <form data-request="onSignin">
                  <div
                    id="signin-form"
                    className="login-form animated preFadeInLeft fadeInLeft"
                  >
                    <div className="field pb-10">
                      <div className="control">
                        <input
                          id="userSigninLogin"
                          className="input is-large"
                          type="text"
                          name="login"
                          placeholder="Enter your email"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="field pb-20">
                      <div className="control">
                        <input
                          id="userSigninPassword"
                          className="input is-large"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          required=""
                        />
                      </div>
                    </div>

                    <p className="control login">
                      <button
                        type="submit"
                        className="button button-cta primary-btn btn-align-lg btn-outlined is-bold is-fullwidth rounded raised no-lh  will-load"
                      >
                        Log in
                      </button>
                    </p>
                  </div>
                </form>

                <div id="partialUserResetForm">
                  <form
                    data-request="ninjaReset::onRestorePassword"
                    data-request-update="'ninjaReset::reset': '#partialUserResetForm'"
                  >
                    <div
                      id="recover-form"
                      className="login-form animated preFadeInLeft fadeInLeft is-hidden"
                    >
                      <h2 className="title is-4 has-text-centered">
                        Lost your Password ?
                      </h2>

                      <div className="field pb-20">
                        <div className="control">
                          <input
                            id="userRestoreEmail"
                            className="input is-large"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required=""
                          />
                        </div>
                      </div>

                      <p className="control login">
                        <button
                          type="submit"
                          className="button button-cta secondary-btn btn-align-lg btn-outlined is-bold is-fullwidth rounded raised no-lh will-load"
                        >
                          Restore password
                        </button>
                      </p>
                    </div>
                  </form>
                </div>

                <div
                  id="recover"
                  className="section forgot-password animated preFadeInLeft fadeInLeft"
                >
                  <p className="has-text-centered">
                    <a href="#">Forgot password ?</a>
                  </p>
                </div>

                <div
                  id="back-to-login"
                  className="section forgot-password animated preFadeInLeft fadeInLeft is-hidden"
                >
                  <p className="has-text-centered">
                    <a href="#">Back to Sign in</a>
                  </p>
                </div>
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="column login-column is-5 is-hidden-mobile hero-banner">
      <div className="hero is-fullheight is-theme-primary is-relative">
        <div className="columns has-text-centered">
          <div className="column" />
        </div>
        <img
          className="login-city"
          src="https://cssninja.io/themes/cssninja/assets/images/bg/temple.svg"
          alt=""
        />
      </div>
    </div>
  </div>
);
export { LogIn };

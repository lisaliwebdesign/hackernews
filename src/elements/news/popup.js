import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";

const NewsItemPopUp = props => (
  <Popup trigger={<button className="no-style-btn">{props.item}</button>} modal>
    {close => (
      <div className="comment-modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="section has-text-centered">
          <h1 className="title has-text-centered is-2 hp-title">
            Comment section is under construction
          </h1>
        </div>
        <div className="section has-text-centered">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus,
            voluptas rem alias. Vitae?
          </p>
        </div>
      </div>
    )}
  </Popup>
);
export { NewsItemPopUp };

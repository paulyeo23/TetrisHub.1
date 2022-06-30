import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";

const BasicInfo = (info) => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState({});

  return (
    <div className="form-panel">
      <div className="form-panel-heading">
        <h3 className="heading">Basic Info</h3>
      </div>
      <div className="body">
        <div className="inline-field">
          <span className="lbl">
            <label htmlFor="tournament_organization">Host</label>
          </span>
          <div className="control">
            <br />
            <div className="form-select">
              <select
                data-original-value=""
                className="form-control"
                name="tournament[organization_id]"
                id="tournament_organization_id"
              >
                <optgroup label="Your Account Only">
                  <option value="">paulyeo23</option>
                </optgroup>
                <optgroup label="Communities"></optgroup>
              </select>
            </div>
          </div>
        </div>
        <div className="inline-field">
          <span className="lbl">
            <label className="field-label -required" htmlFor="tournament_name">
              Tournament name
            </label>
          </span>
          <div className="control">
            <input
              maxLength="60"
              required="required"
              className="auto-focus form-control"
              size="60"
              type="text"
              name="tournament[name]"
              id="tournament_name"
            />
          </div>
        </div>
        <div className="inline-field">
          <div className="control">
            <div className="input-group">
              <div className="input-group-addon -bottom">
                <a
                  className="tip"
                  data-container="body"
                  data-placement="top"
                  href="#"
                  id="random-url"
                  title=""
                  type="button"
                  data-original-title="Generate a random URL"
                >
                  <i className="fa fa-random"></i>
                </a>
              </div>
            </div>
            <span className="help-block unique-help-block hide">
              <span className="status-image">
                <i className="fa fa-fw fa-check"></i>
                <i className="fa fa-fw fa-times"></i>
              </span>
              <span className="status-text"></span>
            </span>
          </div>
        </div>
        <div className="inline-field">
          <span className="lbl">
            <label className="field-label" htmlFor="tournament_description">
              Description
            </label>
          </span>
          <div className="control">
            <div
              name="tournament_description"
              id="tournament_description"
              className="form-control"
            >
              Please verify your email address to enable this field.
            </div>
            <span className="help-block">
              To change your email address or resend the verification email, go
              to{" "}
              <a target="_blank" href="https://challonge.com/settings/edit">
                your settings
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

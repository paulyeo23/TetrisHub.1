import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../backendfunctions.mjs";

const EventBracketsInfo = (info) => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState({});
  const [Stage, setStage] = useState({
    stages: 1,
    firstStageFormat: "",
  });

  function onStageChange(e) {
    console.log(Stage);
    const { value, name } = e.target;
    setStage((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onFormatChange(e) {
    const { value, name } = e.target;
    setStage((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const generateFirstStage = () => {
    return [
      <div className="inline-field">
        <span className="lbl">
          <label
            className="single-stage field-label -required"
            htmlFor="tournament_tournament_type"
          >
            Format
          </label>
        </span>
        <div className="control">
          <div className="single-stage form-select" data-locked="false">
            <select
              className="form-control"
              name="firstStageFormat"
              id="tournament_tournament_type"
              onChange={onFormatChange}
            >
              <option value="single elimination">Single Elimination</option>
              <option value="double elimination">Double Elimination</option>
              <option value="round robin">Round Robin</option>
              <option value="swiss">Swiss</option>
              <option value="free htmlFor all">Free htmlFor All</option>
              <option>Leaderboard</option>
            </select>
          </div>
          <div
            className="form-group type-settings"
            rel="single elimination"
            style={{ display: "block" }}
          >
            <label className="checkbox-control">
              <input
                className="field"
                type="checkbox"
                value="1"
                name="tournament[hold_third_place_match]"
                id="tournament_hold_third_place_match"
                data-parsley-multiple="tournamenthold_third_place_match"
              />
              <span className="text">Include a match html For 3rd place.</span>
            </label>
          </div>
          <div
            className="form-group type-settings"
            id="tournament-form-split-participants"
            rel="double elimination"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>,
    ];
  };

  const generateSecondStage = () => {
    return [
      <div className="inline-field">
        <span className="lbl">
          <label
            className="two-stage field-label -required hide"
            htmlFor="tournament_tournament_type"
          >
            Final Stage
          </label>
        </span>
        <div className="control">
          <div className="two-stage form-select" data-locked="false">
            <select
              className="form-control"
              name="firstStageFormat"
              id="tournament_tournament_type"
              onChange={onFormatChange}
            >
              <option value="single elimination">Single Elimination</option>
              <option value="double elimination">Double Elimination</option>
              <option value="round robin">Round Robin</option>
              <option value="swiss">Swiss</option>
            </select>
          </div>
          <div
            className="form-group type-settings"
            rel="single elimination"
            style={{ display: "block" }}
          ></div>
        </div>
      </div>,
    ];
  };

  const generateGroupStage = () => {
    return (
      <div className="inline-field" bis_skin_checked="1">
        <span className="lbl">
          <label>Group Stage</label>
        </span>
        <div className="control" bis_skin_checked="1">
          <div className="form-group" bis_skin_checked="1">
            <div className="form-select" bis_skin_checked="1">
              <select
                className="form-control"
                name="tournament[group_stages_attributes][0][stage_type]"
                id="tournament_group_stages_attributes_0_stage_type"
              >
                <option value="single elimination">Single Elimination</option>
                <option value="double elimination">Double Elimination</option>
                <option selected="selected" value="round robin">
                  Round Robin
                </option>
              </select>
            </div>
          </div>
          {generateSecondStageRoundRobin()}
          <div
            className="two-stage group-type-settings"
            rel="double elimination"
            bis_skin_checked="1"
            style={{ display: "block" }}
          >
            <div className="form-group" bis_skin_checked="1"></div>
          </div>
          <hr />
          <div className="two-stage" bis_skin_checked="1">
            <div className="form-group" bis_skin_checked="1">
              <input
                className="form-control -inline -short"
                type="number"
                value="4"
                name="tournament[group_stages_attributes][0][group_size]"
                id="tournament_group_stages_attributes_0_group_size"
              />
              participants <em>compete</em> in each group
              <span
                className="muted group-type-settings"
                rel="round robin"
                style={{ display: "inline" }}
              >
                — 20 max for round robin
              </span>
            </div>
          </div>
          <div className="two-stage" bis_skin_checked="1">
            <div className="form-group" bis_skin_checked="1">
              <input
                className="form-control -inline -short"
                type="number"
                value="2"
                name="tournament[group_stages_attributes][0][participant_count_to_advance_per_group]"
                id="tournament_group_stages_attributes_0_participant_count_to_advance_per_group"
              />
              participants <em>advance</em> from each group
              <span
                className="muted group-type-settings"
                rel="single elimination double elimination"
                style={{ display: "inline" }}
              >
                — must be a power of 2 for single &amp; double elim
                (1,2,4,8,16,...)
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const generateSecondStageRoundRobin = () => {
    return (
      <div
        className="two-stage group-type-settings"
        rel="round robin"
        style={{ display: "inline" }}
        bis_skin_checked="1"
      >
        <div className="form-group" bis_skin_checked="1">
          Participants play each other
          <div className="form-select -inline" bis_skin_checked="1">
            <select
              className="form-control"
              name="tournament[group_stages_attributes][0][rr_iterations]"
              id="tournament_group_stages_attributes_0_rr_iterations"
            >
              <option value="1">once</option>
              <option value="2">twice</option>
              <option value="3">3 times</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

  const generateThirdPlace = () => {
    return (
      <label className="checkbox-control">
        <input
          name="tournament[hold_third_place_match]"
          type="hidden"
          value="0"
        />
        <input
          className="field"
          type="checkbox"
          value="1"
          name="tournament[hold_third_place_match]"
          id="tournament_hold_third_place_match"
          data-parsley-multiple="tournamenthold_third_place_match"
        />
        <span className="text">Include a match for 3rd place.</span>
      </label>
    );
  };

  const generateStages = {
    1: generateFirstStage,
    2: generateSecondStage,
  };

  const formats = {
    1: "SingleElimination",
    2: "DoubleElimination",
    3: "Swiss",
    4: "Robin",
  };

  let Stages = [];
  useEffect(() => {
    Stages = [
      <div className="inline-field" id="tournament-form-stage-type">
        <span className="lbl">
          <label htmlFor="tournament_group_stages_enabled">Type</label>
        </span>
        <div className="control">
          <div>
            <label className="radio-control">
              <input
                className="field"
                type="radio"
                value="1"
                name="stages"
                checked={Stage.stages == 1 ? "checked" : ""}
                onChange={onStageChange}
                id="tournament_group_stages_enabled_false"
                data-parsley-multiple="tournamentgroup_stages_enabled"
              />
              <span className="text">Single Stage Tournament</span>
            </label>
          </div>
          <div>
            <label className="radio-control">
              <input
                className="field"
                type="radio"
                value="2"
                onChange={onStageChange}
                checked={Stage.stages == 2 ? "checked" : ""}
                name="stages"
                id="tournament_group_stages_enabled_true"
                data-parsley-multiple="tournamentgroup_stages_enabled"
              />
              <span className="text">Two Stage Tournament</span>
              <span className="muted">
                — groups compete separately, winners proceed to a final stage
                (e.g. World Cup)
              </span>
            </label>
          </div>
        </div>
      </div>,
    ];
  }, [Stage]);

  const finalRender = () => {
    let tempRender = [];
    tempRender.push(Stages, generateGroupStage());
    return tempRender;
  };

  useEffect(() => {
    setRender(finalRender());
  }, [Info, Stage]);
  return Render;
};

export default EventBracketsInfo;

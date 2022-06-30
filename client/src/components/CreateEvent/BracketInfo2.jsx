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
    groupStage: "false",
    firstStageFormat: "Single Elimination",
    firstStageFinals: "1",
    secondStageFormat: "Single Elimination",
    secondStageFinals: "1",
    groupStageSize: "2",
    groupStageToAdvance: "4",
  });

  function onStageChange(e) {
    const { value, name } = e.target;
    setStage((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(Stage);
  }

  function generateGroupStageForm() {
    return (
      <div
        class="two-stage"
        bis_skin_checked="1"
        hidden={Stage.groupStage == "true" ? "" : "hidden"}
      >
        <div class="two-stage" bis_skin_checked="1"></div>
        <div class="form-group" bis_skin_checked="1">
          <input
            class="form-control -inline -short"
            type="number"
            value={Stage.groupStageSize}
            onChange={onStageChange}
            name="groupStageSize"
            id="tournament_group_stages_attributes_0_group_size"
          />
          participants <em>compete</em> in each group
          <span class="muted group-type-settings" rel="round robin">
            — 20 max for round robin
          </span>
        </div>
        <div class="form-group" bis_skin_checked="1">
          <input
            class="form-control -inline -short"
            type="number"
            onChange={onStageChange}
            value={Stage.groupStageToAdvance}
            name="groupStageToAdvance"
            id="tournament_group_stages_attributes_0_participant_count_to_advance_per_group"
          />
          participants <em>advance</em> from each group
          <span
            class="muted group-type-settings"
            rel="single elimination double elimination"
            style={{ display: "inline" }}
          >
            — must be a power of 2 for single &amp; double elim (1,2,4,8,16,...)
          </span>
        </div>
      </div>
    );
  }

  function generateFirstStageFormat() {
    return (
      <div class="inset-form two-stage" bis_skin_checked="1">
        <div class="two-stage" bis_skin_checked="1">
          <div class="inline-field" bis_skin_checked="1">
            <span class="lbl">
              <label>
                {Stage.groupStage == "false" ? "Format" : "Group Stage"}
              </label>
            </span>
            <div class="control" bis_skin_checked="1">
              <div class="form-group" bis_skin_checked="1">
                <div class="form-select" bis_skin_checked="1">
                  <select
                    class="form-control"
                    name="firstStageFormat"
                    id="tournament_group_stages_attributes_0_stage_type"
                    onChange={onStageChange}
                  >
                    <option value="single elimination" selected="selected">
                      Single Elimination
                    </option>
                    <option value="double elimination">
                      Double Elimination
                    </option>
                    <option value="round robin">Round Robin</option>
                  </select>
                  {generateRoundRobin()}
                </div>
              </div>

              <div
                class="two-stage group-type-settings"
                rel="double elimination"
                bis_skin_checked="1"
                style={{ display: "block" }}
              ></div>
              <hr />
              {generateGroupStageForm()}
            </div>
          </div>
        </div>

        <div class="group_stage_grand_finals hide" bis_skin_checked="1">
          <div
            class="inline-field"
            bis_skin_checked="1"
            hidden={
              Stage.firstStageFormat.toLowerCase() != "double elimination"
                ? "hidden"
                : ""
            }
          >
            <span class="lbl">
              <label for="tournament_group_stages_attributes_0_grand_finals_modifier">
                {Stage.groupStage == "true"
                  ? "Group Stage Finals"
                  : "Grand Finals"}
              </label>
            </span>
            <div
              class="control"
              bis_skin_checked="1"
              hidden={
                Stage.firstStageFormat.toLowerCase() != "double elimination"
                  ? "hidden"
                  : ""
              }
            >
              <label class="radio-control">
                <input
                  class="field"
                  type="radio"
                  value="1"
                  name="firstStageFinals"
                  onChange={onStageChange}
                  checked={Stage.firstStageFinals == "1" ? "checked" : ""}
                  id="firstStageFinals1"
                />
                <span class="text">1 match</span>
              </label>
              <div />
              <label class="radio-control">
                <input
                  class="field"
                  type="radio"
                  value="2"
                  name="firstStageFinals"
                  onChange={onStageChange}
                  checked={Stage.firstStageFinals == "2" ? "checked" : ""}
                  id="firstStageFinals2"
                />
                <span class="text">
                  1-2 matches
                  <span class="muted">
                    — winners bracket finalist has to be defeated twice by the
                    losers bracket finalist
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function generateType() {
    return (
      <div className="control" name="GAME INFO">
        <div>
          <label className="radio-control">
            <input
              className="field"
              type="radio"
              value={false}
              name="groupStage"
              checked={Stage.groupStage == "false" ? "checked" : ""}
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
              value={true}
              onChange={onStageChange}
              checked={Stage.groupStage == "true" ? "checked" : ""}
              name="groupStage"
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
    );
  }

  function generateRoundRobin() {
    return (
      <div
        class="type-settings"
        rel="round robin"
        style={{
          display: Stage.firstStageFormat == "round robin" ? "" : "none",
        }}
        bis_skin_checked="1"
      >
        <div class="inline-field" bis_skin_checked="1">
          <span class="lbl"></span>
          <div class="control" bis_skin_checked="1">
            Participants play each other
            <div class="form-select -inline" bis_skin_checked="1">
              <select
                name="rr_iterations"
                id="rr_iterations"
                class="form-control"
                onChange={onStageChange}
              >
                <option value="1">once</option>
                <option value="2">twice</option>
                <option value="3">3 times</option>
              </select>
            </div>
          </div>
        </div>
        <div class="inline-field" bis_skin_checked="1">
          <span class="lbl">
            <label for="tournament_ranked_by">Rank by</label>
          </span>
          <div class="control" bis_skin_checked="1">
            <div class="form-group" bis_skin_checked="1">
              <div class="input-group" bis_skin_checked="1">
                <select
                  class="form-control"
                  name="tournament[ranked_by]"
                  id="tournament_ranked_by"
                >
                  <option value="match wins">Match Wins</option>
                  <option value="game wins">Game/Set Wins</option>
                  <option value="game win percentage">Game/Set Win %</option>
                  <option value="game w/l difference">
                    Game/Set W/L Difference
                  </option>
                  <option value="points scored">Points Scored</option>
                  <option value="points difference">Points Difference</option>
                  <option value="custom">Custom (points system)</option>
                </select>
              </div>
            </div>
            <div id="rr_custom" class="hide" bis_skin_checked="1">
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="1.0"
                  name="tournament[rr_pts_for_match_win]"
                  id="tournament_rr_pts_for_match_win"
                />
                points per match win
              </div>
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="0.5"
                  name="tournament[rr_pts_for_match_tie]"
                  id="tournament_rr_pts_for_match_tie"
                />
                points per match tie
              </div>
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="0.0"
                  name="tournament[rr_pts_for_game_win]"
                  id="tournament_rr_pts_for_game_win"
                />
                points per game/set win
              </div>
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="0.0"
                  name="tournament[rr_pts_for_game_tie]"
                  id="tournament_rr_pts_for_game_tie"
                />
                points per game/set tie
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function generateGrandFinals() {
    return (
      <div class="inline-field" bis_skin_checked="1">
        <span class="lbl">
          <label for="tournament_grand_finals_modifier">Grand Finals</label>
        </span>
        <div class="control" bis_skin_checked="1">
          <label class="radio-control">
            <input
              class="field"
              type="radio"
              value="1"
              name="secondStageFinals"
              onChange={onStageChange}
              checked={Stage.secondStageFinals == 1 ? "Checked" : ""}
              id="tournament_grand_finals_modifier_single_match"
              data-parsley-multiple="tournamentgrand_finals_modifier"
            />
            <span class="text">1 match</span>
          </label>
          <div />
          <label class="radio-control">
            <input
              class="field"
              type="radio"
              name="secondStageFinals"
              value="2"
              onChange={onStageChange}
              checked={Stage.secondStageFinals == 2 ? "Checked" : ""}
              id="tournament_grand_finals_modifier"
              data-parsley-multiple="tournamentgrand_finals_modifier"
            />
            <span class="text">
              1-2 matches — winners bracket finalist has to be defeated twice by
              the losers bracket finalist
            </span>
          </label>
        </div>
      </div>
    );
  }

  function generateSecondStageFormat() {
    return (
      <div
        class="single-stage two-stage"
        bis_skin_checked="1"
        style={{ display: Stage.groupStage == "false" ? "none" : "" }}
      >
        <div class="inline-field" bis_skin_checked="1">
          <span class="lbl">
            <label
              class="single-stage field-label -required hide"
              for="tournament_tournament_type"
            >
              {Stage.groupStage == "false" ? "Format" : "Final Stage"}
            </label>
          </span>
          <div class="control" bis_skin_checked="1">
            <div
              class="single-stage form-select hide"
              data-locked="false"
              bis_skin_checked="1"
              hidden={{
                display: Stage.groupStage == false ? "hidden" : "",
              }}
            >
              <select
                class="form-control"
                name="tournament[tournament_type]"
                id="tournament_tournament_type"
                disabled=""
              >
                <option selected="selected" value="single elimination">
                  Single Elimination
                </option>
                <option value="double elimination">Double Elimination</option>
                <option value="round robin">Round Robin</option>
                <option value="swiss">Swiss</option>
                <option value="free for all">Free For All</option>
                <option value="leaderboard">Leaderboard</option>
              </select>
            </div>
            <div
              class="second-stage form-select"
              data-locked="false"
              bis_skin_checked="1"
            >
              <select
                class="form-control"
                name="tournament[tournament_type]"
                id="tournament_tournament_type"
              >
                <option selected="selected" value="single elimination">
                  Single Elimination
                </option>
                <option value="double elimination">Double Elimination</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="type-settings"
          rel="double elimination"
          style={{ display: "block" }}
          bis_skin_checked="1"
        >
          {generateGrandFinals("Grand Finals")}
        </div>

        <div
          class="type-settings"
          rel="swiss"
          style={{
            display: Stage.firstStageFormat == "swiss" ? "" : "none",
          }}
          bis_skin_checked="1"
        >
          <div class="inline-field" bis_skin_checked="1">
            <span class="lbl"></span>
            <div class="control" bis_skin_checked="1">
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="1.0"
                  name="tournament[pts_for_match_win]"
                  id="tournament_pts_for_match_win"
                />
                points per match win
              </div>
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="0.5"
                  name="tournament[pts_for_match_tie]"
                  id="tournament_pts_for_match_tie"
                />
                points per match tie
              </div>
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="0.0"
                  name="tournament[pts_for_game_win]"
                  id="tournament_pts_for_game_win"
                />
                points per game/set win
              </div>
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="0.0"
                  name="tournament[pts_for_game_tie]"
                  id="tournament_pts_for_game_tie"
                />
                points per game/set tie
              </div>
              <div class="form-group" bis_skin_checked="1">
                <input
                  maxlength="3"
                  class="form-control -inline -short"
                  size="3"
                  type="text"
                  value="1.0"
                  name="tournament[pts_for_bye]"
                  id="tournament_pts_for_bye"
                />
                <span
                  class="tip"
                  title=""
                  data-original-title="Typically equal to the maximum points available for a match winner."
                >
                  points per bye
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="type-settings"
          rel="leaderboard"
          style={{ display: "none" }}
          bis_skin_checked="1"
        >
          <div class="inline-field" bis_skin_checked="1">
            <span class="lbl"></span>
            <div class="control" bis_skin_checked="1">
              Number of rounds&nbsp;
              <input
                type="number"
                name="rr_iterations"
                id="rr_iterations"
                min="1"
                max="20"
                class="form-control -inline"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setRender(
      <div class="form-panel" bis_skin_checked="1">
        <div class="form-panel-heading" bis_skin_checked="1">
          <h3 class="heading">Game Info</h3>
        </div>
        <div class="body" bis_skin_checked="1">
          <div
            class="inline-field"
            id="tournament-form-stage-type"
            bis_skin_checked="1"
          >
            <span class="lbl">
              <label for="tournament_group_stages_enabled">Type</label>
            </span>
            {generateType()}
          </div>
          <input
            type="hidden"
            name="tournament[group_stages_attributes][0][skip_nested_update]"
            id="tournament_group_stages_attributes_0_skip_nested_update"
            value="0"
          />
          {generateFirstStageFormat()}

          {generateSecondStageFormat()}
          <input
            type="hidden"
            name="tournament[rr_iterations]"
            id="tournament_rr_iterations"
          />
        </div>
      </div>,
    );
  }, [Info, Stage]);
  return Render;
};

export default EventBracketsInfo;

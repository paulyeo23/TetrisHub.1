import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { heirarchy } from "./hierarchy.mjs";

const OrganisationTab = ({ Info, OrgName }) => {
  const [Info, setInfo] = useState({});
  // const [Tab, setTab] = useState({ tab: "Overview" });
  const [Render, setRender] = useState([]);

  const organisation = Info.Organsiation.filter((organisation) => {
    return organisation.name == OrgName;
  })[0];
  let eventHighlights = [];

  const pinnedEvents = Info.PinnedEvents.filter((event) => {
    return event.orgId == organisation.Id;
  });

  pinnedEvents.forEach((pinnedevent) => {
    let Event = Info.Events.filter((e) => {
      return e.id == pinnedevent.eventId;
    });
    eventHighlights.push(
      <Col>
        <Row>{Event.name}</Row>
        <Row>{pinnedevent.description}</Row>
      </Col>,
    );
  });

  let organisationList = { Organisations: [organisation.id] };

  const organisationLevel = heirarchy.filter((level) => {
    return level.table == "Organisations";
  });
  const maxLevel = Math.max(...heirarchy.map((o) => o.level));

  for (let i = organisationLevel; i < maxLevel; i++) {
    const currentLevel = heirarchy.filter((h) => {
      return h.level == i;
    });
    const nextLevel = heirarchy.filter((h) => {
      return h.level == i + 1;
    });
    organisationList[currentLevel.table].forEach((levelId) => {
      const allNextLevel = Info[nextLevel.table].filter((table) => {
        return table[nextLevel.foreignkey] == levelId;
      });
      organisationList.nextLevel = allNextLevel;
    });
  }

  const recentEvents = organisationList.Events;



  setRender([
    <div>{organisation.name}</div>,
    <iframe src={organisation.twitch} />,
    <div>{organisation.description}</div>,
    <div>
      <h3>EVENTS BY {organisation.name.upper()}</h3>
      <Row>eventHighlights</Row>
    </div>,
  ]);

  return Render;
};

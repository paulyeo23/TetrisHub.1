import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";

const EventTable = () => {
  const daysAhead = 7;
  const upperDateBound = module.addDays(new Date(), daysAhead);

  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState({
    brackets: [],
    edition: [],
    events: [],
    gameResults: [],
    matches: [],
    organisation: [],
    playerDetails: [],
    qualifyingScores: [],
    series: [],
    streams: [],
    users: [],
  });

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios("http://localhost:3001/");
      setInfo(response.data);
      console.log(response.data);
    };
    getInfo();
    console.log("connected");
  }, []);

  useEffect(() => {
    console.log(Info);
    let matches = module.filterWithinPeriod(
      Info.Matches,
      "DateTime",
      new Date(),
      upperDateBound,
    );

    const weekObj = module.createWeekObj();

    //find all events connected to matches in upcoming days
    let events = [];
    matches.forEach((match) => {
      let tempEvent = Info.Events.filter((event) => {
        return event.id == match.eventid;
      });

      events = events.concat(tempEvent);
    });
    let Allevents = [...new Set(events)];

    //filter for events that meet minimum importance value
    //change minimum importance value in infoFunctions.js
    let importantevents = module.filterImportance(Allevents, "Importance");
    importantevents = module.sortImportance(importantevents, "Importance");

    //filter for matches that fall under the important events array
    let importantMatches = [];
    importantevents.forEach((event) => {
      importantMatches.push({
        eventId: event.id,
        matches: matches.filter((match) => {
          return match.eventId == event.id;
        }),
      });
    });

    let matchWeek = [];

    importantMatches.forEach((event) => {
      let tempmatchWeek = module.createWeek();
      event.matches.forEach((match) => {
        let tempDate = module.getTimeObj(new Date(match.DateTime));
        let tempday = tempDate.dayName;
        let tempkey = module.getKeyByValue(weekObj, tempday);
        tempmatchWeek[tempkey].push(tempDate);
      });
      matchWeek.push({ eventId: event.eventId, matchWeek: tempmatchWeek });
    });

    const startWeek = module.getTimeObj(new Date());
    const endWeek = module.getTimeObj(module.addDays(new Date(), 6));

    //week header to produce days ahead, with today being the first day
    const weekHeader = [
      <th className="eventTableWeek">
        Event Guide: {`${startWeek.month} ${startWeek.day}${startWeek.ordinal}`}{" "}
        - {`${endWeek.month} ${endWeek.day}${endWeek.ordinal}`}
      </th>,
    ];
    for (const day in weekObj) {
      weekHeader.push(<th className="eventTableDay">{weekObj[day]}</th>);
    }

    const eventWeek = [];
    matchWeek.forEach((event) => {
      eventWeek.push(
        <tr className="eventTableWeek">
          {module.getEventName(Info.Events, event.eventId)}
        </tr>,
      );
      for (let i = 0; i < daysAhead; i++) {
        let dayMatches = event.matchWeek[`day${i}`];

        if (dayMatches.length == 0) {
          eventWeek.push(<tr className="eventTableWeek"></tr>);
        } else if (dayMatches.length > 0) {
          console.log(
            `${dayMatches[0].hour}:${dayMatches[0].minutes} - ${
              dayMatches[dayMatches.length - 1].hour
            }:${dayMatches[dayMatches.length - 1].minutes}`,
          );
          eventWeek.push(
            <tr className="eventTableWeek">
              {`${dayMatches[0].hour}:${dayMatches[0].minutes} - ${
                dayMatches[dayMatches.length - 1].hour
              }:${dayMatches[dayMatches.length - 1].minutes}`}
            </tr>,
          );
        }
      }
    });
    setRender(
      <table className="eventTable" border="0" cellPadding="" cellSpacing="">
        <tbody>
          <tr className="eventTableBody flex1">{weekHeader}</tr>
          <tr className="eventTableBody flex1">{eventWeek}</tr>
        </tbody>
      </table>,
    );
  }, [Info]);
  return Render;
};

export default EventTable;

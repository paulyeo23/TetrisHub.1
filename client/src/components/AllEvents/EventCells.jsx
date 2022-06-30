import { useState, useEffect } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import Axios from "axios";

const EventCells = () => {
  const [AllEvents, setAllEvents] = useState([]);

  const getAllEvents = () => {
    Axios.get("http://localhost:3001/events").then((response) => {
      setAllEvents(response.data);

      //console.log("getAllEvents", response.data);
    });
  };

  const getEventName = (eventID) => {
    // console.log("AllEvents", AllEvents)
    if (AllEvents.length > 0) {
      // console.log("getEventName", AllEvents);
      let eventArray = (function () {
        return AllEvents.filter((event) => {
          return event.ID === eventID;
        });
      })();
      // console.log("eventArray", eventArray);
      if (eventArray.length > 0) {
        let eventObj = eventArray[0];

        // console.log("eventObj", eventObj);

        return eventObj.Name;
      }
    }
  };

  const mostImportantEventObj = () => {
    //gives highest value
    const ImportanceValue = Math.max.apply(
      Math,
      AllEvents.map(function (Events) {
        return Events.Importance;
      }),
    );

    //return revent with higest importance value
    return AllEvents.filter((Events) => {
      return Events.Importance === ImportanceValue;
    });
  };

  //arranges from lowest datetime to highest datetime
  const arrangeEventsByTiming = (array) => {
    console.log("arrangeEvents", AllEvents);
    if (AllEvents.length > 0) {
      return array.sort(function (a, b) {
        return new Date(a.Startdate) - new Date(b.Startdate);
      });
    }
  };

  const getEventArray = (eventID, date) => {
    if (AllEvents.length > 0) {
      let playerArray = function () {
        return AllEvents.filter((Event) => {
          return Event.ID === eventID;
        });
      };
      return playerArray()[0];
    }
  };

  const time = () => {
    if (AllEvents.length == 0) {
      // console.log(0);
      return 0;
    } else {
      // console.log(60000);
      return 10000;
    }
  };

  const ordinal = (day) => {
    let ordinal = "";
    if (day > 3) {
      ordinal = "th";
    }
    if (day === 3) {
      ordinal = "rd";
    }
    if (day === 2) {
      ordinal = "nd";
    }
    if (day === 1) {
      ordinal = "st";
    }
    return ordinal;
  };

  const GetAlldata = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        getAllEvents();
      }, time());
      return () => clearTimeout(timer);
    });
  };

  const eventCells = () => {
    GetAlldata();

    if (AllEvents.length > 0) {
      let message = [];
      console.log("eventcells", AllEvents);
      const eventsByMonths = {};
      const EventsSorted = arrangeEventsByTiming(AllEvents);

      for (let i = 0; i < EventsSorted.length; i++) {
        let event = EventsSorted[i];
        const eventName = getEventName(event.ID);
        const eventLocation = getEventName(event.Location);
        const eventDateObj = new Date(event.Startdate);
        const eventDateMonth = eventDateObj.toLocaleString("default", {
          month: "long",
        });
        const eventDateDay = eventDateObj.getDay();
        const eventDayOrdinal = ordinal(eventDateDay);
        const eventPlayers = event.PlayerCount;
        const eventPrize = (function () {
          if (event.Prize != null) {
            return event.Prize;
          } else {
            return "Other";
          }
        })();
        const lan = (function () {
          if (event.lan == true) {
            return "LAN";
          } else if (event.lan == false) {
            return "ONLINE";
          }
        })();
        message.push(
          <a
            href="/events/6540/beyond-spring-invitational-2022"
            className="a-reset small-event standard-box"
          >
            <div className="event-logo-container" bis_skin_checked="1">
              <img
                alt="Beyond Spring Invitational 2022"
                className="logo day-only"
                srcSet="
            https://img-cdn.hltv.org/eventlogo/fjD5zZ9ZCH5F1Kp3R9YnSy.png?ixlib=java-2.1.0&amp;w=100&amp;s=5985bec3a41f12004e4428e7d6687c5d 2x
          "
                title="Beyond Spring Invitational 2022"
                src="https://img-cdn.hltv.org/eventlogo/fjD5zZ9ZCH5F1Kp3R9YnSy.png?ixlib=java-2.1.0&amp;w=50&amp;s=17220b908ec6880e2d4a08040e331a1a"
              />
              <img
                alt="Beyond Spring Invitational 2022"
                className="logo night-only"
                srcSet="
            https://img-cdn.hltv.org/eventlogo/eafTPrGNh6kUeoIwwuJbKS.png?ixlib=java-2.1.0&amp;w=100&amp;s=6ce54fa98e9124a61c45739dba70aebc 2x
          "
                title="Beyond Spring Invitational 2022"
                src="https://img-cdn.hltv.org/eventlogo/eafTPrGNh6kUeoIwwuJbKS.png?ixlib=java-2.1.0&amp;w=50&amp;s=629afd4a2a708669f9d75950cacce6bd"
              />
            </div>
            <div className="table-holder" bis_skin_checked="1">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="col-value event-col">
                      <div className="text-ellipsis" bis_skin_checked="1">
                        {eventName}
                      </div>
                    </td>
                    <td className="col-value small-col">8</td>
                    <td className="col-value small-col prizePoolEllipsis">
                      {(function () {
                        if (eventPrize >= 1000) {
                          return `$${Math.floor(eventPrize / 1000)},${
                            eventPrize % 1000
                          }`;
                        } else {
                          return `${eventPrize}`;
                        }
                      })()}
                    </td>
                  </tr>
                  <tr className="eventDetails">
                    <td>
                      <span className="smallCountry">
                        <img
                          alt="United Kingdom"
                          src="/img/static/flags/30x20/GB.gif"
                          className="flag"
                          title="United Kingdom"
                        />
                        <span className="col-desc">{eventLocation} |</span>
                      </span>
                      <span className="col-desc">
                        <span>
                          <span
                            className=""
                            data-time-format="MMM do"
                            data-unix="1651312800000"
                          >
                            {`${eventDateMonth} ${eventDateDay}${eventDayOrdinal}`}
                          </span>
                        </span>
                      </span>
                    </td>
                    <td className="col-desc">Teams</td>
                    <td className="col-desc">Prize</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </a>,
        );
      }
      return message;
    }
  };
  return eventCells();
};

export default EventCells;

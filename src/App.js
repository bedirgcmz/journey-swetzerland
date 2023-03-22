import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import JourneyEntre from "./components/JourneyEntre";
import JourneyHeader from "./components/JourneyHeader";

function App() {
  // const firstDate = `${new Date().getFullYear()}-${
  //   new Date().getMonth() + 1
  // }-${new Date().getDate()}T${new Date().getHours()}:${new Date().getMinutes()}`;
  const [route, setRoute] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [journeyDate, setJourneyDate] = useState(``);

  /**
   * This function fetch data from API.
   */
  const getJourneyInfo = async () => {
    const MY_URL_API = `http://transport.opendata.ch/v1/connections?from=${departure}&to=${arrival}&datetime=${journeyDate}&limit=10`;
    const response = await fetch(MY_URL_API);
    const routeInfo = await response.json();
    if (routeInfo.connections.length !== 0) {
      setRoute(routeInfo.connections);
    }
  };

  /**
   * This function re-executes the data fetching function when the states change.
   */
  // useEffect(() => {
  //   getJourneyInfo();
  // }, [route]);

  return (
    <div className="App">
      <JourneyHeader />
      <JourneyEntre
        arrival={arrival}
        departure={departure}
        journeyDate={journeyDate}
        route={route}
        setRoute={setRoute}
        setJourneyDate={setJourneyDate}
        setDeparture={setDeparture}
        setArrival={setArrival}
        getJourneyInfo={getJourneyInfo}
      />
    </div>
  );
}

export default App;

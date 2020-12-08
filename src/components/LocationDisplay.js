import React from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-router-ga";

function LocationDisplay() {
  let location = useLocation();
  React.useEffect(() => {
    ReactGA.send(["pageview", location.pathname]);
  }, [location]);
}

export default LocationDisplay;

import React, { useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const loadApi = async () => {
    // X-Yahoo-App-Id: YOUR_APP_ID
    // Authorization: OAuth
    // oauth_consumer_key="YOUR_CONSUMER_KEY",oauth_signature_method="HMAC-SHA1",oauth_timestamp="YOUR_TIMESTAMP",oauth_nonce="YOUR_NONCE",oauth_version="1.0",oauth_signature="YOUR_GENERATED_SIGNATURE"

    let url =
      "https://cors-anywhere.herokuapp.com/https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&&format=json";
    var app_id = "Ns5JMd7g";
    var consumer_key =
      "dj0yJmk9OUVOZ1B1cEx6TVZJJmQ9WVdrOVRuTTFTazFrTjJjbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTE5";
    var consumer_secret = "0fcecc0f17bcedae7d452c63ea589f5e84326dcf";
    let headers = {
      Authorization: "OAuth",
      "X-Yahoo-App-Id": app_id,
      oauth_consumer_key: consumer_key,
      oauth_consumer_secret: encodeURIComponent(consumer_secret),
      oauth_nonce: "",
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: "",
      oauth_version: "1.0"
      // oauth_signature: ""
    };

    axios
      .get(url, { headers })
      .then(response => {
        console.log(response.data);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

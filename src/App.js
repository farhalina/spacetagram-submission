import "./App.css";
import LikeButton from "./components/LikeButton";
import Heading from "./components/Heading";
import Loading from "./components/Loading";
import React, { useState, useEffect } from "react";
// import HttpClient from "./HttpClient";

const App = () => {
  const [apod, setApod] = useState({});
  const [yesterday, setYesterday] = useState({});
  const [dayBefore, setDayBefore] = useState({});

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?date=2022-01-19&api_key=hJD3K3aXdDC1QxYu5bIsMy35hnHofzBtaUKGGmjt`
      );
      const yest = await fetch(
        `https://api.nasa.gov/planetary/apod?date=2022-01-18&api_key=hJD3K3aXdDC1QxYu5bIsMy35hnHofzBtaUKGGmjt`
      );
      const dby = await fetch(
        `https://api.nasa.gov/planetary/apod?date=2022-01-17&api_key=hJD3K3aXdDC1QxYu5bIsMy35hnHofzBtaUKGGmjt`
      );
      const data = await res.json();
      const yestData = await yest.json();
      const dbyData = await dby.json();

      setApod(data);
      setYesterday(yestData);
      setDayBefore(dbyData);
      console.log(data, yestData, dbyData);
    }
  }, []);

  if (!apod) {
    return <Loading />;
  } else {
    return (
      <div>
        <Heading />
        
        {/* Initial APOD Example */}
        <div className="App-content">
          <div
            class="card mb-3"
            style={{ maxWidth: 900, padding: 20 }}
            align="center"
          >
            <h3 align="left">Astronomy Picture of the Day</h3>
            {apod && (
              <article>
                <header align="left">
                  {apod.title} - <i>{apod.date}</i>
                </header>
                <img
                  src={apod.url}
                  alt="APOD"
                  width="800"
                  height="auto"
                  style={{ margin: 20 }}
                />
                <p align="left">
                  <small>{apod.explanation}</small>
                </p>
              </article>
            )}
            <LikeButton />
          </div>
          <hr />
        </div>

        {/* Yesterday APOD Example */}
        <div className="App-content" style={{ padding: 30 }}>
          <div
            class="card mb-3"
            style={{ maxWidth: 900, padding: 20 }}
            align="center"
          >
            <h3 align="left">Astronomy Picture of Yesterday</h3>
            {apod && (
              <article>
                <header align="left">
                  {yesterday.title} - <i>{yesterday.date}</i>
                </header>
                <img
                  src={yesterday.url}
                  alt="APOD"
                  width="800"
                  height="auto"
                  style={{ margin: 20 }}
                />
                <p align="left">
                  <small>{yesterday.explanation}</small>
                </p>
              </article>
            )}
            <LikeButton />
          </div>
          <hr />
        </div>

        {/* Day Before Yesterday APOD */}
        <div className="App-content" style={{ padding: 30 }}>
          <div
            class="card mb-3"
            style={{ maxWidth: 900, padding: 20 }}
            align="center"
          >
            <h3 align="left">Astronomy Picture of the Day Before Yesterday</h3>
            {apod && (
              <article>
                <header align="left">
                  {dayBefore.title} - <i>{dayBefore.date}</i>
                </header>
                <img
                  src={dayBefore.url}
                  alt="APOD"
                  width="800"
                  height="auto"
                  style={{ margin: 20 }}
                />
                <p align="left">
                  <small>{dayBefore.explanation}</small>
                </p>
              </article>
            )}
            <LikeButton />
          </div>
          <hr />
        </div>
      </div>
    );
  }
};

export default App;

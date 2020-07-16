import React, { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Let's View The Rankings</h1>
            <h2 class="subtitle">
              These are all the duelists currently in the tournaments
            </h2>
          </div>
        </div>
      </section>
      <div class="container">
        <div style={{ paddingTop: "30px", textAlign: "center" }}>
          <h1 className="title" style={{ color: "white" }}>
            LEADERBOARD
          </h1>
        </div>
        <div style={{ paddingTop: "30px", textAlign: "center" }}>
          <div
            class="card"
            style={{
              padding: "2rem",
              border: "5px solid #ff8b21",
              margin: "auto",
              width: "50%"
            }}
          >
            <img src="https://img.icons8.com/doodle/48/000000/crown--v1.png" />
            <div class="card-image">

              <img
                class="is-rounded"
                src="/images/seto_kaiba.png"
                alt="Placeholder image"
                style={{ width: "30%" }}
              />

            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-2" style={{ color: "#fec255" }}>
                    Jashan - The Goat
                  </p>
                  <p class="subtitle is-4" style={{ color: "#04E762" }}>
                    Wins : 1
                  </p>
                  <p class="subtitle is-4" style={{ color: "#e00000" }}>
                    Losses : 0
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card"
            style={{
              padding: "2rem",
              border: "5px solid #ff8b21",
              margin: "30px auto",
              width: "50%"

            }}
          >
            <div class="card-image">

              <img
                src="/images/pegasus.jpg"
                alt="Placeholder image"
                style={{ width: "30%" }}
              />

            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-2" style={{ color: "#fec255" }}>
                    Peep
                  </p>
                  <p class="subtitle is-4" style={{ color: "#04E762" }}>
                    Wins : 0
                  </p>
                  <p class="subtitle is-4" style={{ color: "#e00000" }}>
                    Losses : 1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card"
            style={{
              padding: "2rem",
              border: "5px solid #ff8b21",
              margin: "auto",
              width: "50%"

            }}
          >
            <div class="card-image">

              <img
                src="/images/joey.png"
                alt="Placeholder image"
                style={{ width: "30%" }}
              />

            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-2" style={{ color: "#fec255" }}>
                    Preet
                  </p>
                  <p class="subtitle is-4" style={{ color: "#04E762" }}>
                    Wins : 0
                  </p>
                  <p class="subtitle is-4" style={{ color: "#e00000" }}>
                    Losses : 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

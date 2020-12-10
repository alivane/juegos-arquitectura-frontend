import React from "react";
import "../Profilemen/stylepromen.css";
import OptionsGame from "../../components/OptionsGame";
import "./Rankstyle.css";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function RankForm() {
  return (
    <>
      <div className="container_game">
        <div className="container_rank">
          <div className="container_rank_2">
            <img src="img_logro.png" className="img_rank" alt="" />
            <ProgressBar
              striped
              variant="success"
              now={80}
              className="bar_progress"
              animated="true"
            />
            <div className="puntaje_rank">
              <h2 className="puntaje_rank_1">80</h2>
              <h2 className="puntaje_rank_1">/</h2>
              <h2 className="puntaje_rank_1">100</h2>
            </div>
            <h1 className="title_rank">APRENDIZ</h1>
          </div>
          <div className="title_container_rank">
            <h1 className="title_container_rank_1">R</h1>
            <h1 className="title_container_rank_1">A</h1>
            <h1 className="title_container_rank_1">N</h1>
            <h1 className="title_container_rank_1">G</h1>
            <h1 className="title_container_rank_1">O</h1>
          </div>
        </div>
        <OptionsGame />
      </div>
    </>
  );
}

import React from "react";
import "../article.css";

const TeamInfo = props => {
  return (
    <div className="articleTeamHeader">
      <div
        className="left"
        style={{ background: `url('/images/teams/${props.team.logo}')` }}>
        </div>
      <div className="right">
        <div>
          <span className="">
            {props.team.city} {props.team.name}
          </span>
        </div>
        <div>
          <strong>
            W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
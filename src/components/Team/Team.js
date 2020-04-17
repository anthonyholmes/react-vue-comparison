import React, { useState } from "react";
import PropTypes from "prop-types";


function TeamMember({ name }) {
  return (
    <div>{name}</div>
  )
}

TeamMember.propTypes = {
  name: PropTypes.string
}


function Team() {
  let [teamMembers, setTeamMembers] = useState([
    "Jesus",
    "Zak",
    "Dan",
    "Nick",
    "Anthony",
  ]);

  function shuffleMembers() {
    let teamMembersClone = [...teamMembers];
    teamMembersClone.sort(() => Math.random() - 0.5);
    setTeamMembers(teamMembersClone);
  }

  return (
    <div>
      {teamMembers.map((tm) => (
        <TeamMember name={tm} key={tm} />
      ))}
      <button type="button" onClick={shuffleMembers}>Shuffle</button>
    </div>
  );
}

Team.propTypes = {};

export default Team


import React from 'react';
import TeamInfo from '../../Elements/teamInfo';

const Header = (props) => {
  const info = (team) => (
    team ? (<TeamInfo team={team} />) : null
  )
  return (
    <div>{
      info(props.teamData)
    }<div>2</div></div>
  )
}

export default Header;
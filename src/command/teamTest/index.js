import NBA from '../../utils/nba';
import catchAPIError from '../../utils/catchAPIError';
// import seasonStatsCompare from './seasonStatsCompare';
import getTeamInfo from '../game/schedule';

import format from 'date-fns/format';
import { center } from 'wide-align';
import emoji from 'node-emoji';

// import getBroadcastNetworks from './network';

import { bold } from '../../utils/log';
import { basicTable } from '../../utils/table';

const teamDataTest = async teamName => {
	// await NBA.updateTeams();

	teamID = teamIDFromName(teamName);
	const teamInfo = await getTeamInfo(teamName);
	teamStats = getTeamDashBoardData(teamName);
	

const createTeamStatsColumns = (
  teamName,
  {
    gp,
    w,
    l,
    pts,
    fgPct,
    fg3Pct,
    ftPct,
    oreb,
    dreb,
    reb,
    ast,
    blk,
    stl,
    tov,
    pf,
    plusMinus,
  }
) => [
  teamName,
  `${w} - ${l}`,
  (w / gp).toFixed(3),
  `${pts}`,
  `${(fgPct * 100).toFixed(1)}`,
  `${(fg3Pct * 100).toFixed(1)}`,
  `${(ftPct * 100).toFixed(1)}`,
  `${oreb}`,
  `${dreb}`,
  `${reb}`,
  `${ast}`,
  `${blk}`,
  `${stl}`,
  `${tov}`,
  `${pf}`,
  `${plusMinus}`,
];

const preview = (
  teamName,
  {
    teamDashboardData
  }
) => {
  const gamePreviewTable = basicTable();
  const columnMaxWidth = Math.max(
    team.getFullName({ color: false }).length,
  );

  gamePreviewTable.push(

    alignCenter(
      createTeamStatsColumns(
        center(team.getFullName({ color: true }), columnMaxWidth),
        teamDashboardData
      )
    ),
    alignCenter([
      '',
      bold('RECORD'),
      bold('WIN%'),
      bold('PTS'),
      bold('FG%'),
      bold('3P%'),
      bold('FT%'),
      bold('OREB'),
      bold('DREB'),
      bold('REB'),
      bold('AST'),
      bold('BLK'),
      bold('STL'),
      bold('TOV'),
      bold('PF'),
      bold('+/-'),
    ])
  );

  console.log(gamePreviewTable.toString());
}

};

export default teamDataTest;


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

	// team = teamName.teamIDFromName(teamName);
	// const teamInfo = await getTeamInfo(teamName);
	// teamStats = getTeamDashBoardData()
	
	// console.log(team);
	let team;
	let record;
	let winpct;
	let pts;
	let fgpct;
	let threeptpct;
	let ftpct; 
	let oreb;
	let dreb;
	let assts;
	let blks;
	let stls;
	let turnovers;
	let plusminus;

	if(teamName == 'celtics'){
		teamName = 'Boston Cetlics';
		record = '55-27';
		winpct = 67.1;
		pts = 104;
		fgpct = 45;
		threeptpct = 37.7;
		ftpct = 77.1;
		oreb = 9.4;
		dreb = 35.1;
		assts = 22.5;
		blks = 4.5;
		stls = 7.4;
		turnovers = 14;
		plusminus = 3.6;

		console.log('Boston Celtics\tHead Coach: Brad Stevens\tHome Stadium: TD Garden, Boston, MA\tPast Titles: 2008, 1986, 1984, 1981');
		console.log('Record\tWin %\tPoints\t FG %\t 3P %\tFT %\tO Reb\tD Reb\tAssists\tBlocks\tSteals\tTurnovers  +/-');
		console.log(record, '\t', winpct, '\t', pts, '\t', fgpct + '%', '\t', threeptpct, '\t', ftpct, '\t', oreb, '\t', dreb, '\t', assts, '\t', blks, '\t', stls, '\t', turnovers, '\t  ', plusminus);
		

	}

	else if(teamName == 'sixers'){

		teamName = 'Philadelphia 76ers';
		record = '52-30';
		winpct = 63.4;
		pts = 109.8;
		fgpct = 47.2;
		threeptpct = 36.9;
		ftpct = 75.2;
		oreb = 10.9;
		dreb = 36.5;
		assts = 27.1;
		blks = 5.1;
		stls = 8.3;
		turnovers = 16.5;
		plusminus = 4.5;		

		console.log('Philadelphia 76ers\tHead Coach: Brett Brown\t\tHome Stadium: Wells Fargo Center, Philadelphia, PA\tPast Titles: 1983, 1967, 1955');
		console.log('Record\tWin %\tPoints\t FG %\t 3P %\tFT %\tO Reb\tD Reb\tAssists\tBlocks\tSteals\tTurnovers  +/-');
		console.log(record, '\t', winpct, '\t', pts, '\t', fgpct + '%', '\t', threeptpct, '\t', ftpct, '\t', oreb, '\t', dreb, '\t', assts, '\t', blks, '\t', stls, '\t', turnovers, '\t  ', plusminus);
	}

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


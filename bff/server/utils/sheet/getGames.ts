import {google} from "googleapis";

export const listGames = defineCachedFunction(async () => {
  const auth = await authorizeSheet();
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: 'Parties!A3:H10',
  });
  const resPlayers = await sheets.spreadsheets.values.get({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: 'Inscription!B3:B1000',
  });
  const rows = res.data.values;
  const players = resPlayers.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  return rows.map((row, index) => ({
    id: index,
    name: row[0] || undefined,
    dateStart: row[1] || undefined,
    timeStart: row[2] || undefined,
    timeEnd: row[3] || undefined,
    numberOfPlayers: row[4] || undefined,
    MJName: row[5] || undefined,
    imgUrl: row[6] || undefined,
    description: row[7] || undefined,
    players: players.slice((index)*30, (index)*30+29).map(player => player[0]).filter(player => !!player)
  }));
}, {
  maxAge: 60 * 60,
  name: 'listGames',
  getKey: () => 'default'
})
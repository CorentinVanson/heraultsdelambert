import {google} from "googleapis";

export const addPlayer = async ({ id, pseudo, mail, phone }) => {
  const games = await listGames();
  const game = games[id];
  console.log(`Inscription!B${id*30 + 3 + game.players.length}`)
  if (!game.name) {
    return { error: 'Game not found' }
  }
  if (game.players.length >= game.numberOfPlayers) {
    return { error: 'Game is full' }
  }

  const auth = await authorizeSheet();
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.update({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: `Inscription!B${id*30 + 3 + game.players.length}:D${id*30 + 3 + game.players.length}`,
    valueInputOption: 'RAW',
    requestBody: {
      range: `Inscription!B${id*30 + 3 + game.players.length}:D${id*30 + 3 + game.players.length}`,
      values: [
        [ pseudo, mail, phone ]
      ]
    }
  });
  await useStorage('cache').removeItem(`nitro:functions:listGames:default.json`)
}
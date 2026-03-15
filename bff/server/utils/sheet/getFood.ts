import {google} from "googleapis";

export const listFood = defineCachedFunction(async () => {
  const auth = await authorizeSheet();
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: 'Repas!A3:H1000',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  return rows.map((row, index) => ({
    id: index,
  }));
}, {
  maxAge: 60 * 60,
  name: 'listFood',
  getKey: () => 'default'
})
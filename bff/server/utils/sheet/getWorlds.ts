import {google} from "googleapis";

export const listWorlds = defineCachedFunction(async () => {
  const auth = await authorizeSheet();
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: 'Univers!A3:H40',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  return rows.map((row, index) => ({
    id: index,
    name: row[0] || undefined,
    category: row[1] || undefined,
    smallDesc: row[2] || undefined,
    bigDesc: row[3] || undefined,
    tags: row[4]?.split(',').map((t: string) => t.trim()).filter(t => t) || undefined,
    mjs: row[5]?.split(',').map((t: string) => t.trim()).filter(t => t) || undefined,
    links: row[6]?.split(',').map((t: string) => t.trim()).filter(t => t) || undefined,
    imgUrl: row[7] || undefined,}));
}, {
  maxAge: 60 * 60,
  name: 'listWorlds',
  getKey: () => 'default'
})
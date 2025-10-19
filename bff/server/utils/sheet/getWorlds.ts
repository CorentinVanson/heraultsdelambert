import {google} from "googleapis";

export const listWorlds = defineCachedFunction(async () => {
  const auth = await authorizeSheet();
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: 'Univers!A3:I40',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  return rows.map((row, index) => ({
    id: index,
    name: row[0] || undefined,
    type: row[1] || undefined,
    category: row[2] || undefined,
    smallDesc: row[3] || undefined,
    bigDesc: row[4] || undefined,
    tags: row[5]?.split(',').map((t: string) => t.trim()).filter(t => t) || undefined,
    mjs: row[6]?.split(',').map((t: string) => t.trim()).filter(t => t) || undefined,
    links: row[7]?.split(',').map((t: string) => t.trim()).filter(t => t) || undefined,
    imgUrl: row[8] || undefined,}));
}, {
  maxAge: 60 * 60,
  name: 'listWorlds',
  getKey: () => 'default'
})
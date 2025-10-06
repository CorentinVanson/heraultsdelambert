import {google} from "googleapis";

export const listPartners = defineCachedFunction(async () => {
  const auth = await authorizeSheet();
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: 'Partenaires!A3:D40',
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
    image: row[2] || undefined,
    socialLink: row[3] || undefined,
  }));
}, {
  maxAge: 60 * 60,
  name: 'listPartners',
  getKey: () => 'default'
})
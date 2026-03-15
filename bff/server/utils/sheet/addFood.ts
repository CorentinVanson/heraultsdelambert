import {google} from "googleapis";

export const addFood = async ({ pseudo, mail, food }) => {
  const foods = await listFood() || [];
  
  const auth = await authorizeSheet();
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.update({
    spreadsheetId: '1IS83je0Jrq_Z_YYZAslgAveBgSIHgo_qA_1Kqvuoxtw',
    range: `Repas!A${foods.length + 3}:E${foods.length + 3}`,
    valueInputOption: 'RAW',
    requestBody: {
      range: `Repas!A${foods.length + 3}:E${foods.length + 3}`,
      values: [
        [
          pseudo,
          mail,
          Array.isArray(food.saturdayMidday) ? food.saturdayMidday.join(', ') : (food.saturdayMidday || ''),
          Array.isArray(food.saturdayEvening) ? food.saturdayEvening.join(', ') : (food.saturdayEvening || ''),
          Array.isArray(food.sundayMidday) ? food.sundayMidday.join(', ') : (food.sundayMidday || ''),
        ]
      ]
    }
  });
  await useStorage('cache').removeItem(`nitro:functions:listFood:default.json`)
}
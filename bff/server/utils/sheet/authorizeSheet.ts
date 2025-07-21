import path from "path";

import process from "process";
import {google} from "googleapis";
import fs from "node:fs";

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/spreadsheets'];

/**
 * Load or request or authorization to call APIs.
 *
 */
export const authorizeSheet = defineCachedFunction(async (event?) => {
  const { isProduction } = useRuntimeConfig(event);
  const CREDENTIALS_PATH = isProduction === 'false' ? path.join(process.cwd(), 'credentials.json') : "/etc/credentials.json";
  fs.readFile(CREDENTIALS_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  const client = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: SCOPES,
  });
  return client;
});
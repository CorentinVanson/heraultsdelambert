import path from "path";

import process from "process";
import {google} from "googleapis";

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/spreadsheets'];

/**
 * Load or request or authorization to call APIs.
 *
 */
export const authorizeSheet = defineCachedFunction(async (event) => {
  const isProd = useRuntimeConfig(event).production;
  const CREDENTIALS_PATH = isProd ? "/etc/credentials.json" : path.join(process.cwd(), 'credentials.json');
  const client = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: SCOPES,
  });
  return client;
});
import {google} from "googleapis";

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/spreadsheets'];

/**
 * Load or request or authorization to call APIs.
 *
 */
export const authorizeSheet = defineCachedFunction(async (event?) => {
  console.log(useRuntimeConfig(event))
  const { sheetCredentialsEmail, sheetCredentialsPrivateKey } = useRuntimeConfig(event);
  const client = new google.auth.GoogleAuth({
      credentials: {
        client_email: sheetCredentialsEmail,
        private_key: sheetCredentialsPrivateKey,
      },
      scopes: SCOPES,
  });
  return client;
});
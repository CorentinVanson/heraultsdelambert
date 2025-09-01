import {google} from "googleapis";

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/spreadsheets'];
let cachedAuth = null;
/**
 * Load or request or authorization to call APIs.
 *
 */
export const authorizeSheet = async (event?) => {
  const { sheetCredentialsEmail, sheetCredentialsPrivateKey } = useRuntimeConfig(event);

  if(cachedAuth) {
    return cachedAuth
  }
  const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: sheetCredentialsEmail,
        private_key: sheetCredentialsPrivateKey,
      },
      scopes: SCOPES,
  });
  cachedAuth = auth
  return auth;
};
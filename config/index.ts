export const clientId =
  process.env.AUTHING_CLIENT_ID || '61dcec7e3f318cc9804acdf5';

export const clientSecret =
  process.env.AUTHING_CLIENT_SECRET || '45f302c105deae5d285e8f426bdc51c1';

export const appDomain =
  process.env.AUTHING_CLIENT_DOMAIN || 'https://remix.authing.cn';

export const redirectUri =
  process.env.AUTHING_REDIRECT_URI || 'http://localhost:3000/api/callback';

export const logoutRedirectUri =
  process.env.AUTHING_LOGOUT_REDIRECT_URI || 'http://localhost:3000/';

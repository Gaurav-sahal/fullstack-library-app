export const oktaConfig = {
    clientId: '0oaaipnl86X3XQZ1U5d7',
    issuer: 'https://dev-93918451.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
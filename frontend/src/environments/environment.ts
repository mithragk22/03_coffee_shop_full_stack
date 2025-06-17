/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-eezq7zycigop1hot.us', // the auth0 domain prefix
    audience: 'https://coffeeshop/api', // the audience set for the auth0 app
    clientId: '3aD12j6Oa62B8flFgQYH7Uhr0yJNaPnA', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};



## Auth0-React 
Udemy had a course on Auth0 React but as the source code wasn't on the course thought it would be nice to share. 
https://www.udemy.com/secure-your-reactjs-applications-with-auth0/

Clone locally: 

Use:

### `npm start`

In the folder which has been cloned. 

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser (on chrome it opened automatically).

The page will load but when the login button is pressed it will not load Auth0. 

This is because the Auth.js in src folder has to be updated. 

        domain: 'INSERT_DOMAIN',
        clientID: 'INSERT_CLIENT_ID',
Please updated the information for the domain and clientID in Auth.js and cancel (ctrl+c) the instance. 
And re-run in the terminal: 

### `npm start`

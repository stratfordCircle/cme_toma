//LOCAL SERVER
  /* export const clientVars = {
        apiURL : "https://teoma.memberclicks.net/oauth/v1/authorize?response_type=token&client_id=o4BDKQrdnCfcgFuwt5tc&scope=read&redirect_uri=http://localhost:8100",
        cycleCollection1 : "TOMA CME Cycle 18-20"
        } */ 

export const clientVars = {
  apiURL:
    "https://teoma.memberclicks.net/oauth/v1/authorize?response_type=token&client_id=o4BDKQrdnCfcgFuwt5tc&scope=read&redirect_uri=https://toma-cme.firebaseapp.com",
  cycleCollection1: "TOMA CME Cycle 18-20"
};

export const environment = {
  production: false,  
  firebase: {
    apiKey: "AIzaSyA_A9MuBSiQtvI2ezojaxDSpnBzsRwqdkc",
    authDomain: "toma-cme.firebaseapp.com",
    databaseURL: "https://toma-cme.firebaseio.com",
    projectId: "toma-cme",
    storageBucket: "toma-cme.appspot.com",
    messagingSenderId: "613715981051"
  }
};

/*   export const environment = { 
    production: false,
    firebase : {
    apiKey: "AIzaSyBFk8jIdPM436N5OCijdjjyGtPkpiBtXBs",
    authDomain: "authone-5d242.firebaseapp.com",
    databaseURL: "https://authone-5d242.firebaseio.com",
    projectId: "authone-5d242",
    storageBucket: "authone-5d242.appspot.com",
    messagingSenderId: "781765335830"
    }
  }; */

//  toma-cme.firebaseapp.com

/*          export const environment = {
    production: false,
    firebase : {
        apiKey: "AIzaSyB1lCcy8g5uCGI2bC_TyUo17JorBACpfRw",
        authDomain: "pepper-b4798.firebaseapp.com",
        databaseURL: "https://pepper-b4798.firebaseio.com",
        projectId: "pepper-b4798",
        storageBucket: "pepper-b4798.appspot.com",
        messagingSenderId: "130180964377"
    }
  };  */

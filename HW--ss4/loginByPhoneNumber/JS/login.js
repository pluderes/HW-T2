import { firebaseDB } from "./FireBase.js";

const phonenumber = document.getElementById("phonenumber");
const btnLogin = document.getElementById("btnLogin");
const sigup = document.getElementById("Sigup");

function setLanguageCode() {
  // [START auth_set_language_code]
  firebase.auth().languageCode = "it";
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  // [END auth_set_language_code]
}

const uiConfig = {
  signInSuccessUrl: "logout.html",
  signInOptions: [firebaseDB.auth.PhoneAuthProvider.PROVIDER_ID],
  tosURL: "#",
  recaptchaParameters: {
    size: "invisible",
  },
};

const ui = new firebaseui.auth.AuthUI(firebaseDB.auth());
ui.start("#firebaseui-auth-container", uiConfig);

setLanguageCode();

firebaseDB.auth().onAuthStateChanged((user) => {
  if (user) {
    var displayName = user.displayName;

    user.getToken().then(() => {});
  }
});

sigup.onclick = () => {
  location.href = "http://127.0.0.1:5500/signup.html";
};

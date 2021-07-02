import { firebaseDB } from "./FireBase.js";

const phonenumber = document.getElementById("phonenumber");
const btnLogin = document.getElementById("btnLogin");
const sigup = document.getElementById("Sigup");
const code = document.getElementById("code");
const auth = firebaseDB.auth();

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  "recaptcha-container"
);

recaptchaVerifier.render().then((widgetId) => {
  window.recaptchaWidgetId = widgetId;
});

const sendVerificationCode = () => {
  const phoneNumber = phonenumber.value;
  const appVerifier = window.recaptchaVerifier;

  auth
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      const sentCodeId = confirmationResult.verifierId;
      btnLogin.addEventListener("click", () => signInWithPhone(sentCodeId));
    });
};

const signInWithPhone = (sentCodeId) => {
  const codeValue = code.value;
  const credential = firebaseDB.auth.PhoneAuthProvider.credential(
    sentCodeId,
    codeValue
  );
  auth
    .signInWithCredential(credential)
    .then(() => {
      alert("dang nhap thanh cong");
    })
    .catch((errer) => {
      console.error(error);
    });
};
sigup.addEventListener("click", sendVerificationCode);

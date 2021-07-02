import { firebaseDB } from "./FireBase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const sigup = document.getElementById("Sigup");

btnLogin.onclick = () => {
  firebaseDB
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified == true) {
        alert("Dang nhap thanh cong!");
        location.href = "logout.html";
      } else {
        alert("Email chua duoc xac thuc!");
      }
    })
    .catch((error) => {
      alert(`Dien thong tin dang nhap truoc!`);
    });
};

sigup.onclick = () => {
    location.href = "http://127.0.0.1:5500/signup.html";
};

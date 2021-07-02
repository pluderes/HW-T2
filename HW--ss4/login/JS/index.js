import { firebaseDB } from "./FireBase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const re_password = document.getElementById("rePassword");
const btnSignup = document.getElementById("btnSignup");
const Login = document.getElementById("Login");

btnSignup.onclick = () => {
  if (password.value.trim() != re_password.value.trim()) {
    alert("Nhập lại mật khẩu sai!");
    return;
  }
  firebaseDB
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;

      return firebaseDB.auth().currentUser.updateProfile({
        displayName: "Trung Đức",
        photoURL:
          "https://lh3.googleusercontent.com/y5LtG56Yrh9FTnJdraE6zZWJky_wjnrlsb_Po-4l9YmE3LBFGWaGxlqa7JZKo4eFtaanrh9-U7mLtQXMch1vOD9v7N0Dh1h_oSqNNbbVUmacWEGzw3RM_Mwg36_c3f7OSya16TXCsP5LsbKMP9zfS4JR2cD_1GBq-YfX83vkoMj6hv6_K_hhulVBadxO2d3VDbswl0NUkNwiFlX5XVG-RHIyckC9zl1l0PGIK4eYTYTREU73rTiwmkA1bpsOJBFnlHMTjGgW_iSZhAEu7YvWfubwb3XsbnY2c5RD-pJ5kyJWwUf33qAOGZHap6ibTzWwq1MenUUS2i2nl4KdK8WdeMrMgJTAVnzPpN2PQP3m8_XYNKpHAqG2VJdoHgIqWgVFizeWv9O_0jO6o3_SctfkRsBdWhQFDVlsWJQNpolyL_IoLj2lAXdWWFtkY_3Neeiu1Hbt_6EXuxrACdLME21sM2mEcCYjiqJaOosGJO4sEdhmT8txWgbzw9J_qoQROvfqWef158IS65-HelDdW4TuetsPmZgfmh90lwAI0BweMBbr8z5IA0wlPZKVaIgM--E42dcDqCpsy-mC4FKD6xd6t28YFvE4wcHwgkJOVBhdUMRTFeogXr2VdHkuhsKSDnigBb-HW2TObxZdueCZz5dq_4qUc5HCtZRDPiIAoSJN4cc5svIFpfMOBj71oRWCB7ACBAqW5nzjru6clhqBFsYJzZdx=s625-no?authuser=0",
        phoneNumber: "0359280808",
      });
    })
    .then((data) => {
      console.log(data);
      return firebaseDB.auth().currentUser.sendEmailVerification();
    })
    .then(() => {
      alert("Dang ki thanh cong!");
      location.href = "login.html";
    })
    .catch((error) => {
      alert(`Hay dien day du thong tin!`);
    });
};

Login.onclick = () => {
    location.href = "login.html";
}
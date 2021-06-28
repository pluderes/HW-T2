import staff from "./staff.js";

class account extends staff {
  constructor(id, name, birthday, address, gender, avatar, email, password) {
    super(id, name, birthday, address, gender);
    this.avatar = avatar;
    this.email = email;
    this.password = password;
  }
  get getAvatar() {
    return this.avatar;
  }
  get getEmail() {
    return this.email;
  }
  get getPassword() {
    return this.password;
  }
  set setAvatar(newAvatar) {
    this.avatar = newAvatar;
  }
  set setEmail(newEmail) {
    this.email = newEmail;
  }
  set setPassword(newPassword) {
    this.password = newPassword;
  }

  //   method
  addAvatar() {
    console.log("Add avatar successful!");
  }
  addEmail() {
    console.log("Add email successful!");
  }
  addPassword() {
    console.log("Add password successful!");
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      return super.login();
    } else {
      console.log("Login failed!");
    }
  }
  logout(){
      super.logout();
  }
}

export default account;

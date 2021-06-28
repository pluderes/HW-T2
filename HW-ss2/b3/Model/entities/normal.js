import account from "./account.js";

class normal extends Account {
  constructor(id, name, birthday, address, gender, avatar, email, password) {
    super(id, name, birthday, address, gender, avatar, email, password);
  }

  changeAvatar(newAvatar) {
    this.avatar = newAvatar;
  }

  checkTimeKeeping() {
    let hours = new Date().getHours();
    if (hours >= 7 && hours <= 18) {
      console.log("Success!");
      return true;
    } else {
      console.log("Fails!");
      return false;
    }
  }

  dayOff() {
    console.log("Can I off today!");
  }

  resignation() {
    console.log("Leave job?");
  }

  login() {
    super.login();
  }

  logout() {
    super.logout();
  }
}

export default normal;

import account from "./account.js";
import normal from "./normal.js";

class admin extends Account {
  constructor(
    id,
    name,
    birthday,
    address,
    gender,
    avatar,
    email,
    password,
    permission,
    listStaff
  ) {
    super(id, name, birthday, address, gender, avatar, email, password);
    this.permission = permission;
    this.listStaff = listStaff;
  }
  get getPer() {
    return this.permission;
  }
  set setPer(newPer) {
    this.permission = newPer;
  }
  get getList() {
    return this.listStaff;
  }
  set setList(newList) {
    this.listStaff = newList;
  }
  // method
  resetPass(account) {
    account.setPassword = "";
  }
  addAccount(account) {
    this.listStaff.push(account);
  }
  deleteAccount(index) {
    if (index <= this.listStaff.length - 1) {
      this.listStaff.splice(index, 1);
      console.log("Delete completed!");
    } else {
      console.log("Out of range");
    }
  }
  login() {
    super.login();
  }

  logout() {
    super.logout();
  }
}

export default admin;

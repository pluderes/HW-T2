class staff {
  constructor(id, name, birthday, address, gender) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.address = address;
    this.gender = gender;
  }
  get getID() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getBirthday() {
    return this.birthday;
  }
  get getAddress() {
    return this.address;
  }
  get getGender() {
    return this.gender;
  }
  set setID(newID) {
    this.id = newID;
  }
  set setName(newName) {
    this.name = newName;
  }
  set setBirthday(newBirthday) {
    this.birthday = newBirthday;
  }
  set setAddress(newAddress) {
    this.address = newAddress;
  }
  set setGender(newGender) {
    this.gender = newGender;
  }

  //   method
  changePassword() {
    console.log("Password change successful!");
  }
  login() {
    console.log("Login successful!");
  }
  logout() {
    console.log("Logout successful!");
  }
}

export default staff;

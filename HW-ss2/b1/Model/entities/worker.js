import Employee from "./employee.js";

class Worker extends Employee {
  constructor(name, age, gender, address, level) {
    super(name, age, gender, address);
    this.level = level;
  }
  get getLevel() {
    return this.level;
  }
  set setLevel(newLevel) {
    this.level = newLevel;
  }

  //   method
  checkTimekeeping() {
    const hours = new Date().getHours();
    if (hours >= 22 && hours <= 6) {
      return super.checkTimekeeping();
    } else {
      console.log("Quá giờ chấm công!");
      return false;
    }
  }
  checkWorkingDay() {
    super.checkWorkingDay();
  }
}

export default Worker;

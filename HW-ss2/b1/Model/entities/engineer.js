import Employee from "./employee.js";

class Enginerr extends Employee {
  constructor(name, age, gender, address, branch) {
    super(name, age, gender, address);
    this.branch = branch;
  }
  get getBranch() {
    return this.branch;
  }
  set setBranch(newBranch) {
    this.branch = newBranch;
  }

  //   method
  /**
   * Ham cham cong
   * @returns true: oke / false: not oke
   */
  checkTimekeeping() {
    const hours = new Date().getHours();
    if (hours >= 9 && hours <= 18) {
      return super.checkTimekeeping();
    } else {
      console.log("Quá giờ chấm công!");
      return false;
    }
  }
  checkWorkingDay() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
      super.checkWorkingDay();
    } else {
      console.log("Engineer được nghỉ thứ 7 và CN!");
      return false;
    }
  }
}

export default Enginerr;

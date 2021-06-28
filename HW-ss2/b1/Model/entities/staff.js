import Employee from "./employee.js";

class Staff extends Employee {
  constructor(name, age, gender, address, task) {
    super(name, age, gender, address);
    this.task = task;
  }
  get getTask() {
    return this.task;
  }
  set setTask(newTask) {
    this.task = newTask;
  }

  //   method
  checkTimekeeping() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    if (
      (hours > 9 && hours < 17) ||
      (hours === 18 && minutes >= 30) ||
      (hours === 17 && minutes <= 30)
    ) {
      return super.checkTimekeeping();
    } else {
      console.log("Quá giờ chấm công!");
      return false;
    }
  }
  checkWorkingDay() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 6) {
      super.checkWorkingDay();
    } else {
      console.log("Staff được nghỉ ngày CN!");
      return false;
    }
  }
}

export default Staff;

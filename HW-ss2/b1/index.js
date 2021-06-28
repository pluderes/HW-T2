import Employee from "./Model/entities/employee.js";
import Worker from "./Model/entities/worker.js";
import Enginerr from "./Model/entities/engineer.js";
import Staff from "./Model/entities/staff.js";

const workerA = new Worker("Trung", 22, "Male", "TH", 10);
console.log(workerA);
workerA.checkTimekeeping();
workerA.checkWorkingDay();
console.log("--------------------------");

const engineerB = new Enginerr("Duc", 22, "Male", "TH", "HN");
console.log(engineerB);
engineerB.checkTimekeeping();
engineerB.checkWorkingDay();
console.log("--------------------------");

const staffC = new Staff("Tran", 22, "Male", "TH", "Checking plagiarism");
console.log(staffC);
staffC.checkTimekeeping();
staffC.checkWorkingDay();
import account from "./Model/entities/account.js";
import normal from "./Model/entities/normal.js";
import admin from "./Model/entities/admin.js";
import staff from "./Model/entities/staff.js";

const staff1 = new normal(
  1,
  "trungduc",
  "21/11/1998",
  "TH",
  "male",
  "tduc.img",
  "tduc11@mail.com",
  "tduc"
);
// console.log(staff1);

// staff1.logIn("ttd@mail.com", "ttd");
// staff1.changeAvatar("abc.img");
// staff1.checkTimeKeeping();

const admin1 = new admin(
  1,
  "trungduc",
  "21/11/1998",
  "TH",
  "male",
  "tduc.img",
  "tduc11@mail.com",
  "tduc",
  "admin",
  []
);

let staff2 = new normal(
  2,
  "tduc",
  "21/11/1998",
  "TH",
  "male",
  "tduc.img",
  "tduc11@mail.com",
  "tduc"
);

let staff3 = new normal(
  3,
  "tduc",
  "21/11/1998",
  "TH",
  "male",
  "tduc.img",
  "tduc11@mail.com",
  "tduc"
);

admin1.addAccount(staff1);
admin1.addAccount(staff2);
// admin1.modifyStaff(0, staff3);
// admin1.deleteStaff(1);

admin1.resetPass(staff1);

console.log(admin1);

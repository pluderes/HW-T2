class Employee {
    // attributes
    constructor(name, age, gender, address){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.address = address;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    get getGender(){
        return this.gender;
    }
    get getAddress(){
        return this.address;
    }
    set setName(newName){
        this.name = newName;
    }
    set setAge(newAge){
        this.age = newAge;
    }
    set setGender(newGender){
        this.gender = newGender;
    }
    set setAddress(newAddress){
        this.address = newAddress;
    }

    // method
    checkTimekeeping(){
        console.log("Đã được chấm công!");
    }
    checkWorkingDay(){
        console.log("Ngày đi làm!");
    }
}

export default Employee;
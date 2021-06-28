class doc {
  constructor(id, NXB, SBPH) {
    this.id = id;
    this.NXB = NXB;
    this.SBPH = SBPH;
  }
  get getID() {
    return this.id;
  }
  set setID(newID) {
    this.id = newID;
  }
  get getNXB() {
    return this.NXB;
  }
  set setNXB(newNXB) {
    this.NXB = newNXB;
  }
  get getSBPH() {
    return this.SBPH;
  }
  set setSBPH(newSBPH) {
    this.SBPH = newSBPH;
  }
}

export default doc
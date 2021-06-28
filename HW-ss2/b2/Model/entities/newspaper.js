import doc from "./doc.js";

class newspaper extends doc {
  constructor(id, NXB, SBPH, NgayPH) {
    super(id, NXB, SBPH);
    this.NgayPH = NgayPH;
  }
  get getNgayPH() {
    return this.NgayPH;
  }
  set setNgayPH(newNgayPH) {
    this.NgayPH = newNgayPH;
  }
}

export default newspaper;

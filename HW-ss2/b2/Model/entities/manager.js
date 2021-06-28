import book from "./book,js";
import magazine from "./magazine.js";

class manager {
  constructor(listbook, listmagazine, listnewspaper) {
    this.listbook = listbook;
    this.listmagazine = listmagazine;
    this.listnewspaper = listnewspaper;
  }

  // method
  /**
   * add new doc by type
   * @param {*} doc
   * @param {string} type
   */
  addByType(doc, type) {
    if (type === "book") {
      this.listbook.push(doc);
    } else if (type === "magazine") {
      this.listmagazine.push(doc);
    } else {
      this.listnewspaper.push(doc);
    }
  }
  /**
   * add new doc by InstanceOf
   * @param {*} doc
   */
  addByInstancedof(doc) {
    if (doc instanceof book) {
      this.listbook.push(doc);
    } else if (doc instanceof magazine) {
      this.listmagazine.push(doc);
    } else {
      this.listnewspaper.push(doc);
    }
  }

  deleteDoc(id, type){
      if(doc instanceof book){

      }
  }
}

export default manager;

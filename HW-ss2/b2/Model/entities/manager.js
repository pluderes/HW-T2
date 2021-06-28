import book from "./book.js";
import magazine from "./magazine.js";
import newspaper from "./newspaper.js";
import newspaperF from "./newspaper.js";

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
    if (type.toLowerCase() === "book") {
      this.listbook.push(doc);
    } else if (type.toLowerCase() === "magazine") {
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
    } else if (doc instanceof newspaper) {
      this.listnewspaper.push(doc);
    }
  }

  deleteDoc(id, type) {
    if (type.toLowerCase() === "book") {
      const result = this.listbook.filter((doc) => doc.id === id);
      const index = this.listbook.indexOf(result);
      this.listbook.splice(index, 1);
    } else if (type.toLowerCase() === "magazine") {
      const result = this.listmagazine.filter((doc) => doc.id === id);
      const index = this.listmagazine.indexOf(result);
      this.listbook.splice(index, 1);
    } else {
      const result = this.listnewspaper.filter((doc) => doc.id === id);
      const index = this.listnewspaper.indexOf(result);
      this.listbook.splice(index, 1);
    }
  }

  findDoc(id, type) {
    let result = "";
    if (type.toLowerCase() === "book") {
      result = this.listbook.find((doc) => doc.id === id);
    } else if (type.toLowerCase() === "magazine") {
      result = this.listmagazine.find((doc) => doc.id === id);
    } else {
      result = this.listnewspaper.find((doc) => doc.id === id);
    }
    console.log(result);
  }
}

export default manager;

import doc from "./Model/entities/doc.js";
import book from "./Model/entities/book.js";
import magazine from "./Model/entities/magazine.js";
import newspaper from "./Model/entities/newspaper.js";
import manager from "./Model/entities/manager.js";

const d1 = new doc("d1", "kimdong", 1000, "namcao", 123);
const b1 = new book("b1", "kimdong", 3000, "namcao2", 123);

const m1 = new magazine("m1", "hoctrocuoi", 2000, 2, 12);
const n1 = new newspaper("n1", "thanh nien", 2000, "20/3/2021");

const library = new manager([], [], []);

library.addByInstancedof(d1);
library.addByInstancedof(b1);
library.addByInstancedof(m1);
library.addByInstancedof(n1);

library.deleteDoc(b1, "book");

console.log(library);
console.log("---------------");
library.findDoc("b1", "book");
library.findDoc("m1", "magazine");
library.findDoc("n1", "newspaper");

import doc from "./doc";

class book extends doc {
    constructor(id, NXB, SBPH, tacgia, sotrang){
        super(id, NXB, SBPH);
        this.tacgia = tacgia;
        this.sotrang = sotrang;
    }
    get getTacgia(){
        return this.tacgia;
    }
    set setTacgia(newTacgia){
        this.tacgia = newTacgia;
    }
    get getSotrang(){
        return this.sotrang;
    }
    set setSotrang(newSotrang){
        this.sotrang = newSotrang;
    }
}

export default book
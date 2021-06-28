import doc from "./doc";

class magazine extends doc {
    constructor(id, NXB, SBPH, SoPH, ThangPH){
        super(id, NXB, SBPH);
        this.SoPH = SoPH;
        this.ThangPH = ThangPH;
    }
    get getSoPH(){
        return this.SoPH;
    }
    set setSoPH(newSoPH){
        this.SoPH = newSoPH;
    }
    get getThangPH(){
        return this.ThangPH;
    }
    set setThangPH(newThangPH){
        this.ThangPH = newThangPH;
    }
}

export default magazine
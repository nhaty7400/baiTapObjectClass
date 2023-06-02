function DanhSachNhanVien() {
    this.mangNV=[];

    this.themNhanVien=function (nv) {
        this.mangNV.push(nv);
    };

    this.timIndex = function (userName) {
        var indexFind = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.userName === userName) {
                //tìm thấy sv
                indexFind = index;
            }
        });
        return indexFind;
    };

    this.xoaNV = function (userName) {
        var index = this.timIndex(userName);
        if (index > -1) {
            this.mangNV.splice(index, 1);
        }

    };

}
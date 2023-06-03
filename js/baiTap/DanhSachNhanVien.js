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

    this.capNhat = function(nv){
        //tìm sv cần cập nhật
        var indexFind = this.timIndex(nv.userName);
        if (indexFind > -1) {
            //tìm thấy mới cập nhật  
            //sv: chứa thông tin mới
            //gán dữ liệu mới vào vị trí của sv cần cập nhật 
            dsnv.mangNV[indexFind] = nv;
            return true;//đã cập nhật
        }

    };

}

DanhSachNhanVien.prototype.timKiemtheoLoai = function(tuTim){
    var mangTK = [];

    var tuTimThuong = tuTim.toLowerCase();
    
    var tuTimReplace = tuTimThuong.replace(/\s/g,"");

    this.mangNV.map(function(nv,index){
        var loaiThuong =nv.rank.toLowerCase();
        var loaiReplace = loaiThuong.replace(/\s/g,"");

       
        var result =loaiReplace.indexOf(tuTimReplace);
        if(result>-1){
           
            mangTK.push(nv);
        }

    });
    return mangTK;
        
        
    


}
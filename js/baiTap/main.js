const dsnv = new DanhSachNhanVien();
const validation = new Validation();

//initialization
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
    // console.log(data);
}

function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
    console.log(dataLocal);
    if (dataLocal !== null) {
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }

}

getLocalStorage();

function themNhanVien() {
    // userName,name,email,password,date,basicSalary,position,hours

    var userName = document.getElementById("tknv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var date = document.getElementById("datepicker").value;
    var basicSalary = Number(document.getElementById("luongCB").value);
    var position = document.getElementById("chucvu").value;
    var hours = Number(document.getElementById("gioLam").value);

    var isValid = true;

    isValid &= validation.checkEmpty(userName, "tbTKNV", "Tài khoản không được để trống") && validation.checkID(userName, "tbTKNV", "Tài khoản không được trùng", dsnv.mangNV) && validation.checkUserName(userName, "tbTKNV", "Tài khoản không hợp lệ");
    isValid &= validation.checkEmpty(name, "tbTen", "Tên không được để trống") && validation.checkName(name, "tbTen", "Tên không hợp lệ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không hợp lệ");
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPassword(password, "tbMatKhau", "Mật khẩu không hợp lệ");
    isValid &= validation.checkEmpty(date, "tbNgay", "Ngày không được để trống");
    isValid &= validation.checkEmpty(basicSalary, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkBasicSalary(basicSalary, "tbLuongCB", "Lương cơ bản không hợp lệ");
    isValid &= validation.checkPosition(position, "tbChucVu", "Chức vụ không hợp lệ");
    isValid &= validation.checkEmpty(hours, "tbGiolam", "Số giờ làm không được để trống") && validation.checkHours(hours, "tbGiolam", "Số giờ làm không hợp lệ");

    if (isValid) {
        var nv = new NhanVien(userName, name, email, password, date, basicSalary, position, hours);
        nv.calcSalary();
        nv.ranking();

        dsnv.themNhanVien(nv);

        setLocalStorage();
        hienThiTable(dsnv.mangNV);
    }

}
document.getElementById("btnThemNV").onclick = themNhanVien;

function hienThiTable(mang) {
    var content = "";

    mang.map(function (nv, index) {
        var trNV = `<tr>;
        <td>${nv.userName}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.date}</td>
        <td>${nv.position}</td>
        <td>${nv.totalSalary}</td>
        <td>${nv.rank}</td>
        <td>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.userName}')">Xóa</button>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="xemThongTin('${nv.userName}')">Xem</button>
        </td>
    </tr>`;
        content += trNV;
    })
    // console.log(content);
    document.getElementById("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(userName) {
    dsnv.xoaNV(userName);
    hienThiTable(dsnv.mangNV);
    setLocalStorage();
}

function xemThongTin(userName) {
    var indexFind = dsnv.timIndex(userName);
    if (indexFind > -1) {

        var nvFind = dsnv.mangNV[indexFind];
        document.getElementById("tknv").value = nvFind.userName;
        document.getElementById("tknv").disabled = true;

        document.getElementById("name").value = nvFind.name;
        document.getElementById("email").value = nvFind.email;
        document.getElementById("password").value = nvFind.password;
        document.getElementById("datepicker").value = nvFind.date;
        document.getElementById("luongCB").value = nvFind.basicSalary;
        document.getElementById("chucvu").value = nvFind.position;
        document.getElementById("gioLam").value = nvFind.hours;
    }
}

function capNhatNV() {
    var userName = document.getElementById("tknv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var date = document.getElementById("datepicker").value;
    var basicSalary = Number(document.getElementById("luongCB").value);
    var position = document.getElementById("chucvu").value;
    var hours = Number(document.getElementById("gioLam").value);

    var isValid = true;

    isValid &= validation.checkEmpty(name, "tbTen", "Tên không được để trống") && validation.checkName(name, "tbTen", "Tên không hợp lệ");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không hợp lệ");
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPassword(password, "tbMatKhau", "Mật khẩu không hợp lệ");
    isValid &= validation.checkEmpty(date, "tbNgay", "Ngày không được để trống");
    isValid &= validation.checkEmpty(basicSalary, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkBasicSalary(basicSalary, "tbLuongCB", "Lương cơ bản không hợp lệ");
    isValid &= validation.checkPosition(position, "tbChucVu", "Chức vụ không hợp lệ");
    isValid &= validation.checkEmpty(hours, "tbGiolam", "Số giờ làm không được để trống") && validation.checkHours(hours, "tbGiolam", "Số giờ làm không hợp lệ");

    if (isValid) {
        var nv = new NhanVien(userName, name, email, password, date, basicSalary, position, hours);
        nv.calcSalary();
        nv.ranking();
        var result = dsnv.capNhat(nv);
        if (result) {
            //true
            setLocalStorage();
            hienThiTable(dsnv.mangNV);
            resetForm();
        } else {
            //false
            alert("Cập nhật thất bại");
        }
    }
}
document.getElementById("btnCapNhat").onclick=capNhatNV;

function resetForm() {
    document.querySelector("#myModal .modal-body form").reset();
}

document.getElementById("searchName").onkeyup= function(){
    var tuTim = document.getElementById("searchName").value;
    var mangTK = dsnv.timKiemtheoLoai(tuTim);
    hienThiTable(mangTK);
}
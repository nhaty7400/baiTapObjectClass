function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkID = function (value, spanID, message, mangNV) {
        var isExist = mangNV.some(function (nv, index) {
            
            return nv.userName === value;
        });

        if (isExist) {
            //! chưa hợp lệ
            
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        
        return true;
    }

    this.checkUserName = function (value, spanID, message) {
        var pattern = /^[a-z0-9]{4,6}$/;
        if (value.match(pattern)) {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

        //! chưa hợp lệ

        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;
    }

    this.checkName = function (value, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

        //! chưa hợp lệ

        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;
    }

    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

        //! chưa hợp lệ

        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;
    }

    this.checkPassword = function (value, spanID, message) {
        var pattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,10})/g;
        if (value.match(pattern)&&value.length>=6&&value.length<=10) {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

        //! chưa hợp lệ

        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;
    }

    this.checkBasicSalary = function name(value, spanID, message) {
        if (Number.isInteger(value) && value >= 1000000 && value <= 20000000) {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

        //! chưa hợp lệ

        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;
    }

    this.checkPosition = function (value, spanID, message) {
        if (value === "Sếp" || value === "Trưởng phòng" || value === "Nhân viên") {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

        //! chưa hợp lệ

        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;
    }

    this.checkHours = function (value, spanID, message) {
        if (value >= 80 && value <= 200) {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

        //! chưa hợp lệ

        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";

        return false;
    }
}

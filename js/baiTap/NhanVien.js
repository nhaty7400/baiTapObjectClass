function NhanVien(userName, name, email, password, date, basicSalary, position, hours) {
    this.userName = userName;
    this.name = name;
    this.email = email;
    this.password = password;
    this.date = date;
    this.basicSalary = basicSalary;
    this.position = position;
    this.hours = hours;
    this.totalSalary = 0;
    this.rank = "";

    this.calcSalary = function () {
        switch (this.position) {
            case "Sếp": {
                this.totalSalary = this.basicSalary * 3;
                break;
            }

            case "Trưởng phòng": {
                this.totalSalary = this.basicSalary * 2;
                break;
            }

            case "Nhân viên": {
                this.totalSalary = this.basicSalary;
                break;
            }

        }
    }

    this.ranking = function () {
        if (this.hours >= 192) {
            this.rank = "Nhân viên xuất sắc"
        } else if (this.hours >= 176 && this.hours < 192) {
            this.rank = "Nhân viên giỏi"
        } else if (this.hours >= 160 && this.hours < 176) {
            this.rank = "Nhân viên khá"
        } else {
            this.rank = "Nhân viên trung bình"
        }
    }
}
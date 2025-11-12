// BIẾN: lưu trữ số thứ nhất, số thứ hai và phép toán
var so1 = 0;
var so2 = 0;
var phepToan = "";
var dangNhapSoMoi = true;

// Hàm xử lý khi nhấn nút
function nhanNut(giaTri) {
    var manHinh = document.getElementById('display');

    // TOÁN TỬ: kiểm tra xem có phải là số hay phép toán
    if (giaTri >= '0' && giaTri <= '9') {
        // Đây là số
        if (dangNhapSoMoi) {
            manHinh.value = giaTri;
            dangNhapSoMoi = false;
        } else {
            manHinh.value = manHinh.value + giaTri;
        }
    } else {
        // Đây là phép toán (+, -, *, /)
        so1 = parseFloat(manHinh.value);
        phepToan = giaTri;
        dangNhapSoMoi = true;
    }
}

// Hàm tính toán kết quả
function tinhToan() {
    var manHinh = document.getElementById('display');
    so2 = parseFloat(manHinh.value);
    var ketQua = 0;

    // CÂU LỆNH ĐIỀU KIỆN: kiểm tra phép toán nào được chọn
    if (phepToan == '+') {
        ketQua = so1 + so2;
    } else if (phepToan == '-') {
        ketQua = so1 - so2;
    } else if (phepToan == '*') {
        ketQua = so1 * so2;
    } else if (phepToan == '/') {
        // Kiểm tra chia cho 0
        if (so2 == 0) {
            manHinh.value = "Error";
            return;
        }
        ketQua = so1 / so2;
    }

    manHinh.value = ketQua;
    dangNhapSoMoi = true;
}

// Hàm xóa màn hình
function xoaManHinh() {
    document.getElementById('display').value = "0";
    so1 = 0;
    so2 = 0;
    phepToan = "";
    dangNhapSoMoi = true;
}
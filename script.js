let soNgauNhien = Math.floor(Math.random() * 20) + 1;
function kiemTraDuDoan() {
    let duDoan = parseInt(document.getElementById('duDoanInput').value, 10);
        if (duDoan === soNgauNhien) {
        document.getElementById('thongBao').innerText = "Chúc mừng! Bạn đã đoán đúng.";
    } else if (duDoan > 0 && duDoan <= 10) {
        document.getElementById('thongBao').innerText = "Sai rồi. Hãy thử lại!";
    } else {
        document.getElementById('thongBao').innerText = "Vui lòng nhập số từ 1 đến 20.";
    }
}

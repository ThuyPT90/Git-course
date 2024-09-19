// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.
function openStore(hour) {
    if (hour <= 0 || hour > 24) {
        console.log("Giờ không hợp lệ");
    } else if (9 <= hour && hour <= 21) {
        console.log("Cửa hàng còn mở cửa");
    } else console.log("Đã đóng cửa. Cửa hàng mở lúc 9h AM đến 9h PM");
}
openStore(10);
openStore(24);
openStore(26);
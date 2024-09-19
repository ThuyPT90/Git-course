// Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì
function bmi(hight, weight) {
    let bmi = weight / (hight * hight);
    if (bmi < 18.5) {
        return " Thiếu Cân ";
    } else if (bmi < 25 && bmi >= 18.5) {
        return " Bình thường ";
    } else if (bmi < 30 && bmi >= 25) {
        return " Thừa cân ";
    } else {
        return " Béo Phì ";
    }
}
let result = bmi(1.58, 58);
console.log(result);


//  2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
// chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;  
function convertC(temperature, typeOfTemperature) {
    if (typeOfTemperature === 'C') {
        let f = temperature * 9 / 5 + 32;
        return f;
    } else {
        let c = (temperature - 32) * 5 / 9;
        console.log(`Nhiệt độ chuyển đổi từ F sang C là: ${c}`)
        // return c;
        return (temperature - 32) * 5 / 9;
    }
}
const convertC1 = convertC(32, 'C');
const convertC2 = convertC(64, 'F');
console.log(`Nhiệt độ chuyển là ${convertC1}`);

//3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.
let arr = [1, 4, 8, 3];
function sum(arr) {
    let s = 0;
    for (i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    console.log('gia tri tong ', s);
    return s;
}
sum(arr);
//5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
// người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail
const userInfo = [
    { "name": "ThuyPT", "email": "thuypt@gmail.com" },
    { "name": "ThuyPT2", "email": "thuypt2@gmail.com" },
    { "name": "ThuyPT3", "email": "thuypt3@gmail.com" },
]
function updateEmail(name, newEmail) {
    for (let i = 0; i < userInfo.length; i++) {
        if (userInfo[i].name === name) {
            userInfo[i].email = newEmail;
            console.log(`Email của user ${name} được update thành ${newEmail}`);
        }
    }
    console.log(`${name} không có trong danh sách`);
}
updateEmail("thuy", "thuy34@gmail.com");
updateEmail("ThuyPT3", "ThuyPT3@gmail.com");
console.log("Danh sách cập nhật", userInfo);
// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
const listUser = [
    { "name": "ThuyPT", "score": 17 },
    { "name": "A", "score": 15 },
    { "name": "B", "score": 16 },
]
// cách 1
function tBC(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].score;
    }
    console.log(`Tổng điểm của user trong danh sách là ${sum}`);
    console.log(`Trung bình cộng của user trong danh sách là ${sum / arr.length}`);
    return sum / arr.length
}
tBC(listUser);
// cách 2
function tBC(arr) {
    let sum = 0
    for (hs of arr) {
        sum = sum + hs.score;
    }
    console.log(`Tổng điểm của user trong danh sách là ${sum}`);
    console.log(`Trung bình cộng của user trong danh sách là ${sum / arr.length}`);
    return sum / arr.length
}
tBC(listUser);


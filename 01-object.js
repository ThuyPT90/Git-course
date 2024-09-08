//Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
//year=2021. Sau đó .
    let car = {
        make: "Toyota",
        model: "Corolla",
        year: 2021
    }
    //in ra năm sản xuất của xe
    console.log("1. Năm sản xuất của xe:", car.year);
//Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
//tính street, city, country). In ra tên đường của người này.
     let person = {
         name: "ThuyPT",
         address: {
             street: "Ngu Hiep",
             city: "Ha Noi",
             country: "Viet Nam"
         } 
     }
     //In ra tên đường của người này
     console.log("2. Tên đường của người này:", person.address.street);
//3.Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
//Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
//object với 2 thuộc tính kiểu number: math và english   
let student = {
    name: "ThuyPT",
    grades: {
        math: 8,
        english: 9
    }
}
//truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
console.log("3. Điểm môn toán:", student.grades["math"]);
//4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
let product = {
    'P1': 20,
    'P2': 30,
    'P3': 10
}
console.log("4. Giá các sản phẩm là: ")
for (let P in product) {
    let p1 = product[P];
    console.log(P + ": " + p1)
}
//5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
let settings = {
    'volume': 60,
    'brightness': 10
}
settings.volume = "80"
console.log("5. Volume hiện tại đang settings là " + settings.volume)
//6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {

}
console.log("6. Thuộc tính của bike:");
console.log("Trước khi thêm color: ") + console.log(bike);
bike.color = "Black";
console.log("Sau khi thêm color: ") + console.log(bike)
//7.Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
let employee = {
    'name': "ThuyPT",
    'age': 32
}
console.log("7. Thuộc tính của employee");
console.log("Trước khi xóa thuộc tính age ") + console.log(employee);
delete employee.age;
console.log("Sau khi xóa thuộc tính age ") + console.log(employee);

// 8. Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh
// Vd:
// const school = { classA: ["Giang"]...}
let school = {
    'classA': ["An", " Bình", " Châu"],
    'classB': ["Đào", " Hương", " Giang"]
};
console.log("8. Danh sách học sinh theo lớp:");
for (let c in school) {
    console.log(c + ": " + school[c]);
}


//  Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }
let product = [
    { "name": "p1", price: 67 },
    { "name": "p2", price: 77 },
    { "name": "p8", price: -10 },
    { "name": "p5", price: 53 },
    { "name": "p6", price: -10 },
]
// c1: thêm giá trị vào chuỗi nhược điểm phải xử lý if else cho dấu ,
//  function check(a) {
//     let listA = '';
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].price < 0) {
//             ds_am.name = a[i].name;
//             listA += a[i].name + ","
//             console.log(`Cách 1: tồn tại giá trị sản phẩm ${listA} tại vị trí ${i + 1} có giá trị âm `);
//             // return listA;// nếu gặp return thì sẽ thoát function luôn
//         }
//     } 
//     console.log(listA);
//     for (let c in ds_am) {
//         console.log(ds_am[c]);
//     }
// }
// check(product);
// c3: Thêm thuộc tính vào mảng
function check(a) {
    let danhSachAm  = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].price < 0) {
            danhSachAm.push(a[i].name) ;
            console.log(`Cách 1: tồn tại giá trị sản phẩm ${danhSachAm} tại vị trí ${i + 1} có giá trị âm `);
            // return listA;// nếu gặp return thì sẽ thoát function luôn
        }
    } 
    console.log(danhSachAm);
}
check(product);
// // c2
// function check2(a) {
//     let isAllGreatThan0 = true;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].price < 0) {
//             isAllGreatThan0 = false;
//         }
//     }
//     if (isAllGreatThan0 === false) {
//         console.log(`Cách 2: tồn tại giá trị sản phẩm ${a[i].name} tại vị trí ${i + 1} có giá trị âm `)
//     } else console.log(`Cách 2: Không có giá trị âm `)
// }
// check2(product)
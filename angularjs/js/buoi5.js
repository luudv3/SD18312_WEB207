// Khai báo 1 mảng dữ liệu nhân viên
// họ tên, ngày sinh, mức lương, giới tính (0 là nam, 1 là nữ)
// new Date : để lấy ngày, tháng năm

// Định nghĩa vùng sử dụng
let myApp = angular.module("myApp", []);

// khởi tạo controller
myApp.controller("demoController", function($scope){
$scope.nhanVien = [
    {
        ten: "Đặng Vũ Lưu",
        ngaySinh: new Date("2005-12-20"),
        mucLuong: 10000000,
        gioiTinh: 1
    },
    {
        ten: "Đặng Vũ Lưu 2",
        ngaySinh: new Date("1996-11-20"),
        mucLuong: 10000000,
        gioiTinh: 0
    },
    {
        ten: "Đặng Vũ Lưu 3",
        ngaySinh: new Date("1987-10-20"),
        mucLuong: 10000000,
        gioiTinh: 1
    }
]
$scope.number = 2;

// sự kiện click
// click vào nhân viên vào
// hiển thị thông báo
// xin chào + tên nhân viên

$scope.sayHello = function($name){
    alert("Xin chào " + $name)
}
});
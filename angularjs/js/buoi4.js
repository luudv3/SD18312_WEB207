// Khởi tạo module
// set vùng angular 

let myApp = angular.module("demo", []);
// 2 tham số : tên vùng và thành phần phụ thuộc

// Khởi tạo controller

myApp.controller("demoController", myFunction);
function myFunction($scope){
// tham số scope luôn luôn phải có để render dữ liệu ra view

// Khai báo biến
$scope.xinchao = "Hello cưng";
}

myApp.controller("infoController", function($scope){
    $scope.ten = "Đặng Vũ Lưu";
    $scope.namsinh = 2005;
    $scope.chuyennganh = "CNTT";

    // Khai báo mảng
    $scope.students = [
        {
            ten: "Đặng Vũ Lưu",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "Luudv3",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "Nguyễn Thị Thanh Hiền",
            namsinh: 2003,
            chuyennganh: "CNTT"
        },
        {
            ten: "Nguyễn Văn Huy",
            namsinh: 2003,
            chuyennganh: "CNTT"
        }
    ]
});
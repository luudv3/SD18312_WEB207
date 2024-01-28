window.GioithieuController = function($scope, $routeParams) {
    $scope.title = "Đây là trang giới thiệu";

    console.log($routeParams);
    $scope.student = [
       {
        ten: "Dăng Vũ Lưu",
        namsinh: 2002,
        chuyennganh: "CNTT",
       },
       {
        ten: "Dăng Vũ Lưu 2",
        namsinh: 2002,
        chuyennganh: "CNTT",
       }
    ]
    $scope.createStudent = function(){
        let newStudent = {
            ten: $scope.student.name,
            namsinh: $scope.student.year,
            chuyennganh: $scope.student.couse
        }
        $scope.student.push(newStudent)
    }
}
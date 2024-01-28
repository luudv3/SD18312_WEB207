window.AddStudentController = function($scope, $http, $location){
    $scope.title = "Thêm thông tin sinh viên";
    $scope.addStudent = function(){
        
        //link API
        const apiStudents = "http://localhost:3000/student";

        // Lấy dữ liệu từ input
        let newStudent = {
            ten: $scope.student.name,
            namsinh: $scope.student.year,
            chuyennganh: $scope.student.couse
        }
        //console.log(newStudent);

        $http.post(
            apiStudents,
            newStudent
        ).then(function (response){
            if (response.status == 201){
                $location.path("trang-chu");
            }
        })
    }
}
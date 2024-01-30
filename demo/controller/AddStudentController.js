window.AddStudentController = function($scope, $http, $location){
    $scope.title = "Thêm thông tin sinh viên";
    $scope.addStudent = function () {
        // Link API
        const apiStudents = 'http://localhost:3000/student';

        // Tạo 1 biến để kiểm tra
        let flag = true;
        // Kiểm tra từng trường dữ liệu
        $scope.kiemTra = {
            name: false,
            year: false,
            couse: false
        }
         // Kiểm tra dữ liệu
         if (!$scope.student || !$scope.student.name) {
            flag = false;
            $scope.kiemTra.name = true;
        }
        if (!$scope.student || !$scope.student.year) {
            flag = false;
            $scope.kiemTra.year = true;
        }
        if (!$scope.student || !$scope.student.couse) {
            flag = false;
            $scope.kiemTra.couse = true;
        }
        if (flag) {


            // Dữ liệu nhập từ input
            let newStudent = {
                ten: $scope.student.name,
                namsinh: $scope.student.year,
                chuyennganh: $scope.student.cause
            }
            //console.log(newStudent);
            $http.post(
                apiStudents,
                newStudent
            ).then(function (response){
                if (response.status = 201){
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin !")
        }

    }
}
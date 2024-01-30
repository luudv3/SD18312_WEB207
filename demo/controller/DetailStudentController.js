window.DetailStudentController = function($scope, $routeParams, $http){
    $scope.title = "Thông tin chi tiết sinh viên";

    // Lấy thông tin chi tiết
    let studentID = $routeParams.id;

    //Link API
    const apiStudents = 'http://localhost:3000/student';
    $http.get(
        `${apiStudents}/${studentID}`
    ).then(function(response){
        console.log(response.data);
        $scope.student = {
            editID: response.data.id,
            name: response.data.ten,
            year: response.data.namsinh,
            couse: response.data.chuyennganh
        }
    })
}
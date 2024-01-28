window.ListStudentController = function ($scope, $http){
    $scope.title = "Danh sách sinh viên";

    //call API
    const apiStudents = 'http://localhost:3000/student';
    function getData() {
       $http.get(apiStudents).then(function (response){
        if (response.status == 200){
            console.log(response.data);
            $scope.liststudent = response.data;
        }
       })
    }
    getData();

    // Delete
    $scope.deleteStudent = function(deleteID) {
        if(deleteID){
            let confirm = window.confirm("Bạn có chắc chắn muốn xóa không? ")
            if(confirm){
                $http.delete(
                    `${apiStudents}/${deleteID}`
                ).then(function (response){
                    if (response.status == 200 ){
                        alert ("xóa thành công");
                    }
                })
            }
        }
    }
}
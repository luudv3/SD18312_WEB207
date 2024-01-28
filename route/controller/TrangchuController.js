window.TrangchuController = function($scope){
    $scope.title = "Đây là trang chủ";

    $scope.themMoi = function(){
        // lấy toàn bộ dữ liệu
        console.log($scope.inputValue);

        // Lấy từng thuộc tính
        console.log($scope.inputValue.name);

        console.log($scope.inputValue.address);
    }

    $scope.tinhTong = function() {
        $scope.sum = parseFloat($scope.number.one) + parseFloat($scope.number.two)
    }
}
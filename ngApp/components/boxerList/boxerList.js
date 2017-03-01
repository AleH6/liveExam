var chThreeApp;
(function (chThreeApp) {
    var Components;
    (function (Components) {
        var name = 'boxerList';
        var template = '/ngApp/components/boxerList/boxerList.html';
        var BoxerList = (function () {
            function BoxerList($http) {
                var _this = this;
                $http.get("/api/boxer")
                    .then(function (result) {
                    _this.boxers = result.data;
                }).catch(function (e) {
                    console.log(e);
                });
            }
            return BoxerList;
        }());
        Components.BoxerList = BoxerList;
        BoxerList.$inject = ["$http"];
        angular.module('ch-three-app').component(name, {
            templateUrl: template,
            controller: chThreeApp.Components.BoxerList,
            controllerAs: 'vm'
        });
    })(Components = chThreeApp.Components || (chThreeApp.Components = {}));
})(chThreeApp || (chThreeApp = {}));

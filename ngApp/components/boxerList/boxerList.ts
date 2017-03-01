/// <reference types="angular" />
namespace chThreeApp.Components {

  const name = 'boxerList';
  const template = '/ngApp/components/boxerList/boxerList.html';

  export class BoxerList {
    public boxers;
    constructor($http:ng.IHttpService) {
      $http.get("/api/boxer")
        .then((result) => {
          this.boxers = result.data;
        }).catch((e) => {
            console.log(e);
        })
    }
  }
  BoxerList.$inject = ["$http"];

  angular.module('ch-three-app').component(name, {
    templateUrl: template,
    controller: chThreeApp.Components.BoxerList,
    controllerAs: 'vm'
  });
}

'use strict';

angular.module('database')
    // eslint-disable-next-line max-len
    .controller('PardalsCtrl', ['$scope', 'pardals', function PardalsCtrl($scope, pardals) {
      // this.orderProp = 'id';
      // $scope.propertyName = 'id';
      // $scope.reverse = true;
      //
      // $scope.sortBy = function(propertyName) {
      //   // eslint-disable-next-line max-len
      // eslint-disable-next-line max-len
      //   $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      //   $scope.propertyName = propertyName;
      // };
      //
      //
      // $scope.loading = false;
      // $scope.loadingdelete = null;
      // $scope.loadingupdate = null;
      // $scope.loadingTable = true;
      // $scope.msgErrorTable = false;
      // let updateValid = null;
      //
      // $scope.editing = null;
      // $scope.canviPardals = {
      //   nom: '',
      //   cognom: '',
      // };
      //
      // $scope.unselect = () => {
      //   $scope.editing = null;
      // };
      //
      //
      // $scope.initupdatealum = (pardals, param) => {
      //   $scope.editing = pardals.id + param;
      //   $scope.canviPardals.id = pardals.id;
      //   $scope.canviPardals.nom = pardals.nom;
      //   $scope.canviPardals.cognom = pardals.cognom;
      //   updateValid = pardals.id;
      // };
      //
      //
      // const resetform = function() {
      //   $scope.nouPardalsForm.$setPristine();
      //   $scope.nouPardalsForm.nom.$untouched = true;
      //   $scope.nouPardalsForm.nom.$touched = false;
      //   $scope.nouPardalsForm.cognom.$untouched = true;
      //   $scope.nouPardalsForm.cognom.$touched = false;
      // };


      pardals.get().then((response) => {
        $scope.pardals = response.data;
        console.log(response.data);
        $scope.loadingTable = false;
      }, (error) => {
        console.log(error);
        $scope.loadingTable = false;
        $scope.msgErrorTable = true;
      });
      //
      // $scope.postpardals = (isValid) => {
      //   if (isValid) {
      //     $scope.loading = true;
      //     const data = {
      //       nom: $scope.pardals.nom,
      //       cognom: $scope.pardals.cognom,
      //     };
      //     const config = {
      //       headers: {'Content-Type': 'application/json'},
      //     };
      //
      //     pardals.post(data, config).then(() => {
      //       $scope.msg = 'creat';
      //       pardals.get().then((response) => {
      //         $scope.pardals = response.data;
      //         console.log(response.data);
      //         ToastCreate();
      //       }, (error) => {
      //         console.log(error);
      //       });
      //       resetform();
      //       $scope.loading = false;
      //     }, (error) => {
      //       console.log(error);
      //     },
      //
      //     );
      //   };
      // };

      // const destroypardals = (pardals) => {
      //   $scope.loadingdelete = pardals.id;
      //   pardals.delete(pardals.id, $scope.canviPardals).then(
      //       () => {
      //         pardals.get().then((response) => {
      //           $scope.pardals = response.data;
      //           ToastDelete();
      //         }, (error) => {
      //           console.log(error);
      //         });
      //         $scope.loadingdelete = null;
      //       },
      //       (error) => {
      //         console.log(error);
      //       },
      //   );
      // };
      //
      // $scope.confirmDelete = (ev, pardals) => {
      //   const confirm = $mdDialog.confirm()
      // eslint-disable-next-line max-len
      //       .title('Estas segur que vols esborrar-lo? ID Pardals: ' + pardals.id)
      // eslint-disable-next-line max-len
      //       .textContent('L\'pardals que has seleccionat serà esborrat permanentment.')
      //       .ariaLabel('Esborrar pardals')
      //       .targetEvent(ev)
      //       .ok('Si')
      //       .cancel('Cancel');
      //
      //   $mdDialog.show(confirm).then(function() {
      //     destroypardals(pardals);
      //   }, function() {
      //     ToastConfirmDelete();
      //   });
      // };
      //
      //
      // $scope.updatepardals = (pardals) => {
      //   if (updateValid == pardals.id) {
      //     $scope.loadingupdate = pardals.id;
      //     pardals.update(pardals.id, $scope.canviPardals).then(
      //         (response) => {
      //           console.log(response);
      //           pardals.get().then((response) => {
      //             $scope.pardals = response.data;
      //             $scope.loadingupdate = null;
      //             $scope.editing = null;
      //             ToastUpdate();
      //           }, (error) => {
      //             console.log(error);
      //           });
      //         }, (error) => {
      //           console.log(error);
      //           $scope.loadingupdate = null;
      //         });
      //   } else {
      //     console.log('no has editat l pardals');
      //   }
      // };


      // TOAST
    //
    //   let last = {
    //     bottom: false,
    //     top: true,
    //     left: false,
    //     right: true,
    //   };
    //
    //   const toastPosition = angular.extend({}, last);
    //
    //   const getToastPosition = () => {
    //     sanitizePosition();
    //
    //     return Object.keys(toastPosition)
    //         .filter(function(pos) {
    //           return toastPosition[pos];
    //         }).join(' ');
    //   };
    //
    //   var sanitizePosition = () => {
    //     const current = toastPosition;
    //
    //     if (current.bottom && last.top) {
    //       current.top = false;
    //     }
    //     if (current.top && last.bottom) {
    //       current.bottom = false;
    //     }
    //     if (current.right && last.left) {
    //       current.left = false;
    //     }
    //     if (current.left && last.right) {
    //       current.right = false;
    //     }
    //
    //     last = angular.extend({}, current);
    //   };
    //
    //   var ToastCreate = function() {
    //     const pinTo = getToastPosition();
    //
    //     $mdToast.show(
    //         $mdToast.simple()
    //             .textContent('S\'ha creat l\'pardals!')
    //             .position(pinTo)
    //             .toastClass('md-error')
    //             .hideDelay(3000));
    //   };
    //
    //   var ToastDelete = function() {
    //     const pinTo = getToastPosition();
    //
    //     $mdToast.show(
    //         $mdToast.simple()
    //             .textContent('S\'ha esborrat l\'pardals!')
    //             .position(pinTo)
    //             .toastClass('md-error')
    //             .hideDelay(3000));
    //   };
    //
    //   var ToastConfirmDelete = function() {
    //     const pinTo = getToastPosition();
    //
    //     $mdToast.show(
    //         $mdToast.simple()
    //             .textContent('No has eliminat l\'pardals!')
    //             .position(pinTo)
    //             .toastClass('md-error')
    //             .hideDelay(3000));
    //   };
    //
    //   var ToastUpdate = function() {
    //     const pinTo = getToastPosition();
    //
    //     $mdToast.show(
    //         $mdToast.simple()
    //             .textContent('S\'ha actualitzat l\'pardals!')
    //             .position(pinTo)
    //             .toastClass('md-error')
    //             .hideDelay(3000));
    //   };
    },
    ]);

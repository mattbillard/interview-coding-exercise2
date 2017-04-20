'use strict';

var app = angular.module('app', []);


app.controller('namesCtrl', function ($scope, NamesService) {
    var vm = this;
    vm.toAdd = '';
    vm.NamesService = NamesService;

    vm.add = function(toAdd) {
        vm.NamesService.add(toAdd);
        vm.toAdd = '';
    }
});


app.service('NamesService', function ($http) {
    var self = this;
    var url = 'data/names.json';
    this.names = [];

    function init() {
        return $http({
            method: "GET",
            url: url
        }).then(function (response) {
            self.names = response.data;
        });
    }

    this.add = function(toAdd) {
        self.names.push(toAdd);
    }

    this.delete = function(id) {
        this.names.splice(id, 1);
    };

    init();
});


// app.directive('nameTag', function() {
//     return {
//         scope: {
//             id: '=',
//             name: '='
//         },
//         template: `
//             <div class="name-tag-top">
//                 <div class="name-tag-title">HELLO</div>
//                 <div>MY NAME IS</div>
//             </div>
//             <div class="name-tag-bottom">
//                 <h1>{{name}}</h1>
//                 <a ng-click="vm.delete(id);">Delete</a>
//             </div>
//         `,
//         controllerAs: 'vm',
//         controller: function (NamesService) {
//             this.delete = function (id) {
//                 NamesService.delete(id);
//             }
//         }
//     }
// });


app.component('nameTag', {
    bindings: {
        id: '=',
        name: '='
    },
    template: `
        <div class="name-tag-top">
            <div class="name-tag-title">HELLO</div>
            <div>MY NAME IS</div>
        </div>
        <div class="name-tag-bottom">
            <h1>{{$ctrl.name}}</h1>
            <a ng-click="$ctrl.delete($ctrl.id);">Delete</a>
        </div>
    `,
    controller: function (NamesService) {
        this.delete = function (id) {
            NamesService.delete(id);
        }
    }
});


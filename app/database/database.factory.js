'use strict';

angular.module('database')
    .factory('pardals', ($http) => {
      const actions = {
        get: () => {
          return $http.get('http://localhost:50438/api/pardalets');
        },
        post: (data, config) => {
          return $http.post('http://localhost:50438/api/pardalets', data, config);
        },
        update: (data, content) => {
          return $http.put('http://localhost:50438/api/pardalets/' + data, content);
        },
        delete: (data) => {
          return $http.delete('http://localhost:50438/api/pardalets/' + data);
        },
      };
      return actions;
    });

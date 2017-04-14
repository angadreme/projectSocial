namespace projectsocial.UserServices {

    export class UserService {
      private user;
      private USER_RESOURCE = this.$resource('/api/v1/user/:id');

      constructor(private $resource){}

      public getAll() {
        return this.USER_RESOURCE.query();
      }

      public get(id) {
        return this.USER_RESOURCE.get({id: id});
      }

      public add(user) {
        return this.USER_RESOURCE.save(user).$promise;
      }

      public update(user) {
        return this.USER_RESOURCE.save({id: user._id}, user).$promise;
      }

      public getOne(id) {
        return this.USER_RESOURCE.get({id: id});
      }

      public delete(id) {
        return this.USER_RESOURCE.delete({id: id}).$promise;
      }

    }
    angular.module('projectsocial').service('UserService', UserService);
    }

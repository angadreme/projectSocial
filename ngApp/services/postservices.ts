namespace projectsocial.PostServices {

    export class PostService {
      private Posts;
      private POST_RESOURCE = this.$resource('/api/v1/post/:id');

      constructor(private $resource){}

      public getAll() {
        return this.POST_RESOURCE.query();
      }

      public get(id) {
        return this.POST_RESOURCE.get({id: id});
      }

      public add(post) {
        return this.POST_RESOURCE.save(post).$promise;
      }

      public update(post) {
        return this.POST_RESOURCE.save({id: post._id}, post).$promise;
      }

      public getOne(id) {
        return this.POST_RESOURCE.get({id: id});
      }

      public delete(id) {
        return this.POST_RESOURCE.delete({id: id}).$promise;
      }

    }
    angular.module('projectsocial').service('PostService', PostService);
    }

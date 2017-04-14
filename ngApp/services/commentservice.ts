namespace projectsocial.CommentServices {

    export class CommentService {
      private Comment;
      private COMMENT_RESOURCE = this.$resource('/api/v1/comment/:id');

      constructor(private $resource){}

      public getAll() {
        return this.COMMENT_RESOURCE.query();
      }

      public get(id) {
        return this.COMMENT_RESOURCE.get({id: id});
      }

      public add(comment) {
        return this.COMMENT_RESOURCE.save(comment).$promise;
      }

      public update(comment) {
        return this.COMMENT_RESOURCE.save({id: comment._id}, comment).$promise;
      }

      public getOne(id) {
        return this.COMMENT_RESOURCE.get({id: id});
      }

      public delete(id) {
        return this.COMMENT_RESOURCE.delete({id: id}).$promise;
      }

    }
    angular.module('projectsocial').service('CommentService', CommentService);
    }

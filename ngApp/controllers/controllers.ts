namespace projectsocial.Controllers {

    export class HomeController {
      public posts;
      public comments;
      public newPost = {
        content: '',
        userID: ''
      };
      public newComment = {
        content: '',
        userID: '',
        postID: ''
      };

      constructor(private PostService, private commentservice) {
        this.posts.userID = '58eff7a60427f230b46368a3'
      }

      public addPost() {
        this.PostService.add({content: this.newPost.content, userID: this.newPost.userID})
        .then((data) => {
          this.posts.push(data);
        });
      }

      public addComment() {
        this.PostService.add({content: this.newComment.content, userID: this.newComment.userID, postID: this.newComment.postID})
        .then((data) => {
          this.posts.push(data);
        });
      }

    }


    export class AboutController {
        public users;
        public newUser = {
          username: ''
        };

        constructor(private UserService) {
          this.users = UserService.getAll();
        }

        public add(user) {
          this.UserService.add({username: this.newUser.username})
          .then((data) => {
            this.newUser.username = '';
            this.users.push(data);
          });
        }

        public delete(id) {
          this.UserService.delete(id)
            .then((data) => {
              this.users = this.UserService.getAll();
            });
        }

        public edit(id) {
          this.UserService.update(id)
            .then((data) => {
              this.users = this.UserService.getAll();
            });

        }

    }

}

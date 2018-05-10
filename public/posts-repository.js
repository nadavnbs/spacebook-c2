   import postApi from './api.js'
   
   /**
     * @class Responsible for storing and manipulating Spacebook posts, in-memory
     */
class PostsRepository {
    constructor() {
        this.posts = [];
        this.postApi = postApi
    }

    async initData(){
        console.log('shalom');
        let answer = await postApi.fetch()
        console.log(answer);
        this.posts = answer;
        return this.posts;
    }

    addPost(postText) {
        this.posts.push({ text: postText, comments: [] });
        $.ajax({
            method:"POST",
            url:'/posts',
            data:this.posts
        })
    }

    removePost(index) {
        this.posts.splice(index, 1);
    }
    
    addComment(newComment, postIndex) {
        this.posts[postIndex].comments.push(newComment);
    };

    deleteComment(postIndex, commentIndex) {
        this.posts[postIndex].comments.splice(commentIndex, 1);
      };
}

export default PostsRepository
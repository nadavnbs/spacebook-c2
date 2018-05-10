import PostsRepository from './posts-repository.js';
import PostsRenderer from './posts-renderer.js';
import EventsHandler from './events-handler.js';


let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

async function onload(){
    // console.log(data)
    let result = await postsRepository.initData()
    postsRenderer.renderPosts(result)
    console.log(postsRepository.posts) 
}
// postApi.fetch().then((data)=>{
//     postsRenderer.renderPosts(data)
// }).then((data)=>{
//     postsRepository.initData()
// })
onload()

eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();

export {postsRepository}
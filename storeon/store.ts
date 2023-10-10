import { createStoreon } from "storeon";
import { StoreonModule } from "storeon";
import { Post, Comment, State, PostWithComments } from "../types";

const fetchModule: StoreonModule<State> = (store) => {
  store.on("@init", () => ({
    posts: [],
    comments: [],
    post: undefined,
    currentPage: 1,
  }));

  store.on("fetch/posts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();
    store.dispatch("posts/fetched", posts);
  });

  store.on("posts/fetched", (state, posts) => ({ ...state, posts }));

  store.on("fetch/post", async (state, postId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post: Post = await response.json();

    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const comments: Comment[] = await commentsResponse.json();

    const postWithComments: PostWithComments = { ...post, comments };
    store.dispatch("post/fetched", postWithComments);
  });

  store.on("post/fetched", (state, post) => {
    const updatedPosts = state.posts.map((p) => (p.id === post.id ? post : p));
    return { ...state, posts: updatedPosts, post };
  });

  store.on("page/changed", (state, page) => ({ ...state, currentPage: page }));
};

export const store = createStoreon<State>([fetchModule]);

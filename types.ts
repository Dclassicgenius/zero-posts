export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface PostWithComments extends Post {
  comments: Comment[];
}

export interface State {
  posts: Post[];
  post: PostWithComments;
  currentPage: number;
}

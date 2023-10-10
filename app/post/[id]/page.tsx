import CommentCard from "@/components/comments/CommentCard";
import styles from "./CommentPage.module.scss";
import PostPage from "@/Pages/PostPage";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return <PostPage id={id} />;
};

export default page;

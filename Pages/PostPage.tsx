"use client";

import CommentCard from "@/components/comments/CommentCard";
import styles from "./Pages.module.scss";
import { useEffect } from "react";
import { State } from "@/types";
import { useStoreon } from "storeon/react";
import { signIn, useSession } from "next-auth/react";

const PostPage = ({ id }: { id: string }) => {
  const { data: session } = useSession();
  const { post, dispatch } = useStoreon<State>("post");

  useEffect(() => {
    if (id) {
      dispatch("fetch/post", id);
    }
  }, [id, dispatch]);

  if (!session) {
    signIn();
    return null;
  }

  if (!post) {
    return null;
  }

  return (
    <section className={styles.CommentPage}>
      <article className={styles.Post}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <hr />
      </article>

      <h3>Comments</h3>
      <div>
        {post.comments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default PostPage;

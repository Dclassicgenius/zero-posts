"use client";
import styles from "./Posts.module.scss";
import { motion } from "framer-motion";

type PostProps = {
  title: string;
  body: string;
};

const PostCard = ({ title, body }: PostProps) => {
  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.Post}
    >
      <h1>{title}</h1>
      <hr />
      <p>{body}</p>
    </motion.article>
  );
};

export default PostCard;

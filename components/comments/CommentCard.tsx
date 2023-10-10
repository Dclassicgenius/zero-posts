"use client";

import { motion } from "framer-motion";
import styles from "./Comments.module.scss";

type CommentProps = {
  name: string;
  email: string;
  body: string;
};

const CommentCard = ({ name, email, body }: CommentProps) => {
  return (
    <motion.article className={styles.Comment}>
      <h1 className={styles.Header}>{name}</h1>
      <span className={styles.Email}>@{email}</span>
      <p className={styles.Text}>{body}</p>
    </motion.article>
  );
};

export default CommentCard;

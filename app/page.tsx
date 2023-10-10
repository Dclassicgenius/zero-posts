"use client";
import PostCard from "@/components/posts/PostCard";
import styles from "./Page.module.scss";
import HomePage from "@/Pages/HomePage";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className={styles.Home}>
      <div>
        <h1 className={styles.Heading}>POSTS</h1>
        <div>
          <div>
            {session?.user ? (
              <div className={styles.UserLogin}>
                <p className={styles.Name}>
                  Welcome <span>{session.user?.name}!</span>
                </p>
                <button
                  onClick={() => signOut()}
                  className={styles.Logout}
                  type="button"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                className={styles.Login}
                onClick={() => signIn()}
                type="button"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.Grid}>
        <HomePage />
      </div>
    </main>
  );
}

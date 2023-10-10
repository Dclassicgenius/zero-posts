"use client";

import { useStoreon } from "storeon/react";
import PostCard from "../components/posts/PostCard";
import { State } from "@/types";
import { useEffect } from "react";
import Link from "next/link";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const { posts, dispatch, currentPage } = useStoreon<State>(
    "posts",
    "currentPage"
  );

  useEffect(() => {
    dispatch("fetch/posts");
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    dispatch("page/changed", page);
  };

  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  if (!posts) {
    return null;
  }

  return (
    <>
      {paginatedPosts.map((post) => (
        <Link
          key={post.id}
          href={`/post/${post.id}`}
          style={{ textDecoration: "none" }}
        >
          <PostCard title={post.title} body={post.body} />
        </Link>
      ))}

      <div className="d-flex justify-content-center">
        <Pagination>
          {Array.from([...Array(totalPages).keys()]).map((pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber + 1 === currentPage}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default HomePage;

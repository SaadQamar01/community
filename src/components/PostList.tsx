import React from "react";
import { PostCard } from "./PostCard";
import { usePosts } from "../context";

export const PostList: React.FC = () => {
  const {posts} = usePosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id + 2} post={post}  />
      ))}
    </div>
  );
};

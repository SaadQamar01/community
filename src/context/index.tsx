import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Post, Comment, mockPosts as initialPosts } from '../utils/mockData';

interface PostsContextProps {
  posts: Post[];
  addPost: (newPost: Post) => void;
  addComment: (postId: number, text: string) => void;
  addReply: (postId: number, parentId: number, replyText: string) => void;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const PostsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Function to add a new post
  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // Function to add a comment to a post
  const addComment = (postId: number, text: string) => {
    if (!text) return;

    const newComment: Comment = {
      id: Date.now(),
      user: "You",
      avatar: "https://i.pravatar.cc/40?img=4",
      timestamp: Date.now(),
      text,
      replies: [],
    };

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  // Function to add a reply to a comment
  const addReply = (postId: number, parentId: number, replyText: string) => {
    if (!replyText) return;

    const createReply = (text: string): Comment => ({
      id: Date.now(),
      user: "You",
      avatar: "https://i.pravatar.cc/40?img=5",
      timestamp: Date.now(),
      text,
      replies: [],
    });

    const addReplyRecursively = (comments: Comment[]): Comment[] =>
      comments.map((comment) =>
        comment.id === parentId
          ? { ...comment, replies: [...comment.replies, createReply(replyText)] }
          : { ...comment, replies: addReplyRecursively(comment.replies) }
      );

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: addReplyRecursively(post.comments) }
          : post
      )
    );
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, addComment, addReply }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = (): PostsContextProps => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

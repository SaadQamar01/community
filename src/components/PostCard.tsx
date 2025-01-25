import React, { useState } from "react";
import styles from "../styles/PostCard.module.scss";
import { PostProfileHeader } from "./PostProfileHeader";
import Comments from "./Comments";
import { Post } from "../utils/mockData";
import { MdOutlineInsertComment } from "react-icons/md";

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isComment, setIsComment] = useState(false);

  const handleToggleComment = () => {
    setIsComment((isComment) => !isComment);
  };

  return (
    <div className={styles.card}>
      <PostProfileHeader
        profileImage={post.avatar}
        name={post.name}
        isVerified={post.isVarified}
        timeAgo={post.timestamp}
      />

      <div className={styles.content}>
        <p className={styles.text}>{post.content}</p>
        {post.image && (
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={post.image}
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        )}
      </div>

      <div className={styles.comment}>
        <p onClick={handleToggleComment}>
          <MdOutlineInsertComment size={18} />
          {post.comments.length} Comments
        </p>
      </div>
      {isComment && <Comments postId={post.id} comments={post.comments} />}
    </div>
  );
};

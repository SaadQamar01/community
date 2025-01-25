import React, { useState } from "react";
import styles from "../styles/Comments.module.scss";
import CommentItem from "./CommentItem";
import Input from "./Input";
import Button from "./Button";
import { usePosts } from "../context";
import { Comment } from "../utils/mockData";

interface CommentsProps {
  postId: number;
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({postId, comments}) => {
  const [newComment, setNewComment] = useState("");

const {addComment, addReply} = usePosts()

  const handleAddComment = () => {
    if (!newComment.trim()) return; 
    addComment(postId, newComment);
      setNewComment("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  };

  return (
    <div className={styles.comments}>
      <div className={styles.newCommentBox}>
        <Input
          type="text"
          size="medium"
          value={newComment}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <Button onClick={() => handleAddComment()}>Add Comment</Button>
      </div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} addReply={(parentId, replyText) => addReply(postId, parentId, replyText)}
/>
        ))
      ) : (
        <p className={styles.noComments}>No comments</p>
      )}
    </div>
  );
};

export default Comments;

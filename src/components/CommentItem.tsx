import React, { useState } from "react";
import styles from "../styles/CommentItem.module.scss";
import Button from "./Button";
import Input from "./Input";
import { Comment } from "../utils/mockData";
import { formatTimestamp } from "../utils/helpers";

interface CommentItemProps {
  comment: Comment;
  addReply: (parentId: number, replyText: string) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, addReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (!replyText.trim()) return; 
    addReply(comment.id, replyText);
    setReplyText("");
    setShowReplyBox(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleReply();
    }
  };

  return (
    <div className={styles.commentItem}>
    <div className={styles.comment}>
      <img src={comment.avatar} alt={`${comment.user}'s avatar`} />
      <div className={styles.commentContent}>
        <div className={styles.commentHeader}>
          <span className={styles.user}>{comment.user}</span>
          <span className={styles.timestamp}>{formatTimestamp(comment.timestamp)}</span>
        </div>
        <p className={styles.text}>{comment.text}</p>
        <p
          className={styles.replyButton}
          onClick={() => setShowReplyBox(!showReplyBox)}
        >
          Reply
        </p>
      </div>
    </div>
  
    {showReplyBox && (
      <div className={styles.replyBox}>
        <Input
          type="text"
          size="small"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write a reply..."
        />
        <Button size="small" onClick={handleReply}>
          Reply
        </Button>
      </div>
    )}
  
    <div className={styles.replies}>
      {comment.replies.map((reply) => (
        <CommentItem key={reply.id} comment={reply} addReply={addReply} />
      ))}
    </div>
  </div>
  
  );
};

export default React.memo(CommentItem);

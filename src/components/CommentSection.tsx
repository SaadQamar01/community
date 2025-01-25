import React, { useState } from "react";
import { MdOutlineInsertComment, MdOutlineReply } from "react-icons/md";
import styles from "../styles/CommentSection.module.scss";
import Input from "./Input";
import Button from "./Button";
interface Reply {
  id: string;
  text: string;
}

interface Comment {
  id: string;
  text: string;
  replies: Reply[];
  avatar: string;
  name: string;
}

interface Post {
  id: string;
  comments: Comment[];
}

interface PostCardProps {
  posts: Post;
}

const CommentSection: React.FC<PostCardProps> = ({ posts }) => {
  const [isComment, setIsComment] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(posts.comments);
  const [isReply, setIsReply] = useState(false);

  const handleToggleComments = () => {
    setIsComment(!isComment);
  };
  const handleToggleReply = () => {
    setIsReply((prev) => !prev);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        text: newComment,
        replies: [],
        name: "Schemedtmann",
        avatar: "",
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleAddReply = (commentId: string, replyText: string) => {
    if (replyText.trim()) {
      const updatedComments = comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                { id: Date.now().toString(), text: replyText },
              ],
            }
          : comment
      );
      setComments(updatedComments);
    }
  };

  return (
    <div className={styles.commentSection}>
      <div className={styles.commentTitle} onClick={handleToggleComments}>
        <MdOutlineInsertComment size={18} />
        <p>20 Comments</p>
      </div>

      {isComment && (
        <div className={styles.commentsWrapper}>
          <ul className={styles.commentsList}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.commentItem}>
                <div className={styles.comment}>
                  <img src={comment.avatar} alt="User Avatar" />
                  <div className={styles.commentContent}>
                    <p className={styles.commentName}>{comment.name}</p>
                    <p className={styles.commentText}>{comment.text}</p>
                    <p
                      onClick={handleToggleReply}
                      className={styles.replyTrigger}
                    >
                      <MdOutlineReply size={16} />
                      <span>Reply</span>
                    </p>
                  </div>
                </div>

                {isReply && (
                  <div className={styles.replyForm}>
                    <Input
                      type="text"
                      placeholder="Write a reply..."
                      size="small"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddReply(
                            comment.id,
                            (e.target as HTMLInputElement).value
                          );
                          (e.target as HTMLInputElement).value = "";
                        }
                      }}
                    />
                    <Button size="small">Reply</Button>
                  </div>
                )}

                {comment.replies.length > 0 && (
                  <ul className={styles.replies}>
                    {comment.replies.map((reply) => (
                      <li key={reply.id} className={styles.replyItem}>
                        <div className={styles.replyContent}>
                          <p>{reply.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.commentForm}>
            <Input
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Write a comment..."
              required
            />
            <Button onClick={handleAddComment} size="medium">
              Post
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;

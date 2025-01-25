import React, { useState } from "react";
import styles from "../styles/CreatePost.module.scss";
import { FaRegImage } from "react-icons/fa";
import Button from "./Button";
import { usePosts } from "../context";

interface CreatePostProps {
  setIsPostModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatePost: React.FC<CreatePostProps> = ({ setIsPostModal }) => {
  const [postContent, setPostContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { addPost} = usePosts();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!postContent && !selectedFile) return;

    addPost({
      id: Date.now(),
      content: postContent,
      name: "You",
      isVarified: true,
      timestamp: Date.now(),
      avatar: "https://i.pravatar.cc/40?img=3",
      image: selectedFile ? URL.createObjectURL(selectedFile) : "",
      comments: [],
    })

    setPostContent("");
    setSelectedFile(null);
    setIsPostModal(false);
  };

  return (
    <div className={styles.createPost}>
      <textarea
        className={styles.textArea}
        placeholder="What's on your mind?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <div className={styles.fileUpload}>
        <label htmlFor="imageUpload" className={styles.fileLabel}>
          <FaRegImage className={styles.icon} />
          Add Image
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <p>{selectedFile ? selectedFile.name : ""}</p>
      </div>
      <div>
        <Button
          size="large"
          style={{ marginLeft: "auto" }}
          onClick={handleSubmit}
          disabled={!postContent && !selectedFile}
        >
          Add Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;

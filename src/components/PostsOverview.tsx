import React, { useState } from 'react';
import styles from '../styles/PostsOverview.module.scss';
import CreatePost from './CreatePost';
import Modal from './Modal';
import { FaRegImage } from 'react-icons/fa';
import { IoIosVideocam } from 'react-icons/io';
import { BiPlusCircle } from 'react-icons/bi';
import RecentPosts from './RecentPosts';
import { usePosts } from '../context';


const PostSlider: React.FC= () => {
  const [isPostModal, setIsPostModal] = useState(false);
  const {posts} = usePosts()

  const recentPosts = posts.slice(0,3)

  return (
    <div className={styles.postSlider}>

      <div className={styles.createPostBox} onClick={() => setIsPostModal(true)}>
        <p className={styles.createText}> <BiPlusCircle size={22} /> Create New Post </p>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <FaRegImage />
          </div>
          <div className={styles.icon}>
            <IoIosVideocam />
          </div>
        </div>
      </div>

      <RecentPosts recentPosts={recentPosts}/>

      <Modal
        title="Create Post"
        isOpen={isPostModal}
        onClose={() => setIsPostModal(false)}
      >
        <CreatePost setIsPostModal={setIsPostModal} />
      </Modal>
    </div>
  );
};

export default PostSlider;

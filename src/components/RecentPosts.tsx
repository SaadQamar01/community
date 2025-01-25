import React from 'react'
import styles from '../styles/RecentPosts.module.scss'
import { Post } from '../utils/mockData';

interface RecentPostsProps {
    recentPosts : Post[];
}

const RecentPosts:React.FC<RecentPostsProps> = ({recentPosts}) => {

  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className={styles.recentPosts}>
        <h2 className={styles.sectionTitle}>Recent Posts</h2>
        <div className={styles.postsContainer}>
          {recentPosts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
              <p className={styles.postContent}>{truncateText(post.content, post.image ? 50 : 200)}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default RecentPosts
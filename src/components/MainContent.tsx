import React from 'react'
import styles from '../styles/MainContent.module.scss'
import PostsOverview from './PostsOverview'
import { PostList } from './PostList'


const MainContent:React.FC = () => {

  return (
    <div className={styles.mainContent}>
        <PostsOverview />
        <PostList />
    </div>
  )
}

export default MainContent
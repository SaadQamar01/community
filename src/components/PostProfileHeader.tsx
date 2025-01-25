import React from "react";
import styles from "../styles/PostProfileHeader.module.scss";
import { TbDots } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { formatTimestamp } from "../utils/helpers";

interface PostProfileHeaderProps {
  profileImage: string;
  name: string;
  isVerified?: boolean;
  timeAgo: number;
}

export const PostProfileHeader: React.FC<PostProfileHeaderProps> = ({
  profileImage,
  name,
  isVerified = false,
  timeAgo,
}) => {

  console.log(formatTimestamp(timeAgo))
  return (
    <div className={styles.header}>
      <img src={profileImage} alt={`${name}'s profile`} className={styles.avatar} />
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{name}</span>
          {isVerified && <span className={styles.verified}><RiVerifiedBadgeFill /></span>}
        </div>
        <span className={styles.timeAgo}>{formatTimestamp(timeAgo)}</span>
      </div>
      <div className={styles.options}><TbDots />      </div>
    </div>
  );
};

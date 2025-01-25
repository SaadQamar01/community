export const formatTimestamp = (timestamp: number): string => {
  const now = Math.floor(Date.now() / 1000); // Convert current time to seconds
  const differenceInSeconds = now - timestamp;

  if (differenceInSeconds < 60) {
    return "Just now";
  }

  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} minute${differenceInMinutes > 1 ? "s" : ""} ago`;
  }

  const differenceInHours = Math.floor(differenceInMinutes / 60);
  if (differenceInHours < 24) {
    return `${differenceInHours} hour${differenceInHours > 1 ? "s" : ""} ago`;
  }

  const differenceInDays = Math.floor(differenceInHours / 24);
  if (differenceInDays === 1) {
    return "Yesterday";
  }
  if (differenceInDays < 7) {
    return `${differenceInDays} day${differenceInDays > 1 ? "s" : ""} ago`;
  }

  const differenceInWeeks = Math.floor(differenceInDays / 7);
  if (differenceInWeeks < 4) {
    return `${differenceInWeeks} week${differenceInWeeks > 1 ? "s" : ""} ago`;
  }

  const differenceInMonths = Math.floor(differenceInDays / 30);
  if (differenceInMonths < 12) {
    return `${differenceInMonths} month${differenceInMonths > 1 ? "s" : ""} ago`;
  }

  const differenceInYears = Math.floor(differenceInDays / 365);
  return `${differenceInYears} year${differenceInYears > 1 ? "s" : ""} ago`;
};

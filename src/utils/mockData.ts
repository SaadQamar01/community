export interface Reply {
  id: number;
  user: string;
  avatar: string;
  timestamp: number;
  text: string;
  replies: Reply[];
}

export interface Comment {
  id: number;
  user: string;
  avatar: string;
  timestamp: number;
  text: string;
  replies: Reply[];
}

export interface Post {
  id: number;
  name: string;
  isVarified: boolean;
  avatar: string;
  image: string;
  timestamp : number;
  content: string;
  comments: Comment[];
}


export const mockPosts: Post[] = [
  {
    id: 1,
    content:
      "Exploring the beauty of nature! 🌿✨ Just took a peaceful walk through the woods, and it was absolutely rejuvenating. Sometimes, we just need a moment to disconnect and appreciate the world around us. 🍃",
    name: "Michael Anderson",
    isVarified: true,
    timestamp: 1672531200, 
    avatar:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image:
      "https://images.pexels.com/photos/5728977/pexels-photo-5728977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    comments: [
      {
        id: 1,
        user: "Emma Stone",
        avatar: "https://i.pravatar.cc/40?img=6",
        timestamp: 1680288000, 
        text: "The scenery is stunning! Nature truly heals the sky. 🌟",
        replies: [
          {
            id: 2,
            user: "Michael Anderson",
            avatar:
              "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            timestamp: 1682899200,
            text: "Absolutely, Emma! We should plan a hike together soon. 😊",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    content:
      "💡 Productivity hack: Start your day by writing down your top 3 goals. It’s incredible how much you can accomplish with a little focus and clarity! What’s your morning routine? 🌅",
    name: "Liam Johnson",
    isVarified: false,
    timestamp: 1691020800, 
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    image: "",
    comments: [
      {
        id: 1,
        user: "Sophia Lee",
        avatar: "https://i.pravatar.cc/40?img=12",
        timestamp: 1693612800,
        text: "This is so helpful! My morning routine is a cup of coffee and journaling. ☕📝",
        replies: [
          {
            id: 2,
            user: "Liam Johnson",
            avatar:
              "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            timestamp: 1696204800, 
            text: "That sounds amazing, Sophia! Journaling is such a great way to start fresh. 💪",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "David Miller",
    isVarified: true,
    timestamp: 1701388800, 
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "✨ Had the best weekend getaway! Beaches, sunsets, and good vibes only. 🏖️🌅 Here's to more adventures! 🧳",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    comments: [
      {
        id: 1,
        user: "Ethan Brown",
        avatar: "https://i.pravatar.cc/40?img=10",
        timestamp: 1704067200, 
        text: "The beach looks great! Where was this? 🌊",
        replies: [
          {
            id: 2,
            user: "David Miller",
            avatar:
              "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            timestamp: 1706668800, 
            text: "Thanks, Ethan! It was in the Maldives. You should totally visit. 🌴",
            replies: [],
          },
        ],
      },
    ],
  },
];




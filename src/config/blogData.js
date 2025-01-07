import avatar from '../assets/avatar.png'
import avatar5 from '../assets/avatar5.png'
import avatar4 from '../assets/avatar4.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

const blogData = [
    {
      id: 1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Olivia Rhye",
        avatar: avatar, 
        date: "20 Jan 2024",
      },
      image: card1,
    },
    {
      id: 2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: {
        name: "Phoenix Baker",
        avatar: avatar4,
        date: "19 Jan 2024",
      },
      image:card2, 
    },
    {
      id: 3,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        avatar: avatar5, 
        date: "10 Jan 2024",
      },
      image: card3,
    },
  ];
  
  export default blogData;
  
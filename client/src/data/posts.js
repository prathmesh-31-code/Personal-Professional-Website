import achievementImg from "../images/post_images/Achievement.jpg";
import WorkshopCloudImage from "../images/post_images/workshop_cloud.jpg";
export const posts = [
  //First Post 
  {
    id: 1,
    title:
      "2nd Prize | B.Tech Final Year Capstone Poster Presentation Competition",
    content: `
🏆 Proud to share that our team secured the 2nd Prize at the B.Tech Capstone Project Poster Competition!

As the team leader, I had the opportunity to lead and present our capstone project “Airboard – A Gesture-Controlled Virtual Keyboard Interface” at MIT-WPU.
    This achievement was made possible through the dedicated efforts of my team members and the guidance of Prof. Sonali Potdar.

The competition provided an excellent platform to showcase our work and gain valuable feedback.
    `,
    date: "2025-12-01",
    readTime: "2 min read",
    image: achievementImg
  },
 // Second Post 
  {
    id: 2,
    title:
      "🚀 Attended: Cloud Computing & AWS Basics Workshop | AWS Cloud Club MIT-WPU ☁️",
    content: `
      I recently attended a hands-on Cloud Computing & AWS Basics workshop organized by AWS Cloud Club MIT-WPU, and it was a great learning experience.

The session provided practical insights into:
- Core cloud concepts — compute, storage, and databases
- Live deployment and hosting of a real application
- Cloud security fundamentals including identity and access control
- How systems achieve scalability, reliability, and high availability
- An introduction to AI & ML capabilities on the cloud, from speech generation to image understanding
- How these technologies come together in real-world startup and production environments

The workshop helped me better understand how modern digital products are built and scaled using AWS. Grateful to the AWS Cloud Club MIT-WPU team for organizing such an insightful session.

Looking forward to applying these learnings in future projects! 🚀

#AWS #CloudComputing #MITWPU #AWSCloudClub #LearningByDoing #TechWorkshop
    `,
    date: "2026-02-11",
    readTime: "4 min read",
    image: WorkshopCloudImage
  }
  
];

export default posts;

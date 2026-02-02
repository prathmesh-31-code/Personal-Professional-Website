import AirboardArticle from "../articles/AirBoard__A_Gesture_Controlled_Virtual_Keyboard_Interface.pdf"

export const projects = [
  {
    id: "cloud-storage",
    title: "Cloud Storage Service Using a Personal Desktop Computer",
    description:
      "Designed and implemented a personal cloud storage system using a desktop machine, enabling secure file access and sharing over a local network.",
    type: "Project",
    tags: ["Cloud Computing", "Networking", "Security"],
    links:{
      publication: "https://www.researchgate.net/publication/371675917_Cloud_Storage_Service_using_Personal_Desktop_Computer"
    } 
  },
  {
    id: "airboard",
    title: "Airboard — Gesture-Controlled Virtual Keyboard",
    description:
      "Developed a gesture-based virtual keyboard using computer vision techniques to enable touchless and real-time text input.",
    type: "Project",
    tags: ["Computer Vision", "HCI", "Python"],
    links:{
      project: "https://github.com/prathmesh-31-code/Airboard-A-Gesture-Based-Virtual-Keyboard",
      publication: AirboardArticle
    } 
  },
  {
    id: "ai-cloud-services",
    title: "Understanding the Basics of AI-Driven Cloud Services",
    description:
      "Research on the integration of AI and Cloud Computing, focusing on AI-as-a-Service models.",
    type: "Research",
    tags: ["AI", "Cloud", "Research"],
    links:{
      publication: "https://www.researchgate.net/publication/397118260_Understanding_the_Basics_of_AI_Driven_Cloud_Services"
    } 
  },
  {
    id: "nlp-to-sql",
    title: "Converting Human Text into Database Queries Using NLP",
    description:
      "Proposed a hybrid NLP approach using Logistic Regression and T5 models to convert natural language into database queries.",
    type: "Project",
    tags: ["NLP", "ML", "Databases"],
    links:{
      publication: ".pdf"
    } 
  }
];

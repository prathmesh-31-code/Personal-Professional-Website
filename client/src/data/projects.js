import AirboardArticle from "../articles/AirBoard__A_Gesture_Controlled_Virtual_Keyboard_Interface.pdf"
import AiboardPreview from "../images/project_images/Airboard.png"
import CloudPreview from "../images/project_images/Cloud-storage.png"
import AICloudPreview from "../images/project_images/AI-Cloud.png"
import NLPPreview from "../images/project_images/NLP.png"
export const projects = [
  {
    id: "cloud-storage",
    title: "Cloud Storage Service Using a Personal Desktop Computer",
    description:
      "Designed and implemented a personal cloud storage system using a desktop machine, enabling secure file access and sharing over a local network.",
    links:{
      article: "https://www.researchgate.net/publication/371675917_Cloud_Storage_Service_using_Personal_Desktop_Computer",
      github: "/"
    }, 
    image: CloudPreview,
  },
  {
    id: "airboard",
    title: "Airboard — Gesture-Controlled Virtual Keyboard",
    description:
      "Developed a gesture-based virtual keyboard using computer vision techniques to enable touchless and real-time text input.",
    links:{
      github: "https://github.com/prathmesh-31-code/Airboard-A-Gesture-Based-Virtual-Keyboard",
      article: AirboardArticle
    }, 
    image: AiboardPreview,
  },
  {
    id: "ai-cloud-services",
    title: "Understanding the Basics of AI-Driven Cloud Services",
    description:
      "Research on the integration of AI and Cloud Computing, focusing on AI-as-a-Service models.",
    links:{
      github:"/",
      article: "https://www.researchgate.net/publication/397118260_Understanding_the_Basics_of_AI_Driven_Cloud_Services"
    }, 
    image: AICloudPreview
  },
  {
    id: "nlp-to-sql",
    title: "Converting Human Text into Database Queries Using NLP",
    description:
      "Proposed a hybrid NLP approach using Logistic Regression and T5 models to convert natural language into database queries.",
    links:{
      github: "/",
      article: "https://ieeexplore.ieee.org/document/11156919"
    }, 
    image: NLPPreview
  }
];

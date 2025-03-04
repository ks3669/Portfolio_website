import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
//import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "System Admin - SW Technology Level 3",
    location: "Northern Arizona University",
    description:`
                • Deployed licensed and unlicensed applications across 1500+ devices using SCCM and Jamf, including student laptops and lab computers.
                • Developed scripts in PowerShell, Python, and Selenium to automate application installations, silent installation, and fetch the latest versions from the internet.
                • Automated repetitive tasks and server monitoring using Bash and Python scripts, improving efficiency and reducing manual workload by setting up CRON jobs to send alert emails.
                • Created multiple GUIs to assist the ITS Desktop Support team, making their tasks easier. In the process, gained experience with PyGui, Tkinter, and Pandas libraries in Python.
                • While predefining applications with required prerequisites, gained knowledge of configuration files, DLL files, and ISS files, which are crucial for application execution.`,
    icon: React.createElement(CgWorkAlt),
    date: "February 2024 - Present",
  },
  {
    title: "Research Assitant",
    location: "Northern Arizona University",
    description:`
                • Developed an uncertainty-aware response filtering system using PyTorch and Bayesian Neural Networks, enabling the LLM to recognize low-confidence responses and prevent hallucinated outputs.
                • Implemented an embedding similarity check with FAISS and cosine similarity in Python, comparing user queries against the knowledge base to detect out-of-distribution (OOD) inputs.
                • Designed a confidence-scoring mechanism by analyzing attention weights and probability distributions in the LLMs decoder, ensuring responses align with predefined Native American health datasets.
                • Integrated threshold-based rejection logic by leveraging softmax probability entropy and log-likelihood scoring, allowing the model to decline answers for unknown queries while guiding users to reliable sources.`,
    icon: React.createElement(CgWorkAlt),
    date: "December 2024 - January 2025",
  },
  {
    title: "Graduate Teaching Assistant",
    location: "Northern Arizona University",
    description:`
                • Teaching Assistant for CS249 - Data Structures course where I conducted office hours to assist students in understanding data structures and algorithms concepts, providing one-on-one and group support to clarify challenging topics.
                • Discovered and addressed gaps in personal knowledge while teaching, leading to a deeper understanding and refinement of expertise in data structures and algorithms.
                • Proposed and developed a prototype for detecting plagiarism by modeling students as nodes and their average similarity scores as weighted edges in a directed graph, using Python for visualization.`,
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - December 2024",
  },
  {
    title: "DevOps engineer & API developer",
    location: "TATA Consultancy Services",
    description: `
                • Microservices Deployment and Monitoring: My team and I deployed insurance-focused microservices on AWS ECS, utilizing CI/CD pipelines with Jenkins, Terraform, and AWS CodePipeline. We also implemented observability using AWS CloudWatch and Prometheus to monitor service performance and ensure reliability across environments.
                • API Development: I designed and tested RESTful APIs using AWS API Gateway, Lambda, and DynamoDB, implementing secure access with IAM roles and Cognito, optimizing insurance data workflows for scalability and performance.
                • Data Resiliency and Backup: Leveraged Amazon RDS with multi-AZ deployments for relational data and DynamoDB for NoSQL storage, ensuring scalability and fault tolerance. Automated backup and snapshot policies were implemented to meet disaster recovery and compliance requirements.
                • Key Learnings: I gained expertise in designing scalable, cloud-native solutions tailored for the insurance domain, focusing on automation, resilience, and secure data management while bridging traditional workflows with modern AWS services.`,
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - April 2023",
  },
  {
    title: "System Administrator",
    location: "TATA Consultancy Services",
    description:`
                • Backup Infrastructure Development: My team and I were responsible for creating a robust backup infrastructure for the client. We actively participated in customer calls to understand their requirements, which helped us design a comprehensive backup lifetime plan tailored for each category of data. Leveraging Veritas NetBackup software, we successfully set up the infrastructure to meet their needs.
                • Automation for Backup Admins: We developed scripts to automate repetitive tasks typically handled by a Backup Administrator, such as creating backup policies and monitoring the backup infrastructure. This not only streamlined operations but also significantly improved efficiency.
                • Server Migration and Management: Following the backup project, I joined the server team to work on migration projects. We supported them by creating and managing golden images, monitoring server loads, and performing stress testing to ensure system reliability and readiness.
                • Learning and Insights Gained: This experience taught me the value of customer interaction—how to process information from meetings and break it down into actionable tasks. Additionally, I gained in-depth knowledge of traditional infrastructure setups, which later gave me a unique perspective when transitioning to cloud services, as I could connect traditional methods to modern cloud-based solutions effectively.`,
    icon: React.createElement(CgWorkAlt),
    date: "November 2020 - March 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "This is a portfolio website to explain about me. I developed this project by making the coding as independant as possible to make it more scalable and easy to edit.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:typescript-icon",
      "logos:nextjs-icon",
      "logos:javascript",
      "logos:tailwindcss-icon",
      "logos:nodejs-icon",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/ks3669/portfolio-v2",
    demoLink: "https://www.karthiksekar.fyi/",
  },
  {
    title: "LMM malware detection",
    description:
      "A LLM model which uses LSTM to do Hybrid Malware Analysis. So basically we train the model with behaviours of a Malware app and the model will decide if the malware is benign or Malicious",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:python",
      "logos:pytorch",
      "logos:transformers",
      "logos:google-colaboratory",
    ],
    imageUrl: ozdevsImg,
    urlLink: "",
    githubLink: "https://github.com/ks3669/LMM-malware-detection",
  },
  {
    title: "DNA sequence fuzzymatching",
    description:
      "This code is used to perform sorting, searching and fuzzymatching in a 2billion long DNA sequence. Written using C++",
    tags: ["Java", "MariaDB", "Swing"],
    icons: ["logos:c-plusplus", "ph:tree-structure-light","akar-icons:network"],
    imageUrl: assetTradingImg,
    githubLink: "https://github.com/ks3669/DNA-sequence-fuzzymatching",
  },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  {
    title: "LLM response Filtering",
    description:
      "This Project will stop the model from halucinating for low confident responses by analysing the confidence level of the model for each response and then it will give out a response notifying the user that it does not know much about the query ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:pytorch", "akar-icons:network"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/ks3669/LLM-response-Filtering",
    urlLink: "",
  },
  {
    title: "Scipts I wrote to automate stuff and reduce my colleague's manual work.",
    description:
      "This section hosts the bunch of scripts that I wrote for apple and windows devices using Bash, Python, PyGUI to automate some of the manual processes in my workplace and personal to save a bit of time for folks and myself",
    tags: ["C#"],
    icons: ["fa-solid:terminal", "logos:apple", "logos:python" ],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/ks3669/Scripts",
  },
//  {
//    title: "Bash scipt to remove a User's admin access",
//    description:
//      "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
//    tags: ["Python"],
//    icons: ["logos:apple", "fa-solid:terminal"],
//    imageUrl: familyTreeImg,
//    githubLink: "https://github.com/ks3669/User-s-Admin-Access-Removal-Script",
//    demoLink: "",
//  },
] as const;

export const skillsData = [
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "C++",
    icon: "logos:c-plusplus",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "GraphQL",
    icon: "logos:graphql",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  {
    name: "Pytorch",
    icon: "logos:pytorch",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon:tailwindcss",
  },
  {
    name: "ExpressJS",
    icon: "logos:express",
  },
  {
    name: "DynamoDB",
    icon: "logos:aws-dynamodb",
  },
  {
    name: "VMware",
    icon: "logos:vmware",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Github",
    icon: "logos:github-icon",
  },
  {
    name: "Grafana",
    icon: "logos:grafana",
  },
  {
    name: "Postman",
    icon: "logos:postman-icon",
  },
  {
    name: "Selenium",
    icon: "logos:selenium",
  },
  {
    name: "Javascript",
    icon: "logos:javascript",
  },
  {
    name: "Server Migration",
    icon: "fa-solid:server",
  },
  {
    name: "JAMF",
    icon: "logos:apple",
  },
  {
    name: "Scripting",
    icon: "fa-solid:file-code",
  },
  {
    name: "Bash",
    icon: "fa-solid:terminal",
  },
  {
    name: "xcode",
    icon: "logos:xcode",
  },
] as const;

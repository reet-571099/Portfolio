import { useRef } from "react";
import ReactMarkdown from 'react-markdown';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI-Powered Meeting-to-Task Automation",
    img1: "/AudioJira.png",
    videoSrc: "273 - presentation.mov",
    githubLink: "https://github.com/reet-571099/Jira_Automation_using_GenAI",
    youtubeLink: "https://www.youtube.com/watch?v=kPCMRisP-bo",
    desc: `
• Developed an AI-driven automation pipeline using AWS Transcribe for audio-to-text conversion and OpenAI models for extracting action items with prompt engineering, reducing manual task creation by 80%.
• Built a serverless, event-driven architecture with AWS Lambda, triggering workflows upon audio uploads to AWS S3. Integrated message queues for real-time processing, ensuring scalability and reliability.
• Integrated the Jira API for automated task creation, improving task accuracy by 90%, and deployed the solution on Amazon ECS.
    `,
  },
  {
    id: 2,
    title: "Restaurant Finder ",
    img1: "/restaurant.png",
    youtubeLink: "https://youtu.be/DAR6MCLw0zQ",
    desc: `
• Yelp-like Restaurant Finder Application: Developed a platform for discovering and managing restaurants with features like search, reviews, and business management.
• Enhanced Search Functionality: Integrated a search API using the Google Maps API to allow users to find restaurants by Zip Code, delivering real-time results, even for locations not stored in the database.
• Business and Review Management: Implemented APIs for business owners to manage restaurant listings and a dynamic review system that updates restaurant ratings and review counts in real-time.
• Cloud-Based Deployment: Deployed backend services on AWS EC2, ensuring scalability, high availability, and seamless performance for all users and business owners.,
  `},
  {
    id: 3,
    title: "Defect Detection ",
    img1: "/defect2.jpg",
    img2: "/defect1.png",
    githubLink: "https://github.com/reet-571099/DefectDetection/tree/master/BtechP",
    desc: `
• Developed Deep Learning Solution: Built an end-to-end defect detection system using a CNN-based model and YOLO, achieving 98% accuracy in classifying defects (scratches, cracks, dents) across thousands of automotive parts.
• Real-time Detection & Analysis: YOLO integrated for precise defect identification and quantified defect presence, providing real-time defect location highlighting and percentage calculations with up to 95% precision in defect detection.
• Flask-based UI for Reporting: Designed a user-friendly Flask interface that enables users to visualize defect types, view highlighted regions, and generate downloadable reports, improving analysis efficiency by 60%.
    `
  },
  {
    id: 4,
    title: "Real-Time Risk Analysis Platform",
    desc: `
• Developed and deployed a dynamic web dashboard using Angular to visualize real-time financial data, enabling portfolio risk analysis and loss prediction with interactive charts and detailed analytics, reducing manual report generation time by 60%.
• Integrated GraphQL APIs for real-time UI updates, reducing data retrieval time by 40% and improving frontend efficiency by enabling targeted queries to fetch only necessary data.
• Built a real-time data processing pipeline using Apache Kafka on Google Cloud Platform (GCP) to handle high-volume financial data streams from Yahoo Finance, ensuring scalable, fault-tolerant data ingestion and supporting millions of financial records.,
• Deployed centralized logging and monitoring using the ELK stack, providing detailed insights on system performance and anomalies.,
  `},
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img1} />
            <img src={item.img2} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <ul>
              {item.desc.trim().split("\n").map((point, index) => (
                <li key={index}>{point.trim().replace("• ", "")}</li>
              ))}
            </ul>
            <div className="links">
  {item.githubLink && (
    <>
      <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <br />
    </>
  )}
  {item.youtubeLink && (
    <a href={item.youtubeLink} target="_blank" rel="noopener noreferrer">
      YouTube
    </a>
  )}
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

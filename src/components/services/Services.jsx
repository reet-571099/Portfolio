import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I bring 3 years of hands-on experience as a Java Developer 
          <br /> crafting scalable and efficient software solutions.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/citi.avif" alt="" className="infosys-image"/>
          <div className="title-content">
          <h1>
            <motion.b>Software Development Engineer - Technology Analyst 2</motion.b>
          </h1>

          <h4 className="year-range">
          <motion.b>Jul, 2021 - Jul, 2024</motion.b>
          </h4>
          </div>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
  
        >
          <p>
          Redesigned legacy monolithic modules into a cloud-native, scalable microservices architecture using Java Spring Boot, improving deployment speed
by 70%, scalability by 4X, and reducing infrastructure costs by 50% across 10+ services in a distributed environment.
          </p>
        </motion.div>
        <motion.div
          className="box"
          
        >
          <p>
          Integrated Spring Cloud tools for secure configuration management (Config), distributed tracing (Sleuth), and event-driven communication (Stream
            with Kafka), achieving 60% faster debugging, 50% quicker issue resolution, and 35% better operational consistency across environments.
          </p>
        </motion.div>
        <motion.div
          className="box"
          
        >
          <p>
          Achieved an 85% performance improvement by implementing parallel processing, optimizing SQL queries, and integrating asynchronous
messaging with Kafka, enabling real-time data handling. Recognized with the Gold Award for this optimization.
          </p>
        </motion.div>
        <motion.div
          className="box"
          
        >
          <p>
          Maintained and monitored application health with SonarQube, achieving 95% code coverage and a 40% reduction in critical vulnerabilities.
Enhanced CI/CD pipelines by improving code quality, security, and technical debt management, ensuring adherence to continuous integration
best practices.
          </p>
        </motion.div>
        <motion.div
          className="box"
          
        >
          <p>
          Developed and managed middleware applications to handle the complete lifecycle of millions of financial trades, including data ingestion from
downstream systems, real-time processing and optimized storage and delivery to upstream services via RESTful APIs, ensuring seamless data flow and
reducing processing time by 30%.
          </p>
        </motion.div>
        <motion.div
          className="box"
          
        >
          <p>
          Redesigned an automated testing framework using BDD with Cucumber and Gherkin syntax, modularizing a previously monolithic regression suite to
enable independent module testing and faster debugging. Optimized test execution with parallel processing, achieving a 5X speed improvement, 97%
report accuracy, and 50% faster issue resolution, earning a Silver Award for the enhancement.
          </p>
        </motion.div>
        <motion.div
          className="box"
          
        >
          <p>
          Led Agile practices as Scrum Master, driving sprint planning, daily stand-ups, and retrospectives, improving cross-team collaboration and achieving a
25% boost in sprint velocity while ensuring timely project deliveries.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

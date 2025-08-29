let externals = {};

externals.homeData = {
  header: "Hi there, I´m Pedro!",
  body: "I'm a software engineer and programming instructor with a 6-year track record at Code for All — a hybrid software house and programming school. During this time, I taught fullstack development both in person and remotely, led instructional teams, and helped hundreds of students break into tech. I also designed and maintained course curricula, created hands-on learning materials, and developed internal educational platforms to scale learning delivery.My background bridges education, software development, and product thinking. I specialize in software development, building educational tools, AI-integrated applications, and scalable fullstack platforms.",
};

externals.infoData = {
  gitHub: {
    text: "GitHub",
    link: "https://github.com/pedrosng",
  },
  linkedIn: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/pedronunesgoncalves/",
  },
  instagram: {
    text: "CV",
    link: "https://pedrosng.github.io/cv/",
  },
};

externals.contactData = "Say Hi";
externals.projectsData = [
  {
    name: "AI RAG App",
    description:
      "A fullstack application that integrates a RAG pipeline with tool-calling and agent capabilities. Built with Next.js, Node.js, Express.js, PostgreSQL, LangChain, and OpenAI.",
    role: "Sole Developer",
    link: "https://github.com/pedrosng/rag-app",
  },
  {
    name: "Code for All Programming School Bootcamp (Online && Presential)",
    description:
      "Fullstack programming bootcamp designed to equip beginners with the skills needed to launch a career in tech.",
    role: "Lead Instructor && Curriculum Designer",
    link: "https://codeforall.com/",
  },
  {
    name: "Code for All Educational Platforms",
    description:
      "A suite of educational platforms designed to streamline course management, student engagement, and learning delivery for Code for All.",
    role: "Developer",
    link: "",
  },
];

externals.skillsData = {
  developer: {
    skillTitle: "Developer",
    description: `
  <p>
    As a developer, I work comfortably across the Java and JavaScript ecosystems,
    building enterprise and web applications.
  </p>
  <ul>
    <li><strong>Java:</strong> Jakarta EE, Spring Boot (including AI and MVC), and Hibernate.</li>
    <li><strong>JavaScript/TypeScript:</strong> React, Node.js, Express.js, and Next.js.</li>
  </ul>
  <p>
    I focus on writing scalable, maintainable applications and enjoy working
    across both backend and frontend environments.
  </p>
`,
  },
  databases: {
    skillTitle: "Databases",
    description:
      "I am experienced in designing relational database schemas and writing optimized queries. I work primarily with PostgreSQL and MySQL, ensuring efficient data modeling, indexing, and integration with enterprise and web applications.",
  },
  educator: {
    skillTitle: "Teacher",
    description:
      "I deliver online and in-person full-stack programming courses, having created and refined complete curricula, hands-on projects, and assessments. With 2,000+ hours of coding instruction and mentorship provided to over 250 students, I have guided 100+ learners toward successful job placements. Beyond teaching, I have collaborated with development teams to build educational platforms and AI-driven tools that enhance learning experiences.",
  },
  aiEnthusiast: {
    skillTitle: "AI Enthusiast",
    description:
      "My AI journey began while designing the online AI module for a full-stack bootcamp. I specialize in working with Large Language Models (LLMs) through Retrieval-Augmented Generation (RAG) pipelines, vector databases, and tool-calling integrations with application databases. I’m passionate about exploring how AI can augment both education and software development.",
  },
};

export default externals;

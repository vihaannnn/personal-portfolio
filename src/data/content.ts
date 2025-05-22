// NOTE: You can split this file into multiple files if you want to, especially as you add more content.

export const personalInfo = {
  name: "Vihaan Nama",
  title: "AI Grad Student at Duke University | AI Intern at PS&S | Ex - SDE 1 at JPMorgan Chase & Co. | Ex - Samsung Prism Developer at Samsung India | Ex - Research Intern at NIT Trichi",
  imageUrl: "/profile.jpg",
  about: "I'm Vihaan Nama, a tech enthusiast turned AI aficionado, currently diving deep into the world of Artificial Intelligence at Duke University. I've spent my career making computers do my bidding—whether it’s building AI tools to save hundreds of hours, migrating systems, or even writing and conducting technical research—I'm all about finding smarter solutions. I’ve published several AI papers, but don’t worry, I won’t quiz you on them (unless you’re into that). Proficient in Python, Java, TensorFlow, and AWS, I'm your go-to person for all things AI, cloud, and maybe even a good joke. I’ve been awarded and acknowledged along the way, and I’m on a mission to innovate, automate, and occasionally, caffeinate.",
  contact: {
    email: "vihaan.nama@outlook.com",
    github: "https://github.com/vihaannnn",
    linkedin: "https://www.linkedin.com/in/vihaan-nama/",
    twitter: "https://twitter.com/",
  }
};

export const skills = [
  {
    name: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Transformers", "Computer Vision", "NLP"],
  },
  {
    name: "Programming",
    items: ["Python", "Java", "Javascript"],
  },
  {
    name: "Cloud, MLOps, and Big Data",
    items: ["AWS", "Azure ML", "Apache Airflow", "Kubernetes", "Apache Spark"],
  },
  {
    name: "Web Development",
    items: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    name: "Data Science",
    items: ["RAG", "LLMs", "Vector Databases", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Plotly"],
  },
  {
    name: "Tools",
    items: ["Git", "Linux", "VS Code", "PyCharm"],
  },
];

export const experience = [
  {
    title: "AI Specialist Intern",
    company: "PS&S",
    location: "Warren, New Jersey - Remote",
    period: "August 2024 - On Going",
    description: [
      "Developed an agentic FAQ AI system, which can automatically decide to obtain data one of multiple sources of information and provide accurate results based on the user's query.",
      "Designed a general AI chatbot using open-source AI models via Ollama, implementd built in conversation history, memory, automatic 'Chat-with-PDF', and various other functionalities."
    ],
  },
  {
    title: "Software Engineer Programmer - 1",
    company: "JPMorganChase & Co.",
    location: "Bengaluru, India - Onsite",
    period: "July 2023 - July 2024",
    description: [
      "Migrated particular big data reconciliation matching rules from another transaction matching engine to ours, which resulted in over $200k in annual savings for the team.",
      "Acted as a product owner for the Apache Airflow component of the team ensuring tasks ran in an automated systemized format at a particular mentioned time without manual intervention.",
      "Designed and developed various Java and Python modules that were integrated into the reconciliation system.",
      "Migrated Oracle SQL queries over to PostgreSQL, to allow for easier integration with AWS Aurora Database."
    ],
  },
  {
    title: "Software Engineer Programmer - Intern",
    company: "JPMorganChase & Co.",
    location: "Bengaluru, India - Onsite",
    period: "January 2023 - June 2023",
    description: [
      "Designed and developed various Java and Python modules that were integrated into the reconciliation system.",
      "Migrated Oracle SQL queries over to PostgreSQL, to allow for easier integration with AWS Aurora Database."
    ],
  },
  {
    title: "Research Intern",
    company: "National Institute of Technology, Tiruchirappalli - Remote",
    location: "Tiruchirappalli, India - Remote",
    period: "March 2022 - December 2022",
    description: [
      "Implemented 3 AI systems, one to recommend parts of SRS documents, one to recommend tags in videos and lastly one to recommend disaster tweet and documents.",
      "Integrated meta-heuristic optimization algorithms (Lightning Search, Lion’s Optimization) to aid in computing similarity.",
      "Developed a Prolog-Agent, classified features using AdaBoost, and used semantic similarity and indexes to rank classes.",
      "Achieved accuracy, precision, recall, and f-measure percentages over 95%.",
    ],
  },
  {
    title: "PRISM Intern",
    company: "Samsung Research Institute - Bangalore",
    location: "Bengaluru, India - Remote",
    period: "June 2021 - January 2022",
    description: [
      "Obtained a problem statement to implement an Utterance Recommendation System (URS) for Samsung Bixby.",
      "Developed a candidate generation framework for the URS and passed it on to a ranking system.",
      "Led to receiving Certificate of Excellence for achieving hit-ratio and NDCG of top 5 recommendations as 75% & 70% respectively.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Engineering in Artificial Intelligence for Product Innovation",
    school: "Duke University",
    location: "Durham, NC",
    period: "2024 - 2025",
    description: ["Grade: 4.0/4.0",
    "Summer 2025 : Operationalizing AI" ,
    "Spring 2025 : Large Language Models, Data Analysis at Scale in the Cloud, Deep Learning Applications, Management in High Tech Industries, Captstone Practicum",
    "Fall 2024 : Sourcing Data for Analytics, Modelling Process & Algorithms, Emerging Trends in XAI, Business Fundamentals For Engineers, AIPI Seminar, Career Design & Strategy"],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "RV College of Engineering",
    location: "Bangalore, India",
    period: "2019 - 2023",
    description: 
      ["Grade: 8.59/10"],
  },
]; 

export const projects = [
    {
      title: "Smart Law Annotator",
      description: "Designed a novel system - SmartLawAnnotator - A Machine Learning-based Annotation Recommendation and Judgment Prediction Tool for Criminal Bail Applications, which aligns with India’s e-Courts initiative. \n Implemented 6+ Machine Learning and a Bi-LSTM model to perform text classification for various (3) parameters of an un-annotated dataset, removing the need for manual annotation; obtained a 97% accuracy.",
      technologies: ["Bi-LSTM", "MLops", "Scikit-Learn", "Data Preprocessing"],
      internalLink: "",
      externalLink: "https://link.springer.com/chapter/10.1007/978-981-99-9518-9_30",
      image: "/projects/nlp/main.jpg",
    },
    {
      title: "Improviz",
      description: "Designed and developed a platform that converts lecture data to text and creates related interactive visualizations. Implemented complicated AI concepts such as embeddings, natural language processing, clustering, and prompt engineering for API calls to OpenAI’s GPT 4o-mini all within an interactive UI.",
      technologies: ["Embedding", "Clustering", "Web Development", "GPT API Call", "Voice - to - Text"],
      // internalLink: "/projects/drone-nav",
      internalLink: "https://github.com/notthattal/improviz",
      externalLink: "https://devpost.com/software/improviz?ref_content=my-projects-tab&ref_feature=my_projectsv",
      image: "/projects/drone/main.jpg",
    },


  ];

  export const publications = [
    {
      title: "SmartLawAnnotator: A Machine Learning-Based Annotation Recommendation for Judgment Prediction",
      authors: "Avadhut Shelar, Minal Moharir, Vihaan Nama, Jaikishan Jaikumar, Varadraj Patil, Akhil Edupuganti",
      externalLink: "https://link.springer.com/chapter/10.1007/978-981-99-9518-9_30",
      datePublished: "2023/9/21",
      book: "International Conference on Advances in Data-driven Computing and Intelligent Systems",
      publisher: "Springer Nature Singapore",
    },
    {
      title: "IDTCKS: An Intelligent Integrative Approach for Disaster Tweet Classification and Disaster-Related Document Classification Using Knowledge-Driven Hybrid Semantics",
      authors: "Vihaan Nama, Gerard Deepak",
      externalLink: "https://link.springer.com/chapter/10.1007/978-981-99-9518-9_310",
      datePublished: "2023/9/21",
      book: "International Conference on Advances in Data-driven Computing and Intelligent Systems",
      publisher: "Springer Nature Singapore",
    },
    {
      title: "DTagRecPLS: diversification of tag recommendation for videos using preferential learning and differential semantics",
      authors: "Vihaan Nama, Gerard Deepak",
      externalLink: "https://link.springer.com/chapter/10.1007/978-3-031-27524-1_87",
      datePublished: "2022/12/14",
      book: "International Conference on Soft Computing and Pattern Recognition",
      publisher: "Springer Nature Switzerland",
    },
    {
      title: "KCReqRec: a knowledge centric approach for semantically inclined requirement recommendation with micro requirement mapping using hybrid learning models",
      authors: "Vihaan Nama, Gerard Deepak, A Santhanavijayan",
      externalLink: "https://link.springer.com/chapter/10.1007/978-3-031-27440-4_2",
      datePublished: "2022/12/14",
      book: "International Conference on Soft Computing and Pattern Recognition",
      publisher: "Springer Nature Singapore",
    },
    {
      title: "A Comprehensive Review of Migration of Big Data Applications to Public Clouds: Current Requirements, Types, Strategies, and Case Studies",
      authors: "Vihaan Nama, H Vishalakshi Prabhu",
      externalLink: "https://link.springer.com/chapter/10.1007/978-981-97-0180-3_12",
      datePublished: "2022/10/15",
      book: "International Joint Conference on Advances in Computational Intelligence",
      publisher: "Springer Nature Singapore",
    },
    {
      title: "Sentiment analysis of movie reviews: A comparative study between the naive-bayes classifier and a rule-based approach",
      authors: "Vihaan Nama, Vinay Hegde, B Satish Babu",
      externalLink: "https://ieeexplore.ieee.org/abstract/document/9399610",
      datePublished: "2021/2/11",
      book: "2021 International Conference on Innovative Trends in Information Technology (ICITIIT)",
      publisher: "IEEE",
    },
    


  ];
  ;
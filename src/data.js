export const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export const careerFacts = [
  { value: '3+ years', label: 'Professional software engineering' },
  { value: 'Java & APIs', label: 'Primary backend focus' },
  { value: 'AI & ML', label: 'Applied data-driven solutions' },
  { value: 'AWS', label: 'Cloud deployment and operations' },
]

export const experience = [
  {
    company: 'Cedar Gate Technologies',
    role: 'Software Engineer',
    period: 'Feb 2022 - Feb 2025',
    location: 'Kathmandu, Nepal · US healthcare technology company',
    summary:
      'Worked across backend services, web applications, databases and cloud infrastructure in a production healthcare technology environment.',
    highlights: [
      'Designed and developed a reporting microservice with React, Node.js and MongoDB, bringing together data from Elasticsearch and Jira.',
      'Migrated MySQL from version 5 to 8 and improved slow queries and database data flows.',
      'Upgraded Vert.x from 3.3.2 to 4.5.10 across multiple services while managing dependencies and backward compatibility.',
      'Built Python and Bash automation for recurring operational tasks and supported release, testing and change-control work.',
      'Worked with AWS services including EC2, Lambda, API Gateway, S3, SQS, ECR and ECS.',
      'Delivered features and fixes across Node.js, RxJava, Vert.x and Grails services, with React and Angular on the frontend.',
    ],
    stack: ['Java', 'Vert.x', 'RxJava', 'Grails', 'Node.js', 'React', 'Angular', 'MySQL', 'MongoDB', 'Elasticsearch', 'AWS'],
  },
  {
    company: 'Leapfrog Technology',
    role: 'Software Engineer Intern',
    period: 'Dec 2021 - Jan 2022',
    location: 'Kathmandu, Nepal',
    summary:
      'Started in front-end development and prototyping, working from design through to responsive implementation.',
    highlights: [
      'Built responsive web interfaces using HTML, CSS and vanilla JavaScript.',
      'Created lo-fi prototypes in Figma and completed a browser-based Postman-style capstone using the Canvas API.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Canvas API'],
  },
]

export const projects = [
  {
    meta: 'Industry capstone · 2026',
    title: 'Asset Data Quality for Reliability Modelling',
    description:
      'Capstone work with SA Power Networks exploring how incomplete asset and failure data affects reliability modelling, with a focus on data quality, imputation and model evaluation.',
    details: [
      'Analysed missing and incomplete asset data',
      'Compared statistical and machine-learning imputation approaches',
      'Evaluated downstream probability-of-failure modelling',
    ],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Data quality', 'Reliability modelling'],
    image: 'images/capstone-architecture.png',
    imageAlt: 'Asset data quality and reliability modelling workflow',
    imageLabel: 'Capstone architecture or data-flow diagram',
    imageNote: 'Use a public-safe diagram showing data preparation, imputation and model evaluation. Do not include confidential SAPN data.',
    featured: true,
  },
  {
    meta: 'Advanced Topics in AI & Machine Learning · 2026',
    title: 'RAG System for Cybersecurity Guidelines',
    description:
      'Built a domain-specific retrieval-augmented generation system that produces phishing-defence guidance from a curated knowledge base and evaluates the quality of retrieval and generated answers.',
    details: [
      'all-mpnet-base-v2 embeddings with ChromaDB',
      'Mistral-7B-Instruct running locally through Ollama',
      'RAGAS evaluation for relevance and faithfulness',
    ],
    stack: ['Python', 'ChromaDB', 'Mistral-7B', 'Ollama', 'RAGAS'],
    image: 'images/rag-architecture.png',
    imageAlt: 'Retrieval-augmented generation system architecture',
    imageLabel: 'RAG system architecture',
    imageNote: 'Use a simple diagram: documents → chunking → embeddings → ChromaDB → retrieval → Mistral → RAGAS.',
  },
  {
    meta: 'Secure Programming · 2025',
    title: 'Secure Overlay Chat Protocol',
    description:
      'Developed a distributed messaging application across a three-server mesh with encrypted communication, cross-server routing, file transfer and failure recovery.',
    details: [
      'RSA-4096 for secure communication',
      'SHA-256 verification for transferred files',
      'Heartbeat-based connection management and server recovery',
    ],
    stack: ['Python', 'FastAPI', 'WebSockets', 'PyCryptodome', 'RSA-4096'],
    image: 'images/socp-architecture.png',
    imageAlt: 'Secure distributed chat system architecture',
    imageLabel: 'Distributed chat architecture',
    imageNote: 'Use a 3-server mesh diagram with connected clients and the main security boundaries.',
  },
  {
    meta: 'Artificial Intelligence · 2025',
    title: 'Flappy Bird DQN Agent',
    description:
      'Designed and trained a Deep Q-Network agent that completed all seven game difficulty levels, including an additional secret level beyond the assessed scope.',
    details: [
      'Experience replay and separate Q / target networks',
      'Custom eight-feature state representation',
      'Reward shaping and epsilon-greedy exploration',
    ],
    stack: ['Python', 'PyTorch', 'NumPy', 'Gymnasium', 'DQN'],
    image: 'images/dqn-flappy-bird.png',
    imageAlt: 'Flappy Bird DQN project gameplay and training visual',
    imageLabel: 'DQN gameplay and training result',
    imageNote: 'Use an actual gameplay screenshot. If available, pair it with a small training or reward curve.',
  },
  {
    meta: 'Event-Driven Computing · 2025',
    title: 'Adelaide Metro Petri Net Simulation',
    description:
      'Implemented a Java simulation of concurrent train movements through shared track sections, including collision prevention, deadlock detection and directional flow control.',
    details: [
      'Concurrent train scheduling',
      'Collision and deadlock prevention',
      'Correct arrival and exit handling',
    ],
    stack: ['Java', 'Petri Nets', 'Concurrency', 'Event-driven systems'],
    image: 'images/petri-net-adelaide.png',
    imageAlt: 'Adelaide Metro Petri Net simulation diagram',
    imageLabel: 'Petri Net or track topology diagram',
    imageNote: 'Use your actual Petri Net or a simplified track diagram rather than a stock train image.',
  },
]

export const skillGroups = [
  {
    title: 'Core engineering',
    skills: ['Java', 'REST APIs', 'Microservices', 'Vert.x', 'RxJava', 'Node.js', 'Python', 'Grails', 'Django'],
  },
  {
    title: 'Data & systems',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'DocumentDB', 'Elasticsearch', 'Query optimisation'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS EC2', 'Lambda', 'API Gateway', 'S3', 'SQS', 'ECR', 'ECS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'CI/CD'],
  },
  {
    title: 'Frontend & UX',
    skills: ['TypeScript', 'JavaScript', 'React', 'Angular', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'AI, ML & research',
    skills: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Transformers', 'RAG', 'ChromaDB', 'RAGAS', 'Ollama', 'Gymnasium'],
  },
]

export const certifications = [
  {
    title: 'Server-side Development with Node.js, Express and MongoDB - HKUST',
    url: 'https://www.coursera.org/account/accomplishments/verify/Q5T6W2CSNERZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    title: 'Single Page Web Applications with AngularJS - Johns Hopkins University',
    url: 'https://www.coursera.org/account/accomplishments/verify/KCTH22GH76Y3',
  },
  {
    title: 'Java for Android - Vanderbilt University',
    url: 'https://www.coursera.org/account/accomplishments/verify/A7Z7E6HVKXE5',
  },
  {
    title: 'Introduction to Data Science in Python - University of Michigan',
    url: 'https://www.coursera.org/account/accomplishments/verify/GTEWECCRBEZK',
  },
  {
    title: 'Digital Footprint - University of Edinburgh',
    url: 'https://www.coursera.org/account/accomplishments/verify/SKAZKJ6G49KU',
  },
]

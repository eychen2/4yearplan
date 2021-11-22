const Courses = [
    {
        code: "ENC 1101",
        name: "Expository and Argumentative Writing 3 Credits",
        credit: 3,
        description: "The principal elements of writing clearly, efficiently and effectively. ENC 1101 also focuses on writing logical arguments, building research skills and developing critical thinking through reading, writing and discussion. (C) (WR)",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "ENC 3246",
        name: "Professional Communication for Engineers",
        credit: 3,
        description: "Students master a variety of communication strategies and genres of writing relevant to engineering, such as composing email, memos, letters, technical descriptions, instructions, academic research reports and professional proposals. Students also respond to complex rhetorical situations, thus preparing for work in their professional communities. (C) (WR)",
        preReqs: ["ENC 1101"],
        yearReq: "-"
    },
    {
        code: "MAC 2311",
        name: "Analytic Geometry and Calculus 1",
        credit: 4,
        description: "Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus. (M) Credit will be given for, at most, one of MAC 2233, MAC 2311 and MAC 3472.",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "MAC 2312",
        name: "Analytic Geometry and Calculus 2",
        credit: 4,
        description: "Techniques of integration; applications of integration; differentiation and integration of inverse trigonometric, exponential and logarithmic functions; sequences and series. (M) Credit will be given for, at most, one of MAC 2312, MAC 2512 and MAC 3473.",
        preReqs: ["MAC 2311"],
        yearReq: "-"
    },
    {
        code: "MAC 2313",
        name: "Analytic Geometry and Calculus 3",
        credit: 4,
        description: "Solid analytic geometry, vectors, partial derivatives and multiple integrals. (M) Credit will be given for, at most, MAC 2313 or MAC 3474.",
        preReqs: ["MAC 2312"],
        yearReq: "-"
    },
    {
        code: "MAS 3114",
        name: "Computational Linear Algebra",
        credit: 3,
        description: "Linear equations, matrices and determinants. Vector spaces and linear transformations. Inner products and eigenvalues. Emphasizes computational aspects of linear algebra.",
        preReqs: ["MAC 2312"],
        yearReq: "-"
    },
    {
        code: "PHY 2020",
        name: "Introduction to Principles of Physics",
        credit: 3,
        description: "Fundamental principles of physics in mechanics, electricity and modern physics as applied to conservation laws. An in-depth analysis of selected topics with lecture demonstration, films and other teaching aids. (P). Can be fulfilled by high school physics",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "PHY 2048",
        name: "Physics with Calculus 1",
        credit: 3,
        description: "The first of a two-semester sequence of physics for scientists and engineers. The course covers Newtonian mechanics and includes motion, vectors, Newton's laws, work and conservation of energy, systems of particles, collisions, equilibrium, oscillations and waves. (P)",
        preReqs: ["PHY 2020", "MAC 2311"],
        yearReq: "-"
    },
    {
        code: "PHY 2048L",
        name: "Laboratory for Physics with Calculus 1",
        credit: 1,
        description: "Laboratory experience for PHY 2048 illustrating the practical applications of Newtonian mechanics. (P)",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "PHY 2049",
        name: "Physics with Calculus 2",
        credit: 3,
        description: "The second of a two-semester sequence of physics for scientists and engineers. Content includes Coulomb's law, electric fields and potentials, capacitance, currents and circuits, Ampere's law, Faraday's law, inductance, Maxwell's equations, electromagnetic waves, ray optics, interference and diffraction. (P)",
        preReqs: ["PHY 2048", "MAC 2312"],
        yearReq: "-"
    },
    {
        code: "PHY 2049L",
        name: "Laboratory for Physics with Calculus 2",
        credit: 1,
        description: "Laboratory experience for PHY 2049 illustrating the practical applications of Coulomb's law, electric fields and potentials, capacitance, currents and circuits, Ampere's law, Faraday's law, inductance, Maxwell's equations, electromagnetic waves, ray optics, interference and diffraction. (P)",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "STA 3032",
        name: "Engineering Statistics",
        credit: 3,
        description: "The basic concepts in probability and statistics with engineering applications. Topics include probability, discrete and continuous random variables, estimation, hypothesis testing, and linear and multiple regression. (M)",
        preReqs: ["MAC 2311"],
        yearReq: "-"
    },
    {
        code: "COP 3502C",
        name: "Programming Fundamentals 1",
        credit: 4,
        description: "First course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
        preReqs: ["MAC 2311"],
        yearReq: "-"
    },
    {
        code: "COP 3503C",
        name: "Programming Fundamentals 2",
        credit: 4,
        description: "Second course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
        preReqs: ["MAC 2311", "COP 3502C"],
        yearReq: "-"
    },
    {
        code: "COP 3530",
        name: "Data Structures and Algorithm",
        credit: 3,
        description: "Algorithm development using pseudo languages, basic program structures, program design techniques, storage and manipulation of basic data structures like arrays, stacks, queues, sorting and searching and string processing. Linked linear lists. Trees and multilinked structures. (M)",
        preReqs: ["MAC 2312", "COP 3503C", "COT 3100"],
        yearReq: "-"
    },
    {
        code: "COT 3100",
        name: "Applications of Discrete Structures",
        credit: 3,
        description: "Covers the mathematics of discrete events; i.e., events that involve distinct elements, finite structures of distinct elements or finite sampled versions of continuous phenomena (such as movement). (M)",
        preReqs: ["MAC 2311", "COP 3502C"],
        yearReq: "-"
    },
    {
        code: "CDA 3101",
        name: "Introduction to Computer Organization",
        credit: 3,
        description: "Organization of computing systems. Logical basis of computer structure. Machine representation of instructions and data, flow of control, and basic machine instructions. Assembly language programming. (M)",
        preReqs: ["MAC 2311", "COP 3503C", "COT 3100"],
        yearReq: "-"
    },
    {
        code: "CEN 3031",
        name: "Introduction to Software Engineering",
        credit: 3,
        description: "Topics include software planning, specifications, coding, testing and maintenance. Gain experience in the team approach to large system development. (M)",
        preReqs: ["COP 3530"],
        yearReq: "-"
    },
    {
        code: "COP 4600",
        name: "Operating Systems",
        credit: 3,
        description: "Design and implementation of various components of a modern operating system, including I/O programming, interrupt handling, process and resource management, computer networks and distributed systems. (M)",
        preReqs: ["COP 3530", "CDA 3101"],
        yearReq: "-"
    },
    {
        code: "CIS 4301",
        name: "Information and Database Systems 1",
        credit: 3,
        description: "First part of a two-course sequence that studies the essential concepts, principles and techniques of modern database systems. Topics include modeling and querying of data using conceptual data models as well as the development of a database application. (M)",
        preReqs: ["COP 3503C", "COT 3100"],
        yearReq: "-"
    },
    {
        code: "CIS 4914",
        name: "Senior Project",
        credit: 3,
        description: "Involves completing a significant CISE-related project. Coordinate with the instructor and a project advisor, prepare a detailed technical report and deliver an oral presentation. (M)",
        preReqs: [],
        yearReq: "senior CISE standing"
    },
    {
        code: "CNT 4007",
        name: "Computer Network Fundamentals",
        credit: 3,
        description: "Fundamental concepts, principles, and standards of computer networks. Introduces topics in top-down approach, starting with the application layer in the OSI system architecture with a stronger focus on application, transport, and network layers.",
        preReqs: ["COP 4600"],
        yearReq: "-"
    },
    {
        code: "COP 4020",
        name: "Programming Language Concepts",
        credit: 3,
        description: "Introduces programming language principles, including language constructs, design goals, run-time structures, implementation techniques and exposure to a wide variety of programming paradigms.",
        preReqs: ["COP 3530"],
        yearReq: "-"
    },
    {
        code: "COP 4533",
        name: "Algorithm Abstraction and Design",
        credit: 3,
        description: "Covers algorithmic concepts and their use rooted in practical application and computer science theory. Topics include algorithmic paradigms, limits of computing, and algorithm time complexity classes.",
        preReqs: ["COP 3530"],
        yearReq: "-"
    },
    {
        code: "EGS 4034",
        name: "Engineering Ethics and Professionalism",
        credit: 3,
        description: "Provides students with an interactive study of ethical theory and the development of professionalism. Students review case studies of ethical conflicts in engineering practice. Course covers engineering codes of ethics and requires students to resolve theoretical situations through application of ethical codes.",
        preReqs: [],
        yearReq: "junior level standing"
    },
    {
        code: "CAP 3027",
        name: "Introduction to Digital Arts and Sciences",
        credit: 3,
        description: "Synergy between art and computing through a programming-oriented exploration of fundamental concepts in multimedia.",
        preReqs: ["COP 3503C"],
        yearReq: "-"
    },
    {
        code: "ARH 2051",
        name: "Introduction to the Principles and History of Art 2",
        credit: 3,
        description: "Continuation of ARH 2050. Art and architecture from the Renaissance to the present. (H and N)",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "CHM 1025",
        name: "Introduction to Chemistry",
        credit: 2,
        description: "Introductory readiness course in general chemistry for those with weak yet satisfactory backgrounds in high school chemistry and algebra. (P). Can be replaced with a passing score on Chem placement",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "MAC 1147",
        name: "Introduction to Chemistry",
        credit: 4,
        description: "College algebra, functions, coordinate geometry, exponential and logarithmic functions, and trigonometry. Fast-paced review of algebra and trigonometry to prepare for calculus. Assumes prior knowledge of intermediate algebra (Algebra 2) and trigonometry. (M)",
        preReqs: [],
        yearReq: "-"
    },
    {
        code: "CHM 2049",
        name: "Chemistry for Engineers 1",
        credit: 3,
        description: "The first semester of the CHM 2095/CHM 2096 sequence. Topics include stoichiometry, energy and thermodynamics, atomic and molecular structure, the states of matter, reaction rates and introduces chemical equilibria. All topics are taught in an engineering case-study context. (P)",
        preReqs: ["CHM 1025", "MAC 1147"],
        yearReq: "-"
    },
    {
        code: "MAP 2302",
        name: "Elementary Differential Equations",
        credit: 3,
        description: "First-order ordinary differential equations, theory of linear ordinary differential equations, solution of linear ordinary differential equations with constant coefficients, the Laplace transform and its application to solving linear ordinary differential equations. (M)",
        preReqs: ["MAC 2312"],
        yearReq: "-"
    },
    {
        code:"CAP 3020",
        name:"Theory and Practice of Multimedia Production",
        credit: 3,
        description:"Combines the traditional media production pipeline and software engineering processes to synthesize an approach geared for the production of works incorporating both artistic and computational elements.",
        preReqs:["CAP 3027"],
        yearReq: "-"
    },
    {
        code:"CAP 3027",
        name:"Introduction to Digital Arts and Sciences",
        credit: 3,
        description:"Synergy between art and computing through a programming-oriented exploration of fundamental concepts in multimedia.",
        preReqs:["COP 3503"],
        yearReq: "-"
    },
    {
        code:"CAP 3032",
        name:"Interactive Modeling and Animation 1",
        credit: 3,
        description:"Introduces programming and data structures for interactive two-dimensional multimedia applications. Representing form and transforms in two dimensions, capturing user actions and driving application behavior interactively. Graphical interfaces, image processing, automata and basic artificial intelligence.",
        preReqs:["MAC 1447"],
        yearReq: "-"
    },
    {
        code:"CAP 3034",
        name:"Introduction to Computer-Aided Animation",
        credit: 3,
        description:"Introduces topics related to computer-aided animation. Rigging for forward and inverse kinematics. Skin weighting. Morph targets. Expression-driven animation, rigid-body and particle simulation.",
        preReqs:["MAC 1447"],
        yearReq: "-"
    },
    {
        code:"CAP 3220",
        name:"Introduction to Computer-Aided Modeling",
        credit: 3,
        description:"Introduces topics related to computer-aided modeling. Polygonal mesh, NURBS and subdivision surface meshes. Materials and shading networks. Lighting, shadows and rendering.",
        preReqs:["MAC 1447"],
        yearReq: "-"
    },
    {
        code:"CAP 4136",
        name:"Malware Reverse Engineering",
        credit: 3,
        description:"Introduction to the theory and practice of software reverse engineering applied to the analysis of malicious software (malware). Students will learn techniques of static and dynamic analysis to help identify the full spectrum of the behavior of code that is presented without documentation or source code and to identify possible remediation and avoidance techniques. The course will use a large number of software tools employed by malware and computer forensic analysts.",
        preReqs:["CDA 3101"],
        yearReq: "-"
    },
    {
        code:"CEN 4721",
        name:"Human-Computer Interaction",
        credit:3,
        description:"Studies the major topics in the study, planning and design of the interaction between people and computers. Topics include interface design (principles, theories and guidelines), virtual environments, interactive devices and collaboration.",
        preReqs:["COP 3530"],
        yearReq: "-"
    },
    {
        code:"CEN 4722",
        name:"User Experience Design",
        credit:3,
        description:"Introduces methods and tools used in User Experience Design (UXD): the early stages of software design focused on meeting user needs. Key concepts include user research, contextual design, design thinking, ideation, iterative design, prototyping, and design documentation. Projects utilize software tools used in the industry.",
        preReqs:["COP 3530"],
        yearReq: "-"
    },
    {
        code:"COT 4501",
        name:"Numerical Analysis: a Computational Approach",
        credit:3,
        description:"Numerical integration, nonlinear equations, linear and nonlinear systems of equations, differential equations and interpolation.",
        preReqs:["COP 3503","MAS 3114"],
        yearReq: "-"
    },
    {
        code:"CDA 4102",
        name:"Computer Architecture",
        credit:3,
        description:"Introduces computer architecture and system organization including virtual memory supports cache, pipeline, vector processing, multiprocessor and RISC architecture.",
        preReqs:["CDA 3101", "COP 3530"],
        yearReq: "-"
    },
    {
        code:"CEN 4072",
        name:"Software Testing and Verification",
        credit:3,
        description:"Concepts, principles and techniques of software testing and verification. Strengths and limitations of black-box and white-box testing methods; techniques for proving the correctness of programs.",
        preReqs:["CEN 3031"],
        yearReq: "-"
    },
    {
        code:"COP 4720",
        name:"Information and Database Systems 2",
        credit:3,
        description:"Part two of a two-course sequence. Provides a basic understanding of the internals of a modern database system. Topics include data storage, indexing, query processing and advanced concepts such as database tuning, alternate data models and emerging applications.",
        preReqs:["CIS 4301","COP 3530"],
        yearReq: "-"
    },
    {
        code:"CAP 4613",
        name:"Deep Learning for Computer Graphics",
        credit:3,
        description:"This undergraduate course covers deep learning basics, related math and the fundamental theory and application of AI algorithms most popular in the field of computer graphics. Programming assignments will help students develop GPU programming skills while implementing concepts learned in lectures and readings using deep learning APIs on a GPU cluster. Convolutional neural networks (CNNs) for colorizing black and white movies is an example.",
        preReqs:["COP 3530"],
        yearReq: "-"
    },
    {
        code:"CAP 4770",
        name:"Introduction to Data Science",
        credit:3,
        description:"Introduces the basics of data science including programming for data analytics, file management, relational databases, classification, clustering, and regression; lays the foundation for big data applications ranging from social networks to medical and business informatics.",
        preReqs:["COP 3530"],
        yearReq: "-"
    },
    {
        code:"CIS 4213",
        name:"Enterprise Security",
        credit:3,
        description:"Provides an introduction to the real-world aspects of defending an enterprise network. Students will gain hands-on experience performing system security tasks and handling incidents. The class begins with a basic introduction to enterprise cybersecurity, the attack sequence, and managing cybersecurity. Then lecture, homework and lab activities cover the center for internet security's twenty essential security controls.",
        preReqs:["COP 3530"],
        yearReq: "-"
    },
    {
        code:"CIS 4360",
        name:"Computer and Information Security",
        credit:3,
        description:"Covers systematic threat and risk assessment; programmed threats and controls in hardware, software, and human procedures; security policies, models, and mechanisms; theoretical limitations and practical implementations; certification and accreditation standards; and case study reviews. Includes projects.",
        preReqs:["COP 4600"],
        yearReq: "-"
    },
    {
        code:"CIS 4715",
        name:"CS Teaching & Learning",
        credit:3,
        description:"Covers basic pedagogy, especially as it relates to computer science and engineering, and covers three fundamental elements in education: learning environment, educational theory, and educational practice as approached to engineering-specific training.",
        preReqs:["COP 3502C"],
        yearReq: "-"
    }

];

module.exports=Courses;
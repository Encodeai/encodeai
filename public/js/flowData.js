
export const courseFlows = {
  mainMenu: {
    message: [
      'Welcome to ENCODE AI!',
      'We offer job-oriented tech courses with placement support.',
      'Please select a course to explore:'
    ],
    options: [
      'Python Programming',
      'Data Analytics',
      'Data Science',
      'JAVA Programming',
      'C / C++ Programming',
      'Generative AI',
      'DSA',
      'Java Full Stack',
      'MERN Stack',
      'Book Demo Class',
      'Talk to Counsellor'
    ]
  },

  /* =========================
      MERN FULL STACK FLOW
  ========================== */
  'MERN Stack': {
    message: [
      'Welcome to ENCODE AI!',
      'Learn MERN FULL STACK from Scratch and start your tech career for your Dream Software Job.',
      'Please choose an option:'
    ],
    options: [
      'Course Overview',
      'Who Can Join',
      'Syllabus',
      'Career Opportunities',
      'Placement Support',
      'Certificate',
      'Batch Timings',
      'Book Demo Classes',
      'Talk to Counsellor',
      'Back to Main Menu'
    ],

    subFlows: {
      /* ---------- COURSE OVERVIEW ---------- */
      'Course Overview': {
        message: [
          'The MERN Full Stack Development course trains students to build modern, dynamic, and scalable web applications using MongoDB, Express, React, and Node.js.',
          'Learners start from HTML, CSS, and JavaScript and progress to complete full-stack applications.',
          'Students gain hands-on experience across UI, backend APIs, databases, authentication, and cloud deployment.'
        ],
        options: [
          'Why Learn MERN FULL STACK',
          'Outcome of the Course',
          'Course Duration',
          'Batch Timings',
          'Certificate',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Why Learn MERN FULL STACK': {
        message: [
          'MERN is one of the most in-demand full-stack technologies.',
          'Build end-to-end applications using JavaScript for frontend & backend.',
          'High-paying roles, freelancing opportunities, startups & MNC jobs.',
          'Foundation for cloud deployment, APIs, and modern web apps.'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Outcome of the Course': {
        message: [
          'By the end of the course, learners can build and deploy full-stack web applications,',
          'work with Git-based projects, and confidently apply for MERN & Full Stack Developer roles.'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Course Duration': {
        message: [
          'Course duration depends on batch type and learning mode.',
          'Our counsellor will guide you with exact details.'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Batch Timings': {
        message: [
          'We offer flexible batch timings for:',
          '• College students',
          '• Pass-out graduates',
          '• Working professionals'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Certificate': {
        message: [
          'Yes! You will receive an ENCODE AI MERN FULL STACK DEVELOPER Certificate after course completion.'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- WHO CAN JOIN ---------- */
      'Who Can Join': {
        message: [
          'Anyone can learn MERN Full Stack:',
          '• School Students',
          '• College Students (Technical & Non-Technical)',
          '• Working Professionals',
          'No prior coding knowledge required.'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- SYLLABUS ---------- */
      'Syllabus': {
        message: [
          'MERN Full Stack Syllabus:',
          '1. HTML, CSS, JavaScript, Bootstrap, React.js',
          '2. Node.js, Express.js, Middleware, Server-side Logic',
          '3. MongoDB (CRUD, Indexing, Schema Design, Mongoose)',
          '4. REST APIs, Authentication, JWT, Error Handling',
          '5. Tools: Git/GitHub, Postman, VS Code, NPM, Cloud Deployment'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- CAREER ---------- */
      'Career Opportunities': {
        message: [
          'Career Options after MERN Full Stack:',
          '• Software Developer',
          '• Frontend Developer',
          '• Backend Developer',
          '• Website Developer'
        ],
        options: [
          'Placement Support',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Placement Support': {
        message: [
          'ENCODE AI Placement Support includes:',
          '• Resume Preparation',
          '• Profile / Portfolio Building',
          '• Mock Interviews',
          '• Placement Assistance'
        ],
        options: [
          'Book Demo Classes',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- LEADS ---------- */
      'Book Demo Classes': {
        leadType: 'Book Demo Class',
        message: [
          'Book a MERN FULL STACK Demo Class.',
          'Please share:',
          '1. Name',
          '2. Mobile Number',
          '3. City',
          '4. E-mail ID',
          'Our team will contact you shortly.'
        ]
      },

      'Talk to Counsellor': {
        leadType: 'Talk to Counsellor',
        message: [
          'Connect with our Counsellor.',
          'Please share:',
          '1. Name',
          '2. Mobile Number',
          '3. City',
          '4. E-mail ID',
          'Our team will contact you shortly.'
        ]
      }
    }
  },


  /* =========================
      PYTHON PROGRAMMING FLOW
  ========================== */
  'Python Programming': {
    message: [
      'Welcome to ENCODE AI!',
      'Learn Python Programming from Scratch and start your tech career.',
      'Please choose an option:'
    ],
    options: [
      'Course Overview',
      'Who Can Join',
      'Syllabus',
      'Career Opportunities',
      'Placement Support',
      'Certificate',
      'Batch Timings',
      'Book Demo Classes',
      'Talk to Counsellor',
      'Back to Main Menu'
    ],

    subFlows: {
      /* ---------- COURSE OVERVIEW ---------- */
      'Course Overview': {
        message: [
          'Python is one of the world’s most popular and beginner-friendly programming languages.',
          'This course builds strong programming fundamentals and real-world problem-solving skills.',
          'Ideal for beginners and career switchers.'
        ],
        options: [
          'Outcome of the Course',
          'Course Duration',
          'Batch Timings',
          'Certificate',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Outcome of the Course': {
        message: [
          'After completing the course, learners will:',
          '• Write clean & efficient Python code',
          '• Automate repetitive tasks',
          '• Build small applications',
          '• Prepare for Data Science, Web, AI & DSA'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Course Duration': {
        message: [
          'Course duration depends on batch type and learning mode.',
          'Our counsellor will guide you with exact details.'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Batch Timings': {
        message: [
          'We offer flexible batch timings for:',
          '• College Students',
          '• Pass-out Graduates',
          '• Working Professionals'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Certificate': {
        message: [
          'Yes! You will receive an ENCODE AI Python Programming Certificate after course completion.'
        ],
        options: [
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- WHO CAN JOIN ---------- */
      'Who Can Join': {
        message: [
          'Anyone can learn Python Programming:',
          '• School Students',
          '• College Students (Technical & Non-Technical)',
          '• Working Professionals',
          'No prior coding knowledge required.'
        ],
        options: [
          'Is Python good for beginners?',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Is Python good for beginners?': {
        message: [
          'Yes! Python is one of the easiest and most popular programming languages to start with.'
        ],
        options: [
          'Syllabus',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- SYLLABUS ---------- */
      'Syllabus': {
        message: [
          'Python Programming Syllabus:',
          '1. Python Basics',
          '2. Control Flow',
          '3. Functions',
          '4. Data Structures',
          '5. OOPs in Python',
          '6. File & Exception Handling',
          '7. Python Libraries',
          '8. Hands-on Projects'
        ],
        options: [
          'Python for Data Science & GEN AI',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Python for Data Science & GEN AI': {
        message: [
          'Yes! Python is the base language for:',
          '• Data Analytics',
          '• Data Science',
          '• Machine Learning',
          '• Generative AI'
        ],
        options: [
          'Career Opportunities',
          'Placement Support',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- CAREER ---------- */
      'Career Opportunities': {
        message: [
          'Career Options after Python:',
          '• Python Developer',
          '• Data Analyst (Entry Level)',
          '• Data Scientist',
          '• AI / ML Engineer',
          '• Full Stack Developer'
        ],
        options: [
          'Placement Support',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      'Placement Support': {
        message: [
          'ENCODE AI Placement Support includes:',
          '• Resume Preparation',
          '• Profile / Portfolio Building',
          '• Mock Interviews',
          '• Placement Assistance'
        ],
        options: [
          'Book Demo Classes',
          'Talk to Counsellor',
          'Back to Menu',
          'Back to Main Menu'
        ]
      },

      /* ---------- LEADS ---------- */
      'Book Demo Classes': {
        leadType: 'Book Demo Class',
        message: [
          'Book a Python Demo Class.',
          'Please share:',
          '1. Name',
          '2. Mobile Number',
          '3. City',
          '4. E-mail ID',
          'Our team will contact you shortly.'
        ]
      },

      'Talk to Counsellor': {
        leadType: 'Talk to Counsellor',
        message: [
          'Connect with our Counsellor.',
          'Please share:',
          '1. Name',
          '2. Mobile Number',
          '3. City',
          '4. E-mail ID',
          'Our team will contact you shortly.'
        ]
      }
    }
  },
  /* =========================
    JAVA PROGRAMMING FLOW
========================== */
'JAVA Programming': {
  message: [
    'Welcome to ENCODE AI!',
    'Learn JAVA Programming from Scratch and start your tech career.',
    'Please choose an option:'
  ],
  options: [
    'Course Overview',
    'Who Can Join',
    'Syllabus',
    'Career Opportunities',
    'Placement Support',
    'Certificate',
    'Batch Timings',
    'Book Demo Classes',
    'Talk to Counsellor',
    'Back to Main Menu'
  ],

  subFlows: {
    /* ---------- COURSE OVERVIEW ---------- */
    'Course Overview': {
      message: [
        'Java is one of the world’s most widely used and powerful programming languages.',
        'It is used in Android apps, web applications, enterprise systems, banking software, and cloud platforms.',
        'This course builds strong programming fundamentals, problem-solving skills, and hands-on experience.',
        'Java opens doors to multiple high-growth IT career paths.'
      ],
      options: [
        'Why Learn JAVA?',
        'Outcome of the Course',
        'Course Duration',
        'Batch Timings',
        'Certificate',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Why Learn JAVA?': {
      message: [
        'Why Learn JAVA?',
        '• Highly demanded in IT jobs',
        '• Backbone of Android development',
        '• Used by banks, MNCs & product companies',
        '• Strong foundation for Web & Spring Boot',
        '• Improves DSA & problem-solving skills'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Outcome of the Course': {
      message: [
        'After completing the program, learners will:',
        '• Understand Java basics and OOP concepts deeply',
        '• Build console-based real-time applications',
        '• Write reusable, clean and modular code',
        '• Be ready for Spring Boot, Android & Full Stack Java',
        '• Prepare for internships & company placements'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Course Duration': {
      message: [
        'Course duration depends on batch type and learning mode.',
        'Our counsellor will guide you with exact details.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Batch Timings': {
      message: [
        'We offer flexible batch timings for:',
        '• College Students',
        '• Pass-out Graduates',
        '• Working Professionals'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Certificate': {
      message: [
        'Yes! You will receive an ENCODE AI JAVA Programming Certificate after course completion.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- WHO CAN JOIN ---------- */
    'Who Can Join': {
      message: [
        'Anyone can learn JAVA Programming:',
        '• School Students',
        '• College Students (Technical & Non-Technical)',
        '• Working Professionals',
        'No prior coding knowledge is required.'
      ],
      options: [
        'Is JAVA good for beginners?',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Is JAVA good for beginners?': {
      message: [
        'Yes! JAVA is one of the most popular and beginner-friendly programming languages.'
      ],
      options: [
        'Syllabus',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- SYLLABUS ---------- */
    'Syllabus': {
      message: [
        'JAVA Programming Syllabus:',
        '1. JAVA Basics',
        '2. Syntax & Variables',
        '3. Data Types & Operators',
        '4. User Input & Expressions',
        '5. Control Flow',
        '6. Functions',
        '7. Variables & Loops',
        '8. Arrays & Strings',
        '9. Methods & Recursion',
        '10. Exception Handling',
        '11. Packages & Access Control',
        '12. ArrayList, LinkedList, HashMap, HashSet',
        '13. Collections Framework & Generics',
        '14. Sorting & Searching Techniques',
        '15. java.lang & java.util',
        '16. Date & Time API',
        '17. Utility Classes',
        '18. Multithreading',
        '19. Hands-on Projects'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- CAREER ---------- */
    'Career Opportunities': {
      message: [
        'Career Options after JAVA:',
        '• JAVA Developer',
        '• JAVA Full Stack Developer',
        '• Embedded Systems Engineer',
        '• Systems Programmer',
        '• Backend Developer',
        '• Game Developer',
        '• Performance / Optimization Engineer',
        '• Competitive Programmer',
        '• Open Source Contributor'
      ],
      options: [
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Placement Support': {
      message: [
        'ENCODE AI Placement Support includes:',
        '• Resume Preparation',
        '• Profile / Portfolio Building',
        '• Mock Interviews',
        '• Placement Assistance'
      ],
      options: [
        'Book Demo Classes',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- LEADS ---------- */
    'Book Demo Classes': {
      leadType: 'Book Demo Class',
      message: [
        'Book a JAVA Demo Class.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    },

    'Talk to Counsellor': {
      leadType: 'Talk to Counsellor',
      message: [
        'Connect with our Counsellor.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    }
  }
},
/* =========================
    JAVA FULL STACK FLOW
========================== */
'Java Full Stack': {
  message: [
    'Welcome to ENCODE AI!',
    'Learn JAVA FULL STACK from Scratch and start your tech career for your Dream Software Job.',
    'Please choose an option:'
  ],
  options: [
    'Course Overview',
    'Who Can Join',
    'Syllabus',
    'Career Opportunities',
    'Placement Support',
    'Certificate',
    'Batch Timings',
    'Book Demo Classes',
    'Talk to Counsellor',
    'Back to Main Menu'
  ],

  subFlows: {
    /* ---------- COURSE OVERVIEW ---------- */
    'Course Overview': {
      message: [
        'Java Full Stack Development is one of the most in-demand tech careers across global IT companies.',
        'This course transforms learners into job-ready full-stack developers.',
        'You will gain hands-on experience in frontend UI, backend logic, APIs, databases, and cloud deployment.'
      ],
      options: [
        'Why Learn JAVA FULL STACK',
        'What this Course Covers',
        'Outcome of the Course',
        'Course Duration',
        'Batch Timings',
        'Certificate',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Why Learn JAVA FULL STACK': {
      message: [
        'Java powers global applications across banking, e-commerce, and enterprise systems.',
        'As a Full Stack Developer, you build complete applications from frontend to backend.',
        'This role offers high-demand, high-salary career opportunities.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'What this Course Covers': {
      message: [
        'This course covers end-to-end Java Full Stack development:',
        '• Core Java & OOP concepts',
        '• Backend development using Spring & Spring Boot',
        '• REST APIs & authentication',
        '• Databases: MySQL, Hibernate, MongoDB',
        '• Frontend: HTML, CSS, JavaScript, React / Angular',
        '• Tools: Git, Postman & Cloud Deployment',
        '• Real-world projects'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Outcome of the Course': {
      message: [
        'By the end of the course, you will:',
        '• Build full-stack web applications from scratch',
        '• Work with Spring, Spring Boot & Hibernate',
        '• Develop REST APIs and integrate databases',
        '• Deploy applications and debug production issues',
        '• Be job-ready with real project portfolio'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Course Duration': {
      message: [
        'Course duration depends on batch type and learning mode.',
        'Our counsellor will guide you with exact details.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Batch Timings': {
      message: [
        'We offer flexible batch timings for:',
        '• College Students',
        '• Pass-out Graduates',
        '• Working Professionals'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Certificate': {
      message: [
        'Yes! You will receive an ENCODE AI JAVA FULL STACK DEVELOPER Certificate after course completion.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- WHO CAN JOIN ---------- */
    'Who Can Join': {
      message: [
        'Anyone can learn JAVA FULL STACK:',
        '• School Students',
        '• College Students (Technical & Non-Technical)',
        '• Working Professionals',
        'No prior coding knowledge is required.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- SYLLABUS ---------- */
    'Syllabus': {
      message: [
        'JAVA FULL STACK Syllabus:',
        '1. Basic Java Programming',
        '2. Core Java Programming',
        '3. Advanced Java Programming',
        '4. Frontend: HTML, CSS, JavaScript, Bootstrap',
        '5. Backend: Spring, Spring Boot, Hibernate',
        '6. Databases: MySQL, MongoDB',
        '7. Capstone Projects'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- CAREER ---------- */
    'Career Opportunities': {
      message: [
        'Career Options after JAVA FULL STACK:',
        '• Software Developer',
        '• System Design Engineer',
        '• Backend Developer',
        '• Competitive Programmer',
        '• Game Developer',
        '• Performance / Optimization Engineer'
      ],
      options: [
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Placement Support': {
      message: [
        'ENCODE AI Placement Support includes:',
        '• Resume Preparation',
        '• Profile / Portfolio Building',
        '• Mock Interviews',
        '• Placement Assistance'
      ],
      options: [
        'Book Demo Classes',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- LEADS ---------- */
    'Book Demo Classes': {
      leadType: 'Book Demo Class',
      message: [
        'Book a JAVA FULL STACK Demo Class.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    },

    'Talk to Counsellor': {
      leadType: 'Talk to Counsellor',
      message: [
        'Connect with our Counsellor.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    }
  }
},
/* =========================
    GENERATIVE AI FLOW
========================== */
'Generative AI': {
  message: [
    'Welcome to ENCODE AI!',
    'Want to learn the most in-demand Artificial Intelligence skill – Generative AI?',
    'I’ll help you understand the course.',
    'Please choose an option:'
  ],
  options: [
    'What is Generative AI',
    'Course Overview',
    'Why Learn Generative AI',
    'Who Can Learn Generative AI',
    'Syllabus',
    'Is Generative AI good for beginners?',
    'Benefits of Generative AI',
    'Career Opportunities',
    'Placement Support',
    'Certificate',
    'Batch Timings',
    'Book Demo Classes',
    'Talk to Counsellor',
    'Back to Main Menu'
  ],

  subFlows: {
    /* ---------- WHAT IS GEN AI ---------- */
    'What is Generative AI': {
      message: [
        'Generative AI is a branch of Artificial Intelligence that creates new content such as:',
        '• Text (ChatGPT-like models)',
        '• Images',
        '• Code',
        '• Videos & Audio',
        'It works using Large Language Models (LLMs) and Deep Learning.'
      ],
      options: [
        'Course Overview',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- COURSE OVERVIEW ---------- */
    'Course Overview': {
      message: [
        'Generative AI (GenAI) enables machines to create new content such as text, images, music, videos, and code.',
        'This course teaches you how to understand, build, and apply Generative AI systems.',
        'You will learn prompt engineering, AI tools, and foundational ML concepts.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- WHY LEARN ---------- */
    'Why Learn Generative AI': {
      message: [
        'Why Learn Generative AI?',
        '• One of the fastest-growing technologies in the world',
        '• Used in ChatGPT, AI image generators & code assistants',
        '• High demand across IT, startups, marketing & healthcare',
        '• Automates work and boosts productivity',
        '• Opens doors to high-paying future-ready jobs',
        '• Suitable for technical & non-technical roles',
        '• Enables freelancing & global opportunities'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- WHO CAN LEARN ---------- */
    'Who Can Learn Generative AI': {
      message: [
        'Anyone can learn Generative AI:',
        '• School Students',
        '• College Students (Technical & Non-Technical)',
        '• Working Professionals',
        'No prior coding knowledge or technical background required.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- SYLLABUS ---------- */
    'Syllabus': {
      message: [
        'Generative AI Course Syllabus:',
        '1. Python Programming Language',
        '2. Python Libraries',
        '3. OOPs in Python',
        '4. Advanced Python',
        '5. Machine Learning Basics',
        '6. Deep Learning Basics',
        '7. Core Machine Learning',
        '8. Advanced Deep Learning',
        '9. Generative Adversarial Networks (GANs)',
        '10. Text Generation & Language Models',
        '11. Multimodal Generative AI',
        '12. Fine-Tuning & Custom LLMs',
        '13. Agents, Tools & RAG',
        '14. Capstone Projects'
      ],
      options: [
        'Course Duration',
        'Certificate',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Course Duration': {
      message: [
        'Course duration depends on batch type and learning mode.',
        'Our counsellor will guide you with exact details.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Certificate': {
      message: [
        'Yes! You will receive an ENCODE AI Generative AI Course Certificate after completion.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- BEGINNERS ---------- */
    'Is Generative AI good for beginners?': {
      message: [
        'Yes! Generative AI is beginner-friendly.',
        '• Starts from basic concepts',
        '• Step-by-step learning approach',
        '• Covers Python, ML & Deep Learning',
        '• Learn GANs, LLMs & Multimodal AI',
        '• Simple explanations with real-life examples',
        '• Hands-on practice with real projects'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- BENEFITS ---------- */
    'Benefits of Generative AI': {
      message: [
        'Benefits of Generative AI Course:',
        '• Future-proof and high-demand skill',
        '• Work with tools like ChatGPT & AI image generators',
        '• Automate tasks and improve productivity',
        '• Boost creativity and problem-solving',
        '• Suitable for students & professionals',
        '• Enables freelancing and remote jobs',
        '• Strong advantage in AI-driven job market'
      ],
      options: [
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- CAREER ---------- */
    'Career Opportunities': {
      message: [
        'Career Opportunities after Generative AI:',
        '• Generative AI Engineer',
        '• AI / ML Engineer',
        '• Data Scientist',
        '• Prompt Engineer',
        '• AI Product Developer',
        '• Automation & AI Consultant'
      ],
      options: [
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Placement Support': {
      message: [
        'ENCODE AI Placement Support includes:',
        '• Resume Preparation',
        '• Profile / Portfolio Building',
        '• Mock Interviews',
        '• Placement Assistance'
      ],
      options: [
        'Book Demo Classes',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- BATCH ---------- */
    'Batch Timings': {
      message: [
        'We offer flexible batch timings for:',
        '• College Students',
        '• Pass-out Graduates',
        '• Working Professionals'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- LEADS ---------- */
    'Book Demo Classes': {
      leadType: 'Book Demo Class',
      message: [
        'Book a Generative AI Demo Class.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    },

    'Talk to Counsellor': {
      leadType: 'Talk to Counsellor',
      message: [
        'Connect with our Counsellor.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    }
  }
},
/* =========================
   DATA STRUCTURE & ALGORITHM FLOW
========================== */
'Data Structure & Algorithm': {
  message: [
    'Welcome to ENCODE AI!',
    'Learn Data Structures & Algorithms from Scratch and start your tech career for Your Dream Software Job.',
    'Please choose an option:'
  ],
  options: [
    'Course Overview',
    'Who Can Join',
    'Syllabus',
    'Career Opportunities',
    'Placement Support',
    'Certificate',
    'Batch Timings',
    'Book Demo Classes',
    'Talk to Counsellor',
    'Back to Main Menu'
  ],

  subFlows: {
    /* ---------- COURSE OVERVIEW ---------- */
    'Course Overview': {
      message: [
        'Data Structures & Algorithms (DSA) is the backbone of computer science.',
        'Top companies test DSA skills to evaluate problem-solving and logical thinking.',
        'This course helps learners master efficient coding techniques and real-world problem solving.'
      ],
      options: [
        'Why Learn DSA',
        'What this Course Covers',
        'Outcome of the Course',
        'Course Duration',
        'Batch Timings',
        'Certificate',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Why Learn DSA': {
      message: [
        'Core requirement for software engineering jobs.',
        'Essential for campus placements and technical interviews.',
        'Used in apps, databases, AI, cloud & system design.',
        'Builds strong problem-solving and analytical skills.',
        'Smooth transition to AI, ML, backend & system design.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'What this Course Covers': {
      message: [
        'Core programming logic and mathematical thinking.',
        'Data Structures: arrays, linked lists, stacks, queues, trees, graphs, hashing.',
        'Algorithms: sorting, searching, recursion, greedy, dynamic programming.',
        'Time & space complexity analysis.',
        'Hands-on coding with real interview-level problems.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Outcome of the Course': {
      message: [
        'Solve complex coding challenges confidently.',
        'Write memory-efficient and optimized programs.',
        'Crack coding tests on LeetCode, HackerRank, CodeChef.',
        'Be interview-ready for product & service-based companies.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Course Duration': {
      message: [
        'Course duration depends on batch type and learning mode.',
        'Our counsellor will guide you with exact details.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Batch Timings': {
      message: [
        'We offer flexible batch timings for:',
        '• School & College Students',
        '• Pass-out Graduates',
        '• Working Professionals'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Certificate': {
      message: [
        'Yes! You will receive an ENCODE AI Data Structure & Algorithm Certificate after course completion.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- WHO CAN JOIN ---------- */
    'Who Can Join': {
      message: [
        'Anyone can learn DSA:',
        '• School Students',
        '• College Students (Technical & Non-Technical)',
        '• Working Professionals',
        'No prior coding knowledge required.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- SYLLABUS ---------- */
    'Syllabus': {
      message: [
        'DSA Syllabus:',
        '1. Time & Space Complexity, Big-O Analysis',
        '2. Programming Basics & Recursion',
        '3. Arrays, Strings, Linked Lists',
        '4. Stacks, Queues, Trees, Heaps',
        '5. Hashing, Graphs',
        '6. Sorting & Searching Algorithms',
        '7. Dynamic Programming',
        '8. Problem Solving & Interview Practice'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- CAREER ---------- */
    'Career Opportunities': {
      message: [
        'Career Options after completing DSA:',
        '• Software Developer',
        '• Backend Developer',
        '• System Design Engineer',
        '• Competitive Programmer',
        '• Game Developer'
      ],
      options: [
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Placement Support': {
      message: [
        'ENCODE AI Placement Support includes:',
        '• Resume Preparation',
        '• Profile / Portfolio Building',
        '• Mock Interviews',
        '• Placement Assistance'
      ],
      options: [
        'Book Demo Classes',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- LEADS ---------- */
    'Book Demo Classes': {
      leadType: 'Book Demo Class',
      message: [
        'Book a DSA Demo Class.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    },

    'Talk to Counsellor': {
      leadType: 'Talk to Counsellor',
      message: [
        'Connect with our Counsellor.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    }
  }
},

/* =========================
   DATA SCIENCE FLOW
========================== */
'Data Science': {
  message: [
    'Welcome to ENCODE AI!',
    'Upgrade your career with our Data Science Course – Beginner to Job Ready.',
    'Please choose an option:'
  ],
  options: [
    'What is Data Science',
    'Course Overview',
    'Who Can Join',
    'Syllabus',
    'Career Opportunities',
    'Placement Support',
    'Certificate',
    'Batch Timings',
    'Book Demo Classes',
    'Talk to Counsellor',
    'Back to Main Menu'
  ],

  subFlows: {

    /* ---------- WHAT IS DATA SCIENCE ---------- */
    'What is Data Science': {
      message: [
        'Data Science is the field of using data, statistics, and machine learning to solve real-world problems.',
        'It helps businesses make smarter, data-driven decisions.',
        'It combines:',
        '• Programming',
        '• Statistics',
        '• Machine Learning',
        '• Deep Learning'
      ],
      options: [
        'Why Learn Data Science',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Why Learn Data Science': {
      message: [
        'Fastest growing career in the tech industry.',
        'High salary & global job opportunities.',
        'Power to solve real-world business problems.',
        'Diverse career paths: Data Scientist, Data Analyst, ML Engineer, BI Analyst.',
        'Industry-neutral skill – switch domains without starting over.',
        'Perfect for learners from any background.',
        'Strong foundation for AI & future technologies.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- COURSE OVERVIEW ---------- */
    'Course Overview': {
      message: [
        'Data Science is the art and science of extracting meaningful insights from data.',
        'This course builds strong foundations in statistics, programming, data analysis, and machine learning.',
        'Learners work with real industry datasets to convert raw data into intelligent decisions.'
      ],
      options: [
        'Outcome of the Course',
        'Course Duration',
        'Batch Timings',
        'Certificate',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Outcome of the Course': {
      message: [
        'After completing the course, learners will:',
        '• Understand end-to-end data workflows',
        '• Analyse, visualize & predict using real datasets',
        '• Create dashboards and business reports',
        '• Be job-ready for Data Analyst & Junior Data Scientist roles'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Course Duration': {
      message: [
        'Course duration depends on batch type and learning mode.',
        'Our counsellor will guide you with exact details.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Batch Timings': {
      message: [
        'We offer flexible batch timings for:',
        '• College Students',
        '• Pass-out Graduates',
        '• Working Professionals'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Certificate': {
      message: [
        'Yes! You will receive an ENCODE AI Data Science Certificate after course completion.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- WHO CAN JOIN ---------- */
    'Who Can Join': {
      message: [
        'Anyone can become a Data Scientist:',
        '• School Students',
        '• College Students (Technical & Non-Technical)',
        '• Working Professionals',
        'No prior coding knowledge required.'
      ],
      options: [
        'Is Data Science good for beginners',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Is Data Science good for beginners': {
      message: [
        'Yes! Data Science is beginner-friendly.',
        'This course starts from basics with step-by-step learning.',
        'You will learn Python, Excel, SQL, Power BI, ML & Deep Learning.',
        'Simple explanations with real-life examples.',
        'Hands-on practice with real datasets.'
      ],
      options: [
        'Syllabus',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- SYLLABUS ---------- */
    'Syllabus': {
      message: [
        'Data Science Syllabus:',
        '1. Python Programming',
        '2. Python Libraries (NumPy, Pandas, Matplotlib)',
        '3. OOPs & Advanced Python',
        '4. Exploratory Data Analysis (EDA)',
        '5. SQL',
        '6. Excel & Advanced Excel',
        '7. Power BI',
        '8. Machine Learning',
        '9. Deep Learning',
        '10. Hands-on Industry Projects'
      ],
      options: [
        'Benefits of Course',
        'Career Opportunities',
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Benefits of Course': {
      message: [
        'High demand skill in India & abroad.',
        'Used across IT, Finance, Healthcare, E-commerce.',
        'One of the fastest-growing tech careers.',
        'Perfect mix of logic, technology & business.',
        'Strong long-term career growth.'
      ],
      options: [
        'Career Opportunities',
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- CAREER ---------- */
    'Career Opportunities': {
      message: [
        'Career options after Data Science:',
        '• Data Analyst',
        '• Junior / Associate Data Scientist',
        '• Business Analyst',
        '• Machine Learning Engineer',
        '• BI Analyst',
        '• Data Engineer',
        '• Product Analyst'
      ],
      options: [
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Placement Support': {
      message: [
        'ENCODE AI Placement Support includes:',
        '• Resume Preparation',
        '• Profile / Portfolio Building',
        '• Mock Interviews',
        '• Placement Assistance'
      ],
      options: [
        'Book Demo Classes',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- LEADS ---------- */
    'Book Demo Classes': {
      leadType: 'Book Demo Class',
      message: [
        'Book a Data Science Demo Class.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    },

    'Talk to Counsellor': {
      leadType: 'Talk to Counsellor',
      message: [
        'Connect with our Counsellor.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    }
  }
},
/* =========================
   DATA ANALYTICS FLOW
========================== */
'Data Analytics': {
  message: [
    'Welcome to ENCODE AI!',
    'Upgrade your career with our Data Analytics Course – Beginner to Job Ready.',
    'Please choose an option:'
  ],
  options: [
    'Course Overview',
    'Who Can Join',
    'Syllabus',
    'Career Opportunities',
    'Placement Support',
    'Certificate',
    'Batch Timings',
    'Book Demo Classes',
    'Talk to Counsellor',
    'Back to Main Menu'
  ],

  subFlows: {

    /* ---------- COURSE OVERVIEW ---------- */
    'Course Overview': {
      message: [
        'Data Analytics is the science of discovering meaningful insights from data.',
        'Companies across every industry rely on data-driven decisions.',
        'This course is designed for beginners and professionals to build strong analytical skills.',
        'Learners work on real-world datasets using industry-standard tools.'
      ],
      options: [
        'Why Learn Data Analytics',
        'Outcome of the Course',
        'Course Duration',
        'Batch Timings',
        'Certificate',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Why Learn Data Analytics': {
      message: [
        'One of the fastest-growing career paths.',
        'High-demand roles across IT, finance, healthcare, e-commerce & consulting.',
        'Well-paying career with multiple job opportunities.',
        'No coding background required to start.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Outcome of the Course': {
      message: [
        'After completing this program, learners will:',
        '• Collect, clean & analyse large datasets',
        '• Write SQL queries to extract insights',
        '• Create dashboards & reports for business decisions',
        '• Communicate insights effectively',
        '• Be job-ready for Data Analyst & Business Analyst roles'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Course Duration': {
      message: [
        'Course duration depends on batch type and learning mode.',
        'Our counsellor will guide you with exact details.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Batch Timings': {
      message: [
        'We offer flexible batch timings for:',
        '• College Students',
        '• Pass-out Graduates',
        '• Working Professionals'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Certificate': {
      message: [
        'Yes! You will receive an ENCODE AI Data Analytics Certificate after course completion.'
      ],
      options: [
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- WHO CAN JOIN ---------- */
    'Who Can Join': {
      message: [
        'Anyone can become a Data Analyst:',
        '• School Students',
        '• College Students (Technical & Non-Technical)',
        '• Working Professionals',
        'No prior coding knowledge or skills required.'
      ],
      options: [
        'Is Data Analytics good for beginners',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Is Data Analytics good for beginners': {
      message: [
        'Yes! Data Analytics is beginner-friendly.',
        'This course is designed for absolute beginners.',
        'You will learn Python, Excel, SQL, and Power BI step by step.',
        'Simple explanations with real-life examples.',
        'Hands-on practice with real datasets.'
      ],
      options: [
        'Syllabus',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- SYLLABUS ---------- */
    'Syllabus': {
      message: [
        'Data Analytics Syllabus:',
        '1. Python Programming',
        '2. Python Libraries (Pandas, NumPy, Matplotlib)',
        '3. Advanced Python',
        '4. Exploratory Data Analysis (EDA)',
        '5. SQL',
        '6. Excel & Advanced Excel',
        '7. Power BI',
        '8. Hands-on Industry Projects'
      ],
      options: [
        'Career Opportunities',
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- CAREER ---------- */
    'Career Opportunities': {
      message: [
        'Career options after Data Analytics:',
        '• Data Analyst',
        '• Business Analyst'
      ],
      options: [
        'Placement Support',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    'Placement Support': {
      message: [
        'ENCODE AI Placement Support includes:',
        '• Resume Preparation',
        '• Profile / Portfolio Building',
        '• Mock Interviews',
        '• Placement Assistance'
      ],
      options: [
        'Book Demo Classes',
        'Talk to Counsellor',
        'Back to Menu',
        'Back to Main Menu'
      ]
    },

    /* ---------- LEADS ---------- */
    'Book Demo Classes': {
      leadType: 'Book Demo Class',
      message: [
        'Book a Data Analytics Demo Class.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    },

    'Talk to Counsellor': {
      leadType: 'Talk to Counsellor',
      message: [
        'Connect with our Counsellor.',
        'Please share:',
        '1. Name',
        '2. Mobile Number',
        '3. City',
        '4. E-mail ID',
        'Our team will contact you shortly.'
      ]
    }
  }
}

};

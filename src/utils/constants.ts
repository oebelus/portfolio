import { Post } from "../types/post"

export const navLinks = [
    {
        id: "",
        name: "about_me;"
    },
    {
        id: "projects",
        name: "projects;"
    },
    {
        id: "blog",
        name: "blog;"
    },
    {
        id: "misc",
        name: "misc;"
    }
]

export const projects = [
    {
        id: "expenses",
        name: "Expenses Tracker",
        description: "Expense Tracker is a simple and efficient full stack web application that helps you keep track of your spending. With a user-friendly interface, you can easily log your expenses, categorize them, and see a detailed history. The app provides insights into your financial habits and helps you manage your budget effectively.",
        github: "https://github.com/oebelus/expensesTracker?tab=readme-ov-file",
        technologies: ["HTML 5", "Tailwind", "TypeScript", "React", "Chart.js", "Node.js", "Express.js", "MongoDB", "JWT"],
        features: ["User Authentication.", "Expenses Logging: Add new expenses with details such as date, category, description, and amount.", "Expenses Categories, History and Summary.", "Handy search and filter options", "Responsive Design"]
    },
    {
        id: "vm",
        name: "Stack-Based Virtual Machine",
        description: "The Stack-Based Virtual Machine (SVM) is a Turing Complete virtual machine created using C#. It's designed to handle various tasks like arithmetic operations, manipulating stacks, controlling flow, and managing memory.",
        github: "https://github.com/oebelus/stackVM",
        technologies: ["C#"],
        features: ["Bytecode Interpretation: Executes bytecode instructions.", "Mnemonics Execution: Human-readable mnemonics can be converted to bytecode for execution.", "Control Flow: Supports jump and conditional jump instructions.", "Memory Operations: Load and store values in memory."]
    },
    {
        id: "bf",
        name: "Brainf*ck Interpreter",
        description: "A simple Brainfuck interpreter that prompts you to input your Brainfuck code in the console and outputs the result. It supports all standard Brainfuck commands.",
        github: "https://github.com/oebelus/brainf-ckpreter",
        features: [
            "Standard Commands: Supports all standard Brainfuck commands, including nested brackets.",
            "Output and Tape: Displays the result and the tape after interpreting the code.",
            "Interactive: Prompts for input and displays results directly in the console."
        ],
        technologies: ["C#"]
    },
    {
        id: "calculator",
        name: "Mathematical Expression Evaluator",
        description: "A TypeScript program that evaluates mathematical expressions in infix notation and returns the result. It supports binary operations (+, -, *, /, ^) and unary operations (!, sin, cos, tan).",
        github: "https://github.com/oebelus/calculators",
        features: [
            "Tokenizer: Parses the input expression into individual tokens.",
            "Shunting Yard Algorithm: Converts infix expressions to RPN while handling operator precedence and associativity.",
            "RPN Evaluation with AST: Evaluates RPN expressions by constructing and collapsing an Abstract Syntax Tree.",
            "Stack Calculation: Evaluates RPN expressions using stack-based calculations."
        ],
        technologies: ["TypeScript"]
    },
    {
        id: "pong",
        name: "Pong Game",
        description: "A simple Pong game implemented in TypeScript. The game features two paddles and a ball that bounces around the screen. The objective is to score points by getting the ball past the opponent's paddle.",
        github: "https://github.com/oebelus/pongTs",
        features: [
            "Two Paddles: Controls for moving paddles up and down.",
            "Ball Mechanics: The ball bounces off paddles and walls.",
            "Scoring System: Tracks and displays scores for both players.",
            "Basic Controls: Allows players to move paddles using keyboard inputs."
        ],
        technologies: ["TypeScript", "HTML5",  "Canvas"],
        demo: "https://oebelus.github.io/pongTs/"
    },
    {
        id: "http_server",
        name: "HTTP Server in Java",
        description: "A custom-built HTTP server implemented in Java. This server handles incoming HTTP requests and provides responses based on the request type and URL.",
        github: "https://github.com/oebelus/http-server-java",
        features: [
            "File Handling: Supports GET requests to retrieve files and POST requests to save files.",
            "Echo Requests: Returns the request body in response, with optional Gzip compression.",
            "User-Agent Information: Provides the User-Agent string from request headers.",
            "Dynamic Response Generation: Generates HTTP responses based on request path and method.",
            "Error Handling: Responds with appropriate HTTP status codes for various scenarios."
        ],
        technologies: ["Java", "Java Sockets", "HTTP Protocol"]
    },
    {
        id: "express_app",
        name: "Node.js API",
        description: "A TypeScript-based Express application with built-in middleware for security, logging, and compression. It is designed for scalability and ease of integration with various controllers.",
        github: "https://github.com/oebelus/node-api",
        features: [
            "Middleware Integration: Uses helmet for security, cors for cross-origin resource sharing, morgan for logging, and compression for response bodies size reduction.",
            "Database Connection: Connects to MongoDB using Mongoose.",
            "Controller-Based Routing: Routes requests through specified controllers.",
            "Error Handling: Centralized error handling through middleware."
        ],
        technologies: [
            "Express",
            "Mongoose",
            "Compression",
            "CORS",
            "Morgan",
            "Helmet"
        ]
    },
    {
        id: "discord_bot",
        name: "Formula Discord Bot",
        description: "A Discord bot built with Python that interacts with users and performs web scraping to retrieve and send information about Formula E and Formula One races.",
        github: "https://github.com/oebelus/formula_bot",
        features: [
            "Discord Integration: Responds to user messages and sends updates to a specified channel.",
            "Web Scraping: Retrieves race data for Formula E and Formula One using BeautifulSoup and Selenium.",
            "Background Tasks: Periodically sends updates about races to the Discord channel.",
            "JSON Storage: Saves race data to JSON files for later use."
        ],
        technologies: [
            "Python",
            "Discord.py",
            "BeautifulSoup",
            "Selenium",
        ]
    },
    {
        id: "file_organizer",
        name: "File Organizer",
        description: "A Python-based file organizer that helps manage and sort files into directories based on user commands.",
        github: "https://github.com/oebelus/files_manager",
        features: [
            "File Sorting: Organize files into directories based on user-defined criteria.",
            "Directory Management: View, rename, and delete directories.",
            "File Operations: Read PDF files, rename, delete, move files, and display a list of available commands.",
            "Manager Feature: Groups files by common keywords and moves them to a specified directory."
        ],
        technologies: [
            "Python"
        ]
    },
    {
        id: "solar_system",
        name: "Solar System Simulator",
        description: "A Three.js-based solar system simulation showcasing the planets and their orbits. ",
        github: "https://github.com/oebelus/solarSystem",
        features: [
            "Planetary Visualization: Displays planets with textures and accurate scaling.",
            "Interactive Controls: Allows user interaction to explore the solar system with orbit controls.",
            "Real-Time Animation: Planets and orbits animate continuously to simulate movement.",
        ],
        technologies: [
            "Three.js",
            "TypeScript",
            "WebGL"
        ]
    },
    {
        id: "movies_fullstack_website",
        name: "Movies' Website",
        description: "A full-stack website to manage movie lists, including 'seen', 'to watch', and 'top 100' movies.",
        github: "https://github.com/oebelus/moviesTs",
        features: [
            "Seen List: Track movies you have watched.",
            "Top 100: Explore the top 100 movies according to user ratings.",
            "Watchlist: Save movies you want to watch later.",
            "User Authentication: Ensure personalized lists and secure access."
        ],
        technologies: [ "React", "TypeScript", "HTML", "CSS", "Bootstrap", "Vite", "Node.js", "Express", "MySQL", "Sequelize", "CORS", "Nodemon", "JWT"
        ],
    },
    {
        id: "simple_shell",
        name: "Simple Shell",
        description: "A basic command-line interface that reads user input and executes commands.",
        github: "https://github.com/oebelus/simpleShell",
        features: [
            "Command Execution: Executes user-entered commands and displays their output.",
            "Built-in Commands: Includes basic commands such as 'echo' to display messages or environment variable values, and 'env' to list environment variables and their values."
        ],
        technologies: [
            "C"
        ],
    },
    {
        id: "mini_games",
        name: "Mini Games",
        description: "A collection of simple games implemented in C using the ncurses library. It includes classic games like Snake and a retro racing game.",
        github: "https://github.com/oebelus/miniGames",
        features: [
            "Snake Game: Navigate a growing snake to eat fruit while avoiding collisions with boundaries and itself.",
            "Retro Racer: Control a car and avoid enemy cars in an ASCII art-based racing game."
        ],
        technologies: [
            "C",
            "ncurses"
        ],
    },
    {
        id: "pantry",
        name: "Inventory Management Application",
        description: "Meet the Inventory Management App, your go-to tool for keeping your product inventory in check! With an easy-to-use interface, you can track, filter, and organize your products effortlessly.",
        github: "https://github.com/oebelus/inventoryManager",
        features: [
            "Product Management: Add, update, and delete products.",
            "Inventory Tracking: Monitor product counts and expiration dates.",
            "Category Filtering: Filter products by categories with case-insensitive search.",
            "Fully responsive and compatible with all screen sizes!"
        ],
        technologies: [
            "React", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "Hibernate", "MySQL"
        ],
        demo: "https://youtu.be/mrS1Cxl2RDE"
    },
    {
        id: "assistantai",
        name: "AI Customer Assistant Bot",
        description: "AssistantAi is an AI-powered customer assistant chatbot built with Java and Spring Boot. Designed to provide intelligent and adaptive customer service.",
        github: "https://github.com/oebelus/AssistantAi",
        features: [
            "Natural Language Processing (NLP): Understands and responds to customer queries in natural language.",
            "Contextual Awareness.",
            "Strict Information Provision within limitations.",
            "Can be integrated with various platforms such as websites, mobile apps, and CRM systems.",
            "Customizable and Scalable."
        ],
        technologies: [
             "Java", "Spring Boot", "MySQL", "Tailwind CSS", "Vanilla TypeScript", "OpenAI GPT", "Groq API"
        ],
    },
    {
        id: "rubiks",
        name: "Rubik's Cube",
        description: "An interactive Three.js Rubik's cube.",
        github: "https://github.com/oebelus/rubik-s",
        features: [
            "Dynamic grid of colored cubes.",
            "Support for dragging and rotating cubes.",
            "Interaction through mouse events.",
            "Real-time updates and animations.",
            "Control over rotation direction and angle."
        ],
        technologies: [
             "Three.js", "TypeScript", "TWEEN.JS"
        ],
    }
]

export const contacts = [
    {
        id: "github",
        name: "GitHub",
        link: "https://github.com/oebelus" 
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/imane-el-fadil-el-idrissi-b528b31a6/" 
    },
    {
        id: "x",
        name: "X",
        link: "https://twitter.com/oebelus" 
    },
    {
        id: "leetcode",
        name: "LeetCode",
        link: "https://leetcode.com/u/oebelus/" 
    },
    {
        id: "hackerrank",
        name: "HackerRank",
        link: "https://www.hackerrank.com/profile/oebelus" 
    },
    {
        id: "email",
        name: "Email",
        link: "mailto:imaneelfadilelidrissi@gmail.com" 
    },
]

export const builds = ["Dynamic and responsive websites, and full-stack applications (MERN, Spring/React).", "Custom solutions using various programming languages.", "3D visualizations with Three.js.", "Command-line tools and utilities."]

export const hobbies = ["Playing a game.", "Learning About Some Random Topic.", 'Watching: ["Movie", "Series", "Anime", "YouTube"].', 'Reading: ["Manga", "Comics", "A Book"].', "Drawing."]

export const posts: Post[] = [
    {
        id: "chapterone",
        title: "Category Theory For Programmers - Chapter 1 Solutions",
        date: "09/18/2024",
        category: ["Category Theory", "Mathematics"],
        description: "Suggested Solutions for the first chapter of Category Theory for Programmers",
        content: "ChapterOne",
    },
    {
        id: "beans",
        title: "An Introduction to Beans in Spring",
        date: "08/21/2024",
        category: ["Spring", "Java"],
        description: "A small friendly introduction to Beans and IoC in Spring",
        content: "Beans"
    },
    
];
import { bugs, img2, img3, react1 } from "../assets";

export const blogs = [
  {
    id: 1,
    title: "Naming Conventions in React JS",
    author: "Priyansh Sharma",
    content: `Writing high-quality code is the most important thing we coders are trying to master. However, more skills make a great developer. One of them is the way you name your files.

    Naming files and folders are one of the simplest things we do as developers. But it is also one of the most important. A well-named file or folder can help you and other developers find and understand your code more quickly.
    
    In this article, you'll learn what exactly is the naming convention, what types of naming conventions can you choose from. And lastly, you'll learn what are the most common naming conventions used in React projects.
    
    All that being said, let's dive straight into the article.
    
    What Is Naming Convention
    Before we go over the different types of naming conventions, we need to do one thing. It's important to understand what the naming convention is, and why it's important to follow it when working on a project.
    
    In computer programming, a naming convention is a set of rules for choosing the character sequence to be used for identifiers that denote variables, types, functions, and other entities in source code and documentation. (source: Wikipedia)
    
    Naming Convention Explained
    In a way, the naming convention is how you name every single thing in your project.
    
    When we're choosing a proper naming convention for our project, we're mostly concerned about the name of files and directories. And that's because other entities are usually covered by the naming conventions of a programming language we're using.
    
    Now that we know what naming convention is, let's talk about its importance.
    
    Importance of Naming Convention
    Naming conventions are important because they make code more readable and organized. That's the simplest answer I could provide. However, the importance of proper naming doesn't end here.
    
    Naming conventions make a codebase more understandable for other programmers. By adhering to a set of naming conventions, all programmers will be using the same terminology for the same concepts. This will make it easier for them to communicate with each other.
    
    By following name conventions you are creating a consistent programming language, that can be easily understood by other programmers.
    
    Common Naming Conventions for React JS
    React is an unopinionated framework, and the same applies to the naming. It doesn't have any specific guidelines or statements about naming conventions. You're free to use whatever naming conventions you feel comfortable with. The documentation doesn't offer any specific recommendations either.
    
    Some people believe that React components should be named in a way that mirrors the HTML element they are representing. E.g, a component that renders a div might be named Div.
    
    Others believe that the name of the component should be based on the functionality it provides, not the HTML element it represents. E.g, A component that logs messages to the console might be named ConsoleLogger, and not Console.
    
    Ultimately, it's up to you to decide what naming conventions you want to use. However, there are a few different approaches that gained popularity among React developers.
    
    In React applications, there are 3 most common naming conventions:
    
    Camel case for file names, and pascal case for component names
    Kebab case for file names, and pascal case for component names
    Pascal case for both file names, and component names
    As you can see, there is one thing that's pretty much set in stone. And that's the convention for component names. A component in React should always use a pascal case. E.g, App, AppContainer or AwesomeAppContainer.`,


    date: "2023-05-20",
    image: react1,
    tags: ["Reactjs", "Naming Conventions", "Frontend"],
  },
  {
    id: 2,
    title: "Types of Software Bugs",
    author: "Jordan Smith",
    content: `1. Types of Software Bugs
    There are several types of software bugs that can occur during software development. Some of the most common types of software bugs are:
    
    Syntax errors: These are basic errors that occur when code violates the syntax rules of the programming language. They are usually easy to detect and fix.
    Runtime errors: These errors occur during the execution of a program and can cause it to crash or behave unpredictably. Examples include null pointer exceptions and stack overflows.
    Logical errors: These occur when there is a flaw in the design or implementation of the code that results in incorrect behavior. They can be difficult to detect and fix.
    Integration errors: These occur when different modules or components of a program fail to work together properly, resulting in unexpected behavior.
    Performance bugs: These occur when a program does not perform as expected, such as slow loading times or excessive memory usage.
    Security bugs: These are vulnerabilities in a program that can be exploited by hackers to gain unauthorized access to sensitive data or systems.
    Usability bugs: These occur when a program is difficult or confusing to use, such as confusing menu options or hard-to-read text.
    Compatibility bugs: These occur when a program is not compatible with certain hardware or software configurations, resulting in errors or crashes.
    Documentation bugs: These occur when the documentation or help files for a program contain errors or inaccuracies.
    Data bugs: These occur when a program fails to handle data correctly, such as data loss or corruption.`,
    date: "2023-05-18",
    image: bugs,
    tags: ["Bugs", "Error", "Javascript"],
  },


  {
    id: 3,
    title: "A Journey to the Center of JavaScript, Part 5: Async Js & Event Loop",
    author: "Çağlayan Yanıkoğlu",
    content: `Iwant to start with little advice: When most of the junior developers try to learn web programming they make the same mistakes. They focus to learn React, Vue, or some popular libraries even if they don’t know the basic cores of JavaScript. I always suggest my students to learn the logic of the code. Because they take some code parts from some websites like Stackoverflow and if the code works they don’t search anymore.

    Today I will talk about logic of the JavaScript and how JavaScript handles async operations with a single thread.
    
    What is Async?
      I want to give real-life example to explain async operations. For example, you want to take a coffee and go to Starbucks. After you order, the next person doesn’t have to wait for your coffee to be ready. While your coffee is getting ready, they still take the orders. This is the basic description of async operations actually. Do multiple jobs at the same time. But I’ve mentioned JavaScript is a single-threaded language, it means it can do one job at one time. So how JavaScript handles multiple tasks with one thread? Because, it often needs to perform tasks that take time, such as making network requests, reading from a file, or waiting for user input.

      Before answering that I would like to give async examples in JavaScript.`,
    date: "2023-05-18",
    image: img2,
    tags: ["Async", "Nodejs", "Javascript"],
  },




  {
    id: 4,
    title: "A Journey to the Center of JavaScript, Part 5: Async Js & Event Loop",
    author: "Çağlayan Yanıkoğlu",
    content: `I recently heard the term Micro Frontends and wanted to investigate the real story behind this. The very first idea came to my mind was that, this should be a similar thing to the Micro Services with loosely coupled front-end components. However with that I got the curiosity of how to deliver this concept for real world industrial applications along with legacy systems. I did some digging into the matter and found some interesting concepts behind scene and I will summarize those finding through this article.
    
    2. Client-side rendering applications (CSR)

      One of the most common and highly used architecture now a days. Client (browser) receives HTML and JavaScript files, that manipulate the HTML document and the DOM. This results in interactive applications where user interactions result in animations or GUI changes, without a need of page refresh. To facilitate this, browser exposes an API, called Document Object Model (DOM), that allows scripting languages to access and manipulate HTML documents. This manipulation is most commonly done using JavaScript. Single Page Application(SPA) is one of the implementation of CSR. SPA is a web application which is delivered to the browser in a single HTML file and it uses CSR to change the content.
      
      
      
      2.1 Single-page Applications

      In Single-page Applications (SPA), only one HTML file is loaded to the browser, the page does not need to refresh when the user interacts with the page. This gives the user a smoother user experience. To be able to change the content of the page and to provide additional information for the user, the DOM has to be dynamically updated by using JavaScript and HTTP requests to get information from the server. Example frameworks and libraries are`,
    date: "2023-05-18",
    image: img3,
    tags: ["Frontend", "Micro", "UI/UX"],
  },
];
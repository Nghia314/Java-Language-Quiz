//create question and choices
var questions = [
    { title:"What is the extension of java code files?",
      choices:(".js","txt",".class",".java"),
      Answer: ".java"
    },
    { title:"What is printed (system.out.print(hello,\nworld!);?",
      choices:("Hello,\nworld!","Hello,world!","Nothing","None of the above"),
      Answer: "Nothing" 

    },
    { title: "Which of the following variable declaration would NOT compile in a java program?",
      choices:("int var;","int VAR;","int var1;","int1_var;"),
      Answer: "Int1_var;" 

    },
    { title:"What is the size of boolean variable?",
      choices:("8 bit","16 bit","32 bit","not precisely defined"),
      Answer: "16 bit" 

    },
    { title:"which of the following is true about String",
      choices:("String is mutable","String is immutable","string is a date type","None of the above"),
      Answer: "String is immutable" 

    },
    { title:"What is a correct syntax to output (Hello world) in java?",
      choices:("system.out.print('hello world')","echo('hello world')","print('Hello world')"),
      Answer: "system.out.print('hello world')" 

    },
];
//score varible
var score = 0;

//API
var time = document.querySelector()
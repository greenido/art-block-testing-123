//
// Author: Ido / @greenido
// Date: 9-2021
//
// See:
// https://p5js.org/reference/
// https://www.fotor.com/

//
// runs once at the beginning
//
function setup(shapeVal, maxShapes = 120) {
  // 1=circle, 2=Square, 3=line, 4=triangle
  let shape = 2; //4; //3; //2;
  let shapeName = "Square";
  if (shapeVal) {
    shape = shapeVal;

    if (shapeVal == 1) {
      shapeName = "Circle";
    } else if (shapeVal == 3) {
      shapeName = "Line";
    } else if (shapeVal == 4) {
      shapeName = "Triangle";
    }
  }

  createCanvas(600, 600);
  rectMode(CENTER);
  let r = Math.floor(random(10, 200)); // r is a random number between 0 - 255
  let g = Math.floor(random(10, 255)); // g is a random number betwen 100 - 200
  let b = Math.floor(random(20, 255));
  background(r, g, b); //"lightblue");
  main(maxShapes, shape);
  let propStr = "<h1>" + randomTitle() + "</h1>";
  propStr += "<h4>" + randomSentence() + "</h4> <br>";

  propStr += "<ul>";
  propStr +=
    "<li>Background Color: <b>" + r + " , " + g + " , " + b + "</b></li>";
  propStr += "<li>Shape: <b>" + shapeName + "</b></li>";
  propStr += "<li>Max Shapes: <b>" + maxShapes + "</b></li>";
  propStr += "</ul>";
  document.getElementById("prop").innerHTML = propStr;
}

//
//
//
function updateMaxShapesNum(val) {
  document.getElementById("maxShapesNum").value = val;

  let shapeType = document.getElementById("shape").value;
  setup(shapeType, val);
}

//
// runs continuously - main render loop
//
function draw(x, y, shape) {
  let r = random(255); // r is a random number between 0 - 255
  let g = random(10, 250); // g is a random number betwen 100 - 200
  let b = random(250); // b is a random number between 0 - 100
  let a = random(10, 255); // a is a random number between 200 - 255
  strokeWeight(3);
  stroke(r, g, b);
  fill(r, g, b, a);
  if (shape == 1) {
    circle(x, y, random(40, 100));
  } else if (shape == 2) {
    square(x, y, random(40, 100));
  } else if (shape == 3) {
    strokeWeight(5);
    line(x, y, x + random(40, 500), y - random(50, 450));
  } else if (shape == 4) {
    triangle(x, y, x + random(40, 100), y - random(50, 150), x / 2, y / 2);
  }
}

//
//
//
function main(maxShapes, shape) {
  let noCircles = 0;
  console.log("-- Max: " + maxShapes);
  for (var i = 0; i < 400; i = i + 2) {
    draw(random(600), random(600), shape);
    noCircles++;
    console.log("--- current: " + noCircles);
    if (noCircles > maxShapes) {
      break;
    }
  }
}

//
//
//
function randomSentence() {
  let sentenses = [
    "IMHO the three big ones in life are wealth, health, and happiness. We pursue them in that order but their importance is in the reverse.",
    "Ego is false confidence, self-respect is true confidence.",
    "No one can compete with you on being you. Most of life is a search for who and what needs you the most.",
    "A rational person can find peace by cultivating indifference to things outside of their control.",
    "Success is the enemy of learning. It can deprive you of the time and the incentive to start over. Beginner’s mind also needs beginner’s time.",
    "Escape competition through authenticity.",
    "The heart decides, the head rationalizes.",
    "The fundamental delusion — there is something out there that will make you happy and fulfilled forever.",
    "All the benefits in life come from compound interest — money, relationships, habits — anything of importance.",
    "The compound interest from many quick small iterations is greater than the compound interest from a few slow big iterations.",
    "Compound interest operates in most intellectual and social domains.",
    "Relax. You will live longer and perform better.",
    "Twitter is television for intellectuals.",
    "If you cant decide, the answer is No.",
    "You don’t get rich by spending your time to save money. You get rich by saving your time to make money.",
    "Trade money for time, not time for money. You’re going to run out of time first.",
    "Seek wealth, not money or status. Wealth is having assets that earn while you sleep. Money is how we transfer time and wealth.",
    "Status is your place in the social hierarchy.",
    "Work as hard as you can. Even though who you work with and what you work on are more important than how hard you work.",
    "It is the mark of a charalatan to explain a simple concept in a complex way.",
    "Self-image is the prison. Other people are the guards.",
    "The greatest superpower is the ability to change yourself.",
    "We say 'peace of mind' but really what we want is peace from mind.",
    "A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.",
    "Founders run every sprint as if they’re about to lose, but grind out the long race knowing that victory is inevitable.",
    "Its never been easier to start a company. Its never been harder to build one.",
    "An early exit for your startup is a mirage in the desert. If you thirst for it, it disappears.",
    "Read what you love until you love to read.",
    "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
    "Become the best in the world at what you do. Keep redefining what you do until this is true.",
    "In an age of infinite leverage, judgement is the most important skill.",
    "Leverage is a force multiplier for your judgement.",
    "Once you’ve truly controlled your own fate, for better or for worse, you’ll never let anyone else tell you what to do.",
    "You will get rich by giving society what it wants but does not yet know how to get. At scale.",
    "People who try to look smart by pointing out obvious exceptions actually signal the opposite.",
    "The selfish reason to be ethical is that it attracts the other ethical people in the network.",
    "There are no get rich quick schemes. That’s just someone else getting rich off you.",
    "Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now.",
    "Better to find a new audience than to write for the audience.",
    "Learn to sell. Learn to build. If you can do both, you will be unstoppable.",
    "A taste of freedom can make you unemployable.",
    "Your closest friends are the ones you can have a relationship with about nothing.",
    "Consensus is just another way of saying average.",
    "Morality and ethics automatically emerge when we realize the long term consequences of our actions.",
    "The best jobs are neither decreed nor degreed. They are creative expressions of continuous learners in free markets.",
    "The skills you really want can’t be taught, but they can be learned.",
    "Building technology means you don’t have to choose between practicing science, commerce, and art.",
    "Twitter is a much better resumé than LinkedIn.",
    "It is the mark of a charlatan to explain a simple concept in a complex way."
  ];
  let sen1 = sentenses[Math.floor(Math.random() * sentenses.length)];
  return sen1;
}

//
//
//
function randomTitle() {
  var words = [
    "Effort",
    "Sincerity",
    "Freedom",
    "Peace",
    "Love",
    "Thoughtfulness",
    "Trust",
    "Thanks",
    "Health",
    "Dreams",
    "Peace",
    "Equality",
    "Security",
    "Prosperity",
    "Love",
    "Fun",
    "Compensation",
    "Acknowledgement",
    "Freedom",
    "Health",
    "Faith",
    "Family",
    "Health",
    "Friends",
    "Thanks",
    "Giving",
    "Honesty",
    "Independence",
    "Sharing",
    "Freedom",
    "Independent",
    "Problem-solving",
    "Dedication",
    "Knowledgeable",
    "Integrity",
    "Skills",
    "Motivation",
    "You",
    "Money",
    "Save",
    "New",
    "Result",
    "Health",
    "Easy",
    "Safety",
    "Love",
    "Discovery",
    "Proven",
    "Guaranteed",
    "Mother",
    "Passion",
    "Smile",
    "Love",
    "Eternity",
    "Fantastic",
    "Destiny",
    "Freedom",
    "Liberty",
    "Tranquillity",
    "Peace",
    "Blossom",
    "Sunshine",
    "Sweetheart",
    "Gorgeous",
    "Cherish",
    "Enthusiasm",
    "Hope"
  ];

  let title =
    words[Math.floor(Math.random() * words.length)] +
    " & " +
    words[Math.floor(Math.random() * words.length)];
  return title;
}

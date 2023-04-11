function fortune() {
  const nameInput = document.getElementById("nameInput");
  const output = document.getElementById("output");

  const name = nameInput.value;

  const luck = ["bad", "average", "good", "excellent", "spectacular"];
  const randomLuck = luck[Math.floor(Math.random() * luck.length)];

  const numbers = ["3", "7", "9", "11", "13", "21", "27", "33", "44", "49"];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const verbs = ["find", "discover", "meet", "encounter", "cross paths with"];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

  const adjectives = ["wealthy", "successful", "happy", "wise", "blessed", "loved", "lucky", "prosperous"];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  const fortunes = [
    "I see a " + randomLuck + " future for you, " + name + ".",
    "The number " + randomNumber + " will bring you luck, " + name + ".",
    "You will soon " + randomVerb + " someone special, " + name + ".",
    "A " + randomAdjective + " life awaits you, " + name + ".",
    "You will soon receive a message from someone important, " + name + ".",
    "Good things come to those who wait, " + name + ".",
    "Your kind heart will lead you to great success, " + name + ".",
    "An unexpected surprise is coming your way, " + name + ".",
    "Your hard work will soon pay off, " + name + ".",
    "The stars are aligned in your favor, " + name + "."
  ];

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  output.innerHTML = randomFortune;
}

function restyle() {
  const outputElement = document.getElementById("output");
  const randomColor = Math.floor(Math.random()*16777215).toString(16); // generate a random color in hex format
  outputElement.style.color = "#" + randomColor;
  outputElement.style.backgroundColor = "#" + (randomColor ^ 0xFFFFFF).toString(16); // generate a contrasting color
  outputElement.style.border = "solid 3px #" + (randomColor ^ 0xFFFFFF).toString(16);
}

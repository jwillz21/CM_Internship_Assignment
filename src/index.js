import "./styles.css";

const song = `Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark!
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark!
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark!
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark!
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark!`;

const lineArray = song.split("\n");
const list = document.getElementById("lyrics-list");
let index = 0;
let interval = setInterval(function() {
  const li = document.createElement("li");
  li.innerText = lineArray[index];
  list.appendChild(li);
  index++;
  if (index >= lineArray.length) clearInterval(interval);
}, 1500);

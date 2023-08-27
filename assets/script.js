var topics = ['HTML', 'CSS', 'Git', 'JavaScript', 'Command Line', 'Random Notes'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
   }
   
function selectTopic() {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else if (randomTopic === 'Command Line') {
  console.log("Let's study Command Line!");
} else if (randomTopic === 'Random Notes') {
  console.log("Let's study Random Notes!");
}
else {
  console.log('Please try again!');
 }
}


console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study first?');
selectTopic();
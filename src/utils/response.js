// Possible responses from the void
const responses = [
  "it gets better",
  "the void believes in you",
  "tomorrow is a new day",
  "everything will be okay",
  "you are not alone",
  "you are enough",
  "the void is proud of you",
  "you make the void smile",
  "you are loved",
  "you are appreciated",
  "confirmed: you're amazing",
  "you will do great things",
];

function getResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}

export default getResponse;

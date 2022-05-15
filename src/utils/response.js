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
  "you'll figure it out",
  "mistakes don't make you less capable",
  "you are doing the right thing",
  "your life will be incredible",
  "you are important",
  "you are the greatest",
  "you are even better than you used to be",
  "the void is rooting for you",
  "you are glorious",
  "the void is grateful for your existence",
  "you give the void hope",
  "you were made for victory",
  "you are a sunbeam",
  "you are brilliant",
  "the void is honored by your presence",
];

function getResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}

export default getResponse;

import state from "../store";

const getRandomLetter = () => {
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter;
};

const getRandomId = () => {
  let randomId = state.getState("randomId8");

  // if coming back to the page, keep the previous id
  if (randomId !== "initialize") {
    return randomId;
  }

  randomId = "";
  for (let i = 0; i < 8; i++) {
    randomId = randomId + getRandomLetter();
  }
  return randomId;
};

export default getRandomId;

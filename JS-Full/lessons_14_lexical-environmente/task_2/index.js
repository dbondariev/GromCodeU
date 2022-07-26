export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(text) {
    sender = text;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const letSeeResult1 = createMessenger();
letSeeResult1.sendMessage('Bob');

const letSeeResult2 = createMessenger();
letSeeResult2.setMessage('Good job');
letSeeResult2.sendMessage('Ann');

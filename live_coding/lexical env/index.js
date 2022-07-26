// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// messanger1 LEX ENV
// {
//   'enviromentRecord': {
//     sendMessage: func,
//     setSender  : func,
//     setMessage : func,
//     'message': 'Just learn it',
//     'sender': 'Gromcode',
//     'nonameobject': { sendMessage ...}
//     'outherLexicalEnv': null
//   }
// }

//   },
//   'outherLexicalEnv': GlobalLexEnv
// }

/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  if (sender === 'Gromcode') {
    sender = 'Any'
  }

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
//create lex env
const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger2.setSender('James');
const messanger3 = createMessenger();
//create lex env
run();







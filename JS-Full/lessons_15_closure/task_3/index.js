/* eslint-disable consistent-return */
// создать массив
// getRecords должен быть перебор if...внимательно с условиями!
// warn, error, log это методы, им присвоить сообщения, тип данных и дату. они независимы друг от друга
// добавлять в массив текст, что содержится в warn, error, log. пушить?
// проверка на тип в getRecords, должен работать с типом логгеров или вернуть все сообщ.
// метод sort по убыванию

const createLogger = () => {
  const memoryOfLoggers = [];
  function warn(text) {
    const warnObj = {
      message: text,
      dateTime: new Date(),
      type: 'warn',
    };
    memoryOfLoggers.push(warnObj);
  }

  function error(text) {
    const errorObj = {
      message: text,
      dateTime: new Date(),
      type: 'error',
    };
    memoryOfLoggers.push(errorObj);
  }

  function log(text) {
    const logObj = {
      message: text,
      dateTime: new Date(),
      type: 'log',
    };
    memoryOfLoggers.push(logObj);
  }

  const getRecords = (loggerType = 'not Found') => {
    if (loggerType !== 'not Found') {
      // eslint-disable-next-line array-callback-return
      const memoryFilter = memoryOfLoggers.filter(element => {
        if (element.type === loggerType) {
          return element;
        }
      });
      return memoryFilter.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memoryOfLoggers.sort((a, b) => b.dateTime - a.dateTime);
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// test data
const logger = createLogger();
logger.log('User was logged in');
logger.warn('User try  to restricted this page');
logger.log('User was logged out');
logger.error('Unexpected error on this web-site');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords());

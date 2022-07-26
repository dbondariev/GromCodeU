// будет создавать логер
export const createLogger = name => {
 // хранилище для логов
 const logs = [];

 // вызов методов
 return {
  log(message) {
   logs.push(`log - ${name} - ${message}`);
  },
  error(errorText) {
   logs.push(`error - ${name} - ${errorText}`);
  },
  getLogs() {
   return logs;
  },
 };
};

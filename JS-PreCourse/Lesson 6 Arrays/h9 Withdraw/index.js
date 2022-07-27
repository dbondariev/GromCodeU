const withdraw = function (clients, balances, client, amount) {
 const clientIndex = clients.indexOf(client);

 if (balances[clientIndex] - amount < 0) {
  return -1;
 }
 // eslint-disable-next-line no-param-reassign
 balances[clientIndex] -= amount;
 return balances[clientIndex];
};

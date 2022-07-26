function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    balances[indexOfPerson] -= amount;
    return amount;
  }
  if (balances[indexOfPerson] < amount) {
    return -1;
  }
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

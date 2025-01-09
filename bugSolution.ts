function greet(person: string, date: string): string {
  console.log(person);
  console.log(date);
  return 'Hello, ' + person + '! Today is ' + date;
}

let message = greet("John Doe", new Date().toDateString());
console.log(message); 
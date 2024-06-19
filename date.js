const d = new Date();
const c = new Date();

d.setDate(15);
c.setDate(c.getDate()+1);   //we are setting date by getting date as next date
console.log(d);
console.log(c);
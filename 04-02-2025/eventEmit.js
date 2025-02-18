const events=require('events');

const myEmiter=new events.EventEmitter();

myEmiter.once("Someevent",(name,age)=>{
          console.log(`Hello ${name} you are ${age} years old`);
});

myEmiter.emit("Someevent","Rakesh",21);
myEmiter.emit("Someevent","Sai",21);
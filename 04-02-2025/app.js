const EventManager=require("./EventManager")

let eventman=new EventManager()

eventman.on("Start",()=>{
    console.log("Event Stared");
});
eventman.on("in-progress",()=>{
    console.log("Event Progress");
});
eventman.on("Completed",()=>{
    console.log("Event Completed");
});
eventman.StartEvent();
eventman.ProgressEvent();
eventman.CompleteEvent();
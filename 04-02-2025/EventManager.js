const eventEmitterr=require('events')

class EventManager extends eventEmitterr {
    constructor(){
        super()
    }
    StartEvent(){
        console.log("My event start")
        this.emit("Start")
    }
    ProgressEvent(){
        console.log("My event in progress")
        this.emit("in-progress")
    }
    CompleteEvent(){
        console.log("My event complete")
        this.emit("Completed")
    }
}
module.exports=EventManager;
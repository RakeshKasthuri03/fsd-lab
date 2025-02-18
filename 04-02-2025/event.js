const os=require('os');
 setInterval(()=>{
    const tom=os.totalmem()
    const freem=os.freemem()
    const per=(freem/tom)*100;
    console.log(`percentage of free memory : ${per} + used memor ${tom-freem}`)
 },5000)



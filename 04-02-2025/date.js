const os=require('os')
const uptime=os.uptime()
console.log(uptime)
const a=uptime
const seconds=Math.floor(uptime/1000);
const min=Math.floor((a%3600)/60);
const hour=Math.floor((a%86400)/3600);
const day=Math.floor(a/(24*3600));
console.log(`days:${day},hours:${hour},minutes:${min}`)
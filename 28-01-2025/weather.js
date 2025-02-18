




let fetchurl=async(pla,con)=>{
    const API_KEY="3291aad5e106590f2f04ded251ba64c0";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${pla},${con}&appid=${API_KEY}`
        let data=await fetch(url);
     let actdata=await  data.json();
       return actdata
    

};
async function display(){
  const con=document.getElementById("cname").value
const pla=document.getElementById("pname").value

    let res=await fetchurl(pla,con)
       
   
     console.log(res);

}

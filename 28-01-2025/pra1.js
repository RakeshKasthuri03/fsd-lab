function getUser(){
    let xhtpm=new XMLHttpRequest()
    xhtpm.open("GET","user.json",true)
    xhtpm.send()
    xhtpm.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            let users=JSON.parse(this.responseText);
            console.log(users[0].city)
        }
    };


}
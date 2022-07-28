//***********  3 way function calc avg   *********** 

//1- limited number of argument
function average1(n1 ,n2,n3,n4,n5,n6 ,n7,n8,n9,n10) {
   let sum = n1 +n2+n3+n4+n5+n6 +n7+n8+n9+n10;
   let result = sum/10;
    return result;
};
//2- unlimited avg 
function average2(){
    const arg = Array.from(arguments);
    console.log(arg);
    const sum =  arg.reduce((pre , cur)=>pre + cur);
    return sum/arg.length;
}
//3- unlimited avg 
function average3(...n){
   const sum = n.reduce((pre,cur)=> pre + cur);
   const result = sum/n.length;
   return result;
}

// function show hidden div
function showDiv(){   
    document.getElementById("hidden_js").style.display = "block";

} 

// function close showed div 
function close_div(){
    document.getElementById("hidden_js").style.display = "none";

}

// function showtime
function showTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    hours = (hours > 12 )? hours - 12 : hours; 
    hours = (hours<10) ? "0"+ hours: hours;
    hours = (hours === 0) ? hours == 12:hours;
    minutes = (minutes <10)?"0"+ minutes : minutes;
    second = (second <10 )? "0" + second : second;
    document.getElementById("time_div").innerHTML = hours + ":" + minutes + ":" + second ;
    setTimeout(showTime,1000);

}
showTime();


// function side bar

// function open
function openSide() {
    document.getElementById("hidden_side").style.width="250px";
    document.getElementById("bod").style.backgroundColor="brightness(80%)";
    document.getElementById("hidden_side").style.filter="brightness(100%)";
}

// function close
function closeSide() {
    document.getElementById("hidden_side").style.width="0";
    document.getElementById("bod").style.filter="brightness(100%)";

}
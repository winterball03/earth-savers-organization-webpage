let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");


//format:date(year,month,day,hour,minutes)
let endDate =new Date(2025,4,22,16,30);

//output value in millisec
let endTime=endDate.getTime();

function countdown(){
    let todayDate=new Date();
    //output value in millesec
    let todayTime=todayDate.getTime();

    let remainingTime=endTime-todayTime;

    let oneMin=60*1000;

    let oneHr=60*oneMin;

    let oneDay=24*oneHr;

    let addZeroes = num => num < 10 ? `0${num}` :num;

    if(endTime<todayTime){
        clearInterval(i);
        document.querySelector(".countdown").
        innerHTML='<h1>Coutdown had expired!</h1>';



    }
    else{
        let daysLeft=Math.floor(remainingTime/oneDay);
        let hrsLeft=Math.floor((remainingTime%oneDay)/oneHr);
        let minsLeft=Math.floor((remainingTime%oneHr)/oneMin);
        let secsLeft=Math.floor((remainingTime%oneMin)/1000);
        console.log(daysLeft,hrsLeft,minsLeft,secsLeft);

        dayBox.textContent=addZeroes(daysLeft);
        hrBox.textContent=addZeroes(hrsLeft);
        minBox.textContent=addZeroes(minsLeft);
        secBox.textContent=addZeroes(secsLeft);
    }
}
let i =setInterval(countdown,1000);
countdown();



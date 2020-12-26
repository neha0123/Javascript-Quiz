const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newwords="";
let randomwords="";
let swords=['python','javascript','c++','html','css','php','reactjs','swift','android','sql','c#'];
const cretewords =()=>{
    // console.swords[1]
    let random=Math.floor(Math.random()*swords.length);
    let newtempwors=swords[random];

    return newtempwors;
   
}
let scramble=(arr)=>{
 for(let i=arr.length-1;i>=0;i--){
     let temp=arr[i];
     let j=Math.floor(Math.random()*(i+1));
          arr[i]=arr[j];
          arr[j]=temp;

 }
 return arr;
}
btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="guess";
 guess.classList.toggle('hidden');
 newwords=cretewords();
randomwords=scramble(newwords.split("")).join("");

msg.innerHTML=`Guess the word:${randomwords}`;
    }
    else{
        let tempwords=guess.value;
        if(tempwords === newwords){
            play=false;
            msg.innerHTML=`Awesome🔥 It's Correct it is ${newwords}`;
            btn.innerHTML="Start Again"
            guess.classList.toggle('hidden');
            guess.value="";
        }
        else{
            msg.innerHTML=`Sorry, Not Matched,please try again ${randomwords}`;
        }
    }
})
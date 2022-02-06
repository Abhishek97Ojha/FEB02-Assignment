let counter_min=0;
let counter_id;
let counter_value = 0;
let counter_running = true;
let add=document.getElementById("plus");
let counter_min=0;
let counter_id;
let counter_value = 0;
let counter_running = true;
let add=document.getElementById("plus");
let sub=document.getElementById("minus");
document.getElementById('pause_btn').disabled = true;
document.getElementById('resume_btn').disabled = true;
document.getElementById('reset_btn').disabled = true;
document.getElementById('start_btn').disabled = true;
add.addEventListener("click", function(){
    counter_min++;
    document.getElementById('start_btn').disabled = false;
    if(counter_min < 10){
        document.getElementById('minute').innerText = "0" + counter_min;}else{
        document.getElementById('minute').innerText = counter_min;
        }
    
 });
sub.addEventListener("click", function(){
    if(counter_min > 0){
        counter_min--;
        if(counter_min < 10){
            document.getElementById('minute').innerText = "0" + counter_min;}
            else{
            document.getElementById('minute').innerText = counter_min;
            }
        }
});
function timer(){
    console.log("timer");
    if(counter_min == 0 && counter_value == 0){
        clearInterval(counter_id);
        if (counter_min<10)
        document.getElementById("minute").innerText="0"+counter_min;
        else
        document.getElementById('minute').innerText = counter_min;
        if (counter_value<10)
        document.getElementById("seconds").innerText="0"+counter_value--;
        else
        document.getElementById('seconds').innerText = counter_value;
    }
    else if(counter_value == 0){ 
        counter_value = 59;
        if (counter_min<10)
        document.getElementById("minute").innerText="0"+ --counter_min;
        else
        document.getElementById("minute").innerText= --counter_min;
        document.getElementById("seconds").innerText=counter_value;
       

    }
    else{
        if (counter_min<10)
        document.getElementById("minute").innerText="0"+counter_min;
        else
        document.getElementById('minute').innerText = counter_min;
        if (counter_value<10)
        document.getElementById("seconds").innerText="0"+counter_value--;
        else
        document.getElementById('seconds').innerText = counter_value--;

    }

};


document.getElementById('start_btn').addEventListener('click', function() {
    counter_id = setInterval(timer, 1000);
    add.disabled=true;
    sub.disabled=true;
    document.getElementById('start_btn').disabled = true;
    document.getElementById('pause_btn').disabled = false;
    document.getElementById('resume_btn').disabled = false;
    document.getElementById('reset_btn').disabled = false;
});

document.getElementById('pause_btn').addEventListener('click', function() {
    clearInterval(counter_id);
    counter_running = false;
});

document.getElementById('resume_btn').addEventListener('click', function() {
    if(counter_running == false) {
        counter_id = setInterval(timer, 1000);
    }
    counter_running = true;
});
document.getElementById('reset_btn').addEventListener('click', function() {
    
    clearInterval(counter_id);
    counter_value="0"+0;
    counter_min="0"+0;
    document.getElementById('minute').innerText = counter_min;
    document.getElementById('seconds').innerText = counter_value;
    document.getElementById('pause_btn').disabled = true;
    document.getElementById('resume_btn').disabled = true;
    document.getElementById('reset_btn').disabled = true;
    document.getElementById('start_btn').disabled = false;
    add.disabled=false;
    sub.disabled=false;

});

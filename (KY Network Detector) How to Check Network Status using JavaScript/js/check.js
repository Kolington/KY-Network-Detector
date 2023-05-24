// Selecting all required elements

const wrapper = document.querySelector(".wrapper");
const toast = wrapper.querySelector(".toast");
const wifiIcon = wrapper.querySelector(".icon");
const title = wrapper.querySelector("span");
const subTitle = wrapper.querySelector("p");
const closeIcon = wrapper.querySelector(".close-icon");

window.onload = () =>{ //once window loaded
   function ajax(){
    let xhr = new XMLHttpRequest(); //Creating new xml object
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //Sending get request to this URL
    xhr.onload = ()=>{ //Once ajax loaded
       //if ajax status is equal to 200 or less than 300 that mean user is getting data/response from that provided URL
       // or user is online so he/she is getting response or 200 status code
       if(xhr.status == 200 && xhr.status < 300){
        toast.classList.remove("offline"); 
        title.innerText = "You are Online Presently";
        subTitle.innerText = "Cheers! Internet is Connected";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onclick = ()=>{
           wrapper.classList.add("hide");
        }

        setTimeout(() => {
            wrapper.classList.add("hide");
        }, 5000); //After 5 seconds toast will be hidden automatically

       }else{ //User isn't online or may getting something other error
        offline(); //Calling offline function on both conditions
       }
    }
    xhr.onerror = ()=>{ //if the passed url is incorrect or returning 404 or other error
       offline(); //Calling offline function on both conditions
    }
    xhr.send();
   }

   function offline() { //Creating offline function
    wrapper.classList.remove("hide"); //if user goes offline the show the toast again
    toast.classList.add("offline"); 
    title.innerText = "You are Offline Presently";
    subTitle.innerText = "Damn! Internet is Disconnected";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
   }
   //Let put this ajax inside setInterval function so we can call it after every 100ms
   //so we don't need to refresh the page to see the updated status
   setInterval(() => {
    ajax(); //Calling ajax function
   }, 100); //100ms
  
}
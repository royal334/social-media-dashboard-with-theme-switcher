const radioButtons = document.querySelectorAll('.toggle__wrapper input');
const darkToggle = document.getElementById('dark');
const lightToggle = document.getElementById('light');

function setColorMode(){
     if(localStorage.getItem("colorMode") == 'dark'){
          setDarkMode(); 
          darkToggle.click();
     } 
     else{
          setLightMode();
          lightToggle.click();
     } 
}

function checkMode(){
     if(localStorage.getItem("colorMode") == null){
          if(window.matchMedia('(prefers-color-scheme: light)').matches){
               lightToggle.click();
          }
     
          else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
               darkToggle.click();
          }
     }

}

function checkModeChange(){
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
          if(event.matches){
               checkMode()
          }

     })
}

function setLightMode(){
     document.querySelector('body').classList = 'light';
}

function setDarkMode(){
     document.querySelector('body').classList = 'dark';
}

setColorMode();
checkMode();
checkModeChange();


for (let i = 0; i < radioButtons.length; i++){
     radioButtons[i].addEventListener("click", event => {
         if(darkToggle.checked ){
          localStorage.setItem('colorMode', 'dark');
          setDarkMode()
         } 
           
          else{
               localStorage.setItem('colorMode', 'light');
               setLightMode();
          }
     }
     );
}
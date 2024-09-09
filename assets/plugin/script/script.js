function InfoCricleProgressBar(){
    const info = document.querySelector('.info');

    info.querySelectorAll('.values .value').forEach(val => {

        var can = val.querySelector('#canvas'),
        spanProcent = val.querySelector('#procent'),
         c = can.getContext('2d');
   
    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * spanProcent.getAttribute('value');
    
    c.lineCap = 'round';
    arcMove();
    
    function arcMove(){
      var deegres = 0;
      var acrInterval = setInterval (function() {
        deegres += 1;
        c.clearRect( 0, 0, can.width, can.height );
        procent = deegres / oneProcent;
  
        spanProcent.innerHTML = procent.toFixed();
  
        c.beginPath();
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        c.strokeStyle = '#ffffff';
        c.lineWidth = '10';
        c.stroke();
  
        c.beginPath();
        c.strokeStyle = '#058283';
        c.lineWidth = '10';
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
        c.stroke();
        if( deegres >= result ) clearInterval(acrInterval);
      }, fps);
      
    } 
    });
}

const info = document.querySelector('.info');
var count = 0;


document.addEventListener('DOMContentLoaded',function(){
    
    //navbar fixed-top

    window.addEventListener('scroll',function(){
        const nav = document.querySelector('.navbar');
        if(window.scrollY > 50){
           nav.classList.add('fixed-top');
        }
        else{
            nav.classList.remove('fixed-top');
        }
    })

    const nav = document.querySelector('.navbar');

    nav.querySelector('.navbar-toggler').addEventListener('click',()=>{
        if(nav.classList.contains('navbar-bg-dark')){
            nav.classList.remove('navbar-bg-dark');
        }
        else{
            nav.classList.add('navbar-bg-dark');
        }
    })

    //progressbar
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= info.offsetTop - window.innerHeight + 350){
         if(count === 0){
             InfoCricleProgressBar();
             count++;
         }
        }
        if(count > 0){
         return;
        }
     })
});

    
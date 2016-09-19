
window.onload=function(){
	animate.init();
 animate.CssDongHua();
	document.ontouchmove = function(ev){
	        ev.preventDefault();
	};
    var Otouch=document.getElementsByClassName('box')[0];
    var oDiv=document.getElementsByClassName('in_all');
    
    var h=oDiv[0].offsetHeight;
    var downY = 0;
    var iNow = 0;
    var downTop=0;
    var downTime = 0;
    var bBtn = true;
    Otouch.addEventListener('touchstart', function(ev){
        var touchs = ev.changedTouches[0];
        downY = touchs.pageY;
        
        downTop = this.offsetTop;
        downTime = Date.now();
  
         
    },false);
    
Otouch.addEventListener('touchmove', function(ev){
            var touchs = ev.changedTouches[0];
            
            
            if( this.offsetTop >= 0 ){
                
                if(bBtn){
                    bBtn = false;
                    downY = touchs.pageY;
                }
                
                this.style.top = (touchs.pageY - downY)/3 + 'px';
                
            }
            else if( this.offsetLeft <= oDiv.offsetHeight - Otouch.offsetHeight ){
                
                if(bBtn){
                    bBtn = false;
                    downY = touchs.pageY;
                }
                
                this.style.top = (touchs.pageY - downY)/3 + ( oDiv.offsetWidth - Otouch.offsetWidth ) + 'px';
                
            }
            else{
                this.style.top = touchs.pageY - downY + downTop + 'px';
            }
            animate.remove_();
        },false);

    Otouch.addEventListener('touchend', function(ev){
            
            var touchs = ev.changedTouches[0];
            
            if( touchs.pageY < downY ){   
                
                if(iNow < oDiv.length-1){
                    if( downY - touchs.pageY > oDiv[0].offsetHeight/3 || (Date.now() - downTime < 300 && downY - touchs.pageY > 30 ) ){
                        iNow++;
                    }
                }
                
                startMove( Otouch , { top : - iNow * h } , 400 , 'easeOut' );
            
            }
            else{    
            
                if(iNow > 0){
                    if( touchs.pageY - downY > oDiv[0].offsetHeight/3 || (Date.now() - downTime < 300 && touchs.pageY - downY > 30 ) ){
                        iNow--;
                    }
                }
                
                startMove( Otouch , { top : - iNow * h } , 400 , 'easeOut' );
            
            }
            animate.add_move();
            console.log(iNow);
            this.ontouchmove = null;
            this.ontouchend = null;
        },false);
};

// Import stylesheets
import './style.css';
import './jcrop.css';
// Write Javascript code!
import {hello} from './jcrop.js';


window.preview = function(){
  var file = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      document.getElementById("target").src = reader.result;
    }
  }
}



let Jcrop = hello();




var jcp;
      Jcrop.load('target').then(img => {
        jcp = Jcrop.attach(img,{multi:true});
        const rect = Jcrop.Rect.sizeOf(jcp.el);
        jcp.newWidget(rect.scale(.7,.5).center(rect.w, rect.h));
        jcp.focus();
        jcp.setOptions({shadeOpacity:0.4});

        //jcp.listen('crop.update',(widget,e) => {         //crop.activate	 --Active widget has changed       
        //console.log(widget.pos);                         //crop.update	   --Widget dragging or resizing (frequent!)
        //console.log(pos.x,pos.y,pos.w,pos.h);
        //});                                              //crop.change	   --Widget dragging or resizing finished
      });                                                  //crop.remove	   --Widget removed from stage

   

      function rcoord() {
        const w = jcp.el.offsetWidth;
        const h = jcp.el.offsetHeight;
        return [Math.round(Math.random()*w), Math.round(Math.random()*h)];
      }

      function rrect() {
        return Jcrop.Rect.fromCoords(rcoord(),rcoord());
      }

        

    

     window.xxx = function(value){
         
        if (!jcp){
            console.log("error");
            }else{
        jcp.setOptions({shadeOpacity:value});}
      }

     
      window.log = function(){
        if (!jcp){
            console.log("error");
            }else{
        console.log(jcp.active.pos);}
      }
        
      window.rect = function(){
        if (jcp){
            const rect = Jcrop.Rect.create(0,0,50,50);
             const options = {};
             jcp.newWidget(rect,options);}
       }

       window.remove = function(){
         if (jcp){
            jcp.removeWidget(jcp.active);}
       }
      


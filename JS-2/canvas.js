/* 
Part 2:

Draw Line: Will draw a line from starting x cordinates to ending y cordinaties
Draw Circle: Will draw circle from the center to the radius of pi given.
Draw Rest: Will draw a rectriangle from the top left x,y coridinates to it's width and height 
Draw Text: Will display the the Text written in the box with an alignment.
Clear: Will remove anything in the 500 by 500 white space 
Montage: Will display some sype off an montage in the 500 by 500 white space 
Pattern: Will display a spefice pattern with box's into the 500 by 500 blacnk space

*/
"use strict";
var window; //For JSLint 
var document; 

 "use strict"; var document; var window;
      
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      
      function getXYcoordinates(event) {
        return [ event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft - canvas.offsetLef, event.clientY + document.body.scrollTop +document.documentElement.scrollTop - canvas.offsetTop ];
      }

      // Draws A line

      function drawline() {
        var xStart = Number(document.getElementById("xStart").value);
        var yStart = Number(document.getElementById("yStart").value);
        var xEnd =  Number(document.getElementById("xEnd").value);
        var yEnd = Number(document.getElementById("yEnd").value);
        
        context.lineWidth = parseInt(document.getElementById("lineWidth").value, 10);
        context.strokeStyle = document.getElementById("colour").value;
        
        context.beginPath();

        context.moveTo(xStart,yStart);   
        context.lineTo(xEnd, yEnd);      
        
        context.stroke();    
      }
      var startCoord = true; 
      
      function getPosition(event) {
      var xy = getXYcoordinates(event);  
      if (startCoord) {
        document.getElementById("xStart").value = xy[0];
        document.getElementById("yStart").value = xy[1];
        startCoord = false;
      }
  
      else {
        document.getElementById("xEnd").value = xy[0];
        document.getElementById("yEnd").value = xy[1];
        startCoord = true;
      }
    }

    // Draws a Circle

      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
       function getXYcoordinates(event) {
        return [ event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft - canvas.offsetLef, event.clientY + document.body.scrollTop +document.documentElement.scrollTop - canvas.offsetTop ];
      }
       function drawCircle() {
        var xStart = Number(document.getElementById("xStart").value);
        var yStart = Number(document.getElementById("yStart").value);
        var rstart = Number(document.getElementById("rStart").value);
        var xEnd =  Number(document.getElementById("xEnd").value);
        var yEnd = Number(document.getElementById("yEnd").value);
        var rEnd = Number(document.getElementById("rEnd").value);
      } 

      ctx.arc ((xEnd, yEnd, rEnd )*Math.PI);
      ctx.stroke();
      
      context.lineWidth = parseInt(document.getElementById("lineWidth").value, 10);
      context.strokeStyle = document.getElementById("colour").value;

      function getPosition(event) {
      var xy = getXYcoordinates(event);  
      if (startCoord) {
        document.getElementById("xStart").value = xy[0];
        document.getElementById("yStart").value = xy[1];
        startCoord = false;
      }
  
      else {
        document.getElementById("xEnd").value = xy[0];
        document.getElementById("yEnd").value = xy[1];
        startCoord = true;
      }
    }

    //Draws a Rectrangle 

    var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
       function getXYcoordinates(event) {
        return [ event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft - canvas.offsetLef, event.clientY + document.body.scrollTop +document.documentElement.scrollTop - canvas.offsetTop ];
      }
       function drawRect() {
        var xtopleft = Number(document.getElementById("xtopleft").value);
        var ytopleft = Number(document.getElementById("ytopleft").value);
        var rectwidth = Number(document.getElementById("rectwidth").value);
        var rectheight =  Number(document.getElementById("rectheight").value);
       
       ctx.rect (xtopleft, ytopleft, rectheight, rectwidth);
       ctx.stroke ();
      
       function getPosition(event) {
      var xy = getXYcoordinates(event);  
      if (startCoord) {
        document.getElementById("xStart").value = xy[0];
        document.getElementById("yStart").value = xy[1];
        startCoord = false;
      }
  
      else {
        document.getElementById("xEnd").value = xy[0];
        document.getElementById("yEnd").value = xy[1];
        startCoord = true;
}
    
      // Outputs Text

        var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
       function getXYcoordinates(event) {
        return [ event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft - canvas.offsetLef, event.clientY + document.body.scrollTop +document.documentElement.scrollTop - canvas.offsetTop ];
      } 


       function drawText() {
        var xbotleft = Number(document.getElementById("xbotleft").value);
        var ybotleft = Number(document.getElementById("ybotleft").value);

      ctx.font = "30px Arial";
      ctx.fillText(xbotleft, ytopleft);

      function getPosition(event) {
      var xy = getXYcoordinates(event);  
      if (startCoord) {
        document.getElementById("xStart").value = xy[0];
        document.getElementById("yStart").value = xy[1];
        startCoord = false;
      }
  
      else {
        document.getElementById("xEnd").value = xy[0];
        document.getElementById("yEnd").value = xy[1];
        startCoord = true;
}


      



}

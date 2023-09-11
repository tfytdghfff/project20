var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("Audio");

function new_image()
{
	fabric.Image.fromURL('bday.jpg' , function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top : 0,
            left : 0
    });
canvas.add(block_image_object);
    });
}

function Sound()
{
  x.play();	
}

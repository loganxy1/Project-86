const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

player_object = "";
block = "";

function player_upadte(){
    fabric.Image.fromURL("", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        block = Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top: player_y, left: player_x
        });
        canvas.add(block);
    });
}
$(document).ready(function(){
	$("#imageGallery").imagePopup({
    //overlay: "rgba(0, 100, 0, 0.5)"

    closeButton:{
        src: "images/close.png",
        width: "40px",
        height:"40px"
    },
    imageBorder: "15px solid #ffffff",
    borderRadius: "10px",
    imageWidth: "500px",
    imageHeight: "400px",
    imageCaption: {
        exist: true,
        color: "#ffffff",
        fontSize: "40px"
    },
    open: function(){
        console.log("opened");
    },
    close: function(){
        console.log("closed");
    }
});

});

$("#imageGallery").imagePopup({
	open: function(){
        //do something
    },
    close: function(){
        //do something
    },
}); 
var xmlHttp = new XMLHttpRequest();
var numberOfColumns = 4;
var htmlCode = "";
var response;


$(document).ready(function(){
    var send = "scripts/hook.php";
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState = 4){
            response = xmlHttp.responseText.split("~");
            htmlCode += '<tr>';
            for(var i=0; i<response.length;i++){
                htmlCode+='<td  id="gallery_cell">';
                htmlCode+='<a href ="' + 'images/gallery/' + response[i] + '">';
                htmlCode+='<img src="images/gallery' + response[i] + '"id=image_thumnail"/>';
                htmlCode+='</a>';
                htmlCode+='</td>';
                if(((i+1)%numberOfColumns) ==0){
                    htmlCode+='</tr><tr>';
                }
            }
            htmlCode+='</tr>';
            document.getElementById('gallery').innerHTML = htmlCode;
        }
        
    }

});
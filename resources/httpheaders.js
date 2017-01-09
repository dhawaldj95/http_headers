$(document).ready(function(){

  $("#btn1").click(function(){
    var catch_url;
    catch_url = $("#url").val();

    var client = new XMLHttpRequest();
    client.open("GET", catch_url, true);
    client.send();
    client.onreadystatechange = function() {
    if(this.readyState == this.HEADERS_RECEIVED) {
    console.log(client.getResponseHeader("Content-Type"));
    $("#output").append(client.getResponseHeader("Content-Type"));
        }
      }
  });
});


                                  
  
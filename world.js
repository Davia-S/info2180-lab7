document.getElementById('lookup').onclick = doSomething;

var httpRequest = new XMLHttpRequest();
var url = "world.php";

httpRequest.onreadystatechange = doSomething;
httpRequest.open('GET', url);
httpRequest.send();

function doSomething(){
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200)
    {
        var response = httpRequest.responseText;
        $(".result").html(response);
    }
}
var val = document.getElementById("country").value;

var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = doSomething;

function doSomething(){
    if (httpRequest.readyState === 4 && httpRequest.status === 200)
    {
        var response = httpRequest.responseText;
        document.getElementById("result").innerHTML = response;
    }
}

if (document.getElementById('allChkBox').checked)
{
    var url = "world.php?all=true";
}
else
{
    var url = "world.php?country="+val;
}

httpRequest.open('GET', url, true);
httpRequest.send();
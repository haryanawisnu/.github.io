var hasil="";

function onbalon(){
	document.getElementById('myImage').src='pic_bulbon.gif';
}
function ofbalon(){
	document.getElementById('myImage').src='pic_bulboff.gif';
}
function fmenang() {
	hasil=document.getElementById('b').value;
    window.location.href = "layout1.html?menang";
}
function load1(){
	var temp=document.URL;
	var index=temp.indexOf("?");
	temp=temp.slice(index+1);
	document.getElementById('write').innerHTML = temp;
}
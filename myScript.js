var name="";
var status="";
var step=0;
var action="";
var point1=0;
var point2=0;
var putaran=0;
var Ahuman=["batu","batu","kertas","kertas","gunting","gunting"];
var Aking=["kertas","gunting","batu","gunting","batu","kertas"];
var Ahasil=["kalah","menang","menang","kalah","kalah","menang"];
var chat=function(name,address) {
  this.name   = name;
  this.address    = address;
  this.say="";
  this.askaddress= function(name) {
	  this.say=name+" dimana kau tinggal ?";
	  document.getElementById('kingsay').innerHTML = this.say;
	  document.getElementById("answer").style.visibility = "visible";
  };
  this.talkaddress   = function(address) {
	  this.say="Owh kau dari "+address+", Kalau aku dari "+this.address+".";
	  document.getElementById('kingsay').innerHTML = this.say;
	  document.getElementById('answer').value="";
	  document.getElementById("answer").style.visibility = "hidden";
  };
  this.askready=function(name){
	  this.say=name+" kau sudah siap bermain denganku ?";
	  document.getElementById('kingsay').innerHTML = this.say;
	  document.getElementById("answer").style.visibility = "visible";
  };
  this.talkready=function(act){
	  this.say=act+" katamu ?, Besar sekali semangat kamu, ayoo bermain..";
	  document.getElementById('kingsay').innerHTML = this.say;
	  document.getElementById("answer").style.visibility = "hidden";
	  document.getElementById('answer').value="";
  };
  this.talksame=function(args){
	  document.getElementById("next").style.visibility = "visible";
	  document.getElementById('instruksi').innerHTML="Imbang!!";
	  document.getElementById("tjurusraja").innerHTML= args.toUpperCase();;
	  document.getElementById("jurusraja").className = "fa fa-check";
	  this.say="Kau beruntung.";
	  document.getElementById('kingsay').innerHTML = this.say;
	  document.getElementById('king').src="images/king-same.png";
  };
  this.talklose=function(args){
	  document.getElementById("next").style.visibility = "visible";
	  document.getElementById('instruksi').innerHTML="Kamu Menang!!";
	  document.getElementById("tjurusraja").innerHTML= args.toUpperCase();;
	  document.getElementById("jurusraja").className = "fa fa-check";
	  this.say="Haha kau hebat juga.";
	  document.getElementById('kingsay').innerHTML = this.say;
	  document.getElementById('king').src="images/king-lose.png";
  };
  this.talkwin=function(args){
	  document.getElementById("next").style.visibility = "visible";
	  document.getElementById('instruksi').innerHTML="King Menang!!";
	  document.getElementById("tjurusraja").innerHTML= args.toUpperCase();;
	  document.getElementById("jurusraja").className = "fa fa-check";
	  this.say="Kau merasakan kekuatanku?.";
	  document.getElementById('kingsay').innerHTML = this.say;
	  document.getElementById('king').src="images/king-win.png";
  };
};
var raja = new chat("Raja Suit","Kerajaan Leudokinian" );

function gameon(action){
		var human=action;
		var king=actraja();
		console.log("h : "+human);
		console.log("k : "+king);
		if(human===king){
			raja.talksame(king);
			status="sama";
			console.log("r : same");
		}else{
			console.log(checkmatch(human,king));
			if(checkmatch(human,king)==="menang"){
				raja.talklose(king);
				point1++;
				point2++;
				status="menang";
				console.log("r : menang");
			}else{
				point1++;
				raja.talkwin(king);
				status="kalah";
				console.log("r : kalah");
			}
		}	
		putaran++;
		if(point1==3){
			if(point2>=2){
				document.getElementById('instruksi').innerHTML="Selamat "+name+" menang ^_^";
				document.getElementById('kingsay').innerHTML="Lihat Score...";
			}else{
				document.getElementById('instruksi').innerHTML=name+" kalah kuy!";
				document.getElementById('kingsay').innerHTML="Lihat Score...";
			}
		}
}
function Iname() {
	var temp=document.getElementById('username').value;
    window.location.href = "layout1.html?"+temp;
}
function play() {
    window.location.href = "layout2.html?"+name;
}
function load1(){
	var temp=document.URL;
	var index=temp.indexOf("?");
	name=temp.slice(index+1);
	temp="Hallo "+name+"!!";
	document.getElementById('tsapa').innerHTML = temp;
}
function load2(){
	var temp=document.URL;
	var index=temp.indexOf("?");
	name=temp.slice(index+1);
	temp="Hey "+name+", Perkenalkan aku adalah Raja Suit.";
	document.getElementById('instruksi').innerHTML="Berbincang dengan raja...";
	document.getElementById("answer").style.visibility = "hidden";
	document.getElementById('kingsay').innerHTML = temp;
	status="awal";
}
function load3(){
	var temp=document.URL;
	var index=temp.indexOf("?");
	name=temp.slice(index+1);
	var inam = name.indexOf("nam");
    var ipt = name.indexOf(",pt");
    var ipo = name.indexOf(",po");
    var nama =name.slice(inam+4,ipt);
    var putaran =name.slice(ipt+4,ipo);
    var point=name.slice(ipo+4);
    var kalah =3-point;
    console.log(nama);
    console.log(putaran);
    console.log(point);
    console.log(kalah);
	document.getElementById('tscore').innerHTML = nama.toUpperCase()+" SCORE.";
	document.getElementById("fputaran").textContent=putaran;
	document.getElementById("fmenang").textContent=point;
	document.getElementById("fkalah").textContent=kalah;
}
function next(){
	if(step==0){
		raja.askaddress(name);
	}else if(step==1){
		raja.talkaddress(document.getElementById('answer').value);
	}else if(step==2){
		raja.askready(name);
	}else if(step==3){
		raja.talkready(document.getElementById('answer').value);
	}else if(step==4){
		document.getElementById("next").style.visibility = "hidden";
		document.getElementById('instruksi').innerHTML="Pilih jurus!!";
		document.getElementById('kingsay').innerHTML="";
		document.getElementById('king').src="images/king-wait.png";
		status="on";
	}else if(step==5){
		if(status=="sama"){
			step--;
			clearSame();
		}else{
			clear(status);
		}
	}else if(step==6){
		if(status=="sama"){
			step--;
			clearSame();
		}else{
			clear(status);
		}
	}else if(step==7){
		window.location.href = "layout3.html?nam="+name+",pt="+putaran+",po="+point2;
	}
	step++;
}
function batuon(){
	if(status=="awal"||status=="menang"||status=="kalah"||status=="same"){
	}else{
		document.getElementById("batu").className += " fa-check";
		document.getElementById("jurusraja").className += " fa-spin fa-spinner";
		action="batu";
		setTimeout(function() {
			gameon(action);
		}, 1000);
	}
}
function guntingon(){
	if(status=="awal"||status=="menang"||status=="kalah"||status=="same"){
	}else{
		document.getElementById("gunting").className += " fa-check";
		document.getElementById("jurusraja").className += " fa-spin fa-spinner";
		action="gunting";
		setTimeout(function() {
			gameon(action);
		}, 1000);
	}
}
function kertason(){
	if(status=="awal"||status=="menang"||status=="kalah"||status=="same"){
	}else{
		document.getElementById("kertas").className += " fa-check";
		document.getElementById("jurusraja").className += " fa-spin fa-spinner";
		action="kertas";
		setTimeout(function() {
			gameon(action);
		}, 1000);
	}
}
function actraja(){
	var x = Math.floor((Math.random() * 3) + 1);
	var temp;
	if(x==1){
		temp="batu";
		return temp;
	}else if(x==2){
		temp="gunting";
		return temp;
	}else if(x==3){
		temp="kertas";
		return temp;
	}
}
function clearSame(){
	document.getElementById("next").style.visibility = "hidden";
	document.getElementById('kingsay').innerHTML="";
	document.getElementById('tjurusraja').innerHTML="";
	document.getElementById("kertas").className= "fa";
	document.getElementById("gunting").className= "fa";
	document.getElementById("batu").className= "fa";
	document.getElementById("jurusraja").className = "fa";
	document.getElementById('instruksi').innerHTML="Hasil sama,Pilih jurus lagi!!";
	document.getElementById('king').src="images/king-wait.png";
	status="on";
}
function clear(args){
	document.getElementById("next").style.visibility = "hidden";
	document.getElementById('kingsay').innerHTML="";
	document.getElementById('tjurusraja').innerHTML="";
	document.getElementById("kertas").className= "fa";
	document.getElementById("gunting").className= "fa";
	document.getElementById("batu").className= "fa";
	document.getElementById("jurusraja").className = "fa";
	document.getElementById('instruksi').innerHTML="Anda "+args+", Pilih jurus lagi!!";
	document.getElementById('king').src="images/king-wait.png";
	status="on";
}
function checkmatch(human,king){
	var temp="";
	for(var index=0;index<Ahuman.length;index++){
		if(human===Ahuman[index]&&king===Aking[index]){
			temp=Ahasil[index];
		}
	}
	return temp;
}

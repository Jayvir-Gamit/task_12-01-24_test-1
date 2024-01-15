// LOGIN
function openloginbar() {
    document.querySelector('.sidebar').style.transition = "transform 1s, width 1s, height 1s";
    document.querySelector('.sidebar').style.transform = "scale(1)";
    document.querySelector('.sidebar').style.width = "300px";
    document.querySelector('.sidebar').style.height = "100vh";
}
function hideloginbar() {
    document.querySelector('.sidebar').style.transition = "transform 1s, width 1s, height 1s";
    document.querySelector('.sidebar').style.transform = "scale(0)";
    document.querySelector('.sidebar').style.width = "0px";
    document.querySelector('.sidebar').style.height = "0px";
	document.querySelector('.demo').innerHTML = "";
}
function loginsubmit() {
    console.log("clicked")
    let var1 = document.querySelector('.emailclass').value;
    let var2 = document.querySelector('.pwclass').value;
    let var1int = parseInt(var1.length)
    let var2int = parseInt(var2.length)
    console.log(var1int)
    console.log(typeof var1int)
    console.log(var2int)
    console.log(typeof var2int)
    if (var1int < 13 || var2int < 8) {
        document.querySelector('.demo').innerHTML = "Please fill all the details";
        document.querySelector('.demo').style.color = "red";
        document.querySelector('.demo').style.fontFamily = "system-ui";
    }
    else {
        document.querySelector('.demo').innerHTML = "You are successfully logged in";
        document.querySelector('.demo').style.color = "green";
        document.querySelector('.demo').style.fontFamily = "system-ui";
    }
}

// Co-Header
var drop1=document.querySelector(".drop1").style;
var drop2=document.querySelector(".drop2").style;
var drop3=document.querySelector(".drop3").style;
var drop4=document.querySelector(".drop4").style;
var drop5=document.querySelector(".drop5").style;
function show1() {
	if (drop1.display=="block") {
		drop1.display= "none";
	}
	else{
        drop1.display= "block";
        drop2.display= "none";
        drop3.display= "none";
        drop4.display= "none";
        drop5.display= "none";
	}
}
function show2() {
	if (drop2.display=="block") {
		drop2.display= "none";
	}
	else{
		drop2.display= "block";
        drop1.display= "none";
        drop3.display= "none";
        drop4.display= "none";
        drop5.display= "none";
	}
}
function show3() {
	if (drop3.display=="block") {
		drop3.display= "none";
	}
	else{
		drop3.display= "block";
        drop1.display= "none";
        drop2.display= "none";
        drop4.display= "none";
        drop5.display= "none";
	}
}
function show4() {
	if (drop4.display=="block") {
		drop4.display= "none";
	}
	else{
		drop4.display= "block";
        drop1.display= "none";
        drop2.display= "none";
        drop3.display= "none";
        drop5.display= "none";
	}
}
function show5() {
	if (drop5.display=="block") {
		drop5.display= "none";
	}
	else{
		drop5.display= "block";
        drop1.display= "none";
        drop2.display= "none";
        drop3.display= "none";
        drop4.display= "none";
	}
}

// Slider
const images = document.querySelectorAll(".imgcont img")
let i = 0;
let j = images.length;

function nextbtn(){
	document.getElementById("image" + (i+1)).classList.remove("active");
	i = ((j + i) + 1) % j;
	document.getElementById("image" + (i+1)).classList.add("active");
}

function prebtn(){
	document.getElementById("image" + (i+1)).classList.remove("active");
	i = ((j + i) - 1) % j;
	document.getElementById("image" + (i+1)).classList.add("active");
}

// Button image Switch
function home() {
    document.getElementById('image4').classList.add('active');
    document.getElementById('image5').classList.remove('active');
    document.getElementById('image6').classList.remove('active');
}
function service() {
    document.getElementById('image4').classList.remove('active');
    document.getElementById('image5').classList.add('active');
    document.getElementById('image6').classList.remove('active');
}
function contact() {
    document.getElementById('image4').classList.remove('active');
    document.getElementById('image5').classList.remove('active');
    document.getElementById('image6').classList.add('active');
}

// Food Container
function coffee() {
    document.getElementById('box1').classList.add('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.remove('active');
}
function drink() {
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.add('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.remove('active');
}
function fastfood() {
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.add('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.remove('active');
}
function tea() {
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.add('active');
    document.getElementById('box5').classList.remove('active');
}
function allItems() {
    console.log("clicked")
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.remove('active');
    document.getElementById('box3').classList.remove('active');
    document.getElementById('box4').classList.remove('active');
    document.getElementById('box5').classList.add('active');
}

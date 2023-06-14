<div class="slideshow-container">

<div class="mySlides fade">
    <div class="numbertext">
        1 / 1
    </div>
    <img src="./assets/istockphoto-1161155723-612x612.jpg" style="width: 100%;">
    <div class="text">caption text</div>
</div>


<div class="mySlides fade">
    <div class="numbertext">
        1 / 2
    </div>
    <img src="./assets/istockphoto-1161155723-612x612.jpg" style="width: 100%;">
    <div class="text">caption text</div>
</div>


<div class="mySlides fade">
    <div class="numbertext">
        1 / 3
    </div>
    <img src="./assets/istockphoto-1161155723-612x612.jpg" style="width: 100%;">
    <div class="text">caption text</div>
</div>
</div>
<br>
<div style="text-align: center">
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
</div>











*{
     box-sizing: border-box;
}
body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.mySlides{
    display: none;
}
img{
     vertical-align: middle;
}
/* ---   Slideshow container----- */
.slideshow-container{
    max-width: 1000px;
    /* position: relative; */
    margin: auto;
}
 /* -----caption text----- */
 text{
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
 }

/* ---------number text (1/3 etc)-------- */

.numbertext{
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}


/* ----------the dots/ bullets/indicator--------- */
.dot{
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active{
    background-color: #717171;
}

/* ----fading animation---- */

.fade{
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade{
    from{opacity: .4}
    to{opacity: 1;}
}







<script>
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length)
    {slideIndex = 1}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    setTimeout(showSlides, 3000);
}

</script>

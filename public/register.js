function myFunction() {
  if (document.getElementById("my-checkbox").checked) {
    document.getElementById('bar1').style.transform = 'rotate(0deg)';
    document.getElementById('bar1').style.top = '20px';
    document.getElementById('bar1').style.left = '20px';
    document.getElementById('bar2').style.transform = 'rotate(0deg)';
    document.getElementById('bar2').style.top = '30px';
    document.getElementById('bar2').style.left = '20px';
    document.getElementById('navitems').style.left = '-500%';
    document.getElementById('bar1').style.backgroundColor = 'black';
    document.getElementById('bar2').style.backgroundColor = 'black';
    document.getElementById('cart').style.opacity = '1';
    document.getElementById('cart').style.transition = '0.1s ';


  } else {

    document.getElementById('bar1').style.transform = 'rotate(45deg)';
    document.getElementById('bar1').style.top = '22px';
    document.getElementById('bar1').style.left = '20px';
    document.getElementById('bar1').style.backgroundColor = 'white';
    document.getElementById('bar2').style.transform = 'rotate(-45deg)';
    document.getElementById('bar2').style.backgroundColor = 'white';
    document.getElementById('bar2').style.top = '22px';
    document.getElementById('bar2').style.left = '20px';
    document.getElementById('navitems').style.left = '0';

    document.getElementById('navitems').style.transition = 'all 0.3s ease';

    document.getElementById('cart').style.transition = '0.8s ';
    document.getElementById('cart').style.opacity = '0';
  }
}


function myfunction2() {
  if (document.getElementById("checkbox2").checked) {
    document.getElementById("upcome").style.top = "290px";
    document.getElementById("past").style.top = "345px";
    document.getElementById("trek").style.top = "395px";
    document.getElementById("community").style.top = "445px";
    document.getElementById("find").style.top = "500px";
    document.getElementById("pedalsitems").style.visibility = "hidden";
  } else {
    document.getElementById("upcome").style.top = "450px";
    document.getElementById("past").style.top = "500px";
    document.getElementById("trek").style.top = "550px";
    document.getElementById("community").style.top = "600px";
    document.getElementById("find").style.top = "650px";
    document.getElementById("pedalsitems").style.backgroundColor = "pink";
    document.getElementById("pedalsitems").style.top = "300px";
    document.getElementById("pedalsitems").style.left = "0px";
    document.getElementById("pedalsitems").style.width = "100%";
    document.getElementById("pedalsitems").style.visibility = "visible";
  }
}



function myfunction3() {

  if (document.getElementById("checkbox3").checked) {


    document.getElementById("past").style.top = "345px";
    document.getElementById("trek").style.top = "395px";
    document.getElementById("community").style.top = "450px";
    document.getElementById("find").style.top = "500px";
    document.getElementById("upcomingitems").style.visibility = "hidden";
  } else {


    if (document.getElementById("checkbox2").checked) {

      document.getElementById("upcome").style.top = "290px";
      document.getElementById("past").style.top = "345px";
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "445px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("pedalsitems").style.visibility = "hidden";
    }

    document.getElementById("past").style.top = "400px";
    document.getElementById("trek").style.top = "450px";
    document.getElementById("community").style.top = "500px";
    document.getElementById("find").style.top = "550px";
    document.getElementById("upcomingitems").style.backgroundColor = "pink";
    document.getElementById("upcomingitems").style.top = "330px";
    document.getElementById("upcomingitems").style.left = "0px";
    document.getElementById("upcomingitems").style.width = "100%";
    document.getElementById("upcomingitems").style.visibility = "visible";
  }
}


function myfunction4() {
  if (document.getElementById("checkbox4").checked) {
    document.getElementById("trek").style.top = "395px";
    document.getElementById("community").style.top = "445px";
    document.getElementById("find").style.top = "500px";
    document.getElementById("pastitems").style.visibility = "hidden";
  } else {

    if (document.getElementById("checkbox3").checked) {
      document.getElementById("past").style.top = "345px";
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "450px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("upcomingitems").style.visibility = "hidden";
    } else if (document.getElementById("checkbox2").checked) {
      document.getElementById("upcome").style.top = "290px";
      document.getElementById("past").style.top = "345px";
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "445px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("pedalsitems").style.visibility = "hidden";
    }

    document.getElementById("trek").style.top = "860px";
    document.getElementById("community").style.top = "900px";
    document.getElementById("find").style.top = "950px";
    document.getElementById("pastitems").style.backgroundColor = "pink";
    document.getElementById("pastitems").style.top = "395px";
    document.getElementById("pastitems").style.left = "0px";
    document.getElementById("pastitems").style.width = "100%";
    document.getElementById("pastitems").style.visibility = "visible";
  }
}

function myfunction5() {
  if (document.getElementById("checkbox5").checked) {
    document.getElementById("community").style.top = "445px";
    document.getElementById("find").style.top = "500px";
    document.getElementById("treksitems").style.visibility = "hidden";
  } else {
    if (document.getElementById("checkbox4").checked) {
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "445px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("pastitems").style.visibility = "hidden";
    }


    if (document.getElementById("checkbox3").checked) {
      document.getElementById("past").style.top = "345px";
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "450px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("upcomingitems").style.visibility = "hidden";
    }

    if (document.getElementById("checkbox2").checked) {
      document.getElementById("upcome").style.top = "290px";
      document.getElementById("past").style.top = "345px";
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "445px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("pedalsitems").style.visibility = "hidden";
    }

    document.getElementById("community").style.top = "800px";
    document.getElementById("find").style.top = "850px";
    document.getElementById("treksitems").style.backgroundColor = "pink";
    document.getElementById("treksitems").style.top = "430px";
    document.getElementById("treksitems").style.left = "0px";
    document.getElementById("treksitems").style.width = "100%";
    document.getElementById("treksitems").style.visibility = "visible";
  }
}


function myfunction6() {
  if (document.getElementById("checkbox6").checked) {
    document.getElementById("find").style.top = "500px";
    document.getElementById("joinusbtn").style.visibility = "hidden";
  } else {

    if (document.getElementById("checkbox5").checked) {

      document.getElementById("community").style.top = "445px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("treksitems").style.visibility = "hidden";
    }


    if (document.getElementById("checkbox2").checked) {
      document.getElementById("upcome").style.top = "290px";
      document.getElementById("past").style.top = "345px";
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "445px";
      document.getElementById("find").style.top = "500px";
      document.getElementById("pedalsitems").style.visibility = "hidden";
    }


    if (document.getElementById("checkbox3").checked) {
      document.getElementById("past").style.top = "345px";
      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "450px";
      document.getElementById("find").style.top = "500px";
      // console.log("not checked")
      document.getElementById("upcomingitems").style.visibility = "hidden";


    }



    if (document.getElementById("checkbox4").checked) {

      document.getElementById("trek").style.top = "395px";
      document.getElementById("community").style.top = "445px";
      document.getElementById("find").style.top = "500px";
      // console.log("not checked")
      document.getElementById("pastitems").style.visibility = "hidden";

    }





    document.getElementById("find").style.top = "550px";
    // console.log("checked now");
    document.getElementById("joinusbtn").style.backgroundColor = "pink";
    document.getElementById("joinusbtn").style.top = "480px";
    document.getElementById("joinusbtn").style.left = "0px";
    document.getElementById("joinusbtn").style.width = "100%";
    document.getElementById("joinusbtn").style.visibility = "visible";
  }
}


function onChangePrice() {
  var prizePrice = document.getElementById("prize-category").value;
  document.getElementById("actual-price").innerHTML = prizePrice;
}


function disPri() {
  var pri = document.getElementById("prize-category").value;
  var dis = document.getElementById("cyc-dis").value;
  localStorage.setItem("PRICE", pri);
  localStorage.setItem("DISTANCE", dis);
  return;
}

document.getElementById("cart-price").innerHTML = localStorage.getItem("PRICE");

document.getElementById("cart-dis").innerHTML = localStorage.getItem("DISTANCE");







let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



document.getElementById("cartprice").innerHTML = localStorage.getItem("PRICE");

document.getElementById("cartdis").innerHTML = localStorage.getItem("DISTANCE");

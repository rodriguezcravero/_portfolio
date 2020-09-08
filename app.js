let textoBio1 = document.querySelector(".textoBio1");
let textoBio2 = document.querySelector(".textoBio2");
let textoBio3 = document.querySelector(".textoBio3");

let descargaCV = document.querySelector(".descargaCV");

descargaCV.addEventListener("click", descargar);

function descargar() {
  var link = document.createElement("a");
  link.href = url;
  link.download =
    "https://cdn.cienradios.com/wp-content/uploads/sites/3/2019/12/Screenshot_1-5-322x400.jpg";
  link.dispatchEvent(new MouseEvent("click"));
}

let puntosSuspensivos1 = document.querySelector(".puntosSuspensivos1");
let puntosSuspensivos2 = document.querySelector(".puntosSuspensivos2");

setInterval(() => {
  setTimeout(() => (puntosSuspensivos1.innerHTML = ""), 500);
  setTimeout(() => (puntosSuspensivos2.innerHTML = ""), 500);
  setTimeout(() => (puntosSuspensivos1.innerHTML = "."), 1000);
  setTimeout(() => (puntosSuspensivos2.innerHTML = "."), 1000);
  setTimeout(() => (puntosSuspensivos1.innerHTML = ".."), 1500);
  setTimeout(() => (puntosSuspensivos2.innerHTML = ".."), 1500);
  setTimeout(() => (puntosSuspensivos1.innerHTML = "..."), 2000);
  setTimeout(() => (puntosSuspensivos2.innerHTML = "..."), 2000);
}, 4000);

let bio1 = "Estudiante de informática";
let bio2 = "UNLP - 2º año";
let bio3 = "Experiencia: experto";
let junior = "junior.....";
let trainee = "traineè";
let num = 0;
let str1 = "";

let boo1 = true,
  boo2 = false,
  boo3 = false,
  boo4 = false,
  boo5 = false,
  boo6 = false,
  boo7 = false,
  booAux = false;

let intervalo = setInterval(() => {
  if (boo1) {
    if (num < bio1.length) {
      str1 += bio1[num++];
      textoBio1.innerHTML = str1;
    } else {
      boo1 = false;
      boo2 = true;
      num = 0;
      str1 = "";
    }
  }
  if (boo2) {
    if (num < bio2.length) {
      str1 += bio2[num++];
      textoBio2.innerHTML = str1;
    } else {
      boo2 = false;
      boo3 = true;
      num = 0;
      str1 = "";
    }
  }
  if (boo3) {
    if (num < bio3.length) {
      str1 += bio3[num++];
      textoBio3.innerHTML = str1;
    } else {
      boo3 = false;
      boo4 = true;
      num = 0;
    }
  }
  if (boo4) {
    if (num < 7) {
      str1 = str1.substring(0, str1.length - 1);
      num++;
      textoBio3.innerHTML = str1;
    } else {
      boo4 = false;
      boo5 = true;
      num = 0;
    }
  }
  if (boo5) {
    if (num < junior.length) {
      str1 += junior[num++];
      textoBio3.innerHTML = str1;
    } else {
      boo5 = false;
      boo6 = true;
      num = 0;
    }
  }
  if (boo6) {
    if (num < junior.length) {
      str1 = str1.substring(0, str1.length - 1);
      num++;
      textoBio3.innerHTML = str1;
    } else {
      boo6 = false;
      boo7 = true;
      num = 0;
    }
  }
  if (boo7) {
    if (num < trainee.length) {
      str1 += trainee[num++];
      textoBio3.innerHTML = str1;
    } else {
      booAux = true;
    }
  }
  if (booAux) {
    textoBio3.innerHTML = "Experiencia: traineé";
    clearInterval(intervalo);
  }
}, 100);

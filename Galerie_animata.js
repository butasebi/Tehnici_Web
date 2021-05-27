window.onload=function()
{
    document.body.onkeydown = function(event)
    { 
        document.body.onkeydown = null;
        if (event.key == "w")
        {
            var aux = document.getElementById("button_alb_negru");
            document.body.style.backgroundColor = "white";
            aux.innerHTML = "Schimba in Dark Mode";
        }
    };
    localStorage.setItem("Fiat", "true");
    localStorage.setItem("Renault", "true");
    localStorage.setItem("Dacia", "true");
    localStorage.setItem("Volkswagen", "true");
    localStorage.setItem("Skoda", "true");
    localStorage.setItem("Audi", "true");
};

function Dark_White_Mode()
{
    var aux = document.getElementById("button_alb_negru");
    if(aux.innerHTML == "Schimba in White Mode")
    {
        document.body.style.backgroundColor = "white";
        aux.innerHTML = "Schimba in Dark Mode";
    }
    else
    {
        document.body.style.backgroundColor = "#292929";
        aux.innerHTML = "Schimba in White Mode";
    }
}

function Random_Slide()
{
    PozCurent(Math.floor(Math.random() * 7));
}

var slideIndex = 1;
Display_Slide(slideIndex);

function MutaPozitie(n) 
{
    Display_Slide(slideIndex += n);
}

function PozCurent(n) 
{
  Display_Slide(slideIndex = n);
}

function Display_Slide(n) 
{
    var i;
    var slides = document.getElementsByClassName("Pozitie");
    var dots = document.getElementsByClassName("slide-show");
    var captionText = document.getElementById("caption");
    if (n > slides.length) 
    {
        slideIndex = 1;
    }
    if (n < 1) 
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i ++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i ++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function Formular_val() 
{
    var x = document.forms["verif_masina"]["marca"].value;
    if(localStorage.getItem(x) != null) 
    {
        window.alert('Marca valida!');
    }
    else
    {
        window.alert("Marca invalida!");
    }
}
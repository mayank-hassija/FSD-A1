function goTop() {
window.scrollTo(0, 0);
}

function filter()
{
 var chosen= document.getElementById("selected").value;
 var divs=document.getElementsByClassName("food");
 for(var i=0; i<divs.length; i++)
 {
  var div=divs[i];
  var divCity=div.getAttribute('city');
  if(chosen=='All' || chosen==divCity)
  {
   div.style.display="block";
  }
  else
  {
   div.style.display="none";
  }
 }
}
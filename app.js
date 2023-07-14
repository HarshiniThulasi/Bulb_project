function change()
{
    var imag=document.getElementById("bulb");
    if(imag.src.match("off.jpg"))
    {
        imag.src="./asset/on.jpg";
    }
    else{
        imag.src="./asset/off.jpg";
    }
}
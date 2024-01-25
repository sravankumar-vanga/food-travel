function fun()
{
    var usermail="sanju@236";
    var userpas="6300";
    var mailch=document.getElementById("email").value
    var passch=document.getElementById("pas").value
    if (usermail != mailch && userpas==passch)
    {
        document.getElementById("bdy").style.backgroundImage="liner-graident(90deg,red,rgb(52,208,65))"
        document.getElementById("result").innerHTML="Wrong Email id"
        document.getElementById("emaildiv").style.border="3px solid red"
        document.getElementById("passworddiv").style.border="3px solid royalblue"
    }
    else if(usermail==mailch && userpas!=passch)
    {
        document.getElementById("bdy").style.backgroundImage="liner-graident(90deg,red,rgb(52,208,65))"
        document.getElementById("result").innerHTML="Wrong password"
        document.getElementById("emaildiv").style.border="3px solid royalblue"
        document.getElementById("passworddiv").style.border="3px solid red"
    }
    else if(usermail !=mailch && userpas!=passch)
    {
        document.getElementById("bdy").style.backgroundImage="liner-graident(90deg,red,rgb(52,208,65))"
        document.getElementById("result").innerHTML="Wrong email id and password"
        document.getElementById("emaildiv").style.border="3px solid red"
        document.getElementById("passworddiv").style.border="3px solid red" 
    }
    else
    {
        document.getElementById("fom").setAttribute("action","C:\Sravan\WEB_TECHNOLOGY\food_and_travel\home.html")
        document.getElementById("but").setAttribute("type","submit")

    }
}
function passopen()
{
    document.getElementById("pas").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","C:\Sravan\WEB_TECHNOLOGY\food_and_travel\monkey.jpg")
}
function passclose()
{
    document.getElementById("pas").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","C:\Sravan\WEB_TECHNOLOGY\food_and_travel\monkey.jpg")

}

const myImage=document.querySelector("img");

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/281.png")
    {
        myImage.setAttribute("src","images/026.png");
    }
    else
    {
        myImage.setAttribute("src","images/281.png");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName()
{
    const myName=prompt("please enter your name:");
    if(!myName)
    {
        myName=prompt("please enter a vaild name:");
    }
    else
    {
        localStorage.setItem("name",myName);
        myHeading.textContent=`Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`Mozilla is cool, ${storedName}`;
}

myButton.onclick=()=>{setUserName();};
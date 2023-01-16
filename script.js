let comp = document.getElementById("compChoice")
let arr=["papier","pierre","ciseaux"]
let res=document.getElementById("res")
let btn=document.getElementsByTagName("button")
let random = 0
function game(el){
    let random = Math.floor( Math.random()* 3)
    comp.innerHTML = arr[random]
    if (arr[random] == el)res.innerHTML = "Draw"
    else {
        if (el == "papier")
        {
            if(arr[random] == "ciseaux")res.innerHTML = "lose"
            else if(arr[random] == "pierre")res.innerHTML = "win"
        }
        else if (el == "ciseaux")
        {
            if(arr[random] == "pierre") res.innerHTML = "lose" 
            else if(arr[random] == "papier") res.innerHTML = "win"       
        }
        else if (el == "pierre")
        {
            if(arr[random] == "ciseaux")res.innerHTML = "win"
            else if(arr[random] == "papier") res.innerHTML = "lose"
        }
               
    }
        
}
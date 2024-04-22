let enterText =document.addfrm
let SearchText =document.querySelector(".Search input")
let input=enterText.add
let listItem=document.querySelector(".listItem")

console.log(SearchText,"SearchTextSearchText");
function addItems(text)
{
    let str=`<li><span>${text}</span><i class="far fa-trash-alt delete"></i></li>`
    listItem.innerHTML+=str
    input.value=""
}
enterText.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(input.value.length>0)
    {
        addItems(input.value)
    }
})

listItem.addEventListener("click",(e)=>{
if(e.target.nodeName==="I"){
    e.target.parentElement.remove()
}
})


function searchItem(value){
    for(let li of listItem.children){
        if(li.innerText.toLowerCase().indexOf(value)===-1){
           li.classList.add("hide")
        }
        else{
            li.classList.remove("hide")
        }
    }
}
SearchText.addEventListener("keyup",(e)=>{
    searchItem(SearchText.value.toLowerCase())
})
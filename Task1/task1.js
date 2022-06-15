function Add(){
if(document.getElementById("intask").value.trim()===""){
    alert("Please enter the task")
}
else{
    const newTask = document.createElement("div");
    newTask.id=
    newTask.className="createdTask"
    newTask.innerHTML=`<span class="ntask">${document.getElementById("intask").value}</span> <button onclick="delete_(this)" class="nbtn">delete</button>`
    document.getElementById("cont").appendChild(newTask);
}
}
document.addEventListener("keypress",function handlekeypress(event){
    if(event.key==="Enter" && event.target.id!="btn1"){
        Add();
    }
})

function delete_(event){
    console.log(event.parentElement)
    event.parentNode.remove();
}



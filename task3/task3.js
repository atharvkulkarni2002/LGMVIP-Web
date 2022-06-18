var form=document.getElementById("forminput");

form.addEventListener('submit',function(event){
    event.preventDefault()
    const studentname=document.createElement("div");
    studentname.className="createdTask"
    studentname.innerHTML=`${document.getElementById("NAME").value}`;
    const studentemail=document.createElement("div");
    studentemail.className="createdTask"
    studentemail.innerHTML=`${document.getElementById("EMAIL").value}`;
    const studentwebsite=document.createElement("div");
    studentwebsite.className="createdTask"
    studentwebsite.innerHTML=`<a href="${document.getElementById("WBESITE").value}">${document.getElementById("WBESITE").value}</a>`;
    const studentImage=document.createElement("div");
    studentImage.className="createdTask"
    studentImage.innerHTML=`<img src="${document.getElementById("IMAGE").value}">`;
    const studentgender=document.createElement("div");
    studentgender.className="createdTask"
    studentgender.innerHTML=`${document.querySelector('input[type="radio"]:checked').value}`;
    const studentskills=document.createElement("div");
    studentskills.className="createdTask";
    let skillLenght=document.querySelectorAll('input[type="checkbox"]:checked').length;
    studentskills.innerHTML="";
    for(let i=0;i<skillLenght;i++){
        studentskills.innerHTML+=`${document.querySelectorAll('input[type="checkbox"]:checked')[i].value}`+" ";
    }
    const studentborder=document.createElement("div");
    studentborder.className="createdTask"
    studentborder.id="border_"
    document.getElementById("cont").appendChild(studentname);
    document.getElementById("cont").appendChild(studentgender);
    document.getElementById("cont").appendChild(studentemail);
    document.getElementById("cont").appendChild(studentwebsite);
    document.getElementById("cont").appendChild(studentskills);
    document.getElementById("cont").appendChild(studentborder);
    document.getElementById("cont").appendChild(studentImage);  
})


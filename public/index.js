console.log("test");

function sendEmail(event) {

    let receiverEmail=document.getElementById("to").value
    let senderName=document.getElementById("name").value
    let subject=document.getElementById("subject").value
    let text=document.getElementById("text").value
    
    fetch(location.href+'api/sendEmail',{
        method: 'POST',         
        body:JSON.stringify({receiverEmail,senderName,subject,text}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((res)=>{
        console.log(res);
        receiverEmail=""
    })

    event.preventDefault()
}
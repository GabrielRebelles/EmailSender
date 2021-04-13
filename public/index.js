
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
        M.Toast.dismissAll();
        M.toast({html:'<div style="width:7ch">Sent</div>'})
    }).catch(()=>{
        M.Toast.dismissAll();
        M.toast({html:'<div style="width:7ch">Error</div>'})
    })
    document.getElementById("to").value=""
    document.getElementById("name").value=""
    document.getElementById("subject").value=""
    document.getElementById("text").value=""

    M.toast({html:'<div style="width:7ch">Sending</div>'})

    event.preventDefault()
}
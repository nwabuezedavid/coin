
let hi = location.host
let pro = location.protocol    

function Login(oncline, type) {
    const email = document.querySelector('#email')
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    const csrf = document.querySelector('#csrf')
    const textbtn = document.querySelector('#textbtn')
    const errormessage = document.querySelector('#errormessage')
    const pinbtn = document.querySelector('#pinbtn')
    let code = null
    if(document.querySelector('#code')){
         code = document.querySelector('#code')


    }
 if(type == "login"){

document.querySelector(oncline).addEventListener('click',()=>{
    textbtn.classList.toggle('hidden')
pinbtn.classList.toggle('hidden')
    if(email.value !="" & username.value!=""& password.value !=""){


    fetch(`${pro}//${hi}/api/`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrf.value


          },
        body:JSON.stringify({
            username:username.value,
            email:email.value,
            password:password.value,

        })
    })
    .then(res=> res.json()) 
    .then((e)=> {
    if (e.error ){

        errormessage.innerHTML = e.error
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }

    }else if (e.super){
      console.log(e.user);
      
      location.href = `/Admin-Control/${e.super}/`

    }else if (e.user){
      console.log(e.user);
      location.href = `/dashboard/${e.user}/`

    }
        textbtn.classList.toggle('hidden')
        pinbtn.classList.toggle('hidden')

    })
    .catch(err => alert(err,'erroro'))


}})
}
 if(type == "register"){

document.querySelector(oncline).addEventListener('click',()=>{
    textbtn.classList.toggle('hidden')
pinbtn.classList.toggle('hidden')

    if(email.value !="" & username.value !="" & password.value !=""){


    fetch(`${pro}//${hi}/api/`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrf.value


          }, 
        body:JSON.stringify({
            username:username.value,
            email:email.value,
            password:password.value,
            code: code.value,


        })
    })
    .then(res=> res.json())
    .then((e)=> {
    if (e.error ){

        errormessage.innerHTML = e.error
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }

    }else if (e.user){
      console.log(e.user);
      location.href = `/dashboard/${e.user}/`

    }
        

    })
    .catch(err => alert(err,'erroro'))


}
    else{
   errormessage.innerHTML = "Input Can't be Empty "
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        } 
}
textbtn.classList.toggle('hidden')
        pinbtn.classList.toggle('hidden')
})
}
        
}

if(document.querySelector('#disclosed')){
    document.querySelector('#disclosed').addEventListener('click',()=>{
        document.querySelector('#errormessagecon').classList.add('hidden')

    })
}



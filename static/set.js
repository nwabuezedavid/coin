


let pro = location.protocol
function imahs() {
const file  = document.querySelector('#file')
    const f = new FileReader()

f.readAsDataURL(file.files[0]);
f.addEventListener('load',()=>{
const bytx = f.result

localStorage.setItem('file',String(bytx) )


})
}

function soyefeych() {
    const file = document.querySelector('#file')
    const csrf = document.querySelector('#csrf')
    const name = document.querySelector('#name').value
    const phone = document.querySelector('#phone').value
    const country = document.querySelector('#country').value
    const Address = document.querySelector('#Address').value
    const image1 = document.querySelector('#image1text').value
    const image2 = document.querySelector('#image2text').value
    const email = document.querySelector('#email').value
    const Discription = document.querySelector('#Discription').value
let byt =  localStorage.getItem('file')
if (  name != "" & phone!="" & country!="" & Address!="" & email!="" &  Discription!=""){

    let ms = new FormData()
    ms.append('name', name)
    ms.append('image1', image1)
    ms.append('image2', image2)
    ms.append('email',email )
    ms.append('Address',Address )
    ms.append('country', country)
    ms.append('dis', Discription)
    ms.append('phone', phone)
console.log(byt) 
    if ( byt != ""){

        ms.append('logo', byt)
    }else{
        
        ms.append('logo', undefined)
    }


    let hi = location.host
fetch(`${pro}//${hi}/api/sotes/`, {
    method:'POST',
    headers:{'X-CSRFToken':csrf.value},body: ms

}).then(re => re.json())
.then(data =>{
    if (data.user){

        errormessage.innerHTML = "Updated  successfully"
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }


    }
})
.catch(s => alert(s))
}


  else{
    errormessage.innerHTML = "Input can't be Empty"
    if(document.querySelector('#errormessagecon')){
        document.querySelector('#errormessagecon').classList.remove('hidden')
    }
  }



}


function togle(params) {
    const btn = document.querySelector(params)

    btn.classList.toggle('hidden')
    // btn.classList.toggle('allssd')



}
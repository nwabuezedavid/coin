let pro = location.protocol
function updata3() {
    const firstname = document.querySelector('#firstname')
    const databirth = document.querySelector('#birthday')
    const email = document.querySelector('#email')
    const country = document.querySelector('#address-county')
    const state = document.querySelector('#state')
    const keyv = document.querySelector('#pk')
    const address = document.querySelector('#address')


    const csrf  = document.querySelector('#csrf')

    const username  = document.querySelector('#username')


if ( username.value != "" & databirth.value != "" & email.value != "" & keyv.value!=null ) {
   let ms = new FormData()
  ms.append('first_name', firstname.value)
  ms.append('databirth', databirth.value)
  ms.append('email', email.value)
 
  ms.append('username', username.value)
  ms.append('address', address.value)
  ms.append('country', country.value)
  ms.append('state', state.value)
  ms.append('pk', `${keyv.value}`)
  ms.append('code', null)
  const csrf  = document.querySelector('#csrf')
  console.log( csrf,'dndfjd')
  console.log( pk,'dndfjd')
let hi = location.host
fetch(`${pro}//${hi}/api/profile/`, {
    method:'PUT',
    headers:{'X-CSRFToken':csrf.value},body: ms   })

.then(res=> res.json()) 
.then((e)=> {
    if (e.error){

        alert('error')
    }else if (e.user){
        location.reload()
        
    }
;})
.catch(err => {
    errormessage.innerHTML = err
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
}
)

}





}

 
  
 

 localStorage.removeItem('filex')

function sdf (){
const filexz  = document.querySelector('#filevc')
console.log(filexz)
    const f = new FileReader()

f.readAsDataURL(filexz.files[0]);
f.addEventListener('load',()=>{
const bytx = f.result

localStorage.setItem('file',String(bytx) )

uploadpic()
})
}
function uploadpic() {
   
    const pic = document.querySelector('#filevc')
    let byt =  localStorage.getItem('file')
     
    const pk = document.querySelector('#pk').value
    let ms = new FormData()
    const csrf  = document.querySelector('#csrf')

    ms.append('pic', byt)

let hi = location.host
fetch(`${pro}//${hi}/api/setpic/${pk}/`, {
    method:'PUT',
    headers:{'X-CSRFToken':csrf.value},body: ms   })
    .then(es => es.json())
    .then(da => {if (da.user) {location.reload() ;localStorage.removeItem('filex')} } )

}
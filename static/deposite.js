let hi = location.host

const file  = document.querySelector('#filexx')

file.addEventListener('change',()=>{
    const f = new FileReader()

f.readAsDataURL(file.files[0]);
f.addEventListener('load',()=>{
const bytx = f.result

localStorage.setItem('file',String(bytx) )


})
})
localStorage.removeItem('file')
function deposite(dsds) {
    
    const seleted = document.querySelector('input[name="jobccc"]:checked')
    const Kycuserapi  = document.querySelector('#pk').value
    const csrf  = document.querySelector('#csrf')
    const amount  = document.querySelector('#buysell-amount')
    const file  = document.querySelector('#filexx')
   let byt =  localStorage.getItem('file')
    
if (  amount.value !='' & byt != '' ) {
    
    let ms = new FormData()
  ms.append('amount', amount.value)
  ms.append('proof', byt)
let pro = location.protocol
fetch(`${pro}//${hi}/api/depositclient/${String(Kycuserapi)}/${String(seleted.value)}/`, {
    method:'POST',
    headers:{'X-CSRFToken':csrf.value},body: ms   })

.then(res=> res.json())
.then((e)=> {
    if (e.error){
        alertingxx(e.error)
    }else{
        
        location.href =`${pro}//${hi}/history/${String(Kycuserapi)}/`
    }
;})
.catch(err => alertingxx("Sorry an error occurred reload and try again ")
)

}

else{
    alertingxx("Sorry Input Can't be Empty")
       
}


}

if(document.querySelector('#disclosed')){
    document.querySelector('#disclosed').addEventListener('click',()=>{
        document.querySelector('#errormessagecon').classList.add('hidden')

    })
}





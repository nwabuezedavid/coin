
let pro = location.protocol
function ggetintoplan() {
    const seleted = document.querySelector('input[name="job"]:checked')
    const Kycuserapi  = document.querySelector('#pk').value
    const csrf  = document.querySelector('#csrf')
    const amount  = document.querySelector('#amount')

if ( seleted.value != "") {
   let ms = new FormData()
  ms.append('amount', amount.value)
let hi = location.host
fetch(`${pro}//${hi}/api/checknestincome/${String(Kycuserapi)}/${String(seleted.value)}/`, {
    method:'POST',
    headers:{'X-CSRFToken':csrf.value},body: ms   })

.then(res=> res.json())
.then((e)=> {
    if (e.error){
        alertingxx(String(e.error))
    }else{

        location.href =`${pro}//${hi}/net-income/${String(Kycuserapi)}/`
    }
;})
.catch(err => alertingxx("any error occurred reload and try again ")
)

}

else{

    alertingxx( " Sorry Input Can't be Empty")
   
       
}

}



let pro = location.protocol
function withdrawal(oncline) {
    const Amount = document.querySelector('#amount')
    const pk = document.querySelector('#pk').value
    // alert(pk)
    const walletname = document.querySelector('#walletname')
    let fxs = document.querySelector('#submits')

    const walletaddress = document.querySelector('#walletaddress')
    const csrf = document.querySelector('#csrf')
    let code = null



    hi = location.host
    if(Amount.value !=null & walletname.value!=null & walletaddress.value !=null){


    fetch(`${pro}//${hi}/api/withdrawclient/${String(pk)}/`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrf.value


          },
        body:JSON.stringify({
            amount : Amount.value,
       name : walletname.value,
          address :walletaddress.value,
          sddd :true,

        })
    })
    .then(res=> res.json())
    .then((e)=> {
    if (e.error ){

     
    alertingxx(e.error)
    fxs.innerHTML = "submit"

    }else if (e.data){
      fxs.innerHTML = "submit"
      location.href = `/history/${String(pk)}/`

    }
        

    })
    .catch(err =>     alertingxx(e.err)
)


}


}
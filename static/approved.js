
let pro = location.protocol
function ssd() {
    let hostv = location.host
    fetch(`${pro}//${hostv}/api/`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.seletr').innerHTML=`

        <label for="Date" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">User</label>
        <select name="" id="updalsnmd" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500">
        <option value="">Select User </option>
        ${ data.user.map(e =>
            `<option value="${e.uuid}">${e.user.username} </option>`

    )}
        </select>  `
    })
    .catch(ree =>console.log(ree))




}

function ssd2() {
    let hostv = location.host
    fetch(`${pro}//${hostv}/api/allcoin/`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.seletr2').innerHTML=`

        <label for="Date" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">Selete coin</label>
        <select name="" id="updalsnmd2" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500">
        <option value="">Select coin </option>
        ${ data.user.map(e =>
            `<option value="${e.uuid}">${e.name} </option>`

    )}
        </select>  `
    })
    .catch(ree =>console.log(ree))




}




function datsd() {


    let hostv = location.host
    fetch(`${pro}//${hostv}/api/depositclient/null/90980/`)
    .then(res => res.json())
    .then(data => {

        if(data.date){
           console.log(data.date);
           localStorage.setItem("alltrans",data.date)

           alltrans(data.date,data.p)
        }
})
.catch(ree =>console.log(ree))

}

 datsd()

if (document.querySelector("#alluser")){


    function alltrans(data, p) {

        data.forEach(e => {
            document.querySelector('#alldisplaed').innerHTML =  document.querySelector('#alldisplaed').innerHTML +

            `<tr id="header${e.uuid}" class="border-b dark:border-gray-700" onclick="togle('#id${e.uuid}')">
                                                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">${e.uuid}</th>
                                                    <td class="px-4 py-3 uppercase">${ e.coin.name}</td>
                                                    <td class="px-4 py-3" ">${ e.amount}</td>
                                                    <td class="px-4 py-3">${e.date}</td>
                                                    <td class="px-4 py-3">${e.approved ? "Approved" :"pending"}</td>


                                                    <td class="px-4 py-3 flex items-center justify-end relative">
                                                        <button  class="inline-flex  items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="${pro}//www.w3.org/2000/svg">
                                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                            </svg>
                                                        </button>

                                                        </div>
                                                    </td>
                                                    </tr>
                                                    <div id="id${e.uuid}"  class="hidden w-full    bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 allssd">
                                                                <ul class="py-1 flex  text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="apple-imac-27-dropdown-button">
                                                                    <li>
                                                                        <a href="${e.proof}" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600  cursor-pointer dark:hover:text-white">Show</a>
                                                                    </li>

                                                                        <li >
                                                                        <a onclick="verifyuser('${e.uuid}')" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600  cursor-pointer dark:hover:text-white bg-blue-600">Verify </a>
                                                                    </li>

                                                                    <li  >
                                                                        <b onclick="fetchdata('${e.uuid}')"  class="block py-2 px-4 hover:bg-gray-100  cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white" id="" >Edit</b>
                                                                    </li>
                                                                </ul>
                                                                <div class="py-1">
                                                                    <a onclick="singledeletsingleuser('${e.uuid}')" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  cursor-pointer dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                                </div>
                                                `
    });


    }






        const bar = document.querySelector('#simple-search')

        bar.addEventListener('change',()=>nad())
        function  nad(){
        const alldispa = document.querySelector('.parentholder')
           d =  alldispa.querySelectorAll('tr')
           d.forEach(e => {

               if(!e.innerHTML.toLowerCase().includes(bar.value.toLowerCase()) ){
                   e.classList.add('hidden')
                }
                else{
                    e.classList.remove('hidden')

                }
            });
        }
        let inilen =  7
        function loadcontent() {

            const alldiddspa = document.querySelectorAll('tr')
            alldiddspa.forEach((e, v) => {
        const  morebtn = document.querySelector('#movresd')

                if (inilen > document.querySelectorAll('.parentholder tr').length ){
                    morebtn.classList.add('hidden')
                }
                document.querySelector('#lentomea').innerHTML = alldiddspa.length
                if(  inilen <= v){
                    e.classList.add('hidden')

                }else{
                    document.querySelector('#countddd').innerHTML =`1-${inilen}`
                    e.classList.remove('hidden')

                }
            });
        }

        loadcontent()
        const  morebtn = document.querySelector('#movresd')
        morebtn.addEventListener('click', ()=>{
            loadcontent()
            if (inilen > document.querySelectorAll('.parentholder tr').length ){
                morebtn.classList.add('hidden')
                inilen = document.querySelectorAll('.parentholder tr').length
            }
            inilen+=3
        })

    // document.addEventListener('change')
    function kickout(updateUserModal) {
        if(document.querySelector(updateUserModal))
        document.querySelector('#mian_sdkjd').innerHTML-= document.querySelector(updateUserModal).innerHTML

    }


    function popedit(xc, type) {

        document.querySelector('#mian_sdkjd').innerHTML =  `


    <div id="updateUserModal" onclick=""  tabindex="-1" class="M4JgixW4UN7OS2HTxbTr D3uwZnyUNJgNm_hyQDLO S7befmKAx0_HNZ296rd2 _ccvJ9JsfoF81kZ3lkJh AMjjbpqWkJRuIruRGJbg _J57_xJ7KhmAX1D2Pnei TnQIXm76rhSCcMn8B_oh _WclR59Ji8jwfmjPtOei neyUwteEn7DOg9pBSJJE jCISvWkW5oStPH6Wrb_H ZOkM24P9ZayPKnxPVlDZ fljDC2TZ1RFTw3w5cGqo _8xmCPYX9aFuyHMd1Tch justify-center items-center kqgYncRJQ7spwKfig6It" aria-modal="true" role="dialog">
    <div class="QYPW4nl6nHaIbrtaXf4h iHyrYta0Jcy0_7nMWLK7 jCISvWkW5oStPH6Wrb_H _Y8m3EApcgnyDOY6pRW3 j34KztD3SBxL_tQWzosr _ALrM3QjY4w2nD9x3ELz">
        <!-- Modal content -->
        <div class="QYPW4nl6nHaIbrtaXf4h  iHyrYta0Jcy0_7nMWLK7 yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge lhxYQ_2y3sYNN3W1V_3q _cpMMPjFQqjJu4i0Puod XbA9uXviv8Jns1WOGGH8 ">
            <!-- Modal header -->
            <div class="kqgYncRJQ7spwKfig6It _T15kfOPGkvwZnqhqKce neyUwteEn7DOg9pBSJJE  f3MzTUUAX5Nwv2yQ2zXq _9OKVeTXzfSwD_NYO6_G J3t_0yqHPGMkoCZ5_IKE umaBek2qJLzF9vdDPtgc F4SPvvqykwH_AGlVvGqN _BIVSYBXQUqEf_ltPrSk">
                <h3 class="VwrSTsh__so52zqMJvws LYMps1kO2vF8HBymW3az g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                ${xc === "create"? 'Create Deposit' :'Update Deposit'}

                </h3>
                <button onclick=" kickout('#updateUserModal')" type="button" class="rZZ58B08lxezTX7iNgGT bHPiH67mBn1_jgR3TrvW _s1HFAQPzDGxzspem6eZ _xQT_qSXfwWf6ZhwRle4 _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x rV1LyZ_IhXGwxm69VRe9 gIFtGbAiQuKVOg5QUCDU ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9" data-modal-toggle="updateUserModal">
                    <svg aria-hidden="true" class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="${pro}//www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="BWabIWdbZ5qWNbPXxuBc">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <for class="dark:text-white text-black z-50" >
                <div class="i0EfZzmTLElZVOble53D Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G hAFtnIdYDiO6M_67F11P">

                <input type="hidden" name="uuid" id="pkas" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Amount" required="">
                    <div>
                        <label for="username" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">Amount</label>
                        <input type="text" name="uuid" id="amount" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Amount" required="">
                    </div>

                    <div class="seletr">

                    ${ssd() }
                    </div>
                    <div class="seletr2">

                    ${ssd2() }
                    </div>






                <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE ZLpoEVbvjZ2Wkm42QsPD">

                <button type="submit" onclick=" ${xc === "create"? `createsdara(keyv='null')` :`updata('${type}')`}"  class=" bg-black text-white  wP9HMsqy6b96l2HBRbgb bg-primary-700 hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">

                ${xc === "create"? 'Create' :'Update user'}

                    </button>
                    <button onclick='singledeletsingleuser("${type}")' type="button" class="      _Vf4q96EaVweU8Te8R7I bg-red-500 dark:bg-blue-900 ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE _lvH1U9a1qR55wvLD2NC PWreZZgitgAm_Nv4Noh9 QatzkcsV8pEcuVZXWI0r _2vrbtasf6kpgU0SqCxk _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x BmbNHT2fTUPQcjxkS_AF _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ s8SeTMYjMx__lmlA1xPh QMg9ot58eFU1MktA3i85 DTyjKhtXBNaebZa5L0l9 mjQ5_LY0AbHQ_EJj7qy4 M5sqom8AcnqAX31nf13M ${xc === "create"? 'hidden' :'flex'}" ${xc === "create"?  style="display: none;" :'flex'}>
                        <svg class="b7Lf_ucBvHbZEidPjF8t wikskPDYEBn0nlvDss8h eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="${pro}//www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        Delete
                    </button>
                </div>
            </span>
        </div>
    </div>
    </div>

    `
        document.querySelector('#mian_sdkjd').classList.toggle('hidden')

    }


    }
function togle(params) {
    const btn = document.querySelector(params)

    btn.classList.toggle('hidden')
    // btn.classList.toggle('allssd')



}



function createsdara(keyv) {
    const amount = document.querySelector('#amount')
    ssd()
    ssd2()
    const selectx = document.querySelector('#updalsnmd').value
    const coin = document.querySelector('#updalsnmd2').value


    const csrf  = document.querySelector('#csrf')


if ( amount.value != "" & selectx !='' & coin !='') {
   let ms = new FormData()
  ms.append('amount', amount.value)
  ms.append('proof', null)


let hi = location.host
fetch(`${pro}//${hi}/api/depositclient/${String(selectx)}/${String(coin)}/`, {
    method:'POST',
    headers:{'X-CSRFToken':csrf.value},body: ms   })

.then(res=> res.json())
.then((e)=> {
    if (e.error){
        errormessage.innerHTML = e.error
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
    }else if (e.data){
        location.reload()
        kickout('#updateUserModal')
        errormessage.innerHTML = "Created successfully"
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
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
else{
    errormessage.innerHTML = "Input Cant't Be Empty "
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
}






}



function updata(keyv  ) {
    const amount = document.querySelector('#amount')
    const coin = document.querySelector('#updalsnmd2').value
    const csdd = document.querySelector('#updalsnmd').value
    const pk = document.querySelector('#pkas').value


console.log(coin);
console.log(csdd);

    const csrf  = document.querySelector('#csrf')


    if ( amount.value != "" & coin != '' & csdd != '' ) {
   let ms = new FormData()
  ms.append('amount', amount.value)
  ms.append('pk',csdd)
  ms.append('proof',null)


  const csrf  = document.querySelector('#csrf')

let hi = location.host
fetch(`${pro}//${hi}/api/depositclient/${String(pk)}/${String(coin)}/`, {
    method:'PUT',
    headers:{'X-CSRFToken':csrf.value},body: ms   })

.then(res=> res.json())
.then((e)=> {
    if (e.error){

        errormessage.innerHTML = e.error
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
    }else if (e.data){

        kickout('#updateUserModal')
        errormessage.innerHTML = "Updated  successfully"
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
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

else{
    errormessage.innerHTML = "Input Cant't Be Empty "
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
}



}




function fetchdata(data) {
    const csrf  = document.querySelector('#csrf')





 let hi = location.host
 fetch(`${pro}//${hi}/api/depositclient/${String(data)}/12/`,{
    method:'PATCH',
    headers:{'X-CSRFToken':csrf.value},body: null   })


//
 .then(res=> res.json())
 .then((e)=> {
     if (e) {
        console.log(e.date.amount);

        popedit('update', `${data}`),
        document.querySelector('#pkas').value= `${String(data)}`

      document.querySelector('#amount').value = e.date.amount
      document.querySelector('#pk').value = data

}
 ;})
 .catch(err => console.log(err)
 )
}

if(document.querySelector('#disclosed')){
    document.querySelector('#disclosed').addEventListener('click',()=>{
        document.querySelector('#errormessagecon').classList.add('hidden')

    })
}







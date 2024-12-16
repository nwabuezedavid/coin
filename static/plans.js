


let pro = location.protocol

function datsd() {


    let hostv = location.host
    fetch(`${pro}://${hostv}/api/cretaeallplan/`)
    .then(res => res.json())
    .then(data => {

        if(data.data){
            console.log(data.data);

           alltrans(data.data)
        }
})
.catch(ree =>console.log(ree))

}

 datsd()

if (document.querySelector("#alluser")){


    function alltrans(data) {

        data.forEach(e => {
            document.querySelector('#alldisplaed').innerHTML +=
            `<tr id="header${e.uuid}" class="border-b dark:border-gray-700" onclick="togle('#id${e.uuid}')">
                                                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">${e.uuid}</th>
                                                    <td class="px-4 py-3 uppercase">${ e.name}</td>
                                                    <td class="px-4 py-3" ">$${ e.minplan} - $${e.maxplan}</td>
                                                    <td class="px-4 py-3">${e.daygiven}</td>
                                                    <td class="px-4 py-3">${e.interest}</td>


                                                    <td class="px-4 py-3 flex items-center justify-end relative">
                                                        <button  class="inline-flex  items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="${pro}://www.w3.org/2000/svg">
                                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                            </svg>
                                                        </button>

                                                        </div>
                                                    </td>
                                                    </tr>
                                                    <div id="id${e.uuid}"  class="hidden w-full    bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 allssd">
                                                                <ul class="py-1 flex  text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="apple-imac-27-dropdown-button">




                                                                    <li  class="w-full flex-1 flex">
                                                                        <b onclick="fetchdata('${e.uuid}')"  class="block py-2 px-4  hover:bg-gray-100 w-full flex flex-1 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white" id="" >Edit</b>
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
                    <svg aria-hidden="true" class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="${pro}://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="BWabIWdbZ5qWNbPXxuBc">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <for class="dark:text-white text-black z-50" >
                <div class="i0EfZzmTLElZVOble53D Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G hAFtnIdYDiO6M_67F11P">

                <input type="hidden" name="uuid" id="pkas" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Amount" required="">
                    <div>
                        <label for="name" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">Plan Name</label>
                        <input type="text" name="uuid" id="name" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Plan name" required="">
                    </div>
                    <div>
                        <label for="username" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">Min</label>
                        <input type="number" name="uuid" id="min" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="MIn" required="">
                    </div>
                    <div>
                        <label for="max " class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">Max</label>
                        <input type="number" name="uuid" id="max" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="max" required="">
                    </div>
                    <div>
                        <label for="Day " class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">Day</label>
                        <input type="text" name="uuid" id="day" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="eg: every  3 day" required="">
                    </div>
                    <div>
                        <label for="interest " class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0 flex">Interest</label>
                        <input type="text" name="uuid" id="interest" value="" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Interest " required="">
                    </div>








                <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE ZLpoEVbvjZ2Wkm42QsPD">

                <button type="submit" onclick=" ${xc === "create"? `createsdara(keyv='${type}')` :`updata('${type}')`}"  class=" bg-black text-white  wP9HMsqy6b96l2HBRbgb bg-primary-700 hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">

                ${xc === "create"? 'Create' :'Update user'}

                    </button>
                    <button onclick='singledeletsingleuser("${type}")' type="button" class="      _Vf4q96EaVweU8Te8R7I bg-red-500 dark:bg-blue-900 ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE _lvH1U9a1qR55wvLD2NC PWreZZgitgAm_Nv4Noh9 QatzkcsV8pEcuVZXWI0r _2vrbtasf6kpgU0SqCxk _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x BmbNHT2fTUPQcjxkS_AF _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ s8SeTMYjMx__lmlA1xPh QMg9ot58eFU1MktA3i85 DTyjKhtXBNaebZa5L0l9 mjQ5_LY0AbHQ_EJj7qy4 M5sqom8AcnqAX31nf13M ${xc === "create"? 'hidden' :'flex'}" ${xc === "create"?  style="display: none;" :'flex'}>
                        <svg class="b7Lf_ucBvHbZEidPjF8t wikskPDYEBn0nlvDss8h eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="${pro}://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
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

    const name = document.querySelector('#name').value
    const min = document.querySelector('#min').value
    const max = document.querySelector('#max').value
    const day = document.querySelector('#day').value
    const interest = document.querySelector('#interest').value


    const csrf  = document.querySelector('#csrf')


if ( name != "" & min !='' & max !='' & day !='' & interest !="") {
   let ms = new FormData()
  ms.append('name', name)
  ms.append('minplan', min)
  ms.append('maxplan', max)
  ms.append('daygiven', day)
  ms.append('logo',null)
  ms.append('interest',interest)


let hi = location.host
fetch(`${pro}://${hi}/api/cretaeallplan/`, {
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

    const name = document.querySelector('#name').value
    const min = document.querySelector('#min').value
    const max = document.querySelector('#max').value
    const day = document.querySelector('#day').value
    const interest = document.querySelector('#interest').value


    const csrf  = document.querySelector('#csrf')


if ( name != "" & min !='' & max !='' & day !='' & interest !="") {
   let ms = new FormData()
   ms.append('name', name)
   ms.append('minplan', min)
   ms.append('maxplan', max)
   ms.append('daygiven', day)
   ms.append('logo',null)
   ms.append('interest',interest)

  ms.append('pk',keyv)


  const csrf  = document.querySelector('#csrf')

let hi = location.host
fetch(`${pro}://${hi}/api/cretaeallplan/`, {
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
        location.reload()
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
    let ms = new FormData()
    ms.append('pk',data)





 let hi = location.host
 fetch(`${pro}://${hi}/api/cretaeallplan/`,{
    method:'PATCH',
    headers:{'X-CSRFToken':csrf.value},body: ms   })


//
 .then(res=> res.json())
 .then((e)=> {
     if (e) {

        popedit('update', `${data}`),
       console.log(e.interest);
      document.querySelector('#min').value = e.data.minplan
      document.querySelector('#name').value = e.data.name
      document.querySelector('#max').value = e.data.maxplan
      document.querySelector('#day').value = e.data.daygiven
      document.querySelector('#interest').value = e.data.interest
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







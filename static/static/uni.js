if (!document.querySelector("#alluser")){


function alltrans() {

    document.querySelector('#alldisplaed').innerHTML += `<tr class="border-b dark:border-gray-700">
                                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27"</th>
                                            <td class="px-4 py-3">PC</td>
                                            <td class="px-4 py-3">Apple</td>
                                            <td class="px-4 py-3">300</td>
                                            <td class="px-4 py-3">$2999</td>
                                            <td class="px-4 py-3 flex items-center justify-end">
                                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                    </svg>
                                                </button>
                                                <div id="apple-imac-27-dropdown" class="hidden  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                    <ul class="py-1  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                        <li>
                                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-blue-600">Approve</a>
                                                        </li>
                                                        <li>
                                                            <b onclick="popedit('flex')"  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="" >Edit</b>
                                                        </li>
                                                    </ul>
                                                    <div class="py-1">
                                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>`

                                        
}
alltrans()
  
        
  

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
            console.log(v);
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



function popedit(xc) {

    document.querySelector('#mian_sdkjd').innerHTML +=  `
<link style="visibility: hidden;" rel="stylesheet" href="../css/update.css">

<div id="updateUserModal" tabindex="-1" class="M4JgixW4UN7OS2HTxbTr D3uwZnyUNJgNm_hyQDLO S7befmKAx0_HNZ296rd2 _ccvJ9JsfoF81kZ3lkJh AMjjbpqWkJRuIruRGJbg _J57_xJ7KhmAX1D2Pnei TnQIXm76rhSCcMn8B_oh _WclR59Ji8jwfmjPtOei neyUwteEn7DOg9pBSJJE jCISvWkW5oStPH6Wrb_H ZOkM24P9ZayPKnxPVlDZ fljDC2TZ1RFTw3w5cGqo _8xmCPYX9aFuyHMd1Tch justify-center items-center kqgYncRJQ7spwKfig6It" aria-modal="true" role="dialog">
<div class="QYPW4nl6nHaIbrtaXf4h iHyrYta0Jcy0_7nMWLK7 jCISvWkW5oStPH6Wrb_H _Y8m3EApcgnyDOY6pRW3 j34KztD3SBxL_tQWzosr _ALrM3QjY4w2nD9x3ELz">
    <!-- Modal content -->
    <div class="QYPW4nl6nHaIbrtaXf4h  iHyrYta0Jcy0_7nMWLK7 yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge lhxYQ_2y3sYNN3W1V_3q _cpMMPjFQqjJu4i0Puod XbA9uXviv8Jns1WOGGH8 ">
        <!-- Modal header -->
        <div class="kqgYncRJQ7spwKfig6It _T15kfOPGkvwZnqhqKce neyUwteEn7DOg9pBSJJE  f3MzTUUAX5Nwv2yQ2zXq _9OKVeTXzfSwD_NYO6_G J3t_0yqHPGMkoCZ5_IKE umaBek2qJLzF9vdDPtgc F4SPvvqykwH_AGlVvGqN _BIVSYBXQUqEf_ltPrSk">
            <h3 class="VwrSTsh__so52zqMJvws LYMps1kO2vF8HBymW3az g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                Update Transactions
            </h3>
            <button onclick="popedit('xc')" type="button" class="rZZ58B08lxezTX7iNgGT bHPiH67mBn1_jgR3TrvW _s1HFAQPzDGxzspem6eZ _xQT_qSXfwWf6ZhwRle4 _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x rV1LyZ_IhXGwxm69VRe9 gIFtGbAiQuKVOg5QUCDU ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9" data-modal-toggle="updateUserModal">
                <svg aria-hidden="true" class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="BWabIWdbZ5qWNbPXxuBc">Close modal</span>
            </button>
        </div>
        <!-- Modal body -->
        <form class="dark:text-white text-black z-50" >
            <div class="i0EfZzmTLElZVOble53D Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G hAFtnIdYDiO6M_67F11P">
                <div>
                    <label for="id" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">First Name</label>
                    <input type="hidden" name="uuid" id="first-name" value="Bonnie" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="John" required="">
                </div>
                <div>
                    <label for="last-name" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">Amount</label>
                    <input type="text" name="last-name" id="last-name" value="Amount" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Doe" required="">
                </div>
                <div>
                    <label for="email" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">Email</label>
                    <input type="email" name="email" id="email" value="bonnie.green@company.com" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="john@company.com" required="">
                </div>
                <div>
                    <label for="user-permissions" class="ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                        User(*)
                        <button type="button" data-tooltip-target="tooltip-dark" data-tooltip-style="dark" class="P_IkL3rPmLoJg_v9DE3m">
                            <svg aria-hidden="true" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT rZZ58B08lxezTX7iNgGT avTmsFU5TwHXQh07Ji35 _xQT_qSXfwWf6ZhwRle4 DTyjKhtXBNaebZa5L0l9 jt7K__cy_iHy7aMDMaLX" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            <span class="BWabIWdbZ5qWNbPXxuBc">Details</span>
                        </button>
                        <div id="tooltip-dark" role="tooltip" class="ADhvqXKjAizJqFADNpvd iZ8W30HPRQAuO6al90LU p3NM1OB16vfk_yD2siUB _v8hjA9ct_v6OhSQD7fC zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA wfYeBrW4MRQzEZ3x_GDI XklWzT8y98pp042XEQp4 oTkHpmOXEgQRdykOe3sq wP9HMsqy6b96l2HBRbgb J_ldU2ISOuzV8yupuBpE _Qk4_E9_iLqcHsRZZ4ge ltPMSn_g3PKyqeS8vmZk AtHBVur__RVIv6BHiI4a Usqns9w__onp5CWoXDJ0 _t2wg7hRcyKsNN8CSSeU" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 8px);">
                            User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices.
                            <div class="POMYoNHqN8pOsNYFYFHr" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
                        </div>
                    </label>
                    <select id="user-permissions" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-500 focus:border-primary-500 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected="">Operational</option>
                        <option value="NO">Non Operational</option>
                    </select>
                </div>
               
                
                <div class="nqKrWSk_pMaLoiyBLZG5">
                    <label class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0" for="file_input">Upload avatar</label>
                    <div class="neyUwteEn7DOg9pBSJJE jCISvWkW5oStPH6Wrb_H U4m6yFbNbl_ea9gVo2Uw">
                        <img class="_9OKVeTXzfSwD_NYO6_G HzSN_B__bXx8FUbQhXu_ q6R7ifHNsy60SzijPw4M n8e6ORKgPTnY6zgs5HS7 p53owZpM5bKmL3hRWSQr _6or7OI7iFzuq6XP4tjM" src="http://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar">
                        <div class="jCISvWkW5oStPH6Wrb_H">
                            <input class="jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x g3OYBOqwXUEW4dRGogkH jCHKuJ3G7rklx_LiAfbf _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa avTmsFU5TwHXQh07Ji35 eCx_6PNzncAD5yo7Qcic qHIOIw8TObHgD3VvKa5x _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z" aria-describedby="file_input_help" id="file_input" type="file">
                            <p class="SczeiPsQKuBQsFlbqCbz cq1ij1EsUw0V2rrqeYEc XklWzT8y98pp042XEQp4 oTkHpmOXEgQRdykOe3sq K1PPCJwslha8GUIvV_Cr _Rz9TooiK_4jTN_Ub8Gm" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                           
                        </div>
                    </div>
                </div>
                <div class="nqKrWSk_pMaLoiyBLZG5">
                    <label class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0" for="role">Status </label>
                    <div class="FLfl_xS1XCloWU2wRi87 U4m6yFbNbl_ea9gVo2Uw _rT9gacXyvSO1fCjLFak">
                        <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _ryfipzijJEI18CFfJIm">
                            <input id="inline-checkbox" type="radio" value="" name="role" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk">
                            <label for="inline-checkbox" class="QGosQoeY76W_hWM2rgwJ MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">Approved</label>
                        </div>
                        <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _ryfipzijJEI18CFfJIm">
                            <input id="inline-2-checkbox" type="radio" value="" name="role" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk">
                            <label for="inline-2-checkbox" class="QGosQoeY76W_hWM2rgwJ MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">Declined</label>
                        </div>
                        <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _ryfipzijJEI18CFfJIm">
                            <input checked="" id="inline-checked-checkbox" type="radio" value="" name="role" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk">
                            <label for="inline-checked-checkbox" class="QGosQoeY76W_hWM2rgwJ MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">keep Pending</label>
                        </div>
                    </div>
                </div>
               
            <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE ZLpoEVbvjZ2Wkm42QsPD">
                <button type="submit" class="bg-white dark:bg-black dark:text-white text-black wP9HMsqy6b96l2HBRbgb bg-primary-700 hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Update user
                </button>
                <button type="button" class="_Vf4q96EaVweU8Te8R7I bg-red-500 dark:bg-blue-900 ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE _lvH1U9a1qR55wvLD2NC PWreZZgitgAm_Nv4Noh9 QatzkcsV8pEcuVZXWI0r _2vrbtasf6kpgU0SqCxk _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x BmbNHT2fTUPQcjxkS_AF _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ s8SeTMYjMx__lmlA1xPh QMg9ot58eFU1MktA3i85 DTyjKhtXBNaebZa5L0l9 mjQ5_LY0AbHQ_EJj7qy4 M5sqom8AcnqAX31nf13M">
                    <svg class="b7Lf_ucBvHbZEidPjF8t wikskPDYEBn0nlvDss8h eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
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
if (document.querySelector("#alluser")){


    function alltrans() {
    
        document.querySelector('#alldisplaed').innerHTML += `<tr class="border-b dark:border-gray-700">
                                                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27"</th>
                                                <td class="px-4 py-3">PC</td>
                                                <td class="px-4 py-3">Apple</td>
                                                <td class="px-4 py-3">300</td>
                                                <td class="px-4 py-3">$2999</td>
                                                <td class="px-4 py-3 flex items-center justify-end">
                                                    <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                        </svg>
                                                    </button>
                                                    <div id="apple-imac-27-dropdown" class="hidden  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul class="py-1  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                            <li>
                                                                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-blue-600">Approve</a>
                                                            </li>
                                                            <li>
                                                                <b onclick="popedit('flex')"  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="" >Edit</b>
                                                            </li>
                                                        </ul>
                                                        <div class="py-1">
                                                            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>`
    
                                            
    }
    alltrans()
      
            
      
    
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
                console.log(v);
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
    
    
    
    function popedit(xc) {
    
        document.querySelector('#mian_sdkjd').innerHTML +=  `
    <link style="visibility: hidden;" rel="stylesheet" href="../css/update.css">
    
    <div id="updateUserModal" tabindex="-1" class="M4JgixW4UN7OS2HTxbTr D3uwZnyUNJgNm_hyQDLO S7befmKAx0_HNZ296rd2 _ccvJ9JsfoF81kZ3lkJh AMjjbpqWkJRuIruRGJbg _J57_xJ7KhmAX1D2Pnei TnQIXm76rhSCcMn8B_oh _WclR59Ji8jwfmjPtOei neyUwteEn7DOg9pBSJJE jCISvWkW5oStPH6Wrb_H ZOkM24P9ZayPKnxPVlDZ fljDC2TZ1RFTw3w5cGqo _8xmCPYX9aFuyHMd1Tch justify-center items-center kqgYncRJQ7spwKfig6It" aria-modal="true" role="dialog">
    <div class="QYPW4nl6nHaIbrtaXf4h iHyrYta0Jcy0_7nMWLK7 jCISvWkW5oStPH6Wrb_H _Y8m3EApcgnyDOY6pRW3 j34KztD3SBxL_tQWzosr _ALrM3QjY4w2nD9x3ELz">
        <!-- Modal content -->
        <div class="QYPW4nl6nHaIbrtaXf4h  iHyrYta0Jcy0_7nMWLK7 yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge lhxYQ_2y3sYNN3W1V_3q _cpMMPjFQqjJu4i0Puod XbA9uXviv8Jns1WOGGH8 ">
            <!-- Modal header -->
            <div class="kqgYncRJQ7spwKfig6It _T15kfOPGkvwZnqhqKce neyUwteEn7DOg9pBSJJE  f3MzTUUAX5Nwv2yQ2zXq _9OKVeTXzfSwD_NYO6_G J3t_0yqHPGMkoCZ5_IKE umaBek2qJLzF9vdDPtgc F4SPvvqykwH_AGlVvGqN _BIVSYBXQUqEf_ltPrSk">
                <h3 class="VwrSTsh__so52zqMJvws LYMps1kO2vF8HBymW3az g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Update User
                </h3>
                <button onclick="popedit('xc')" type="button" class="rZZ58B08lxezTX7iNgGT bHPiH67mBn1_jgR3TrvW _s1HFAQPzDGxzspem6eZ _xQT_qSXfwWf6ZhwRle4 _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x rV1LyZ_IhXGwxm69VRe9 gIFtGbAiQuKVOg5QUCDU ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9" data-modal-toggle="updateUserModal">
                    <svg aria-hidden="true" class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="BWabIWdbZ5qWNbPXxuBc">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form class="dark:text-white text-black z-50" >
                <div class="i0EfZzmTLElZVOble53D Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G hAFtnIdYDiO6M_67F11P">
                    <div>
                        <label for="id" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">uuid</label>
                        <input type="hidden" name="uuid" id="first-name" value="Bonnie" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="John" required="">
                    </div>
                    <div>
                        <label for="id" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">First Name</label>
                        <input type="hidden" name="uuid" id="first-name" value="Bonnie" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="John" required="">
                    </div>
                    <div>
                        <label for="last-name" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">Amount</label>
                        <input type="text" name="last-name" id="last-name" value="Amount" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Doe" required="">
                    </div>
                    <div>
                        <label for="email" class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">Email</label>
                        <input type="email" name="email" id="email" value="bonnie.green@company.com" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-600 focus:border-primary-600 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="john@company.com" required="">
                    </div>
                    <div>
                        <label for="user-permissions" class="ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                            User(*)
                            <button type="button" data-tooltip-target="tooltip-dark" data-tooltip-style="dark" class="P_IkL3rPmLoJg_v9DE3m">
                                <svg aria-hidden="true" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT rZZ58B08lxezTX7iNgGT avTmsFU5TwHXQh07Ji35 _xQT_qSXfwWf6ZhwRle4 DTyjKhtXBNaebZa5L0l9 jt7K__cy_iHy7aMDMaLX" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                <span class="BWabIWdbZ5qWNbPXxuBc">Details</span>
                            </button>
                            <div id="tooltip-dark" role="tooltip" class="ADhvqXKjAizJqFADNpvd iZ8W30HPRQAuO6al90LU p3NM1OB16vfk_yD2siUB _v8hjA9ct_v6OhSQD7fC zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA wfYeBrW4MRQzEZ3x_GDI XklWzT8y98pp042XEQp4 oTkHpmOXEgQRdykOe3sq wP9HMsqy6b96l2HBRbgb J_ldU2ISOuzV8yupuBpE _Qk4_E9_iLqcHsRZZ4ge ltPMSn_g3PKyqeS8vmZk AtHBVur__RVIv6BHiI4a Usqns9w__onp5CWoXDJ0 _t2wg7hRcyKsNN8CSSeU" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 8px);">
                                User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices.
                                <div class="POMYoNHqN8pOsNYFYFHr" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
                            </div>
                        </label>
                        <select id="user-permissions" class="jCHKuJ3G7rklx_LiAfbf PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa g3OYBOqwXUEW4dRGogkH MxG1ClE4KPrIvlL5_Q5x _Qk4_E9_iLqcHsRZZ4ge focus:ring-primary-500 focus:border-primary-500 ttxtqsLWp2pFRX8yUvWd jCISvWkW5oStPH6Wrb_H _4wtDMQ2AdJOlYvml5sL _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Operational</option>
                            <option value="NO">Non Operational</option>
                        </select>
                    </div>
                   
                    
                    <div class="nqKrWSk_pMaLoiyBLZG5">
                        <label class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0" for="file_input">Upload avatar</label>
                        <div class="neyUwteEn7DOg9pBSJJE jCISvWkW5oStPH6Wrb_H U4m6yFbNbl_ea9gVo2Uw">
                            <img class="_9OKVeTXzfSwD_NYO6_G HzSN_B__bXx8FUbQhXu_ q6R7ifHNsy60SzijPw4M n8e6ORKgPTnY6zgs5HS7 p53owZpM5bKmL3hRWSQr _6or7OI7iFzuq6XP4tjM" src="http://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar">
                            <div class="jCISvWkW5oStPH6Wrb_H">
                                <input class="jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x g3OYBOqwXUEW4dRGogkH jCHKuJ3G7rklx_LiAfbf _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 T_tFENbpK8DMDNjQRyQa avTmsFU5TwHXQh07Ji35 eCx_6PNzncAD5yo7Qcic qHIOIw8TObHgD3VvKa5x _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z" aria-describedby="file_input_help" id="file_input" type="file">
                                <p class="SczeiPsQKuBQsFlbqCbz cq1ij1EsUw0V2rrqeYEc XklWzT8y98pp042XEQp4 oTkHpmOXEgQRdykOe3sq K1PPCJwslha8GUIvV_Cr _Rz9TooiK_4jTN_Ub8Gm" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="nqKrWSk_pMaLoiyBLZG5">
                        <label class="ttxtqsLWp2pFRX8yUvWd rD4HtsUG_hahmbh2Kj09 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0" for="role">Status </label>
                        <div class="FLfl_xS1XCloWU2wRi87 U4m6yFbNbl_ea9gVo2Uw _rT9gacXyvSO1fCjLFak">
                            <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _ryfipzijJEI18CFfJIm">
                                <input id="inline-checkbox" type="radio" value="" name="role" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk">
                                <label for="inline-checkbox" class="QGosQoeY76W_hWM2rgwJ MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">Approved</label>
                            </div>
                            <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _ryfipzijJEI18CFfJIm">
                                <input id="inline-2-checkbox" type="radio" value="" name="role" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk">
                                <label for="inline-2-checkbox" class="QGosQoeY76W_hWM2rgwJ MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">Declined</label>
                            </div>
                            <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _ryfipzijJEI18CFfJIm">
                                <input checked="" id="inline-checked-checkbox" type="radio" value="" name="role" class="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk">
                                <label for="inline-checked-checkbox" class="QGosQoeY76W_hWM2rgwJ MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH _Rz9TooiK_4jTN_Ub8Gm">keep Pending</label>
                            </div>
                        </div>
                    </div>
                   
                <div class="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE ZLpoEVbvjZ2Wkm42QsPD">
                    <button type="submit" class="bg-white dark:bg-black dark:text-white text-black wP9HMsqy6b96l2HBRbgb bg-primary-700 hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Update user
                    </button>
                    <button type="button" class="_Vf4q96EaVweU8Te8R7I bg-red-500 dark:bg-blue-900 ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE _lvH1U9a1qR55wvLD2NC PWreZZgitgAm_Nv4Noh9 QatzkcsV8pEcuVZXWI0r _2vrbtasf6kpgU0SqCxk _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x BmbNHT2fTUPQcjxkS_AF _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x bFARDnno0HUtfhktTXfR _gKcj49wZgnwx1LpcJi6 _F_1gdhzusC6tSOWHtx_ s8SeTMYjMx__lmlA1xPh QMg9ot58eFU1MktA3i85 DTyjKhtXBNaebZa5L0l9 mjQ5_LY0AbHQ_EJj7qy4 M5sqom8AcnqAX31nf13M">
                        <svg class="b7Lf_ucBvHbZEidPjF8t wikskPDYEBn0nlvDss8h eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
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
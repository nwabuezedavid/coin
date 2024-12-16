
let cdhvrona = null

let pro = location.protocol

async function getText(namehtml) {
  url = location.href
  let csrf = document.querySelector('.csrf')
  localStorage.setItem("url", `${ url}`)
   urls = localStorage.getItem('url')

     const res = await fetch(`${url }`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json',
        'X-CSRFToken':csrf.value
      },
   });


   const text = await res.text();
   getside(gg= document.querySelector('#homeslidecx'),numd=0)

  document.querySelector('.nfdd').innerHTML= text
  document.querySelector('.ofgkd').classList.add('hidden')





  if (location.href === `${pro}://${location.host}/` ){
    let gg= document.querySelector('#homeslidecx')
    getside(gg,2)
  }else{
    document.querySelector('.indff').innerHTML = document.querySelector('.inputbodys').value
  }


  if (location.href !== `${pro}://${location.host}/`) {


  let formessahe = document.querySelector('#formessahe')
  console.log('forog',formessahe);
  formessahe.addEventListener('submit',(e)=>{
    e.preventDefault()
    sendcomment()
  })

  checkiput('#name')
}

 if ( location.href !== `${pro}://${location.host}/`) {



  function sendcomment() {



    let name = document.querySelector('#name').value
    let massage = document.querySelector('#message').value
    let title = document.querySelector('.title')
    urlx = location.host
    if (!localStorage.getItem('message')){
      localStorage.setItem('message', name)
    }else{
      name = localStorage.getItem('message')

    }

    if (name!="" & massage!=""){

    fetch(`${pro}://${urlx}/messages_fetch/${title.value}/`,
    {
      method:"POST",

      headers:{
        'Content-Type':'application/json',
        'X-CSRFToken':csrf.value
      },
      body:JSON.stringify({
        name:name,
        message:massage
      })
    }
    )
    let pdi = document.querySelector('#formessageoout')
    pdi.innerHTML+= `
   <div class=" h-fit w-full flex flex-col text-black dark:text-white   p-5 border-b-2 border-b-gray-500">
   <span class=" gap-2 w-full flex flex-row  py-3 text-black dark:text-white ">
  <i class="h-10 my-2 w-10 p-2 border border-y-4 border-x-0 border-blue-700 rounded-[50%]"></i>

       <b>
           <h1>${name} </h1>
           <strong>${new Date()}</strong>
       </b>
   </span>
<p>${massage}</p>
  </div>`
  localStorage.setItem('message', name.toUpperCase())
  name = localStorage.getItem('message')

  document.querySelector('#message').value=''
  checkiput('#name')
     }else{

     }
  }

 }

}
document.addEventListener('click',(e)=>{
  if (e.target.className == 'dark:text-white  text-black bi bi-chevron-right hover:text-red-300 cursor-pointer chevc') {

    e.target.addEventListener('click',()=>{
  nin = 0
  nin++
  let gg= document.querySelector('#homeslidecx')
  if(loca)
  getside(gg,nin)
})
 }
})

 function  getside(gg,numd){


  url = location.host

 let obj = []

 fetch(`/slide/`)
 .then(res => res.json())
 .then((data) => {
  console.log('length',data.data.length);
  let count = Number(numd)
  if (Number(numd) >= Number(data.data.length)) {
    count = Number(data.data.length)
  }
  let dataf = data.data



    let lable = data.lable
    gg.innerHTML = `<div class="bg-white dark:text-white dark:bg-[#2020249e] p-4 m-0 my-2 w-full flex flex-row items-center justify-between">
    <big>
      <b class="flex text-sm  text-center flex-col md:flex-row item-left md:items-center ">
          <h5 class="flex text-sm  text-center flex-row items-center uppercase   text-red-500"><i class="dark:text-white  text-black bi bi-dot bg-red text-red-500 animate-ping text-2xl border dark:border-none-black    "></i> Trending <i class="dark:text-white  text-black bi bi-arrow-right"></i></h5>
       <a  class="text-black hover:text-blue-300 ml-2 font-thin dark:text-white" onclick="h('detail','detailpage','view/${ dataf[5].title }/')" >${ dataf[5].title }</a>
      </b>
    </big>
    <span>
    <i class="cusor-pointer dark:text-white  text-black bi bi-chevron-right hover:text-red-300 cursor-pointer chevc" onclick="getside(gg= document.querySelector('#homeslidecx'),numd=0)"  ></i>
    </span>
      </div>
    <div  class="bg-white p-4 dark:bg-[#2020249e]  gap-2 w-full flex flex-row flex-grow  h-[600px] flex-wrap md:flex-col" >

      <a onclick="h('detail','detailpage','view/${ dataf[5].title }/')"  class= "w-1/2 h-[220px] md:h-[100%]    md:m-0 shadow relative flex-grow "style=" background-size: cover; background-image: url( ${pro}://127.0.0.1:8000${ dataf[5].img });">
    <b class=" pt-9 bg-gradient-to-t from-black absolute bottom-0 w-full h-[40%] justify-end flex flex-col items-left text-left p-4 justify-left">
                      <h6 class="bg-[tomato] shadow rounded w-[fit-content] p-1 text-white font-thin font-xs text-[8px] ">${ lable[dataf[5].type_con ].name.toUpperCase()  }</h6>

    <p class="text-2xl text-white text-bottom flex dark:text-white">
    ${ dataf[5].title }



      </p>
    </b>
      </a>
      <div class=" w-1/2 md:h-[100%] h-3/4 shadow flex flex-col flex-grow">
    <a onclick="h('detail','detailpage','view/${ dataf[2].title }/')" class=" w-full h-[50%]  shadow relative flex-grow" style=" background-size: cover; background-image: url(${pro}://127.0.0.1:8000${dataf[2].img });">
      <b class=" pt-9 bg-gradient-to-t justify-end break-word break-all from-black absolute bottom-0 w-full h-1/2 flex flex-col items-left text-left p-4 justify-left">
                          <h6 class="bg-[tomato] shadow rounded w-[fit-content] p-1 text-white font-thin font-xs text-[8px] ">${ lable[dataf[2 ].type_con ].name.toUpperCase()  }</h6>

      <p class="text-2xl text-white  text-bottom flex w-full">
      ${ dataf[2].title }</p>
      </b>
    </a>
    <div class="w-full h-[50%]  shadow flex flex-row">
      <a onclick="h('detail','detailpage','view/${ dataf[1].title }/')" class="w-1/2 h-[100%] mr-0 md:mr-0  shadow relative flex-grow" style=" background-size: cover; background-image: url(${pro}://127.0.0.1:8000${ dataf[1].img });">
          <b class=" pt-9 bg-gradient-to-t from-black absolute bottom-0 w-full h-[70%] flex flex-col items-left text-left p-4 justify-end">
                              <h6 class="bg-[tomato] shadow rounded w-[fit-content] p-1 text-white font-thin font-xs text-[8px] ">${ lable[dataf[1].type_con ].name.toUpperCase()  }</h6>

          <p class="text-2xs text-white text-bottom flex dark:text-white break-word break-all ">
          ${ dataf[1].title }</p>
          </b>
      </a>
      <a onclick="h('detail','detailpage','view/${ dataf[6].title }/')" class="w-1/2 h-[100%]  shadow relative flex-grow " style=" background-size: cover; background-image: url(${pro}://127.0.0.1:8000${ dataf[6].img })">
          <b class=" pt-9 bg-gradient-to-t from-black absolute bottom-0 w-full h-[70%] flex flex-col items-left text-left p-4 justify-end">
                              <h6 class="bg-[tomato] shadow rounded w-[fit-content] p-1 text-white font-thin font-xs text-[8px] ">${ lable[dataf[6].type_con ].name.toUpperCase()  }</h6>

          <p class="text-2xs text-white text-bottom break-all flex">
          ${ dataf[6].title }</p>
          </b>
      </a>
    </div>
      </div>
    </div>`
  }

    )


 }

 getText();
 const doma = location.host

function h(pageTitle,id,url) {

 document.querySelector('.ofgkd').classList.remove('hidden')
   history.pushState({
       id: id
   }, pageTitle, ` ${url === '/'? url : '../../'+url }`);
   getside(gg= document.querySelector('#homeslidecx'),numd=0)

   getText(url)


}




function onlo() {


    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')

      } else {
        document.documentElement.classList.remove('dark')
      }}
      onlo()

      let sys = document.querySelector('#sysv')
      let bd = document.querySelector('body')
      let html = document.querySelector('html')





     function dark (ds){
          localStorage.theme = 'dark'
          html.classList.add('dark')
          let  dsx = document.querySelector(ds)

      };
     function light (ds){
          localStorage.theme = 'light'
          html.classList.remove('dark')
          let  dsxx = document.querySelector(ds)

      };

      window.addEventListener('scroll',()=>{
  let dd = 'absolute top-0 '
  let  mainnave = document.querySelector('.main-nave')
  let  firstn = document.querySelector('.firstn')
  let  ssshownav = document.querySelector('.shownav')
  mainnave.classList.toggle('top-0',window.scrollY > 0)

  mainnave.style.position = 'absolute'
  ssshownav.style.position = 'absolute'
  ssshownav.classList.add('top-[1000px]',window.scrollY > 0)
  firstn.classList.toggle('hidden',window.scrollY > 0)
})
      function toggleuni (d){
        let clasto = document.querySelector(d)
        clasto.classList.toggle('hidden')
        checkiput('#name')
      }

    if (location.href !== `${pro}://${location.host}/`) {

      function checkwith() {
        if (Number(bd.clientWidth) <= 789 ) {
          let C = document.querySelector('.chidel')
          let CC = document.querySelector('.CXC')
          CC.innerHTML += C.innerHTML



        }else{
          let C = document.querySelector('.chidel')

          let CC = document.querySelector('.CXC')
          CC.innerHTML = CC.innerHTML

        }
      }
      checkwith()

    }




let ini = true

function reside(name) {
  alert('djfj')
  let vif = document.querySelector(name)
  b= vif.clientWidth
  console.log(b);
  vif.style.height= `${Number(b)}px`
}





function checkiput(df) {
  let name = document.querySelector(df).value
  if (localStorage.getItem('message')){

     x =  localStorage.getItem('message')
      document.querySelector(df).value = x
      document.querySelector(df).value.toUpperCase()
      document.querySelector(df).readOnly = true
      document.querySelector(df).style.background="gray"
      document.querySelector(df).style.color="white"
      document.querySelector(df).style.border="red"


    }
}
setInterval(() => {
  if (document.querySelector('#homeslidecx')){

    getside(gg= document.querySelector('#homeslidecx'),numd=0)
  }
}, 10000);

document.querySelectorAll('div').forEach(e=>{
  e[-1].addEventListener('load',e => getside(gg= document.querySelector('#homeslidecx'),numd=0) )
})

   window.addEventListener('popstate',()=> getText(location.href))

const file  = document.querySelector('#file')
let pro = location.protocol
file.addEventListener('change',()=>{
    const f = new FileReader()

f.readAsDataURL(file.files[0]);
f.addEventListener('load',()=>{
const bytx = f.result

localStorage.setItem('filexv',String(bytx) )


})
})
function kycfor() {


    const Kycuserapi  = document.querySelector('#pk').value
    const csrf  = document.querySelector('#csrf')
    const lname  = document.querySelector('#last_4').value
    const fname  = document.querySelector('#first_4').value
    const fathernamef  = document.querySelector('#first_5').value
    const fathernamel  = document.querySelector('#last_5').value
    const PAN  = document.querySelector('#input_11').value
    const DateofBirth  = document.querySelector('#lite_mode_8').value.toString()
    const address1  = document.querySelector('#input_14_addr_line1').value
    const address2  = document.querySelector('#input_14_addr_line2').value
    const city  = document.querySelector('#input_14_city').value
    const state  = document.querySelector('#input_14_state').value
    const zipcode  = document.querySelector('#input_14_postal').value
    const Country  = document.querySelector('#input_14_country').value
    const filex  = document.querySelector('#file')
    const emailn  = document.querySelector('#input_16').value
    const gender  = document.querySelector('input[ name="q6_2aGender"]:checked').value
    const martialstatue  = document.querySelector('input[ name="q7_2bMarital"]:checked').value
    const citizenStatus  = document.querySelector('input[ name="q10_4Status"]:checked').value
    const PANStatue  = document.querySelector('input[name="kkd"]:checked').value
    const proofaddress  = document.querySelector('input[name="nm"]:checked').value
    console.log(lname!="" , fname !="" , fathernamef !="" , fathernamel !="" , PAN !="" , DateofBirth !="" , address1 !="" , city !="" , state !="" , zipcode !="" , Country !="" , filex.files[0] != undefined , emailn !="" , gender !="" , martialstatue !="" , citizenStatus !="" , PANStatue !="" , proofaddress != "");
    console.log(filex.files[0] != undefined);
    console.log(filex.files[0]);
    const textbtn = document.querySelector('#textbtn')
    const errormessage = document.querySelector('#errormessage')
    const pinbtn = document.querySelector('#pinbtn')
    textbtn.classList.toggle('hidden')
    pinbtn.classList.toggle('hidden')
 let byt =  localStorage.getItem('filexv')
if ( lname!="" & fname !="" & fathernamef !="" & fathernamel !="" & PAN !="" & DateofBirth !="" & address1 !="" &  city !="" & state !="" & zipcode !="" & Country !="" & filex.files[0] != undefined & emailn !="" & gender !="" & martialstatue !="" & citizenStatus !="" & PANStatue !="" & proofaddress != "") {




   let ms = new FormData()
  ms.append('lname', lname)
  ms.append('fname', fname)
  ms.append('fathernamef', fathernamef)
  ms.append('fathernamel', fathernamel)
  ms.append('PAN', PAN)
  ms.append('DateofBirth', DateofBirth)
  ms.append('address1',address1)
  ms.append('address2', address2)
  ms.append('city', city)
  ms.append('state', state)
  ms.append('zipcode', zipcode)
  ms.append('Country', Country)
  ms.append('filex', byt)
  ms.append('email',emailn)
  ms.append('gender', gender)
  ms.append('martialstatue', martialstatue)
  ms.append('citizenStatus', citizenStatus)
  ms.append('PANStatue', PANStatue)
  ms.append('proofaddress', proofaddress)




console.log(Kycuserapi);
host = location.host
fetch(`${pro}://${host}/api/Kycuserapi/${String(Kycuserapi)}/`, {
    method:'POST',
    headers:{'X-CSRFToken':csrf.value},body: ms   })

.then(res=> res.json())
.then((e)=> {

    location.href = `${pro}://${host}/dashboard/${String(Kycuserapi)}/`
;})
.catch(err => alerting("any error occurred reload and try again ")
)
textbtn.classList.add('hidden')
    pinbtn.classList.remove('hidden')
}

else{

errormessage.innerHTML = " Sorry Input Can't be Empty"
        if(document.querySelector('#errormessagecon')){
            document.querySelector('#errormessagecon').classList.remove('hidden')
        }
}
textbtn.classList.toggle('hidden')
pinbtn.classList.toggle('hidden')
}
function alerting(mess) {
    const container = document.querySelector('#successModal')
let message  = document.querySelector('#maintemaler')
console.log(container);
container.classList.toggle('hidden')
message.innerHTML =String(mess)
}
if(document.querySelector('#disclosed')){
    document.querySelector('#disclosed').addEventListener('click',()=>{
        document.querySelector('#errormessagecon').classList.add('hidden')

    })
}
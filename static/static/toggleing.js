function toggled(classx) {
    const cal = document.querySelector(classx)
    

        cal.classList.toggle('max-sm:hidden')
        cal.classList.toggle('max-sm:transition')
        
       

    
}

tailwind.config = {
    darkMode:"class",
     theme: {
       extend: {
         
       }
     }
   }


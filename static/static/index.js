
tailwind.config = {
    darkMode:"class",
     theme: {
       extend: {
         
       }
     }
   }





function onlo() {
    

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove('dark')
        
      } else {
        document.documentElement.classList.remove('dark')
      }}
      onlo()
     
      let sys = document.querySelector('#sysv')
      let bd = document.querySelector('body')
      let html = document.querySelector('html')
    console.log(document.children);
   
      
     
      
      
     function dark (){
          localStorage.theme = 'dark'
          html.classList.add('dark')
          
          
      };
     function light (){
          localStorage.theme = 'light'
          html.classList.remove('dark')
          
          
      };
  
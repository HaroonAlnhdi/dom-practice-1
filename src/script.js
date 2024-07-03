// Query Selectors

 const sun = document.querySelectorAll('i ')[0]
 const moon = document.querySelectorAll('i ')[1]
 const body = document.querySelector('body');
 console.log(sun)
 console.log(moon)



        const darkMode = () => {

          body.className ="darkMood"
        }
        


        const lightMode = () => {
            
            body.className="body"
        }

        moon.addEventListener('click' , darkMode);
        sun.addEventListener('click'  ,lightMode);


        //bouns :


        // For the Sun
         sun.addEventListener('mouseenter' , () => {
            sun.style.borderBottom = '3px solid';
        
        
        } );
        sun.addEventListener('mouseout' , () => {sun.style.borderBottom = ''} )



        // For the Moon 
        moon.addEventListener('mouseenter' , () => {
            moon.style.borderBottom = '3px solid';
        
        
        } );
        moon.addEventListener('mouseout' , () => 
            {moon.style.borderBottom = ''} )
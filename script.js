const buttun = document.querySelectorAll('.btns')
const body=  document.querySelector('body');
buttun.forEach(function(buttun){
    buttun.addEventListener('click',function(event){
        if(event.target.id==='grey'){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id==='yellow'){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id==='white'){
            body.style.backgroundColor=event.target.id
        }

        if(event.target.id==='green'){
            body.style.backgroundColor=event.target.id
        }

    })
    
})

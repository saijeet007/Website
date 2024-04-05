var  bar = document.getElementById('bar');
var nav= document.getElementById( 'navbar' );

if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
        console.log("working")
    }); 
    
}  
// console.log("dsd")
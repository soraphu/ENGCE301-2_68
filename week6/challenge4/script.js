const _links = document.querySelectorAll("nav a");

_links.forEach( Element => {
    Element.addEventListener( "click", Do => {
        Do.preventDefault() ;
        alert( Element.innerHTML ) ;
    } )
});

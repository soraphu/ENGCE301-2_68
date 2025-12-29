const _link = document.querySelectorAll( "nav a" ) ;

for (let i = 0; i < _link.length; i++) {
    _link[i].addEventListener( "click", e => {
        e.preventDefault() ;
        alert( _link[i].innerHTML ) ;
    } ) ;
}
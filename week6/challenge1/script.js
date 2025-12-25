const p = document.getElementsByTagName( 'p' ) ;

for (let i = 1; i < p.length ; i++) {
    p[i].innerHTML = `Change tag p index of ${i}` ;
}
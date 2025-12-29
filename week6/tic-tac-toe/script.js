const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

// Add event listeners?
const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) {
  box.addEventListener('click', putX );
}


function putX(Event) {
  // Get the element that was clicked
  const container = Event.currentTarget;
  // Create an <img> tag with the X img src
  const image = document.createElement('img');
  image.src = X_IMAGE_URL ;
  // Append that <img> tag to the element
  container.appendChild(image);
  container.removeEventListener('click', putX) ;
  setTimeout(() => {
    if( winCondition( X_IMAGE_URL ) )
      return ;
    if( comAction() )
      return ;
  }, 500);
}//putXO

function comAction(){
  let randomI ;
  const image = document.createElement('img') ;
  image.src = O_IMAGE_URL ;
  
  while( true ) {
    randomI = Math.floor( Math.random() * 9 ) ; // สุ่มเลข 0 - 8.99...
    if( !(boxes[ randomI ].firstChild) ) {
      boxes[ randomI ].appendChild( image ) ;
      boxes[ randomI ].removeEventListener( 'click', putX ) ;
      if( winCondition( O_IMAGE_URL ) )
        return true ;
      else return ;
    }//if
  }
}//comAction

function winCondition( Side ) {
  const boxes = document.querySelectorAll('#grid div');
  const imgSrc = [...boxes].map(Element => {
    const img = Element.querySelector('img');
    return img ? img.src : "empty" ;
  });
  const notEndYet = imgSrc.some( Element => Element === "empty" ) ;
  let sideText ;
  
  if( Side == X_IMAGE_URL )
    sideText = "X"
  else 
    sideText = "O"
  
  if( ( imgSrc[0] == Side ) && ( imgSrc[1] == Side ) && ( imgSrc[2] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  else if ( ( imgSrc[3] == Side ) && ( imgSrc[4] == Side ) && ( imgSrc[5] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  else if ( ( imgSrc[6] == Side ) && ( imgSrc[7] == Side ) && ( imgSrc[8] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  //Rows check
  else if ( ( imgSrc[0] == Side ) && ( imgSrc[3] == Side ) && ( imgSrc[6] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  else if ( ( imgSrc[1] == Side ) && ( imgSrc[4] == Side ) && ( imgSrc[7] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  else if ( ( imgSrc[2] == Side ) && ( imgSrc[5] == Side ) && ( imgSrc[8] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  //Column check
  else if ( ( imgSrc[0] == Side ) && ( imgSrc[4] == Side ) && ( imgSrc[8] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  else if ( ( imgSrc[2] == Side ) && ( imgSrc[4] == Side ) && ( imgSrc[6] == Side ) ) {
    endGameAlert( sideText ) ;
    return true ;
  }
  //Cross check
  else if( !notEndYet ) {
    endGameAlert( "There is no" ) ;
    return true ;
  }
}//winCondition

function endGameAlert( Side ) {
  setTimeout(() => {
    alert( `${Side} winner.` ) ;
    location.reload() ;
  }, 100);
}//endGameAlert
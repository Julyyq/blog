var metas = document.getElementsByTagName('meta');
var i;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
  document.getElementsByTagName("body")[0].style.backgroundImage = "none"
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
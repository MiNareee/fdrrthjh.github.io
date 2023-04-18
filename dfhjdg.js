function alerted(){
	let t=true
  if (t){
    $('input:checkbox:checked').click( function () {
  var types = document.getElementsByClassName('active');
  while (types[0]) {
    types[0].remove();
  }
});
	}else{
    console.log(10)
  }
}

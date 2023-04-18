function alerted(){
	var checked = [];
	$('input:checkbox:checked').each(function() {
	checked.push($(this).val());
	});
	console.log(checked)
	let t=true
  if (t){
    $('#del').click( function () {
  var types = document.getElementsByClassName('active');
  while (types[0]) {
    types[0].remove();
  }
});
	}else{
    console.log(10)
  }
}






let form = document.getElementById('sbb');
form.addEventListener('click', function(event){

event.preventDefault();

calling();

});


function calling() {

  let dateOfBirth = document.getElementById('datedate').value;

  var z = document.getElementById('para');
  z.innerHTML = "your Akan Name is" + " " + dateOfBirth ;

  console.log(dateOfBirth);


};












// const calender = document.getElementById('datedate').value;































// // invaliddate
// if ( month <=0 || month >12){
//   alert('Invalid Date')
// };

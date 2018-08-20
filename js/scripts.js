function Address(first, last, address, city, state, zip, phone) {
  this.first = first;
  this.last = last;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
}

Address.prototype.title = function() {
  return this.last + ", " + this.first
}

$(document).ready(function() {
  $("#addressForm").submit(function() {
    event.preventDefault();

    var firstName = $("#first").val();
    var lastName = $("#last").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();

    var newContact = new Address(firstName, lastName, address, city, state, zip, phone);

    $("#list").append("<li><span class='contact'>" + newContact.title() + "<span></li>")
  })
})

// function addressBook(first, last, address, city, state, zip, phone) {
//   this.firstName = first;
//   this.lastName = last;
//   this.address = address;
//   this.city = city;
//   this.state = state;
//   this.zip = zip;
//   this.phone = phone;
// }
//
// addressBook.prototype.title = function() {
//   return this.lastName + ", " + this.firstName
// }
//
// $(document).ready(function() {
//   $("#addressForm").submit(function(event) {
//     event.preventDefault();
//
//     var firstName = $("#first").val();
//     var lastName = $("#last").val();
//     var address = $("#address").val();
//     var city = $("#city").val();
//     var state = $("#state").val();
//     var zip = $("#zip").val();
//     var phone = $("#phone").val();
//
//     var newContact = new addressBook(firstName, lastName, address, city, state, zip, phone);
//
//     $("#list").append("<li><span class='contact'>" + newContact.title() + "</span></li>")
//   })
// });

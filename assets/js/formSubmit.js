/*
  entry.2116052852 "Full Name" required
  entry.1060472253 "Your Designation" required
  entry.1558582620 "Email address"> required
  entry.515591995 "Phone Number">
  entry.805141573 "Company Name"> required
  entry.1673533576 "Company Page (Any of Facebook, Website, LinkedIn etc).">
  entry.288713975 "For which product(s) do you want to use Better Sales AI?"> required
  entry.712453443 "How did you hear about us? (Website, Google, Facebook, LinkedIn, Twitter, Instagram, Friend, Other)">
*/

$(function() {
  $('#submit').on('click', function() {

    // required fields
    var fullName = $('#fullName').val();
    var yourDesignation = $('#designation').val();
    var email = $('#email').val();
    var product = $('#product').val();
    var companyName = $('#companyName').val();

    // optional fields
    var phoneNumber = $('#phone').val() || 'no set';
    var companyPage = $('#companyPage').val() || 'no set';
    var hearAbout = $('#hearAbout').val() || 'no set';

    if (!fullName || !yourDesignation || !email || !companyName || !product) {
      alert('Please fill out all required fields.');
      return;
    }

    var data = {
      'entry.2116052852': fullName,
      'entry.1060472253': yourDesignation,
      'entry.1558582620': email,
      'entry.515591995': phoneNumber,
      'entry.805141573': companyName,
      'entry.1673533576': companyPage,
      'entry.288713975': product,
      'entry.712453443': hearAbout
    };

    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfh3TASOKnAWkhYeiT3gO4mM869QOcAUm8HpT2tTtoPpCR0iQ/formResponse',
      data: $.param(data), // URL encode the data
      contentType: 'application/x-www-form-urlencoded',
      complete: function() {
        alert('send success');
      }
    });
  });
});
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.xbox')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))



function sendEmail() {
  
  
    Email.send({
  
    Host: "smtp.gmail.com",
  
    Username: 'nathanramesh06@gmail.com',
  
    Password: 'Nimble@1234',
  
    To: 'nathanramesh05@gmail.com',
  
    From: document.getElementById('sender').value,
  
    Subject: document.getElementById('message').value,
  
    Body: document.getElementById('number').value,
  
    }).then(function (message) {
  
    alert("Email sent successfully")
  
    });
  
  }
var login = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === "" && password === "") {
    ons.notification.alert('Congratulations!');
    document.querySelector('#myNavigator').pushPage('login.html', {data: {}});
  }
 
};
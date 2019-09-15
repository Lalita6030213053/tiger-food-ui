document.addEventListener('init', function(event) {
    console.log('This is a lifecycle event!', event.target);
  
    var page = event.target;
    if (page.matches('#helloworld-page')) {
      page.querySelector('ons-toolbar .center').innerHTML = 'Tiger Food';
      page.querySelector('ons-button').onclick = function() {
        ons.notification.alert('Hello world!');
      };
    }
  });
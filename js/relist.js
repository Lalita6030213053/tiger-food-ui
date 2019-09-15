ons.ready(function() {
    var infiniteList = document.getElementById('infinite-list');
  
    infiniteList.delegate = {
      createItemContent: function(i) {
        return ons.createElement('<ons-list-item>Item ' + i + '</ons-list-item>');
      },
      countItems: function() {
        return 10000;
      }
    };
  
    infiniteList.refresh();
  });
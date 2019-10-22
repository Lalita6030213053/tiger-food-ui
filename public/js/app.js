// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzbn-jyzxH2IiXmEhS1umKD0YGNCm8Uzo",
  authDomain: "test-65a51.firebaseapp.com",
  databaseURL: "https://test-65a51.firebaseio.com",
  projectId: "test-65a51",
  storageBucket: "test-65a51.appspot.com",
  messagingSenderId: "574727921427",
  appId: "1:574727921427:web:7bdc0ca2c5a9e1e7fc04e6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

document.addEventListener('init', function (event) {
  var page = event.target;

//home  
  if (page.id === 'homePage') {
    console.log("homePage");

    $("#dessertbtn").click(function () {
      $("#myNavigator")[0].pushPage("dessert.html");
    });

    $("#noodlesbtn").click(function () {
      $("#myNavigator")[0].pushPage("noodles.html");
    });

    $("#ctobtn").click(function () {
      $("#myNavigator")[0].pushPage("cook_order.html");
    });

    $("#fastbtn").click(function () {
      $("#myNavigator")[0].pushPage("fast_food.html");
    });

    $("#bmtbtn").click(function () {
      $("#myNavigator")[0].pushPage("bub_tea.html");
    });

    $("#coffeebtn").click(function () {
      $("#myNavigator")[0].pushPage("coffee.html");
    });

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("#carousel").empty();
    db.collection("recommended").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        `<ons-carousel-item modifier="nodivider" id="${doc.data().RecID}" class="recomended_item">  
        <img src="${doc.data().RecUrl}" alt="" style="width:400px ; height:250px" >
        </ons-carousel-item>`;
        $("#carousel").append(item);
      });
    });
  }

//menu
   if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].pushPage("login.html");
      $("#sidemenu")[0].close();
    });

    $("#home").click(function () {
      $("#content")[0].pushPage("home.html");
      $("#sidemenu")[0].close();
    });
  }

//dessert  
  if (page.id === 'dessertPage') {
    console.log("dessertPage");

    $("#th001").click(function () {
      $("#myNavigator")[0].pushPage("/html/thdessert.html");
    });

    $("#th002").click(function () {
      $("#myNavigator")[0].pushPage("/html/tubtim.html");
    });

    $("#th003").click(function () {
      $("#myNavigator")[0].pushPage("/html/namt_hu.html");
    });

    $("#th004").click(function () {
      $("#myNavigator")[0].pushPage("/html/namt_t.html");
    });
  }

//noodles
if (page.id === 'noodlesPage') {
  console.log("noodlesPage");

  $("#no001").click(function () {
    $("#myNavigator")[0].pushPage("/html/mi_po.html");
  });

  $("#no002").click(function () {
    $("#myNavigator")[0].pushPage("/html/mi_k.html");
  });

  $("#no003").click(function () {
    $("#myNavigator")[0].pushPage("/html/cha_k.html");
  });
}

//fastfood
if (page.id === 'fastfoodPage') {
  console.log("fastfoodPage");

  $("#ff001").click(function () {
    $("#myNavigator")[0].pushPage("/html/menuKFC.html");
  });
}

//buble
if (page.id === 'bub_teaPage') {
  console.log("bub_teaPage");

  $("#bb001").click(function () {
    $("#myNavigator")[0].pushPage("bub_tea.html");
  });
}

//login
$("#backhomebtn").click(function () {
  $("#myNavigator")[0].pushPage("index.html");
});


  });
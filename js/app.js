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

  if (page.id === 'homePage') {
    console.log("homePage");

    $("#dessertbtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#noodlesbtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#hcrbtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#ctobtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#fastbtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#dimsumbtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#bmtbtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#coffeebtn").click(function () {
      $("#content")[0].load("category.html");
    });

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("#carousel").empty();
    db.collection("recommended").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item = `<ons-carousel-item modifier="nodivider" id="${doc.data().RecID}" class="recomended_item">  
        <img src="${doc.data().RecUrl}" style="width:400px ; height:250px" >
        </ons-carousel-item>`;
        $("#carousel").append(item);
      });
    });
  }

   if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");
      $("#sidemenu")[0].close();
    });
  }


});
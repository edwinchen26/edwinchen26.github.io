// Init database connection
var config = {
  apiKey: "AIzaSyCfc-GYd0suU-iCFmIiWcEFkpab2DzNEy4",
  authDomain: "souki-9e5cf.firebaseapp.com",
  databaseURL: "https://souki-9e5cf.firebaseio.com",
  projectId: "souki-9e5cf",
  storageBucket: "souki-9e5cf.appspot.com",
  messagingSenderId: "267834828054"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// Fetch contacts from database
db.collection("contacts").orderBy("first").onSnapshot(function(querySnapshot){
  // Check if collection is empty
  if(!querySnapshot.size > 0){ document.querySelector(".empty").style.display = 'block'; }

  querySnapshot.docChanges().forEach(function(change){
    if(change.type === "added"){
      var items = profile = document.createElement("div");
      items.setAttribute("id", change.doc.id);
      items.setAttribute("class", "items");
      items.setAttribute("data-name", change.doc.data().first + " " + change.doc.data().last);
      items.setAttribute("data-initial", change.doc.data().first[0]);
      document.querySelector(".cards").appendChild(items);
      items.innerHTML = items.getAttribute("data-name") + '<div class="details"><div class="button"><span class="_left"><a href="tel:'+change.doc.data().phone+'"><i class="fas fa-phone"></i> Call</a></span> <span class="_right" id="delete-'+change.doc.id+'"><i class="fas fa-trash"></i> Delete</span></div> <div class="map"></div></div>';
      if(querySnapshot.size > 0){ document.querySelector(".empty").style.display = 'none'; }
    }
    if(change.type === "modified"){
      var item = document.querySelector("#"+change.doc.id);
      item.setAttribute("data-name", change.doc.data().first + " " + change.doc.data().last);
    }
    if(change.type === "removed"){
      var item = document.getElementById(change.doc.id);
      item.remove();
    }

    // Expand cards
    items.addEventListener("click", function(){
      items.classList.toggle("toggle");
    });

    // Delete contact
    document.getElementById("delete-"+change.doc.id).addEventListener("click", function(){
      var id = this.getAttribute("id").replace("delete-", "");
      db.collection("contacts").doc(change.doc.id).delete().then(function(){
        var item = document.querySelector("#"+id);
        item.remove();
      });

    if(!querySnapshot.size > 0){ document.querySelector("section").innerHTML = '<div class="empty" style="display: block;"> <img src="logo-high.png"> <span>Your contact list is empty!</span> </div>'; }
    });
  });
});

// Add new Contacts
var addContact = document.querySelector(".addContact");
addContact.addEventListener("click", function(){
  document.querySelector(".popup").classList.toggle("display");
  document.querySelector("button").addEventListener("click", function(){
    document.querySelector("button").innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    db.collection("contacts").add({
    first: document.getElementById("firstname").value,
    last: document.getElementById("lastname").value,
    phone: document.getElementById("phone").value
    })
    .then(function(docRef){
      document.querySelector("button").innerHTML = '<i class="fas fa-check"></i>';
      document.getElementById("firstname").value = document.getElementById("lastname").value = document.getElementById("phone").value = "";
      document.getElementById("firstname").addEventListener("focus", () => { document.querySelector("button").innerHTML = 'Add'; });
    });
  });
});

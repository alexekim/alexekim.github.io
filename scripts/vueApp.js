var app = new Vue({
  el: "#app",
  data: {
    name: "",
    emojis: [
      {
        id: 1,
        name: "nerd",
        src: "images/nerd.png"
      },
      {
        id: 2,
        name: "sunglasses",
        src: "images/sunglasses.png"
      }
    ],
    menuIcon: {
      icon: "<i class='fas fa-bars'></i>"
    },
    headerLinks: [
      {
        id: 1,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/alexekim/",
        icon: "<i class='fab fa-linkedin'></i>"
      },
      {
        id: 2,
        title: "Github",
        href: "https://github.com/alexekim",
        icon: "<i class='fab fa-github'></i>"
      },
      {
        id: 3,
        title: "Resume",
        href: "assets/Alex Kim Resume 2019.pdf",
        icon: "<i class='fas fa-id-card'></i>"
      },
      {
        id: 4,
        title: "e-mail",
        href: "mailto:alexander.e.kim@gmail.com",
        icon: "<i class='fas fa-envelope-square'></i>"
      }
    ],
    vue: ""
  },
  methods :{
    changeEmoji: ()=>{
      document.getElementById("headerEmoji").src = app.emojis[1].src;
      app.vue = "made with <i class='fab fa-vuejs'></i>ue.js";
    },
    restoreEmoji: ()=>{
      document.getElementById("headerEmoji").src = app.emojis[0].src;
      app.vue = "";
    },
    changeMenuIcon: ()=>{
      if (app.menuIcon.icon =="<i class='fas fa-bars'></i>") {
        //show it
        app.menuIcon.icon = "<i class='fas fa-times'></i>";
        document.getElementById("headerLinksDiv").style.display = "block";
      } else {
        //hide it
        app.menuIcon.icon = "<i class='fas fa-bars'></i>";
        document.getElementById("headerLinksDiv").style.display = "none";
      }
    }
  }
})

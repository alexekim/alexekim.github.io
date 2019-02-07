var app = new Vue({
  el: "#app",
  data: {
    name: "Alex Kim",
    emojis: [
      {
        id: 1,
        name: "nerd",
        src: "assets/nerd.png"
      },
      {
        id: 2,
        name: "sunglasses",
        src: "assets/sunglasses.png"
      }
    ],
    headerLinks: [
      {
        id: 1,
        href: "https://www.linkedin.com/in/alexekim/",
        icon: "<i class='fab fa-linkedin'></i>"
      },
      {
        id: 2,
        href: "https://github.com/alexekim",
        icon: "<i class='fab fa-github'></i>"
      },
      {
        id: 3,
        href: "assets/Alex Kim Resume 2019.pdf",
        icon: "<i class='fas fa-file'></i>"
      },
      {
        id: 4,
        href: "mailto:alexander.e.kim@gmail.com",
        icon: "<i class='fas fa-envelope-square'></i>"
      }
    ],
    vue: ""
  },
  methods :{
    changeEmoji: ()=>{
      document.getElementById("headerEmoji").src = app.emojis[1].src;
      app.vue = "made with <i class='fab fa-vuejs'></i>.js";
    },
    restoreEmoji: ()=>{
      document.getElementById("headerEmoji").src = app.emojis[0].src;
      app.vue = "";
    }
  }
})

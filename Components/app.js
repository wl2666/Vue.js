Vue.component("card", {
  template: `
  <div class="col-sm-2">
    <div class="card" style="width: 18rem;">
      <img :src="img" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{text}}.</p>
        <a href="#" class="btn btn-primary">Explore restaurants</a>
      </div>
    </div>
  </div>
  `,
  props: {
    id: Number,
    title: String,
    img: String,
    text: String
  }
});

var app = new Vue({
  el:"#app",
  data: {
    cards: [
      {
        id: 1,
        title: "Thai",
        img: "https://placehold.it/200X200",
        text: "Tycoon Thai"
      },
      {
        id: 2,
        title: "Japanese",
        img: "https://placehold.it/200X200",
        text: "Ippudo"
      },
      {
        id: 3,
        title: "Chinese",
        img: "https://placehold.it/200X200",
        text: "Tsing Tao"
      },
      {
        id: 4,
        title: "French",
        img: "https://placehold.it/200X200",
        text: "Frances"
      },
      {
        id: 5,
        title: "Burmese",
        img: "https://placehold.it/200X200",
        text: "Burma Superstar"
      }
    ]
  }
});

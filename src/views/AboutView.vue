<script setup>
import NavBar from "../components/NavBar.vue";
// import ProductCard from "../components/ProductCard.vue";
</script>

<template>
  <NavBar></NavBar>
  <div class="container-about">
    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi,
      aspernatur excepturi iusto, laudantium ullam et minus delectus, ab tempore
      suscipit doloremque vero perspiciatis sed. Provident adipisci molestiae ut
      quidem. Aliquam id, officia dolorum temporibus iure earum itaque? Ipsum
      quae saepe impedit ratione enim, iusto doloribus blanditiis placeat. Eum
      repellat perspiciatis distinctio quisquam ducimus, ratione placeat!
      Maxime.
    </p>
  </div>

  <div class="Container">
    <div class="content-first">
      <div class="title-content-first">
        <h2>Vad vi gör</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          minus, commodi laborum perferendis consequatur assumenda. commodi
          laborum perferendis.
        </p>
      </div>
      <div>
        <img class="img" src="../assets/img/img2.jpeg" alt="Bild" />
      </div>
    </div>

    <div class="content-second">
      <div>
        <img class="img" src="../assets/img/img2.jpeg" alt="Bild" />
      </div>
      <div class="title-content-second">
        <h2>Varför och hur</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          minus, commodi laborum perferendis consequatur assumenda. commodi
          laborum perferendis.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.container-about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  font-family: "Outfit", sans-serif;
}

.container-about p {
  width: 70%;
}
.container-about h1 {
  font-weight: 600;
}

.Container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Outfit", sans-serif;
  margin-top: 70px;
}
.content-first,
.content-second {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 55%;
  height: 300px;
  border: solid 1px rgb(180, 180, 180);
  margin: 40px auto;
}

.Container img {
  height: 300px;
  width: 300px;
  padding: 30px;
}

.title-content-first {
  text-align: start;
  width: 400px;
  margin: 0 auto;
  margin-left: 60px;
}
.title-content-second {
  text-align: start;
  width: 400px;
  margin: 0 auto;
  margin-right: 60px;
}
.title-content-first h2,
.title-content-second h2 {
  font-weight: 700;
}

/* .title-content-first p{

} */

@media screen and (min-width: 375px) and (max-width: 980px) {
  .Container {
    flex-direction: column;
    width: 100%;
  }

  .content-first,
  .content-second {
    width: 100%;
  }
  .container-about h1 {
    font-size: 20px;
  }

  .Container img {
    height: 200px;
    width: 200px;
  }
}
</style>

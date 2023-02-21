<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap" rel="stylesheet"> -->

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tjuvgods</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink to="/">Hem</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/about">Produkt</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink to="/products">Mitt konto</RouterLink></a
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink to="/profile">profil</RouterLink></a
            >
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink to="/checkout"><img class="Kassa" src="../assets/img/shopping-cart-icon-1.png"></RouterLink></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style>

  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap');


nav {
  font-family: 'Outfit', sans-serif;
  background: white;
  height: 40px;
  width: 100%;
}

nav ul li {
  display: inline-block;
  margin: 0px 20px;
}

nav ul li a {
  text-decoration: none;
  color: black;
}

nav ul li a:hover {
  color: black;
}


nav[class="navbar navbar-expand-lg bg-body-tertiary"]{
  /* font-family: 'Outfit', sans-serif; */
  font-family: 'Turret Road', cursive;
  background-color: white;
}

.Kassa{
  height: 20px;
  width: 20px;
}
</style>

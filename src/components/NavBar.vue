<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
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
              <RouterLink to="/">Home</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/about">Om oss</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink to="/products">Produkter</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink to="/profile">profil</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink to="/checkout">Kassa</RouterLink></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style>
nav {
  background: white;
  height: 40px;
  width: 100%;
}

nav ul li {
  display: inline-block;
  margin: 0 20px;
}

nav ul li a {
  text-decoration: none;
  color: black;
}

nav ul li a:hover {
  color: black;
}




</style>

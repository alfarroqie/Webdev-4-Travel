<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">bezKoder</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav> -->

    <nav
      class="navbar navbar-expand-lg navbar-dark fixed-top"
      style="background-color: #aac9c0"
    >
      <div class="container">
        <img
          class="navbar-brand"
          src="https://i.ibb.co/Rb6yXLg/Voyagee-removebg-preview.png"
          style="width: 160px; height: 80px"
          href="#home"
        />
        <button
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-target="#navbarNavDropdown"
          data-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/news" class="nav-link">Terbaru</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cms" class="nav-link">Terpopuler</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Kategori
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> Kuliner</a></li>
                <li><a class="dropdown-item" href="#"> Tips</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/news" class="nav-link">Galeri</router-link>
            </li>
            <li class="nav-item dropdown" style="display: block">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                <i class="fas fa-user-circle"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                style="
                  padding: 15px;
                  padding-bottom: 10px;
                  width: 300px !important;
                "
              >
                <form
                  class="form-horizontal"
                  method="post"
                  accept-charset="UTF-8"
                >
                  <input
                    id="sp_uname"
                    class="form-control login"
                    type="text"
                    name="sp_uname"
                    placeholder="Username.."
                  />
                  <input
                    id="sp_pass"
                    class="form-control login"
                    type="password"
                    name="sp_pass"
                    placeholder="Password.."
                  />
                  <input
                    class="btn btn-primary"
                    type="submit"
                    name="submit"
                    value="login"
                  />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Akhir Navbar -->

    <div class="container mt-3">
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="footer text-white mt-5" style="background-color: #aac9c0">
      <div class="container">
        <div class="row">
          <div class="col text-center pt-3">
            <p>Made with tears by Kelompok 4 &copy; 2020 Voyagee</p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Akhir Footer -->
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
.fas {
  color: #cde5dd;
  font-size: 20px;
  padding-top: 0px;
  padding-left: 5px;
}

.login {
  margin-bottom: 5px;
}

.footer {
  position: fixed;
  margin-top: 100px;
  bottom: 0px;
  width: 100%;
}

@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }

  .navbar .nav-item:hover .nav-link {
    color: #fff;
  }

  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }

  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
</style>
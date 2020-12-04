<template>
    <body>
        <div id="slide" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
            <li data-target="#slide" data-slide-to="0" class="active"></li>
            <li data-target="#slide" data-slide-to="1"></li>
            <li data-target="#slide" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/1.png" class="d-block w-100" alt="Slide- 1">
            <div class="carousel-caption d-none d-md-block">
            <h5>Yogyakarta</h5>
            <p>Pesona sore hari di Tugu Jogja.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="../assets/2.png" class="d-block w-100" alt="Slide - 2">
            <div class="carousel-caption d-none d-md-block">
            <h5>Bali</h5>
            <p>Keindahan danau bedugul di pagi hari.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="../assets/3.png" class="d-block w-100" alt="Slide- 3">
            <div class="carousel-caption d-none d-md-block">
            <h5>Bandung</h5>
            <p>Wisata kawah disekitaran bandung.</p>
            </div>
        </div>
        </div>

         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #AAC9C0;">
        <div class="container">
            <img class="navbar-brand" src="https://i.ibb.co/Rb6yXLg/Voyagee-removebg-preview.png"
                style="width: 160px; height: 80px;" href="#home"> <button aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
                data-target="#navbarNavDropdown" data-toggle="collapse" type="button"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#terbaru">Terbaru</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#terpopuler">Terpopuler</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Kategori </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="filter-kuliner"> Kategori Kuliner</a></li>
                            <li><a class="dropdown-item" href="list-artikel.html"> Kategori 2 </a></li>
                            <li><a class="dropdown-item" href="#"> Kategori 3 </a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#galeri">Galeri</a>
                    </li>
                    <li class="nav-item:hover dropdown" style="display: block;">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            <i class="fas fa-user-circle"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" style="padding: 15px; padding-bottom: 10px;width: 300px !important;">
                            <form class="form-horizontal" method="post" accept-charset="UTF-8">
                                <input id="sp_uname" class="form-control login" type="text" name="sp_uname"
                                    placeholder="Username.." />
                                <input id="sp_pass" class="form-control login" type="password" name="sp_pass"
                                    placeholder="Password.." />
                                <input class="btn btn-primary" type="submit" name="submit" value="login" />
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </nav>   

        

            <a class="carousel-control-prev" href="#slide" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#slide" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
        
        <div class="content text-center">
            <h1>Cuaca</h1>
            <h1>12 Oktober 2020</h1>
        </div>
            
        <section class="cuaca mt-5" id="cuaca">
            <div class="container">
            <div class="row mb-4">
                <div class="col-md mb-3">
                <div class="card" style="width: 18rem;">
                    <a class="text-dark" href="#"><img class="card-img-top" src="../assets/1.png">
                    <div class="card-body">
                        <p class="card-text">Yogyakarta.</p>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-md mb-3">
                <div class="card" style="width: 18rem;">
                    <a class="text-dark" href="#"><img class="card-img-top" src="../assets/2.png">
                    <div class="card-body">
                        <p class="card-text">Bali</p>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-md mb-3">
                <div class="card" style="width: 18rem;">
                    <a class="text-dark" href="#"><img class="card-img-top" src="../assets/3.png">
                    <div class="card-body">
                        <p class="card-text">Bandung.</p>
                    </div>
                    </a>
                </div>
                </div>   
            </div>
            </div>
        </section>
        
        <div class="content text-center">
            <h1>Destinasi Pilihan</h1>
        </div>
        
        <div class="container">
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/1.png" alt="">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/1.png" alt="">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/1.png" alt="">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/1.png" alt="">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/2.png" alt="">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/2.png" alt="">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/2.png" alt="">
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6">
                <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="../assets/2.png" alt="">
                </a>
            </div>
            </div>
        </div>
        
        <div class="content text-center">
            <span class="border border-primary rounded-pill" style="background-color: #abcabd;">Lihat Destinasi Lainnya</span>
        </div>
        
        <div class="content text-center">
            <h1>Artikel Baru</h1>
        </div>

        <section class="cuaca mt-5" id="cuaca">
            <div class="container">
            <div class="row mb-4">
                <div class="col-md mb-3">
                <div class="card" style="width: 18rem;">
                    <a class="text-dark" href="#"><img class="card-img-top" src="../assets/1.png">
                    <div class="card-body">
                        <p class="card-text">Yogyakarta.</p>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-md mb-3">
                <div class="card" style="width: 18rem;">
                    <a class="text-dark" href="#"><img class="card-img-top" src="../assets/2.png">
                    <div class="card-body">
                        <p class="card-text">Bali</p>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-md mb-3">
                <div class="card" style="width: 18rem;">
                    <a class="text-dark" href="#"><img class="card-img-top" src="../assets/3.png">
                    <div class="card-body">
                        <p class="card-text">Bandung.</p>
                    </div>
                    </a>
                </div>
                </div>   
            </div>
            </div>
        </section>

        <div class="content text-center">
            <span class="border border-primary rounded-pill" style="background-color: #abcabd;">Lihat Semua Artikel</span>
        </div>

        <!-- Footer -->
        <footer class="text-white mt-5" style="background-color: #AAC9C0;">
            <div class="container">
                <div class="row">
                    <div class="col text-center pt-3">
                        <p>Made with tears by Kelompok 4 &copy; 2020 Voyagee</p>
                        <i class="fas fa-poo"></i>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Akhir Footer -->
    </body>
</template>


<script>
export default {
  name: 'landing_page',
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
body {
    padding-top: 1.5rem;
    color: #5a5a5a;
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
<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="logo">
        <img
          src=" https://i.ibb.co/Rb6yXLg/Voyagee-removebg-preview.png"
          width="150"
          height="75"
        />
      </div>
      <ul>
        <li>
          <a href="cms.html"><i class="fas fa-chart-line"></i>Dashboard</a>
        </li>
        <li>
          <a href="cms_post.html"
            ><i class="far fa-newspaper"></i>Post Artikel</a
          >
        </li>
        <li>
          <a href="cms_daftarArtikel.html"
            ><i class="far fa-file-alt"></i>Daftar Artikel</a
          >
        </li>
      </ul>
    </div>
    <div class="main_content">
      <div class="header">
        Dashboard
        <a class="header">admin</a>
        <i class="fas fa-user-circle"></i>
      </div>
      <!-- taruh template vue lain di sini -->
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "cms",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
}

body {
  background-color: #fff;
}

.wrapper {
  display: flex;
  position: relative;
}

.wrapper .sidebar {
  width: 200px;
  height: 100%;
  background: #abcabd;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2 {
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li {
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.wrapper .sidebar ul li a {
  color: #000000;
  display: block;
}

.wrapper .sidebar ul li a .fas {
  width: 25px;
}

.wrapper .sidebar ul li:hover {
  background-color: #594f8d;
}

.wrapper .sidebar ul li:hover a {
  color: #fff;
}

.wrapper .main_content {
  width: 100%;
  margin-left: 200px;
}

.wrapper .main_content .header {
  font-size: 40px;
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}
.wrapper .main_content .header a {
  float: right;
  font-size: 20px;
}

.wrapper .main_content .header i {
  float: right;
}
.wrapper .main_content .header .search {
  padding-left: -70px;
  padding-top: 30px;
}
.wrapper .main_content .header .search .search-box {
  float: right;
  width: 20%;
}
.wrapper .main_content .info {
  margin: 20px;
  color: #000000;
  line-height: 25px;
}

/*
.wrapper .main_content .info{
    border:"1";
    cellpadding:"5"
}*/

.wrapper .main_content .info div {
  margin-bottom: 20px;
  font-size: 20px;
}
/*
.wrapper .main_content .info .judul-form{
  margin-right: 16px;
  font-size: 10px;
  border: none;
  cursor: pointer;
}
*/
.col-25 {
  float: left;
  width: 10%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 90%;
  margin-top: 6px;
}
.wrapper .main_content .info .judul-form .form-control {
  font-size: 17px;
}
.table1 {
  color: #232323;
  border-collapse: collapse;
}

.table1,
th,
td {
  border: 1px solid #999;
  padding: 8px 20px;
}
.btn-table {
  float: right;
}
@media (max-height: 500px) {
  .social_media {
    display: none !important;
  }
}
</style>

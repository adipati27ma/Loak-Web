import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import Loading from "../components/Loading/Loading";

import Grid from "@material-ui/core/Grid";

//import { useCookies } from 'react-cookie';

export default function Home() {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [profileProducts, setProfileProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let loading = <div></div>;

  // useEffect(() => {
  //    if(cookies.token) {
  //        setLoggedIn(true);
  //    }
  //    else {
  //        setLoggedIn(false);
  //    }
  // }, [])

  // console.log(cookies.token);

  useEffect(() => {
    const endpoint = "profile/products";

    axios
      .get(endpoint)
      .then((response) => {
        //console.log(response);
        // if (response.status === 200) {
        if (response.data.status) {
          console.log(response.data.data);
          let respProfileProducts = [];

          response.data.data.map((resp) => {
            respProfileProducts.push({
              productId: resp.id,
              thumbnail: resp.product.thumbnail_url,
            });
          });

          setProfileProducts(respProfileProducts);
          setLoading(false);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (isLoading) return <Loading />;

  const imgUrl = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
  ];
  console.log(profileProducts);

  return (
    <div id="main">
      <HeaderBar />
      <Header />
      {/* <Header isLoggedIn={isLoggedIn} /> */}
      <div id="content" className="" style={{ paddingTop: 0 }}>
        <div className="home-carousel-container">
          <HomeCarousel />
        </div>

        <section>
          <h1 className="section-title">Layanan</h1>

          <div className="box-container-layanan">
            <Grid container justify="space-evenly">
              <Grid item xs={12} md={6} className="grid-layanan">
                Ini Satu
              </Grid>
              <Grid item xs={12} md={6} className="grid-layanan">
                Ini Dua
              </Grid>
            </Grid>
          </div>
        </section>

        <section>
          <h1 className="section-title">Produk</h1>
          <div className="home-gallery-container">
            {profileProducts.slice(0, 5).map((product) => (
              <Link to={`products/${product.productId}`} class="">
                <div
                  class="home-gallery"
                  style={{ backgroundImage: `url(${product.thumbnail})` }}
                ></div>
              </Link>
            ))}
          </div>
        </section>

        <article
          className="testimoni-section"
          style={{
            backgroundImage: `url(${require("../image/testimoni.png")})`,
          }}
        >
          <div className="black-opacity">
            <div className="w-80">
              <h1 className="section-title">Testimoni</h1>

              <div className="row slider-testimoni">
                <div className="testimoni column">
                  <div className="head-testimoni">
                    Sampah rumah ternyata bisa dipakai lagi, puas sekali saya
                    menggunakan layanan on demand Loakarya!
                  </div>
                  <div className="content-testimoni">
                    Loakarya membantu saya mengolah limbah menjadi produk baru.
                    Prosesnya mudah, pelayananya menarik, dan saya puas dengan
                    hasilnya.
                  </div>
                  <div className="source-testimoni">Hanifan, Mahasiswa</div>
                </div>
                <div className="testimoni column">
                  <div className="head-testimoni">
                    Mejanya benar-benar elegan dan minimalis.
                  </div>
                  <div className="content-testimoni">
                    Loakarya memberi warna baru dalam gaya hidup saya. Saya
                    tidak perlu bingung lagi jika ingin membeli furniture sambil
                    menjaga lingkungan.
                  </div>
                  <div className="source-testimoni">Ray, Freelancer</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section>
          <h1 className="section-title">Nilai Kami</h1>

          <div className="box-container">
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12} sm={6} md={3} height="100%" mb-2>
                <div
                  className="box"
                  style={{
                    backgroundImage: `url(${require("../image/value1.png")})`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Kolaborasi</div>
                  <div className="box-content">
                    Dalam tiap proses pembuatan produk kami berkolaborasi dengan
                    konsumen, agar tiap ideasi yang dihasilkan sesuai dengan
                    kebutuhan.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} height="100%">
                <div
                  className="box"
                  style={{
                    backgroundImage: `url(${require("../image/value2.png")})`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Lingkungan</div>
                  <div className="box-content">
                    Keberlanjutan lingkungan adalah fokus kami. Kami berupaya
                    mengurangi limbah dengan menggunakannya sebagai material
                    pada produk kami.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} height="100%">
                <div
                  className="box"
                  style={{
                    backgroundImage: `url(${require("../image/value3.png")})`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Koneksi</div>
                  <div className="box-content">
                    Kami menghubungkan tiap stakeholder dalam proses bisnis
                    kami; mulai dari pengepul sampai dengan pengrajin.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} height="100%">
                <div
                  className="box"
                  style={{
                    backgroundImage: `url(${require("../image/value4.png")})`,
                  }}
                >
                  {/* <img src="image/image-1.png" alt="" />  */}
                  <div className="box-title">Pemberdayaan Sosial</div>
                  <div className="box-content">
                    Pengrajin daerah sekitar kami berdayakan sebagai langkah
                    turut meningkatkan kesejahteraan masyarakat.
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

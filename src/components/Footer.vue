<template>
 <div class="footer">
      <div class="heading">
        <h2>Blogy</h2>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">App developmen</a></p>
          <p><a href="#">Web development</a></p>
          <p><a href="#">DevOps</a></p>
          <p><a href="#">Web designing</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/Cyebukayire"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><router-link to="/postDetails">Blogs</router-link></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet  <br />
            adipisicing elit.
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+250792233445</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">blogy@business.com</a></p>
        </div>
      </div>
      <footer>
        <hr />
        &copy; 2021 Blogy @ Vue Designs.
      </footer>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  /* position: fixed; */
background: linear-gradient(
        to right bottom,
        rgba(10, 233, 155, 0.35),
        rgba(25, 110, 247, 0.494)
    );
  width: 100%;
  bottom: 0;
  left: 0;
}

.footer .heading {
    color:rgb(240, 240, 240);
  max-width: 1010px;
  width: 90%;
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 3rem;
  margin-bottom: 3rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.footer .content {
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem;
}

.footer .content p {
  margin-bottom: 1.3rem;
  color: rgba(0, 0, 0, 0.829);
}

.footer .content a {
  text-decoration: none;
  color: rgb(0, 0, 0, 0.829);
}

.footer .content a:hover {
  border-bottom: 1px solid rgba(0, 0, 0, 0.829);
}

.footer .content h4 {
  margin-bottom: 1.3rem;
  font-size: 19px;
  color:rgb(138, 141, 138);
}

footer {
  text-align: center;
  padding-bottom: 2rem;
}

footer hr {
  margin: 2rem 0;
}

@media (max-width: 767px) {
  .footer .content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .footer {
    position: unset;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer .content,
  .footer {
    font-size: 14px;
  }
}

@media (orientation: landscape) and (max-height: 500px) {
  .footer {
    position: unset;
  }
}

</style>
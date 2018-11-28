<template>
  <div id="contact" class="container-fluid">
    <div class="row align-items-center first-row">
        <div class="col-12 contact-titel">
          <h1>Ways to contact me</h1>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 contact-cel">
              <p>Met postduif op adres: <br> Clara Snellingsstraat 89, 2100 Deurne, België</p>
              <img src="https://www.scienceabc.com/wp-content/uploads/2016/01/shutterstock_34688695.jpg" alt="postduif">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 contact-cel">
              <p>Ouderwets een e-mail sturen naar:</p>
              <a href="mailto:havermansthomas@gmail.com">havermansthomas@gmail.com</a>
              <img src="https://friendlycomputersspokane.com/wp-content/uploads/2018/08/Image_1-3.jpeg" alt="oude computer">
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'contact',

  data () {
      return {

      }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container-fluid {
  height: 100vh;
  padding: 100px 0 0 0 !important;
}

.row {
  height: 100%;
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.contact-titel h1 {
  text-align: center !important;
  margin-bottom: 75px;
}

img {
  width: 200px;
  margin: 30px auto;
  display: block;
}

p {
  margin-bottom: 0px
}

/* @media (max-height: 700px) {
  .row {
    margin-top: 50px;
    height: 600px;
  }
} */

@media (max-width: 600px) {
  .first-row {
    margin-top: 110px;
    height: 600px;
  }

  .contact-titel h1 {
    margin-bottom: 30px !important;
  }

  .contact-cel {
    width: 100% !important;
    display: block;
    margin: 0 auto !important;
  }

  .contact-cel:last-child {
    margin-bottom: 50px !important;
  }
}
</style>

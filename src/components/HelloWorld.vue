<template>
  <div id="HelloWorld" class="container-fluid">
    <div class="showModal" v-if="showModal">
        <p>Jup, that's me..</p>
        <img  @click="showModal = false" src="https://scontent-bru2-1.cdninstagram.com/vp/c06887a886c157e960b257adf2061196/5C7243C7/t51.2885-15/e35/43252091_600800817023538_8516053278219946070_n.jpg" alt="ik aan het poseren voor een golfveld">
    </div>
    <div class="row intro align-items-center">
      <div class="col-lg">
        <img @click="showModal = true" src="https://scontent-bru2-1.cdninstagram.com/vp/c06887a886c157e960b257adf2061196/5C7243C7/t51.2885-15/e35/43252091_600800817023538_8516053278219946070_n.jpg" alt="ik aan het poseren voor een golfveld">
        <p>thomas havermans</p>
        <p>havermansthomas@gmail.com</p>
        <p>04 78 91 47 65</p>
      </div>
      <p class="scrollen">vergeet niet te scrollen</p>
    </div>

    <!-- over mij -->
    <div class="row thomas">
      <div class="selfie col col-4 col-md-4 col-sm-12">
        <h1>Wie ben ik?</h1>
      </div>
      <div class="col col-8 col-md-8 col-sm-12">
        <p>Hallo!<br>Mijn naam is Thomas Havermans en recent studeerde ik af als grafisch ontwerper aan de Artesis Plantijn Hogeschool. Ik ben 23 jaar en woon momenteel in het mooie Deurne. Tijdens mijn vrije tijd ben ik meestal bezig met het ontwerpen en bouwen van websites. Na mijn stages bij ViaVictor en Bagaar wist ik zeker dat mijn interesse bij het bouwen van websites lag.<br>
           Als werknemer ben ik steeds gemotiveerd, dynamisch, flexibel maar het belangrijkste van al, zeer leergierig.<br>
           Ik kijk uit naar een fijne kennismaking.
         </p>
      </div>
    </div>

    <!-- geschiedenis -->
    <div class="row geschiedenis">
      <h1>Geschiedenis</h1>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Sint-Eduardusinstituut</th>
            <td>2009 - 2012</td>
            <td>TSO Sport</td>
          </tr>
          <tr>
            <th scope="row">Atheneum Schoten</th>
            <td>2013 - 2014</td>
            <td>Diploma Technisch Secundair Onderwijs <br> Getuigschrift bedrijfsbeheer</td>
          </tr>
          <tr>
            <th scope="row">Karel de Grote-Hogeschool</th>
            <td>2014 - 2015</td>
            <td>Logistiek Management</td>
          </tr>
          <tr>
            <th scope="row">Artesis Plantijn Hogeschool Antwerpen</th>
            <td>2015 - 2018</td>
            <td class="text-danger">Grafische en Digitale Media - CMO <br> Diploma Professionele Bachelor</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- vaardigheden -->
    <div class="row vaardigheden">
      <div class="vaardigheden-titel col-12">
        <h1>Vaardigheden</h1>
      </div>
      <div class="small col-md-6 col-sm-12">
        <chart></chart>
      </div>
    </div>

    <!-- contact -->
    <div class="row contact align-items-center">
      <div class="contact-aligned">
        <h1>Hire me</h1>
        <router-link to="/contact">contact me</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import chart from '@/components/chart'

export default ({
  name: 'HelloWorld',
  components: {
    chart
  },
  data () {
      return {
        showModal: false,
      }
  },
  metaInfo () {
     return {
       meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' }
       ]
     }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container-fluid {
  padding: 0 !important
}

.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.scrollen {
  color: red;
  font-weight: light;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.intro {
  height: 100vh;
}

.intro img {
  width: 200px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 0px !important
}

.showModal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
}

.showModal p {
  font-size: 1.6em;
  font-weight: bold;
  color: red;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

/* Thomas deel 2 */

.col {
  padding: 50px 75px;
  text-align: left;
}

.thomas {
  margin-top: 175px;
}

.selfie {
  background-image: url("../assets/thomas.png");
  background-size: cover;
}

.selfie h1 {
  filter: drop-shadow(-2px 2px 0px #ffff);
}

/* geschiedenis */

.geschiedenis, .vaardigheden {
  margin-top: 175px;
  padding: 0 50px;
  text-align: left
}

table {
  margin-top: 30px
}

/* vaardigheden */

.vaardigheden-titel h1{
  text-align: left !important;
  margin-bottom: 30px;
}

.small {
  margin: 0 auto;
  display: block
}

/* Contact */

.contact {
  margin-top: 100px;
  background-color: #fce562;
  height: 400px;
}

.contact-aligned {
  margin: 0 auto;
  display: block;
}

.contact-aligned h1 {
  margin: 0 auto !important;
  font-size: 5em !important;
  color: #fce562;
  font-weight: bold;
  filter: drop-shadow(3px 3px 0px #4444dd);
}

.contact-aligned a {
  color: #4444dd !important;
  text-decoration: underline !important;
}

.contact-aligned a:hover {
  text-decoration: none !important;
}

/* media queries */

@media (max-height: 700px) {
  .intro {
    height: 600px;
  }
}

@media (max-width: 500px) {
  .col, .geschiedenis, .vaardigheden {
    padding: 15px !important
  }

  .vaardigheden-titel, .small {
    padding: 0 !important;
  }
}

</style>

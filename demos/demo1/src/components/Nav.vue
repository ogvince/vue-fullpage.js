<template>
  <ul id="menu2">
  <a id="arrow"><img src="arrow.svg" style="width:30px;"></a>

  <a href="javascript:void(0);" v-on:click="filter(-1)" id="logonemaprod">
    <img src="nemaprod.svg" style="width: 100%;" class="logopc">
    <img src="nemamobile.svg" style="width: 100%;" class="logomobile">
  </a>

  <a id="logonemaprod-2"></a>

  <li class="directorstitle" id="directorstitle">Directors</li>

  <ul id="directors">
    <li v-for="aut in auteurs" :id="'menu-' + aut.id">
      <a class="director" href="javascript:void(0);" v-on:click="filter(aut.id, 'auteur')">{{ aut.name }}</a>
    </li>
  </ul>

  <li class="directorstitle" id="photographerstitle">Photographers</li>

    <ul id="photographers">
      <li v-for="pho in photographers" :id="pho.id">
        <a class="director photographe" :id="'link' + pho.id" href="javascript:void(0);" v-on:click="filter(pho.id, 'photographer')">{{ pho.name }}</a>
      </li>
    </ul>


    <div class="social">
      <a class="socialmedia" href="https://www.instagram.com/nemaprod" target="_blank"><img src="instagram.svg" style="width:20px;"></a>
      <a class="socialmedia" href="https://vimeo.com/nemaprod" target="_blank"><img src="vimeo.svg" style="width:20px;"></a>
      <a class="socialmedia" href="https://www.facebook.com/nemaproduction/" target="_blank"><img src="facebook.svg" style="width:20px;"></a>
    </div>

    <div class="contacttitle licontact">
      <a class="" href="javascript:void(0);" v-on:click="filter(null, 'contact')">CONTACT</a>
    </div>

</ul>
</template>

<script>
  export default {
    props: ['auteurs', 'filter', 'photographers'],
    data() {
      return {
        lol: true
      }
    },
    created: function() {}
  }
</script>

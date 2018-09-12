<template>
<full-page :options="options" id="fullpage">

<div class="section fp-section fp-table fp-completely" v-for="(proj, index) in projects" v-bind:class="{ 'active': (index === 0) }" :id="'slide' + proj.id" style="height:100vh!important">
<div class="frameholder">

<a :class="'link ' + proj.acf.no_popup" :href="'#popup' + proj.id" onmouseover="videoIcon();" onmouseout="videoIcon2();">
  <div class="goldenframe">

    <img src="play.svg" class="playicon">
    <h1 class="categorie">{{ proj.acf.categorie }}</h1>
    <h1 class="auteur">{{ proj.acf.auteur }}</h1>
    <h1 class="titre">{{ proj.acf.project_title }}</h1>

    <!-- exceptions -->
    <div class="contactholder">
      <a :href="'mailto:' + proj.acf.email1">
        <div class="contactcolumn">
          <h2>{{ proj.acf.poste1 }}</h2>
          <h1 style="color: #d0b57e;">{{ proj.acf.nom1 }}</h1>
        </div>
      </a>

      <a :href="'mailto:' + proj.acf.email2">
        <div class="contactcolumn">
          <h2>{{ proj.acf.poste2 }}</h2>
          <h1 style="color: #d0b57e;">{{ proj.acf.nom2 }}</h1>
        </div>
      </a>

      <a :href="'mailto:' + proj.acf.email3">
        <div class="contactcolumn">
          <h2>{{ proj.acf.poste3 }}</h2>
          <h1 style="color: #d0b57e;">{{ proj.acf.nom3 }}</h1>
        </div>
      </a>

    </div>
  </div>
  </a>
</div>

<!-- clickzone for iframe -->


<!--iframe -->
<div :id="'popup' + proj.id" class="overlay">
  <a class="close-button" href="#!">&times;</a>
  <iframe :data-src="proj.acf.vimeo_iframe" src="about:blank" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="vimeo_iframe"></iframe>
</div>
<!-- </-if photographer----->

<!-- </-responsive--------->


<video id="video" class="fullvideo" loop muted autoplay data-autoplay preload="true">
<source :src="proj.acf.boucle_video_mp4" type="video/mp4">
<source :src="proj.acf.boucle_video_webm" type="video/webm">
</video>

<div class="alt-video"><img :src="proj.acf.screenshot"></div>
<div class="photobg"><img :src="proj.acf.photo" :id="'go' + proj.id"></div>
<!-- end section-->
</div>
</full-page>
</template>

<script>
  import FullPage from './../../../../src/FullPage.vue';
  import fullPageMixin from './../../../../src/fullPageMixin';

  export default {
    props: ['projects'],
    mixins: [fullPageMixin],

    components: {
      FullPage,
    },

    data() {
      return {
        options: {
          lockAnchors: true,
          navigation: false,
          anchors: ['page1', 'page2', 'page3'],
          normalScrollElements: '.overlay, #overlaymenu',

          //Scrolling
          css3: true,
          scrollingSpeed: 1300,
          autoScrolling: true,
          fitToSection: false,
          fitToSectionDelay: 1000,
          scrollBar: false,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          loopBottom: true,
          loopTop: true,
          loopHorizontal: false,
          continuousVertical: false,
          continuousHorizontal: false,
          scrollHorizontally: false,
          interlockedSlides: false,
          dragAndMove: false,
          offsetSections: false,
          resetSliders: false,
          fadingEffect: false,
          scrollOverflow: false,
          scrollOverflowReset: false,
          scrollOverflowOptions: null,
          touchSensitivity: 15,
          normalScrollElementTouchThreshold: 5,
          bigSectionsDestination: null,

          //Accessibility
          keyboardScrolling: false,
          animateAnchor: false,
          recordHistory: false,

          //Design
          controlArrows: false,
          verticalCentered: true,
          responsiveWidth: 600,
          responsiveHeight: 0,
          responsiveSlides: false,

          lazyLoading: true,
        },
      }
    }
  }
</script>

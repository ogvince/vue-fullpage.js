<template>
<full-page :options="options" id="fullpage">

<!-- section -->
<div class="section fp-section fp-table fp-completely tile"
v-for="(proj, index) in projects" v-bind:class="{ 'active': (index === 0) }"
style="height:100vh">
<!-- infos -->
<div class="frameholder">
<div class="goldenframe">
<h1 class="categorie">
  {{ proj.acf.categorie }}
</h1>
<h1 class="auteur">
{{ proj.acf.auteur }}
</h1>
<h1 class="titre">
{{ proj.title.rendered }}
</h1>
</div>

</div>


<!-- clickzone for iframe -->
<a :href="'#popup' + proj.id" class="link"></a>

<a href="#">
<div :id="'popup' + proj.id" class="overlay">
	<div class="popup">
		<a class="close" href="#">&times;</a>
<iframe :src="proj.acf.vimeo_iframe" width="1280" height="720" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	</div>
</div>
</a>

<video id="video" class="fullvideo" loop muted autoplay data-autoplay preload="true">
<source :src="proj.acf.boucle_video_mp4" type="video/mp4">
<source :src="proj.acf.boucle_video_webm" type="video/webm">
</video>

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
          scrollBar: false,
          lockAnchors: true,
          navigation: false,
          anchors: ['page1', 'page2', 'page3'],
          normalScrollElements: '.overlay',
        },
      }
    }
  }
</script>

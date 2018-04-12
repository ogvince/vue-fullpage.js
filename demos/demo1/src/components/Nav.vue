<template>
<ul id="menu2">
<!-- <a href="javascript:void(0);" v-on:click="filter(-1)"></a> -->
<li class="directorstitle">Réalisateurs</li>
<li
v-for="aut in auteurs"
:id="aut.id">
<a class="underline" href="javascript:void(0);" v-on:click="filter(aut.id, 'auteur')">{{ aut.name }}</a>
</li>
<li class="directorstitle">PHOTOGRAPERS</li>
<li
v-for="pho in photographers"
:id="pho.id">
<a class="underline" href="javascript:void(0);" v-on:click="filter(pho.id, 'photographer')">{{ pho.name }}</a>
</li>
<li class="directorstitle">
  <a class="underline" href="javascript:void(0);" v-on:click="filter(null, 'contact')">CONTACT</a>
</li>
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

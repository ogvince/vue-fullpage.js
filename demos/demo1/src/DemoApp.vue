<template>
  <div>
    <div id="closemenu"></div>

    <div id="burger-menu" class="bgr">
    	<div id="burger">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      	<span>&nbsp;</span>
    	</div>
    </div>


    <div id="overlaymenu" class="class">
      <header-nav v-bind:auteurs="auteurs" v-bind:filter="filter" v-bind:photographers="photographers"></header-nav>
    </div>
    <div>
        <projects v-bind:projects="projects"></projects>
    </div>

  </div>
</template>

<script>
  import {
    GET_HOME_PROJECTS_API,
    GET_USER_API,
    GET_AUTHOR_PROJECTS_API,
    GET_PHOTOGRAPERS_API,
    GET_PHOTOGRAPER_PROJECTS_API,
    GET_CONTACT_API
  } from './Constants.js';
  import HeaderNav from './components/Nav.vue';
  import Projects from './components/Projects.vue';

  export default {
    components: {
      'header-nav': HeaderNav,
      Projects
    },

    data() {
      return {
        contact: [],
        projects: [],
        auteurs: [],
        photographers: [],
        previousId: -1
      }
    },

    created: function() {
      this.fetchUsers();
      this.fetchPhotographers();
      this.fetchProjects(GET_HOME_PROJECTS_API);
    },
    methods: {
      filter: function(id, type) {
        // User clicks to the same menu item
        if (this.previousId === id) {
          return;
        }

        $.fn.fullpage.moveTo(1);
        this.previousId = id;

        // Click to home menu
        if (id === -1) {
          this.fetchProjects(GET_HOME_PROJECTS_API);
          return;
        }

        if (type === 'contact') {
          this.fetchProjects(GET_CONTACT_API);
          return;
        }

        if (type === 'auteur')
        {
          this.fetchProjects(GET_AUTHOR_PROJECTS_API + id);
          return;
        }

        if (type === 'photographer') {
          this.fetchProjects(GET_PHOTOGRAPER_PROJECTS_API + id);
          return;
        }
      },

      fetchProjects: function(api) {
  this.projects = [];
  this.$http.get(api).then(response => {
  this.projects = response.data;
  }, error => {
  console.log(error);
  this.projects = [];
  });
  },
      fetchUsers: function() {
        this.$http.get(GET_USER_API).then(response => {
          this.auteurs = response.data;
        }, error => {
          console.log(error);
        });
      },
      fetchPhotographers: function() {
        this.$http.get(GET_PHOTOGRAPERS_API).then(response => {
          this.photographers = response.data;
        }, error => {
          console.log(error);
        });
      }
    }
  }
</script>

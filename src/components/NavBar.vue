<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        conduit
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        <li v-if="username" class="nav-item">
          <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li v-if="!username" class="nav-item">
          <router-link to="/login" class="nav-link">
            Sign in
          </router-link>
        </li>
        <li v-if="!username" class="nav-item">
          <router-link to="/register" class="nav-link">
            Sign up
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link :to="`/@${username}`" class="nav-link">
            {{ username }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.getters["users/username"];
    }
  }
};
</script>

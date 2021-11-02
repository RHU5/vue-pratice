<template>
    <div id="app">
        <header class="header">
            <div class="nav-container">
                <router-link to="/login">Login</router-link>
                <router-link to="/signup">Sign Up</router-link>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 70px;
}
</style>

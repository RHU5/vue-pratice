<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
    },
};
</script>

<style>
@import './assets/style/reset.css';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    box-sizing: border-box;
    padding-top: 90px;
}

a {
    text-decoration: none;
}

a:visited {
    color: white;
}
</style>

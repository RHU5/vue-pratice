<template>
    <div class="header">
        <div class="nav-container">
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Sign Up</router-link>
        </div>
        <div>
            {{ $store.state.username }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
.header {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 20% 70%;
    align-items: center;
    gap: 20px;
    background-color: black;
    padding: 10px 20px;
    color: white;
}
.nav-container {
    display: flex;
    justify-content: space-between;
}
</style>

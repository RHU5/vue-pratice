<template>
    <div>LoginForm</div>
</template>

<script>
export default {
    name: 'LoginForm',
    data: function () {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const userData = {
                    username: this.username,
                    passowrd: this.password,
                };
                await this.$store.dispatch('LOGIN', userData);
                this.$router.push('/main');
            } catch (error) {
                console.log(error.response);
                this.logMessage = error.response.data;
            } finally {
                this.inifForm();
            }
        },
        inifForm() {
            this.username = '';
            this.password = '';
        },
    },
    computed: {
        isUserLogin() {
            return this.$store.getters.isLogin();
        },
    },
};
</script>
<style lang=""></style>

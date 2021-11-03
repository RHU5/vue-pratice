<template>
    <div>
        <div>LoginForm</div>
        <div>{{ 'test' | capitalize }}</div>
        <div>{{ 3424124124 | formatDate }}</div>
    </div>
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
    filters: {
        capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        // formatDate(value) {
        //     return new Date(value);
        // },
    },
};
</script>
<style lang=""></style>

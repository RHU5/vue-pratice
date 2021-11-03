<template>
    <div>SignupForm</div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { registerUser } from '@/api/auth';

export default {
    name: 'SignupForm',
    data: function () {
        return { username: '', password: '', nickname: '' };
    },
    methods: {
        async submitForm() {
            try {
                const userData = {
                    username: this.username,
                    password: this.password,
                    nickname: this.nickname,
                };
                const { data } = await registerUser(userData);
                this.logMessage = `${data.user.username}님 회원 가입이 완료되었습니다.`;
            } catch (error) {
                console.log(error.response);
                this.logMessage = error.response.data;
            } finally {
                this.initForm();
            }
        },
        initForm() {
            this.username = '';
            this.password = '';
            this.nickname = '';
        },
        computed: {
            isUsernameValid() {
                return validateEmail(this.username);
            },
        },
    },
};
</script>

<style></style>

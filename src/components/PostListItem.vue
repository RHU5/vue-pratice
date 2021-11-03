<template>
    <div>PostListItem</div>
</template>

<script>
export default {
    name: 'PostListItem',
    data: function () {
        return {
            postItem: {},
        };
    },
    methods: {
        routeEditPage() {
            const id = this.postItem.id;
            this.$route.push(`push/${id}`);
        },
    },
};
</script>

<style></style>

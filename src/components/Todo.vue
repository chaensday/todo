<template>

    <div>
        <input type="checkbox">
        <span class="ml-3 p-2">Buy a car</span>

    </div>
</template>

<script>
export default {
    props:{
        todo: {
            type: Object,
            required: true,

        }
    }
}
</script>

<style>

</style>
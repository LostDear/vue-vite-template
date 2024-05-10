<script setup lang="ts">
import {hello} from "@/network/user/auth";

hello().then(res => {
  console.log(res);
});
</script>

<template>
<div>

</div>
</template>

<style scoped>

</style>

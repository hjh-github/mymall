<template>
    <div>
        <goodslist :goodslist="orders"></goodslist>
    </div>
</template>

<script>
import goodslist from "./goodslist";
export default {
  props: ["orders"],
  components: {
    goodslist
  },
};
</script>

<style scoped>
</style>
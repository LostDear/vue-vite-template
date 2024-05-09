const systemStore = defineStore("system",() => {
    const count = ref(0);

    const increment = () => {
        count.value++;
    };

    return {
        count,
        increment
    };
});

export default systemStore;

new Vue({
  el: "#app",

  methods: {
    onDecode(url) {
      window.location.href = url;
    },

    onInit(promise) {
      promise.then(console.log).catch(console.error);
    },
  },
});

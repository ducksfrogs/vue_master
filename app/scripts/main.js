console.log('\'Allo \'Allo!');
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks2',
    image: './images/vmSocks-green.png',
    url: 'https://masan-s.com/puki',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Grender-neutral"],
    cart: 0,
    variants: [{
      variantId: 2234,
      variantColor: "blue",
      variantImage: './images/vmSocks-blue.png'
    }, {
      variantId: 2235,
      variantColor: "green",
      variantImage: './images/vmSocks-green.png'
    }]
  },
  methods: {
    addToCart: function(){
      this.cart +=1
    },
    updateProduct: function(variantImage){
      this.image = variantImage
    }
  }
})

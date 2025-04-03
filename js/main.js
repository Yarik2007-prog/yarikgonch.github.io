let app = new Vue({
    el:"#gr",
    data:{
        products:[
            {id:1, title:"TAG 300 (TAG 332)", short_text: 'Red grapefruit', image:'img/g1.jpg', color:'Red', fr:'Nice shiny attractive deep red color.'},
            {id:2, title:"TAG 301 (TAG 354)", short_text: 'Green grapefruit', image:'img/g2.jpg', color:'Green', fr:'Nice shiny attractive deep green color.'},
            {id:3, title:"TAG 302 (TAG 311)", short_text: 'Orange grapefruit', image:'img/g3.jpg', color:'Orange', fr:'Nice shiny attractive deep orange color.'},
            {id:4, title:"TAG 303 (TAG 987)", short_text: 'Grapefruit', image:'img/g4.jpg', color:'Red', fr:'Nice shiny attractive deep red color.'},
            {id:5, title:"TAG 304 (TAG 501)", short_text: 'Grapefruit ( for Deda)', image:'img/g5.jpg', color:'Orange', fr:'Nice shiny attractive deep orange color.'},
        ],
        
        product:{},
        
        btnVisible:0,
    },

    methods:{
        getProduct:function() {
            if(window.location.hash){
                var id = window.location.hash.replace('#', '');
                if(this.products && this.products.length>0) {
                    for(var i in this.products) {
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },


        addToCart:function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))==-1){
                cart.push(String(id));
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },

        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
        },

    },
    
    mounted:function(){
        this.getProduct();
        this.checkInCart();
    },

})


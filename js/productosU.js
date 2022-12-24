var id = location.search.substring(4).split('&');
// lee los argumentos pasados a este formulario

const app = new Vue({
    el: "#app",
    data: {
        productos: [],
        update:{},
        errored: false,
        loading: true
    },
    created() {
        var url = 'http://127.0.0.1:5000/productos/'+id 
        var urlupdate = 'http://127.0.0.1:5000/update'
        this.fetchData(url,urlupdate)
    },
    methods: {
        fetchData(url,urlupdate) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
             //       this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
            fetch(urlupdate)
                .then(response => response.json())
                .then(data => {
                    this.update = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        
    }
})
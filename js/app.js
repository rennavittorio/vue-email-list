

const { createApp } = Vue

// axios
//     .get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((res) => {
//         console.log(res)
//         //risposta del server
//         console.log(res.data.response)
//         //res.data dati contenuti nella risposta
//     })

createApp({

    data() {

        return {
            firstName: 'marco',
            mailList: [],

        }

    },

    methods: {
        fetchMail(){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.mailList.push(res.data.response);
                })
                
        }

    },

    mounted(){
        for (let i = 0; i < 10; i++){
            this.fetchMail();
        }

    },



}).mount('#app')


const { createApp } = Vue

axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) => {
        console.log(res)
        //risposta del server
        console.log(res.data.response)
        //res.data dati contenuti nella risposta
    })

createApp({

  data() {

    return {
      fisrtName: 'marco',
    }

  }

}).mount('#app')
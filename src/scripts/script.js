


const listaPersonagem = document.querySelectorAll(".escolhido");



listaPersonagem.forEach(escolhido => {

    escolhido.addEventListener("click", () => {



        const idPersonagemSelecionado = escolhido.attributes.id.value

        const personagemSelecionado = document.querySelector(".ativo")
        personagemSelecionado.classList.remove("ativo")

        const personagemSelecionadoNaLista = document.getElementById(idPersonagemSelecionado)
        personagemSelecionadoNaLista.classList.add("ativo")


        const cardDigimonAberto = document.querySelector(".open")
        cardDigimonAberto.classList.remove("open")


        const idDigimonSelecionado = escolhido.attributes.id.value

        const idDoDigimonCard = "card"+ idDigimonSelecionado

        const cardDigimonAbri = document.getElementById(idDoDigimonCard)
        cardDigimonAbri.classList.add("open")
        


    })


})



//quando o input "titulo" ser mudado

var tituloInput = document.querySelector("#titulo")
var textCampoAlterado = document.querySelector("#titulo-preview")

tituloInput.addEventListener("input", event => {
    let valorAntigo = "Titulo"

    textTitulo = tituloInput.value
    textCampoAlterado.innerText = textTitulo

    if(textCampoAlterado.innerText === ""){
        textCampoAlterado.innerText = valorAntigo
    }
})


//esconder ou mostrar o componente

var btn = document.querySelector("#show-or-hide")
var section = document.querySelector(".hidden-section")

btn.addEventListener("click", function(){
    btn.classList.toggle("active")

    if(section.style.display === "block"){
        section.style.display = "none";
    } else{
        section.style.display = "block";
    }
});


//funcionamento da preview

const perfilImagem = document.querySelector("#image")
const spanAfterEnd = document.querySelector("#after-end")
const assetImg = document.createElement("img")

assetImg.id = "image-asset"
assetImg.src = "assets/img/logo.png"
spanAfterEnd.insertAdjacentElement("afterend", assetImg)

perfilImagem.addEventListener("change", event =>{

    if(assetImg){
        assetImg.remove()
    }

    const preview = document.querySelector("#preview-perfil")

    if(preview){
        preview.remove()
    }

    const reader = new FileReader

    reader.onload = function(event){
        const previewImage = document.createElement("img")

        previewImage.id = "preview-perfil"
        previewImage.src = event.target.result
        spanAfterEnd.insertAdjacentElement("afterend", previewImage)

        const buttonDie = document.createElement("button")
        buttonDie.id = "btnDieImg"
        buttonDie.innerText = "x"
        previewImage.insertAdjacentElement("afterend",buttonDie)

        buttonDie.addEventListener("click", event =>{
            previewImage.remove()
            buttonDie.remove()
            spanAfterEnd.insertAdjacentElement("afterend", assetImg)
        })
    }
    reader.readAsDataURL(perfilImagem.files[0])
})


//toggle-switch

var toggleSwitch_facebook = document.querySelector("#facebook-toggle")
var toggleSwitch_google = document.querySelector("#google-toggle")

toggleSwitch_facebook.addEventListener("click", () => {

    let addSignFacebook = document.querySelector("#add-item-facebook")
    toggleSwitch_facebook.classList.toggle("active")

    if(addSignFacebook.style.display === "block"){
        addSignFacebook.style.display = "none";
    } else{
        addSignFacebook.style.display = "block";
    }
})

toggleSwitch_google.addEventListener("click", () =>{

    toggleSwitch_google.classList.toggle("active")
    let addSignGoogle = document.querySelector("#add-item-google")

    if(addSignGoogle.style.display === "block"){
        addSignGoogle.style.display = "none";
    } else{
        addSignGoogle.style.display = "block";
    }
})


//alterar a cor do botão

var colorSelected = document.querySelector("#color-button")
var buttonSave = document.querySelector("#button-save")

colorSelected.addEventListener("change", event => {
    buttonSave.style.backgroundColor = colorSelected.value
})

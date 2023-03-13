export default {
    el: document.querySelector("#nombre"),
    value(){
        //return this.el.innerHTML;
    },
    setValue(caracter){
        let texto ="";
        if (caracter == Number(caracter))
            texto ="Es un número";
        else if (caracter === caracter.toUpperCase() && caracter.charAt(0).match(/[a-zA-Z]/))
            texto ="Es una letra mayúscula";
        else if (caracter === caracter.toLowerCase()  && caracter.charAt(0).match(/[a-zA-Z]/))
            texto ="Es una letra minúscula";
        else
            texto ="No es un carácter alfanumérico";

        this.el.insertAdjacentText("beforeend",`${texto}`)
    },
}
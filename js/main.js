export default {
    el: document.querySelector("#nombre"),
    value(){
        //return this.el.innerHTML;
    },
    setValue(precio){
        let impuesto =0;
        let valTotal =0;
        if (precio > 150000)
            impuesto =19;
        else
            impuesto =16;

        valTotal = Number(precio)+(Number(precio) * (impuesto/100));
        this.el.insertAdjacentText("beforeend",`Precio: ${precio} `)
        this.el.insertAdjacentHTML("beforeend","<br>");
        this.el.insertAdjacentText("beforeend",`Impuesto: ${impuesto}`)
        this.el.insertAdjacentHTML("beforeend","<br>");
        this.el.insertAdjacentText("beforeend",`Valor Total: ${valTotal} `)
    },
}
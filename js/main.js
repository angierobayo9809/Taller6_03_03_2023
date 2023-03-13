export default {
    el: document.querySelector("#nombre"),
    value(){
        //return this.el.innerHTML;
    },
    setValue(annos){
        let sueldoTotal =0;
        let sueldofijo =14400000;
        let aumento =0;
        for(let x =1; x <= annos; x++)
        {
            if (x < 3)
            {
                aumento = sueldofijo*(3/100);
                sueldofijo = sueldofijo +aumento;
                sueldoTotal += sueldofijo;
                this.el.insertAdjacentText("beforeend",`Año ${x}: Sueldo: $${sueldofijo.toFixed(2)} Aumento: $${aumento.toFixed(2)}`)
            }
            else if (x < 5 && x>= 3)
            {
                aumento = sueldofijo*(5/100);
                sueldofijo = sueldofijo +aumento;
                sueldoTotal += sueldofijo;
                this.el.insertAdjacentText("beforeend",`Año ${x}: Sueldo: $${sueldofijo.toFixed(2)} Aumento: $${aumento.toFixed(2)}`)
            }
            else if (x < 10 && x>= 5)
            {
                aumento = sueldofijo*(7/100);
                sueldofijo = sueldofijo +aumento;
                sueldoTotal += sueldofijo;
                this.el.insertAdjacentText("beforeend",`Año ${x}: Sueldo: $${sueldofijo.toFixed(2)} Aumento: $${aumento.toFixed(2)}`)
            }
            else if (x > 10)
            {
                aumento = sueldofijo*(10/100);
                sueldofijo = sueldofijo +aumento;
                sueldoTotal += sueldofijo;
                this.el.insertAdjacentText("beforeend",`Año ${x}: Sueldo: $${sueldofijo.toFixed(2)} Aumento: $${aumento.toFixed(2)}`)
            }
            
            this.el.insertAdjacentHTML("beforeend","<br>")
        }
        this.el.insertAdjacentHTML("beforeend","<br>")
        this.el.insertAdjacentText("beforeend",`El sueldo total del trabajador es de:${sueldoTotal.toFixed(2)}`)
    },
}
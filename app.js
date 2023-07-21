document.querySelector("#bubble").addEventListener("click",
function () {
    let dia = parseInt(document.querySelector(".dia").value)
    let mes = parseInt(document.querySelector(".mes").value)
    let anio = parseInt(document.querySelector(".anio").value)
    let ahora = new Date();
    let fecha = new Date(anio,mes-1,dia);
    let diferencia = ahora - fecha;
    let diasDeDiferencia = Math.floor(diferencia/1000/60/60/24)
    let aniosDif = 0;
    let mesesDif = 0;
    let diasDif = 0;
    while(diasDeDiferencia > 0)
    {
        if(diasDeDiferencia > 365)
        {
            aniosDif++;
            diasDeDiferencia = diasDeDiferencia-365;
        }
        else if(diasDeDiferencia > 30)
        {
            mesesDif++;
            diasDeDiferencia = diasDeDiferencia-30
        }
        else
        {
            diasDif++
            diasDeDiferencia--
        }
    }
    
    if(dia != "" && mes <= 12 && mes > 0 && mes != "" && anio != "")
    {
        document.querySelector(".d").innerHTML = diasDif;
        document.querySelector(".m").innerHTML = mesesDif;
        document.querySelector(".y").innerHTML = aniosDif;
    }
    else
    {

    }
});
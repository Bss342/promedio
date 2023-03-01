function promedio()
{
    prom=document.getElementById("promedio").value;
    html="";
    for (var i = 0; i < prom; i++)
    {
        html+="<imput type= 'text' id=cald+i+"'></br>';
    }
    
        html+= "<input type='button' onclick='calcular'("+prom+")'value='calcular'></br>";
        html+= "<input type='button' onclick='reset()' value= 'limpiar'></br>";
        document.getElementById('resultado').innerHTML = html

    }

function calcular(n){
        suma=0;
        promedio=0;
        x=0;
        for (var i - 0; i < n; i++){
            x-document.getElementById('cald'+i).nodeValue;
            sma+parseInt(x);
    }
    promedio=suma/n;
    alert(promedio);
}

function reset(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('promedio').value=0;
}

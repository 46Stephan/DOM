/* Desenvolva aqui a rotina */

let button = document.getElementById('btn_calcular');
button.addEventListener('click', () => {


    let valorBase = Number(document.getElementById('valor_base').value);
    document.getElementById('valor_base').addEventListener('blur', button.click);

    let valorTransporte = Number(document.getElementById('valor_transporte').value);
    document.getElementById('valor_transporte').addEventListener('blur', button.click);

    let valorAlimentacao = Number(document.getElementById('valor_alimentacao').value);
    document.getElementById('valor_alimentacao').addEventListener('blur', button.click);

    let valorAuto = Number(document.getElementById('valor_automovel').value);
    document.getElementById('valor_automovel').addEventListener('blur', button.click);

    let descontos = Number(document.getElementById('faltas').value);
    document.getElementById('faltas').addEventListener('blur', button.click);


    let res1 = 0;
    let res2 = 0;
    let res3 = 0;

    res1 = valorBase + valorTransporte + valorAlimentacao;
    localStorage.setItem('valorReceita', res1);

    res2 = valorAuto + descontos;
    localStorage.setItem('valorDesconto', res2);

    res3 = res1 - res2;
    localStorage.setItem('valorTotal', res3);


    document.getElementById('valor_receita').value = res1;
    document.getElementById('valor_descontos').value = res2;
    document.getElementById('valor_total').value = res3;
})
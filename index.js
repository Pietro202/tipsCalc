function formatMoney(values){
    values = Math.ceil(values*100) /100;
    values = values.toFixed(2);
    return 'R$' + values
}

function formatSplit(value){
    if (value == 1) return value + ' Pessoa'
    return value + ' Pessoas'
}


function update(){
    let bill = Number(document.getElementById('yourBill').value);
        if (bill<0) {
            alert('Conta não pode ter valores negativos.')
            document.getElementById('yourBill').value = 0
            document.getElementById('totalWhitTip').innerHTML = 0
            document.getElementById('billEach').innerHTML = 'R$ ' + 0
        }else{
        
    let tipPercents = document.getElementById('percent').value;
    let split = document.getElementById('splitInput').value
    document.getElementById('splitValue').innerHTML = formatSplit(split)

    let tipValue = bill * (tipPercents/100)
    let billTotal = bill + tipValue
    let billEach = billTotal /split

    document.getElementById('tipPercent').innerHTML = tipPercents + '%'
    document.getElementById('totalWhitTip').innerHTML = 'Total ' + formatMoney(billTotal)
    document.getElementById('billEach').innerHTML = formatMoney(billEach) + ' Para Cada'

    console.log(tipValue, billTotal, billEach)


        }
}
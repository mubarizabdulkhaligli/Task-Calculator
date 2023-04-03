function Calculate() {
    var amount = parseFloat(document.getElementById("amount").value);
    var interest = parseFloat(document.getElementById("interest").value)/ 12 / 100;
    var term = parseInt(document.getElementById("term").value);
    
    var payment = (amount*interest)/(1-(1/Math.pow(1+interest, term)));
    var totalPayment = payment*term;
    var totalInterest = totalPayment-amount;

    document.getElementById("payment").value=payment.toFixed(2)
    document.getElementById("total-payment").value=totalPayment.toFixed(2)
    document.getElementById("total-interest").value=totalInterest.toFixed(2)
  }
  
/*var login = document.getElementById("login");

login.style.display = "none";

function enterInAtm(){

            var entry = document.getElementsByName("entry");
            var entryTxt = document.getElementById("entryTxt");
            var para = document.getElementById("para");


        if(entry[0].checked === true){

                entryTxt.innerHTML = "WELCOME IN ATM.."
                para.style.display = "none";
                login.style.display = "block";
        }
        else if(entry[1].checked === true){

            entryTxt.innerHTML = "THANKYOU FOR VISITING SBI ATM.."
            para.style.display = "none";
        }
        }

        function detailSubmit(){

                var MinePass = "Jainish123";

                var email = document.getElementById("email");
                var pass = document.getElementById("pass");
                var output = document.getElementById("output");

                if(pass.value.match(MinePass))
                    {
                        output.innerHTML = "Correct Matching.."
                        login.style.display = "none"
                
                        setTimeout(()=>{
                            output.style.display = "none"
                        },3000);
                    }
                    else{
                        output.innerHTML = "Invalid Password.."
                    }  
        }

  */

var login = document.getElementById("login");
var option = document.getElementById("option");
var transactionOutput = document.getElementById("transactionOutput");
var amountSection = document.getElementById("amountSection");
var amountInput = document.getElementById("amount");
var balance = 10000; // Initial balance

login.style.display = "none";
option.style.display = "none";
amountSection.style.display = "none";

function enterInAtm() {
    var entry = document.getElementsByName("entry");
    var entryTxt = document.getElementById("entryTxt");
    var para = document.getElementById("para");

    if (entry[0].checked === true) {
        entryTxt.innerHTML = "WELCOME TO SBI ATM";
        para.style.display = "none";
        login.style.display = "block";
    }
    else if (entry[1].checked === true) {
        entryTxt.innerHTML = "THANK YOU FOR VISITING SBI ATM";
        para.style.display = "none";
    }
}

function detailSubmit() {
    var MinePass = "Jainish123";
    var pass = document.getElementById("pass");
    var output = document.getElementById("output");

    if (pass.value === MinePass) {
        output.innerHTML = "Login Successful!";
        login.style.display = "none";
        option.style.display = "block";

        setTimeout(() => {
            output.style.display = "none";
        }, 3000);
    } else {
        output.innerHTML = "Invalid Password.";
    }
}

function showAmountInput() {
    var transaction = document.getElementsByName("transaction");
    var selectedTransaction = "";

    transaction.forEach(option => {
        if (option.checked) {
            selectedTransaction = option.value;
        }
    });

    if (selectedTransaction === "deposit" || selectedTransaction === "withdraw") {
        amountSection.style.display = "block";
    } else {
        amountSection.style.display = "none";
    }
}

function handleTransaction() {
    var transaction = document.getElementsByName("transaction");
    var selectedTransaction = "";

    transaction.forEach(option => {
        if (option.checked) {
            selectedTransaction = option.value;
        }
    });

    var amount = parseFloat(amountInput.value);

    if (selectedTransaction === "deposit") {
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            transactionOutput.innerHTML = `₹${amount} deposited successfully. Current Balance: ₹${balance}`;
        } else {
            transactionOutput.innerHTML = "Invalid deposit amount.";
        }
    } else if (selectedTransaction === "withdraw") {
        if (!isNaN(amount) && amount > 0) {
            if (amount <= balance) {
                balance -= amount;
                transactionOutput.innerHTML = `₹${amount} withdrawn successfully. Remaining Balance: ₹${balance}`;
            } else {
                transactionOutput.innerHTML = "Insufficient balance.";
            }
        } else {
            transactionOutput.innerHTML = "Invalid withdrawal amount.";
        }
    } else if (selectedTransaction === "balance") {
        transactionOutput.innerHTML = `Your Current Balance: ₹${balance}`;
    } else {
        transactionOutput.innerHTML = "Please select a transaction option.";
    }
}

const calculateTip = (event) => {
  event.preventDefault();

  let bill = document.getElementById("bill").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let npeople = document.getElementById("people").value;

  if (bill == "" || serviceQual == 0) {
    alert("Por favor, preencha os valores!");
    return;
  }

  if (npeople == "" || npeople == 1) {
    npeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (bill * serviceQual) / npeople;
  total = total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
  document.getElementById("totalTips").style.display = "block";
};

document.getElementById("totalTips").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);

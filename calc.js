function tipCaluclate(event) {
  event.preventDefault();
  let billamounti = parseFloat(document.getElementById("billamount").value);
  let percentagetipi = parseFloat(
    document.getElementById("percentagetip").value
  );
  let tipamounti = document.getElementById("tipamount") || 0;
  let totali = document.getElementById("total") || 0;
  console.log(billamounti);
  console.log(percentagetipi);

  document.getElementById("errormessage").innerHTML = "";

  if (isNaN(billamounti) || isNaN(percentagetipi)) {
    document.getElementById("errormessage").innerHTML =
      "please fill the  correct details";
    return;
  }
  const tip = (billamounti * percentagetipi) / 100;
  const total = billamounti + tip;
  tipamounti.value = tip.toFixed(2);
  totali.value = total.toFixed(2);
}

let total = null;
function completebilling() {
	alert("Customer Payment Submitted");
    total = null;
    console.log(total);
    $("#total_value").text(total);
}

function calculateTotal()
{
  let item_price={}
  
  first = ($("#price1").val() * $("#percent1").val() * 0.01)
  
  second = ($("#price2").val() * $("#percent2").val() * 0.01)
  
  third = ($("#price3").val() * $("#percent3").val() * 0.01)
  
  fourth = ($("#price4").val() * $("#percent4").val() * 0.01)
  
  fifth = ($("#price5").val() * $("#percent5").val() * 0.01)

  total = first + second + third + fourth + fifth;
  let finaltotal = Math.round(total * 100) / 100;
  $("#total_value").text("$" + finaltotal);
  
}


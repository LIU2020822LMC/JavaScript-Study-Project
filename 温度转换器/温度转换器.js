const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert(){

  if(toFahrenheit.checked)
  {
    temp = Number(textbox.value);
    temp = (1.8*temp)+32;
    result.textContent = temp.toFixed(1)+'°F';
  }
  else if (toCelsius.checked) 
    {
      temp = Number(textbox.value);
      temp = (temp-32)/1.8;
      result.textContent = temp.toFixed(1) + "°C";
    } 
    else 
    {
      result.textContent = "请选择你的转换方式";
    }
}
function rollDice(){
  const numDice = document.getElementById("numDice").value;
  const DickResult = document.getElementById("DickResult");
  const DickImage = document.getElementById("DickImage");
  const values = [];
  const image = [];

  for(let i = 1; i <= numDice;i++){
    const value = Math.floor(Math.random()*6) + 1;
    values.push(value);
    image.push(`<img src="骰子图片/${value}.png" alt="骰子：${value}">`);
  }
  DickResult.textContent = `骰子：${values.join(', ')}`;
  DickImage.innerHTML = image.join('');
}
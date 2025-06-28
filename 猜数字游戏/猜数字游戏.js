const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* maxNum)+1;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
  guess = Number(window.prompt(`请猜一个数字（${minNum}-${maxNum}）:`));
  if(isNaN(guess)){
    window.alert('请输入正确的数字');
  }
  else if(guess < minNum || guess > maxNum){
    window.alert("请输入正确范围的数字");
  }
  else{
    attempts ++;
    if(guess < answer){
      window.alert("猜的数字太小啦！重新猜一次吧");
    }
    else if (guess > answer) {
      window.alert("猜的数字太大啦！重新猜一次吧");
    }
    else{
      window.alert(`恭喜你猜对了！答案数字是${answer},你总共猜了${attempts}次！`);
      running = false;
    }
  }
}
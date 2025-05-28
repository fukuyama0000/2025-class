document.getElementById('draw').addEventListener('click',function(){
    const omikujiResults = ['大吉','中吉','小吉','末吉','凶','大凶'];
    const result=omikujiResults[Math.floor(Math.random() * omikujiResults.length)];
    
    if(result ==='大吉'){
        document.getElementById('result').style.color="red";
    }
    if(result ==='中吉'){
        document.getElementById('result').style.color="orange";
    }
    if(result ==='小吉'){
        document.getElementById('result').style.color="gold";
    }
    if(result ==='末吉'){
        document.getElementById('result').style.color="green";
    }
    if(result ==='凶'){
        document.getElementById('result').style.color="blue";
    }
    if(result ==='大凶'){
        document.getElementById('result').style.color="purple";
    }
    document.getElementById('result').textContent=`あなたの運勢は... ${result}!`;//バッククオート
})
//drawという名前のボタンがclickされたときに起こる処理を記述する
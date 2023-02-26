export function startGame() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    // محاسبه مکان سکه
    var coinx = Math.random() * (450 - 50)
    var coiny = Math.random() * (300 - 50)
    console.log(coinx)
    console.log(coiny)
    var t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;
    let d = new Date();
    let seconds = d.getSeconds();
    let gameseconds = 0
    let secoundcheker = 0
    let base_image = new Image();
    base_image.src = 'https://thumbs.dreamstime.com/z/vector-stock-comic-explosion-bang-boom-you-win-text-comic-cartoon-bang-exsplosion-you-win-text-126376540.jpg';

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}

    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        //var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 450, 300);

        context.font = '30px Arial';
        context.fillStyle = 'white';
        context.fillText("سکه: " + score, 20, 30);
        
        d = new Date();
        seconds = d.getSeconds();
        
        if (seconds !== secoundcheker){
            gameseconds++
        }
        if(gameseconds >= 30){
            context.font = '35px Arial';
            context.fillStyle = 'black';
            
            context.drawImage(base_image, 0, 0, 450, 350);
            context.fillText("شما برنده " + score + "درصد کد تخفیف شدید", 20, 20);
            window.cancelAnimationFrame(reqAnim);
        }
        secoundcheker = seconds

        context.font = '30px Arial';
        context.fillStyle = 'white';
        context.fillText("زمان: " + gameseconds, 200, 30);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();
        // ایجاد سکه
        context.beginPath();
        context.rect(coinx, coiny, 50, 50);
        context.fillStyle="#ffd000";
        context.fill()

        if(dir == 1) {
            if(x+100 < 450) {
                x += (speed * timePassed);
            }
        }
        else if(dir == 2) {
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) {
            if(y+100 < 300) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) {
            if(y > 0) {
                y -= (speed * timePassed);
            }
        }
        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) {
          score++;
          console.log(score);
          coinx = Math.random() * (450-50);
          coiny = Math.random() * (300-50);

        }
        window.requestAnimationFrame(draw);
    }
    draw();
}

$(function() {
    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;
    // Main
    initHeader();
    addListeners();
    function initHeader() {
        width = document.body.clientWidth; 
        height = document.body.clientHeight; 
        target = {x: 0, y: height};

        canvasBox = document.createElement('div')
        canvas = document.createElement('canvas')
        canvasBox.style.cssText = "position:fixed;bottom:0;left:0;z-index:-1"
        canvasBox.appendChild(canvas)
        document.getElementsByTagName('body')[0].appendChild(canvasBox)
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }
    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }
    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }
    function resize() {
        width = window.innerWidth;
        height = document.body.clientHeight; 
        canvas.width = width;
        canvas.height = height;
    }
    function animate() {
        
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }
    // Canvas manipulation
    function Circle() {
        var _this = this;
        // constructor
        (function() {
            _this.pos = {};
            init();
        })();
        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.45;
            _this.scale = 0.1+Math.random()*1.5;
            _this.velocity = Math.random();
        }
        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha+')';
            
            ctx.lineWidth = 2; 
            ctx.strokeStyle = 'rgba(30,130,230,' +_this.alpha +')';
            ctx.fill();
            ctx.stroke();
        };
    }
});
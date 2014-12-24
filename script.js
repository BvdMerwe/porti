$(document).ready(function(){
    $("#content").css("opacity", 0);
    $("#content").animate({
        opacity: 1
    }, 2000);
    
    $("a").on("click", function(e){
        e.preventDefault();
        var newLocation = this.href;
        $("#content").animate({
            opacity: 0
        }, 500, function(){
            window.location.href = newLocation;
        });
    });
    
    
/*    if (window.location.href.indexOf("index") > -1 || window.location.href.indexOf(".html") < 0)
    {
        var stage = new Kinetic.Stage({
            container: 'cube',
            width: 400,
            height: 400
        });
        
        stage.scale({
            x: 2,
            y: 2
        });
    }
    else
        var stage = new Kinetic.Stage({
            container: 'cube-small',
            width: 200,
            height: 200
        });

    var layer = new Kinetic.Layer();

    var hex = new Kinetic.RegularPolygon({
        x: 100,
        y: 100,
        sides: 6,
        radius: 80,
        fill: '#B3262A',
        stroke: '#231F20',
        strokeWidth: 20
    });
//      hex.rotate(90);

    var t1 = new Kinetic.Rect({
        x: 40.5,
        y: 134.5,
        width: 68,
        height: Math.sin(30)*60,
        fill: '#3B4D81',
        stroke: '',
        strokeWidth: 0
    });

    t1.rotate(30);

    t1.skew({
        x: 0.58,
        y: 0
    });

    var t1text = new Kinetic.Text({
        x: 50,
        y: 75,
        fontFamily: 'Arial',
        fontSize: 28,
        text: '',
        fill: 'white'
    });

    t1text.rotate(30);

    t1text.skew({
        x: 0.58,
        y: 0
    });

    var t2 = new Kinetic.Rect({
        x: 99,
        y: 168.5,
        width: 69,
        height: Math.sin(30)*60,
        fill: '#54B948',
        stroke: '',
        strokeWidth: 0
    });

    t2.rotate(-30);

    t2.skew({
        x: -0.58,
        y: 0
    });

    var t2text = new Kinetic.Text({
        x: 102,
        y: 100,
        fontFamily: 'Calibri',
        fontSize: 26,
        text: '',
        fill: 'white'
    });

    t2text.rotate(-30);

    t2text.skew({
        x: -0.58,
        y: 0
    });

    var t3 = new Kinetic.Rect({
        x: 40.5,
        y: 66,
        width: 68,
        height: Math.sin(30)*60,
        fill: '#F58235',
        stroke: '',
        strokeWidth: 0
    });

    t3.rotate(30);

    t3.skew({
        x: -0.58,
        y: 0
    });

    var t3text = new Kinetic.Text({
        x: 48,
        y: 63,
        fontFamily: 'Calibri',
        fontSize: 28,
        text: '',
        fill: 'white'
    });

    t3text.rotate(-30);

    t3text.skew({
        x: 0.58,
        y: 0
    });

    t3.on("mouseover", function(){
        document.body.style.cursor = "pointer";
        t3text.setText("RES\nUME");
        t3text.on("mouseover", function(){
            document.body.style.cursor = "pointer";
            t3text.setText("RES\nUME");
        });
        t3text.on("mouseout", function(){
            t3text.setText("");
            document.body.style.cursor = "default";
        });
    });
    t3.on("mouseout", function(){
        t3text.setText("");
        document.body.style.cursor = "default";
    });

    t2.on("mouseover", function(){
        document.body.style.cursor = "pointer";
        t2text.setText("PORT\nFOLIO");
        t2text.on("mouseover", function(){
            document.body.style.cursor = "pointer";
            t2text.setText("PORT\nFOLIO");
        });
        t2text.on("mouseout", function(){
            document.body.style.cursor = "default";
            t2text.setText("");
        });
    });
    t2.on("mouseout", function(){
        document.body.style.cursor = "default";
        t2text.setText("");
    });

    t1.on("mouseover", function(){
        document.body.style.cursor = "pointer";
        t1text.setText("HO\nME");
        t1text.on("mouseover", function(){
            document.body.style.cursor = "pointer";
            t1text.setText("HO\nME");
        });
        t1text.on("mouseout", function(){
            document.body.style.cursor = "default";
            t1text.setText("");
        });
    });
    t1.on("mouseout", function(){
        document.body.style.cursor = "default";
        t1text.setText("");
    });


    setInterval(function(){
        hex.rotate(0.2);
        layer.draw();
    }, 50);

    layer.add(hex);
    layer.add(t1);
    layer.add(t1text);
    layer.add(t2);
    layer.add(t2text);
    layer.add(t3);
    layer.add(t3text);
    
    stage.add(layer);
    
    t2text.on("click", function(){
        $("#content").animate({
            opacity: 0
        }, 500, function(){
            window.location.href = "portfolio.html";
        });
    });
    
    t1text.on("click", function(){
        $("#content").animate({
            opacity: 0
        }, 500, function(){
            window.location.href = "index.html";
        });
    });
    
    t3text.on("click", function(){
        $("#content").animate({
            opacity: 0
        }, 500, function(){
            window.location.href = "resume.html";
        });
    });
    
    $("#cube-small").mouseover(function(){
        $(this).animate({
            opacity: 1
        }, 500);
    });
    $("#cube-small").mouseout(function(){
        $(this).animate({
            opacity: 0.4
        }, 500);
    });*/
});
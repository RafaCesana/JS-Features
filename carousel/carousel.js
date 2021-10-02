
carouselT = window.setInterval("carouselStart()",2000)

var carouselI = 0
var carouselN = 3

function carouselPosition(carouselI)
{
    var c = document.getElementById('carousel');
    var pos = c.clientWidth*carouselI;
    c.scrollTo( { top:0, left:pos, behavior:'smooth' } );

    carosuselSetIcon(carouselI);
}

function carouselStart()
{
    var c = document.getElementById('carousel');
    if( c )
    {
        carouselI++;
        c.focus();
        var pos = c.clientWidth * carouselI;
        if( carouselI >= carouselN )
        {
            carouselI = 0
            clearInterval(carouselT)
            c.scrollTo( { top:0, left:0, behavior:'smooth' } );
        }
        else
        {
            c.scrollTo( { top:0, left:pos, behavior:'smooth' } );
        }
        carosuselSetIcon(carouselI)
    }
}

function carosuselSetIcon(carouselI)
{
    for(i=0; i<carouselN; i++)
    {
        document.getElementById('carouselIcon'+i).style.color='#fff';
    }
    document.getElementById('carouselIcon'+carouselI).style.color='#ff0';
}


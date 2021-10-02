var visibleContentDiv = false;
function toggle()
{
    var content = document.getElementById('content');
    var title   = document.getElementById('title');

    if( content )
    {
        if( visibleContentDiv )
        {
            content.style.display = 'none';
            visibleContentDiv = false;
        }
        else
        {
            content.style.display = 'block';
            visibleContentDiv = true;
        }
    }
}

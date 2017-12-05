
function zoom() 
{
    if ($("#zoomSelect div[aria-label='Zoom list. 100% selected.']").length > 0) 
    {
        console.log("Menu loaded, Zoom Fitting...");

        $("#zoomSelect input.jfk-textinput").simulate('mousedown');

        setTimeout(
            function () {
                $("#\\:3f").simulate('mouseup');
            },
            10
        );
    }
    else // retry 
    {
        setTimeout(zoom, 100);
    }
}

setTimeout(zoom, 100);

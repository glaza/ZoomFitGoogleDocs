

/**
 * Presses the zoom area
 */
function zoom() 
{
    var inputSelector = "#zoomSelect input.jfk-textinput";
    if ( $( inputSelector ).length > 0 ) 
    {
        console.log( "Menu loaded, Zoom Fitting..." );

        $( inputSelector ).simulate( 'mousedown' );

        setTimeout( fit, 100 );
    }
    else // retry 
    {
        setTimeout( zoom, 100 );
    }
}

/**
 * Selects the Fit zoom level
 */
function fit()
{
    var fitSelector = "div.goog-menu[style*='visible']:first div:first";
    if ( $( fitSelector ).length > 0 )
    {
        $( fitSelector ).simulate( 'mouseup' );
    }
    else // retry
    {
        setTimeout( fit, 100 );
    }
}

setTimeout( zoom, 100 );

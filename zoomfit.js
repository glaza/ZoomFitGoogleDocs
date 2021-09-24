

/**
 * Presses the zoom area
 */
function zoom() {
    var inputSelector = $("#zoomSelect input.jfk-textinput");
    if (inputSelector.length > 0) {
        inputSelector.val("Fit");
        //inputSelector.change();
        // var e = jQuery.Event("keypress");
        // e.which = 13; //choose the one you want
        // e.keyCode = 13;
        // inputSelector.trigger(e);
        // inputSelector.simulate( keyEvent, {
		// 	keyCode: 70
		// });
        // inputSelector.simulate( keyEvent, {
		// 	keyCode: 13
		// });
    } else { // retry 
        setTimeout(zoom, 100);
    }
}

/**
 * Selects the Fit zoom level
 */
function fit() { ".docs-gm .goog-menuitem .goog-menuitem-content"
    var fitSelector = "div.goog-menu[style*='visible']:first div:first";
    if ($(fitSelector).length > 0) {
        console.log("ZoomFitGoogleDocs: Pressing Fit button...");
        $(fitSelector).simulate('mousedown');
    } else { // retry
        setTimeout(fit, 100);
    }
}

setTimeout(zoom, 100);

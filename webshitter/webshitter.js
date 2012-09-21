document.addEventListener( 'DOMNodeInserted', function( event ) { webshitter( event, 'node' ) }, false );

function webshitter( event, node_trigger ) {
    var scope = ( node_trigger == 'node' ) ? event.target : document;

    var textdata = document.evaluate(
        './/text()',
        scope,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    for( var i = 0; textdata.snapshotLength; i++ ) {
        var node = textdata.snapshotItem(i);
        node.data = node.data.replace( /website/i, 'webshite' );
        console.log( node.data );
    }
}

webshitter();
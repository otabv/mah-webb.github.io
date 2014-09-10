(function() {
    var doc = document.documentElement,
        body = document.body,
        header = document.getElementById( 'header' ),
        sidebar = document.getElementById( 'sidebar' );

    // Sidebar toggle

    if ( sidebar ) {
        var currentClass = body.className;

        window.addEventListener( 'scroll', function() {
            if ( body.classList.contains( 'standalone' ) ) {
                return false;
            }

            var t = doc && doc.scrollTop || body.scrollTop;

            if ( t > header.offsetHeight ) {
                if ( ! body.classList.contains( 'fix-sidebar' ) ) {
                    body.classList.add( 'fix-sidebar' );
                }
            } else {
                body.classList.remove( 'fix-sidebar' );
            }

        });

        var overviewElements = document.querySelectorAll( '.course-overview-element' );

        for ( var i = 0; i < overviewElements.length; i++ ) {
            overviewElements[i].addEventListener( 'click', function( e ) {
                e.target.classList.toggle( 'toggle' );
            });
        }

        var toggleSidebar = document.getElementById( 'toggle-sidebar' );
        
        toggleSidebar.addEventListener( 'click', function( e ) {
            sidebar.classList.toggle( 'toggle' );
        });
    }

    // Highlight navigation items

    var navigationItems = document.querySelectorAll( '.navigation li a' );

    for ( var i = 0; i < navigationItems.length; i++ ) {
        var el = navigationItems[i],
            re = new RegExp( '^' + el.href );

        if ( re.test( location.href ) ) {
            el.classList.add( 'current' );
        }
    }

    // Exercise calculator

    var calculator = document.getElementById( 'grid-calculator' );

    if ( calculator ) {
        var columns = document.getElementById( 'grid-columns' ),
            margin = document.getElementById( 'grid-margin' ),
            padding = document.getElementById( 'grid-padding' ),
            border = document.getElementById( 'grid-border' ),
            column = document.getElementById( 'grid-column' ),
            width = document.getElementById( 'grid-width' );

        var result = document.getElementById( 'grid-result' );

        function calculateWidth() {
            var m = margin.value || 0,
                p = padding.value || 0,
                b = border.value || 0;

            var w = column.innerHTML * columns.value - ( ( m * 2 ) + ( p * 2 ) + ( b * 2 ) );

            result.innerHTML = +w;
        }

        width.addEventListener( 'change', function() {
            column.innerHTML = Math.round( width.value / 12 );
            calculateWidth();
        });
        width.addEventListener( 'keyup', function() {
            column.innerHTML = Math.round( width.value / 12 );
            calculateWidth();
        });

        [columns, margin, padding, border].forEach( function( input ) {
            input.addEventListener( 'change', function() {
                calculateWidth();
            }, false );
        });

        [margin, padding, border].forEach( function( input ) {
            input.addEventListener( 'keyup', function() {
                calculateWidth();
            }, false );
        })
    }

    // Simple solution for a sticky footer
    function fixedFooter() {
        var h = window.innerHeight - body.clientHeight;

        if ( h > 0 ) {
            var c = document.querySelector( '.content' );
            c.style.minHeight = ( 300 + h ) + "px";
        }
    }

    window.onload = function() {
        fixedFooter();
        
        // iOS web app navigation
        (function( document, navigator, standalone ) {
            if ( ( standalone in navigator ) && navigator[standalone] ) {
                var curnode,
                    location = document.location,
                    stop = /^(a|html)$/i;

                // body.classList.add( 'standalone' );
                
                if ( sidebar ) {
                    var toggleSidebar = document.getElementById( 'web-app-sidebar' );
                    
                    toggleSidebar.addEventListener( 'click', function( e ) {
                        sidebar.classList.toggle( 'toggle' );
                    });
                }

                var goUp = document.getElementById( 'web-app-top' );

                goUp.addEventListener( 'click', function() {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                });

                var goPrev = document.getElementById( 'web-app-prev' );

                goPrev.addEventListener( 'click', function() {
                    window.history.go( -1 );
                });

                var goNext = document.getElementById( 'web-app-next' );

                goNext.addEventListener( 'click', function() {
                    window.history.go( 1 );
                });

                document.addEventListener( 'click', function( e ) {
                    curnode = e.target;

                    while ( !(stop).test( curnode.nodeName ) ) {
                        curnode = curnode.parentNode;
                    }

                    if( 'href' in curnode && ( curnode.href.indexOf('http') || ~curnode.href.indexOf(location.host) ) ) {
                        e.preventDefault();
                        location.href = curnode.href;
                    }
                }, false);
            }
        })( document, window.navigator, 'standalone' );
    };
})()

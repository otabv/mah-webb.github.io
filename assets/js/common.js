(function() {
    var doc = document.documentElement,
        body = document.body,
        header = document.getElementById( 'header' ),
        sidebar = document.getElementById( 'sidebar' );

    // Sidebar toggle

    if ( sidebar ) {
        var currentClass = body.className;

        window.addEventListener( 'scroll', function() {
            var t = doc && doc.scrollTop || body.scrollTop;

            if ( t > header.offsetHeight ) {
                body.className = currentClass + ' fix-sidebar';
            } else {
                body.className = currentClass;
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

    // iOS web app navigation issue

    if ( window.navigator.standalone ) {
	var local = document.domain,
            links = document.querySelectorAll( 'a' );

        for ( var i = 0; i < links.length; i++ ) {
            links[i].addEventListener( 'click', function( e ) {
                var href = e.target.href;

                if ( href.math( 'http://' + local ) || href.match( 'http://www.' + local ) ) {
                    e.preventDefault();
                    document.location.href = href;
                }
            });
        }
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
    };
})()

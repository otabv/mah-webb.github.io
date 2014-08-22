(function() {
    var doc = document.documentElement,
        body = document.body,
        header = document.getElementById( 'header' ),
        sidebar = document.getElementById( 'sidebar' );

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

    var navigationItems = document.querySelectorAll( '.navigation li a' );

    for ( var i = 0; i < navigationItems.length; i++ ) {
        var el = navigationItems[i],
            re = new RegExp( '^' + el.href );

        if ( re.test( location.href ) ) {
            el.classList.add( 'current' );
        }
    }

    var calculator = document.getElementById( 'grid-calculator' );

    if ( calculator ) {
        var columns = document.getElementById( 'grid-columns' ),
            margin = document.getElementById( 'grid-margin' ),
            padding = document.getElementById( 'grid-padding' ),
            border = document.getElementById( 'grid-border' );

        var result = document.getElementById( 'grid-result' );

        console.log( columns, margin, padding, border, result );

        function calculateWidth() {
            var m = margin.value || 0,
                p = padding.value || 0,
                b = border.value || 0;

            var w = 80 * columns.value - ( ( m * 2 ) + ( p * 2 ) + ( b * 2 ) );

            result.innerHTML = +w;
        }

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
    };
})()

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

    // Simple solution for a sticky footer
    window.onload = function() {
        var h = window.innerHeight - body.clientHeight;

        if ( h > 0 ) {
            var c = document.querySelector( '.content' );
            c.style.minHeight = ( 300 + h ) + "px";
        }
    };
})()

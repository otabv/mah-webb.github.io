"use strict";

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

    // Exercise grid calculator
    (function() {
        var calculator = document.getElementById( 'grid-calculator' );

        if ( ! calculator ) {
            return false;
        }
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
    })();

    (function() {
        var calculator = document.getElementById( 'percent-calculator' );

        if ( ! calculator ) {
            return false;
        }

        var target = document.getElementById( 'target-width' ),
            context = document.getElementById( 'context-width' ),
            percent = document.getElementById( 'percent-result' );

        function calculatePercent() {
            if ( target.value <= 0 || context.value <= 0 ) {
                percent.innerHTML = "0%";
                return;
            }

            percent.innerHTML = ( ( target.value / context.value ) * 100 ).toFixed(6) + "%";
        }

        [target, context].forEach( function( input ) {
            input.addEventListener( 'change', calculatePercent );
            input.addEventListener( 'keyup', calculatePercent );
        });

        calculatePercent();
    })();

    // Simple solution for a sticky footer
    function fixedFooter() {
        var content = document.querySelector( '.content' );

        var wHeight = window.innerHeight,
            bHeight = body.clientHeight,
            cHeight = content.offsetHeight;

        if ( ( wHeight - bHeight) > 0 ) {
            content.style.minHeight = ( wHeight - ( bHeight - cHeight ) ) + "px";
        }
    }

    // Adds anchor to content headers
    function headerAnchors() {
        var headers = document.querySelectorAll( '.content h1, .content h2, .content h3' );

        for ( var i = 0, len = headers.length; i < len; i++ ) {
            if ( headers[i].id ) {
                var header = headers[i],
                    id = header.id,
                    anchor = document.createElement( 'a' );

                anchor.href = '#' + id;
                anchor.className = 'header-anchor';

                header.appendChild( anchor );
            }
        }
    }

    // Highlight navigation item in sidebar
    function highlightSidebar() {
        var anchors = document.querySelectorAll( '#sidebar .course-overview-submenu a, #sidebar .blog-overview-submenu a' );

        for ( var i = 0, len = anchors.length; i < len; i++ ) {

            var anchor = anchors[i],
                re = new RegExp( '^' + anchor.href );

            if ( re.test( location.href ) ) {
                anchor.classList.add( 'active' );
                // <a> -> <li> -> <ul> -> sibling (span), better solution?
                anchor.parentNode.parentNode.previousElementSibling.classList.add( 'toggle' );
            }
        }
    }

    // Make external links open in a new tab
    function setTargetForLinks() {
        var anchors = document.getElementsByTagName( 'a' ),
            re = new RegExp( '^http://mah-webb.github.io' );

        for ( var i = 0, len = anchors.length; i < len; i++ ) {
            var anchor = anchors[i];

            if ( ! re.test( anchor.href ) ) {
                anchor.target = '_blank';
            }
        }
    }

    function createLineNumberButton() {
        var button = document.createElement( 'button' ),
        text = document.createTextNode( 'radnummer' );
        button.className = 'toggle-lineno';
        button.type = 'button';

        var show = document.createElement( 'span' );
        show.className = 'show';
        show.textContent = 'Visa ';

        var hide = document.createElement( 'span' );
        hide.className = 'hide';
        hide.textContent = 'Dölj ';

        button.appendChild( show );
        button.appendChild( hide );
        button.appendChild( text );

        return button;
    }

    function appendLineNumberButton( codeExample ) {
        if ( codeExample.firstChild.firstChild.childNodes[0].className != 'lineno' ) {
            return false;
        }

        var button = createLineNumberButton();

        button.addEventListener( 'click', function() {
            this.parentElement.classList.toggle( 'toggle' );
        });

        codeExample.appendChild( button );
    }


    function appendCodePenButton( codeExample ) {
        var language = codeExample.firstChild.firstChild.className;

        if ( language != 'css' && language != 'language-css' &&
             language != 'html' && language != 'language-html' &&
             language != 'js' && language != 'language-js' ) {
            return false;
        }

        var button = document.createElement( 'button' );
        button.textContent = 'Öppna i CodePen';
        button.className = 'codepen-button';
        button.type = 'button';

        button.addEventListener( 'click', function() {
            submitToCodePen( this.parentElement );
        });

        codeExample.appendChild( button );
    }

    function serializeCodeExample( codeExample ) {
        var code = codeExample.firstChild.firstChild,
            language = code.className,
            nodes = code.childNodes,
            content = '',
            data = {};

        if ( language != 'css' && language != 'language-css' &&
             language != 'html' && language != 'language-html' &&
             language != 'js' && language != 'language-js' ) {
            return false;
        }

        for ( var i = 0, len = nodes.length; i < len; i++ ) {
            content += nodes[i].className == 'lineno' ? '' : nodes[i].textContent;
        }

        data[language.substr( 9 )] = content;
        data['title'] = 'Code Example';

        return data;
    }

    function submitToCodePen( codeExample ) {
        var serialized = serializeCodeExample( codeExample ),
            form = document.createElement( 'form' ),
            input = document.createElement( 'input' );

        if ( ! serialized ) {
            return false;
        }

        // Cant solve sending åäö?
        var json = JSON.stringify( serialized )
                .replace(/"/g, '&quot;' )
                .replace(/'/g, '&apos;' );

        input.setAttribute( 'type', 'hidden' );
        input.setAttribute( 'name', 'data' );
        input.setAttribute( 'value', json );

        form.setAttribute( 'method', 'post' );
        form.setAttribute( 'action', 'http://codepen.io/pen/define' );
        form.setAttribute( 'target', '_blank' );
        form.appendChild( input );

        document.body.appendChild( form );
        form.submit();
    }

    function extendCodeExamples() {
        var codeExamples = document.querySelectorAll( '.highlight' );

        for ( var i = 0, len = codeExamples.length; i < len; i++ ) {
            var codeExample = codeExamples[i];
            
            // Append button for hiding line numbers
            appendLineNumberButton( codeExample );

            appendCodePenButton( codeExample );
        }
    }

    window.onload = function() {
        fixedFooter();
        headerAnchors();
        highlightSidebar();
        setTargetForLinks();
        extendCodeExamples();
        
        // iOS web app navigation
        (function( document, navigator, standalone ) {
            if ( ( standalone in navigator ) && navigator[standalone] ) {
                var curnode,
                    location = document.location,
                    stop = /^(a|html)$/i;

                body.classList.add( 'standalone' );
                
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

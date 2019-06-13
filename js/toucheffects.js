// /** Used Only For Touch Devices **/
// ( function( window ) {
//
// 	// for touch devices: add class cs-hover to the figures when touching the items
// 	if( Modernizr.touch ) {
//
// 		// classie.js https://github.com/desandro/classie/blob/master/classie.js
// 		// class helper functions from bonzo https://github.com/ded/bonzo
//
// 		function classReg( className ) {
// 			return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
// 		}
//
// 		// classList support for class management
// 		// altho to be fair, the api sucks because it won't accept multiple classes at once
// 		var hasClass, addClass, removeClass;
//
// 		if ( 'classList' in document.documentElement ) {
// 			hasClass = function( elem, c ) {
// 				return elem.classList.contains( c );
// 			};
// 			addClass = function( elem, c ) {
// 				elem.classList.add( c );
// 			};
// 			removeClass = function( elem, c ) {
// 				elem.classList.remove( c );
// 			};
// 		}
// 		else {
// 			hasClass = function( elem, c ) {
// 				return classReg( c ).test( elem.className );
// 			};
// 			addClass = function( elem, c ) {
// 				if ( !hasClass( elem, c ) ) {
// 						elem.className = elem.className + ' ' + c;
// 				}
// 			};
// 			removeClass = function( elem, c ) {
// 				elem.className = elem.className.replace( classReg( c ), ' ' );
// 			};
// 		}
//
// 		function toggleClass( elem, c ) {
// 			var fn = hasClass( elem, c ) ? removeClass : addClass;
// 			fn( elem, c );
// 		}
//
// 		var classie = {
// 			// full names
// 			hasClass: hasClass,
// 			addClass: addClass,
// 			removeClass: removeClass,
// 			toggleClass: toggleClass,
// 			// short names
// 			has: hasClass,
// 			add: addClass,
// 			remove: removeClass,
// 			toggle: toggleClass
// 		};
//
// 		// transport
// 		if ( typeof define === 'function' && define.amd ) {
// 			// AMD
// 			define( classie );
// 		} else {
// 			// browser global
// 			window.classie = classie;
// 		}
//
// 		[].slice.call( document.querySelectorAll( 'ul.grid > li > figure' ) ).forEach( function( el, i ) {
// 			el.querySelector( 'figcaption > a' ).addEventListener( 'touchstart', function(e) {
// 				e.stopPropagation();
// 			}, false );
// 			el.addEventListener( 'touchstart', function(e) {
// 				classie.toggle( this, 'cs-hover' );
// 			}, false );
// 		} );
//
// 	}
//
// })( window );

function mouseout(obj) {
    var className = "hover";
    var _ecname = obj.className;
    if (_ecname.length == 0) return;
    if (_ecname == className) {
        obj.className = "";return;
    }
    if (_ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
        obj.className = _ecname.replace((new RegExp("(^|\\s)" + className + "(\\s|$)")), " ");
}
function hover(obj) {
    if (!obj) return;
    var className = "hover"
    var _ecname = obj.className;
    if (_ecname.length == 0) {
        obj.className = className;return;
    }
    if (_ecname == className || _ecname.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
        return;
    obj.className = _ecname + " " + className;
}
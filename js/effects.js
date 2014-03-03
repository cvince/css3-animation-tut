$.fn.wait = function( ms, callback ) {
    return this.each(function() {
        window.setTimeout((function( self ) {
            return function() {
                callback.call( self );
            }
        }( this )), ms );
    });
};


$(document).ready(function(){
    setTimeout(function(){
      $('body.ani').addClass('seq1').wait(1000, function(){$('#home .ani.vert-flyIn').addClass('seq1')});
    }, 100)
})

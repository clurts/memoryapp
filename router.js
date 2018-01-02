var router = (function(){

    function clear(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }

    return {
        show: function(element){
            element.style.display = 'flex';
        },
        hide: function(element){
            clear(element);
            element.style.display = 'none';
        }
    }
})(); 
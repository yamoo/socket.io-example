var socket = io.connect('http://martymac.local:3000'),
    onMove = function(e) {
        var touch = e.touches[0];

        socket.emit('put', {x: touch.pageX/window.innerWidth, y: touch.pageY/window.innerHeight});
        e.stopPropagation();
        e.preventDefault();
    },
    onClick = function(e) {
        socket.emit('add');
    };
    
document.addEventListener('touchmove', onMove);
document.addEventListener('touchstart', onClick);

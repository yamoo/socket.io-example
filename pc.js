var socket = io.connect('http://martymac.local:3000');

socket.on('get', function (data) {
    var clientX = data.x*window.innerWidth,
        clientY = data.y*window.innerHeight;

    mouseX = ( clientX - windowHalfX ) * 10;
    mouseY = ( clientY - windowHalfY ) * 10;
});

socket.on('make', function () {
    makeMesh();
});
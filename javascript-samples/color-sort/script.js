"use strict";
var size = 10;
var pieces; // = new Array();
var selected = null;
var isTouchDevice = 'ontouchstart' in document.documentElement;
var width = 1000;
var height = 450;

window.onload = function () {
    init();
};

function init() {

    pieces = new Pieces(size);
    pieces.swapAndUpdateCoors();
    pieces.drawAll();

    /*if (isTouchDevice) {
     window.ontouchmove = moveCallback;
     } else {
     window.onmousemove = moveCallback;
     }*/
}

// crée une div pour l'image
function createDiv(id, _class, posX, posY, width, height, r, g, b, listened) {
    var div = document.createElement('div');
    div.id = id;
    div.class = _class;
    div.style.display = 'block';
    div.style.zIndex = '0';
    div.style.position = 'absolute';
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.top = posY + 'px';
    div.style.left = posX + 'px';
    div.style.backgroundColor = 'rgb(' + (id * 20 + r) + ',' + (id * 20 + g) + ',' + (id * 20 + b) + ')';

    if (listened) {
        //addListeners(div);
        if (isTouchDevice) {
            div.addEventListener('touchstart', downCallback);
        } else {
            div.addEventListener('mousedown', downCallback);
        }
        div.style.zIndex = '2';
    } else {
        div.style.border = 'black solid 1px';
        div.style.backgroundColor = 'white';
    }

    return div;
}

/*function addListeners(div) {
 if (isTouchDevice) {
 div.addEventListener('touchstart', downCallback, false);
 div.addEventListener('touchend', upCallback, false);
 div.addEventListener('touchleave', upCallback, false);
 div.addEventListener('touchcancel', upCallback, false);
 } else {
 div.addEventListener('mousedown', downCallback, false);
 div.addEventListener('mouseup', upCallback, false);
 }
 }*/

/*function removeListeners(div) {
 if (isTouchDevice) {
 div.removeEventListener('touchstart', downCallback);
 div.removeEventListener('touchend', upCallback);
 div.removeEventListener('touchleave', upCallback);
 div.removeEventListener('touchcancel', upCallback);
 } else {
 div.removeEventListener('mousedown', downCallback);
 div.removeEventListener('mouseup', upCallback);
 }
 }*/

// handler quand on clique ou touche l'écran
function downCallback(e) {
    e.preventDefault();
    var value = e.currentTarget;
    if (!selected) {
        selected = value.id;
        value.style.zIndex = '3';
    }
    var piece = pieces.getPiece(parseInt(selected));
    if (isTouchDevice) {
        //piece.div.addEventListener('touchmove', moveCallback);
        window.addEventListener('touchmove', moveCallback);
        piece.div.addEventListener('touchend', upCallback);
        piece.div.addEventListener('touchleave', upCallback);
        piece.div.addEventListener('touchcancel', upCallback);
    } else {
        //piece.div.addEventListener('mousemove', moveCallback);
        window.addEventListener('mousemove', moveCallback);
        piece.div.addEventListener('mouseup', upCallback);
    }
    piece.updateCoors(getCoors(e));
    piece.drawPiece();
}

// handler quand on bouge la souris et qu'on bouge le doigt
function moveCallback(e) {
    var coors = getCoors(e);
    if (selected) {
        var piece = pieces.getPiece(parseInt(selected));
        piece.updateCoors(coors);
        piece.drawPiece();
    }
    var coor = "Coordinates: (" + coors[0] + "," + coors[1] + ")";
    document.getElementById("demo").innerHTML = coor;
}

// handler quand on arrête de cliquer ou on relève le doigt
function upCallback(e) {
    if (selected) {
        var piece = pieces.getPiece(parseInt(selected));
        piece.updateCoors(getCoors(e));
        piece.div.style.zIndex = '2';
        if (isTouchDevice) {
            //piece.div.removeEventListener('touchmove', moveCallback);
            window.removeEventListener('touchmove', moveCallback);
            piece.div.removeEventListener('touchend', upCallback);
            piece.div.removeEventListener('touchleave', upCallback);
            piece.div.removeEventListener('touchcancel', upCallback);
        } else {
            //piece.div.removeEventListener('mousemove', moveCallback);
            window.removeEventListener('mousemove', moveCallback);
            piece.div.removeEventListener('mouseup', upCallback);
        }

        pieces.checkPosition(piece);
        piece.drawPiece();

        if (pieces.solved === pieces.size) {
            pieces.drawAll();
            alert("Vous avez tout trouvé!");
            pieces.el.innerHTML = '';
            pieces = new Pieces(10);
            pieces.swapAndUpdateCoors();
            pieces.drawAll();
        }
    }
    selected = null;
}

function getCoors(e) {
    var coors = [];
    if (e.targetTouches && e.targetTouches.length) {
        var thisTouch = e.targetTouches[0];
        coors[0] = thisTouch.clientX;
        coors[1] = thisTouch.clientY;
    }
    else {
        coors[0] = e.clientX;
        coors[1] = e.clientY;
    }
    return coors;
}

// objet tableau qui contient les pièces
function Pieces(size) {
    this.el = document.getElementById('pieces');
    this.size = size;
    this.solved = 0;

    this.pieces = new Array();
    this.sol = new Array();
    
    var color = {
        r: Math.floor(Math.random()*100+20),
        g: Math.floor(Math.random()*100+20),
        b: Math.floor(Math.random()*100+20)
    };
    for (var i = 0; i < size; i++) {
        this.pieces[i] = new Piece(this.el, /*'cat.jpg',*/ i, 0, height / 3, 50, 50, true, color);
        this.sol[i] = new Piece(this.el, i + size, width / 2 - (size * 50) / 2 + 50 * i, height / 3 * 2, 50, 50, false, color);
    }

    //this.swapAndUpdateCoors();
    //this.drawAll();

// mélange le tableau et met à jour la position des pièces
    this.swapAndUpdateCoors = function () {
        var size = this.size * 2;
        while (size > 0) {
            var rand1 = Math.floor(this.pieces.length * Math.random());
            var rand2 = Math.floor(this.pieces.length * Math.random());
            var first = this.pieces[rand1];
            this.pieces[rand1] = this.pieces[rand2];
            this.pieces[rand2] = first;
            size--;
        }

        for (var i = 0; i < this.size; i++) {
            this.pieces[i].posX = width / 2 /*- (this.size * 50) / 2 */+ Math.floor(Math.random()*width/2-width/4);//this.pieces[i].width * i;
            this.pieces[i].posY = Math.floor(Math.random()*height/4+100);
        }
    };

    // dessine toutes les pièces
    this.drawAll = function () {
        for (var i = 0; i < this.size; i++) {
            this.pieces[i].drawPiece();
            this.sol[i].drawPiece();
        }
    };

    // retourne la pièce d'id id
    this.getPiece = function (id) {
        for (var i = 0; i < this.size; i++) {
            if (this.pieces[i].id === id) {
                return this.pieces[i];
            }
        }
    };
    // teste si la pièce est à sa place
    this.checkPosition = function (piece) {
        var sol = this.sol[piece.id];
        if (sol.posX - (piece.width / 3) <= piece.posX && piece.posX <= sol.posX + (piece.width / 3)
                && sol.posY - (piece.height / 3) <= piece.posY && piece.posY <= sol.posY + (piece.height / 3)) {
            piece.posX = sol.posX + 1;
            piece.posY = sol.posY + 1;
            //removeListeners(piece.div);
            if(isTouchDevice) {
                piece.div.removeEventListener('touchstart', downCallback);
            } else {
                piece.div.removeEventListener('mousedown', downCallback);
            }
            piece.div.style.zIndex = '1';
            this.solved++;
        }
    };
}

// objet pièce qui contient ses infos
function Piece(el, /*img,*/ id, posX, posY, widthP, heightP, listened, color) {
    this.posX = posX;
    this.posY = posY;
    this.width = widthP;
    this.height = heightP;
    /*this.img = new Image();
     this.img.src = img;*/
    this.id = id;
    // création du div qui contient la pièce
    this.div = createDiv(this.id, "piece", this.posX, this.posY, this.width, this.height, color.r, color.g, color.b, listened);
    el.appendChild(this.div);
    // dessine la pièce
    this.drawPiece = function () {
        //var el = document.getElementById(this.id.toString());
        this.div.style.left = this.posX - this.width / 2 + 'px';
        this.div.style.top = this.posY - this.height / 2 + 'px';
    };
    // met à jour ses coordonnées
    this.updateCoors = function (coors) {
        if (0 <= coors[0] && coors[0] < width) {
            this.posX = coors[0];
        }
        if (0 <= coors[1] && coors[1] < height) {
            this.posY = coors[1];
        }
    };
}

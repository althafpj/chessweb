function getChessBoard(id) {

  return Chessboard(id, {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
  });

}

function setUpPosition(posName){
switch(posName.toUpperCase()){
case "RUYLOPEZ": 
      var ruylopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
      Chessboard('board1', ruylopez);
      break;
default:
      Chessboard('board1','start');
      break;

}

}

function getChessBoardStartPos(id) {
  return Chessboard('board1', 'start');
}


function startApp() {
  getChessBoardStartPos('board1');

}
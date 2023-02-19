class Node{
    constructor(row,col,distance, previous){
        this.row = row;
        this.col = col;
        this.distance = distance;
        this.previous = previous;
    }
}
const directions = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];

function knightMoves(startLoc, endLoc){
    const [xCord, yCord] = startLoc;
    const [xEnd, yEnd] = endLoc;
    const board = buildBoard(8);
    const boardSize = Math.sqrt(board.length);

    if((xCord < 0 || xCord > boardSize || xCord === undefined) || (yCord < 0 || yCord > boardSize || yCord === undefined) ||
    (xEnd < 0 || xEnd > boardSize || xEnd === undefined) || (yEnd < 0 || yEnd > boardSize || yEnd === undefined)){
        console.log("Please choose coordinates that work.");
        return;
    }
    let queue = [];
    let startNode = new Node(xCord, yCord, 0);
    queue.push(startNode);
    let visited = {};
    visited[startLoc] = true;

    while(queue.length > 0){
        let current = queue.shift();
        if((current.row === xEnd) && (current.col === yEnd)){
            console.log(`You made it in ${current.distance} moves! Here's your path:`); 
            let path = [];
            let node = current;
            while(node){
                path.push([node.row, node.col]);
                node = node.previous;
            }
            path.reverse();
            let moves = path.map(move => `[${move[0]},${move[1]}]`);
            console.log(moves.join('\n'));
            return;
        }

        let currentLoc = [current.row, current.col];
        let neighbors = getNeighbors(currentLoc);
        for(let neighbor of neighbors){
            //If neighbor hasn't been visited mark it as visited and add it to queue.
            if(!visited[neighbor]){
                visited[neighbor] = true;
                let [neighborX, neighborY] = neighbor;
                let newNode = new Node(neighborX, neighborY, current.distance + 1, current);
                queue.push(newNode);
            }
        }
    }
    
}

function buildBoard(n){
    let board = [];
    for(let j = 0; j < n; j++){
        for(let i=0; i < n; i++){
            board.push([i,j]);
        }
    }
    return board;
}

function getNeighbors(startLoc){  
    let [xPos, yPos] = startLoc;
    const board = buildBoard(8);
    const boardSize = Math.sqrt(board.length);
    let holder = [];
    for(let i = 0; i< directions.length; i++){
        const [xMovement, yMovement] = directions[i];
        let neighbor = [xPos + xMovement, yPos + yMovement];
        let [newX, newY] = neighbor;
        if((newX >= 0 && newX < boardSize) && (newY >= 0 && newY < boardSize)){
            holder.push(neighbor);
        }  
    }
    return holder;
}

knightMoves([3,3],[4,3]);

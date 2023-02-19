# Knight-Travails
For this Odin Project Assignemnt my task was to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

I was stuck on where to begin, but after thinking through I realized a BFS was going to be the optimal way to solve it.
Using a class to create a Node for every possible movement then using a BFS it would give the minium amount of moves.
Then with a little extra work was able to print out each move used by going through the nodes from the bottom up and printing them out.
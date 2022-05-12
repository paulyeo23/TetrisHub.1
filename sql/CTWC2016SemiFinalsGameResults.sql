SELECT * FROM events;
SELECT * FROM `game results`;
SELECT * FROM matches;
SELECT * FROM playerdetails;
SELECT * FROM streams;
SELECT * FROM users;
SELECT * FROM QualifyingScores;

INSERT INTO `game results`(MatchID,Round,Player1ID,Player1Score,Player2ID,Player2Score,WinnerID,LoserID)
VALUES
((SELECT ID FROM Matches WHERE id = 154 ),1,(SELECT Player1ID FROM Matches WHERE ID=154),552959,(SELECT Player2ID FROM Matches WHERE ID=154),536936,(SELECT ID FROM playerdetails WHERE ID = 1),(SELECT ID FROM playerdetails WHERE ID = 33)),
((SELECT ID FROM Matches WHERE id = 154 ),2,(SELECT Player1ID FROM Matches WHERE ID=154),468811,(SELECT Player2ID FROM Matches WHERE ID=154),574086,(SELECT ID FROM playerdetails WHERE ID = 1),(SELECT ID FROM playerdetails WHERE ID = 33)),
((SELECT ID FROM Matches WHERE id = 153 ),1,(SELECT Player1ID FROM Matches WHERE ID=153),248909,(SELECT Player2ID FROM Matches WHERE ID=153),249621,(SELECT ID FROM playerdetails WHERE ID = 3),(SELECT ID FROM playerdetails WHERE ID = 2)),
((SELECT ID FROM Matches WHERE id = 153 ),2,(SELECT Player1ID FROM Matches WHERE ID=153),193818,(SELECT Player2ID FROM Matches WHERE ID=153),186926,(SELECT ID FROM playerdetails WHERE ID = 2),(SELECT ID FROM playerdetails WHERE ID = 3)),
((SELECT ID FROM Matches WHERE id = 153 ),3,(SELECT Player1ID FROM Matches WHERE ID=153),694212,(SELECT Player2ID FROM Matches WHERE ID=153),678584,(SELECT ID FROM playerdetails WHERE ID = 2),(SELECT ID FROM playerdetails WHERE ID = 3));




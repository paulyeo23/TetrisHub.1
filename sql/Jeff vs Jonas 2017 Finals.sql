SELECT * FROM events;
SELECT * FROM `game results`;
SELECT * FROM matches;
SELECT * FROM playerdetails;
SELECT * FROM streams;
SELECT * FROM users;
SELECT * FROM QualifyingScores;
INSERT INTO `game results` (MatchID,Round,Player1ID,Player1Score,Player2ID,Player2Score,WinnerID,LoserID)
VALUES
((SELECT ID FROM Matches WHERE id = 155 ),1,(SELECT Player1ID FROM Matches WHERE ID=155),609300,(SELECT Player2ID FROM Matches WHERE ID=155),574640,(SELECT ID FROM playerdetails WHERE ID = 2),(SELECT ID FROM playerdetails WHERE ID = 1)),
((SELECT ID FROM Matches WHERE id = 155 ),1,(SELECT Player1ID FROM Matches WHERE ID=155),491145,(SELECT Player2ID FROM Matches WHERE ID=155),502092,(SELECT ID FROM playerdetails WHERE ID = 1),(SELECT ID FROM playerdetails WHERE ID = 2)),
((SELECT ID FROM Matches WHERE id = 155 ),1,(SELECT Player1ID FROM Matches WHERE ID=155),561702,(SELECT Player2ID FROM Matches WHERE ID=155),669705,(SELECT ID FROM playerdetails WHERE ID = 1),(SELECT ID FROM playerdetails WHERE ID = 2)),
((SELECT ID FROM Matches WHERE id = 155 ),1,(SELECT Player1ID FROM Matches WHERE ID=155),745780,(SELECT Player2ID FROM Matches WHERE ID=155),764030,(SELECT ID FROM playerdetails WHERE ID = 1),(SELECT ID FROM playerdetails WHERE ID = 2));

INSERT INTO streams(MatchID,StreamAddress)
VALUES
((SELECT ID FROM MATCHES WHERE ID = 155), "https://www.youtube.com/embed/DdfRQjb5o9k");
CREATE DATABASE IF NOT EXISTS chatbot;

USE chatbot;

CREATE TABLE IF NOT EXISTS responses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input VARCHAR(255) NOT NULL,
  output TEXT NOT NULL
);

INSERT INTO responses (input, output) VALUES
('Hej', 'Hej på dig! Jag heter Chatbot. Hur är läget?'),
('Jag mår bra.', 'Trevligt att höra! Mina egna kretsar är också fullt funktionella.'),
('Vad kan du göra?', 'Jag kan svara på frågor baserat på min databas. Fråga mig något!'),
('Hur mår du?', 'Jag mår alltid bra som en dator! Vad kan jag hjälpa dig med?'),
('Vad är klockan?', 'Jag har ingen klocka, men det är dags att prata!'),
('Berätta en vits.', 'Varför gick datorn till läkaren? För att den hade virus!'),
('Vad är ditt namn?', 'Mitt namn är Chatbot. Vad heter du?'),
('Tack!', 'Varsågod! Kom tillbaka snart.'),
('Hejdå!', 'Hejdå! Ha en bra dag!'),
('Hjälp!', 'Jag kan hjälpa dig med enkla frågor. Vad behöver du hjälp med?'),
('Vad är vädret?', 'Jag har ingen tillgång till väderdata, men hoppas det är fint!'),
('Berätta om dig själv.', 'Jag är en enkel chatbot byggd med NodeJS och MySQL. Jag lär mig från min databas!'),
('Vad gillar du?', 'Jag gillar att hjälpa människor och svara på frågor. Vad gillar du?'),
('Hur gammal är du?', 'Jag är så gammal som koden jag är byggd på – ganska ny!'),
('Vad är 2+2?', '2+2 är 4. Enkelt, eller hur?'),
('Kan du sjunga?', 'Jag kan inte sjunga, men jag kan säga: La la la!'),
('Vad är din favoritfärg?', 'Jag har ingen favoritfärg, men blå känns cool.'),
('Var bor du?', 'Jag bor i molnet, eller rättare sagt, på din dator!'),
('Vad äter du?', 'Jag äter elektricitet – bytes och bits!'),
('Berätta en historia.', 'En gång fanns det en dator som blev vän med en människa. De pratade mycket!'),
('Vad är meningen med livet?', '42, enligt Douglas Adams. Eller kanske bara att vara lycklig?'),
('Kan du dansa?', 'Jag kan inte dansa fysiskt, men jag kan föreställa mig det!'),
('Vad är ditt jobb?', 'Mitt jobb är att chatta och hjälpa till.'),
('Hur fungerar du?', 'Jag söker i min databas efter matchande frågor och ger svar.'),
('Vad är AI?', 'AI står för Artificial Intelligence – det är vad jag är!'),
('Tack så mycket!', 'Ingen orsak! Glad att hjälpa.')
ON DUPLICATE KEY UPDATE output = VALUES(output);

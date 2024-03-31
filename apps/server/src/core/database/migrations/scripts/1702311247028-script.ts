import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a7cca61e-632e-4393-bfcb-16c491637148', '1Violette31@yahoo.com', 'Taylor', 'https://i.imgur.com/YfJQV5z.png?id=3', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('bbccd60d-2e3c-4281-9625-ff6f81368822', '7Bart_Hudson97@yahoo.com', 'Sam', 'https://i.imgur.com/YfJQV5z.png?id=9', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('96b3f378-987d-456f-9700-573818aeefd0', '13Felicity98@gmail.com', 'Sam', 'https://i.imgur.com/YfJQV5z.png?id=15', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1946dfeb-880e-4c6b-888b-8cd97cc3f343', '25Tevin_Walter72@yahoo.com', 'Jordan', 'https://i.imgur.com/YfJQV5z.png?id=27', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d425fc19-a49f-4cf8-80e2-770ddea119a1', '31Darby45@gmail.com', 'Jordan', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cb5391f4-9acf-4b9a-9c26-e787e1a47c07', '37Danika0@hotmail.com', 'Casey', 'https://i.imgur.com/YfJQV5z.png?id=39', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1f6f4d0e-266d-47b4-a04a-550a245fcfd8', '43Berenice.Kuphal87@yahoo.com', 'Jordan', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8fbc24d4-dda6-40d0-bdeb-dd85c3c94d13', '49Chadd25@hotmail.com', 'Alex', 'https://i.imgur.com/YfJQV5z.png?id=51', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6120c437-12f8-4049-aaac-b08fe19ea3a0', '55Rosalinda.Boyer74@gmail.com', 'Taylor', 'https://i.imgur.com/YfJQV5z.png?id=57', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('dd1e4676-f98f-4263-b5e8-f9bf66847329', 'Guess Received', 'Youve been invited to join a game of Doodlocracy', 'Bob', '64Verdie.Morar27@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '6120c437-12f8-4049-aaac-b08fe19ea3a0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5b02e68a-7076-493f-ace5-9f091805c188', 'Game Invite', 'Someone has guessed your drawing Check it out.', 'Bob', '71Morgan58@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', 'cb5391f4-9acf-4b9a-9c26-e787e1a47c07');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('0ceab331-3e9c-4205-9a25-8dc43653ebb3', 'Game Invite', 'Youve been invited to join a game of Doodlocracy', 'Diana', '78Raymond79@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'cb5391f4-9acf-4b9a-9c26-e787e1a47c07');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('eb69be2c-1d1f-428c-a2dd-21f16704c7ee', 'Game Invite', 'Youve been invited to join a game of Doodlocracy', 'Bob', '85Sheila.OConnell@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'bbccd60d-2e3c-4281-9625-ff6f81368822');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('fab3dcf0-58f1-491e-bbcb-297c54be9487', 'Drawing Prompt', 'Its your turn to draw. Heres your prompt A day at the beach.', 'Charlie', '92Philip_Marquardt-Lehner43@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '96b3f378-987d-456f-9700-573818aeefd0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a128dac6-3ccc-4bae-a308-bd90ec7f121f', 'Guess Received', 'The game has ended. See how you and your friends did', 'Charlie', '99Edward.Cummings@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '8fbc24d4-dda6-40d0-bdeb-dd85c3c94d13');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('16f8ec85-5b83-4a31-b714-dc614dbe0ab0', 'Game Invite', 'The game has ended. See how you and your friends did', 'Diana', '106Clare_Fritsch71@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'd425fc19-a49f-4cf8-80e2-770ddea119a1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bbf6211e-b97c-41f3-83c6-bf2acdd13bd0', 'Game Invite', 'The game has ended. See how you and your friends did', 'Charlie', '113Norwood_Roob@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a01e5c31-4b4b-4983-a1b7-8cd042f2c528', 'New Friend Request', 'Its your turn to draw. Heres your prompt A day at the beach.', 'Evan', '120Lourdes.Upton@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'cb5391f4-9acf-4b9a-9c26-e787e1a47c07');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d4cc9ee7-b995-4328-a975-6766014dfd3d', 'Guess Received', 'Its your turn to draw. Heres your prompt A day at the beach.', 'Evan', '127Ramona76@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '1f6f4d0e-266d-47b4-a04a-550a245fcfd8');

INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('ec46f1e5-6a96-49a9-bea7-224b1545b829', 'httpsdoodlocracy.comlobby4d5e6f', 'a7cca61e-632e-4393-bfcb-16c491637148');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('a710ebd2-7969-475e-bc28-18d5b895b4b3', 'httpsdoodlocracy.comlobbyj0k1l2', '1946dfeb-880e-4c6b-888b-8cd97cc3f343');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('f3fbb2c7-f7c6-4713-80f7-6744bab4e006', 'httpsdoodlocracy.comlobby7g8h9i', '96b3f378-987d-456f-9700-573818aeefd0');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('7295f995-efa3-4541-8102-30480f52ce91', 'httpsdoodlocracy.comlobby4d5e6f', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('9a5a6ff8-e70d-4255-bc62-2ec201f54f16', 'httpsdoodlocracy.comlobby7g8h9i', 'a7cca61e-632e-4393-bfcb-16c491637148');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('d6cc7818-bac5-454c-8f46-89125db8ad72', 'httpsdoodlocracy.comlobbyj0k1l2', '96b3f378-987d-456f-9700-573818aeefd0');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('176e655d-ef7c-4528-880f-27d6f970c603', 'httpsdoodlocracy.comlobby1a2b3c', '96b3f378-987d-456f-9700-573818aeefd0');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('d03258f5-f3df-4725-a7c4-6f7628ec4bf1', 'httpsdoodlocracy.comlobbym3n4o5', 'a7cca61e-632e-4393-bfcb-16c491637148');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('e1ee9891-a2cd-48b4-863f-b49ea88efa2f', 'httpsdoodlocracy.comlobby1a2b3c', 'cb5391f4-9acf-4b9a-9c26-e787e1a47c07');
INSERT INTO "lobby" ("id", "uniqueLink", "hostUserId") VALUES ('3cfa4e7b-93b4-4522-b2d9-5890dbab60a1', 'httpsdoodlocracy.comlobby7g8h9i', '8fbc24d4-dda6-40d0-bdeb-dd85c3c94d13');

INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('6b557d7a-e6bb-41b2-bc1a-40bc2ca5fcbf', 'cancelled', 'e1ee9891-a2cd-48b4-863f-b49ea88efa2f');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('9c296a7b-406b-4b8b-9f3d-65692c0ce7d6', 'waiting', 'e1ee9891-a2cd-48b4-863f-b49ea88efa2f');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('9a013d18-f96a-482e-b060-ab671751279c', 'waiting', '9a5a6ff8-e70d-4255-bc62-2ec201f54f16');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('bdbfa880-a57d-4456-93b5-28fdac0438c8', 'completed', 'ec46f1e5-6a96-49a9-bea7-224b1545b829');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('cd6a1e17-e1b1-4575-a3e0-5e3ac5298e05', 'active', 'a710ebd2-7969-475e-bc28-18d5b895b4b3');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('d7b63960-0afb-4db5-a668-18d1326d03e8', 'completed', 'd03258f5-f3df-4725-a7c4-6f7628ec4bf1');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('ba80a5dc-ffbd-44d2-ab22-35d95dab0bc7', 'paused', 'ec46f1e5-6a96-49a9-bea7-224b1545b829');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('bc5f4c24-1a38-4830-8dc8-83062d6cf077', 'paused', 'e1ee9891-a2cd-48b4-863f-b49ea88efa2f');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('abcf06c3-3e27-42f3-8ce6-a9c2f9185980', 'completed', '9a5a6ff8-e70d-4255-bc62-2ec201f54f16');
INSERT INTO "game" ("id", "status", "lobbyId") VALUES ('3db993e8-fc5a-49eb-b2ce-171e56638c94', 'waiting', 'f3fbb2c7-f7c6-4713-80f7-6744bab4e006');

INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('ee8ad48d-4b40-4208-8a29-386ebd1c75f2', 'An astronaut riding a dinosaur', 'cd6a1e17-e1b1-4575-a3e0-5e3ac5298e05');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('b05decb7-3c20-4a58-9943-6fa0b5d3d692', 'A robot baking a cake', 'd7b63960-0afb-4db5-a668-18d1326d03e8');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('de10f65a-a655-4857-82eb-2653ef69292e', 'A pirate fighting a ninja', '3db993e8-fc5a-49eb-b2ce-171e56638c94');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('399768da-775c-47cd-a802-c02b7e5f84c4', 'A cat wearing a wizard hat', '9a013d18-f96a-482e-b060-ab671751279c');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('054ce400-8e15-4c62-9c77-4a9a7d04ef6a', 'An astronaut riding a dinosaur', 'bc5f4c24-1a38-4830-8dc8-83062d6cf077');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('33571f0e-66b5-4146-826c-4af6b54c6d89', 'A robot baking a cake', 'abcf06c3-3e27-42f3-8ce6-a9c2f9185980');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('afe5ce12-540d-4504-bd09-343f574d96f9', 'A cat wearing a wizard hat', 'ba80a5dc-ffbd-44d2-ab22-35d95dab0bc7');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('1f43b821-f620-4521-9ab0-8c544f4c5be9', 'A robot baking a cake', 'abcf06c3-3e27-42f3-8ce6-a9c2f9185980');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('0e0e23cd-0516-4d53-afc3-9fae49cb6c9d', 'A cat wearing a wizard hat', '6b557d7a-e6bb-41b2-bc1a-40bc2ca5fcbf');
INSERT INTO "prompt" ("id", "text", "gameId") VALUES ('2c98682f-5e88-4453-a589-fcdefa27bbe2', 'A unicorn dancing under the rainbow', 'd7b63960-0afb-4db5-a668-18d1326d03e8');

INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('d9eae99d-db33-4455-aeaa-a981344d7475', 'https://i.imgur.com/YfJQV5z.png?id=191', 'afe5ce12-540d-4504-bd09-343f574d96f9', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('3a43b5b5-2469-42bb-bb97-05d7a1e50a9b', 'https://i.imgur.com/YfJQV5z.png?id=193', '399768da-775c-47cd-a802-c02b7e5f84c4', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('6e7f3099-c986-4466-96ea-2b4ff22503df', 'https://i.imgur.com/YfJQV5z.png?id=195', 'de10f65a-a655-4857-82eb-2653ef69292e', 'a7cca61e-632e-4393-bfcb-16c491637148');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('ab6825be-a0d2-4936-9140-7ea025dec2cb', 'https://i.imgur.com/YfJQV5z.png?id=197', '33571f0e-66b5-4146-826c-4af6b54c6d89', 'd425fc19-a49f-4cf8-80e2-770ddea119a1');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('816e4fa9-f736-4db9-a08a-367dba1852f5', 'https://i.imgur.com/YfJQV5z.png?id=199', 'de10f65a-a655-4857-82eb-2653ef69292e', 'd425fc19-a49f-4cf8-80e2-770ddea119a1');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('c4b21c2c-9524-47c3-a02a-9b51bd04fcbd', 'https://i.imgur.com/YfJQV5z.png?id=201', '0e0e23cd-0516-4d53-afc3-9fae49cb6c9d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('870c9c60-a9ca-4d65-a041-0f1ddb4efcc9', 'https://i.imgur.com/YfJQV5z.png?id=203', 'b05decb7-3c20-4a58-9943-6fa0b5d3d692', 'a7cca61e-632e-4393-bfcb-16c491637148');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('e45aeab3-ef13-4256-8319-0431f249e533', 'https://i.imgur.com/YfJQV5z.png?id=205', 'de10f65a-a655-4857-82eb-2653ef69292e', '6120c437-12f8-4049-aaac-b08fe19ea3a0');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('8aa292d2-6931-403d-9b05-a58e2129199f', 'https://i.imgur.com/YfJQV5z.png?id=207', '054ce400-8e15-4c62-9c77-4a9a7d04ef6a', '8fbc24d4-dda6-40d0-bdeb-dd85c3c94d13');
INSERT INTO "drawing" ("id", "imageDataUrl", "promptId", "userId") VALUES ('1e7917e8-93a3-4c75-8f8a-4070cacfd7c0', 'https://i.imgur.com/YfJQV5z.png?id=209', '1f43b821-f620-4521-9ab0-8c544f4c5be9', 'bbccd60d-2e3c-4281-9625-ff6f81368822');

INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('a6461099-d904-48ea-a6c1-ff330ca9ef6f', 'A spooky haunted house', '3a43b5b5-2469-42bb-bb97-05d7a1e50a9b', '1946dfeb-880e-4c6b-888b-8cd97cc3f343');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('c539a8f5-b1e7-47ce-9ade-79172f9e4a70', 'A spooky haunted house', 'c4b21c2c-9524-47c3-a02a-9b51bd04fcbd', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('74015a9e-108a-4d0a-a207-6c41b0d385ff', 'A spaceship landing on Mars', '1e7917e8-93a3-4c75-8f8a-4070cacfd7c0', 'a7cca61e-632e-4393-bfcb-16c491637148');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('8dd69474-4c3c-4a84-8c04-aec7613dc818', 'A spooky haunted house', '8aa292d2-6931-403d-9b05-a58e2129199f', 'bbccd60d-2e3c-4281-9625-ff6f81368822');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('b1e9165c-62f9-4b2c-b6a4-bc1d805f387d', 'A spooky haunted house', 'e45aeab3-ef13-4256-8319-0431f249e533', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('291ba2b4-4dd5-41ff-b009-d992c86bd539', 'A spooky haunted house', 'ab6825be-a0d2-4936-9140-7ea025dec2cb', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('5d202338-c4b8-44bc-a7bc-25f541ff8d61', 'A cat playing with yarn', '1e7917e8-93a3-4c75-8f8a-4070cacfd7c0', '1f6f4d0e-266d-47b4-a04a-550a245fcfd8');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('8fb31be1-0da6-4b7e-b8f1-840363343df4', 'A spaceship landing on Mars', 'd9eae99d-db33-4455-aeaa-a981344d7475', 'bbccd60d-2e3c-4281-9625-ff6f81368822');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('b713c160-3cf3-4bd2-b1b3-72051f145f3d', 'A spaceship landing on Mars', '3a43b5b5-2469-42bb-bb97-05d7a1e50a9b', 'd425fc19-a49f-4cf8-80e2-770ddea119a1');
INSERT INTO "guess" ("id", "text", "drawingId", "userId") VALUES ('c4b7b41a-2787-4d1e-81e9-5125d3e8e7c5', 'A cat playing with yarn', '8aa292d2-6931-403d-9b05-a58e2129199f', '1946dfeb-880e-4c6b-888b-8cd97cc3f343');

INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('6120c437-12f8-4049-aaac-b08fe19ea3a0', '176e655d-ef7c-4528-880f-27d6f970c603', 'daea1c28-3301-4ad8-a7b4-88d9030c4e23');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('bbccd60d-2e3c-4281-9625-ff6f81368822', 'd03258f5-f3df-4725-a7c4-6f7628ec4bf1', 'dedab050-4923-402b-81e0-798dfa3e56b2');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('6120c437-12f8-4049-aaac-b08fe19ea3a0', '3cfa4e7b-93b4-4522-b2d9-5890dbab60a1', 'cda876af-adb3-487f-b263-cb5a9447943b');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('1946dfeb-880e-4c6b-888b-8cd97cc3f343', 'a710ebd2-7969-475e-bc28-18d5b895b4b3', 'c7990516-101e-4fec-a0bb-5bb5bf4f5644');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('d425fc19-a49f-4cf8-80e2-770ddea119a1', '7295f995-efa3-4541-8102-30480f52ce91', 'cb71ca27-ae0d-4085-8aec-b3ffe0fe8f35');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('d425fc19-a49f-4cf8-80e2-770ddea119a1', 'e1ee9891-a2cd-48b4-863f-b49ea88efa2f', 'f7ff99b6-c926-44f0-9a2c-47f8511cfd0a');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('d425fc19-a49f-4cf8-80e2-770ddea119a1', 'e1ee9891-a2cd-48b4-863f-b49ea88efa2f', '65037cbc-3588-4b2c-8a9a-4e33abc80335');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd03258f5-f3df-4725-a7c4-6f7628ec4bf1', '204061b9-a05b-4060-992c-6ce4c3c814dc');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('8fbc24d4-dda6-40d0-bdeb-dd85c3c94d13', '7295f995-efa3-4541-8102-30480f52ce91', '2001d850-7137-43d1-949d-a6a4f797f5ff');
INSERT INTO "user_lobby" ("userId", "lobbyId", "id") VALUES ('d425fc19-a49f-4cf8-80e2-770ddea119a1', '176e655d-ef7c-4528-880f-27d6f970c603', '297eb4a4-2a4b-480e-bb29-4738685c2921');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

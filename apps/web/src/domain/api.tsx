import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { LobbyApi } from './lobby/lobby.api'

import { GameApi } from './game/game.api'

import { PromptApi } from './prompt/prompt.api'

import { DrawingApi } from './drawing/drawing.api'

import { GuessApi } from './guess/guess.api'

import { UserLobbyApi } from './userLobby/userLobby.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Lobby extends LobbyApi {}

  export class Game extends GameApi {}

  export class Prompt extends PromptApi {}

  export class Drawing extends DrawingApi {}

  export class Guess extends GuessApi {}

  export class UserLobby extends UserLobbyApi {}
}

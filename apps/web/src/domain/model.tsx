import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Lobby as LobbyModel } from './lobby/lobby.model'

import { Game as GameModel } from './game/game.model'

import { Prompt as PromptModel } from './prompt/prompt.model'

import { Drawing as DrawingModel } from './drawing/drawing.model'

import { Guess as GuessModel } from './guess/guess.model'

import { UserLobby as UserLobbyModel } from './userLobby/userLobby.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Lobby extends LobbyModel {}

  export class Game extends GameModel {}

  export class Prompt extends PromptModel {}

  export class Drawing extends DrawingModel {}

  export class Guess extends GuessModel {}

  export class UserLobby extends UserLobbyModel {}
}

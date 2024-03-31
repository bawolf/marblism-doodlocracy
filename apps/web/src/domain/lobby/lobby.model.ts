import { User } from '../user'

import { Game } from '../game'

import { UserLobby } from '../userLobby'

export class Lobby {
  id: string

  uniqueLink?: string

  hostUserId: string

  hostUser?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  games?: Game[]

  userLobbys?: UserLobby[]
}

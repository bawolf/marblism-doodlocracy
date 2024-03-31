import { User } from '../user'

import { Lobby } from '../lobby'

export class UserLobby {
  userId: string

  user?: User

  lobbyId: string

  lobby?: Lobby

  id: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}

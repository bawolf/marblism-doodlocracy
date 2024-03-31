import { Lobby } from '../lobby'

import { Prompt } from '../prompt'

export class Game {
  id: string

  status: string

  lobbyId: string

  lobby?: Lobby

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  prompts?: Prompt[]
}

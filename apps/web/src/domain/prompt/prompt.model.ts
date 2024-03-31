import { Game } from '../game'

import { Drawing } from '../drawing'

export class Prompt {
  id: string

  text: string

  gameId: string

  game?: Game

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  drawings?: Drawing[]
}

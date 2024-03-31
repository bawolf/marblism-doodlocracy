import { Drawing } from '../drawing'

import { User } from '../user'

export class Guess {
  id: string

  text: string

  drawingId: string

  drawing?: Drawing

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}

import { Prompt } from '../prompt'

import { User } from '../user'

import { Guess } from '../guess'

export class Drawing {
  id: string

  imageDataUrl?: string

  promptId: string

  prompt?: Prompt

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  guesss?: Guess[]
}

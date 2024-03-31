import { Notification } from '../notification'

import { Lobby } from '../lobby'

import { Drawing } from '../drawing'

import { Guess } from '../guess'

import { UserLobby } from '../userLobby'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  lobbysAsHostUser?: Lobby[]

  drawings?: Drawing[]

  guesss?: Guess[]

  userLobbys?: UserLobby[]
}

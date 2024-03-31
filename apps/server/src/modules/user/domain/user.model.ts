import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Notification } from '../../../modules/notification/domain'

import { Lobby } from '../../../modules/lobby/domain'

import { Drawing } from '../../../modules/drawing/domain'

import { Guess } from '../../../modules/guess/domain'

import { UserLobby } from '../../../modules/userLobby/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ select: false, nullable: true })
  password: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @OneToMany(() => Lobby, child => child.hostUser)
  lobbysAsHostUser?: Lobby[]

  @OneToMany(() => Drawing, child => child.user)
  drawings?: Drawing[]

  @OneToMany(() => Guess, child => child.user)
  guesss?: Guess[]

  @OneToMany(() => UserLobby, child => child.user)
  userLobbys?: UserLobby[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

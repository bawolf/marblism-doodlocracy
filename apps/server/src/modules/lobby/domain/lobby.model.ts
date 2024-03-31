import { ColumnNumeric } from '@server/core/database'
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

import { User } from '../../../modules/user/domain'

import { Game } from '../../../modules/game/domain'

import { UserLobby } from '../../../modules/userLobby/domain'

@Entity()
export class Lobby {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  uniqueLink?: string

  @Column({})
  hostUserId: string

  @ManyToOne(() => User, parent => parent.lobbysAsHostUser)
  @JoinColumn({ name: 'hostUserId' })
  hostUser?: User

  @OneToMany(() => Game, child => child.lobby)
  games?: Game[]

  @OneToMany(() => UserLobby, child => child.lobby)
  userLobbys?: UserLobby[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

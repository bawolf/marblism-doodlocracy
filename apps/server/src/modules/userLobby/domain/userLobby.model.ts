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

import { Lobby } from '../../../modules/lobby/domain'

@Entity()
export class UserLobby {
  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.userLobbys)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  lobbyId: string

  @ManyToOne(() => Lobby, parent => parent.userLobbys)
  @JoinColumn({ name: 'lobbyId' })
  lobby?: Lobby

  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

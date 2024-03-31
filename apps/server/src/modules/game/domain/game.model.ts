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

import { Lobby } from '../../../modules/lobby/domain'

import { Prompt } from '../../../modules/prompt/domain'

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  status: string

  @Column({})
  lobbyId: string

  @ManyToOne(() => Lobby, parent => parent.games)
  @JoinColumn({ name: 'lobbyId' })
  lobby?: Lobby

  @OneToMany(() => Prompt, child => child.game)
  prompts?: Prompt[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

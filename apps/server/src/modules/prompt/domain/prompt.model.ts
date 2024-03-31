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

import { Game } from '../../../modules/game/domain'

import { Drawing } from '../../../modules/drawing/domain'

@Entity()
export class Prompt {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  text: string

  @Column({})
  gameId: string

  @ManyToOne(() => Game, parent => parent.prompts)
  @JoinColumn({ name: 'gameId' })
  game?: Game

  @OneToMany(() => Drawing, child => child.prompt)
  drawings?: Drawing[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

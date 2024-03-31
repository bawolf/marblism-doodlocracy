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

import { Drawing } from '../../../modules/drawing/domain'

import { User } from '../../../modules/user/domain'

@Entity()
export class Guess {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  text: string

  @Column({})
  drawingId: string

  @ManyToOne(() => Drawing, parent => parent.guesss)
  @JoinColumn({ name: 'drawingId' })
  drawing?: Drawing

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.guesss)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

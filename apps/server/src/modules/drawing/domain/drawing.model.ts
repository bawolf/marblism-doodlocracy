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

import { Prompt } from '../../../modules/prompt/domain'

import { User } from '../../../modules/user/domain'

import { Guess } from '../../../modules/guess/domain'

@Entity()
export class Drawing {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  imageDataUrl?: string

  @Column({})
  promptId: string

  @ManyToOne(() => Prompt, parent => parent.drawings)
  @JoinColumn({ name: 'promptId' })
  prompt?: Prompt

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.drawings)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Guess, child => child.drawing)
  guesss?: Guess[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { GuessDomainFacade } from './guess.domain.facade'
import { Guess } from './guess.model'

@Module({
  imports: [TypeOrmModule.forFeature([Guess]), DatabaseHelperModule],
  providers: [GuessDomainFacade, GuessDomainFacade],
  exports: [GuessDomainFacade],
})
export class GuessDomainModule {}

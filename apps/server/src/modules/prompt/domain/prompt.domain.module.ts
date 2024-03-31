import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { PromptDomainFacade } from './prompt.domain.facade'
import { Prompt } from './prompt.model'

@Module({
  imports: [TypeOrmModule.forFeature([Prompt]), DatabaseHelperModule],
  providers: [PromptDomainFacade, PromptDomainFacade],
  exports: [PromptDomainFacade],
})
export class PromptDomainModule {}

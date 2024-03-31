import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PromptDomainModule } from '../domain'
import { PromptController } from './prompt.controller'

import { GameDomainModule } from '../../../modules/game/domain'

import { PromptByGameController } from './promptByGame.controller'

@Module({
  imports: [AuthenticationDomainModule, PromptDomainModule, GameDomainModule],
  controllers: [PromptController, PromptByGameController],
  providers: [],
})
export class PromptApplicationModule {}

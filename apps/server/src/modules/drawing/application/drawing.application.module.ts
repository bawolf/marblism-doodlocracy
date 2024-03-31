import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { DrawingDomainModule } from '../domain'
import { DrawingController } from './drawing.controller'

import { PromptDomainModule } from '../../../modules/prompt/domain'

import { DrawingByPromptController } from './drawingByPrompt.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { DrawingByUserController } from './drawingByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    DrawingDomainModule,

    PromptDomainModule,

    UserDomainModule,
  ],
  controllers: [
    DrawingController,

    DrawingByPromptController,

    DrawingByUserController,
  ],
  providers: [],
})
export class DrawingApplicationModule {}

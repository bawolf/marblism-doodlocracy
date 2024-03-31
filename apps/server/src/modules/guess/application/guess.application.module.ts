import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GuessDomainModule } from '../domain'
import { GuessController } from './guess.controller'

import { DrawingDomainModule } from '../../../modules/drawing/domain'

import { GuessByDrawingController } from './guessByDrawing.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { GuessByUserController } from './guessByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    GuessDomainModule,

    DrawingDomainModule,

    UserDomainModule,
  ],
  controllers: [
    GuessController,

    GuessByDrawingController,

    GuessByUserController,
  ],
  providers: [],
})
export class GuessApplicationModule {}

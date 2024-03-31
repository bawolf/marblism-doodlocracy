import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { LobbyApplicationModule } from './lobby/application'

import { GameApplicationModule } from './game/application'

import { PromptApplicationModule } from './prompt/application'

import { DrawingApplicationModule } from './drawing/application'

import { GuessApplicationModule } from './guess/application'

import { UserLobbyApplicationModule } from './userLobby/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    LobbyApplicationModule,

    GameApplicationModule,

    PromptApplicationModule,

    DrawingApplicationModule,

    GuessApplicationModule,

    UserLobbyApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}

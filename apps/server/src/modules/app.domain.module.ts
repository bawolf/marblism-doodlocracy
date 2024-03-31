import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { LobbyDomainModule } from './lobby/domain'

import { GameDomainModule } from './game/domain'

import { PromptDomainModule } from './prompt/domain'

import { DrawingDomainModule } from './drawing/domain'

import { GuessDomainModule } from './guess/domain'

import { UserLobbyDomainModule } from './userLobby/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    LobbyDomainModule,

    GameDomainModule,

    PromptDomainModule,

    DrawingDomainModule,

    GuessDomainModule,

    UserLobbyDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}

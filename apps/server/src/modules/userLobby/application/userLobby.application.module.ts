import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { UserLobbyDomainModule } from '../domain'
import { UserLobbyController } from './userLobby.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { UserLobbyByUserController } from './userLobbyByUser.controller'

import { LobbyDomainModule } from '../../../modules/lobby/domain'

import { UserLobbyByLobbyController } from './userLobbyByLobby.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    UserLobbyDomainModule,

    UserDomainModule,

    LobbyDomainModule,
  ],
  controllers: [
    UserLobbyController,

    UserLobbyByUserController,

    UserLobbyByLobbyController,
  ],
  providers: [],
})
export class UserLobbyApplicationModule {}

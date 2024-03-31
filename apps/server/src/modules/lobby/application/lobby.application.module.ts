import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { LobbyDomainModule } from '../domain'
import { LobbyController } from './lobby.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { LobbyByUserController } from './lobbyByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, LobbyDomainModule, UserDomainModule],
  controllers: [LobbyController, LobbyByUserController],
  providers: [],
})
export class LobbyApplicationModule {}

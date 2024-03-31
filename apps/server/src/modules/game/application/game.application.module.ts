import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GameDomainModule } from '../domain'
import { GameController } from './game.controller'

import { LobbyDomainModule } from '../../../modules/lobby/domain'

import { GameByLobbyController } from './gameByLobby.controller'

@Module({
  imports: [AuthenticationDomainModule, GameDomainModule, LobbyDomainModule],
  controllers: [GameController, GameByLobbyController],
  providers: [],
})
export class GameApplicationModule {}

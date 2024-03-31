import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { LobbyDomainFacade } from './lobby.domain.facade'
import { Lobby } from './lobby.model'

@Module({
  imports: [TypeOrmModule.forFeature([Lobby]), DatabaseHelperModule],
  providers: [LobbyDomainFacade, LobbyDomainFacade],
  exports: [LobbyDomainFacade],
})
export class LobbyDomainModule {}

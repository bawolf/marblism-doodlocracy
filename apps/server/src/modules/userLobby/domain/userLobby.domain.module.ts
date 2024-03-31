import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { UserLobbyDomainFacade } from './userLobby.domain.facade'
import { UserLobby } from './userLobby.model'

@Module({
  imports: [TypeOrmModule.forFeature([UserLobby]), DatabaseHelperModule],
  providers: [UserLobbyDomainFacade, UserLobbyDomainFacade],
  exports: [UserLobbyDomainFacade],
})
export class UserLobbyDomainModule {}

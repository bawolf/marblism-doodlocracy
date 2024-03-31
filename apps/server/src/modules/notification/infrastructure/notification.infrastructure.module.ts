import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationLobbySubscriber } from './subscribers/notification.lobby.subscriber'

import { NotificationGameSubscriber } from './subscribers/notification.game.subscriber'

import { NotificationPromptSubscriber } from './subscribers/notification.prompt.subscriber'

import { NotificationDrawingSubscriber } from './subscribers/notification.drawing.subscriber'

import { NotificationGuessSubscriber } from './subscribers/notification.guess.subscriber'

import { NotificationUserLobbySubscriber } from './subscribers/notification.userLobby.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationLobbySubscriber,

    NotificationGameSubscriber,

    NotificationPromptSubscriber,

    NotificationDrawingSubscriber,

    NotificationGuessSubscriber,

    NotificationUserLobbySubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}

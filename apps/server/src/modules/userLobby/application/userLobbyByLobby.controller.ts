import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserLobbyDomainFacade } from '@server/modules/userLobby/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserLobbyApplicationEvent } from './userLobby.application.event'
import { UserLobbyCreateDto } from './userLobby.dto'

import { LobbyDomainFacade } from '../../lobby/domain'

@Controller('/v1/lobbys')
export class UserLobbyByLobbyController {
  constructor(
    private lobbyDomainFacade: LobbyDomainFacade,

    private userLobbyDomainFacade: UserLobbyDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/lobby/:lobbyId/userLobbys')
  async findManyLobbyId(
    @Param('lobbyId') lobbyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.lobbyDomainFacade.findOneByIdOrFail(lobbyId)

    const items = await this.userLobbyDomainFacade.findManyByLobby(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/lobby/:lobbyId/userLobbys')
  async createByLobbyId(
    @Param('lobbyId') lobbyId: string,
    @Body() body: UserLobbyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, lobbyId }

    const item = await this.userLobbyDomainFacade.create(valuesUpdated)

    await this.eventService.emit<UserLobbyApplicationEvent.UserLobbyCreated.Payload>(
      UserLobbyApplicationEvent.UserLobbyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

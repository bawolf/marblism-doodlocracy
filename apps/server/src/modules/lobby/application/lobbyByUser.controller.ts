import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { LobbyDomainFacade } from '@server/modules/lobby/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { LobbyApplicationEvent } from './lobby.application.event'
import { LobbyCreateDto } from './lobby.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class LobbyByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private lobbyDomainFacade: LobbyDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/hostUser/:hostUserId/lobbys')
  async findManyHostUserId(
    @Param('hostUserId') hostUserId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(hostUserId)

    const items = await this.lobbyDomainFacade.findManyByHostUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/hostUser/:hostUserId/lobbys')
  async createByHostUserId(
    @Param('hostUserId') hostUserId: string,
    @Body() body: LobbyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, hostUserId }

    const item = await this.lobbyDomainFacade.create(valuesUpdated)

    await this.eventService.emit<LobbyApplicationEvent.LobbyCreated.Payload>(
      LobbyApplicationEvent.LobbyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

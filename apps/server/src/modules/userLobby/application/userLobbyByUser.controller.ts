import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UserLobbyDomainFacade } from '@server/modules/userLobby/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UserLobbyApplicationEvent } from './userLobby.application.event'
import { UserLobbyCreateDto } from './userLobby.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class UserLobbyByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private userLobbyDomainFacade: UserLobbyDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/userLobbys')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.userLobbyDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/userLobbys')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: UserLobbyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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

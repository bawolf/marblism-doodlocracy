import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  UserLobby,
  UserLobbyDomainFacade,
} from '@server/modules/userLobby/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { UserLobbyApplicationEvent } from './userLobby.application.event'
import { UserLobbyCreateDto, UserLobbyUpdateDto } from './userLobby.dto'

@Controller('/v1/userLobbys')
export class UserLobbyController {
  constructor(
    private eventService: EventService,
    private userLobbyDomainFacade: UserLobbyDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.userLobbyDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: UserLobbyCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.userLobbyDomainFacade.create(body)

    await this.eventService.emit<UserLobbyApplicationEvent.UserLobbyCreated.Payload>(
      UserLobbyApplicationEvent.UserLobbyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:userLobbyId')
  async findOne(
    @Param('userLobbyId') userLobbyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.userLobbyDomainFacade.findOneByIdOrFail(
      userLobbyId,
      queryOptions,
    )

    return item
  }

  @Patch('/:userLobbyId')
  async update(
    @Param('userLobbyId') userLobbyId: string,
    @Body() body: UserLobbyUpdateDto,
  ) {
    const item = await this.userLobbyDomainFacade.findOneByIdOrFail(userLobbyId)

    const itemUpdated = await this.userLobbyDomainFacade.update(
      item,
      body as Partial<UserLobby>,
    )
    return itemUpdated
  }

  @Delete('/:userLobbyId')
  async delete(@Param('userLobbyId') userLobbyId: string) {
    const item = await this.userLobbyDomainFacade.findOneByIdOrFail(userLobbyId)

    await this.userLobbyDomainFacade.delete(item)

    return item
  }
}

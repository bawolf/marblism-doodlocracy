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
import { Lobby, LobbyDomainFacade } from '@server/modules/lobby/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { LobbyApplicationEvent } from './lobby.application.event'
import { LobbyCreateDto, LobbyUpdateDto } from './lobby.dto'

@Controller('/v1/lobbys')
export class LobbyController {
  constructor(
    private eventService: EventService,
    private lobbyDomainFacade: LobbyDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.lobbyDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: LobbyCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.lobbyDomainFacade.create(body)

    await this.eventService.emit<LobbyApplicationEvent.LobbyCreated.Payload>(
      LobbyApplicationEvent.LobbyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:lobbyId')
  async findOne(@Param('lobbyId') lobbyId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.lobbyDomainFacade.findOneByIdOrFail(
      lobbyId,
      queryOptions,
    )

    return item
  }

  @Patch('/:lobbyId')
  async update(
    @Param('lobbyId') lobbyId: string,
    @Body() body: LobbyUpdateDto,
  ) {
    const item = await this.lobbyDomainFacade.findOneByIdOrFail(lobbyId)

    const itemUpdated = await this.lobbyDomainFacade.update(
      item,
      body as Partial<Lobby>,
    )
    return itemUpdated
  }

  @Delete('/:lobbyId')
  async delete(@Param('lobbyId') lobbyId: string) {
    const item = await this.lobbyDomainFacade.findOneByIdOrFail(lobbyId)

    await this.lobbyDomainFacade.delete(item)

    return item
  }
}

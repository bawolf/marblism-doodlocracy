import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GameDomainFacade } from '@server/modules/game/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GameApplicationEvent } from './game.application.event'
import { GameCreateDto } from './game.dto'

import { LobbyDomainFacade } from '../../lobby/domain'

@Controller('/v1/lobbys')
export class GameByLobbyController {
  constructor(
    private lobbyDomainFacade: LobbyDomainFacade,

    private gameDomainFacade: GameDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/lobby/:lobbyId/games')
  async findManyLobbyId(
    @Param('lobbyId') lobbyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.lobbyDomainFacade.findOneByIdOrFail(lobbyId)

    const items = await this.gameDomainFacade.findManyByLobby(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/lobby/:lobbyId/games')
  async createByLobbyId(
    @Param('lobbyId') lobbyId: string,
    @Body() body: GameCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, lobbyId }

    const item = await this.gameDomainFacade.create(valuesUpdated)

    await this.eventService.emit<GameApplicationEvent.GameCreated.Payload>(
      GameApplicationEvent.GameCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

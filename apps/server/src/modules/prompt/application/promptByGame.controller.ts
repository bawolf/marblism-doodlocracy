import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PromptDomainFacade } from '@server/modules/prompt/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PromptApplicationEvent } from './prompt.application.event'
import { PromptCreateDto } from './prompt.dto'

import { GameDomainFacade } from '../../game/domain'

@Controller('/v1/games')
export class PromptByGameController {
  constructor(
    private gameDomainFacade: GameDomainFacade,

    private promptDomainFacade: PromptDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/game/:gameId/prompts')
  async findManyGameId(
    @Param('gameId') gameId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.gameDomainFacade.findOneByIdOrFail(gameId)

    const items = await this.promptDomainFacade.findManyByGame(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/game/:gameId/prompts')
  async createByGameId(
    @Param('gameId') gameId: string,
    @Body() body: PromptCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, gameId }

    const item = await this.promptDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PromptApplicationEvent.PromptCreated.Payload>(
      PromptApplicationEvent.PromptCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

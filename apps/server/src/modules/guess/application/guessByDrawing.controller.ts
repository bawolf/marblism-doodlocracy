import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GuessDomainFacade } from '@server/modules/guess/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GuessApplicationEvent } from './guess.application.event'
import { GuessCreateDto } from './guess.dto'

import { DrawingDomainFacade } from '../../drawing/domain'

@Controller('/v1/drawings')
export class GuessByDrawingController {
  constructor(
    private drawingDomainFacade: DrawingDomainFacade,

    private guessDomainFacade: GuessDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/drawing/:drawingId/guesss')
  async findManyDrawingId(
    @Param('drawingId') drawingId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.drawingDomainFacade.findOneByIdOrFail(drawingId)

    const items = await this.guessDomainFacade.findManyByDrawing(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/drawing/:drawingId/guesss')
  async createByDrawingId(
    @Param('drawingId') drawingId: string,
    @Body() body: GuessCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, drawingId }

    const item = await this.guessDomainFacade.create(valuesUpdated)

    await this.eventService.emit<GuessApplicationEvent.GuessCreated.Payload>(
      GuessApplicationEvent.GuessCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

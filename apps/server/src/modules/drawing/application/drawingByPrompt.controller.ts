import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { DrawingDomainFacade } from '@server/modules/drawing/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { DrawingApplicationEvent } from './drawing.application.event'
import { DrawingCreateDto } from './drawing.dto'

import { PromptDomainFacade } from '../../prompt/domain'

@Controller('/v1/prompts')
export class DrawingByPromptController {
  constructor(
    private promptDomainFacade: PromptDomainFacade,

    private drawingDomainFacade: DrawingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/prompt/:promptId/drawings')
  async findManyPromptId(
    @Param('promptId') promptId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.promptDomainFacade.findOneByIdOrFail(promptId)

    const items = await this.drawingDomainFacade.findManyByPrompt(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/prompt/:promptId/drawings')
  async createByPromptId(
    @Param('promptId') promptId: string,
    @Body() body: DrawingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, promptId }

    const item = await this.drawingDomainFacade.create(valuesUpdated)

    await this.eventService.emit<DrawingApplicationEvent.DrawingCreated.Payload>(
      DrawingApplicationEvent.DrawingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

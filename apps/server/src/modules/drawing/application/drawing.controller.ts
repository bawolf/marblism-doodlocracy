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
import { Drawing, DrawingDomainFacade } from '@server/modules/drawing/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { DrawingApplicationEvent } from './drawing.application.event'
import { DrawingCreateDto, DrawingUpdateDto } from './drawing.dto'

@Controller('/v1/drawings')
export class DrawingController {
  constructor(
    private eventService: EventService,
    private drawingDomainFacade: DrawingDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.drawingDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: DrawingCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.drawingDomainFacade.create(body)

    await this.eventService.emit<DrawingApplicationEvent.DrawingCreated.Payload>(
      DrawingApplicationEvent.DrawingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:drawingId')
  async findOne(
    @Param('drawingId') drawingId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.drawingDomainFacade.findOneByIdOrFail(
      drawingId,
      queryOptions,
    )

    return item
  }

  @Patch('/:drawingId')
  async update(
    @Param('drawingId') drawingId: string,
    @Body() body: DrawingUpdateDto,
  ) {
    const item = await this.drawingDomainFacade.findOneByIdOrFail(drawingId)

    const itemUpdated = await this.drawingDomainFacade.update(
      item,
      body as Partial<Drawing>,
    )
    return itemUpdated
  }

  @Delete('/:drawingId')
  async delete(@Param('drawingId') drawingId: string) {
    const item = await this.drawingDomainFacade.findOneByIdOrFail(drawingId)

    await this.drawingDomainFacade.delete(item)

    return item
  }
}

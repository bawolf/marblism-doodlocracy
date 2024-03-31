import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { DrawingDomainFacade } from '@server/modules/drawing/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { DrawingApplicationEvent } from './drawing.application.event'
import { DrawingCreateDto } from './drawing.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class DrawingByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private drawingDomainFacade: DrawingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/drawings')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.drawingDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/drawings')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: DrawingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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

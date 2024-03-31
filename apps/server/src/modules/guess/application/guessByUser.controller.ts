import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GuessDomainFacade } from '@server/modules/guess/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GuessApplicationEvent } from './guess.application.event'
import { GuessCreateDto } from './guess.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class GuessByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private guessDomainFacade: GuessDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/guesss')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.guessDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/guesss')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: GuessCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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

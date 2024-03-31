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
import { Guess, GuessDomainFacade } from '@server/modules/guess/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { GuessApplicationEvent } from './guess.application.event'
import { GuessCreateDto, GuessUpdateDto } from './guess.dto'

@Controller('/v1/guesss')
export class GuessController {
  constructor(
    private eventService: EventService,
    private guessDomainFacade: GuessDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.guessDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: GuessCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.guessDomainFacade.create(body)

    await this.eventService.emit<GuessApplicationEvent.GuessCreated.Payload>(
      GuessApplicationEvent.GuessCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:guessId')
  async findOne(@Param('guessId') guessId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.guessDomainFacade.findOneByIdOrFail(
      guessId,
      queryOptions,
    )

    return item
  }

  @Patch('/:guessId')
  async update(
    @Param('guessId') guessId: string,
    @Body() body: GuessUpdateDto,
  ) {
    const item = await this.guessDomainFacade.findOneByIdOrFail(guessId)

    const itemUpdated = await this.guessDomainFacade.update(
      item,
      body as Partial<Guess>,
    )
    return itemUpdated
  }

  @Delete('/:guessId')
  async delete(@Param('guessId') guessId: string) {
    const item = await this.guessDomainFacade.findOneByIdOrFail(guessId)

    await this.guessDomainFacade.delete(item)

    return item
  }
}

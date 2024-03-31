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
import { Prompt, PromptDomainFacade } from '@server/modules/prompt/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { PromptApplicationEvent } from './prompt.application.event'
import { PromptCreateDto, PromptUpdateDto } from './prompt.dto'

@Controller('/v1/prompts')
export class PromptController {
  constructor(
    private eventService: EventService,
    private promptDomainFacade: PromptDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.promptDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: PromptCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.promptDomainFacade.create(body)

    await this.eventService.emit<PromptApplicationEvent.PromptCreated.Payload>(
      PromptApplicationEvent.PromptCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:promptId')
  async findOne(@Param('promptId') promptId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.promptDomainFacade.findOneByIdOrFail(
      promptId,
      queryOptions,
    )

    return item
  }

  @Patch('/:promptId')
  async update(
    @Param('promptId') promptId: string,
    @Body() body: PromptUpdateDto,
  ) {
    const item = await this.promptDomainFacade.findOneByIdOrFail(promptId)

    const itemUpdated = await this.promptDomainFacade.update(
      item,
      body as Partial<Prompt>,
    )
    return itemUpdated
  }

  @Delete('/:promptId')
  async delete(@Param('promptId') promptId: string) {
    const item = await this.promptDomainFacade.findOneByIdOrFail(promptId)

    await this.promptDomainFacade.delete(item)

    return item
  }
}

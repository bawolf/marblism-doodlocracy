import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Prompt } from './prompt.model'

export class PromptApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Prompt>,
  ): Promise<Prompt[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/prompts${buildOptions}`)
  }

  static findOne(
    promptId: string,
    queryOptions?: ApiHelper.QueryOptions<Prompt>,
  ): Promise<Prompt> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/prompts/${promptId}${buildOptions}`)
  }

  static createOne(values: Partial<Prompt>): Promise<Prompt> {
    return HttpService.api.post(`/v1/prompts`, values)
  }

  static updateOne(promptId: string, values: Partial<Prompt>): Promise<Prompt> {
    return HttpService.api.patch(`/v1/prompts/${promptId}`, values)
  }

  static deleteOne(promptId: string): Promise<void> {
    return HttpService.api.delete(`/v1/prompts/${promptId}`)
  }

  static findManyByGameId(
    gameId: string,
    queryOptions?: ApiHelper.QueryOptions<Prompt>,
  ): Promise<Prompt[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/games/game/${gameId}/prompts${buildOptions}`,
    )
  }

  static createOneByGameId(
    gameId: string,
    values: Partial<Prompt>,
  ): Promise<Prompt> {
    return HttpService.api.post(`/v1/games/game/${gameId}/prompts`, values)
  }
}

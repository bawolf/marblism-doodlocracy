import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Drawing } from './drawing.model'

export class DrawingApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Drawing>,
  ): Promise<Drawing[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/drawings${buildOptions}`)
  }

  static findOne(
    drawingId: string,
    queryOptions?: ApiHelper.QueryOptions<Drawing>,
  ): Promise<Drawing> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/drawings/${drawingId}${buildOptions}`)
  }

  static createOne(values: Partial<Drawing>): Promise<Drawing> {
    return HttpService.api.post(`/v1/drawings`, values)
  }

  static updateOne(
    drawingId: string,
    values: Partial<Drawing>,
  ): Promise<Drawing> {
    return HttpService.api.patch(`/v1/drawings/${drawingId}`, values)
  }

  static deleteOne(drawingId: string): Promise<void> {
    return HttpService.api.delete(`/v1/drawings/${drawingId}`)
  }

  static findManyByPromptId(
    promptId: string,
    queryOptions?: ApiHelper.QueryOptions<Drawing>,
  ): Promise<Drawing[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/prompts/prompt/${promptId}/drawings${buildOptions}`,
    )
  }

  static createOneByPromptId(
    promptId: string,
    values: Partial<Drawing>,
  ): Promise<Drawing> {
    return HttpService.api.post(
      `/v1/prompts/prompt/${promptId}/drawings`,
      values,
    )
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Drawing>,
  ): Promise<Drawing[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/drawings${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Drawing>,
  ): Promise<Drawing> {
    return HttpService.api.post(`/v1/users/user/${userId}/drawings`, values)
  }
}

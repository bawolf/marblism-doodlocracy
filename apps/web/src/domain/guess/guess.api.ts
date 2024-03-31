import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Guess } from './guess.model'

export class GuessApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Guess>,
  ): Promise<Guess[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/guesss${buildOptions}`)
  }

  static findOne(
    guessId: string,
    queryOptions?: ApiHelper.QueryOptions<Guess>,
  ): Promise<Guess> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/guesss/${guessId}${buildOptions}`)
  }

  static createOne(values: Partial<Guess>): Promise<Guess> {
    return HttpService.api.post(`/v1/guesss`, values)
  }

  static updateOne(guessId: string, values: Partial<Guess>): Promise<Guess> {
    return HttpService.api.patch(`/v1/guesss/${guessId}`, values)
  }

  static deleteOne(guessId: string): Promise<void> {
    return HttpService.api.delete(`/v1/guesss/${guessId}`)
  }

  static findManyByDrawingId(
    drawingId: string,
    queryOptions?: ApiHelper.QueryOptions<Guess>,
  ): Promise<Guess[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/drawings/drawing/${drawingId}/guesss${buildOptions}`,
    )
  }

  static createOneByDrawingId(
    drawingId: string,
    values: Partial<Guess>,
  ): Promise<Guess> {
    return HttpService.api.post(
      `/v1/drawings/drawing/${drawingId}/guesss`,
      values,
    )
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Guess>,
  ): Promise<Guess[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/user/${userId}/guesss${buildOptions}`)
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Guess>,
  ): Promise<Guess> {
    return HttpService.api.post(`/v1/users/user/${userId}/guesss`, values)
  }
}

import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Lobby } from './lobby.model'

export class LobbyApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Lobby>,
  ): Promise<Lobby[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/lobbys${buildOptions}`)
  }

  static findOne(
    lobbyId: string,
    queryOptions?: ApiHelper.QueryOptions<Lobby>,
  ): Promise<Lobby> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/lobbys/${lobbyId}${buildOptions}`)
  }

  static createOne(values: Partial<Lobby>): Promise<Lobby> {
    return HttpService.api.post(`/v1/lobbys`, values)
  }

  static updateOne(lobbyId: string, values: Partial<Lobby>): Promise<Lobby> {
    return HttpService.api.patch(`/v1/lobbys/${lobbyId}`, values)
  }

  static deleteOne(lobbyId: string): Promise<void> {
    return HttpService.api.delete(`/v1/lobbys/${lobbyId}`)
  }

  static findManyByHostUserId(
    hostUserId: string,
    queryOptions?: ApiHelper.QueryOptions<Lobby>,
  ): Promise<Lobby[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/hostUser/${hostUserId}/lobbys${buildOptions}`,
    )
  }

  static createOneByHostUserId(
    hostUserId: string,
    values: Partial<Lobby>,
  ): Promise<Lobby> {
    return HttpService.api.post(
      `/v1/users/hostUser/${hostUserId}/lobbys`,
      values,
    )
  }
}

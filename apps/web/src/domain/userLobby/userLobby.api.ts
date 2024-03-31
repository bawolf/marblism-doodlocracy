import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { UserLobby } from './userLobby.model'

export class UserLobbyApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<UserLobby>,
  ): Promise<UserLobby[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/userLobbys${buildOptions}`)
  }

  static findOne(
    userLobbyId: string,
    queryOptions?: ApiHelper.QueryOptions<UserLobby>,
  ): Promise<UserLobby> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/userLobbys/${userLobbyId}${buildOptions}`)
  }

  static createOne(values: Partial<UserLobby>): Promise<UserLobby> {
    return HttpService.api.post(`/v1/userLobbys`, values)
  }

  static updateOne(
    userLobbyId: string,
    values: Partial<UserLobby>,
  ): Promise<UserLobby> {
    return HttpService.api.patch(`/v1/userLobbys/${userLobbyId}`, values)
  }

  static deleteOne(userLobbyId: string): Promise<void> {
    return HttpService.api.delete(`/v1/userLobbys/${userLobbyId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<UserLobby>,
  ): Promise<UserLobby[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/userLobbys${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<UserLobby>,
  ): Promise<UserLobby> {
    return HttpService.api.post(`/v1/users/user/${userId}/userLobbys`, values)
  }

  static findManyByLobbyId(
    lobbyId: string,
    queryOptions?: ApiHelper.QueryOptions<UserLobby>,
  ): Promise<UserLobby[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/lobbys/lobby/${lobbyId}/userLobbys${buildOptions}`,
    )
  }

  static createOneByLobbyId(
    lobbyId: string,
    values: Partial<UserLobby>,
  ): Promise<UserLobby> {
    return HttpService.api.post(
      `/v1/lobbys/lobby/${lobbyId}/userLobbys`,
      values,
    )
  }
}

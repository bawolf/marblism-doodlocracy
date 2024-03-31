import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { UserLobby } from './userLobby.model'

import { User } from '../../user/domain'

import { Lobby } from '../../lobby/domain'

@Injectable()
export class UserLobbyDomainFacade {
  constructor(
    @InjectRepository(UserLobby)
    private repository: Repository<UserLobby>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<UserLobby>): Promise<UserLobby> {
    return this.repository.save(values)
  }

  async update(
    item: UserLobby,
    values: Partial<UserLobby>,
  ): Promise<UserLobby> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: UserLobby): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<UserLobby> = {},
  ): Promise<UserLobby[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<UserLobby> = {},
  ): Promise<UserLobby> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<UserLobby> = {},
  ): Promise<UserLobby[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByLobby(
    item: Lobby,
    queryOptions: RequestHelper.QueryOptions<UserLobby> = {},
  ): Promise<UserLobby[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('lobby')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        lobbyId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}

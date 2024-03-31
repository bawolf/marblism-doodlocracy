import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Lobby } from './lobby.model'

import { User } from '../../user/domain'

@Injectable()
export class LobbyDomainFacade {
  constructor(
    @InjectRepository(Lobby)
    private repository: Repository<Lobby>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Lobby>): Promise<Lobby> {
    return this.repository.save(values)
  }

  async update(item: Lobby, values: Partial<Lobby>): Promise<Lobby> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Lobby): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Lobby> = {},
  ): Promise<Lobby[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Lobby> = {},
  ): Promise<Lobby> {
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

  async findManyByHostUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Lobby> = {},
  ): Promise<Lobby[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('hostUser')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        hostUserId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Prompt } from './prompt.model'

import { Game } from '../../game/domain'

@Injectable()
export class PromptDomainFacade {
  constructor(
    @InjectRepository(Prompt)
    private repository: Repository<Prompt>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Prompt>): Promise<Prompt> {
    return this.repository.save(values)
  }

  async update(item: Prompt, values: Partial<Prompt>): Promise<Prompt> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Prompt): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Prompt> = {},
  ): Promise<Prompt[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Prompt> = {},
  ): Promise<Prompt> {
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

  async findManyByGame(
    item: Game,
    queryOptions: RequestHelper.QueryOptions<Prompt> = {},
  ): Promise<Prompt[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('game')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        gameId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { DrawingDomainFacade } from './drawing.domain.facade'
import { Drawing } from './drawing.model'

@Module({
  imports: [TypeOrmModule.forFeature([Drawing]), DatabaseHelperModule],
  providers: [DrawingDomainFacade, DrawingDomainFacade],
  exports: [DrawingDomainFacade],
})
export class DrawingDomainModule {}

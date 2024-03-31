import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class LobbyCreateDto {
  @IsString()
  @IsOptional()
  uniqueLink?: string

  @IsString()
  @IsOptional()
  hostUserId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class LobbyUpdateDto {
  @IsString()
  @IsOptional()
  uniqueLink?: string

  @IsString()
  @IsOptional()
  hostUserId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

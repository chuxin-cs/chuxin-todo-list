import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

import { CommonEntity } from '~/common/entity/common.entity';

@Entity({ name: 'todo' })
export class TodoEntity extends CommonEntity {
  @Column()
  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '状态' })
  @Column({ default: 0 })
  status: number;
}

import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  public value: string;

  @IsOptional()
  @IsBoolean()
  public completed?: boolean = false;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  public value?: string;

  @IsOptional()
  @IsBoolean()
  public completed?: boolean;

  @IsOptional()
  @IsInt()
  @Min(1)
  public userId?: string;
}

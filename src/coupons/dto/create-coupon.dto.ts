import { IsDateString, IsInt, IsNotEmpty, Max } from 'class-validator';

export class CreateCouponDto {
  @IsNotEmpty({ message: 'El nombre del cupón es obligatorio' })
  name: string;

  @IsNotEmpty({ message: 'El descuento no puede ir vacío' })
  @IsInt({ message: 'El descuento debe ser entre 1 y 100' })
  @Max(1, { message: 'El descuento mínimo es de 1' })
  percentage: number;

  @IsNotEmpty({ message: 'La fecha no puede ir vacía' })
  @IsDateString({}, { message: 'Fecha no válida' })
  expirationDate: Date;
}

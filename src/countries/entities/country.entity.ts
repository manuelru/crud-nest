import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Countries {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

}

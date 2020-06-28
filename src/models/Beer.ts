import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('beers')
class Beer{

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;



}

export default Beer

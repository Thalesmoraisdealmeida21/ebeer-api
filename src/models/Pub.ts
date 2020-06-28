import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import Beer from './Beer'

@Entity('pubs')
class Pub{

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;


  @Column()
  city: string;

  @Column()
  uf: string;


  @Column()
  latitude: number;

  @ManyToMany(type => Beer)
  @JoinTable()
  beers: Beer[];

  @Column()
  longitude: number;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date
}


export default Pub

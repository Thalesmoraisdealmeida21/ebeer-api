import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTablePubsBeers1593370516861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'pubs_beers',
          columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default:'uuid_generate_v4()',
                },
                {
                  name: 'beer_id',
                  type: 'uuid',
                  isNullable: false
                },
                {
                  name: 'pub_id',
                  type: 'uuid',
                  isNullable: false
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
              },
              {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
              },

          ]
        })



      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('pubs_beers');
    }

}

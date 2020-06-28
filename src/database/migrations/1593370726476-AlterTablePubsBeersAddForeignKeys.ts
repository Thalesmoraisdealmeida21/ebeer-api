import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export default class AlterTablePubsBeersAddForeignKeys1593370726476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
          'pubs_beers',
          new TableForeignKey({
            name: 'ForeignKeyBeer',
            columnNames: ['beer_id'],
            referencedTableName: 'beers',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate:'CASCADE'
          })
        )


        await queryRunner.createForeignKey(
          'pubs_beers',
          new TableForeignKey({
            name: 'ForeignKeyPub',
            columnNames: ['pub_id'],
            referencedTableName: 'pubs',
            referencedColumnNames: ['id']
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropForeignKey('pubs', 'ForeignKeyPub');
      await queryRunner.dropForeignKey('beers', 'ForeignKeyBeer');
    }

}

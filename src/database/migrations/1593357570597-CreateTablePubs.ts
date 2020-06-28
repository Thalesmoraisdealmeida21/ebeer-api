import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1593041314133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pubs',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default:'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: 'uf',
                        type: 'varchar(2)',
                        isNullable: false,
                        isUnique: false
                    },

                    {
                      name: 'latitude',
                      type: 'float',
                      isNullable: false,
                      isUnique: false

                    },
                    {
                        name: 'longitude',
                        type: 'float',
                        isUnique: false,
                        isNullable: false,

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
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pubs')
    }

}

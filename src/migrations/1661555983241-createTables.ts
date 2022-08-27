import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1661555983241 implements MigrationInterface {
    name = 'createTables1661555983241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "district" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "district"`);
    }

}

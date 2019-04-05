import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialCreate1553144028089 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "dbo"."AnimalMeta" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_01db1f5c3994da29b94b5de8512" DEFAULT newsequentialid(), "AIStatus" varchar(1), "AIDate" date, CONSTRAINT "PK_01db1f5c3994da29b94b5de8512" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."Breed" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_28614d23cfc8f5359b46bd1fcaa" DEFAULT newsequentialid(), "OneChar" varchar(1), "TwoChar" varchar(2), "ThreeChar" varchar(3), "Name" varchar(50), "Organization" varchar(150), "Species" varchar(50), CONSTRAINT "PK_28614d23cfc8f5359b46bd1fcaa" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."AnimalLineage" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_4675580d39c3714d43f39851039" DEFAULT newsequentialid(), "Relationship" varchar(10) NOT NULL, "FromAnimalId" uniqueidentifier NOT NULL, "ToAnimalId" uniqueidentifier NOT NULL, CONSTRAINT "PK_4675580d39c3714d43f39851039" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."OfficialTrait" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_2802b51d7ecdcf64b49b64d076a" DEFAULT newsequentialid(), "EvaluatedValue" varchar(50), "DisplayValue" varchar(50), "AnimalId" uniqueidentifier NOT NULL, "TraitMetaId" uniqueidentifier NOT NULL, CONSTRAINT "PK_2802b51d7ecdcf64b49b64d076a" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."TraitMeta" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_df8d2be7cf7f2e35d69e3b0928a" DEFAULT newsequentialid(), "Name" varchar(50), "Label" varchar(50), "Format" varchar(50), "Description" varchar(255), CONSTRAINT "PK_df8d2be7cf7f2e35d69e3b0928a" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."GenomicTrait" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_0ac9eb4213c1888333f7993ebe1" DEFAULT newsequentialid(), "EvaluatedValue" varchar(50), "DisplayValue" varchar(50), "AnimalId" uniqueidentifier NOT NULL, "TraitMetaId" uniqueidentifier NOT NULL, CONSTRAINT "PK_0ac9eb4213c1888333f7993ebe1" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."NaabCodeMeta" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_eecdded4573ee5ea505a4279c10" DEFAULT newsequentialid(), "SexedType" varchar(50), "SemenType" varchar(10) NOT NULL, CONSTRAINT "PK_eecdded4573ee5ea505a4279c10" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."Price" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_77706b35be3ce753b28455c9edd" DEFAULT newsequentialid(), "Sell" decimal(9,2) NOT NULL, "GrossMargin" decimal(9,1) NOT NULL, "MinFlex" decimal(9,2) NOT NULL, "FlexGrossMargin" decimal(9,1) NOT NULL, "IsFinal" bit NOT NULL CONSTRAINT "DF_5031195ae1da8480bb836167b9c" DEFAULT (0), CONSTRAINT "PK_77706b35be3ce753b28455c9edd" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."Royalty" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_2df34b25cbea3e4f5e91a3df008" DEFAULT newsequentialid(), "Unit" decimal(9,2) NOT NULL CONSTRAINT "DF_6e67fb2030c662b1bfb0118b25f" DEFAULT (0), "Percent" decimal(9,1) NOT NULL CONSTRAINT "DF_ff9d912775449f25029d2257d9e" DEFAULT (0), "SalesAdjustment" decimal(9,2) NOT NULL CONSTRAINT "DF_bef64b52aa30dea24e880c1c6a4" DEFAULT (0), "Surcharge" decimal(9,2) NOT NULL CONSTRAINT "DF_17daa12d13d28b6a6b4e4f6f630" DEFAULT (0), CONSTRAINT "PK_2df34b25cbea3e4f5e91a3df008" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."CostGroup" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_0a20cdbc8824c0b98eb873b4f46" DEFAULT newsequentialid(), "Code" varchar(20) NOT NULL, "Description" varchar(255) NOT NULL, "Cost" decimal(9,2) NOT NULL CONSTRAINT "DF_b8be7acc57db248a7dd9e7c5e0a" DEFAULT (0), CONSTRAINT "PK_0a20cdbc8824c0b98eb873b4f46" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."NaabCode" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_f60c3b2b63a72332f77004134a2" DEFAULT newsequentialid(), "Value" varchar(50) NOT NULL, "NaabCodeMetaId" uniqueidentifier NOT NULL, "AnimalId" uniqueidentifier NOT NULL, "PriceId" uniqueidentifier, "RoyaltyId" uniqueidentifier, "MarketingGroupId" uniqueidentifier, CONSTRAINT "PK_f60c3b2b63a72332f77004134a2" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."Animal" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_f4ebc7a00ac3822b465e7a80912" DEFAULT newsequentialid(), "GlobalId" varchar(64) NOT NULL, "Gender" varchar(1), "DateOfBirth" date, "ShortName" varchar(60), "RegName" varchar(100), "IsDead" bit NOT NULL CONSTRAINT "DF_e1c239a6c718a8e836fd4dbb95b" DEFAULT (0), "IsActive" bit NOT NULL CONSTRAINT "DF_cda55d8850af2f93f5d4c71a68a" DEFAULT (0), "IsPublished" bit NOT NULL CONSTRAINT "DF_a31945adb936ec459c426396238" DEFAULT (0), "AnimalMetaId" uniqueidentifier NOT NULL, "BreedId" uniqueidentifier NOT NULL, CONSTRAINT "PK_f4ebc7a00ac3822b465e7a80912" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "UK_Animal_GlobalId" ON "dbo"."Animal" ("GlobalId") `);
        await queryRunner.query(`CREATE TABLE "dbo"."AnimalIdentification" ("Id" uniqueidentifier NOT NULL CONSTRAINT "DF_52d93e7b98593c7728b61562e2e" DEFAULT newsequentialid(), "AnimalId" uniqueidentifier NOT NULL, "Identification" varchar(50) NOT NULL, "IsCurrent" bit NOT NULL CONSTRAINT "DF_59894c5a4924ac59dae113969b8" DEFAULT (0), CONSTRAINT "PK_52d93e7b98593c7728b61562e2e" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "UK_AnimalIdentification_Identification" ON "dbo"."AnimalIdentification" ("Identification") `);
        await queryRunner.query(`ALTER TABLE "dbo"."AnimalLineage" ADD CONSTRAINT "FK_1077b259081f5ea282ab458b33d" FOREIGN KEY ("FromAnimalId") REFERENCES "dbo"."Animal"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."AnimalLineage" ADD CONSTRAINT "FK_5849b82806e3ca2ff05f9d11075" FOREIGN KEY ("ToAnimalId") REFERENCES "dbo"."Animal"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."OfficialTrait" ADD CONSTRAINT "FK_e76b334e9a31a610ab371ab8bab" FOREIGN KEY ("AnimalId") REFERENCES "dbo"."Animal"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."OfficialTrait" ADD CONSTRAINT "FK_627a8c536f319ecc759b3c31422" FOREIGN KEY ("TraitMetaId") REFERENCES "dbo"."TraitMeta"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."GenomicTrait" ADD CONSTRAINT "FK_8d842c8f03bda10a9b3487c02df" FOREIGN KEY ("AnimalId") REFERENCES "dbo"."Animal"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."GenomicTrait" ADD CONSTRAINT "FK_a0b65f107aea182af62a67199d4" FOREIGN KEY ("TraitMetaId") REFERENCES "dbo"."TraitMeta"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" ADD CONSTRAINT "FK_b50bd92bf5ed7deeeff362af6db" FOREIGN KEY ("NaabCodeMetaId") REFERENCES "dbo"."NaabCodeMeta"("Id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" ADD CONSTRAINT "FK_a1732d3455e4b8a17415ac4e211" FOREIGN KEY ("AnimalId") REFERENCES "dbo"."Animal"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" ADD CONSTRAINT "FK_e90ab7307fbc676728f4d20ccbd" FOREIGN KEY ("PriceId") REFERENCES "dbo"."Price"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" ADD CONSTRAINT "FK_99fd2bae0e255322264a02eb3fd" FOREIGN KEY ("RoyaltyId") REFERENCES "dbo"."Royalty"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" ADD CONSTRAINT "FK_20c7452ed71a641fde2579715e3" FOREIGN KEY ("MarketingGroupId") REFERENCES "dbo"."CostGroup"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."Animal" ADD CONSTRAINT "FK_cea1f2177012308811617c7e82b" FOREIGN KEY ("AnimalMetaId") REFERENCES "dbo"."AnimalMeta"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dbo"."Animal" ADD CONSTRAINT "FK_f03525464500fcaf60f40b2190c" FOREIGN KEY ("BreedId") REFERENCES "dbo"."Breed"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "dbo"."Animal" DROP CONSTRAINT "FK_f03525464500fcaf60f40b2190c"`);
        await queryRunner.query(`ALTER TABLE "dbo"."Animal" DROP CONSTRAINT "FK_cea1f2177012308811617c7e82b"`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" DROP CONSTRAINT "FK_20c7452ed71a641fde2579715e3"`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" DROP CONSTRAINT "FK_99fd2bae0e255322264a02eb3fd"`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" DROP CONSTRAINT "FK_e90ab7307fbc676728f4d20ccbd"`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" DROP CONSTRAINT "FK_a1732d3455e4b8a17415ac4e211"`);
        await queryRunner.query(`ALTER TABLE "dbo"."NaabCode" DROP CONSTRAINT "FK_b50bd92bf5ed7deeeff362af6db"`);
        await queryRunner.query(`ALTER TABLE "dbo"."GenomicTrait" DROP CONSTRAINT "FK_a0b65f107aea182af62a67199d4"`);
        await queryRunner.query(`ALTER TABLE "dbo"."GenomicTrait" DROP CONSTRAINT "FK_8d842c8f03bda10a9b3487c02df"`);
        await queryRunner.query(`ALTER TABLE "dbo"."OfficialTrait" DROP CONSTRAINT "FK_627a8c536f319ecc759b3c31422"`);
        await queryRunner.query(`ALTER TABLE "dbo"."OfficialTrait" DROP CONSTRAINT "FK_e76b334e9a31a610ab371ab8bab"`);
        await queryRunner.query(`ALTER TABLE "dbo"."AnimalLineage" DROP CONSTRAINT "FK_5849b82806e3ca2ff05f9d11075"`);
        await queryRunner.query(`ALTER TABLE "dbo"."AnimalLineage" DROP CONSTRAINT "FK_1077b259081f5ea282ab458b33d"`);
        await queryRunner.query(`DROP INDEX "UK_AnimalIdentification_Identification" ON "dbo"."AnimalIdentification"`);
        await queryRunner.query(`DROP TABLE "dbo"."AnimalIdentification"`);
        await queryRunner.query(`DROP INDEX "UK_Animal_GlobalId" ON "dbo"."Animal"`);
        await queryRunner.query(`DROP TABLE "dbo"."Animal"`);
        await queryRunner.query(`DROP TABLE "dbo"."NaabCode"`);
        await queryRunner.query(`DROP TABLE "dbo"."CostGroup"`);
        await queryRunner.query(`DROP TABLE "dbo"."Royalty"`);
        await queryRunner.query(`DROP TABLE "dbo"."Price"`);
        await queryRunner.query(`DROP TABLE "dbo"."NaabCodeMeta"`);
        await queryRunner.query(`DROP TABLE "dbo"."GenomicTrait"`);
        await queryRunner.query(`DROP TABLE "dbo"."TraitMeta"`);
        await queryRunner.query(`DROP TABLE "dbo"."OfficialTrait"`);
        await queryRunner.query(`DROP TABLE "dbo"."AnimalLineage"`);
        await queryRunner.query(`DROP TABLE "dbo"."Breed"`);
        await queryRunner.query(`DROP TABLE "dbo"."AnimalMeta"`);
    }

}

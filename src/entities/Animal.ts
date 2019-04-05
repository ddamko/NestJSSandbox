import { 
  Column,
  Entity, 
  BaseEntity, 
  Index,
  JoinColumn, 
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationId } from "typeorm";
import { AnimalMeta } from "./AnimalMeta";
import { AnimalLineage } from './AnimalLineage';
import { Breed } from "./Breed";
import { GenomicTrait } from "./GenomicTrait";
import { NaabCode } from "./NaabCode";
import { OfficialTrait } from "./OfficialTrait";

@Entity("Animal", { schema: "dbo" })
@Index("UK_Animal_GlobalId", ["GlobalId"], { unique: true })
export class Animal extends BaseEntity {

    @Column("uniqueidentifier", { nullable:false, primary:true, default: () => "newsequentialid()", name:"Id" })
    Id?:string;

    @Column("varchar", { nullable:false, length:64, name:"GlobalId" })
    GlobalId:string;
        
    @Column("varchar", { nullable:true, length:1, name:"Gender" }) 
    Gender:string | null; 

    @Column("date", { nullable:true, name:"DateOfBirth" })
    DateOfBirth?:Date | null;

    @Column("varchar", { nullable:true, length:60, name:"ShortName" })
    ShortName?:string | null;  

    @Column("varchar", { nullable:true, length:100, name:"RegName" })
    RegName?:string | null;    

    @Column("bit", { nullable:false, default: () => "(0)", name:"IsDead" })
    IsDead?:boolean;     

    @Column("bit", { nullable:false, default: () => "(0)", name:"IsActive" })
    IsActive?:boolean;

    @Column("bit", { nullable:false, default: () => "(0)", name:"IsPublished" })
    IsPublished?:boolean;
        
    @OneToOne(type => AnimalMeta, AnimalMeta => AnimalMeta.animal, { nullable: false })
    @JoinColumn({ name:'AnimalMetaId'})
    animalMeta?:Promise<AnimalMeta | null>;

    @RelationId((Animal: Animal) => Animal.animalMeta)
    animalMetaId?: Promise<string[]>;
   
    @ManyToOne(type => Breed, Breed => Breed.animals, { nullable:false, })
    @JoinColumn({ name:'BreedId'})
    breed?:Promise<Breed | null>;

    @RelationId((Animal: Animal) => Animal.breed)
    breedId?: Promise<string[]>;

    @OneToMany(type => AnimalLineage, AnimalLineage => AnimalLineage.fromAnimal)
    lineageFromAnimal?:Promise<AnimalLineage>;

    @OneToMany(type => AnimalLineage, AnimalLineage => AnimalLineage.toAnimal)
    lineageToAnimal?:Promise<AnimalLineage>;
   
    @OneToMany(type => GenomicTrait, GenomicTrait => GenomicTrait.animal)
    genomicTraits?:Promise<GenomicTrait[]>;
   
    @OneToMany(type => NaabCode, NaabCode => NaabCode.animal)
    naabCodes?:Promise<NaabCode[]>; 
   
    @OneToMany(type => OfficialTrait, OfficialTrait => OfficialTrait.animal)
    officialTraits?:Promise<OfficialTrait[]>;

    constructor(init?: Partial<Animal>) {
      super();
		  Object.assign(this, init);
	  }
}
 
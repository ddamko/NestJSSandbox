import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Animal} from "./Animal";
import {TraitMeta} from "./TraitMeta";


@Entity("OfficialTrait",{schema:"dbo"})
export class OfficialTrait extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

   
    @ManyToOne(type=>Animal, Animal=>Animal.officialTraits,{  nullable:false, })
    @JoinColumn({ name:'AnimalId'})
    animal:Promise<Animal | null>;

    @RelationId((OfficialTrait: OfficialTrait) => OfficialTrait.animal)
    animalId: Promise<string[]>;

   
    @ManyToOne(type=>TraitMeta, TraitMeta=>TraitMeta.officialTraits,{  nullable:false, })
    @JoinColumn({ name:'TraitMetaId'})
    traitMeta:Promise<TraitMeta | null>;

    @RelationId((OfficialTrait: OfficialTrait) => OfficialTrait.traitMeta)
    traitMetaId: Promise<string[]>;

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"EvaluatedValue"
        })
    EvaluatedValue:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"DisplayValue"
        })
    DisplayValue:string | null;
        
    constructor(init?: Partial<OfficialTrait>) {
        super();
		Object.assign(this, init);
	}
}

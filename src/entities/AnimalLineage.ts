import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Animal} from "./Animal";

@Entity("AnimalLineage",{schema:"dbo"})
export class AnimalLineage extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
   
    @ManyToOne(type=>Animal, Animal=>Animal.lineageFromAnimal, { nullable: false, })
    @JoinColumn({ name:'FromAnimalId'})
    fromAnimal: Animal | null;

    @RelationId((AnimalLineage: AnimalLineage) => AnimalLineage.fromAnimal)
    fromAnimalId: string;
   
    @ManyToOne(type=>Animal, Animal=>Animal.lineageToAnimal, { nullable: false, })
    @JoinColumn({ name:'ToAnimalId'})
    toAnimal: Animal | null;

    @RelationId((AnimalLineage: AnimalLineage) => AnimalLineage.toAnimal)
    toAnimalId: string;

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"Relationship"
        })
    Relationship:string;
        
    constructor(init?: Partial<AnimalLineage>) {
        super();
		Object.assign(this, init);
	}
}

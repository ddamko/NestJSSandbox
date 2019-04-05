import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("AnimalIdentification",{schema:"dbo"})
@Index("UK_AnimalIdentification_Identification",["Identification",],{unique:true})
export class AnimalIdentification extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

    @Column("uniqueidentifier",{ 
        nullable:false,
        name:"AnimalId"
        })
    AnimalId:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"Identification"
        })
    Identification:string;
        

    @Column("bit",{ 
        nullable:false,
        default: () => "(0)",
        name:"IsCurrent"
        })
    IsCurrent:boolean;
        
    constructor(init?: Partial<AnimalIdentification>) {
        super();
		Object.assign(this, init);
	}
}

import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {GenomicTrait} from "./GenomicTrait";
import {OfficialTrait} from "./OfficialTrait";


@Entity("TraitMeta",{schema:"dbo"})
export class TraitMeta extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Name"
        })
    Name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Label"
        })
    Label:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Format"
        })
    Format:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Description"
        })
    Description:string | null;
        

   
    @OneToMany(type=>GenomicTrait, GenomicTrait=>GenomicTrait.traitMeta)
    genomicTraits:Promise<GenomicTrait[]>;
    

   
    @OneToMany(type=>OfficialTrait, OfficialTrait=>OfficialTrait.traitMeta)
    officialTraits:Promise<OfficialTrait[]>;
    
    constructor(init?: Partial<TraitMeta>) {
        super();
		Object.assign(this, init);
	}
}

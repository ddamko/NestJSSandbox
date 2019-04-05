import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {NaabCode} from "./NaabCode";


@Entity("CostGroup",{schema:"dbo"})
export class CostGroup extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"Code"
        })
    Code:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"Description"
        })
    Description:string;
        

    @Column("decimal",{ 
        nullable:false,
        default: () => "(0)",
        precision:9,
        scale:2,
        name:"Cost"
        })
    Cost:number;
        

   
    @OneToMany(type=>NaabCode, NaabCode=>NaabCode.marketingGroup)
    naabCodes:Promise<NaabCode[]>;
    
    constructor(init?: Partial<CostGroup>) {
        super();
		Object.assign(this, init);
	}
}

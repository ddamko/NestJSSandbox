import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {NaabCode} from "./NaabCode";


@Entity("Royalty",{schema:"dbo"})
export class Royalty extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

    @Column("decimal",{ 
        nullable:false,
        default: () => "(0)",
        precision:9,
        scale:2,
        name:"Unit"
        })
    Unit:number;
        

    @Column("decimal",{ 
        nullable:false,
        default: () => "(0)",
        precision:9,
        scale:1,
        name:"Percent"
        })
    Percent:number;
        

    @Column("decimal",{ 
        nullable:false,
        default: () => "(0)",
        precision:9,
        scale:2,
        name:"SalesAdjustment"
        })
    SalesAdjustment:number;
        

    @Column("decimal",{ 
        nullable:false,
        default: () => "(0)",
        precision:9,
        scale:2,
        name:"Surcharge"
        })
    Surcharge:number;
        

   
    @OneToMany(type=>NaabCode, NaabCode=>NaabCode.royalty)
    naabCodes:Promise<NaabCode[]>;
    
    constructor(init?: Partial<Royalty>) {
        super();
		Object.assign(this, init);
	}
}

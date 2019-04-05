import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {NaabCode} from "./NaabCode";


@Entity("Price",{schema:"dbo"})
export class Price extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

    @Column("decimal",{ 
        nullable:false,
        precision:9,
        scale:2,
        name:"Sell"
        })
    Sell:number;
        

    @Column("decimal",{ 
        nullable:false,
        precision:9,
        scale:1,
        name:"GrossMargin"
        })
    GrossMargin:number;
        

    @Column("decimal",{ 
        nullable:false,
        precision:9,
        scale:2,
        name:"MinFlex"
        })
    MinFlex:number;
        

    @Column("decimal",{ 
        nullable:false,
        precision:9,
        scale:1,
        name:"FlexGrossMargin"
        })
    FlexGrossMargin:number;
        

    @Column("bit",{ 
        nullable:false,
        default: () => "(0)",
        name:"IsFinal"
        })
    IsFinal:boolean;
        

   
    @OneToMany(type=>NaabCode, NaabCode=>NaabCode.price)
    naabCodes:Promise<NaabCode[]>;
    
    constructor(init?: Partial<Price>) {
        super();
		Object.assign(this, init);
	}
}

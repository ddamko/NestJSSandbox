import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {NaabCode} from "./NaabCode";


@Entity("NaabCodeMeta",{schema:"dbo"})
export class NaabCodeMeta extends BaseEntity {

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
        name:"SexedType"
        })
    SexedType:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"SemenType"
        })
    SemenType:string;
        

   
    @OneToMany(type=>NaabCode, NaabCode=>NaabCode.naabCodeMeta,{ onDelete: 'CASCADE' , })
    naabCodes:Promise<NaabCode[]>;
    
    constructor(init?: Partial<NaabCodeMeta>) {
        super();
		Object.assign(this, init);
	}
}

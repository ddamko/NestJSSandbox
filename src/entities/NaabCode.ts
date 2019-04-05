import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {NaabCodeMeta} from "./NaabCodeMeta";
import {Animal} from "./Animal";
import {Price} from "./Price";
import {Royalty} from "./Royalty";
import {CostGroup} from "./CostGroup";


@Entity("NaabCode",{schema:"dbo"})
export class NaabCode extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

   
    @ManyToOne(type=>NaabCodeMeta, NaabCodeMeta=>NaabCodeMeta.naabCodes,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'NaabCodeMetaId'})
    naabCodeMeta:Promise<NaabCodeMeta | null>;

    @RelationId((NaabCode: NaabCode) => NaabCode.naabCodeMeta)
    naabCodeMetaId: Promise<string[]>;

   
    @ManyToOne(type=>Animal, Animal=>Animal.naabCodes,{  nullable:false, })
    @JoinColumn({ name:'AnimalId'})
    animal:Promise<Animal | null>;

    @RelationId((NaabCode: NaabCode) => NaabCode.animal)
    animalId: Promise<string[]>;

   
    @ManyToOne(type=>Price, Price=>Price.naabCodes,{  })
    @JoinColumn({ name:'PriceId'})
    price:Promise<Price | null>;

    @RelationId((NaabCode: NaabCode) => NaabCode.price)
    priceId: Promise<string[]>;

   
    @ManyToOne(type=>Royalty, Royalty=>Royalty.naabCodes,{  })
    @JoinColumn({ name:'RoyaltyId'})
    royalty:Promise<Royalty | null>;

    @RelationId((NaabCode: NaabCode) => NaabCode.royalty)
    royaltyId: Promise<string[]>;

   
    @ManyToOne(type=>CostGroup, CostGroup=>CostGroup.naabCodes,{  })
    @JoinColumn({ name:'MarketingGroupId'})
    marketingGroup:Promise<CostGroup | null>;

    @RelationId((NaabCode: NaabCode) => NaabCode.marketingGroup)
    marketingGroupId: Promise<string[]>;

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"Value"
        })
    Value:string;
        
    constructor(init?: Partial<NaabCode>) {
        super();
		Object.assign(this, init);
	}
}

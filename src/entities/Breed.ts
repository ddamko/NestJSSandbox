import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Animal} from "./Animal";


@Entity("Breed",{schema:"dbo"})
export class Breed extends BaseEntity {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"Id"
        })
    Id:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:1,
        name:"OneChar"
        })
    OneChar:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:2,
        name:"TwoChar"
        })
    TwoChar:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:3,
        name:"ThreeChar"
        })
    ThreeChar:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Name"
        })
    Name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:150,
        name:"Organization"
        })
    Organization:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"Species"
        })
    Species:string | null;
        

   
    @OneToMany(type=>Animal, Animal=>Animal.breed)
    animals:Promise<Animal[]>;
    
    constructor(init?: Partial<Breed>) {
        super();
		Object.assign(this, init);
	}
}

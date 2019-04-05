import { BaseEntity, Column, Entity, OneToOne } from "typeorm";
import { Animal } from "./Animal";

@Entity("AnimalMeta", {schema:"dbo"})
export class AnimalMeta extends BaseEntity {

    @Column("uniqueidentifier", { nullable:false, primary:true, default: () => "newsequentialid()", name:"Id" })
    Id:string;   

    @Column("varchar",  { nullable:true, length:1, name:"AIStatus" })
    AIStatus:string | null;

    @Column("date", { nullable:true, name:"AIDate" })
    AIDate:Date | null;
   
    @OneToOne(type=>Animal, Animal=>Animal.animalMeta)
    animal:Promise<Animal>;
    
    constructor(init?: Partial<AnimalMeta>) {
        super();
		Object.assign(this, init);
	}
}

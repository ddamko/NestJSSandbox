import { CostGroup } from './CostGroup';
import { Royalty } from './Royalty';
import { ObjectType, Field } from "type-graphql"

enum SemenType {
    CONV = "CONV",
    SEXED = "SEXED"
}

@ObjectType()
class Product {

    @Field({ nullable: false })
    naabCode: string;

    @Field({ nullable: false })
    semenType: SemenType;

    @Field({ nullable: false })
    active: boolean;

    @Field()
    costGroup: CostGroup["name"];
    
    @Field()
    cost: CostGroup["cost"];

    @Field()
    sell: number;

    @Field()
    retail: number;

    @Field()
    royalty: Royalty["value"];

    @Field()
    costOfGoodsSold: number;
}
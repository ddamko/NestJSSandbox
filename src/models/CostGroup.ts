import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CostGroup {

    @Field({ nullable: false })
    name: string;

    @Field({ nullable: false })
    cost: number;

    @Field({ nullable: false })
    description: string;
}
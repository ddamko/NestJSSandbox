import { AnimalLineage } from './entities/AnimalLineage';
import { Animal } from './entities/Animal';
import { Injectable } from '@nestjs/common';
import { getManager, EntityManager, getConnection } from 'typeorm';

@Injectable()
export class AppService {

    private manager: EntityManager;

    constructor() {
        this.manager = getManager();
    }
    
    async addAnimal(bull: Animal, sire: Animal, dam: Animal) {
        const Bull = await this.manager.save(bull);
        const Sire = await this.manager.save(sire);
        const Dam = await this.manager.save(dam);

        const BullToSire = new AnimalLineage({fromAnimal: Bull, toAnimal: Sire, Relationship: 'SIRE'});
        const BullToDam = new AnimalLineage({fromAnimal: Bull, toAnimal: Dam, Relationship: 'DAM'});
        
        console.log(BullToSire);
        await this.manager.save(BullToSire);
        await this.manager.save(BullToDam);
    }

    async getAnimal(name: string) {
        //const bull = await this.manager.findOne(Animal, { ShortName: name });
        //const relations = await this.manager.find(AnimalLineage, { fromAnimal: bull });
        //const parents = await this.manager.findByIds(Animal, [relations[0].toAnimalId, relations[1].toAnimalId])
        //console.log(res);
    }
}

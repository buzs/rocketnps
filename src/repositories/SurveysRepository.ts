import { EntityRepository, Repository } from "typeorm";

import { Survey } from "../models";

@EntityRepository(Survey)
export class SurveysRepository extends Repository<Survey> {
    
}

export default SurveysRepository
import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/usesCases/createSpecification/CreateSpecificationUseCase';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
    
});

export { specificationsRoutes }
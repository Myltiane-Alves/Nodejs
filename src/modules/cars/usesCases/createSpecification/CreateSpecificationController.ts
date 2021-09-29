import { Request, Response } from 'express';

class CreateSpecificationController {
    handle(request: Request, response: Response): Response {
        const { name, description} = request.body;
    const createSpecificationService = new CreateSpecificationService(
     specificationsRepository
    );

    createSpecificationService.execute({ name, description});

    return response.status(201).send();
    }
}

export { CreateSpecificationController}
import {Request, Response} from 'express';
import {CarService} from './car.service';

export class CarController {
    public static getCars(req: Request, res: Response) {
        const cars = CarService.getAll();
        res.send(cars);
    }

    public static getByMakeName(req: Request, res: Response) {
        // TODO: Please return all cars for the provided make, sorted by price
        const cars = CarService.getByMakeName(req.params.makeName);
        res.setHeader('Access-Control-Allow-Origin','*');
        res.send(cars);
    }
}

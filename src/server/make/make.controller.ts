import {Request, Response} from 'express';
import {MakeService} from './make.service';

export class MakeController {
    public static getMakes(req: Request, res: Response) {
        const makes = MakeService.getAll();
        res.setHeader('Access-Control-Allow-Origin','*')
        res.send(makes);
    }
}

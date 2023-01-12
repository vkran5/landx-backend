import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { EntityNotFoundError } from "typeorm";

@Catch(EntityNotFoundError)
export class EntityNotFoundTask implements ExceptionFilter {
    catch(error: EntityNotFoundError, host: ArgumentsHost) {
        const res = host.switchToHttp().getResponse();
        res.status(HttpStatus.NOT_FOUND).json({
            statusCode :  HttpStatus.NOT_FOUND,
            message: 'Not found'
        })
    }
};
// express is the framework we're going to use to handle requests
import express, { Request, Response, Router } from 'express';

// retrieve the router object from express
const helloRouter: Router = express.Router();

/**
 * @api {get} /hello Request a Hello World message
 * @apiName GetHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP GET methods when requesting a resource from
 * an http server/service. The HTTP GET maps to the (R - read) in the acronym CRUD for the
 * common operations performed on a database.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a GET request"
 */
helloRouter.get('/', (request: Request, response: Response) => {
    response.send({
        message: 'Hello, you sent a GET request',
    });
});

/**
 * @api {post} /hello Request a Hello World message
 * @apiName PostHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP POST methods when creating a new resource on
 * an http server/service. The HTTP POST maps to the (C - create) in the acronym CRUD for the
 * common operations performed on a database. POST methods are NOT idempotent meaning
 * the request may cause side-effects. Think: creating a new resource with an auto-incrementing
 * id.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a POST request"
 */
helloRouter.post('/', (request: Request, response: Response) => {
    response.send({
        message: 'Hello, you sent a POST request',
    });
});

/**
 * @api {put} /hello Request a Hello World message
 * @apiName PutHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP PUT methods when replacing an existing resource on
 * an http server/service. The HTTP PUT somewhat maps to the (U - update) in the acronym
 * CRUD for the common operations performed on a database. PUT methods are idempotent meaning
 * meaning the intended effect on the server of making a single request is the same
 * as the effect of making several identical requests.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a PUT request"
 */
helloRouter.put('/', (request: Request, response: Response) => {
    response.send({
        message: 'Hello, you sent a PUT request',
    });
});

/**
 * @api {patch} /hello Request a Hello World message
 * @apiName PatchHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP PATCH methods when altering/changing an existing resource on
 * an http server/service. The HTTP PATCH somewhat maps to the (U - update) in the acronym
 * CRUD for the common operations performed on a database.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a PATCH request"
 */
helloRouter.patch('/', (request: Request, response: Response) => {
    response.send({
        message: 'Hello, you sent a PATCH request',
    });
});

/**
 * @api {delete} /hello Request a Hello World message
 * @apiName DeleteHello
 * @apiGroup Hello
 *
 * @apiDescription TL;DR Use the HTTP DELETE methods when deleting an existing resource on
 * an http server/service. The HTTP DELETE maps to the (D - delete) in the acronym CRUD for the
 * common operations performed on a database.
 *
 * @apiSuccess {String} message the String: "Hello, you sent a DELETE request"
 */
helloRouter.delete('/', (request: Request, response: Response) => {
    response.send({
        message: 'Hello, you sent a DELETE request',
    });
});

// Make the router object visible to outside modules
export { helloRouter };

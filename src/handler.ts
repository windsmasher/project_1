import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<any> => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, world!" }),
    };
};
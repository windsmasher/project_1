import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// Define a simple endpoint
fastify.get('/', async (request, reply) => {
    return '<h1>Hello, world by Wind-smasher.</h1>';
});

// Define another endpoint for /list
fastify.get('/list', async (request, reply) => {
    return {
        data: [
            { id: 1, name: 'Item 1', description: 'This is the first item.' },
            { id: 2, name: 'Item 2', description: 'This is the second item.' },
            { id: 3, name: 'Item 3', description: 'This is the third item.' },
        ],
    };
});

// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        console.log('Server is running on http://0.0.0.0:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// Define a simple endpoint
fastify.get('/', async (request, reply) => {
    return { message: 'Hello, world by Wind-smasher.' };
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
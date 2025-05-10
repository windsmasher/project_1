import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// Register routes
function registerRoutes() {
    // Root endpoint
    fastify.get('/', async (request, reply) => {
        return '<h1>Hello, world by Wind-smasher.</h1>';
    });

    // List endpoint
    fastify.get('/list', async (request, reply) => {
        return {
            data: [
                { id: 1, name: 'Item 1', description: 'This is the first item.' },
                { id: 2, name: 'Item 2', description: 'This is the second item.' },
                { id: 3, name: 'Item 3', description: 'This is the third item.' },
            ],
        };
    });
}

// Initialize the application
function startServer() {
    registerRoutes();

    // Start the server
    fastify.listen({ port: 3000 }, (err, address) => {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        fastify.log.info(`Server running at ${address}`);
    });
}

// Start the server
startServer();
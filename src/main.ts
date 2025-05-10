import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// Register routes
function registerRoutes() {
    // Root endpoint
    fastify.get('/', async (request, reply) => {
        return 'Hello, world by Wind-smasher.';
    });
}

// Initialize the application
function startServer() {
    registerRoutes();

    // Start the server
    fastify.listen({ port: 3000, host: '0.0.0.0' })
        .then(() => {
            console.log('Server is running on port 3000');
        })
        .catch(err => {
            fastify.log.error(err);
            process.exit(1);
        });
}

// Start the server
startServer();
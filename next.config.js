module.exports = {
    // Other Next.js configurations...

    // Add the output configuration
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            // Add other paths/routes you need to export
        };
    },

    images: {
        domains: ['randomuser.me'],
    },
};

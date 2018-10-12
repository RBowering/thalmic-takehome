const config = require('./config/config.init.js');

const server = require('./server/server.js');

const PORT = config.get('port');
server.listen(PORT, () => {
	console.log('——————————————————————————————');
	console.log(`Server running on port:${PORT} 🚀 `);
});
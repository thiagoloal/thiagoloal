const express = require('express');
const bodyParser = require('body-parser');
const stylus = require('express-stylus');
const nib = require('nib');
const product = require('./routes/product.route');

// Controllers

const publicDir = `${__dirname}/public`;
const app = express();


app.use('/products', product);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './src/view');

app.use(stylus({
	src: publicDir,
	use: [nib()],
	import: ['nib'],
}));


app.use(express.static(publicDir));


const port = 3000;

app.listen(port, () => {
	console.log(`Server is up and running on port numner ${port}`);
});

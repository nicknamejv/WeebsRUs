// NOTE: External Modules
const express = require('express');
const app = express();
const PORT = 4000;

// NOTE: Models
const { Video }  = require('./models');

// NOTE: Internal Modules
const controllers = require('./controllers');

// NOTE: App Config
app.set('view engine', 'ejs');


// NOTE: INDEX Route
app.get('/index', (req, res) => {
    Video.find({}, (error, allVideo) => {
        const context = {
            videos: allVideo,
        };

        return res.render('videos/index', context);
    });
});

// NOTE: CREATE Route
app.post('/new', (req, res) => {
    res.send('This is a CREATE route!');
});

// NOTE: SHOW Route 
app.get('/video/:id', (req, res) => {
    res.send('This is the SHOW page');
});

// NOTE: EDIT Route
app.get('/video/:id/edit', (req, res) => {
    res.send('This is the EDIT page');
});

// NOTE: UPDATE Route
app.put('/video/:id', (req, res, next) => {
    res.send('This is the UPDATE page');
    next();
});

// NOTE: DESTROY Route
app.delete('/video/:id', (req, res) => {
    res.send('This is the DESTROY page');
});




// SECTION: Controller Files 
// app.use('/video', controllers.video);

app.listen(PORT, () => {
    console.log(`I live on port ${PORT}`);
});

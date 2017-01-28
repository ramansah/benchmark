var appRouter = function(app) {
 
    app.get("/person", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ 'name': 'Raman Sah', 'age': 22 }));
    });
 
}
 
module.exports = appRouter;



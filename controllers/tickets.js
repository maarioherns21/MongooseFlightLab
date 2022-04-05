const Ticket = require("../models/ticket");
const Flight = require("../models/flight");


module.exports = {
  new: newTicket,
  addToTicket
};


function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("tickets/new", {
        flight
    });
  });
}


function addToTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        req.body.flight = req.params.id
        Ticket.create(req.body, function(err, ticket) {
          res.redirect(`/flights/${req.params.id}`);
    });
  });
}

const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};

function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({ flightdb: flight._id }, function(err, tickets) {
			res.render('flights/show', {flight,tickets: tickets, airline: 'Flight Detail'});
		});
	});
}

function newFlight(req, res) {
  res.render("flights/new", { airline: "Add Flight" });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", {
      flights,
      airline: "All Airlines",
    });
  });
}

function create(req, res) {
  req.body.arriving = !!req.body.arriving;

  const flight = new Flight(req.body);
  flight.save(function (err) {
    console.log(err, " this err");
    if (err) return res.redirect("/flights/new");
    console.log(flight);

    res.redirect("/flights");
  });
}

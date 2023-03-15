const express = require("express")
const router = express.Router() // invoke router function
const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require("../controllers/people")

// router.get("/", getPeople)

// router.post("/", createPerson)

router.route("/").get(getPeople).post(createPerson) // you could do this for similar routes

router.post("/postman", createPersonPostman)

// router.put("/:id", updatePerson)

// router.delete("/:id", deletePerson)

router.route("/:id").put(updatePerson).delete(deletePerson)

module.exports = router
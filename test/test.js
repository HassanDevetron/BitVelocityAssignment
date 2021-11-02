const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;
const app = require("../app");


describe("BtcOrder controller", () => {
	before(()=> {
	})

	after(()=> {	
	})

	beforeEach(()=> {
	})

	afterEach(()=> {
	})

    it("should display btc orders", async ()=> {
        const response = await request(app)
        .get("/api//displayBtc")
        .expect(200)
        .expect("Content-Type", /json/);
        //expect(true).to.be.true;
	})
})

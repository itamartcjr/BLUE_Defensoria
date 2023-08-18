import { NextApiRequest, NextApiResponse } from "next";
import servicesApi from "../pages/api/services";
import servicesData from "../data/services.json";

describe("Services API", () => {
    it("should return services data and a status code of 200", async () => {
        const req = {} as NextApiRequest; // Mocking the request object
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as unknown as NextApiResponse; 

        await servicesApi(req, res); // Call the API handler

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(servicesData);
    });
});

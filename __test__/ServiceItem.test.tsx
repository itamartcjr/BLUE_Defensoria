import servicesData from "../data/services.json";

describe("ServiceItem component tests", () => {
    const allStatuses = ["up", "warning", "error"];

    servicesData.forEach(service => {
        it(`should have a valid status for '${service.service}'`, () => {
            const isValidStatus = allStatuses.includes(service.status);
            expect(isValidStatus).toBeTruthy();
        });
    });
});

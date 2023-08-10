import { data } from "./index"; // Atualize com o caminho correto para o seu arquivo de dados

describe("data tests", () => {
  it("should have id property for each item", () => {
    data.forEach((item) => {
      expect(item).toHaveProperty("id");
    });
  });

  it("should have status as up, warning or error for each item", () => {
    data.forEach((item) => {
      expect(["up", "warning", "error"]).toContain(item.status);
    });
  });

  it("should not have duplicate services", () => {
    const services = data.map((item) => item.service);
    const uniqueServices = new Set(services);

    expect(services.length).toBe(uniqueServices.size);
  });
});

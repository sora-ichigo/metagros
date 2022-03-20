import { snakeCase } from "./utils";

describe("snakeCase", () => {
  it("camelCase to snake_case", () => {
    const strCamel = "hogeFuga";
    const strSnake = snakeCase(strCamel);

    expect(strSnake).toBe("hoge_fuga");
  });

  it("snake_case to snake_case", () => {
    const strCamel = "hoge_fuga";
    const strSnake = snakeCase(strCamel);

    expect(strSnake).toBe("hoge_fuga");
  });
});

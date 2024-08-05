const validateUserAndPassword = require("./usuario");

describe("Usuario com menos de 5 caracteres", () => {
  test("Usuario inválido", () => {
    const resultado = validateUserAndPassword("User", "MATHEUS");
    expect(resultado).toEqual({
      message: "Nome de usuário deve ter pelo menos 5 caracteres.",
      valid: false,
    });
  });
});

describe("Usuario que já existe 1 tentativa", () => {
  test("Usuario inválido", () => {
    const resultado = validateUserAndPassword("user1", "MATHEUS");
    expect(resultado).toEqual({
      message: "Nome de usuário já existe.",
      valid: false,
    });
  });
});

describe("Usuario que já existe 2 tentativa", () => {
  test("Usuario inválido", () => {
    const resultado = validateUserAndPassword("user2", "MATHEUS");
    expect(resultado).toEqual({
      message: "Nome de usuário já existe.",
      valid: false,
    });
  });
});

describe("Usuario que já existe 3 tentativa", () => {
  test("Usuario inválido", () => {
    const resultado = validateUserAndPassword("user3", "MATHEUS");
    expect(resultado).toEqual({
      message: "Nome de usuário já existe.",
      valid: false,
    });
  });
});

describe("Senha com apenas maiúsculas sem 8 caracteres", () => {
  test("Verificar senha muito fraca", () => {
    const resultado = validateUserAndPassword("Usuario", "MATHEUS");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Muito Fraca",
      valid: false,
    });
  });
});

describe("Senha com apenas 8 caracteres", () => {
  test("Verificar senha muito fraca", () => {
    const resultado = validateUserAndPassword("Usuario", "12345678");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Muito Fraca",
      valid: false,
    });
  });
});

describe("Senha com maiúsculas e minusculas sem 8 caracteres", () => {
  test("Verificar senha fraca", () => {
    const resultado = validateUserAndPassword("Usuario", "MaThEuS");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Fraca",
      valid: false,
    });
  });
});

describe("Senha com minusculas e caracter especial sem 8 caracteres", () => {
  test("Verificar senha fraca", () => {
    const resultado = validateUserAndPassword("Usuario", "mateus@");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Fraca",
      valid: false,
    });
  });
});

describe("Senha com maiusculas e caracter especial sem 8 caracteres", () => {
  test("Verificar senha fraca", () => {
    const resultado = validateUserAndPassword("Usuario", "MATEUS@");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Fraca",
      valid: false,
    });
  });
});

describe("Senha com 8 caracteres e caracter especial", () => {
  test("Verificar senha fraca", () => {
    const resultado = validateUserAndPassword("Usuario", "12345678@");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Fraca",
      valid: false,
    });
  });
});

describe("Senha com 8 caracteres e letras minusculas", () => {
  test("Verificar senha média", () => {
    const resultado = validateUserAndPassword("Usuario", "matheus12345678");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Fraca",
      valid: false,
    });
  });
});

describe("Senha com 8 caracteres e letras maiusculas", () => {
  test("Verificar senha média", () => {
    const resultado = validateUserAndPassword("Usuario", "MATHEUS12345678");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Fraca",
      valid: false,
    });
  });
});

describe("Senha com minusculas e caracter especial com 8 caracteres", () => {
  test("Verificar senha média", () => {
    const resultado = validateUserAndPassword("Usuario", "matheus@");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Média",
      valid: false,
    });
  });
});

describe("Senha com maiusculas e caracter especial com 8 caracteres", () => {
  test("Verificar senha média", () => {
    const resultado = validateUserAndPassword("Usuario", "MATHEUS@");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Média",
      valid: false,
    });
  });
});


describe("Senha com maiusculas, minusculas e caracter especial sem 8 caracteres", () => {
  test("Verificar senha média", () => {
    const resultado = validateUserAndPassword("Usuario", "MaTeUs@");
    expect(resultado).toEqual({
      message:
        "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e caracteres especiais.",
      strength: "Média",
      valid: false,
    });
  });
});

describe("Senha com maiusculas, minusculas e caracter especial com 8 caracteres", () => {
  test("Verificar senha média", () => {
    const resultado = validateUserAndPassword("Usuario", "MaThEuS@");
    expect(resultado).toEqual({
      message: "Usuário e senha válidos.",
      strength: "Forte",
      valid: true,
    });
  });
});

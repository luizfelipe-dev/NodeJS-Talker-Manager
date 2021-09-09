3 - Crie o endpoint POST /login
Os seguintes pontos serão avaliados:
O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.

O endpoint deverá retornar um código de status 200 com o token gerado, com o seguinte corpo:
{
  "token": "7mqaVRXJSp886CGr"
}
O corpo da requisição deverá ter o seguinte formato:

{
  "email": "email@email.com",
  "password": "123456"
}
O campo email deverá ser um email válido. Ele é obrigatório.

Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:

{
  "message": "O campo \"email\" é obrigatório"
}
Caso o email passado não seja um email válido retorne um código de status 400, com o seguinte corpo:

{
  "message": "O \"email\" deve ter o formato \"email@email.com\""
}

O campo password deverá ter pelo menos 6 caracteres.

Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:

{
  "message": "O campo \"password\" é obrigatório"
}

Caso a senha não tenha pelo menos 6 caracteres retorne um código de status 400, com o seguinte corpo:

{
  "message": "O \"password\" deve ter pelo menos 6 caracteres"
}
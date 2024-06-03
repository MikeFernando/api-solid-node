### App

Gympass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar
- [] Deve ser possível se autenticar
- [] Deve ser possível obter o perfl de um usuário logado
- [] Deve ser possível obter o numero de check-ins realizados pelo usuário
- [] Deve ser possível obter o usuário obter o seus histórico de check-ins
- [] Deve ser possível o usuário buscar academias próximas
- [] Deve ser possível o usuário buscar academias pelo nome
- [] Deve ser possível o usuário fazer check-in em uma academia
- [] Deve ser possível validar o check-in de um usuário
- [] Deve ser possível cadastrar uma academia

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com email duplicado
- [] O usuário não pode fazer 2 check-ins no mesmo dia
- [] O usuário não pode fazer check-in se não tiver perto (100) metros da academia
- [] O check-in só pode ser validado até 20 minutos após criado
- [] O check- in só pode ser validado por administradores
- [] A academia só pode ser cadastradas por administradores

## RNFs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisa estar persistidos em um banco PostgresSQL
- [] Todas as listas de dados precisam estar paginadas com 20 items por página
- [] O usuário deve ser identificado por um JWT (JSON Web Token)

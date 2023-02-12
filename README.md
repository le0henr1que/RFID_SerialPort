# RFID Serial Port
[![GitHub issues](https://img.shields.io/github/issues/le0henr1que/RFID_SerialPort.svg)](https://github.com/le0henr1que/RFID_SerialPort/issues)
[![GitHub forks](https://img.shields.io/github/forks/sle0henr1que/RFID_SerialPort.svg)](https://github.com/le0henr1que/RFID_SerialPort/network)

Este projeto combina o poder do Arduino com o módulo RFID para criar uma solução interativa e baseada em web para a leitura de tags. Utilizando a biblioteca RFID, o Arduino é capaz de ler os dados armazenados na tag e transmiti-los para um servidor web via websocket. A partir daí, os dados podem ser manipulados e exibidos em uma página web dinâmica, fornecendo uma interface amigável para o usuário final.

Além disso, a combinação de websocket com a tecnologia Arduino permite que a página web seja atualizada em tempo real, sem a necessidade de recarregamento da página, tornando a interação com os dados armazenados na tag muito mais fluida.

Este projeto pode ser utilizado em uma variedade de aplicações, desde sistemas de segurança até sistemas de gerenciamento de estoques, permitindo a leitura de tags RFID de forma rápida e precisa. Se você está procurando por uma maneira fácil e eficiente de trabalhar com tags RFID, este projeto no Github pode ser exatamente o que você precisa.

## 📋 Pré-requisitos

1. Arduino UNO.
2. Modulo RFID.
3. Cabos Jumper macho-macho.

## 🚀 Execução

Clone o repositorio localmente e execute as etapas:
1. Monte o esquema de ligação em seu arduino com seu modulo RFID:
### 📋 Esquema de Ligação
![image](https://user-images.githubusercontent.com/68018921/218335912-68327bfa-0b47-4196-8694-d2b3f52784a2.png)<br>
https://blogmasterwalkershop.com.br/arduino/como-usar-com-arduino-kit-rfid-mfrc522

2. Conecte seu Arduino em uma porta USB execute o verify, caso a verificação seja executada com sucesso, faça o upload do código 
./sketch_feb10a/ketch_feb10a.ino em seu arduino.

3. Execute o comando `yarn` para fazer a instalção dos pacotes necessários para execução do projeto.

4. Execute o comando `yarn start` para iniciar o projeto.

5. Abra em seu navegador `http://localhost:500` e aproxime a tag do leitor RFID.







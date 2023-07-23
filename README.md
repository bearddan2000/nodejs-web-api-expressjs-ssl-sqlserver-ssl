# nodejs-web-api-expressjs-ssl-sqlserver-ssl

## Description
A POC project for express api with ssl.

Sql server uses self-signed ssl.

## Tech stack
- expressjs
- mssql

## Docker stack
- alpine:edge
- alpine:edge
- node:latest
- mcr.microsoft.com/mssql/server:2017-CU17-ubuntu

## To run
`sudo ./install.sh -u`
https://localhost/dogs

## To stop (optional)
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`
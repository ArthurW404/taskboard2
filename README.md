# TaskBoard 2

Second iteration of I'm Board taskboard which uses MERN stack (Decision to use MongoDB may change in future).

## features

- task/issue tracking
- multi user (shared) boards
- user accounts for private or shared boards
- everything version 1 can do and more

## Authentication and Authorisation

- Using JWT for authorisation

## lessons learnt from first version

- not seperating client (frontend) and server (backend) resulted in difficulty in changing frontend
  - plans to change front end to react resulted in many difficulties, with backend requiring a lot of change
  - by having a completely seperated client server, much easier to have multiple frontends (i.e. mobile, web, desktop application)
- Using classes for majority of data in backend made it difficult for non python frontends (version 1 used python's Jinja library)
  - needed to convert complex objects into json to send to frontend
  - more difficult to map custom classes into relational databases

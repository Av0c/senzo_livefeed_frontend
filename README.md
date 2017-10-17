# senzoit-client
[![Build Status](https://travis-ci.com/futurice/senzoit-client.svg?token=BRx1HAvqoyzqoE9PVYCU&branch=develop)](https://travis-ci.com/futurice/senzoit-client)
User client for Senzoit office space utilization solution.

# Installing
1. Download NodeJS.
2. Clone code from this repository 
3. Run `npm install` to install dependencies
4. Run `npm start` to start local development server
5. Access localhost:1337 to connect to the development server

# Deployment
1. All code committed to Develo branch will be automatically deployed to http://senzoit-dev.s3-website.eu-central-1.amazonaws.com/ with Travis
2. All code committed to Master branch will be automatically deployed to http://senzoit-production.s3-website.eu-central-1.amazonaws.com/ with Travis
3. NOTE: This server setup including urls and such might change in the future, this is the current situation.

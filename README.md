# Analytiq - Slack Bot

This container hosts a slack bot that helps answer financial queries such as (but not limited to):

- What is the current price of stock XXX?
- What was the price of stock XXX yesterday?
- What are the current market projections for stock XXX?
- What is recent news for stock XXX?


## Getting Started

- Clone this repository
- Rename `.env.sample` to `.env`
- Replace the contents of `token` with your slackbot API token, for more information see the [slack documentation](https://api.slack.com/bot-users)
- Replace the contents of `api_key`  with your Alpha Vantage API Key. 

### Prerequisities


In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

An API key from Alpha Vantage

* [Alpha Vantage](https://www.alphavantage.co/documentation/)

### Usage

#### Container Parameters

- Build

```shell
docker build -t analytiq .
```

- How to open a shell inside the analytiq image

```shell
docker run analytiq bash
```

- Run it in detached mode (in the background)

```shell
docker run -d analytiq
```

- Run it in interactive mode

```shell
docker run -it analytiq
```

#### Environment Variables

* `token` - A token for a bot user 
* `api_key` - An API Key from Alpha Vantage (Any tier)

#### Volumes

* TBD

#### Useful File Locations

* `index.js` - Main application code
* `services/*.js` - Microservices based on the alpha vantage API

## Built With

```Dockerfile
FROM node:12-slim

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

CMD ["npm", "start"]
```

## Find Us

* [GitHub](https://github.com/desainis/analytiq)
* [Quay.io](coming-soon)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the 
[tags on this repository](https://github.com/your/repository/tags). 

## Authors

* **Nishant Desai** - *Initial work* - [Analytiq](https://github.com/desainis/analytiq)

See also the list of [contributors](https://github.com/desainis/analytiq/contributors) who 
participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Alpha Vantage API
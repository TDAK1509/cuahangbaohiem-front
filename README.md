## SETUP

Create `.env`

```
$ cp .env.sample .env
```

Then update the `.env` file with correct values.

## Development

```bash
# install dependencies
$ yarn install

# install firebase-tools
$ yarn global add firebase-tools

# serve with hot reload at localhost:3000
$ yarn dev

# run another terminal for Firestore service
$ yarn backend
```

## Test

#### Unit Test

```bash
$ yarn test
```

Watch mode:

```bash
$ yarn test --watch
```

#### E2E Test

- Step 1: Serve frontend and backend

```bash
# Serve in localhost first
$ yarn dev

# And then serve Firestore service
$ yarn backend
```

- Step 2: Run E2E

```bash
$ yarn e2e

# Or in headless mode
$ yarn e2e:headless
```

**Notes: can run E2E without backend for one shot (only `yarn dev` is required)**

```bash
$ yarn e2e:onetime
```

## Deploy

#### Install `netlify-cli`

Learn more about `netlify-cli` https://docs.netlify.com/cli/get-started/.

```bash
# Install netlify cli
$ yarn global add netlify-cli

# Login netlify
$ netlify login
```

#### Deploy to Netlify

```bash
$ yarn deploy
```

This command will run `yarn lint` and `yarn generate` and then deploy to Netlify for this domain https://cuahangbaohiem.com.

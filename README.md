## Development

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
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

```bash
# Serve in localhost first
$ yarn dev

# Open cypress for E2E tests
$ yarn e2e

# Or in headless mode
$ yarn e2e:headless
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

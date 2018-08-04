WEBPACK=yarn webpack-cli
BROWSER_SYNC=yarn browser-sync
JEST=yarn jest
ESLINT=yarn eslint
STYLELINT=yarn stylelint
FLOW=yarn flow
LINT_STAGED=yarn lint-staged

default: build

.PHONY: setup-development
setup-development:
	yarn install
	make build-development

.PHONY: build
build:
	$(WEBPACK) --mode production

.PHONY: build-development
build-development:
	$(WEBPACK) --mode development

.PHONY: watch
watch:
	$(WEBPACK) --watch --mode development

.PHONY: start
start:
	$(BROWSER_SYNC) --config bs-config.js start

.PHONY: test
test:
	$(JEST) -c jest.json

.PHONY: test-watch
test-watch:
	$(JEST) -c jest.json --watch

.PHONY: lint
lint:
	$(ESLINT) --fix 'src/js/**/*.js'
	$(STYLELINT) --fix 'src/css/**/*.css'

.PHONY: flow
flow:
	$(FLOW) check src

.PHONY: precommit
precommit:
	$(LINT_STAGED)
	make flow

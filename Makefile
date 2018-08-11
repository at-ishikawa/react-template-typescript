WEBPACK=yarn webpack-cli
BROWSER_SYNC=yarn browser-sync
JEST=yarn jest
TSLINT=yarn tslint
PRETTIER=yarn prettier
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
	$(WEBPACK) -p --mode production

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
	$(JEST)

.PHONY: test-watch
test-watch:
	$(JEST) --watch

.PHONY: lint
lint:
	$(TSLINT) --fix 'src/js/**/*.ts' 'src/js/**/*.tsx'
	$(STYLELINT) --fix 'src/css/**/*.css'

.PHONY: prettier
prettier:
	$(PRETTIER) --write src/js/**/*.{ts,tsx}

.PHONY: precommit
precommit:
	$(LINT_STAGED)

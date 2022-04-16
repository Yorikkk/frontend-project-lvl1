install: # Install packages
	npm ci

brain-games: # Run game
	node bin/brain-games

publish: # Publish in NPM
	npm publish --dry-run

lint: # Lint repo
	npx eslint .

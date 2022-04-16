install: # Install packages
	npm ci

publish: # Publish in NPM
	npm publish --dry-run

lint: # Lint repo
	npx eslint .

brain-games: # Run game
	node bin/brain-games

brain-even: # Run game "Check is even"
	node bin/brain-even

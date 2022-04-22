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

brain-calc: # Run game "Result of expression"
	node bin/brain-calc

brain-gcd: # Run game "Greates common divisor"
	node bin/brain-gcd
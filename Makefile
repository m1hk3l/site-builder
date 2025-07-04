up:
	docker compose up --build

down:
	docker compose down

vite-install:
	docker compose exec vite npm install

vite-build:
	docker compose exec vite npm run build

vite-dev:
	docker compose exec vite npm run dev

migrate:
	docker compose exec wagtail python manage.py migrate

shell:
	docker compose exec wagtail bash
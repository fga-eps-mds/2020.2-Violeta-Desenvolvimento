#!/user/bin/env ash


wait_ready() {
echo "Aguardando o $1 na porta $2"
until nc -z $1 $2 ; do
		sleep 1
done
}

wait_ready db 5432
exec python3 manage.py makemigrations &
exec python3 manage.py migrate &
exec python3 manage.py loaddata db.json &
exec python3 manage.py runserver 0.0.0.0:8001

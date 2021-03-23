#!/user/bin/env ash


wait_ready() {
echo "Aguardando o $1 na porta $2"
until nc -z $1 $2 ; do
		sleep 1
done
}

exec python3 manage.py runserver 0.0.0.0:8001

#!/user/bin/env ash

POSTGRES_PORT="5432"
FRONTEND_PORT="3000"

wait_ready() {
echo "Aguardando o $1 na porta $2"
until nc -z $1 $2 ; do
		sleep 1
done
}

wait_ready db $POSTGRES_PORT
exec python3 manage.py runserver 0.0.0.0:8003

FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=nuxt_blog_app \
  MYSQL_USER=OtaKensuke \
  MYSQL_PASSWORD=secret \
  MYSQL_ROOT_PASSWORD=secret \
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/my.cnf
RUN chmod 644 /etc/my.cnf
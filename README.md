# Sequelize

## 설치
### 1. 기존 Global 설치 프로그램들
```bash
# - Application
# npm i -g @vue/cli : vue ui
# npm i -g firebase-tools : firebase init, deploy
# npm i -g nodemon : nodemon app.js
# npm i -g supervisor : supervisor  app.js
# npm i -g express-generator : express --view=pug projectName

# - module
# npm i mysql2 dotenv ...
```
### Sequelize 설치
1. Global 설치: sequelize-cli
2. Project 설치: sequelize, DB-tool(mysql2)

```bash
# sequelize 세팅
sequelize init
```
### 세팅 후 폴더별 기능 설명
1. config : dotenv
2. migrations: 테이블 수정을 자동으로 진행
3. models: 테이블들의 모임
4. seeders: bundle data - DummyData 만들기

### MySQL 5.x vs 8.x 사용자 생성 쿼리
```sql
-- MySQL 5.x
grant all privileges on board.* to 'board'@'%' identified by '000000';
flush privileges;

-- MySQL 8.x
create user 'board'@'%' identified by '000000';
grant all privileges on board.* to 'board'@'%' with grant option;
flush privileges;
```

### Sequelize 관계설정
- hasOne(), hasMany(), belongsTo(), belongsMany()
- 1 : 1
  - User.handOne('UserInfo')
  - UserInfo.belongsTo('User')
- 1 : 다
  - User.handMany('Board')
  - Board.belongsTo('User')
- 다 : 다
  - Category.handMany('Product')
  - Product.belongsMany('Category')
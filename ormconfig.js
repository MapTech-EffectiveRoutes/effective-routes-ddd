module.exports = {
  name: 'default',
  type: 'mysql',
  url: 'mysql://root:root@localhost:3306/notificaciones',
  synchronize: true,
  migrationsRun: true,
  logging: true,
  timezone: '+0',
  bigNumberStrings: false,
  entities: ['dist/domain-bbom/entities/*.js'],
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  dropSchema: false,
};

server 'internals-p1.production.devguru.co',
  {
    user: 'deploy',
    roles: %w[web db assets],
  }

set :branch, 'production'
set :deploy_to, "/home/deploy/apps/#{fetch(:application)}"

set :capose_commands, ["build", "up -d"]

lock "3.8.1"

set :application, "design-process"
set :repo_url, "git@github.com:netguru/design-process.git"
set :deploy_to, -> { "/home/deploy/apps/#{fetch(:application)}" }

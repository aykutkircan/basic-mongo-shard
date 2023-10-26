#!/bin/bash

export COMPOSE_PROJECT_NAME=docker

# Capture parameters
option=$1

# Process based on the --volumes option
if [ "$option" = "--volumes" ]; then
  docker-compose --file "docker-compose.yaml" down --volumes
  rm -rf "./mongo-shard-scripts/mongodb.key"
  rm -rf "./data"
else
  docker-compose --file "docker-compose.yaml" down
fi

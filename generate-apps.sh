
#!/bin/bash

# generate jhipster microservices
jhipster import-jdl jhipster-istio-demo.jdl

# build docker images
cd store && mvn verify -DskipTests -Pprod jib:dockerBuild && cd ..
cd accountancy && mvn verify -DskipTests -Pprod jib:dockerBuild && cd ..

docker image tag store pbesson/store:latest
docker push pbesson/store:latest
docker image tag accountancy pbesson/accountancy:latest
docker push pbesson/accountancy:latest

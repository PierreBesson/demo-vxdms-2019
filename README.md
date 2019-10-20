# JHipster & Kubernetes microservice demo

## Generate all the code with JHipster

Run:
    jhipster import-jdl jhipster-istio-demo.jdl

## Build docker images

In the `accountancy` and `store` directories, package the apps as jars and build the docker image (skip the tests if you don't want to die from boredom):

    ./mvnw package -DskipTests -Pprod jib:dockerBuild

## Local development

Start all the apps locally with:

- `docker-compose -f store/src/main/docker/jhipster-registry.yml up -d`
- `./mvnw` and `yarn start` for the gateway
- `./mvnw` for the microservices
- `docker-compose -f accountancy/src/main/docker/mongodb.yml up -d` (required for MongoDB)

## Deployment to a single host with docker-compose

For convenience, I have already pushed the images to the docker hub (pbesson/store, pbesson/accountancy and pbesson/crm).

- `cd docker && docker-compose up -d`

## Deployment to a Kubernetes cluster

If you don't have a kubernetes cluster, the easiest and fastest way to test is by using Kind (Kubernetes IN Docker). See[https://kind.sigs.k8s.io/docs/user/quick-start/](https://kind.sigs.k8s.io/docs/user/quick-start/)

Simply run : `cd kubernetes && ./kubectl-apply.sh` to create the resources in the `jhipster` namespace of your kubernetes cluster.
Then:

- Switch to the jhipster namespace: `kubectl config set-context $(kubectl config current-context) --namespace=jhipster`
- See the available Kubernetes services: `kubectl get svc`
- Scale the number of replica of the crm service by editing the `replica` yaml field and reapplying the conf.

## Observability with Istio

Open a port-forward to Kiali:

    kubectl -n istio-system port-forward $(kubectl -n istio-system get pods -lapp=kiali -o=jsonpath="{.items[0].metadata.name}") 20001

Open a port-forward to Zipkin:

    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=zipkin -o jsonpath='{.items[0].metadata.name}') 9411

Open a port-forward to Grafana:

    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}') 3000

- Kiali : [http://localhost:20001/kiali](http://localhost:20001/kiali)
- Zipkin : [http://localhost:9411](http://localhost:9411)
- Grafana : [http://localhost:3000](http://localhost:3000)

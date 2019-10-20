#!/bin/bash
# Files are ordered in proper order with needed wait for the dependent custom resource definitions to get initialized.
# Usage: bash kubectl-apply.sh

logSummary(){
    echo ""
    echo "#####################################################"
    echo "Please find the below useful endpoints,"
    echo "Gateway - http://store.jhipster.jhipster.35.241.183.73.nip.io"
    echo "Jaeger - http://jaeger.istio-system.jhipster.35.241.183.73.nip.io"
    echo "Grafana - http://grafana.istio-system.jhipster.35.241.183.73.nip.io"
    echo "Kiali - http://kiali.istio-system.jhipster.35.241.183.73.nip.io"
    echo "#####################################################"
}

kubectl apply -f namespace.yml
kubectl label namespace jhipster istio-injection=enabled --overwrite=true
kubectl apply -f store/
kubectl apply -f accountancy/

kubectl apply -f istio/
logSummary

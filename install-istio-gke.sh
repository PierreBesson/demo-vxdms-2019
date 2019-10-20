# You will need istio installed at ~/istio-1.3.3 
# You will also need helm installed

kubectl create clusterrolebinding cluster-admin-binding \
    --clusterrole=cluster-admin \
    --user=$(gcloud config get-value core/account)

kubectl create namespace istio-system
helm template ~/istio-1.3.3/install/kubernetes/helm/istio-init --name istio-init --namespace istio-system | kubectl apply -f -
sleep 30
kubectl get crds | grep 'istio.io' | wc -l

helm template ~/istio-1.3.3/install/kubernetes/helm/istio \
    --name istio \
    --namespace istio-system \
    --values install-istio-params.yml \
    | kubectl apply -f -
